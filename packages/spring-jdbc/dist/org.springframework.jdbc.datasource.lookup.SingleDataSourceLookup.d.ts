declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * An implementation of the DataSourceLookup that simply wraps a
                     * single given DataSource, returned for any data source name.
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class SingleDataSourceLookup extends java.lang.Object implements org.springframework.jdbc.datasource.lookup.DataSourceLookup {
                        /**
                         * Create a new instance of the {@link SingleDataSourceLookup} class.
                         * @param dataSource the single {#link DataSource} to wrap
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource)
                        // @ts-ignore
                        public getDataSource(dataSourceName: java.lang.String | string): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
