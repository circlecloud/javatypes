declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveNumberCommands {
                        /**
                         * {@code HINCRBY} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/hincrby">Redis Documentation: HINCRBY</a>
                         */
                        // @ts-ignore
                        class HIncrByCommand<T extends java.lang.Number> extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link HIncrByCommand} given a {@link ByteBuffer key}.
                             * @param field must not be {#literal null}.
                             * @return a new {#link HIncrByCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static incr<T extends java.lang.Number>(field: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveNumberCommands.HIncrByCommand<T>
                            /**
                             * Applies the numeric {@literal value}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param value must not be {#literal null}.
                             * @return a new {#link HIncrByCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public by(value: T): org.springframework.data.redis.connection.ReactiveNumberCommands.HIncrByCommand<T>
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link HIncrByCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveNumberCommands.HIncrByCommand<T>
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): T
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getField(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
