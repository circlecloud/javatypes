declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * {@code EmbeddedDatabaseConfigurer} encapsulates the configuration required to
                     * create, connect to, and shut down a specific type of embedded database such as
                     * HSQL, H2, or Derby.
                     * @author Keith Donald
                     * @author Sam Brannen
                     * @since 3.0
                     */
                    // @ts-ignore
                    interface EmbeddedDatabaseConfigurer {
                        /**
                         * Configure the properties required to create and connect to the embedded database.
                         * @param properties connection properties to configure
                         * @param databaseName the name of the embedded database
                         */
                        // @ts-ignore
                        configureConnectionProperties(properties: org.springframework.jdbc.datasource.embedded.ConnectionProperties, databaseName: java.lang.String | string): void
                        /**
                         * Shut down the embedded database instance that backs the supplied {@link DataSource}.
                         * @param dataSource the corresponding {#link DataSource}
                         * @param databaseName the name of the database being shut down
                         */
                        // @ts-ignore
                        shutdown(dataSource: javax.sql.DataSource, databaseName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
