declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Standalone application context, accepting <em>component classes</em> as input &mdash;
                 * in particular {@link Configuration @Configuration}-annotated classes, but also plain
                 * {@link org.springframework.stereotype.Component @Component} types and JSR-330 compliant
                 * classes using {@code javax.inject} annotations.
                 * <p>Allows for registering classes one by one using {@link #register(Class...)}
                 * as well as for classpath scanning using {@link #scan(String...)}.
                 * <p>In case of multiple {@code @Configuration} classes, {@link Bean @Bean} methods
                 * defined in later classes will override those defined in earlier classes. This can
                 * be leveraged to deliberately override certain bean definitions via an extra
                 * {@code @Configuration} class.
                 * <p>See {@link Configuration @Configuration}'s javadoc for usage examples.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 3.0
                 * @see #register
                 * @see #scan
                 * @see AnnotatedBeanDefinitionReader
                 * @see ClassPathBeanDefinitionScanner
                 * @see org.springframework.context.support.GenericXmlApplicationContext
                 */
                // @ts-ignore
                class AnnotationConfigApplicationContext extends org.springframework.context.support.GenericApplicationContext implements org.springframework.context.annotation.AnnotationConfigRegistry {
                    /**
                     * Create a new AnnotationConfigApplicationContext that needs to be populated
                     * through {@link #register} calls and then manually {@linkplain #refresh refreshed}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new AnnotationConfigApplicationContext with the given DefaultListableBeanFactory.
                     * @param beanFactory the DefaultListableBeanFactory instance to use for this context
                     */
                    // @ts-ignore
                    constructor(beanFactory: DefaultListableBeanFactory)
                    /**
                     * Create a new AnnotationConfigApplicationContext, deriving bean definitions
                     * from the given component classes and automatically refreshing the context.
                     * @param componentClasses one or more component classes &mdash; for example,
                     *  {#link Configuration @Configuration} classes
                     */
                    // @ts-ignore
                    constructor(...componentClasses: java.lang.Class<any>[])
                    /**
                     * Create a new AnnotationConfigApplicationContext, scanning for components
                     * in the given packages, registering bean definitions for those components,
                     * and automatically refreshing the context.
                     * @param basePackages the packages to scan for component classes
                     */
                    // @ts-ignore
                    constructor(...basePackages: java.lang.String[] | string[])
                    /**
                     * Propagate the given custom {@code Environment} to the underlying
                     * {@link AnnotatedBeanDefinitionReader} and {@link ClassPathBeanDefinitionScanner}.
                     */
                    // @ts-ignore
                    public setEnvironment(environment: ConfigurableEnvironment): void
                    /**
                     * Provide a custom {@link BeanNameGenerator} for use with {@link AnnotatedBeanDefinitionReader}
                     * and/or {@link ClassPathBeanDefinitionScanner}, if any.
                     * <p>Default is {@link AnnotationBeanNameGenerator}.
                     * <p>Any call to this method must occur prior to calls to {@link #register(Class...)}
                     * and/or {@link #scan(String...)}.
                     * @see AnnotatedBeanDefinitionReader#setBeanNameGenerator
                     * @see ClassPathBeanDefinitionScanner#setBeanNameGenerator
                     * @see AnnotationBeanNameGenerator
                     * @see FullyQualifiedAnnotationBeanNameGenerator
                     */
                    // @ts-ignore
                    public setBeanNameGenerator(beanNameGenerator: BeanNameGenerator): void
                    /**
                     * Set the {@link ScopeMetadataResolver} to use for registered component classes.
                     * <p>The default is an {@link AnnotationScopeMetadataResolver}.
                     * <p>Any call to this method must occur prior to calls to {@link #register(Class...)}
                     * and/or {@link #scan(String...)}.
                     */
                    // @ts-ignore
                    public setScopeMetadataResolver(scopeMetadataResolver: org.springframework.context.annotation.ScopeMetadataResolver): void
                    /**
                     * Register one or more component classes to be processed.
                     * <p>Note that {@link #refresh()} must be called in order for the context
                     * to fully process the new classes.
                     * @param componentClasses one or more component classes &mdash; for example,
                     *  {#link Configuration @Configuration} classes
                     * @see #scan(String...)
                     * @see #refresh()
                     */
                    // @ts-ignore
                    public register(...componentClasses: java.lang.Class<any>[]): void
                    /**
                     * Perform a scan within the specified base packages.
                     * <p>Note that {@link #refresh()} must be called in order for the context
                     * to fully process the new classes.
                     * @param basePackages the packages to scan for component classes
                     * @see #register(Class...)
                     * @see #refresh()
                     */
                    // @ts-ignore
                    public scan(...basePackages: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public registerBean<T>(beanName: java.lang.String | string, beanClass: java.lang.Class<T>, supplier: java.util.function$.Supplier<T>, ...customizers: BeanDefinitionCustomizer[]): void
                }
            }
        }
    }
}
