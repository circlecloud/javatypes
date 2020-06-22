declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHyperLogLogCommands {
                        /**
                         * {@code PFADD} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/pfadd">Redis Documentation: PFADD</a>
                         */
                        // @ts-ignore
                        class PfAddCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link PfAddCommand} given a {@link ByteBuffer value}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link PfAddCommand} for {@link ByteBuffer value}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfAddCommand
                            /**
                             * Creates a new {@link PfAddCommand} given a {@link Collection} of {@link ByteBuffer values}.
                             * @param values must not be {#literal null}.
                             * @return a new {#link PfAddCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static values(values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfAddCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link PfAddCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public to(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHyperLogLogCommands.PfAddCommand
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
