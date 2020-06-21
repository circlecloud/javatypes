declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * {@code DataSourceFactory} encapsulates the creation of a particular
                     * {@link DataSource} implementation such as a non-pooling
                     * {@link org.springframework.jdbc.datasource.SimpleDriverDataSource}
                     * or a HikariCP pool setup in the shape of a {@code HikariDataSource}.
                     * <p>Call {@link #getConnectionProperties()} to configure normalized
                     * {@code DataSource} properties before calling {@link #getDataSource()}
                     * to actually get the configured {@code DataSource} instance.
                     * @author Keith Donald
                     * @author Sam Brannen
                     * @since 3.0
                     */
                    // @ts-ignore
                    interface DataSourceFactory {
                        /**
                         * Get the {@linkplain ConnectionProperties connection properties}
                         * of the {@link #getDataSource DataSource} to be configured.
                         */
                        // @ts-ignore
                        getConnectionProperties(): org.springframework.jdbc.datasource.embedded.ConnectionProperties
                        /**
                         * Get the {@link DataSource} with the
                         * {@linkplain #getConnectionProperties connection properties} applied.
                         */
                        // @ts-ignore
                        getDataSource(): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
