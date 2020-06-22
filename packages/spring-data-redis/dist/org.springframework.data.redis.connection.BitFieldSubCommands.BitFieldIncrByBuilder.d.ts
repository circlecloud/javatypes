declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace BitFieldSubCommands {
                        /**
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class BitFieldIncrByBuilder extends java.lang.Object {
                            // @ts-ignore
                            public forType(type: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrByBuilder
                            /**
                             * Set the zero based bit {@literal offset}.
                             * @param offset must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public valueAt(offset: number /*long*/): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrByBuilder
                            /**
                             * Set the bit offset.
                             * @param offset must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public valueAt(offset: org.springframework.data.redis.connection.BitFieldSubCommands.Offset): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrByBuilder
                            /**
                             * Set the {@link BitFieldIncrBy.Overflow} to be used for this and any subsequent {@link BitFieldIncrBy} commands.
                             * @param overflow
                             * @return 
                             */
                            // @ts-ignore
                            public overflow(overflow: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrBy.Overflow): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrByBuilder
                            /**
                             * Set the value used for increasing.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            public by(value: number /*long*/): org.springframework.data.redis.connection.BitFieldSubCommands
                        }
                    }
                }
            }
        }
    }
}
