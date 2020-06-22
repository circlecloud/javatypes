declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * {@link RedisConfiguration} part suitable for configurations that use host/port combinations for connecting.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface WithHostAndPort {
                            /**
                             * Set the Redis server hostname
                             * @param hostName must not be {#literal null}.
                             */
                            // @ts-ignore
                            setHostName(hostName: java.lang.String | string): void
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getHostName(): string
                            /**
                             * Set the Redis server port.
                             * @param port
                             */
                            // @ts-ignore
                            setPort(port: number /*int*/): void
                            /**
                             * Get the Redis server port.
                             * @return 
                             */
                            // @ts-ignore
                            getPort(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
