declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Oracle-specific implementation of the {@link org.springframework.jdbc.core.metadata.TableMetaDataProvider}.
                     * Supports a feature for including synonyms in the meta-data lookup. Also supports lookup of current schema
                     * using the {@code sys_context}.
                     * <p>Thanks to Mike Youngstrom and Bruce Campbell for submitting the original suggestion for the Oracle
                     * current schema lookup implementation.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class OracleTableMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericTableMetaDataProvider {
                        /**
                         * Constructor used to initialize with provided database meta-data.
                         * @param databaseMetaData meta-data to be used
                         */
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        /**
                         * Constructor used to initialize with provided database meta-data.
                         * @param databaseMetaData meta-data to be used
                         * @param includeSynonyms whether to include synonyms
                         */
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData, includeSynonyms: boolean)
                        // @ts-ignore
                        getDefaultSchema(): string
                        // @ts-ignore
                        public initializeWithTableColumnMetaData(databaseMetaData: java.sql.DatabaseMetaData, catalogName: java.lang.String | string, schemaName: java.lang.String | string, tableName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
