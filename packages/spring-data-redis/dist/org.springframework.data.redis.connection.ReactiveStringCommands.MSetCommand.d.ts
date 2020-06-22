declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code MSET} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/mset">Redis Documentation: MSET</a>
                         */
                        // @ts-ignore
                        class MSetCommand extends java.lang.Object implements org.springframework.data.redis.connection.ReactiveRedisConnection.Command {
                            // @ts-ignore
                            public getKey(): java.nio.ByteBuffer
                            /**
                             * Creates a new {@link MSetCommand} given a {@link Map} of key-value tuples.
                             * @param keyValuePairs must not be {#literal null}.
                             * @return a new {#link MSetCommand} for a {@link Map} of key-value tuples.
                             */
                            // @ts-ignore
                            public static mset(keyValuePairs: java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveStringCommands.MSetCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getKeyValuePairs(): java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
