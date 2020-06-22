declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/blpop">Redis Documentation: BLPOP</a>
                         * @see <a href="https://redis.io/commands/brpop">Redis Documentation: BRPOP</a>
                         */
                        // @ts-ignore
                        class BPopCommand extends java.lang.Object implements org.springframework.data.redis.connection.ReactiveRedisConnection.Command {
                            /**
                             * Creates a new {@link BPopCommand} for right push ({@literal BRPOP}).
                             * @return a new {#link BPopCommand} for right push ({@literal BRPOP}).
                             */
                            // @ts-ignore
                            public static right(): org.springframework.data.redis.connection.ReactiveListCommands.BPopCommand
                            /**
                             * Creates a new {@link BPopCommand} for right push ({@literal BLPOP}).
                             * @return a new {#link BPopCommand} for right push ({@literal BLPOP}).
                             */
                            // @ts-ignore
                            public static left(): org.springframework.data.redis.connection.ReactiveListCommands.BPopCommand
                            /**
                             * Applies the {@literal value}. Constructs a new command instance with all previously configured properties.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link BPopCommand} with {@literal value} applied.
                             */
                            // @ts-ignore
                            public from(keys: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveListCommands.BPopCommand
                            /**
                             * Applies a {@link Duration timeout}. Constructs a new command instance with all previously configured properties.
                             * @param timeout must not be {#literal null}.
                             * @return a new {#link BPopCommand} with {@link Duration timeout} applied.
                             */
                            // @ts-ignore
                            public blockingFor(timeout: java.time.Duration): org.springframework.data.redis.connection.ReactiveListCommands.BPopCommand
                            // @ts-ignore
                            public getKey(): java.nio.ByteBuffer
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getKeys(): Array<java.nio.ByteBuffer>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getTimeout(): java.time.Duration
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getDirection(): org.springframework.data.redis.connection.ReactiveListCommands.Direction
                        }
                    }
                }
            }
        }
    }
}
