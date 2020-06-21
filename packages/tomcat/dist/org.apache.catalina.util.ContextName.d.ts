declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Utility class to manage context names so there is one place where the
                 * conversions between baseName, path and version take place.
                 */
                // @ts-ignore
                class ContextName extends java.lang.Object {
                    /**
                     * Creates an instance from a context name, display name, base name,
                     * directory name, WAR name or context.xml name.
                     * @param name  The name to use as the basis for this object
                     * @param stripFileExtension    If a .war or .xml file extension is present
                     *                               at the end of the provided name should it be
                     *                               removed?
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, stripFileExtension: boolean)
                    /**
                     * Construct an instance from a path and version.
                     * @param path      Context path to use
                     * @param version   Context version to use
                     */
                    // @ts-ignore
                    constructor(path: java.lang.String | string, version: java.lang.String | string)
                    // @ts-ignore
                    public static readonly ROOT_NAME: java.lang.String | string
                    // @ts-ignore
                    public getBaseName(): string
                    // @ts-ignore
                    public getPath(): string
                    // @ts-ignore
                    public getVersion(): string
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getDisplayName(): string
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Extract the final component of the given path which is assumed to be a
                     * base name and generate a {@link ContextName} from that base name.
                     * @param path The path that ends in a base name
                     * @return the {#link ContextName} generated from the given base name
                     */
                    // @ts-ignore
                    public static extractFromPath(path: java.lang.String | string): org.apache.catalina.util.ContextName
                }
            }
        }
    }
}
