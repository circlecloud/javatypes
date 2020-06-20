declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Base class for cache operations.
                 * @author Costin Leau
                 * @author Stephane Nicoll
                 * @author Marcin Kamionowski
                 * @since 3.1
                 */
                // @ts-ignore
                class CacheOperation extends java.lang.Object implements org.springframework.cache.interceptor.BasicOperation {
                    /**
                     * Create a new {@link CacheOperation} instance from the given builder.
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(b: org.springframework.cache.interceptor.CacheOperation.Builder)
                    // @ts-ignore
                    getName(): java.lang.String
                    // @ts-ignore
                    getCacheNames(): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getKey(): java.lang.String
                    // @ts-ignore
                    getKeyGenerator(): java.lang.String
                    // @ts-ignore
                    getCacheManager(): java.lang.String
                    // @ts-ignore
                    getCacheResolver(): java.lang.String
                    // @ts-ignore
                    getCondition(): java.lang.String
                    /**
                     * This implementation compares the {@code toString()} results.
                     * @see #toString()
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns {@code toString()}'s hash code.
                     * @see #toString()
                     */
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Return an identifying description for this cache operation.
                     * <p>Returned value is produced by calling {@link Builder#getOperationDescription()}
                     * during object construction. This method is used in {@link #hashCode} and
                     * {@link #equals}.
                     * @see Builder#getOperationDescription()
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
