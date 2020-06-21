declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * {@code EmbeddedDatabase} serves as a handle to an embedded database instance.
                     * <p>An {@code EmbeddedDatabase} is also a {@link DataSource} and adds a
                     * {@link #shutdown} operation so that the embedded database instance can be
                     * shut down gracefully.
                     * @author Keith Donald
                     * @author Sam Brannen
                     * @since 3.0
                     */
                    // @ts-ignore
                    interface EmbeddedDatabase extends javax.sql.DataSource {
                        /**
                         * Shut down this embedded database.
                         */
                        // @ts-ignore
                        shutdown(): void
                    }
                }
            }
        }
    }
}
