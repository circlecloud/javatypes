declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * {@link RedisConfiguration} part suitable for configurations that use native domain sockets for connecting.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface WithDomainSocket {
                            /**
                             * Set the socket.
                             * @param socket path to the Redis socket. Must not be {#literal null}.
                             */
                            // @ts-ignore
                            setSocket(socket: java.lang.String | string): void
                            /**
                             * Get the domain socket.
                             * @return path to the Redis socket.
                             */
                            // @ts-ignore
                            getSocket(): string
                        }
                    }
                }
            }
        }
    }
}
