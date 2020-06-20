declare namespace org {
    namespace springframework {
        namespace cache {
            namespace concurrent {
                /**
                 * {@link FactoryBean} for easy configuration of a {@link ConcurrentMapCache}
                 * when used within a Spring container. Can be configured through bean properties;
                 * uses the assigned Spring bean name as the default cache name.
                 * <p>Useful for testing or simple caching scenarios, typically in combination
                 * with {@link org.springframework.cache.support.SimpleCacheManager} or
                 * dynamically through {@link ConcurrentMapCacheManager}.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class ConcurrentMapCacheFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify the name of the cache.
                     * <p>Default is "" (empty String).
                     */
                    // @ts-ignore
                    setName(name: string): void
                    /**
                     * Specify the ConcurrentMap to use as an internal store
                     * (possibly pre-populated).
                     * <p>Default is a standard {@link java.util.concurrent.ConcurrentHashMap}.
                     */
                    // @ts-ignore
                    setStore(store: java.util.concurrent.ConcurrentMap<java.lang.Object, java.lang.Object>): void
                    /**
                     * Set whether to allow {@code null} values
                     * (adapting them to an internal null holder value).
                     * <p>Default is "true".
                     */
                    // @ts-ignore
                    setAllowNullValues(allowNullValues: boolean): void
                    // @ts-ignore
                    setBeanName(beanName: string): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getObject(): org.springframework.cache.concurrent.ConcurrentMapCache
                    // @ts-ignore
                    getObjectType(): java.lang.Class<?>
                    // @ts-ignore
                    isSingleton(): boolean
                }
            }
        }
    }
}
