declare namespace org {
    namespace springframework {
        namespace cache {
            namespace support {
                /**
                 * A no operation {@link Cache} implementation suitable for disabling caching.
                 * <p>Will simply accept any items into the cache not actually storing them.
                 * @author Costin Leau
                 * @author Stephane Nicoll
                 * @since 4.3.4
                 */
                // @ts-ignore
                class NoOpCache extends java.lang.Object implements org.springframework.cache.Cache {
                    /**
                     * Create a {@link NoOpCache} instance with the specified name.
                     * @param name the name of the cache
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getNativeCache(): any
                    // @ts-ignore
                    public get(key: java.lang.Object | any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    public get<T>(key: java.lang.Object | any, type: java.lang.Class<T>): T
                    // @ts-ignore
                    public get<T>(key: java.lang.Object | any, valueLoader: java.util.concurrent.Callable<T>): T
                    // @ts-ignore
                    public put(key: java.lang.Object | any, value: java.lang.Object | any): void
                    // @ts-ignore
                    public putIfAbsent(key: java.lang.Object | any, value: java.lang.Object | any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    public evict(key: java.lang.Object | any): void
                    // @ts-ignore
                    public evictIfPresent(key: java.lang.Object | any): boolean
                    // @ts-ignore
                    public clear(): void
                    // @ts-ignore
                    public invalidate(): boolean
                }
            }
        }
    }
}
