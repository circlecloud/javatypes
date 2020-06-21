declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Represents a single resource (file or directory) that is located on a file
                 * system.
                 */
                // @ts-ignore
                class FileResource extends org.apache.catalina.webresources.AbstractResource {
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppPath: java.lang.String | string, resource: java.io.File, readOnly: boolean, manifest: java.util.jar.Manifest)
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
                    doGetInputStream(): java.io.InputStream
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
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
