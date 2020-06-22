declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code BRPOPLPUSH} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/brpoplpush">Redis Documentation: BRPOPLPUSH</a>
                         */
                        // @ts-ignore
                        class BRPopLPushCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link BRPopLPushCommand} given a {@literal sourceKey}.
                             * @param sourceKey must not be {#literal null}.
                             * @return a new {#link BRPopLPushCommand} for a {@literal sourceKey}.
                             */
                            // @ts-ignore
                            public static from(sourceKey: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.BRPopLPushCommand
                            /**
                             * Applies the {@literal destinationKey}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param destinationKey must not be {#literal null}.
                             * @return a new {#link BRPopLPushCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public to(destinationKey: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.BRPopLPushCommand
                            /**
                             * Applies a {@link Duration timeout}. Constructs a new command instance with all previously configured properties.
                             * @param timeout must not be {#literal null}.
                             * @return a new {#link BRPopLPushCommand} with {@link Duration timeout} applied.
                             */
                            // @ts-ignore
                            public blockingFor(timeout: java.time.Duration): org.springframework.data.redis.connection.ReactiveListCommands.BRPopLPushCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getDestination(): java.nio.ByteBuffer
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getTimeout(): java.time.Duration
                        }
                    }
                }
            }
        }
    }
}
