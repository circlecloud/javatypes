declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * {@code ConnectionProperties} serves as a simple data container that allows
                     * essential JDBC connection properties to be configured consistently,
                     * independent of the actual {@link javax.sql.DataSource DataSource}
                     * implementation.
                     * @author Keith Donald
                     * @author Sam Brannen
                     * @since 3.0
                     * @see DataSourceFactory
                     */
                    // @ts-ignore
                    interface ConnectionProperties {
                        /**
                         * Set the JDBC driver class to use to connect to the database.
                         * @param driverClass the jdbc driver class
                         */
                        // @ts-ignore
                        setDriverClass(driverClass: java.lang.Class<any>): void
                        /**
                         * Set the JDBC connection URL for the database.
                         * @param url the connection url
                         */
                        // @ts-ignore
                        setUrl(url: java.lang.String | string): void
                        /**
                         * Set the username to use to connect to the database.
                         * @param username the username
                         */
                        // @ts-ignore
                        setUsername(username: java.lang.String | string): void
                        /**
                         * Set the password to use to connect to the database.
                         * @param password the password
                         */
                        // @ts-ignore
                        setPassword(password: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
