declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * <p>
                 * Provides the resources implementation for a web application. The
                 * {@link org.apache.catalina.Lifecycle} of this class should be aligned with
                 * that of the associated {@link Context}.
                 * </p><p>
                 * This implementation assumes that the base attribute supplied to {@link
                 * StandardRoot#createWebResourceSet(
                 * org.apache.catalina.WebResourceRoot.ResourceSetType, String, String, String,
                 * String)} represents the absolute path to a file.
                 * </p>
                 */
                // @ts-ignore
                class StandardRoot extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.WebResourceRoot {
                    /**
                     * Creates a new standard implementation of {@link WebResourceRoot}. A no
                     * argument constructor is required for this to work with the digester.
                     * {@link #setContext(Context)} must be called before this component is
                     * initialized.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(context: org.apache.catalina.Context)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public list(path: java.lang.String | string): string[]
                    // @ts-ignore
                    public listWebAppPaths(path: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public mkdir(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public write(path: java.lang.String | string, jis: java.io.InputStream, overwrite: boolean): boolean
                    // @ts-ignore
                    public getResource(path: java.lang.String | string): org.apache.catalina.WebResource
                    // @ts-ignore
                    public getClassLoaderResource(path: java.lang.String | string): org.apache.catalina.WebResource
                    // @ts-ignore
                    public getClassLoaderResources(path: java.lang.String | string): org.apache.catalina.WebResource[]
                    // @ts-ignore
                    getResourceInternal(path: java.lang.String | string, useClassLoaderResources: boolean): org.apache.catalina.WebResource
                    // @ts-ignore
                    public getResources(path: java.lang.String | string): org.apache.catalina.WebResource[]
                    // @ts-ignore
                    getResourcesInternal(path: java.lang.String | string, useClassLoaderResources: boolean): org.apache.catalina.WebResource[]
                    // @ts-ignore
                    public listResources(path: java.lang.String | string): org.apache.catalina.WebResource[]
                    // @ts-ignore
                    listResources(path: java.lang.String | string, validate: boolean): org.apache.catalina.WebResource[]
                    // @ts-ignore
                    public createWebResourceSet(type: org.apache.catalina.WebResourceRoot.ResourceSetType, webAppMount: java.lang.String | string, url: java.net.URL, internalPath: java.lang.String | string): void
                    // @ts-ignore
                    public createWebResourceSet(type: org.apache.catalina.WebResourceRoot.ResourceSetType, webAppMount: java.lang.String | string, base: java.lang.String | string, archivePath: java.lang.String | string, internalPath: java.lang.String | string): void
                    // @ts-ignore
                    public addPreResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                    // @ts-ignore
                    public getPreResources(): org.apache.catalina.WebResourceSet[]
                    // @ts-ignore
                    public addJarResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                    // @ts-ignore
                    public getJarResources(): org.apache.catalina.WebResourceSet[]
                    // @ts-ignore
                    public addPostResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                    // @ts-ignore
                    public getPostResources(): org.apache.catalina.WebResourceSet[]
                    // @ts-ignore
                    getClassResources(): org.apache.catalina.WebResourceSet[]
                    // @ts-ignore
                    addClassResources(webResourceSet: org.apache.catalina.WebResourceSet): void
                    // @ts-ignore
                    public setAllowLinking(allowLinking: boolean): void
                    // @ts-ignore
                    public getAllowLinking(): boolean
                    // @ts-ignore
                    public setCachingAllowed(cachingAllowed: boolean): void
                    // @ts-ignore
                    public isCachingAllowed(): boolean
                    // @ts-ignore
                    public getCacheTtl(): number /*long*/
                    // @ts-ignore
                    public setCacheTtl(cacheTtl: number /*long*/): void
                    // @ts-ignore
                    public getCacheMaxSize(): number /*long*/
                    // @ts-ignore
                    public setCacheMaxSize(cacheMaxSize: number /*long*/): void
                    // @ts-ignore
                    public setCacheObjectMaxSize(cacheObjectMaxSize: number /*int*/): void
                    // @ts-ignore
                    public getCacheObjectMaxSize(): number /*int*/
                    // @ts-ignore
                    public setTrackLockedFiles(trackLockedFiles: boolean): void
                    // @ts-ignore
                    public getTrackLockedFiles(): boolean
                    // @ts-ignore
                    public getTrackedResources(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getContext(): org.apache.catalina.Context
                    // @ts-ignore
                    public setContext(context: org.apache.catalina.Context): void
                    /**
                     * Class loader resources are handled by treating JARs in WEB-INF/lib as
                     * resource JARs (without the internal META-INF/resources/ prefix) mounted
                     * at WEB-INF/classes (rather than the web app root). This enables reuse
                     * of the resource handling plumbing.
                     * These resources are marked as class loader only so they are only used in
                     * the methods that are explicitly defined to return class loader resources.
                     * This prevents calls to getResource("/WEB-INF/classes") returning from one
                     * or more of the JAR files.
                     * @throws LifecycleException If an error occurs that should stop the web
                     *                             application from starting
                     */
                    // @ts-ignore
                    processWebInfLib(): void
                    /**
                     * For unit testing.
                     * @param main The main resources
                     */
                    // @ts-ignore
                    setMainResources(main: org.apache.catalina.WebResourceSet): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    // @ts-ignore
                    public gc(): void
                    // @ts-ignore
                    public registerTrackedResource(trackedResource: org.apache.catalina.TrackedWebResource): void
                    // @ts-ignore
                    public deregisterTrackedResource(trackedResource: org.apache.catalina.TrackedWebResource): void
                    // @ts-ignore
                    public getBaseUrls(): Array<java.net.URL>
                    // @ts-ignore
                    isPackedWarFile(): boolean
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    registerURLStreamHandlerFactory(): void
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    createMainResourceSet(): org.apache.catalina.WebResourceSet
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                }
            }
        }
    }
}
