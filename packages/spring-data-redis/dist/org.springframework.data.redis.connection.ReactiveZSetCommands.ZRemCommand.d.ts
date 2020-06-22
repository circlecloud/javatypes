declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZREM} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zrem">Redis Documentation: ZREM</a>
                         */
                        // @ts-ignore
                        class ZRemCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZRemCommand} given a {@link Tuple}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link ZAddCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static values(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemCommand
                            /**
                             * Creates a new {@link ZRemCommand} given a {@link Collection} of {@link Tuple}.
                             * @param values must not be {#literal null}.
                             * @return a new {#link ZAddCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static values(values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZRemCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZRemCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getValues(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
