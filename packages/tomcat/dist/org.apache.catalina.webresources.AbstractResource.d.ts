declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                abstract class AbstractResource extends java.lang.Object implements org.apache.catalina.WebResource {
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppPath: java.lang.String | string)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public getWebResourceRoot(): org.apache.catalina.WebResourceRoot
                    // @ts-ignore
                    public getWebappPath(): string
                    // @ts-ignore
                    public getLastModifiedHttp(): string
                    // @ts-ignore
                    public getETag(): string
                    // @ts-ignore
                    public setMimeType(mimeType: java.lang.String | string): void
                    // @ts-ignore
                    public getMimeType(): string
                    // @ts-ignore
                    public getInputStream(): java.io.InputStream
                    // @ts-ignore
                    abstract doGetInputStream(): java.io.InputStream
                    // @ts-ignore
                    abstract getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
