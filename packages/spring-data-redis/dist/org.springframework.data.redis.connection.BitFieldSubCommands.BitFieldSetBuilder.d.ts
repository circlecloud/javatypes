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
                        class BitFieldSetBuilder extends java.lang.Object {
                            // @ts-ignore
                            public forType(type: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSetBuilder
                            /**
                             * Set the zero based bit {@literal offset}.
                             * @param offset must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public valueAt(offset: number /*long*/): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSetBuilder
                            /**
                             * Set the bit offset.
                             * @param offset must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public valueAt(offset: org.springframework.data.redis.connection.BitFieldSubCommands.Offset): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSetBuilder
                            /**
                             * Set the value.
                             * @param value must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public to(value: number /*long*/): org.springframework.data.redis.connection.BitFieldSubCommands
                        }
                    }
                }
            }
        }
    }
}
