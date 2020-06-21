declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Advisor driven by a {@link CacheOperationSource}, used to include a
                 * cache advice bean for methods that are cacheable.
                 * @author Costin Leau
                 * @since 3.1
                 */
                // @ts-ignore
                class BeanFactoryCacheOperationSourceAdvisor extends AbstractBeanFactoryPointcutAdvisor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the cache operation attribute source which is used to find cache
                     * attributes. This should usually be identical to the source reference
                     * set on the cache interceptor itself.
                     */
                    // @ts-ignore
                    public setCacheOperationSource(cacheOperationSource: org.springframework.cache.interceptor.CacheOperationSource): void
                    /**
                     * Set the {@link ClassFilter} to use for this pointcut.
                     * Default is {@link ClassFilter#TRUE}.
                     */
                    // @ts-ignore
                    public setClassFilter(classFilter: ClassFilter): void
                    // @ts-ignore
                    public getPointcut(): Pointcut
                }
            }
        }
    }
}
