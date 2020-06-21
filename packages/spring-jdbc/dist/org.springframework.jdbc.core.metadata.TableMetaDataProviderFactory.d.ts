declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Factory used to create a {@link TableMetaDataProvider} implementation
                     * based on the type of database being used.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    class TableMetaDataProviderFactory extends java.lang.Object {
                        /**
                         * Create a {@link TableMetaDataProvider} based on the database meta-data.
                         * @param dataSource used to retrieve meta-data
                         * @param context the class that holds configuration and meta-data
                         * @return instance of the TableMetaDataProvider implementation to be used
                         */
                        // @ts-ignore
                        public static createMetaDataProvider(dataSource: javax.sql.DataSource, context: org.springframework.jdbc.core.metadata.TableMetaDataContext): org.springframework.jdbc.core.metadata.TableMetaDataProvider
                    }
                }
            }
        }
    }
}
