declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Context information for use by {@link Condition Conditions}.
                 * @author Phillip Webb
                 * @author Juergen Hoeller
                 * @since 4.0
                 */
                // @ts-ignore
                interface ConditionContext {
                    /**
                     * Return the {@link BeanDefinitionRegistry} that will hold the bean definition
                     * should the condition match.
                     * @throws IllegalStateException if no registry is available (which is unusual:
                     *  only the case with a plain {#link ClassPathScanningCandidateComponentProvider})
                     */
                    // @ts-ignore
                    getRegistry(): BeanDefinitionRegistry
                    /**
                     * Return the {@link ConfigurableListableBeanFactory} that will hold the bean
                     * definition should the condition match, or {@code null} if the bean factory is
                     * not available (or not downcastable to {@code ConfigurableListableBeanFactory}).
                     */
                    // @ts-ignore
                    getBeanFactory(): ConfigurableListableBeanFactory
                    /**
                     * Return the {@link Environment} for which the current application is running.
                     */
                    // @ts-ignore
                    getEnvironment(): Environment
                    /**
                     * Return the {@link ResourceLoader} currently being used.
                     */
                    // @ts-ignore
                    getResourceLoader(): ResourceLoader
                    /**
                     * Return the {@link ClassLoader} that should be used to load additional classes
                     * (only {@code null} if even the system ClassLoader isn't accessible).
                     * @see org.springframework.util.ClassUtils#forName(String, ClassLoader)
                     */
                    // @ts-ignore
                    getClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
