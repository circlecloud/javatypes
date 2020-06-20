declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Selects which implementation of {@link AbstractCachingConfiguration} should
                 * be used based on the value of {@link EnableCaching#mode} on the importing
                 * {@code @Configuration} class.
                 * <p>Detects the presence of JSR-107 and enables JCache support accordingly.
                 * @author Chris Beams
                 * @author Stephane Nicoll
                 * @since 3.1
                 * @see EnableCaching
                 * @see ProxyCachingConfiguration
                 */
                // @ts-ignore
                class CachingConfigurationSelector extends org.springframework.context.annotation.AdviceModeImportSelector<org.springframework.cache.annotation.EnableCaching> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns {@link ProxyCachingConfiguration} or {@code AspectJCachingConfiguration}
                     * for {@code PROXY} and {@code ASPECTJ} values of {@link EnableCaching#mode()},
                     * respectively. Potentially includes corresponding JCache configuration as well.
                     */
                    // @ts-ignore
                    selectImports(adviceMode: org.springframework.context.annotation.AdviceMode): java.lang.String[]
                }
            }
        }
    }
}
