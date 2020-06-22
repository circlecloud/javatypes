declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveNumberCommands {
                        /**
                         * {@code INCRBY} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/incrby">Redis Documentation: INCRBY</a>
                         */
                        // @ts-ignore
                        class IncrByCommand<T extends java.lang.Number> extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link IncrByCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link IncrByCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static incr<T extends java.lang.Number>(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveNumberCommands.IncrByCommand<T>
                            /**
                             * Applies the numeric {@literal value}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link IncrByCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public by(value: T): org.springframework.data.redis.connection.ReactiveNumberCommands.IncrByCommand<T>
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
