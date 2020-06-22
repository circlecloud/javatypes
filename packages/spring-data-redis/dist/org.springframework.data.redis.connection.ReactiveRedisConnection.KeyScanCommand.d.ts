declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * {@link Command} for key-bound scan operations like {@code SCAN}, {@code HSCAN}, {@code SSCAN} and {@code
                         * ZSCAN}.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class KeyScanCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link KeyScanCommand} given a {@code key}.
                             * @param key must not be {#literal null}.
                             * @return a new {#link KeyScanCommand} for {@code key}.
                             */
                            // @ts-ignore
                            public static key(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveRedisConnection.KeyScanCommand
                            /**
                             * Applies {@link ScanOptions}. Constructs a new command instance with all previously configured properties.
                             * @param options must not be {#literal null}.
                             * @return a new {#link KeyScanCommand} with {@link ScanOptions} applied.
                             */
                            // @ts-ignore
                            public withOptions(options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.connection.ReactiveRedisConnection.KeyScanCommand
                            /**
                             * Get the {@link ScanOptions} to apply.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getOptions(): org.springframework.data.redis.core.ScanOptions
                        }
                    }
                }
            }
        }
    }
}
