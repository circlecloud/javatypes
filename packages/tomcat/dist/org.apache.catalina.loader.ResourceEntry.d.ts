declare namespace org {
    namespace apache {
        namespace catalina {
            namespace loader {
                /**
                 * Resource entry.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class ResourceEntry extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The "last modified" time of the origin file at the time this resource
                     * was loaded, in milliseconds since the epoch.
                     */
                    // @ts-ignore
                    public lastModified: number /*long*/
                    /**
                     * Loaded class.
                     */
                    // @ts-ignore
                    public loadedClass: java.lang.Class<any>
                }
            }
        }
    }
}
