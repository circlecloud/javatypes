declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                abstract class AbstractResourceSet extends org.apache.catalina.util.LifecycleBase implements org.apache.catalina.WebResourceSet {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    checkPath(path: java.lang.String | string): void
                    // @ts-ignore
                    public setRoot(root: org.apache.catalina.WebResourceRoot): void
                    // @ts-ignore
                    getRoot(): org.apache.catalina.WebResourceRoot
                    // @ts-ignore
                    getInternalPath(): string
                    // @ts-ignore
                    public setInternalPath(internalPath: java.lang.String | string): void
                    // @ts-ignore
                    public setWebAppMount(webAppMount: java.lang.String | string): void
                    // @ts-ignore
                    getWebAppMount(): string
                    // @ts-ignore
                    public setBase(base: java.lang.String | string): void
                    // @ts-ignore
                    getBase(): string
                    // @ts-ignore
                    public getClassLoaderOnly(): boolean
                    // @ts-ignore
                    public setClassLoaderOnly(classLoaderOnly: boolean): void
                    // @ts-ignore
                    public getStaticOnly(): boolean
                    // @ts-ignore
                    public setStaticOnly(staticOnly: boolean): void
                    // @ts-ignore
                    setManifest(manifest: java.util.jar.Manifest): void
                    // @ts-ignore
                    getManifest(): java.util.jar.Manifest
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                }
            }
        }
    }
}
