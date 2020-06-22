declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@literal HyperLogLog} specific commands supported by Redis.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.5
                     */
                    // @ts-ignore
                    interface RedisHyperLogLogCommands {
                        /**
                         * Adds given {@literal values} to the HyperLogLog stored at given {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/pfadd">Redis Documentation: PFADD</a>
                         */
                        // @ts-ignore
                        pfAdd(key: number /*byte*/[], ...values: number /*byte*/[][]): number
                        /**
                         * Return the approximated cardinality of the structures observed by the HyperLogLog at {@literal key(s)}.
                         * @param keys must not be {#literal null}.
                         * @return {#literal null} when used in pipeline / transaction.
                         * @see <a href="https://redis.io/commands/pfcount">Redis Documentation: PFCOUNT</a>
                         */
                        // @ts-ignore
                        pfCount(...keys: number /*byte*/[][]): number
                        /**
                         * Merge N different HyperLogLogs at {@literal sourceKeys} into a single {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param sourceKeys must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/pfmerge">Redis Documentation: PFMERGE</a>
                         */
                        // @ts-ignore
                        pfMerge(destinationKey: number /*byte*/[], ...sourceKeys: number /*byte*/[][]): void
                    }
                }
            }
        }
    }
}
