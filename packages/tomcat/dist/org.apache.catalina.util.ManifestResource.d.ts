declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Representation of a Manifest file and its available extensions and
                 * required extensions
                 * @author Greg Murray
                 * @author Justyna Horwat
                 */
                // @ts-ignore
                class ManifestResource extends java.lang.Object {
                    // @ts-ignore
                    constructor(resourceName: java.lang.String | string, manifest: java.util.jar.Manifest, resourceType: number /*int*/)
                    // @ts-ignore
                    public static readonly SYSTEM: number /*int*/
                    // @ts-ignore
                    public static readonly WAR: number /*int*/
                    // @ts-ignore
                    public static readonly APPLICATION: number /*int*/
                    /**
                     * Gets the name of the resource
                     * @return The name of the resource
                     */
                    // @ts-ignore
                    public getResourceName(): string
                    /**
                     * Gets the list of available extensions
                     * @return List of available extensions
                     */
                    // @ts-ignore
                    public getAvailableExtensions(): java.util.ArrayList<org.apache.catalina.util.Extension>
                    /**
                     * Gets the list of required extensions
                     * @return List of required extensions
                     */
                    // @ts-ignore
                    public getRequiredExtensions(): java.util.ArrayList<org.apache.catalina.util.Extension>
                    /**
                     * Gets the number of available extensions
                     * @return The number of available extensions
                     */
                    // @ts-ignore
                    public getAvailableExtensionCount(): number /*int*/
                    /**
                     * Gets the number of required extensions
                     * @return The number of required extensions
                     */
                    // @ts-ignore
                    public getRequiredExtensionCount(): number /*int*/
                    /**
                     * Returns <code>true</code> if all required extension dependencies
                     * have been meet for this <code>ManifestResource</code> object.
                     * @return boolean true if all extension dependencies have been satisfied
                     */
                    // @ts-ignore
                    public isFulfilled(): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
