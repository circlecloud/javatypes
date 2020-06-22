declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace BitFieldSubCommands {
                        /**
                         * The {@code SET} sub command used with {@link BitFieldSubCommands}.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class BitFieldSet extends org.springframework.data.redis.connection.BitFieldSubCommands.AbstractBitFieldSubCommand {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getCommand(): string
                            /**
                             * Get the value to set.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
