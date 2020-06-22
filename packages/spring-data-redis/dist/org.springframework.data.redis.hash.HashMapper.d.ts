declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace hash {
                    /**
                     * Core mapping contract between Java types and Redis hashes/maps. It's up to the implementation to support nested
                     * objects.
                     * @param <T> Object type
                     * @param <K> Redis Hash field type
                     * @param <V> Redis Hash value type
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    interface HashMapper<T, K, V> {
                        /**
                         * Convert an {@code object} to a map that can be used with Redis hashes.
                         * @param object
                         * @return 
                         */
                        // @ts-ignore
                        toHash(object: T): java.util.Map<K, V>
                        /**
                         * Convert a {@code hash} (map) to an object.
                         * @param hash
                         * @return 
                         */
                        // @ts-ignore
                        fromHash(hash: java.util.Map<K, V>): T
                    }
                }
            }
        }
    }
}
