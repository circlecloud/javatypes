declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace BitFieldSubCommands {
                        /**
                         * The {@code INCRBY} sub command used with {@link BitFieldSubCommands}.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class BitFieldIncrBy extends org.springframework.data.redis.connection.BitFieldSubCommands.AbstractBitFieldSubCommand {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getCommand(): string
                            /**
                             * Get the increment value.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): number /*long*/
                            /**
                             * Get the overflow to apply. Can be {@literal null} to use redis defaults.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getOverflow(): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrBy.Overflow
                        }
                    }
                }
            }
        }
    }
}
