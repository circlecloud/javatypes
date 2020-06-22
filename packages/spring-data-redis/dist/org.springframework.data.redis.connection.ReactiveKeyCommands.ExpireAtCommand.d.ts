declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveKeyCommands {
                        /**
                         * {@code EXPIREAT}/{@code PEXPIREAT} command parameters.
                         * @author Mark Paluch
                         * @see <a href="https://redis.io/commands/expire">Redis Documentation: EXPIREAT</a>
                         * @see <a href="https://redis.io/commands/pexpire">Redis Documentation: PEXPIREAT</a>
                         */
                        // @ts-ignore
                        class ExpireAtCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ExpireAtCommand} given a {@link ByteBuffer key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ExpireCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveKeyCommands.ExpireAtCommand
                            /**
                             * Applies the {@literal expireAt}. Constructs a new command instance with all previously configured properties.
                             * @param expireAt must not be {#literal null}.
                             * @return a new {#link ExpireAtCommand} with {@literal expireAt} applied.
                             */
                            // @ts-ignore
                            public timeout(expireAt: java.time.Instant): org.springframework.data.redis.connection.ReactiveKeyCommands.ExpireAtCommand
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getExpireAt(): java.time.Instant
                        }
                    }
                }
            }
        }
    }
}
