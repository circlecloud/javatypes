declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Generic ApplicationContext implementation that holds a single internal
                 * {@link org.springframework.beans.factory.support.DefaultListableBeanFactory}
                 * instance and does not assume a specific bean definition format. Implements
                 * the {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}
                 * interface in order to allow for applying any bean definition readers to it.
                 * <p>Typical usage is to register a variety of bean definitions via the
                 * {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}
                 * interface and then call {@link #refresh()} to initialize those beans
                 * with application context semantics (handling
                 * {@link org.springframework.context.ApplicationContextAware}, auto-detecting
                 * {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor BeanFactoryPostProcessors},
                 * etc).
                 * <p>In contrast to other ApplicationContext implementations that create a new
                 * internal BeanFactory instance for each refresh, the internal BeanFactory of
                 * this context is available right from the start, to be able to register bean
                 * definitions on it. {@link #refresh()} may only be called once.
                 * <p>Usage example:
                 * <pre class="code">
                 * GenericApplicationContext ctx = new GenericApplicationContext();
                 * XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
                 * xmlReader.loadBeanDefinitions(new ClassPathResource("applicationContext.xml"));
                 * PropertiesBeanDefinitionReader propReader = new PropertiesBeanDefinitionReader(ctx);
                 * propReader.loadBeanDefinitions(new ClassPathResource("otherBeans.properties"));
                 * ctx.refresh();
                 * MyBean myBean = (MyBean) ctx.getBean("myBean");
                 * ...</pre>
                 * For the typical case of XML bean definitions, simply use
                 * {@link ClassPathXmlApplicationContext} or {@link FileSystemXmlApplicationContext},
                 * which are easier to set up - but less flexible, since you can just use standard
                 * resource locations for XML bean definitions, rather than mixing arbitrary bean
                 * definition formats. The equivalent in a web environment is
                 * {@link org.springframework.web.context.support.XmlWebApplicationContext}.
                 * <p>For custom application context implementations that are supposed to read
                 * special bean definition formats in a refreshable manner, consider deriving
                 * from the {@link AbstractRefreshableApplicationContext} base class.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 1.1.2
                 * @see #registerBeanDefinition
                 * @see #refresh()
                 * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                 * @see org.springframework.beans.factory.support.PropertiesBeanDefinitionReader
                 */
                // @ts-ignore
                class GenericApplicationContext extends org.springframework.context.support.AbstractApplicationContext {
                    /**
                     * Create a new GenericApplicationContext.
                     * @see #registerBeanDefinition
                     * @see #refresh
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new GenericApplicationContext with the given DefaultListableBeanFactory.
                     * @param beanFactory the DefaultListableBeanFactory instance to use for this context
                     * @see #registerBeanDefinition
                     * @see #refresh
                     */
                    // @ts-ignore
                    constructor(beanFactory: DefaultListableBeanFactory)
                    /**
                     * Create a new GenericApplicationContext with the given DefaultListableBeanFactory.
                     * @param beanFactory the DefaultListableBeanFactory instance to use for this context
                     * @param parent the parent application context
                     * @see #registerBeanDefinition
                     * @see #refresh
                     */
                    // @ts-ignore
                    constructor(beanFactory: DefaultListableBeanFactory, parent: org.springframework.context.ApplicationContext)
                    /**
                     * Set the parent of this application context, also setting
                     * the parent of the internal BeanFactory accordingly.
                     * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#setParentBeanFactory
                     */
                    // @ts-ignore
                    setParent(parent: org.springframework.context.ApplicationContext): void
                    /**
                     * Set whether it should be allowed to override bean definitions by registering
                     * a different definition with the same name, automatically replacing the former.
                     * If not, an exception will be thrown. Default is "true".
                     * @since 3.0
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowBeanDefinitionOverriding
                     */
                    // @ts-ignore
                    setAllowBeanDefinitionOverriding(allowBeanDefinitionOverriding: boolean): void
                    /**
                     * Set whether to allow circular references between beans - and automatically
                     * try to resolve them.
                     * <p>Default is "true". Turn this off to throw an exception when encountering
                     * a circular reference, disallowing them completely.
                     * @since 3.0
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowCircularReferences
                     */
                    // @ts-ignore
                    setAllowCircularReferences(allowCircularReferences: boolean): void
                    /**
                     * Set a ResourceLoader to use for this context. If set, the context will
                     * delegate all {@code getResource} calls to the given ResourceLoader.
                     * If not set, default resource loading will apply.
                     * <p>The main reason to specify a custom ResourceLoader is to resolve
                     * resource paths (without URL prefix) in a specific fashion.
                     * The default behavior is to resolve such paths as class path locations.
                     * To resolve resource paths as file system locations, specify a
                     * FileSystemResourceLoader here.
                     * <p>You can also pass in a full ResourcePatternResolver, which will
                     * be autodetected by the context and used for {@code getResources}
                     * calls as well. Else, default resource pattern matching will apply.
                     * @see #getResource
                     * @see org.springframework.core.io.DefaultResourceLoader
                     * @see org.springframework.core.io.FileSystemResourceLoader
                     * @see org.springframework.core.io.support.ResourcePatternResolver
                     * @see #getResources
                     */
                    // @ts-ignore
                    setResourceLoader(resourceLoader: ResourceLoader): void
                    /**
                     * This implementation delegates to this context's ResourceLoader if set,
                     * falling back to the default superclass behavior else.
                     * @see #setResourceLoader
                     */
                    // @ts-ignore
                    getResource(location: string): Resource
                    /**
                     * This implementation delegates to this context's ResourceLoader if it
                     * implements the ResourcePatternResolver interface, falling back to the
                     * default superclass behavior else.
                     * @see #setResourceLoader
                     */
                    // @ts-ignore
                    getResources(locationPattern: string): Resource[]
                    // @ts-ignore
                    setClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    getClassLoader(): java.lang.ClassLoader
                    /**
                     * Do nothing: We hold a single internal BeanFactory and rely on callers
                     * to register beans through our public methods (or the BeanFactory's).
                     * @see #registerBeanDefinition
                     */
                    // @ts-ignore
                    refreshBeanFactory(): void
                    // @ts-ignore
                    cancelRefresh(ex: BeansException): void
                    /**
                     * Not much to do: We hold a single internal BeanFactory that will never
                     * get released.
                     */
                    // @ts-ignore
                    closeBeanFactory(): void
                    /**
                     * Return the single internal BeanFactory held by this context
                     * (as ConfigurableListableBeanFactory).
                     */
                    // @ts-ignore
                    getBeanFactory(): ConfigurableListableBeanFactory
                    /**
                     * Return the underlying bean factory of this context,
                     * available for registering bean definitions.
                     * <p><b>NOTE:</b> You need to call {@link #refresh()} to initialize the
                     * bean factory and its contained beans with application context semantics
                     * (autodetecting BeanFactoryPostProcessors, etc).
                     * @return the internal bean factory (as DefaultListableBeanFactory)
                     */
                    // @ts-ignore
                    getDefaultListableBeanFactory(): DefaultListableBeanFactory
                    // @ts-ignore
                    getAutowireCapableBeanFactory(): AutowireCapableBeanFactory
                    // @ts-ignore
                    registerBeanDefinition(beanName: string, beanDefinition: BeanDefinition): void
                    // @ts-ignore
                    removeBeanDefinition(beanName: string): void
                    // @ts-ignore
                    getBeanDefinition(beanName: string): BeanDefinition
                    // @ts-ignore
                    isBeanNameInUse(beanName: string): boolean
                    // @ts-ignore
                    registerAlias(beanName: string, alias: string): void
                    // @ts-ignore
                    removeAlias(alias: string): void
                    // @ts-ignore
                    isAlias(beanName: string): boolean
                    /**
                     * Register a bean from the given bean class, optionally providing explicit
                     * constructor arguments for consideration in the autowiring process.
                     * @param beanClass the class of the bean
                     * @param constructorArgs custom argument values to be fed into Spring's
                     *  constructor resolution algorithm, resolving either all arguments or just
                     *  specific ones, with the rest to be resolved through regular autowiring
                     *  (may be {#code null} or empty)
                     * @since 5.2 (since 5.0 on the AnnotationConfigApplicationContext subclass)
                     */
                    // @ts-ignore
                    registerBean<T>(beanClass: java.lang.Class<T>, ...constructorArgs: any[]): void
                    /**
                     * Register a bean from the given bean class, optionally providing explicit
                     * constructor arguments for consideration in the autowiring process.
                     * @param beanName the name of the bean (may be {#code null})
                     * @param beanClass the class of the bean
                     * @param constructorArgs custom argument values to be fed into Spring's
                     *  constructor resolution algorithm, resolving either all arguments or just
                     *  specific ones, with the rest to be resolved through regular autowiring
                     *  (may be {#code null} or empty)
                     * @since 5.2 (since 5.0 on the AnnotationConfigApplicationContext subclass)
                     */
                    // @ts-ignore
                    registerBean<T>(beanName: string, beanClass: java.lang.Class<T>, ...constructorArgs: any[]): void
                    /**
                     * Register a bean from the given bean class, optionally customizing its
                     * bean definition metadata (typically declared as a lambda expression).
                     * @param beanClass the class of the bean (resolving a public constructor
                     *  to be autowired, possibly simply the default constructor)
                     * @param customizers one or more callbacks for customizing the factory's
                     *  {#link BeanDefinition}, e.g. setting a lazy-init or primary flag
                     * @since 5.0
                     * @see #registerBean(String, Class, Supplier, BeanDefinitionCustomizer...)
                     */
                    // @ts-ignore
                    registerBean<T>(beanClass: java.lang.Class<T>, ...customizers: BeanDefinitionCustomizer[]): void
                    /**
                     * Register a bean from the given bean class, optionally customizing its
                     * bean definition metadata (typically declared as a lambda expression).
                     * @param beanName the name of the bean (may be {#code null})
                     * @param beanClass the class of the bean (resolving a public constructor
                     *  to be autowired, possibly simply the default constructor)
                     * @param customizers one or more callbacks for customizing the factory's
                     *  {#link BeanDefinition}, e.g. setting a lazy-init or primary flag
                     * @since 5.0
                     * @see #registerBean(String, Class, Supplier, BeanDefinitionCustomizer...)
                     */
                    // @ts-ignore
                    registerBean<T>(beanName: string, beanClass: java.lang.Class<T>, ...customizers: BeanDefinitionCustomizer[]): void
                    /**
                     * Register a bean from the given bean class, using the given supplier for
                     * obtaining a new instance (typically declared as a lambda expression or
                     * method reference), optionally customizing its bean definition metadata
                     * (again typically declared as a lambda expression).
                     * @param beanClass the class of the bean
                     * @param supplier a callback for creating an instance of the bean
                     * @param customizers one or more callbacks for customizing the factory's
                     *  {#link BeanDefinition}, e.g. setting a lazy-init or primary flag
                     * @since 5.0
                     * @see #registerBean(String, Class, Supplier, BeanDefinitionCustomizer...)
                     */
                    // @ts-ignore
                    registerBean<T>(beanClass: java.lang.Class<T>, supplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>, ...customizers: BeanDefinitionCustomizer[]): void
                    /**
                     * Register a bean from the given bean class, using the given supplier for
                     * obtaining a new instance (typically declared as a lambda expression or
                     * method reference), optionally customizing its bean definition metadata
                     * (again typically declared as a lambda expression).
                     * <p>This method can be overridden to adapt the registration mechanism for
                     * all {@code registerBean} methods (since they all delegate to this one).
                     * @param beanName the name of the bean (may be {#code null})
                     * @param beanClass the class of the bean
                     * @param supplier a callback for creating an instance of the bean (in case
                     *  of {#code null}, resolving a public constructor to be autowired instead)
                     * @param customizers one or more callbacks for customizing the factory's
                     *  {#link BeanDefinition}, e.g. setting a lazy-init or primary flag
                     * @since 5.0
                     */
                    // @ts-ignore
                    registerBean<T>(beanName: string, beanClass: java.lang.Class<T>, supplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>, ...customizers: BeanDefinitionCustomizer[]): void
                }
            }
        }
    }
}
