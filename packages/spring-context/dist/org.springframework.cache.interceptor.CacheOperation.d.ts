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
                abstract class CacheOperation extends java.lang.Object implements org.springframework.cache.interceptor.BasicOperation {
                    /**
                     * Create a new {@link CacheOperation} instance from the given builder.
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(b: org.springframework.cache.interceptor.CacheOperation.Builder)
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getCacheNames(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getKey(): string
                    // @ts-ignore
                    public getKeyGenerator(): string
                    // @ts-ignore
                    public getCacheManager(): string
                    // @ts-ignore
                    public getCacheResolver(): string
                    // @ts-ignore
                    public getCondition(): string
                    /**
                     * This implementation compares the {@code toString()} results.
                     * @see #toString()
                     */
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    /**
                     * This implementation returns {@code toString()}'s hash code.
                     * @see #toString()
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Return an identifying description for this cache operation.
                     * <p>Returned value is produced by calling {@link Builder#getOperationDescription()}
                     * during object construction. This method is used in {@link #hashCode} and
                     * {@link #equals}.
                     * @see Builder#getOperationDescription()
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
