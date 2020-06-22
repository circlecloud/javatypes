declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace BitFieldSubCommands {
                        /**
                         * Offset used inside a {@link BitFieldSubCommand}. Can be zero or type based. See
                         * <a href="https://redis.io/commands/bitfield#bits-and-positional-offsets">Bits and positional offsets</a> in the
                         * Redis reference.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class Offset extends java.lang.Object {
                            /**
                             * Creates new zero based offset. <br />
                             * <b>NOTE:</b> change to type based offset by calling {@link #multipliedByTypeLength()}.
                             * @param offset must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static offset(offset: number /*long*/): org.springframework.data.redis.connection.BitFieldSubCommands.Offset
                            /**
                             * Creates new type based offset.
                             * @return 
                             */
                            // @ts-ignore
                            public multipliedByTypeLength(): org.springframework.data.redis.connection.BitFieldSubCommands.Offset
                            /**
                             * @return true if offset starts at 0 and is not multiplied by the type length.
                             */
                            // @ts-ignore
                            public isZeroBased(): boolean
                            /**
                             * @return the actual offset value
                             */
                            // @ts-ignore
                            public getValue(): number /*long*/
                            /**
                             * @return the Redis Command representation
                             */
                            // @ts-ignore
                            public asString(): string
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
