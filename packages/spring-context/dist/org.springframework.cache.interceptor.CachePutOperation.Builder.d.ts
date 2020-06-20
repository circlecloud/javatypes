declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                namespace CachePutOperation {
                    /**
                     * A builder that can be used to create a {@link CachePutOperation}.
                     * @since 4.3
                     */
                    // @ts-ignore
                    class Builder extends org.springframework.cache.interceptor.CacheOperation.Builder {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setUnless(unless: string): void
                        // @ts-ignore
                        getOperationDescription(): java.lang.StringBuilder
                        // @ts-ignore
                        build(): org.springframework.cache.interceptor.CachePutOperation
                    }
                }
            }
        }
    }
}
