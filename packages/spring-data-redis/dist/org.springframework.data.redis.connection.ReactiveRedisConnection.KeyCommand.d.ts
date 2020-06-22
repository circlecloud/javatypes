declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * {@link Command} for key-bound operations.
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class KeyCommand extends java.lang.Object implements org.springframework.data.redis.connection.ReactiveRedisConnection.Command {
                            /**
                             * Creates a new {@link KeyCommand} given a {@code key}.
                             * @param key can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(key: java.nio.ByteBuffer)
                            // @ts-ignore
                            public getKey(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
