declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Abstract implementation of the {@link org.springframework.context.ApplicationContext}
                 * interface. Doesn't mandate the type of storage used for configuration; simply
                 * implements common context functionality. Uses the Template Method design pattern,
                 * requiring concrete subclasses to implement abstract methods.
                 * <p>In contrast to a plain BeanFactory, an ApplicationContext is supposed
                 * to detect special beans defined in its internal bean factory:
                 * Therefore, this class automatically registers
                 * {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor BeanFactoryPostProcessors},
                 * {@link org.springframework.beans.factory.config.BeanPostProcessor BeanPostProcessors},
                 * and {@link org.springframework.context.ApplicationListener ApplicationListeners}
                 * which are defined as beans in the context.
                 * <p>A {@link org.springframework.context.MessageSource} may also be supplied
                 * as a bean in the context, with the name "messageSource"; otherwise, message
                 * resolution is delegated to the parent context. Furthermore, a multicaster
                 * for application events can be supplied as an "applicationEventMulticaster" bean
                 * of type {@link org.springframework.context.event.ApplicationEventMulticaster}
                 * in the context; otherwise, a default multicaster of type
                 * {@link org.springframework.context.event.SimpleApplicationEventMulticaster} will be used.
                 * <p>Implements resource loading by extending
                 * {@link org.springframework.core.io.DefaultResourceLoader}.
                 * Consequently treats non-URL resource paths as class path resources
                 * (supporting full class path resource names that include the package path,
                 * e.g. "mypackage/myresource.dat"), unless the {@link #getResourceByPath}
                 * method is overridden in a subclass.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since January 21, 2001
                 * @see #refreshBeanFactory
                 * @see #getBeanFactory
                 * @see org.springframework.beans.factory.config.BeanFactoryPostProcessor
                 * @see org.springframework.beans.factory.config.BeanPostProcessor
                 * @see org.springframework.context.event.ApplicationEventMulticaster
                 * @see org.springframework.context.ApplicationListener
                 * @see org.springframework.context.MessageSource
                 */
                // @ts-ignore
                abstract class AbstractApplicationContext extends DefaultResourceLoader implements org.springframework.context.ConfigurableApplicationContext {
                    /**
                     * Create a new AbstractApplicationContext with no parent.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new AbstractApplicationContext with the given parent context.
                     * @param parent the parent context
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Name of the MessageSource bean in the factory.
                     * If none is supplied, message resolution is delegated to the parent.
                     * @see MessageSource
                     */
                    // @ts-ignore
                    public static readonly MESSAGE_SOURCE_BEAN_NAME: java.lang.String | string
                    /**
                     * Name of the LifecycleProcessor bean in the factory.
                     * If none is supplied, a DefaultLifecycleProcessor is used.
                     * @see org.springframework.context.LifecycleProcessor
                     * @see org.springframework.context.support.DefaultLifecycleProcessor
                     */
                    // @ts-ignore
                    public static readonly LIFECYCLE_PROCESSOR_BEAN_NAME: java.lang.String | string
                    /**
                     * Name of the ApplicationEventMulticaster bean in the factory.
                     * If none is supplied, a default SimpleApplicationEventMulticaster is used.
                     * @see org.springframework.context.event.ApplicationEventMulticaster
                     * @see org.springframework.context.event.SimpleApplicationEventMulticaster
                     */
                    // @ts-ignore
                    public static readonly APPLICATION_EVENT_MULTICASTER_BEAN_NAME: java.lang.String | string
                    /**
                     * Logger used by this class. Available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the unique id of this application context.
                     * <p>Default is the object id of the context instance, or the name
                     * of the context bean if the context is itself defined as a bean.
                     * @param id the unique id of the context
                     */
                    // @ts-ignore
                    public setId(id: java.lang.String | string): void
                    // @ts-ignore
                    public getId(): string
                    // @ts-ignore
                    public getApplicationName(): string
                    /**
                     * Set a friendly name for this context.
                     * Typically done during initialization of concrete context implementations.
                     * <p>Default is the object id of the context instance.
                     */
                    // @ts-ignore
                    public setDisplayName(displayName: java.lang.String | string): void
                    /**
                     * Return a friendly name for this context.
                     * @return a display name for this context (never {#code null})
                     */
                    // @ts-ignore
                    public getDisplayName(): string
                    /**
                     * Return the parent context, or {@code null} if there is no parent
                     * (that is, this context is the root of the context hierarchy).
                     */
                    // @ts-ignore
                    public getParent(): org.springframework.context.ApplicationContext
                    /**
                     * Set the {@code Environment} for this application context.
                     * <p>Default value is determined by {@link #createEnvironment()}. Replacing the
                     * default with this method is one option but configuration through {@link
                     * #getEnvironment()} should also be considered. In either case, such modifications
                     * should be performed <em>before</em> {@link #refresh()}.
                     * @see org.springframework.context.support.AbstractApplicationContext#createEnvironment
                     */
                    // @ts-ignore
                    public setEnvironment(environment: ConfigurableEnvironment): void
                    /**
                     * Return the {@code Environment} for this application context in configurable
                     * form, allowing for further customization.
                     * <p>If none specified, a default environment will be initialized via
                     * {@link #createEnvironment()}.
                     */
                    // @ts-ignore
                    public getEnvironment(): ConfigurableEnvironment
                    /**
                     * Create and return a new {@link StandardEnvironment}.
                     * <p>Subclasses may override this method in order to supply
                     * a custom {@link ConfigurableEnvironment} implementation.
                     */
                    // @ts-ignore
                    createEnvironment(): ConfigurableEnvironment
                    /**
                     * Return this context's internal bean factory as AutowireCapableBeanFactory,
                     * if already available.
                     * @see #getBeanFactory()
                     */
                    // @ts-ignore
                    public getAutowireCapableBeanFactory(): AutowireCapableBeanFactory
                    /**
                     * Return the timestamp (ms) when this context was first loaded.
                     */
                    // @ts-ignore
                    public getStartupDate(): number /*long*/
                    /**
                     * Publish the given event to all listeners.
                     * <p>Note: Listeners get initialized after the MessageSource, to be able
                     * to access it within listener implementations. Thus, MessageSource
                     * implementations cannot publish events.
                     * @param event the event to publish (may be application-specific or a
                     *  standard framework event)
                     */
                    // @ts-ignore
                    public publishEvent(event: org.springframework.context.ApplicationEvent): void
                    /**
                     * Publish the given event to all listeners.
                     * <p>Note: Listeners get initialized after the MessageSource, to be able
                     * to access it within listener implementations. Thus, MessageSource
                     * implementations cannot publish events.
                     * @param event the event to publish (may be an {#link ApplicationEvent}
                     *  or a payload object to be turned into a {@link PayloadApplicationEvent})
                     */
                    // @ts-ignore
                    public publishEvent(event: java.lang.Object | any): void
                    /**
                     * Publish the given event to all listeners.
                     * @param event the event to publish (may be an {#link ApplicationEvent}
                     *  or a payload object to be turned into a {@link PayloadApplicationEvent})
                     * @param eventType the resolved event type, if known
                     * @since 4.2
                     */
                    // @ts-ignore
                    publishEvent(event: java.lang.Object | any, eventType: ResolvableType): void
                    /**
                     * Return the ResourcePatternResolver to use for resolving location patterns
                     * into Resource instances. Default is a
                     * {@link org.springframework.core.io.support.PathMatchingResourcePatternResolver},
                     * supporting Ant-style location patterns.
                     * <p>Can be overridden in subclasses, for extended resolution strategies,
                     * for example in a web environment.
                     * <p><b>Do not call this when needing to resolve a location pattern.</b>
                     * Call the context's {@code getResources} method instead, which
                     * will delegate to the ResourcePatternResolver.
                     * @return the ResourcePatternResolver for this context
                     * @see #getResources
                     * @see org.springframework.core.io.support.PathMatchingResourcePatternResolver
                     */
                    // @ts-ignore
                    getResourcePatternResolver(): ResourcePatternResolver
                    /**
                     * Set the parent of this application context.
                     * <p>The parent {@linkplain ApplicationContext#getEnvironment() environment} is
                     * {@linkplain ConfigurableEnvironment#merge(ConfigurableEnvironment) merged} with
                     * this (child) application context environment if the parent is non-{@code null} and
                     * its environment is an instance of {@link ConfigurableEnvironment}.
                     * @see ConfigurableEnvironment#merge(ConfigurableEnvironment)
                     */
                    // @ts-ignore
                    public setParent(parent: org.springframework.context.ApplicationContext): void
                    // @ts-ignore
                    public addBeanFactoryPostProcessor(postProcessor: BeanFactoryPostProcessor): void
                    /**
                     * Return the list of BeanFactoryPostProcessors that will get applied
                     * to the internal BeanFactory.
                     */
                    // @ts-ignore
                    public getBeanFactoryPostProcessors(): Array<BeanFactoryPostProcessor>
                    // @ts-ignore
                    public addApplicationListener(listener: org.springframework.context.ApplicationListener<any>): void
                    /**
                     * Return the list of statically specified ApplicationListeners.
                     */
                    // @ts-ignore
                    public getApplicationListeners(): Array<org.springframework.context.ApplicationListener<any>>
                    // @ts-ignore
                    public refresh(): void
                    /**
                     * Prepare this context for refreshing, setting its startup date and
                     * active flag as well as performing any initialization of property sources.
                     */
                    // @ts-ignore
                    prepareRefresh(): void
                    /**
                     * <p>Replace any stub property sources with actual instances.
                     * @see org.springframework.core.env.PropertySource.StubPropertySource
                     * @see org.springframework.web.context.support.WebApplicationContextUtils#initServletPropertySources
                     */
                    // @ts-ignore
                    initPropertySources(): void
                    /**
                     * Tell the subclass to refresh the internal bean factory.
                     * @return the fresh BeanFactory instance
                     * @see #refreshBeanFactory()
                     * @see #getBeanFactory()
                     */
                    // @ts-ignore
                    obtainFreshBeanFactory(): ConfigurableListableBeanFactory
                    /**
                     * Configure the factory's standard context characteristics,
                     * such as the context's ClassLoader and post-processors.
                     * @param beanFactory the BeanFactory to configure
                     */
                    // @ts-ignore
                    prepareBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Modify the application context's internal bean factory after its standard
                     * initialization. All bean definitions will have been loaded, but no beans
                     * will have been instantiated yet. This allows for registering special
                     * BeanPostProcessors etc in certain ApplicationContext implementations.
                     * @param beanFactory the bean factory used by the application context
                     */
                    // @ts-ignore
                    postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Instantiate and invoke all registered BeanFactoryPostProcessor beans,
                     * respecting explicit order if given.
                     * <p>Must be called before singleton instantiation.
                     */
                    // @ts-ignore
                    invokeBeanFactoryPostProcessors(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Instantiate and register all BeanPostProcessor beans,
                     * respecting explicit order if given.
                     * <p>Must be called before any instantiation of application beans.
                     */
                    // @ts-ignore
                    registerBeanPostProcessors(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Initialize the MessageSource.
                     * Use parent's if none defined in this context.
                     */
                    // @ts-ignore
                    initMessageSource(): void
                    /**
                     * Initialize the ApplicationEventMulticaster.
                     * Uses SimpleApplicationEventMulticaster if none defined in the context.
                     * @see org.springframework.context.event.SimpleApplicationEventMulticaster
                     */
                    // @ts-ignore
                    initApplicationEventMulticaster(): void
                    /**
                     * Initialize the LifecycleProcessor.
                     * Uses DefaultLifecycleProcessor if none defined in the context.
                     * @see org.springframework.context.support.DefaultLifecycleProcessor
                     */
                    // @ts-ignore
                    initLifecycleProcessor(): void
                    /**
                     * Template method which can be overridden to add context-specific refresh work.
                     * Called on initialization of special beans, before instantiation of singletons.
                     * <p>This implementation is empty.
                     * @throws BeansException in case of errors
                     * @see #refresh()
                     */
                    // @ts-ignore
                    onRefresh(): void
                    /**
                     * Add beans that implement ApplicationListener as listeners.
                     * Doesn't affect other listeners, which can be added without being beans.
                     */
                    // @ts-ignore
                    registerListeners(): void
                    /**
                     * Finish the initialization of this context's bean factory,
                     * initializing all remaining singleton beans.
                     */
                    // @ts-ignore
                    finishBeanFactoryInitialization(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Finish the refresh of this context, invoking the LifecycleProcessor's
                     * onRefresh() method and publishing the
                     * {@link org.springframework.context.event.ContextRefreshedEvent}.
                     */
                    // @ts-ignore
                    finishRefresh(): void
                    /**
                     * Cancel this context's refresh attempt, resetting the {@code active} flag
                     * after an exception got thrown.
                     * @param ex the exception that led to the cancellation
                     */
                    // @ts-ignore
                    cancelRefresh(ex: BeansException): void
                    /**
                     * Reset Spring's common reflection metadata caches, in particular the
                     * {@link ReflectionUtils}, {@link AnnotationUtils}, {@link ResolvableType}
                     * and {@link CachedIntrospectionResults} caches.
                     * @since 4.2
                     * @see ReflectionUtils#clearCache()
                     * @see AnnotationUtils#clearCache()
                     * @see ResolvableType#clearCache()
                     * @see CachedIntrospectionResults#clearClassLoader(ClassLoader)
                     */
                    // @ts-ignore
                    resetCommonCaches(): void
                    /**
                     * Register a shutdown hook {@linkplain Thread#getName() named}
                     * {@code SpringContextShutdownHook} with the JVM runtime, closing this
                     * context on JVM shutdown unless it has already been closed at that time.
                     * <p>Delegates to {@code doClose()} for the actual closing procedure.
                     * @see Runtime#addShutdownHook
                     * @see ConfigurableApplicationContext#SHUTDOWN_HOOK_THREAD_NAME
                     * @see #close()
                     * @see #doClose()
                     */
                    // @ts-ignore
                    public registerShutdownHook(): void
                    /**
                     * Callback for destruction of this instance, originally attached
                     * to a {@code DisposableBean} implementation (not anymore in 5.0).
                     * <p>The {@link #close()} method is the native way to shut down
                     * an ApplicationContext, which this method simply delegates to.
                     * @deprecated as of Spring Framework 5.0, in favor of {#link #close()}
                     */
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Close this application context, destroying all beans in its bean factory.
                     * <p>Delegates to {@code doClose()} for the actual closing procedure.
                     * Also removes a JVM shutdown hook, if registered, as it's not needed anymore.
                     * @see #doClose()
                     * @see #registerShutdownHook()
                     */
                    // @ts-ignore
                    public close(): void
                    /**
                     * Actually performs context closing: publishes a ContextClosedEvent and
                     * destroys the singletons in the bean factory of this application context.
                     * <p>Called by both {@code close()} and a JVM shutdown hook, if any.
                     * @see org.springframework.context.event.ContextClosedEvent
                     * @see #destroyBeans()
                     * @see #close()
                     * @see #registerShutdownHook()
                     */
                    // @ts-ignore
                    doClose(): void
                    /**
                     * Template method for destroying all beans that this context manages.
                     * The default implementation destroy all cached singletons in this context,
                     * invoking {@code DisposableBean.destroy()} and/or the specified
                     * "destroy-method".
                     * <p>Can be overridden to add context-specific bean destruction steps
                     * right before or right after standard singleton destruction,
                     * while the context's BeanFactory is still active.
                     * @see #getBeanFactory()
                     * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#destroySingletons()
                     */
                    // @ts-ignore
                    destroyBeans(): void
                    /**
                     * Template method which can be overridden to add context-specific shutdown work.
                     * The default implementation is empty.
                     * <p>Called at the end of {@link #doClose}'s shutdown procedure, after
                     * this context's BeanFactory has been closed. If custom shutdown logic
                     * needs to execute while the BeanFactory is still active, override
                     * the {@link #destroyBeans()} method instead.
                     */
                    // @ts-ignore
                    onClose(): void
                    // @ts-ignore
                    public isActive(): boolean
                    /**
                     * Assert that this context's BeanFactory is currently active,
                     * throwing an {@link IllegalStateException} if it isn't.
                     * <p>Invoked by all {@link BeanFactory} delegation methods that depend
                     * on an active context, i.e. in particular all bean accessor methods.
                     * <p>The default implementation checks the {@link #isActive() 'active'} status
                     * of this context overall. May be overridden for more specific checks, or for a
                     * no-op if {@link #getBeanFactory()} itself throws an exception in such a case.
                     */
                    // @ts-ignore
                    assertBeanFactoryActive(): void
                    // @ts-ignore
                    public getBean(name: java.lang.String | string): any
                    // @ts-ignore
                    public getBean<T>(name: java.lang.String | string, requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public getBean(name: java.lang.String | string, ...args: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public getBean<T>(requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public getBean<T>(requiredType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                    // @ts-ignore
                    public getBeanProvider<T>(requiredType: java.lang.Class<T>): object
                    // @ts-ignore
                    public getBeanProvider<T>(requiredType: ResolvableType): object
                    // @ts-ignore
                    public containsBean(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public isSingleton(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public isPrototype(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public isTypeMatch(name: java.lang.String | string, typeToMatch: ResolvableType): boolean
                    // @ts-ignore
                    public getType(name: java.lang.String | string): java.lang.Class<any>
                    // @ts-ignore
                    public getType(name: java.lang.String | string, allowFactoryBeanInit: boolean): java.lang.Class<any>
                    // @ts-ignore
                    public getAliases(name: java.lang.String | string): string[]
                    // @ts-ignore
                    public containsBeanDefinition(beanName: java.lang.String | string): boolean
                    // @ts-ignore
                    public getBeanDefinitionCount(): number /*int*/
                    // @ts-ignore
                    public getBeanDefinitionNames(): string[]
                    // @ts-ignore
                    public getBeanNamesForType(type: ResolvableType): string[]
                    // @ts-ignore
                    public getBeanNamesForType(type: ResolvableType, includeNonSingletons: boolean, allowEagerInit: boolean): string[]
                    // @ts-ignore
                    public getBeansOfType<T>(type: java.lang.Class<T>): java.util.Map<java.lang.String | string, T>
                    // @ts-ignore
                    public getBeansOfType<T>(type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): java.util.Map<java.lang.String | string, T>
                    // @ts-ignore
                    public getBeanNamesForAnnotation(annotationType: java.lang.Class<any>): string[]
                    // @ts-ignore
                    public getBeansWithAnnotation(annotationType: java.lang.Class<any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public findAnnotationOnBean<A extends java.lang.annotation.Annotation>(beanName: java.lang.String | string, annotationType: java.lang.Class<A>): A
                    // @ts-ignore
                    public getParentBeanFactory(): BeanFactory
                    // @ts-ignore
                    public containsLocalBean(name: java.lang.String | string): boolean
                    /**
                     * Return the internal bean factory of the parent context if it implements
                     * ConfigurableApplicationContext; else, return the parent context itself.
                     * @see org.springframework.context.ConfigurableApplicationContext#getBeanFactory
                     */
                    // @ts-ignore
                    getInternalParentBeanFactory(): BeanFactory
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], defaultMessage: java.lang.String | string, locale: java.util.Locale): string
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], locale: java.util.Locale): string
                    // @ts-ignore
                    public getMessage(resolvable: org.springframework.context.MessageSourceResolvable, locale: java.util.Locale): string
                    /**
                     * Return the internal message source of the parent context if it is an
                     * AbstractApplicationContext too; else, return the parent context itself.
                     */
                    // @ts-ignore
                    getInternalParentMessageSource(): org.springframework.context.MessageSource
                    // @ts-ignore
                    public getResources(locationPattern: java.lang.String | string): Resource[]
                    // @ts-ignore
                    public start(): void
                    // @ts-ignore
                    public stop(): void
                    // @ts-ignore
                    public isRunning(): boolean
                    /**
                     * Subclasses must implement this method to perform the actual configuration load.
                     * The method is invoked by {@link #refresh()} before any other initialization work.
                     * <p>A subclass will either create a new bean factory and hold a reference to it,
                     * or return a single BeanFactory instance that it holds. In the latter case, it will
                     * usually throw an IllegalStateException if refreshing the context more than once.
                     * @throws BeansException if initialization of the bean factory failed
                     * @throws IllegalStateException if already initialized and multiple refresh
                     *  attempts are not supported
                     */
                    // @ts-ignore
                    abstract refreshBeanFactory(): void
                    /**
                     * Subclasses must implement this method to release their internal bean factory.
                     * This method gets invoked by {@link #close()} after all other shutdown work.
                     * <p>Should never throw an exception but rather log shutdown failures.
                     */
                    // @ts-ignore
                    abstract closeBeanFactory(): void
                    /**
                     * Subclasses must return their internal bean factory here. They should implement the
                     * lookup efficiently, so that it can be called repeatedly without a performance penalty.
                     * <p>Note: Subclasses should check whether the context is still active before
                     * returning the internal bean factory. The internal factory should generally be
                     * considered unavailable once the context has been closed.
                     * @return this application context's internal bean factory (never {#code null})
                     * @throws IllegalStateException if the context does not hold an internal bean factory yet
                     *  (usually if {#link #refresh()} has never been called) or if the context has been
                     *  closed already
                     * @see #refreshBeanFactory()
                     * @see #closeBeanFactory()
                     */
                    // @ts-ignore
                    public abstract getBeanFactory(): ConfigurableListableBeanFactory
                    /**
                     * Return information about this context.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
