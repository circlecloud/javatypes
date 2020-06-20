declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                namespace CacheEvictOperation {
                    /**
                     * A builder that can be used to create a {@link CacheEvictOperation}.
                     * @since 4.3
                     */
                    // @ts-ignore
                    class Builder extends org.springframework.cache.interceptor.CacheOperation.Builder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setCacheWide(cacheWide: boolean): void
                        // @ts-ignore
                        setBeforeInvocation(beforeInvocation: boolean): void
                        // @ts-ignore
                        getOperationDescription(): java.lang.StringBuilder
                        // @ts-ignore
                        build(): org.springframework.cache.interceptor.CacheEvictOperation
                    }
                }
            }
        }
    }
}
