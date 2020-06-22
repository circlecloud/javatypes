declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSetCommands {
                        /**
                         * {@code SUNION} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        class SUnionCommand extends java.lang.Object implements org.springframework.data.redis.connection.ReactiveRedisConnection.Command {
                            /**
                             * Creates a new {@link SUnionCommand} given a {@link Collection} of keys.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link SUnionCommand} for a {@link Collection} of values.
                             */
                            // @ts-ignore
                            public static keys(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveSetCommands.SUnionCommand
                            // @ts-ignore
                            public getKey(): java.nio.ByteBuffer
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
