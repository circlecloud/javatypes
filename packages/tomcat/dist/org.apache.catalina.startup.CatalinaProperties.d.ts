declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Utility class to read the bootstrap Catalina configuration.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CatalinaProperties extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * @param name The property name
                     * @return specified property value
                     */
                    // @ts-ignore
                    public static getProperty(name: java.lang.String | string): string
                }
            }
        }
    }
}
