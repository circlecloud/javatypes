declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZINCRBY} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zincrby">Redis Documentation: ZINCRBY</a>
                         */
                        // @ts-ignore
                        class ZIncrByCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZIncrByCommand} given a {@link ByteBuffer member}.
                             * @param member must not be {#literal null}.
                             * @return a new {#link ZAddCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static scoreOf(member: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZIncrByCommand
                            /**
                             * Applies the numeric {@literal increment}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param increment must not be {#literal null}.
                             * @return a new {#link ZIncrByCommand} with {@literal increment} applied.
                             */
                            // @ts-ignore
                            public by(increment: java.lang.Number): org.springframework.data.redis.connection.ReactiveZSetCommands.ZIncrByCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZIncrByCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storedWithin(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZIncrByCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getIncrement(): java.lang.Number
                        }
                    }
                }
            }
        }
    }
}
