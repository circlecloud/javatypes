declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * The Derby specific implementation of {@link TableMetaDataProvider}.
                     * Overrides the Derby meta-data info regarding retrieving generated keys.
                     * @author Thomas Risberg
                     * @since 3.0
                     */
                    // @ts-ignore
                    class DerbyTableMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericTableMetaDataProvider {
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        // @ts-ignore
                        public initializeWithMetaData(databaseMetaData: java.sql.DatabaseMetaData): void
                        // @ts-ignore
                        public isGetGeneratedKeysSupported(): boolean
                    }
                }
            }
        }
    }
}
