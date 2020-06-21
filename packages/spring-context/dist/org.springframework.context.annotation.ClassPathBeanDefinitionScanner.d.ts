declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * A bean definition scanner that detects bean candidates on the classpath,
                 * registering corresponding bean definitions with a given registry ({@code BeanFactory}
                 * or {@code ApplicationContext}).
                 * <p>Candidate classes are detected through configurable type filters. The
                 * default filters include classes that are annotated with Spring's
                 * {@link org.springframework.stereotype.Component @Component},
                 * {@link org.springframework.stereotype.Repository @Repository},
                 * {@link org.springframework.stereotype.Service @Service}, or
                 * {@link org.springframework.stereotype.Controller @Controller} stereotype.
                 * <p>Also supports Java EE 6's {@link javax.annotation.ManagedBean} and
                 * JSR-330's {@link javax.inject.Named} annotations, if available.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 2.5
                 * @see AnnotationConfigApplicationContext#scan
                 * @see org.springframework.stereotype.Component
                 * @see org.springframework.stereotype.Repository
                 * @see org.springframework.stereotype.Service
                 * @see org.springframework.stereotype.Controller
                 */
                // @ts-ignore
                class ClassPathBeanDefinitionScanner extends org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider {
                    /**
                     * Create a new {@code ClassPathBeanDefinitionScanner} for the given bean factory.
                     * @param registry the {#code BeanFactory} to load bean definitions into, in the form
                     *  of a {@code BeanDefinitionRegistry}
                     */
                    // @ts-ignore
                    constructor(registry: BeanDefinitionRegistry)
                    /**
                     * Create a new {@code ClassPathBeanDefinitionScanner} for the given bean factory.
                     * <p>If the passed-in bean factory does not only implement the
                     * {@code BeanDefinitionRegistry} interface but also the {@code ResourceLoader}
                     * interface, it will be used as default {@code ResourceLoader} as well. This will
                     * usually be the case for {@link org.springframework.context.ApplicationContext}
                     * implementations.
                     * <p>If given a plain {@code BeanDefinitionRegistry}, the default {@code ResourceLoader}
                     * will be a {@link org.springframework.core.io.support.PathMatchingResourcePatternResolver}.
                     * <p>If the passed-in bean factory also implements {@link EnvironmentCapable} its
                     * environment will be used by this reader.  Otherwise, the reader will initialize and
                     * use a {@link org.springframework.core.env.StandardEnvironment}. All
                     * {@code ApplicationContext} implementations are {@code EnvironmentCapable}, while
                     * normal {@code BeanFactory} implementations are not.
                     * @param registry the {#code BeanFactory} to load bean definitions into, in the form
                     *  of a {@code BeanDefinitionRegistry}
                     * @param useDefaultFilters whether to include the default filters for the
                     *  {#link org.springframework.stereotype.Component @Component},
                     *  {@link org.springframework.stereotype.Repository @Repository},
                     *  {@link org.springframework.stereotype.Service @Service}, and
                     *  {@link org.springframework.stereotype.Controller @Controller} stereotype annotations
                     * @see #setResourceLoader
                     * @see #setEnvironment
                     */
                    // @ts-ignore
                    constructor(registry: BeanDefinitionRegistry, useDefaultFilters: boolean)
                    /**
                     * Create a new {@code ClassPathBeanDefinitionScanner} for the given bean factory and
                     * using the given {@link Environment} when evaluating bean definition profile metadata.
                     * <p>If the passed-in bean factory does not only implement the {@code
                     * BeanDefinitionRegistry} interface but also the {@link ResourceLoader} interface, it
                     * will be used as default {@code ResourceLoader} as well. This will usually be the
                     * case for {@link org.springframework.context.ApplicationContext} implementations.
                     * <p>If given a plain {@code BeanDefinitionRegistry}, the default {@code ResourceLoader}
                     * will be a {@link org.springframework.core.io.support.PathMatchingResourcePatternResolver}.
                     * @param registry the {#code BeanFactory} to load bean definitions into, in the form
                     *  of a {@code BeanDefinitionRegistry}
                     * @param useDefaultFilters whether to include the default filters for the
                     *  {#link org.springframework.stereotype.Component @Component},
                     *  {@link org.springframework.stereotype.Repository @Repository},
                     *  {@link org.springframework.stereotype.Service @Service}, and
                     *  {@link org.springframework.stereotype.Controller @Controller} stereotype annotations
                     * @param environment the Spring {#link Environment} to use when evaluating bean
                     *  definition profile metadata
                     * @since 3.1
                     * @see #setResourceLoader
                     */
                    // @ts-ignore
                    constructor(registry: BeanDefinitionRegistry, useDefaultFilters: boolean, environment: Environment)
                    /**
                     * Create a new {@code ClassPathBeanDefinitionScanner} for the given bean factory and
                     * using the given {@link Environment} when evaluating bean definition profile metadata.
                     * @param registry the {#code BeanFactory} to load bean definitions into, in the form
                     *  of a {@code BeanDefinitionRegistry}
                     * @param useDefaultFilters whether to include the default filters for the
                     *  {#link org.springframework.stereotype.Component @Component},
                     *  {@link org.springframework.stereotype.Repository @Repository},
                     *  {@link org.springframework.stereotype.Service @Service}, and
                     *  {@link org.springframework.stereotype.Controller @Controller} stereotype annotations
                     * @param environment the Spring {#link Environment} to use when evaluating bean
                     *  definition profile metadata
                     * @param resourceLoader the {#link ResourceLoader} to use
                     * @since 4.3.6
                     */
                    // @ts-ignore
                    constructor(registry: BeanDefinitionRegistry, useDefaultFilters: boolean, environment: Environment, resourceLoader: ResourceLoader)
                    /**
                     * Return the BeanDefinitionRegistry that this scanner operates on.
                     */
                    // @ts-ignore
                    public getRegistry(): BeanDefinitionRegistry
                    /**
                     * Set the defaults to use for detected beans.
                     * @see BeanDefinitionDefaults
                     */
                    // @ts-ignore
                    public setBeanDefinitionDefaults(beanDefinitionDefaults: BeanDefinitionDefaults): void
                    /**
                     * Return the defaults to use for detected beans (never {@code null}).
                     * @since 4.1
                     */
                    // @ts-ignore
                    public getBeanDefinitionDefaults(): BeanDefinitionDefaults
                    /**
                     * Set the name-matching patterns for determining autowire candidates.
                     * @param autowireCandidatePatterns the patterns to match against
                     */
                    // @ts-ignore
                    public setAutowireCandidatePatterns(...autowireCandidatePatterns: java.lang.String[] | string[]): void
                    /**
                     * Set the BeanNameGenerator to use for detected bean classes.
                     * <p>Default is a {@link AnnotationBeanNameGenerator}.
                     */
                    // @ts-ignore
                    public setBeanNameGenerator(beanNameGenerator: BeanNameGenerator): void
                    /**
                     * Set the ScopeMetadataResolver to use for detected bean classes.
                     * Note that this will override any custom "scopedProxyMode" setting.
                     * <p>The default is an {@link AnnotationScopeMetadataResolver}.
                     * @see #setScopedProxyMode
                     */
                    // @ts-ignore
                    public setScopeMetadataResolver(scopeMetadataResolver: org.springframework.context.annotation.ScopeMetadataResolver): void
                    /**
                     * Specify the proxy behavior for non-singleton scoped beans.
                     * Note that this will override any custom "scopeMetadataResolver" setting.
                     * <p>The default is {@link ScopedProxyMode#NO}.
                     * @see #setScopeMetadataResolver
                     */
                    // @ts-ignore
                    public setScopedProxyMode(scopedProxyMode: org.springframework.context.annotation.ScopedProxyMode): void
                    /**
                     * Specify whether to register annotation config post-processors.
                     * <p>The default is to register the post-processors. Turn this off
                     * to be able to ignore the annotations or to process them differently.
                     */
                    // @ts-ignore
                    public setIncludeAnnotationConfig(includeAnnotationConfig: boolean): void
                    /**
                     * Perform a scan within the specified base packages.
                     * @param basePackages the packages to check for annotated classes
                     * @return number of beans registered
                     */
                    // @ts-ignore
                    public scan(...basePackages: java.lang.String[] | string[]): number /*int*/
                    /**
                     * Perform a scan within the specified base packages,
                     * returning the registered bean definitions.
                     * <p>This method does <i>not</i> register an annotation config processor
                     * but rather leaves this up to the caller.
                     * @param basePackages the packages to check for annotated classes
                     * @return set of beans registered if any for tooling registration purposes (never {#code null})
                     */
                    // @ts-ignore
                    doScan(...basePackages: java.lang.String[] | string[]): Array<BeanDefinitionHolder>
                    /**
                     * Apply further settings to the given bean definition,
                     * beyond the contents retrieved from scanning the component class.
                     * @param beanDefinition the scanned bean definition
                     * @param beanName the generated bean name for the given bean
                     */
                    // @ts-ignore
                    postProcessBeanDefinition(beanDefinition: AbstractBeanDefinition, beanName: java.lang.String | string): void
                    /**
                     * Register the specified bean with the given registry.
                     * <p>Can be overridden in subclasses, e.g. to adapt the registration
                     * process or to register further bean definitions for each scanned bean.
                     * @param definitionHolder the bean definition plus bean name for the bean
                     * @param registry the BeanDefinitionRegistry to register the bean with
                     */
                    // @ts-ignore
                    registerBeanDefinition(definitionHolder: BeanDefinitionHolder, registry: BeanDefinitionRegistry): void
                    /**
                     * Check the given candidate's bean name, determining whether the corresponding
                     * bean definition needs to be registered or conflicts with an existing definition.
                     * @param beanName the suggested name for the bean
                     * @param beanDefinition the corresponding bean definition
                     * @return {#code true} if the bean can be registered as-is;
                     *  {@code false} if it should be skipped because there is an
                     *  existing, compatible bean definition for the specified name
                     * @throws ConflictingBeanDefinitionException if an existing, incompatible
                     *  bean definition has been found for the specified name
                     */
                    // @ts-ignore
                    checkCandidate(beanName: java.lang.String | string, beanDefinition: BeanDefinition): boolean
                    /**
                     * Determine whether the given new bean definition is compatible with
                     * the given existing bean definition.
                     * <p>The default implementation considers them as compatible when the existing
                     * bean definition comes from the same source or from a non-scanning source.
                     * @param newDefinition the new bean definition, originated from scanning
                     * @param existingDefinition the existing bean definition, potentially an
                     *  explicitly defined one or a previously generated one from scanning
                     * @return whether the definitions are considered as compatible, with the
                     *  new definition to be skipped in favor of the existing definition
                     */
                    // @ts-ignore
                    isCompatible(newDefinition: BeanDefinition, existingDefinition: BeanDefinition): boolean
                }
            }
        }
    }
}
