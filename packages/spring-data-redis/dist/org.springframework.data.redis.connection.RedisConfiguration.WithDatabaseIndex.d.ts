declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * {@link RedisConfiguration} part suitable for configurations that use a specific database.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface WithDatabaseIndex {
                            /**
                             * Set the database index to use.
                             * @param dbIndex
                             */
                            // @ts-ignore
                            setDatabase(dbIndex: number /*int*/): void
                            /**
                             * Get the database index to use.
                             * @return {#code zero} by default.
                             */
                            // @ts-ignore
                            getDatabase(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
