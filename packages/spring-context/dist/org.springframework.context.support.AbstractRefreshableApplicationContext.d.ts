declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Base class for {@link org.springframework.context.ApplicationContext}
                 * implementations which are supposed to support multiple calls to {@link #refresh()},
                 * creating a new internal bean factory instance every time.
                 * Typically (but not necessarily), such a context will be driven by
                 * a set of config locations to load bean definitions from.
                 * <p>The only method to be implemented by subclasses is {@link #loadBeanDefinitions},
                 * which gets invoked on each refresh. A concrete implementation is supposed to load
                 * bean definitions into the given
                 * {@link org.springframework.beans.factory.support.DefaultListableBeanFactory},
                 * typically delegating to one or more specific bean definition readers.
                 * <p><b>Note that there is a similar base class for WebApplicationContexts.</b>
                 * {@link org.springframework.web.context.support.AbstractRefreshableWebApplicationContext}
                 * provides the same subclassing strategy, but additionally pre-implements
                 * all context functionality for web environments. There is also a
                 * pre-defined way to receive config locations for a web context.
                 * <p>Concrete standalone subclasses of this base class, reading in a
                 * specific bean definition format, are {@link ClassPathXmlApplicationContext}
                 * and {@link FileSystemXmlApplicationContext}, which both derive from the
                 * common {@link AbstractXmlApplicationContext} base class;
                 * {@link org.springframework.context.annotation.AnnotationConfigApplicationContext}
                 * supports {@code @Configuration}-annotated classes as a source of bean definitions.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 1.1.3
                 * @see #loadBeanDefinitions
                 * @see org.springframework.beans.factory.support.DefaultListableBeanFactory
                 * @see org.springframework.web.context.support.AbstractRefreshableWebApplicationContext
                 * @see AbstractXmlApplicationContext
                 * @see ClassPathXmlApplicationContext
                 * @see FileSystemXmlApplicationContext
                 * @see org.springframework.context.annotation.AnnotationConfigApplicationContext
                 */
                // @ts-ignore
                abstract class AbstractRefreshableApplicationContext extends org.springframework.context.support.AbstractApplicationContext {
                    /**
                     * Create a new AbstractRefreshableApplicationContext with no parent.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new AbstractRefreshableApplicationContext with the given parent context.
                     * @param parent the parent context
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Set whether it should be allowed to override bean definitions by registering
                     * a different definition with the same name, automatically replacing the former.
                     * If not, an exception will be thrown. Default is "true".
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowBeanDefinitionOverriding
                     */
                    // @ts-ignore
                    public setAllowBeanDefinitionOverriding(allowBeanDefinitionOverriding: boolean): void
                    /**
                     * Set whether to allow circular references between beans - and automatically
                     * try to resolve them.
                     * <p>Default is "true". Turn this off to throw an exception when encountering
                     * a circular reference, disallowing them completely.
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowCircularReferences
                     */
                    // @ts-ignore
                    public setAllowCircularReferences(allowCircularReferences: boolean): void
                    /**
                     * This implementation performs an actual refresh of this context's underlying
                     * bean factory, shutting down the previous bean factory (if any) and
                     * initializing a fresh bean factory for the next phase of the context's lifecycle.
                     */
                    // @ts-ignore
                    refreshBeanFactory(): void
                    // @ts-ignore
                    cancelRefresh(ex: BeansException): void
                    // @ts-ignore
                    closeBeanFactory(): void
                    /**
                     * Determine whether this context currently holds a bean factory,
                     * i.e. has been refreshed at least once and not been closed yet.
                     */
                    // @ts-ignore
                    hasBeanFactory(): boolean
                    // @ts-ignore
                    public getBeanFactory(): ConfigurableListableBeanFactory
                    /**
                     * Overridden to turn it into a no-op: With AbstractRefreshableApplicationContext,
                     * {@link #getBeanFactory()} serves a strong assertion for an active context anyway.
                     */
                    // @ts-ignore
                    assertBeanFactoryActive(): void
                    /**
                     * Create an internal bean factory for this context.
                     * Called for each {@link #refresh()} attempt.
                     * <p>The default implementation creates a
                     * {@link org.springframework.beans.factory.support.DefaultListableBeanFactory}
                     * with the {@linkplain #getInternalParentBeanFactory() internal bean factory} of this
                     * context's parent as parent bean factory. Can be overridden in subclasses,
                     * for example to customize DefaultListableBeanFactory's settings.
                     * @return the bean factory for this context
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowBeanDefinitionOverriding
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowEagerClassLoading
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowCircularReferences
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory#setAllowRawInjectionDespiteWrapping
                     */
                    // @ts-ignore
                    createBeanFactory(): DefaultListableBeanFactory
                    /**
                     * Customize the internal bean factory used by this context.
                     * Called for each {@link #refresh()} attempt.
                     * <p>The default implementation applies this context's
                     * {@linkplain #setAllowBeanDefinitionOverriding "allowBeanDefinitionOverriding"}
                     * and {@linkplain #setAllowCircularReferences "allowCircularReferences"} settings,
                     * if specified. Can be overridden in subclasses to customize any of
                     * {@link DefaultListableBeanFactory}'s settings.
                     * @param beanFactory the newly created bean factory for this context
                     * @see DefaultListableBeanFactory#setAllowBeanDefinitionOverriding
                     * @see DefaultListableBeanFactory#setAllowCircularReferences
                     * @see DefaultListableBeanFactory#setAllowRawInjectionDespiteWrapping
                     * @see DefaultListableBeanFactory#setAllowEagerClassLoading
                     */
                    // @ts-ignore
                    customizeBeanFactory(beanFactory: DefaultListableBeanFactory): void
                    /**
                     * Load bean definitions into the given bean factory, typically through
                     * delegating to one or more bean definition readers.
                     * @param beanFactory the bean factory to load bean definitions into
                     * @throws BeansException if parsing of the bean definitions failed
                     * @throws IOException if loading of bean definition files failed
                     * @see org.springframework.beans.factory.support.PropertiesBeanDefinitionReader
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     */
                    // @ts-ignore
                    abstract loadBeanDefinitions(beanFactory: DefaultListableBeanFactory): void
                }
            }
        }
    }
}
