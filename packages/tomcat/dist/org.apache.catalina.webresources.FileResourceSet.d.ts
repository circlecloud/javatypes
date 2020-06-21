declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Represents a {@link org.apache.catalina.WebResourceSet} based on a single
                 * file.
                 */
                // @ts-ignore
                class FileResourceSet extends org.apache.catalina.webresources.AbstractFileResourceSet {
                    /**
                     * A no argument constructor is required for this to work with the digester.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new {@link org.apache.catalina.WebResourceSet} based on a
                     * file.
                     * @param root          The {#link WebResourceRoot} this new
                     *                           {@link org.apache.catalina.WebResourceSet} will
                     *                           be added to.
                     * @param webAppMount   The path within the web application at which this
                     *                           {#link org.apache.catalina.WebResourceSet} will
                     *                           be mounted. For example, to add a directory of
                     *                           JARs to a web application, the directory would
                     *                           be mounted at "WEB-INF/lib/"
                     * @param base          The absolute path to the file on the file system
                     *                           from which the resource will be served.
                     * @param internalPath  The path within this new {#link
                     *                           org.apache.catalina.WebResourceSet} where
                     *                           resources will be served from.
                     */
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppMount: java.lang.String | string, base: java.lang.String | string, internalPath: java.lang.String | string)
                    // @ts-ignore
                    public getResource(path: java.lang.String | string): org.apache.catalina.WebResource
                    // @ts-ignore
                    public list(path: java.lang.String | string): string[]
                    // @ts-ignore
                    public listWebAppPaths(path: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public mkdir(path: java.lang.String | string): boolean
                    // @ts-ignore
                    public write(path: java.lang.String | string, jis: java.io.InputStream, overwrite: boolean): boolean
                    // @ts-ignore
                    checkType(file: java.io.File): void
                }
            }
        }
    }
}
