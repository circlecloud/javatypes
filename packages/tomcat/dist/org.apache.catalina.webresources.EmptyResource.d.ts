declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                class EmptyResource extends java.lang.Object implements org.apache.catalina.WebResource {
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppPath: java.lang.String | string)
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppPath: java.lang.String | string, file: java.io.File)
                    // @ts-ignore
                    public getLastModified(): number /*long*/
                    // @ts-ignore
                    public getLastModifiedHttp(): string
                    // @ts-ignore
                    public exists(): boolean
                    // @ts-ignore
                    public isVirtual(): boolean
                    // @ts-ignore
                    public isDirectory(): boolean
                    // @ts-ignore
                    public isFile(): boolean
                    // @ts-ignore
                    public delete(): boolean
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getContentLength(): number /*long*/
                    // @ts-ignore
                    public getCanonicalPath(): string
                    // @ts-ignore
                    public canRead(): boolean
                    // @ts-ignore
                    public getWebappPath(): string
                    // @ts-ignore
                    public getETag(): string
                    // @ts-ignore
                    public setMimeType(mimeType: java.lang.String | string): void
                    // @ts-ignore
                    public getMimeType(): string
                    // @ts-ignore
                    public getInputStream(): java.io.InputStream
                    // @ts-ignore
                    public getContent(): number /*byte*/[]
                    // @ts-ignore
                    public getCreation(): number /*long*/
                    // @ts-ignore
                    public getURL(): java.net.URL
                    // @ts-ignore
                    public getCodeBase(): java.net.URL
                    // @ts-ignore
                    public getCertificates(): java.security.cert.Certificate[]
                    // @ts-ignore
                    public getManifest(): java.util.jar.Manifest
                    // @ts-ignore
                    public getWebResourceRoot(): org.apache.catalina.WebResourceRoot
                }
            }
        }
    }
}
