declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace BitFieldSubCommands {
                        /**
                         * The actual Redis bitfield type representation for signed and unsigned integers used with
                         * {@link BitFieldSubCommand}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class BitFieldType extends java.lang.Object {
                            /**
                             * 8 bit signed Integer
                             */
                            // @ts-ignore
                            public static readonly INT_8: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 16 bit signed Integer
                             */
                            // @ts-ignore
                            public static readonly INT_16: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 32 bit signed Integer
                             */
                            // @ts-ignore
                            public static readonly INT_32: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 64 bit signed Integer
                             */
                            // @ts-ignore
                            public static readonly INT_64: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 8 bit unsigned Integer
                             */
                            // @ts-ignore
                            public static readonly UINT_8: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 16 bit unsigned Integer
                             */
                            // @ts-ignore
                            public static readonly UINT_16: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 32 bit unsigned Integer
                             */
                            // @ts-ignore
                            public static readonly UINT_32: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * 64 bit unsigned Integer
                             */
                            // @ts-ignore
                            public static readonly UINT_64: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * Create new signed {@link BitFieldType}.
                             * @param bits must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static signed(bits: number /*int*/): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * Create new unsigned {@link BitFieldType}.
                             * @param bits must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static unsigned(bits: number /*int*/): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * @return true if {#link BitFieldType} is signed.
                             */
                            // @ts-ignore
                            public isSigned(): boolean
                            /**
                             * Get the actual bits of the type.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getBits(): number /*int*/
                            /**
                             * Get the Redis Command representation.
                             * @return 
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
