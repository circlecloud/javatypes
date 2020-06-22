declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SINTERSTORE} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        class SInterStoreCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link SInterStoreCommand} given a {@link Collection} of keys.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link SInterStoreCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static keys(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveSetCommands.SInterStoreCommand
                            /**
                             * Applies the {@literal key} at which the result is stored. Constructs a new command instance with all previously
                             * configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link SInterStoreCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public storeAt(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveSetCommands.SInterStoreCommand
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
