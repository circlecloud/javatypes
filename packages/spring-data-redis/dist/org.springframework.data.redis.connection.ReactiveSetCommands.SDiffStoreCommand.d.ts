declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SDIFFSTORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        class SDiffStoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SDiffStoreCommand} given a {@link Collection} of keys.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link SDiffStoreCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static keys(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveSetCommands.SDiffStoreCommand
                            /**
                             * Applies the {@literal key} at which the result is stored. Constructs a new command instance with all previously
                             * configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SDiffStoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storeAt(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SDiffStoreCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getKeys(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
