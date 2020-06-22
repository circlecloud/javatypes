declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis cardinality specific operations working on a HyperLogLog multiset.
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveHyperLogLogOperations<K, V> {
                        /**
                         * Adds the given {@literal values} to the {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 1 of at least one of the values was added to the key; 0 otherwise.
                         */
                        // @ts-ignore
                        add(key: K, ...values: V[]): object
                        /**
                         * Gets the current number of elements within the {@literal key}.
                         * @param keys must not be {#literal null} or {@literal empty}.
                         * @return 
                         */
                        // @ts-ignore
                        size(...keys: K[]): object
                        /**
                         * Merges all values of given {@literal sourceKeys} into {@literal destination} key.
                         * @param destination key of HyperLogLog to move source keys into.
                         * @param sourceKeys must not be {#literal null} or {@literal empty}.
                         */
                        // @ts-ignore
                        union(destination: K, ...sourceKeys: K[]): object
                        /**
                         * Removes the given {@literal key}.
                         * @param key must not be {#literal null}.
                         */
                        // @ts-ignore
                        delete(key: K): object
                    }
                }
            }
        }
    }
}
