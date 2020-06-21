declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace classreading {
                    /**
                     * Caching implementation of the {@link MetadataReaderFactory} interface,
                     * caching a {@link MetadataReader} instance per Spring {@link Resource} handle
                     * (i.e. per ".class" file).
                     * @author Juergen Hoeller
                     * @author Costin Leau
                     * @since 2.5
                     */
                    // @ts-ignore
                    class CachingMetadataReaderFactory extends org.springframework.core.type.classreading.SimpleMetadataReaderFactory {
                        /**
                         * Create a new CachingMetadataReaderFactory for the default class loader,
                         * using a local resource cache.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new CachingMetadataReaderFactory for the given {@link ClassLoader},
                         * using a local resource cache.
                         * @param classLoader the ClassLoader to use
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Create a new CachingMetadataReaderFactory for the given {@link ResourceLoader},
                         * using a shared resource cache if supported or a local resource cache otherwise.
                         * @param resourceLoader the Spring ResourceLoader to use
                         *  (also determines the ClassLoader to use)
                         * @see DefaultResourceLoader#getResourceCache
                         */
                        // @ts-ignore
                        constructor(resourceLoader: org.springframework.core.io.ResourceLoader)
                        /**
                         * Default maximum number of entries for a local MetadataReader cache: 256.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CACHE_LIMIT: number /*int*/
                        /**
                         * Specify the maximum number of entries for the MetadataReader cache.
                         * <p>Default is 256 for a local cache, whereas a shared cache is
                         * typically unbounded. This method enforces a local resource cache,
                         * even if the {@link ResourceLoader} supports a shared resource cache.
                         */
                        // @ts-ignore
                        public setCacheLimit(cacheLimit: number /*int*/): void
                        /**
                         * Return the maximum number of entries for the MetadataReader cache.
                         */
                        // @ts-ignore
                        public getCacheLimit(): number /*int*/
                        // @ts-ignore
                        public getMetadataReader(resource: org.springframework.core.io.Resource): org.springframework.core.type.classreading.MetadataReader
                        /**
                         * Clear the local MetadataReader cache, if any, removing all cached class metadata.
                         */
                        // @ts-ignore
                        public clearCache(): void
                    }
                }
            }
        }
    }
}
