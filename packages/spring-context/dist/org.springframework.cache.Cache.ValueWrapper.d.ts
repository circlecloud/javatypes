declare namespace org {
    namespace springframework {
        namespace cache {
            namespace Cache {
                /**
                 * A (wrapper) object representing a cache value.
                 */
                // @ts-ignore
                interface ValueWrapper {
                    /**
                     * Return the actual value in the cache.
                     */
                    // @ts-ignore
                    get(): java.lang.Object
                }
            }
        }
    }
}
