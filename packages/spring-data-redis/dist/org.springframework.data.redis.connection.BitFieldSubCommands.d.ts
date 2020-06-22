declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * The actual {@code BITFIELD} command representation holding several {@link BitFieldSubCommand}s to execute.
                     * @author Christoph Strobl
                     * @author Qiang Lee
                     * @since 2.1
                     */
                    // @ts-ignore
                    class BitFieldSubCommands extends java.lang.Object implements java.lang.Iterable<org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSubCommand> {
                        /**
                         * Creates a new {@link BitFieldSubCommands}.
                         * @return 
                         */
                        // @ts-ignore
                        public static create(): org.springframework.data.redis.connection.BitFieldSubCommands
                        /**
                         * Obtain a new {@link BitFieldGetBuilder} for creating and adding a {@link BitFieldGet} sub command.
                         * @param type must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        public get(type: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldGetBuilder
                        /**
                         * Create new {@link BitFieldSubCommands} adding given {@link BitFieldGet} to the sub commands.
                         * @param get must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        get(get: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldGet): org.springframework.data.redis.connection.BitFieldSubCommands
                        /**
                         * Obtain a new {@link BitFieldSetBuilder} for creating and adding a {@link BitFieldSet} sub command.
                         * @param type must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        public set(type: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSetBuilder
                        /**
                         * Create new {@link BitFieldSubCommands} adding given {@link BitFieldSet} to the sub commands.
                         * @param set must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        set(set: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSet): org.springframework.data.redis.connection.BitFieldSubCommands
                        /**
                         * Obtain a new {@link BitFieldIncrByBuilder} for creating and adding a {@link BitFieldIncrby} sub command.
                         * @param type must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        public incr(type: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldType): org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrByBuilder
                        /**
                         * Create new {@link BitFieldSubCommands} adding given {@link BitFieldIncrBy} to the sub commands.
                         * @param get must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        incr(incrBy: org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldIncrBy): org.springframework.data.redis.connection.BitFieldSubCommands
                        /**
                         * Get the {@link List} of sub commands.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public getSubCommands(): Array<org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSubCommand>
                        // @ts-ignore
                        public iterator(): java.util.Iterator<org.springframework.data.redis.connection.BitFieldSubCommands.BitFieldSubCommand>
                    }
                }
            }
        }
    }
}
