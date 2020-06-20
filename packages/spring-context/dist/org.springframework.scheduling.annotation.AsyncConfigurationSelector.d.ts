declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Selects which implementation of {@link AbstractAsyncConfiguration} should
                 * be used based on the value of {@link EnableAsync#mode} on the importing
                 * {@code @Configuration} class.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see EnableAsync
                 * @see ProxyAsyncConfiguration
                 */
                // @ts-ignore
                class AsyncConfigurationSelector extends org.springframework.context.annotation.AdviceModeImportSelector<org.springframework.scheduling.annotation.EnableAsync> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns {@link ProxyAsyncConfiguration} or {@code AspectJAsyncConfiguration}
                     * for {@code PROXY} and {@code ASPECTJ} values of {@link EnableAsync#mode()},
                     * respectively.
                     */
                    // @ts-ignore
                    selectImports(adviceMode: org.springframework.context.annotation.AdviceMode): java.lang.String[]
                }
            }
        }
    }
}
