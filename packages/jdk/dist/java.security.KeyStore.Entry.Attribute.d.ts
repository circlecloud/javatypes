declare namespace java {
    namespace security {
        namespace KeyStore {
            namespace Entry {
                /**
                 * An attribute associated with a keystore entry.
                 * It comprises a name and one or more values.
                 * @since 1.8
                 */
                // @ts-ignore
                interface Attribute {
                    /**
                     * Returns the attribute's name.
                     * @return the attribute name
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Returns the attribute's value.
                     * Multi-valued attributes encode their values as a single string.
                     * @return the attribute value
                     */
                    // @ts-ignore
                    getValue(): java.lang.String
                }
            }
        }
    }
}
