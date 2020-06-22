declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SISMEMBER} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        class SIsMemberCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SIsMemberCommand} given a {@literal value}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link SIsMemberCommand} for a {@literal value}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SIsMemberCommand
                            /**
                             * Applies the {@literal set} key. Constructs a new command instance with all previously configured properties.
                             * @param set must not be {#literal null}.
                             * @return a new {#link SIsMemberCommand} with {@literal set} applied.
                             */
                            // @ts-ignore
                            public of(set: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SIsMemberCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
