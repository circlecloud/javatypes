declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveKeyCommands {
                        /**
                         * {@code EXPIRE}/{@code PEXPIRE} command parameters.
                         * @author Mark Paluch
                         * @see <a href="https://redis.io/commands/expire">Redis Documentation: EXPIRE</a>
                         * @see <a href="https://redis.io/commands/pexpire">Redis Documentation: PEXPIRE</a>
                         */
                        // @ts-ignore
                        class ExpireCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ExpireCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ExpireCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveKeyCommands.ExpireCommand
                            /**
                             * Applies the {@literal timeout}. Constructs a new command instance with all previously configured properties.
                             * @param timeout must not be {#literal null}.
                             * @return a new {#link ExpireCommand} with {@literal timeout} applied.
                             */
                            // @ts-ignore
                            public timeout(timeout: java.time.Duration): org.springframework.data.redis.connection.ReactiveKeyCommands.ExpireCommand
                            /**
                             * @return can be {#literal null}.
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
