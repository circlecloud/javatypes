declare namespace org {
    namespace apache {
        namespace catalina {
            namespace security {
                /**
                 * Util class to protect Catalina against package access and insertion.
                 * The code are been moved from Catalina.java
                 * @author the Catalina.java authors
                 */
                // @ts-ignore
                class SecurityConfig extends java.lang.Object {
                    /**
                     * Returns the singleton instance of that class.
                     * @return an instance of that class.
                     */
                    // @ts-ignore
                    public static newInstance(): org.apache.catalina.security.SecurityConfig
                    /**
                     * Set the security package.access value.
                     */
                    // @ts-ignore
                    public setPackageAccess(): void
                    /**
                     * Set the security package.definition value.
                     */
                    // @ts-ignore
                    public setPackageDefinition(): void
                }
            }
        }
    }
}
