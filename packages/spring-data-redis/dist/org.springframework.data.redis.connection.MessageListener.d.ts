declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Listener of messages published in Redis.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface MessageListener {
                        /**
                         * Callback for processing received objects through Redis.
                         * @param message message must not be {#literal null}.
                         * @param pattern pattern matching the channel (if specified) - can be {#literal null}.
                         */
                        // @ts-ignore
                        onMessage(message: org.springframework.data.redis.connection.Message, pattern: number /*byte*/[]): void
                    }
                }
            }
        }
    }
}
