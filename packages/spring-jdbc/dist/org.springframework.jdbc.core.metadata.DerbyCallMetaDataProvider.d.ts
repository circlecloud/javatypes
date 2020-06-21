declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Derby specific implementation for the {@link CallMetaDataProvider} interface.
                     * This class is intended for internal use by the Simple JDBC classes.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class DerbyCallMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericCallMetaDataProvider {
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        // @ts-ignore
                        public metaDataSchemaNameToUse(schemaName: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
