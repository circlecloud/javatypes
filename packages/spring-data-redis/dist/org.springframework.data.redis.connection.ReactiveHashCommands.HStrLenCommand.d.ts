declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveHashCommands {
                        /**
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/hstrlen">Redis Documentation: HSTRLEN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        class HStrLenCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Specify the {@code field} within the hash to get the length of the {@code value} of.ø
                             * @param field must not be {#literal null}.
                             * @return new instance of {#link HStrLenCommand}.
                             */
                            // @ts-ignore
                            public static lengthOf(field: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HStrLenCommand
                            /**
                             * Define the {@code key} the hash is stored at.
                             * @param key must not be {#literal null}.
                             * @return new instance of {#link HStrLenCommand}.
                             */
                            // @ts-ignore
                            public from(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveHashCommands.HStrLenCommand
                            /**
                             * @return the field.
                             */
                            // @ts-ignore
                            public getField(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
