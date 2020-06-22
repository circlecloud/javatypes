declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * @author Christoph Strobl
                     * @since 1.5
                     */
                    // @ts-ignore
                    interface HyperLogLogOperations<K, V> {
                        /**
                         * Adds the given {@literal values} to the {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 1 of at least one of the values was added to the key; 0 otherwise. {#literal null} when used in pipeline /
                         *          transaction.
                         */
                        // @ts-ignore
                        add(key: K, ...values: V[]): number
                        /**
                         * Gets the current number of elements within the {@literal key}.
                         * @param keys must not be {#literal null} or {@literal empty}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        size(...keys: K[]): number
                        /**
                         * Merges all values of given {@literal sourceKeys} into {@literal destination} key.
                         * @param destination key of HyperLogLog to move source keys into.
                         * @param sourceKeys must not be {#literal null} or {@literal empty}.
                         * @return {#literal null} when used in pipeline / transaction.
                         */
                        // @ts-ignore
                        union(destination: K, ...sourceKeys: K[]): number
                        /**
                         * Removes the given {@literal key}.
                         * @param key must not be {#literal null}.
                         */
                        // @ts-ignore
                        delete(key: K): void
                    }
                }
            }
        }
    }
}
