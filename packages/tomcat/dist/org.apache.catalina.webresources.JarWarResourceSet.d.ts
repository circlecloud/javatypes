declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Represents a {@link org.apache.catalina.WebResourceSet} based on a JAR file
                 * that is nested inside a packed WAR file. This is only intended for internal
                 * use within Tomcat and therefore cannot be created via configuration.
                 */
                // @ts-ignore
                class JarWarResourceSet extends org.apache.catalina.webresources.AbstractArchiveResourceSet {
                    /**
                     * Creates a new {@link org.apache.catalina.WebResourceSet} based on a JAR
                     * file that is nested inside a WAR.
                     * @param root          The {#link WebResourceRoot} this new
                     *                           {@link org.apache.catalina.WebResourceSet} will
                     *                           be added to.
                     * @param webAppMount   The path within the web application at which this
                     *                           {#link org.apache.catalina.WebResourceSet} will
                     *                           be mounted.
                     * @param base          The absolute path to the WAR file on the file system
                     *                           in which the JAR is located.
                     * @param archivePath   The path within the WAR file where the JAR file is
                     *                           located.
                     * @param internalPath  The path within this new {#link
                     *                           org.apache.catalina.WebResourceSet} where
                     *                           resources will be served from. E.g. for a
                     *                           resource JAR, this would be "META-INF/resources"
                     * @throws IllegalArgumentException if the webAppMount or internalPath is
                     *          not valid (valid paths must start with '/')
                     */
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppMount: java.lang.String | string, base: java.lang.String | string, archivePath: java.lang.String | string, internalPath: java.lang.String | string)
                    // @ts-ignore
                    createArchiveResource(jarEntry: java.util.jar.JarEntry, webAppPath: java.lang.String | string, manifest: java.util.jar.Manifest): org.apache.catalina.WebResource
                    /**
                     * {@inheritDoc}
                     * <p>
                     * JarWar can't optimise for a single resource so the Map is always
                     * returned.
                     */
                    // @ts-ignore
                    getArchiveEntries(single: boolean): java.util.Map<java.lang.String | string, java.util.jar.JarEntry>
                    // @ts-ignore
                    processArchivesEntriesForMultiRelease(): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Should never be called since {@link #getArchiveEntries(boolean)} always
                     * returns a Map.
                     */
                    // @ts-ignore
                    getArchiveEntry(pathInArchive: java.lang.String | string): java.util.jar.JarEntry
                    // @ts-ignore
                    isMultiRelease(): boolean
                    // @ts-ignore
                    initInternal(): void
                }
            }
        }
    }
}
