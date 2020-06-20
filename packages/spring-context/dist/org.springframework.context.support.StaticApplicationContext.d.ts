declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * {@link org.springframework.context.ApplicationContext} implementation
                 * which supports programmatic registration of beans and messages,
                 * rather than reading bean definitions from external configuration sources.
                 * Mainly useful for testing.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see #registerSingleton
                 * @see #registerPrototype
                 * @see #registerBeanDefinition
                 * @see #refresh
                 */
                // @ts-ignore
                class StaticApplicationContext extends org.springframework.context.support.GenericApplicationContext {
                    /**
                     * Create a new StaticApplicationContext.
                     * @see #registerSingleton
                     * @see #registerPrototype
                     * @see #registerBeanDefinition
                     * @see #refresh
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new StaticApplicationContext with the given parent.
                     * @see #registerSingleton
                     * @see #registerPrototype
                     * @see #registerBeanDefinition
                     * @see #refresh
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Overridden to turn it into a no-op, to be more lenient towards test cases.
                     */
                    // @ts-ignore
                    assertBeanFactoryActive(): void
                    /**
                     * Return the internal StaticMessageSource used by this context.
                     * Can be used to register messages on it.
                     * @see #addMessage
                     */
                    // @ts-ignore
                    getStaticMessageSource(): org.springframework.context.support.StaticMessageSource
                    /**
                     * Register a singleton bean with the underlying bean factory.
                     * <p>For more advanced needs, register with the underlying BeanFactory directly.
                     * @see #getDefaultListableBeanFactory
                     */
                    // @ts-ignore
                    registerSingleton(name: string, clazz: java.lang.Class<any>): void
                    /**
                     * Register a singleton bean with the underlying bean factory.
                     * <p>For more advanced needs, register with the underlying BeanFactory directly.
                     * @see #getDefaultListableBeanFactory
                     */
                    // @ts-ignore
                    registerSingleton(name: string, clazz: java.lang.Class<any>, pvs: MutablePropertyValues): void
                    /**
                     * Register a prototype bean with the underlying bean factory.
                     * <p>For more advanced needs, register with the underlying BeanFactory directly.
                     * @see #getDefaultListableBeanFactory
                     */
                    // @ts-ignore
                    registerPrototype(name: string, clazz: java.lang.Class<any>): void
                    /**
                     * Register a prototype bean with the underlying bean factory.
                     * <p>For more advanced needs, register with the underlying BeanFactory directly.
                     * @see #getDefaultListableBeanFactory
                     */
                    // @ts-ignore
                    registerPrototype(name: string, clazz: java.lang.Class<any>, pvs: MutablePropertyValues): void
                    /**
                     * Associate the given message with the given code.
                     * @param code lookup code
                     * @param locale the locale message should be found within
                     * @param defaultMessage message associated with this lookup code
                     * @see #getStaticMessageSource
                     */
                    // @ts-ignore
                    addMessage(code: string, locale: java.util.Locale, defaultMessage: string): void
                }
            }
        }
    }
}
