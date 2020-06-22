declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * {@code RPOPLPUSH} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/rpoplpush">Redis Documentation: RPOPLPUSH</a>
                         */
                        // @ts-ignore
                        class RPopLPushCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link RPopLPushCommand} given a {@literal sourceKey}.
                             * @param sourceKey must not be {#literal null}.
                             * @return a new {#link RPopLPushCommand} for a {@literal sourceKey}.
                             */
                            // @ts-ignore
                            public static from(sourceKey: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.RPopLPushCommand
                            /**
                             * Applies the {@literal destinationKey}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param destinationKey must not be {#literal null}.
                             * @return a new {#link BPopCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public to(destinationKey: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveListCommands.RPopLPushCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getDestination(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
