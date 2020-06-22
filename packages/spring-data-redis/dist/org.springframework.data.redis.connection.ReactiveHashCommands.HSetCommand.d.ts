declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHashCommands {
                        /**
                         * {@literal HSET} {@link Command}.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/hset">Redis Documentation: HSET</a>
                         */
                        // @ts-ignore
                        class HSetCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link HSetCommand} given a {@link ByteBuffer key}.
                             * @param value must not be {#literal null}.
                             * @return a new {#link HSetCommand} for {@link ByteBuffer key}.
                             */
                            // @ts-ignore
                            public static value(value: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HSetCommand
                            /**
                             * Creates a new {@link HSetCommand} given a {@link Map} of field values.
                             * @param fieldValueMap must not be {#literal null}.
                             * @return a new {#link HSetCommand} for a {@link Map} of field values.
                             */
                            // @ts-ignore
                            public static fieldValues(fieldValueMap: java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveHashCommands.HSetCommand
                            /**
                             * Applies a field. Constructs a new command instance with all previously configured properties.
                             * @param field must not be {#literal null}.
                             * @return a new {#link HSetCommand} with {@literal field} applied.
                             */
                            // @ts-ignore
                            public ofField(field: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HSetCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link HSetCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public forKey(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HSetCommand
                            /**
                             * Disable upsert. Constructs a new command instance with all previously configured properties.
                             * @return a new {#link HSetCommand} with upsert disabled.
                             */
                            // @ts-ignore
                            public ifValueNotExists(): org.springframework.data.redis.connection.ReactiveHashCommands.HSetCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public isUpsert(): boolean
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getFieldValueMap(): java.util.Map<java.nio.ByteBuffer, java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
