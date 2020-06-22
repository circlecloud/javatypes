declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHyperLogLogCommands {
                        /**
                         * {@code PFCOUNT} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/pfcount">Redis Documentation: PFCOUNT</a>
                         */
                        // @ts-ignore
                        class PfCountCommand extends java.lang.Object implements org.springframework.data.redis.connection.ReactiveRedisConnection.Command {
                            /**
                             * Creates a new {@link PfCountCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link PfCountCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static valueIn(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfCountCommand
                            /**
                             * Creates a new {@link PfCountCommand} given a {@link Collection} of {@literal keys}.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link PfCountCommand} for {@literal keys}.
                             */
                            // @ts-ignore
                            public static valuesIn(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfCountCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getKeys(): Array<java.nio.ByteBuffer>
                            // @ts-ignore
                            public getKey(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
