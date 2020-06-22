declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis HyperLogLog commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveHyperLogLogCommands {
                        /**
                         * Adds given {@literal value} to the HyperLogLog stored at given {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfadd">Redis Documentation: PFADD</a>
                         */
                        // @ts-ignore
                        pfAdd(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Adds given {@literal values} to the HyperLogLog stored at given {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfadd">Redis Documentation: PFADD</a>
                         */
                        // @ts-ignore
                        pfAdd(key: java.nio.ByteBuffer, values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Adds given {@literal values} to the HyperLogLog stored at given {@literal key}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfadd">Redis Documentation: PFADD</a>
                         */
                        // @ts-ignore
                        pfAdd(commands: object): object
                        /**
                         * Return the approximated cardinality of the structures observed by the HyperLogLog at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfcount">Redis Documentation: PFCOUNT</a>
                         */
                        // @ts-ignore
                        pfCount(key: java.nio.ByteBuffer): object
                        /**
                         * Return the approximated cardinality of the structures observed by the HyperLogLog at {@literal key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfcount">Redis Documentation: PFCOUNT</a>
                         */
                        // @ts-ignore
                        pfCount(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Return the approximated cardinality of the structures observed by the HyperLogLog at {@literal key(s)}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfcount">Redis Documentation: PFCOUNT</a>
                         */
                        // @ts-ignore
                        pfCount(commands: object): object
                        /**
                         * Merge N different HyperLogLogs at {@literal sourceKeys} into a single {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param sourceKeys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfmerge">Redis Documentation: PFMERGE</a>
                         */
                        // @ts-ignore
                        pfMerge(destinationKey: java.nio.ByteBuffer, sourceKeys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Merge N different HyperLogLogs at {@literal sourceKeys} into a single {@literal destinationKey}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/pfmerge">Redis Documentation: PFMERGE</a>
                         */
                        // @ts-ignore
                        pfMerge(commands: object): object
                    }
                }
            }
        }
    }
}
