declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Factory used to create a {@link CallMetaDataProvider} implementation
                     * based on the type of database being used.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class CallMetaDataProviderFactory extends java.lang.Object {
                        /**
                         * List of supported database products for procedure calls.
                         */
                        // @ts-ignore
                        public static readonly supportedDatabaseProductsForProcedures: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                        /**
                         * List of supported database products for function calls.
                         */
                        // @ts-ignore
                        public static readonly supportedDatabaseProductsForFunctions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                        /**
                         * Create a {@link CallMetaDataProvider} based on the database meta-data.
                         * @param dataSource the JDBC DataSource to use for retrieving meta-data
                         * @param context the class that holds configuration and meta-data
                         * @return instance of the CallMetaDataProvider implementation to be used
                         */
                        // @ts-ignore
                        public static createMetaDataProvider(dataSource: javax.sql.DataSource, context: org.springframework.jdbc.core.metadata.CallMetaDataContext): org.springframework.jdbc.core.metadata.CallMetaDataProvider
                    }
                }
            }
        }
    }
}
