declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Registry for custom {@link SQLExceptionTranslator} instances for specific databases.
                 * @author Thomas Risberg
                 * @since 3.1.1
                 */
                // @ts-ignore
                class CustomSQLExceptionTranslatorRegistrar extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Setter for a Map of {@link SQLExceptionTranslator} references where the key must
                     * be the database name as defined in the {@code sql-error-codes.xml} file.
                     * <p>Note that any existing translators will remain unless there is a match in the
                     * database name, at which point the new translator will replace the existing one.
                     */
                    // @ts-ignore
                    public setTranslators(translators: java.util.Map<java.lang.String | string, org.springframework.jdbc.support.SQLExceptionTranslator>): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                }
            }
        }
    }
}
