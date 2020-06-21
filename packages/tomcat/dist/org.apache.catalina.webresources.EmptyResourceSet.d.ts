declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * A {@link WebResourceSet} implementation that is not backed by a file system
                 * and behaves as if it has no resources available. This is  primarily used in
                 * embedded mode when the web application is configured entirely
                 * programmatically and does not use any static resources from the file system.
                 */
                // @ts-ignore
                class EmptyResourceSet extends org.apache.catalina.util.LifecycleBase implements org.apache.catalina.WebResourceSet {
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot)
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns an {@link EmptyResource}.
                     */
                    // @ts-ignore
                    public getResource(path: java.lang.String | string): org.apache.catalina.WebResource
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns an empty array.
                     */
                    // @ts-ignore
                    public list(path: java.lang.String | string): string[]
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns an empty set.
                     */
                    // @ts-ignore
                    public listWebAppPaths(path: java.lang.String | string): Array<java.lang.String | string>
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns false.
                     */
                    // @ts-ignore
                    public mkdir(path: java.lang.String | string): boolean
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns false.
                     */
                    // @ts-ignore
                    public write(path: java.lang.String | string, jis: java.io.InputStream, overwrite: boolean): boolean
                    // @ts-ignore
                    public setRoot(root: org.apache.catalina.WebResourceRoot): void
                    // @ts-ignore
                    public getClassLoaderOnly(): boolean
                    // @ts-ignore
                    public setClassLoaderOnly(classLoaderOnly: boolean): void
                    // @ts-ignore
                    public getStaticOnly(): boolean
                    // @ts-ignore
                    public setStaticOnly(staticOnly: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns null.
                     */
                    // @ts-ignore
                    public getBaseUrl(): java.net.URL
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Calls to this method will be ignored as this implementation always read
                     * only.
                     */
                    // @ts-ignore
                    public setReadOnly(readOnly: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * This implementation always returns true.
                     */
                    // @ts-ignore
                    public isReadOnly(): boolean
                    // @ts-ignore
                    public gc(): void
                    // @ts-ignore
                    initInternal(): void
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
