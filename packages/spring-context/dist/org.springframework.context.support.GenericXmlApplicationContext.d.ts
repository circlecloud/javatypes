declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Convenient application context with built-in XML support.
                 * This is a flexible alternative to {@link ClassPathXmlApplicationContext}
                 * and {@link FileSystemXmlApplicationContext}, to be configured via setters,
                 * with an eventual {@link #refresh()} call activating the context.
                 * <p>In case of multiple configuration files, bean definitions in later files
                 * will override those defined in earlier files. This can be leveraged to
                 * intentionally override certain bean definitions via an extra configuration
                 * file appended to the list.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 3.0
                 * @see #load
                 * @see XmlBeanDefinitionReader
                 * @see org.springframework.context.annotation.AnnotationConfigApplicationContext
                 */
                // @ts-ignore
                class GenericXmlApplicationContext extends org.springframework.context.support.GenericApplicationContext {
                    /**
                     * Create a new GenericXmlApplicationContext that needs to be
                     * {@link #load loaded} and then manually {@link #refresh refreshed}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new GenericXmlApplicationContext, loading bean definitions
                     * from the given resources and automatically refreshing the context.
                     * @param resources the resources to load from
                     */
                    // @ts-ignore
                    constructor(...resources: Resource[])
                    /**
                     * Create a new GenericXmlApplicationContext, loading bean definitions
                     * from the given resource locations and automatically refreshing the context.
                     * @param relativeClass class whose package will be used as a prefix when
                     *  loading each specified resource name
                     * @param resourceNames relatively-qualified names of resources to load
                     */
                    // @ts-ignore
                    constructor(relativeClass: java.lang.Class<any>, ...resourceNames: string[])
                    /**
                     * Exposes the underlying {@link XmlBeanDefinitionReader} for additional
                     * configuration facilities and {@code loadBeanDefinition} variations.
                     */
                    // @ts-ignore
                    getReader(): XmlBeanDefinitionReader
                    /**
                     * Set whether to use XML validation. Default is {@code true}.
                     */
                    // @ts-ignore
                    setValidating(validating: boolean): void
                    /**
                     * Delegates the given environment to underlying {@link XmlBeanDefinitionReader}.
                     * Should be called before any call to {@code #load}.
                     */
                    // @ts-ignore
                    setEnvironment(environment: ConfigurableEnvironment): void
                    /**
                     * Load bean definitions from the given XML resources.
                     * @param resources one or more resources to load from
                     */
                    // @ts-ignore
                    load(...resources: Resource[]): void
                    /**
                     * Load bean definitions from the given XML resources.
                     * @param relativeClass class whose package will be used as a prefix when
                     *  loading each specified resource name
                     * @param resourceNames relatively-qualified names of resources to load
                     */
                    // @ts-ignore
                    load(relativeClass: java.lang.Class<any>, ...resourceNames: string[]): void
                }
            }
        }
    }
}
