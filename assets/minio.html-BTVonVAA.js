import{_ as s,o as a,c as i,d as e}from"./app-Cj6OPNEL.js";const l={};function p(c,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="minio模块" tabindex="-1"><a class="header-anchor" href="#minio模块"><span>Minio模块</span></a></h1><blockquote><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>文件系统也是中心端模式，所以要先部署pangu-storage-minio-server模块</span></span>
<span class="line"><span>server配置文件如下</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>port: 7000</span></span>
<span class="line"><span>servlet:</span></span>
<span class="line"><span>context-path: /pangu-minio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pangu:</span></span>
<span class="line"><span>minio:</span></span>
<span class="line"><span>endpoint: http://10.1.50.231:9000</span></span>
<span class="line"><span>accessKey: panguo</span></span>
<span class="line"><span>secretKey: pango1235</span></span>
<span class="line"><span>#    bucketName: pangu</span></span>
<span class="line"><span># 设置文件请求的最大大小</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>servlet:</span></span>
<span class="line"><span>multipart:</span></span>
<span class="line"><span>max-file-size: 500MB</span></span>
<span class="line"><span>max-request-size: 500MB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>业务端使用</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>引入pangu-storage-minio包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>xml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;com.kingtsoft.pangu&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;pangu-storage-minio&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    业务模块直接引用api依赖，执行如下图所示，可直接注入panguStorage，并且在业务模块所依附的启动器上引入</span></span>
<span class="line"><span>pangu-storage-minio模块（注意单纯的注入是没实体的，只是业务模块可以这么做,它无需关注具体实现，具体实现可</span></span>
<span class="line"><span>根据启动器引入的实现变化而变化），同理，若是在服务器上，则直接放入pangu-storage-minio 的pgr文件即可。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private final   PanguStorage panguStorage;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void   testFile(MultipartFile file, String fileId) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>int mode = FileConst.Mode.FILE_ID;</span></span>
<span class="line"><span>        fileId = panguStorage.saveFile(BKT_NAME, file.getOriginalFilename(), file.getInputStream(), mode);</span></span>
<span class="line"><span>        System.out.println(&quot;fileId:&quot;+ fileId);</span></span>
<span class="line"><span>boolean   flag = panguStorage.checkExist(BKT_NAME, fileId);</span></span>
<span class="line"><span>        System.out.println(&quot;是否存在：&quot;+ flag);</span></span>
<span class="line"><span>//            String pre = panguStorage.getPreviewFileUrl(BKT_NAME, fileId);</span></span>
<span class="line"><span>//            System.out.println(&quot;预览地址：&quot; + pre);</span></span>
<span class="line"><span>        FileStream fileByte = panguStorage.getFileStreamById(BKT_NAME, fileId, mode);</span></span>
<span class="line"><span>        System.out.println(&quot;获取：&quot;+ fileByte.getFileName());</span></span>
<span class="line"><span>boolean   delRet = panguStorage.delFile(BKT_NAME, fileId);</span></span>
<span class="line"><span>        System.out.println(&quot;删除：&quot;+ delRet);</span></span>
<span class="line"><span>boolean   flag2 = panguStorage.checkExist(BKT_NAME, fileId);</span></span>
<span class="line"><span>        System.out.println(&quot;是否存在：&quot;+ flag2);</span></span>
<span class="line"><span>//            String newFileId = panguStorage.copyFile(BKT_NAME, fileId, &quot;test/a&quot;, &quot;newname.jpg&quot;, mode);</span></span>
<span class="line"><span>//            boolean   flag3 = panguStorage.checkExist(&quot;test/a&quot;, newFileId);</span></span>
<span class="line"><span>//            System.out.println(&quot;是否存在：&quot; + flag3);</span></span>
<span class="line"><span>        List&lt;FileItem&gt; rets = panguStorage.getFileNameList(BKT_NAME +&quot;/fld&quot;);</span></span>
<span class="line"><span>        System.out.println(rets.size());</span></span>
<span class="line"><span>    } catch (Exception e) {</span></span>
<span class="line"><span>        e.printStackTrace();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置文件配置minio地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>yaml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pangu:</span></span>
<span class="line"><span>	minio:</span></span>
<span class="line"><span># 手动指定路径情况下的minio地址</span></span>
<span class="line"><span>url: &#39;http://10.1.50.131:7000/pangu-minio/minio&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>解释下几个参数</span></span>
<span class="line"><span>    bucketName：为桶，其实就是外层文件夹目录，可以根据模块或者项目区分，代码中可以定义在自己的常量内。支持多层目录，例如: test/a/b, 这种入参就会在test桶下创建a目录与b目录</span></span>
<span class="line"><span>    fileName：文件名称，例如xx.jpg</span></span>
<span class="line"><span>    fileId：文件ID，存储后会返回一个ID，可能等于fileName</span></span>
<span class="line"><span>    mode：存储模式   </span></span>
<span class="line"><span>    0 - id索引（存储的时候会生成8位随机码加上文件名拼接，这种情况下同名文件是可以重复上传的）  1 原始文件名存储，报错（存储时候的文件ID与文件名同名，此时若存储同名文件会报错）</span></span>
<span class="line"><span>    2 原始文件名存储覆盖（存储时候的文件ID与文件名同名，此时若存储同名文件会覆盖之前的文件）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="技术原理" tabindex="-1"><a class="header-anchor" href="#技术原理"><span>技术原理</span></a></h4></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    业务模块引用的api为调用的门面接口，里面定义了可操作的行为。实际实现在启动器所依赖的pangu-storage-minio,</span></span>
<span class="line"><span>而案例截图的配置文件地址为minio的server端，是具体与minio做交互的服务， pangu-storage-minio的功能是通过内</span></span>
<span class="line"><span>部定义的接口与server端坐HTTP交互。好处是服务交互的服务本身不是集成在业务中，更加集中，且隔离性强。符合基础服务</span></span>
<span class="line"><span>下沉为公共设施的理念。</span></span>
<span class="line"><span>API的实现内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class  MinioHttpHandlerimplementsPanguStorage {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private MinioClient minioClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>private MinioFileClient minioFileClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String saveFile(String bucketName, String fileName, byte[] fileBytes, intmode) {</span></span>
<span class="line"><span>        InputStream inputStream =newByteArrayInputStream(fileBytes);</span></span>
<span class="line"><span>        MultipartFile file = FileTool.getMultipartFile(inputStream, fileName);</span></span>
<span class="line"><span>return minioFileClient.saveFile(file, bucketName, mode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String saveFile(String bucketName, String fileName, InputStream fileStream, intmode) {</span></span>
<span class="line"><span>        MultipartFile file = FileTool.getMultipartFile(fileStream, fileName);</span></span>
<span class="line"><span>return minioFileClient.saveFile(file, bucketName, mode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public FileByte getFileById(String bucketName, String fileId, intmode) {</span></span>
<span class="line"><span>        Response response = minioFileClient.getFileById(bucketName, fileId, mode);</span></span>
<span class="line"><span>        InputStream inputStream =null;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            FileByte fileByte =newFileByte();</span></span>
<span class="line"><span>            fileByte.setFileId(fileId);</span></span>
<span class="line"><span>            fileByte.setFileName(getFileNameByHeader(response, fileId));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (response.body() !=null) {</span></span>
<span class="line"><span>                inputStream = response.body().asInputStream();</span></span>
<span class="line"><span>                fileByte.setFileByte(inputStream.readAllBytes());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return fileByte;</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;文件获取失败！&quot;);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>if (inputStream !=null) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>                    inputStream.close();</span></span>
<span class="line"><span>                } catch (IOException e) {</span></span>
<span class="line"><span>                    e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public FileStream getFileStreamById(String bucketName, String fileId, intmode) {</span></span>
<span class="line"><span>        Response response = minioFileClient.getFileById(bucketName, fileId, mode);</span></span>
<span class="line"><span>        InputStream inputStream;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            FileStream fileStream =newFileStream();</span></span>
<span class="line"><span>            fileStream.setFileId(fileId);</span></span>
<span class="line"><span>            fileStream.setFileName(getFileNameByHeader(response, fileId));</span></span>
<span class="line"><span>if (response.body() !=null) {</span></span>
<span class="line"><span>                inputStream = response.body().asInputStream();</span></span>
<span class="line"><span>                fileStream.setStream(inputStream);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return fileStream;</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;文件获取失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  checkExist(String bucketName, String fileId) {</span></span>
<span class="line"><span>return minioClient.checkExist(bucketName, fileId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>publicboolean  delFile(String bucketName, String fileId) {</span></span>
<span class="line"><span>return minioClient.delFile(bucketName, fileId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String copyFile(String sourceBucketName, String sourceFileId, String bucketName, String fileName, intmode) {</span></span>
<span class="line"><span>return minioClient.copyFile(sourceBucketName, sourceFileId, bucketName, fileName, mode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public List&lt;FileItem&gt; getFileNameList(String bucketName) {</span></span>
<span class="line"><span>return minioClient.getFileNameList(bucketName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>public String getPreviewFileUrl(String bucketName, String fileId) {</span></span>
<span class="line"><span>return minioClient.getPreviewFileUrl(bucketName, fileId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private String getFileNameByHeader(Response response, String fileId) {</span></span>
<span class="line"><span>        Collection&lt;String&gt; rets = response.headers().get(&quot;content-disposition&quot;);</span></span>
<span class="line"><span>        String fileName;</span></span>
<span class="line"><span>if (rets.isEmpty()) {</span></span>
<span class="line"><span>            fileName = fileId;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            Iterator&lt;String&gt; iterable = rets.iterator();</span></span>
<span class="line"><span>            String str = iterable.next();</span></span>
<span class="line"><span>String[] strArr = str.split(&quot;;&quot;, -1);</span></span>
<span class="line"><span>if (strArr.length &lt;2) {</span></span>
<span class="line"><span>                fileName = fileId;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                fileName = str.split(&quot;;&quot;, -1)[1].substring(9);</span></span>
<span class="line"><span>                fileName = URLDecoder.decode(fileName, StandardCharsets.UTF_8);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return fileName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP客户端的定义</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@FeignResultClient</span></span>
<span class="line"><span>@PgFeignClient(clientCode= HttpConst.CLIENT_CODE_MINIO, url=&quot;\${pangu.minio.url}&quot;)</span></span>
<span class="line"><span>public interface  MinioClient {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(value=&quot;/checkExist/{fileId}&quot;)</span></span>
<span class="line"><span>boolean  checkExist(@RequestParam(&quot;bucketName&quot;) String bucketName,</span></span>
<span class="line"><span>                       @PathVariable(&quot;fileId&quot;) String fileId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/delFile/{fileId}&quot;)</span></span>
<span class="line"><span>boolean  delFile(@RequestParam(&quot;bucketName&quot;) String bucketName,</span></span>
<span class="line"><span>                    @PathVariable(&quot;fileId&quot;) String fileId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/copyFile&quot;)</span></span>
<span class="line"><span>    String copyFile(@RequestParam(&quot;sourceBucketName&quot;) String sourceBucketName,</span></span>
<span class="line"><span>                    @RequestParam(&quot;sourceFileId&quot;) String sourceFileId,</span></span>
<span class="line"><span>                    @RequestParam(&quot;bucketName&quot;) String bucketName,</span></span>
<span class="line"><span>                    @RequestParam(&quot;fileName&quot;) String fileName,</span></span>
<span class="line"><span>                    @RequestParam(&quot;mode&quot;) intmode);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/getFileNameList&quot;)</span></span>
<span class="line"><span>    List&lt;FileItem&gt; getFileNameList(@RequestParam(&quot;bucketName&quot;) String bucketName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/getPreviewFileUrl/{fileId}&quot;)</span></span>
<span class="line"><span>    String getPreviewFileUrl(@RequestParam(&quot;bucketName&quot;) String bucketName,</span></span>
<span class="line"><span>                             @PathVariable(&quot;fileId&quot;) String fileId);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>最后会进入server的实际调用方法(pangu-storage-minio-consumer模块，被SERVER引用的)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>java</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.kingtsoft.pangu.storage.minio.consumer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.kingtsoft.pangu.base.exception.TipException;</span></span>
<span class="line"><span>import com.kingtsoft.pangu.storage.api.FileItem;</span></span>
<span class="line"><span>import io.minio.*;</span></span>
<span class="line"><span>import io.minio.http.Method;</span></span>
<span class="line"><span>import io.minio.messages.Item;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.ByteArrayInputStream;</span></span>
<span class="line"><span>import java.io.InputStream;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Title: &lt;br&gt;</span></span>
<span class="line"><span> * Description: &lt;br&gt;</span></span>
<span class="line"><span> * Company: KingTang &lt;br&gt;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author 金炀</span></span>
<span class="line"><span> * @version 1.0</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class  MinioHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private final   MinioClient minioClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicMinioHandler(MinioClient minioClient) {</span></span>
<span class="line"><span>this.minioClient = minioClient;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void  createBucketIfNotExists(String bucketName) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>if (!minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build())) {</span></span>
<span class="line"><span>makeBucket(bucketName);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 创建存储bucket</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @parambucketName 存储bucket名称</span></span>
<span class="line"><span>     * @return boolean  </span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public boolean   makeBucket(String bucketName) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            minioClient.makeBucket(MakeBucketArgs.builder()</span></span>
<span class="line"><span>                    .bucket(bucketName)</span></span>
<span class="line"><span>                    .build());</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 删除存储bucket</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @parambucketName 存储bucket名称</span></span>
<span class="line"><span>     * @return boolean  </span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public boolean   removeBucket(String bucketName) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            minioClient.removeBucket(RemoveBucketArgs.builder()</span></span>
<span class="line"><span>                    .bucket(bucketName)</span></span>
<span class="line"><span>                    .build());</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 上传文件</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramfileId  文件ID</span></span>
<span class="line"><span>     * @paramfileBytes</span></span>
<span class="line"><span>     * @author 金炀</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public String saveFile(String bucketName, String fileId, byte[] fileBytes) {</span></span>
<span class="line"><span>        InputStream inputStream =newByteArrayInputStream(fileBytes);</span></span>
<span class="line"><span>returnsaveFile(bucketName, fileId, inputStream);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 上传保存文件流</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @paramfileId   文件ID</span></span>
<span class="line"><span>     * @paramfilestream 文件流</span></span>
<span class="line"><span>     * @author 吴艺杰</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public String saveFile(String bucketName, String fileId, InputStream filestream) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>createBucketIfNotExists(bucketName);</span></span>
<span class="line"><span>//开始上传文件</span></span>
<span class="line"><span>            minioClient.putObject(</span></span>
<span class="line"><span>                    PutObjectArgs.builder()</span></span>
<span class="line"><span>                            .bucket(bucketName)</span></span>
<span class="line"><span>                            .object(fileId)</span></span>
<span class="line"><span>                            .stream(filestream, filestream.available(), -1)</span></span>
<span class="line"><span>                            .build());</span></span>
<span class="line"><span>//最后判断文件是否存在</span></span>
<span class="line"><span>return minioClient.statObject(StatObjectArgs.builder().bucket(bucketName)</span></span>
<span class="line"><span>                    .object(fileId).build()).object();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;文件上传失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public InputStream getFileStreamById(String bucketName, String fileId) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>return minioClient.getObject(</span></span>
<span class="line"><span>                    GetObjectArgs.builder()</span></span>
<span class="line"><span>                            .bucket(bucketName)</span></span>
<span class="line"><span>                            .object(fileId).build());</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;获取文件失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查看文件对象</span></span>
<span class="line"><span>     * @parambucketName 存储bucket名称</span></span>
<span class="line"><span>     * @return 存储bucket内文件对象信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>public List&lt;FileItem&gt; listObjects(String bucketName) {</span></span>
<span class="line"><span>        Iterable&lt;Result&lt;Item&gt;&gt; results = minioClient.listObjects(</span></span>
<span class="line"><span>                ListObjectsArgs.builder().bucket(bucketName).build());</span></span>
<span class="line"><span>        List&lt;FileItem&gt; objectItems =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>for (Result&lt;Item&gt; result : results) {</span></span>
<span class="line"><span>                Item item = result.get();</span></span>
<span class="line"><span>                FileItem fileItem =newFileItem();</span></span>
<span class="line"><span>                fileItem.setFileName(item.objectName());</span></span>
<span class="line"><span>                fileItem.setSize(item.size());</span></span>
<span class="line"><span>                objectItems.add(fileItem);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>returnnull;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>return objectItems;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicboolean  checkExist(String bucketName, String fileId) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            minioClient.statObject(</span></span>
<span class="line"><span>                    StatObjectArgs.builder().bucket(bucketName).object(fileId).build()</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>returnfalse;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publicboolean  delFile(String bucketName, String fileId) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            minioClient.removeObject(</span></span>
<span class="line"><span>                    RemoveObjectArgs.builder()</span></span>
<span class="line"><span>                            .bucket(bucketName)</span></span>
<span class="line"><span>                            .object(fileId)</span></span>
<span class="line"><span>                            .build());</span></span>
<span class="line"><span>returntrue;</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;文件删除失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public String copyFile(String sourceBucketName, String sourceFileId, String bucketName, String fileId) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>return minioClient.copyObject(</span></span>
<span class="line"><span>                    CopyObjectArgs.builder()</span></span>
<span class="line"><span>                            .bucket(bucketName)</span></span>
<span class="line"><span>                            .object(fileId)</span></span>
<span class="line"><span>                            .source(CopySource.builder()</span></span>
<span class="line"><span>                                            .bucket(sourceBucketName)</span></span>
<span class="line"><span>                                            .object(sourceFileId)</span></span>
<span class="line"><span>                                            .build())</span></span>
<span class="line"><span>                            .build()).object();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;复制失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public StatObjectResponse getFileStat(String bucketName, String fileName) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>return minioClient.statObject(StatObjectArgs.builder()</span></span>
<span class="line"><span>                    .bucket(bucketName)</span></span>
<span class="line"><span>                    .object(fileName).build());</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>thrownewTipException(&quot;文件信息获取失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public List&lt;FileItem&gt; getFileNameList(String bucketName, String folderPath) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            List&lt;FileItem&gt; list =new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>            Iterable&lt;Result&lt;Item&gt;&gt; results = minioClient.listObjects(ListObjectsArgs.builder()</span></span>
<span class="line"><span>                    .bucket(bucketName)</span></span>
<span class="line"><span>                    .prefix(folderPath).recursive(true).build());</span></span>
<span class="line"><span>for (Result&lt;Item&gt; itemResult : results) {</span></span>
<span class="line"><span>                FileItem fileItem =newFileItem();</span></span>
<span class="line"><span>if (folderPath ==null) {</span></span>
<span class="line"><span>                    fileItem.setFileName(itemResult.get().objectName());</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    fileItem.setFileName(itemResult.get().objectName().substring(folderPath.length() +1));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                fileItem.setSize(itemResult.get().size());</span></span>
<span class="line"><span>                fileItem.setFilepath(folderPath);</span></span>
<span class="line"><span>                list.add(fileItem);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>return list;</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;文件目录获取失败！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public String getPresignedObjectUrl(String bucketName, String fileId) {</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>            GetPresignedObjectUrlArgs pre = GetPresignedObjectUrlArgs.builder()</span></span>
<span class="line"><span>                    .method(Method.GET)</span></span>
<span class="line"><span>                    .bucket(bucketName)</span></span>
<span class="line"><span>                    .object(fileId)</span></span>
<span class="line"><span>                    .build();</span></span>
<span class="line"><span>return minioClient.getPresignedObjectUrl(pre);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>thrownewTipException(&quot;文件预览数据获取错误！&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26)]))}const t=s(l,[["render",p],["__file","minio.html.vue"]]),r=JSON.parse('{"path":"/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/minio.html","title":"Minio模块","lang":"zh-CN","frontmatter":{"description":"Minio模块 如何使用 yaml 业务端使用 xml java yaml 技术原理 java java java","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E7%9B%98%E5%8F%A4/%E4%B8%AD%E9%97%B4%E4%BB%B6/minio.html"}],["meta",{"property":"og:title","content":"Minio模块"}],["meta",{"property":"og:description","content":"Minio模块 如何使用 yaml 业务端使用 xml java yaml 技术原理 java java java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T07:25:41.000Z"}],["meta",{"property":"article:author","content":"Cotton Eye Joe"}],["meta",{"property":"article:modified_time","content":"2024-11-18T07:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-18T07:25:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cotton Eye Joe\\",\\"url\\":\\"https://github.com/ToDreamr\\"}]}"]]},"headers":[],"git":{"createdTime":1731914741000,"updatedTime":1731914741000,"contributors":[{"name":"九歌天上有","email":"aruixrain@gmail.com","commits":1}]},"readingTime":{"minutes":5.63,"words":1689},"filePathRelative":"盘古/中间件/minio.md","localizedDate":"2024年11月18日","excerpt":"","autoDesc":true}');export{t as comp,r as data};
