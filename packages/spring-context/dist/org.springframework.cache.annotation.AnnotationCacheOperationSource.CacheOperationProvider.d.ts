declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                namespace AnnotationCacheOperationSource {
                    /**
                     * Callback interface providing {@link CacheOperation} instance(s) based on
                     * a given {@link CacheAnnotationParser}.
                     */
                    // @ts-ignore
                    interface CacheOperationProvider {
                        /**
                         * Return the {@link CacheOperation} instance(s) provided by the specified parser.
                         * @param parser the parser to use
                         * @return the cache operations, or {#code null} if none found
                         */
                        // @ts-ignore
                        getCacheOperations(parser: org.springframework.cache.annotation.CacheAnnotationParser): Array<org.springframework.cache.interceptor.CacheOperation>
                    }
                }
            }
        }
    }
}
