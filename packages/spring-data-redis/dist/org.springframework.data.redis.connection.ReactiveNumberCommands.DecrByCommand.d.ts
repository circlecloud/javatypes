declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveNumberCommands {
                        /**
                         * {@code DECRBY} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/decrby">Redis Documentation: DECRBY</a>
                         */
                        // @ts-ignore
                        class DecrByCommand<T extends java.lang.Number> extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link DecrByCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link DecrByCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static decr<T extends java.lang.Number>(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveNumberCommands.DecrByCommand<T>
                            /**
                             * Applies the numeric {@literal value}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link DecrByCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public by(value: T): org.springframework.data.redis.connection.ReactiveNumberCommands.DecrByCommand<T>
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): T
                        }
                    }
                }
            }
        }
    }
}
