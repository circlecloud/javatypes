declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Convenient adapter for programmatic registration of bean classes.
                 * <p>This is an alternative to {@link ClassPathBeanDefinitionScanner}, applying
                 * the same resolution of annotations but for explicitly registered classes only.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @author Sam Brannen
                 * @author Phillip Webb
                 * @since 3.0
                 * @see AnnotationConfigApplicationContext#register
                 */
                // @ts-ignore
                class AnnotatedBeanDefinitionReader extends java.lang.Object {
                    /**
                     * Create a new {@code AnnotatedBeanDefinitionReader} for the given registry.
                     * <p>If the registry is {@link EnvironmentCapable}, e.g. is an {@code ApplicationContext},
                     * the {@link Environment} will be inherited, otherwise a new
                     * {@link StandardEnvironment} will be created and used.
                     * @param registry the {#code BeanFactory} to load bean definitions into,
                     *  in the form of a {@code BeanDefinitionRegistry}
                     * @see #AnnotatedBeanDefinitionReader(BeanDefinitionRegistry, Environment)
                     * @see #setEnvironment(Environment)
                     */
                    // @ts-ignore
                    constructor(registry: BeanDefinitionRegistry)
                    /**
                     * Create a new {@code AnnotatedBeanDefinitionReader} for the given registry,
                     * using the given {@link Environment}.
                     * @param registry the {#code BeanFactory} to load bean definitions into,
                     *  in the form of a {@code BeanDefinitionRegistry}
                     * @param environment the {#code Environment} to use when evaluating bean definition
                     *  profiles.
                     * @since 3.1
                     */
                    // @ts-ignore
                    constructor(registry: BeanDefinitionRegistry, environment: Environment)
                    /**
                     * Get the BeanDefinitionRegistry that this reader operates on.
                     */
                    // @ts-ignore
                    public getRegistry(): BeanDefinitionRegistry
                    /**
                     * Set the {@code Environment} to use when evaluating whether
                     * {@link Conditional @Conditional}-annotated component classes should be registered.
                     * <p>The default is a {@link StandardEnvironment}.
                     * @see #registerBean(Class, String, Class...)
                     */
                    // @ts-ignore
                    public setEnvironment(environment: Environment): void
                    /**
                     * Set the {@code BeanNameGenerator} to use for detected bean classes.
                     * <p>The default is a {@link AnnotationBeanNameGenerator}.
                     */
                    // @ts-ignore
                    public setBeanNameGenerator(beanNameGenerator: BeanNameGenerator): void
                    /**
                     * Set the {@code ScopeMetadataResolver} to use for registered component classes.
                     * <p>The default is an {@link AnnotationScopeMetadataResolver}.
                     */
                    // @ts-ignore
                    public setScopeMetadataResolver(scopeMetadataResolver: org.springframework.context.annotation.ScopeMetadataResolver): void
                    /**
                     * Register one or more component classes to be processed.
                     * <p>Calls to {@code register} are idempotent; adding the same
                     * component class more than once has no additional effect.
                     * @param componentClasses one or more component classes,
                     *  e.g. {#link Configuration @Configuration} classes
                     */
                    // @ts-ignore
                    public register(...componentClasses: java.lang.Class<any>[]): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations.
                     * @param beanClass the class of the bean
                     */
                    // @ts-ignore
                    public registerBean(beanClass: java.lang.Class<any>): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations.
                     * @param beanClass the class of the bean
                     * @param name an explicit name for the bean
                     *  (or {#code null} for generating a default bean name)
                     * @since 5.2
                     */
                    // @ts-ignore
                    public registerBean(beanClass: java.lang.Class<any>, name: java.lang.String | string): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations.
                     * @param beanClass the class of the bean
                     * @param qualifiers specific qualifier annotations to consider,
                     *  in addition to qualifiers at the bean class level
                     */
                    // @ts-ignore
                    public registerBean(beanClass: java.lang.Class<any>, ...qualifiers: java.lang.Class<any>[]): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations.
                     * @param beanClass the class of the bean
                     * @param name an explicit name for the bean
                     *  (or {#code null} for generating a default bean name)
                     * @param qualifiers specific qualifier annotations to consider,
                     *  in addition to qualifiers at the bean class level
                     */
                    // @ts-ignore
                    public registerBean(beanClass: java.lang.Class<any>, name: java.lang.String | string, ...qualifiers: java.lang.Class<any>[]): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations, using the given supplier for obtaining a new
                     * instance (possibly declared as a lambda expression or method reference).
                     * @param beanClass the class of the bean
                     * @param supplier a callback for creating an instance of the bean
                     *  (may be {#code null})
                     * @since 5.0
                     */
                    // @ts-ignore
                    public registerBean<T>(beanClass: java.lang.Class<T>, supplier: java.util.function$.Supplier<T>): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations, using the given supplier for obtaining a new
                     * instance (possibly declared as a lambda expression or method reference).
                     * @param beanClass the class of the bean
                     * @param name an explicit name for the bean
                     *  (or {#code null} for generating a default bean name)
                     * @param supplier a callback for creating an instance of the bean
                     *  (may be {#code null})
                     * @since 5.0
                     */
                    // @ts-ignore
                    public registerBean<T>(beanClass: java.lang.Class<T>, name: java.lang.String | string, supplier: java.util.function$.Supplier<T>): void
                    /**
                     * Register a bean from the given bean class, deriving its metadata from
                     * class-declared annotations.
                     * @param beanClass the class of the bean
                     * @param name an explicit name for the bean
                     *  (or {#code null} for generating a default bean name)
                     * @param supplier a callback for creating an instance of the bean
                     *  (may be {#code null})
                     * @param customizers one or more callbacks for customizing the factory's
                     *  {#link BeanDefinition}, e.g. setting a lazy-init or primary flag
                     * @since 5.2
                     */
                    // @ts-ignore
                    public registerBean<T>(beanClass: java.lang.Class<T>, name: java.lang.String | string, supplier: java.util.function$.Supplier<T>, ...customizers: BeanDefinitionCustomizer[]): void
                }
            }
        }
    }
}
