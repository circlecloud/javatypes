declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Base class for a {@link org.apache.catalina.WebResourceSet} based on a
                 * single, rather than nested, archive.
                 */
                // @ts-ignore
                abstract class AbstractSingleArchiveResourceSet extends org.apache.catalina.webresources.AbstractArchiveResourceSet {
                    /**
                     * A no argument constructor is required for this to work with the digester.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(root: org.apache.catalina.WebResourceRoot, webAppMount: java.lang.String | string, base: java.lang.String | string, internalPath: java.lang.String | string)
                    // @ts-ignore
                    getArchiveEntries(single: boolean): java.util.Map<java.lang.String | string, java.util.jar.JarEntry>
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
