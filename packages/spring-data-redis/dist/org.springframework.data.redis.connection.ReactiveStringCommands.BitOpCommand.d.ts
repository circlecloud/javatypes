declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * {@code BITOP} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/bitop">Redis Documentation: BITOP</a>
                         */
                        // @ts-ignore
                        class BitOpCommand extends java.lang.Object {
                            /**
                             * Creates a new {@link BitOpCommand} given a {@link BitOperation}.
                             * @param bitOp must not be {#literal null}.
                             * @return a new {#link BitCountCommand} for a {@link BitOperation}.
                             */
                            // @ts-ignore
                            public static perform(bitOp: org.springframework.data.redis.connection.RedisStringCommands.BitOperation): org.springframework.data.redis.connection.ReactiveStringCommands.BitOpCommand
                            /**
                             * Applies the operation to {@literal keys}. Constructs a new command instance with all previously configured
                             * properties.
                             * @param keys must not be {#literal null}.
                             * @return a new {#link BitOpCommand} with {@link Range} applied.
                             */
                            // @ts-ignore
                            public onKeys(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): org.springframework.data.redis.connection.ReactiveStringCommands.BitOpCommand
                            /**
                             * Applies the {@literal key} to store the result at. Constructs a new command instance with all previously
                             * configured properties.
                             * @param destinationKey must not be {#literal null}.
                             * @return a new {#link BitOpCommand} with {@link Range} applied.
                             */
                            // @ts-ignore
                            public andSaveAs(destinationKey: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.BitOpCommand
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getBitOp(): org.springframework.data.redis.connection.RedisStringCommands.BitOperation
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getKeys(): Array<java.nio.ByteBuffer>
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getDestinationKey(): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
