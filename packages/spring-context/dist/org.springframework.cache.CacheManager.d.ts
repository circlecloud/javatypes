declare namespace org {
    namespace springframework {
        namespace cache {
            /**
             * Spring's central cache manager SPI.
             * <p>Allows for retrieving named {@link Cache} regions.
             * @author Costin Leau
             * @author Sam Brannen
             * @since 3.1
             */
            // @ts-ignore
            interface CacheManager {
                /**
                 * Get the cache associated with the given name.
                 * <p>Note that the cache may be lazily created at runtime if the
                 * native provider supports it.
                 * @param name the cache identifier (must not be {#code null})
                 * @return the associated cache, or {#code null} if such a cache
                 *  does not exist or could be not created
                 */
                // @ts-ignore
                getCache(name: string): org.springframework.cache.Cache
                /**
                 * Get a collection of the cache names known by this manager.
                 * @return the names of all caches known by the cache manager
                 */
                // @ts-ignore
                getCacheNames(): java.util.Collection<java.lang.String>
            }
        }
    }
}
