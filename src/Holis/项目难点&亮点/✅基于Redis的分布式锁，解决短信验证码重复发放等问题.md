# ✅基于Redis的分布式锁，解决短信验证码重复发放等问题
<!--page header-->

<a name="kIIiW"></a>
### 背景

项目中，需要实现一个通过短信验证码进行注册的场景，为了这个过程中5分钟只能发放一次验证码，并且验证码发放后可以验证一次的功能，使用了Redis进行存储。

主要是为了避免盗刷，避免资金浪费。

<a name="Jz35o"></a>
### 技术选型

<a name="t0n9D"></a>
#### 验证码生成

验证码的生成，代码中自己可以简单实现一个验证码，发送四位的字母+数字组合即可，这个场景对于全局唯一性要求并不高。也可以用一些开源的验证码生成的框架。

<a name="N1CQX"></a>
#### 短信发送
短信验证码的发放，在阿里云上有很多服务，可以实现短信发送。

[https://www.aliyun.com/search?spm=5176.21213303.J_6704733920.6.34b853c98er6CO&k=%E7%9F%AD%E4%BF%A1%E9%AA%8C%E8%AF%81%E7%A0%81&scene=market&page=1](https://www.aliyun.com/search?spm=5176.21213303.J_6704733920.6.34b853c98er6CO&k=%E7%9F%AD%E4%BF%A1%E9%AA%8C%E8%AF%81%E7%A0%81&scene=market&page=1)


![image.png](./img/HvoYP6JhfNXQOnlx/1693112003377-d243f86d-fc21-4b34-a498-f5de2164bead-443780.png)

对接都很简单，只需要通过HTTP接口调用即可实现短信发送。

<a name="wGqGW"></a>
#### 验证码存储&验证

Redis是一个分布式的缓存，可以把验证码信息临时放到Redis中，借助redis的超时自动删除功能，可以实现5分钟内才能进行验证码的校验的功能。


<a name="iewZW"></a>
#### 防止重复发送

为了防止重复发送，可以在发送验证码的地方，增加一个分布式锁，保证一条消息只会被发送一次。

<a name="dlORN"></a>
### 你做了什么

```
  public void sendSmsVerificationCode(@NotBlank String mobile, @NotBlank String type) {
      String smsSended = redisTemplate.opsForValue().get(getLimitKey(mobile, type));
      if (StrUtil.isNotBlank(smsSended)) {
          throw new BizException("请勿频繁发送验证码");
      }

    	//记录手机号发送过验证码，记录1分钟
      redisTemplate.opsForValue().set(getLimitKey(mobile, type), "1", 60, TimeUnit.SECONDS);
    	//使用hutool的工具生成四位随机验证码
      String verificationCode = RandomUtil.randomStringUpper(4);
    	//把验证码存在Redis中
      redisTemplate.opsForValue().set(type + mobile, verificationCode, 60 * 5, TimeUnit.SECONDS);

    	//构建一条发送记录
      SmsSendRecord smsSendRecord = new SmsSendRecord(mobile, type, verificationCode);
    	//落库保存
      smsSendRecordRepo.save(smsSendRecord);

    	//发送短信验证码
      smsService.sendSms(smsSendRecord)；
  }
```

```
@Service
public class SmsService{
  @Autowired
  RedissonClient redisson;
  
  public void sendSms(SmsSendRecord smsSendRecord) {
  	//加分布式锁
		RLock lock = redisson.getLock("sendSms" + smsSendRecord.getId());
    try {
        lock.lock();
        //短信发送逻辑
    } finally {
      	//解锁
        lock.unlock();
    }
  }
}

```

以上，就是一段简单的，短信验证码发送的功能

以下是简单的验证码验证的逻辑
```

	public Boolean verifySmsCode(LoginParam param) {
  	//从Redis中取出验证码
		String verificationCode = redisTemplate.opsForValue().get(param.getType() + param.getMobile());
    	if(verificationCode ==null){
      	return false;
      }
			if (param.getVerificationCode().equals(verificationCode)) {
      	redisTemplate.delete(param.getType() + param.getMobile());
      	return true;
			}

    	return false;
		}
	}
```

<a name="EgNab"></a>
### 学习资料


[✅分布式锁有几种实现方式？](https://www.yuque.com/hollis666/axzrte/fvnr41?view=doc_embed&inner=CJQP3)

[✅如何用SETNX实现分布式锁？](https://www.yuque.com/hollis666/axzrte/feovxr7gr8ois5yt?view=doc_embed)

[✅什么是RedLock，他解决了什么问题？](https://www.yuque.com/hollis666/axzrte/lxzg0ubs2xpvenxw?view=doc_embed)

[如何用Redisson实现分布式锁？](https://www.yuque.com/hollis666/axzrte/gdsvngueclva39ve?view=doc_embed)

[✅如何用Zookeeper实现分布式锁？](https://www.yuque.com/hollis666/axzrte/bdxuqt775i5zo9kz?view=doc_embed)



<!--page footer-->
- 原文: <https://www.yuque.com/hollis666/axzrte/bk4i6a22gqst4ygi>