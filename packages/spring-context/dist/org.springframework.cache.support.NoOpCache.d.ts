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
                    constructor(name: string)
                    // @ts-ignore
                    getName(): java.lang.String
                    // @ts-ignore
                    getNativeCache(): java.lang.Object
                    // @ts-ignore
                    get(key: any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    get<T>(key: any, type: java.lang.Class<T>): T
                    // @ts-ignore
                    get<T>(key: any, valueLoader: java.util.concurrent.Callable<T>): T
                    // @ts-ignore
                    put(key: any, value: any): void
                    // @ts-ignore
                    putIfAbsent(key: any, value: any): org.springframework.cache.Cache.ValueWrapper
                    // @ts-ignore
                    evict(key: any): void
                    // @ts-ignore
                    evictIfPresent(key: any): boolean
                    // @ts-ignore
                    clear(): void
                    // @ts-ignore
                    invalidate(): boolean
                }
            }
        }
    }
}
