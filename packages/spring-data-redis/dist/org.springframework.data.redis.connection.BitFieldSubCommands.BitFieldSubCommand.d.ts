declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace BitFieldSubCommands {
                        /**
                         * Sub command to be used as part of {@link BitFieldSubCommands}.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface BitFieldSubCommand {
                            /**
                             * The actual sub command
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getCommand(): string
                            /**
                             * The {@link BitFieldType} to apply for the command.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getType(): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType
                            /**
                             * The bit offset to apply for the command.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getOffset(): org.springframework.data.redis.connection.BitFieldSubCommands.Offset
                        }
                    }
                }
            }
        }
    }
}
