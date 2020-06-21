declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Registry for custom {@link org.springframework.jdbc.support.SQLExceptionTranslator} instances associated with
                 * specific databases allowing for overriding translation based on values contained in the configuration file
                 * named "sql-error-codes.xml".
                 * @author Thomas Risberg
                 * @since 3.1.1
                 * @see SQLErrorCodesFactory
                 */
                // @ts-ignore
                class CustomSQLExceptionTranslatorRegistry extends java.lang.Object {
                    /**
                     * Return the singleton instance.
                     */
                    // @ts-ignore
                    public static getInstance(): org.springframework.jdbc.support.CustomSQLExceptionTranslatorRegistry
                    /**
                     * Register a new custom translator for the specified database name.
                     * @param dbName the database name
                     * @param translator the custom translator
                     */
                    // @ts-ignore
                    public registerTranslator(dbName: java.lang.String | string, translator: org.springframework.jdbc.support.SQLExceptionTranslator): void
                    /**
                     * Find a custom translator for the specified database.
                     * @param dbName the database name
                     * @return the custom translator, or {#code null} if none found
                     */
                    // @ts-ignore
                    public findTranslatorForDatabase(dbName: java.lang.String | string): org.springframework.jdbc.support.SQLExceptionTranslator
                }
            }
        }
    }
}
