declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @since 1.4
                     */
                    // @ts-ignore
                    interface RedisSentinelConnection extends org.springframework.data.redis.connection.RedisSentinelCommands, java.io.Closeable {
                        /**
                         * @return true if connected to server
                         */
                        // @ts-ignore
                        isOpen(): boolean
                    }
                }
            }
        }
    }
}
