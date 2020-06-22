declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SUNIONSTORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        class SUnionStoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SUnionStoreCommand} given a {@link Collection} of keys.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link SUnionStoreCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static keys(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveSetCommands.SUnionStoreCommand
                            /**
                             * Applies the {@literal key} at which the result is stored. Constructs a new command instance with all previously
                             * configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SUnionStoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storeAt(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SUnionStoreCommand
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
