declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Represents a {@link org.apache.catalina.WebResourceSet} based on a WAR file.
                 */
                // @ts-ignore
                class WarResourceSet extends org.apache.catalina.webresources.AbstractSingleArchiveResourceSet {
                    /**
                     * A no argument constructor is required for this to work with the digester.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new {@link org.apache.catalina.WebResourceSet} based on a WAR
                     * file.
                     * @param root          The {#link WebResourceRoot} this new
                     *                           {@link org.apache.catalina.WebResourceSet} will
                     *                           be added to.
                     * @param webAppMount   The path within the web application at which this
                     *                           {#link org.apache.catalina.WebResourceSet} will
                     *                           be mounted.
                     * @param base          The absolute path to the WAR file on the file system
                     *                           from which the resources will be served.
                     * @throws IllegalArgumentException if the webAppMount is not valid (valid
                     *          paths must start with '/')
                     */
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppMount: java.lang.String | string, base: java.lang.String | string)
                    // @ts-ignore
                    createArchiveResource(jarEntry: java.util.jar.JarEntry, webAppPath: java.lang.String | string, manifest: java.util.jar.Manifest): org.apache.catalina.WebResource
                }
            }
        }
    }
}
