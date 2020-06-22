declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SADD} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        class SAddCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SAddCommand} given a {@literal value}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link SAddCommand} for a {@literal value}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SAddCommand
                            /**
                             * Creates a new {@link SAddCommand} given a {@link Collection} of values.
                             * @param values must not be {#literal null}.
                             * @return a new {#link SAddCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static values(values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveSetCommands.SAddCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SAddCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public to(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SAddCommand
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
