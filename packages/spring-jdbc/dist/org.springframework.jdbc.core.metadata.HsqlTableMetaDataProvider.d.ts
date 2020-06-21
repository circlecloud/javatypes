declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * The HSQL specific implementation of {@link TableMetaDataProvider}.
                     * Supports a feature for retrieving generated keys without the JDBC 3.0
                     * {@code getGeneratedKeys} support.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    class HsqlTableMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericTableMetaDataProvider {
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        // @ts-ignore
                        public isGetGeneratedKeysSimulated(): boolean
                        // @ts-ignore
                        public getSimpleQueryForGetGeneratedKey(tableName: java.lang.String | string, keyColumnName: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
