declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * This class is designed to wrap a 'raw' WebResource and providing caching for
                 * expensive operations. Inexpensive operations may be passed through to the
                 * underlying resource.
                 */
                // @ts-ignore
                class CachedResource extends java.lang.Object implements org.apache.catalina.WebResource {
                    // @ts-ignore
                    constructor(cache: org.apache.catalina.webresources.Cache, root: org.apache.catalina.webresources.StandardRoot, path: java.lang.String | string, ttl: number /*long*/, objectMaxSizeBytes: number /*int*/, usesClassLoaderResources: boolean)
                    // @ts-ignore
                    validateResource(useClassLoaderResources: boolean): boolean
                    // @ts-ignore
                    validateResources(useClassLoaderResources: boolean): boolean
                    // @ts-ignore
                    getNextCheck(): number /*long*/
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
