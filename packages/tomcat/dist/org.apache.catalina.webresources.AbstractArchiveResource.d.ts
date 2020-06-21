declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                abstract class AbstractArchiveResource extends org.apache.catalina.webresources.AbstractResource {
                    // @ts-ignore
                    constructor(archiveResourceSet: org.apache.catalina.webresources.AbstractArchiveResourceSet, webAppPath: java.lang.String | string, baseUrl: java.lang.String | string, jarEntry: java.util.jar.JarEntry, codeBaseUrl: java.lang.String | string)
                    // @ts-ignore
                    getArchiveResourceSet(): org.apache.catalina.webresources.AbstractArchiveResourceSet
                    // @ts-ignore
                    getBase(): string
                    // @ts-ignore
                    getBaseUrl(): string
                    // @ts-ignore
                    getResource(): java.util.jar.JarEntry
                    // @ts-ignore
                    public getLastModified(): number /*long*/
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
                    public getCreation(): number /*long*/
                    // @ts-ignore
                    public getURL(): java.net.URL
                    // @ts-ignore
                    public getCodeBase(): java.net.URL
                    // @ts-ignore
                    public getContent(): number /*byte*/[]
                    // @ts-ignore
                    public getCertificates(): java.security.cert.Certificate[]
                    // @ts-ignore
                    public getManifest(): java.util.jar.Manifest
                    // @ts-ignore
                    doGetInputStream(): java.io.InputStream
                    // @ts-ignore
                    abstract getJarInputStreamWrapper(): org.apache.catalina.webresources.AbstractArchiveResource.JarInputStreamWrapper
                }
            }
        }
    }
}
