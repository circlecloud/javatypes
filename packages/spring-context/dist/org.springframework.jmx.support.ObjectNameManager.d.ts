declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * Helper class for the creation of {@link javax.management.ObjectName} instances.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see javax.management.ObjectName#getInstance(String)
                 */
                // @ts-ignore
                class ObjectNameManager extends java.lang.Object {
                    /**
                     * Retrieve the {@code ObjectName} instance corresponding to the supplied name.
                     * @param objectName the {#code ObjectName} in {@code ObjectName} or
                     *  {@code String} format
                     * @return the {#code ObjectName} instance
                     * @throws MalformedObjectNameException in case of an invalid object name specification
                     * @see ObjectName#ObjectName(String)
                     * @see ObjectName#getInstance(String)
                     */
                    // @ts-ignore
                    getInstance(objectName: any): javax.management.ObjectName
                    /**
                     * Retrieve the {@code ObjectName} instance corresponding to the supplied name.
                     * @param objectName the {#code ObjectName} in {@code String} format
                     * @return the {#code ObjectName} instance
                     * @throws MalformedObjectNameException in case of an invalid object name specification
                     * @see ObjectName#ObjectName(String)
                     * @see ObjectName#getInstance(String)
                     */
                    // @ts-ignore
                    getInstance(objectName: string): javax.management.ObjectName
                    /**
                     * Retrieve an {@code ObjectName} instance for the specified domain and a
                     * single property with the supplied key and value.
                     * @param domainName the domain name for the {#code ObjectName}
                     * @param key the key for the single property in the {#code ObjectName}
                     * @param value the value for the single property in the {#code ObjectName}
                     * @return the {#code ObjectName} instance
                     * @throws MalformedObjectNameException in case of an invalid object name specification
                     * @see ObjectName#ObjectName(String, String, String)
                     * @see ObjectName#getInstance(String, String, String)
                     */
                    // @ts-ignore
                    getInstance(domainName: string, key: string, value: string): javax.management.ObjectName
                    /**
                     * Retrieve an {@code ObjectName} instance with the specified domain name
                     * and the supplied key/name properties.
                     * @param domainName the domain name for the {#code ObjectName}
                     * @param properties the properties for the {#code ObjectName}
                     * @return the {#code ObjectName} instance
                     * @throws MalformedObjectNameException in case of an invalid object name specification
                     * @see ObjectName#ObjectName(String, java.util.Hashtable)
                     * @see ObjectName#getInstance(String, java.util.Hashtable)
                     */
                    // @ts-ignore
                    getInstance(domainName: string, properties: java.util.Hashtable<java.lang.String, java.lang.String>): javax.management.ObjectName
                }
            }
        }
    }
}
