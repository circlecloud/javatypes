declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SMOVE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        class SMoveCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SMoveCommand} given a {@literal value}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link SMoveCommand} for a {@literal value}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SMoveCommand
                            /**
                             * Applies the {@literal source} key. Constructs a new command instance with all previously configured properties.
                             * @param source must not be {#literal null}.
                             * @return a new {#link SMoveCommand} with {@literal source} applied.
                             */
                            // @ts-ignore
                            public from(source: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SMoveCommand
                            /**
                             * Applies the {@literal destination} key. Constructs a new command instance with all previously configured
                             * properties.
                             * @param destination must not be {#literal null}.
                             * @return a new {#link SMoveCommand} with {@literal destination} applied.
                             */
                            // @ts-ignore
                            public to(destination: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SMoveCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getDestination(): java.nio.ByteBuffer
                            /**
                             * @return never {#literal null}.
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
