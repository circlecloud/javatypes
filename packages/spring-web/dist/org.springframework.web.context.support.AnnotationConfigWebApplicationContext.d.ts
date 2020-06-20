declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link org.springframework.web.context.WebApplicationContext WebApplicationContext}
                     * implementation which accepts <em>component classes</em> as input &mdash; in particular
                     * {@link org.springframework.context.annotation.Configuration @Configuration}-annotated
                     * classes, but also plain {@link org.springframework.stereotype.Component @Component}
                     * classes and JSR-330 compliant classes using {@code javax.inject} annotations.
                     * <p>Allows for registering classes one by one (specifying class names as config
                     * location) as well as for classpath scanning (specifying base packages as config location).
                     * <p>This is essentially the equivalent of
                     * {@link org.springframework.context.annotation.AnnotationConfigApplicationContext
                     * AnnotationConfigApplicationContext} for a web environment.
                     * <p>To make use of this application context, the
                     * {@linkplain ContextLoader#CONTEXT_CLASS_PARAM "contextClass"} context-param for
                     * ContextLoader and/or "contextClass" init-param for FrameworkServlet must be set to
                     * the fully-qualified name of this class.
                     * <p>As of Spring 3.1, this class may also be directly instantiated and injected into
                     * Spring's {@code DispatcherServlet} or {@code ContextLoaderListener} when using the
                     * {@link org.springframework.web.WebApplicationInitializer WebApplicationInitializer}
                     * code-based alternative to {@code web.xml}. See its Javadoc for details and usage examples.
                     * <p>Unlike {@link XmlWebApplicationContext}, no default configuration class locations
                     * are assumed. Rather, it is a requirement to set the
                     * {@linkplain ContextLoader#CONFIG_LOCATION_PARAM "contextConfigLocation"}
                     * context-param for {@link ContextLoader} and/or "contextConfigLocation" init-param for
                     * FrameworkServlet.  The param-value may contain both fully-qualified
                     * class names and base packages to scan for components. See {@link #loadBeanDefinitions}
                     * for exact details on how these locations are processed.
                     * <p>As an alternative to setting the "contextConfigLocation" parameter, users may
                     * implement an {@link org.springframework.context.ApplicationContextInitializer
                     * ApplicationContextInitializer} and set the
                     * {@linkplain ContextLoader#CONTEXT_INITIALIZER_CLASSES_PARAM "contextInitializerClasses"}
                     * context-param / init-param. In such cases, users should favor the {@link #refresh()}
                     * and {@link #scan(String...)} methods over the {@link #setConfigLocation(String)}
                     * method, which is primarily for use by {@code ContextLoader}.
                     * <p>Note: In case of multiple {@code @Configuration} classes, later {@code @Bean}
                     * definitions will override ones defined in earlier loaded files. This can be leveraged
                     * to deliberately override certain bean definitions via an extra {@code @Configuration}
                     * class.
                     * @author Chris Beams
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see org.springframework.context.annotation.AnnotationConfigApplicationContext
                     */
                    // @ts-ignore
                    class AnnotationConfigWebApplicationContext extends org.springframework.web.context.support.AbstractRefreshableWebApplicationContext {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set a custom {@link BeanNameGenerator} for use with {@link AnnotatedBeanDefinitionReader}
                         * and/or {@link ClassPathBeanDefinitionScanner}.
                         * <p>Default is {@link org.springframework.context.annotation.AnnotationBeanNameGenerator}.
                         * @see AnnotatedBeanDefinitionReader#setBeanNameGenerator
                         * @see ClassPathBeanDefinitionScanner#setBeanNameGenerator
                         */
                        // @ts-ignore
                        setBeanNameGenerator(beanNameGenerator: BeanNameGenerator): void
                        /**
                         * Return the custom {@link BeanNameGenerator} for use with {@link AnnotatedBeanDefinitionReader}
                         * and/or {@link ClassPathBeanDefinitionScanner}, if any.
                         */
                        // @ts-ignore
                        getBeanNameGenerator(): BeanNameGenerator
                        /**
                         * Set a custom {@link ScopeMetadataResolver} for use with {@link AnnotatedBeanDefinitionReader}
                         * and/or {@link ClassPathBeanDefinitionScanner}.
                         * <p>Default is an {@link org.springframework.context.annotation.AnnotationScopeMetadataResolver}.
                         * @see AnnotatedBeanDefinitionReader#setScopeMetadataResolver
                         * @see ClassPathBeanDefinitionScanner#setScopeMetadataResolver
                         */
                        // @ts-ignore
                        setScopeMetadataResolver(scopeMetadataResolver: ScopeMetadataResolver): void
                        /**
                         * Return the custom {@link ScopeMetadataResolver} for use with {@link AnnotatedBeanDefinitionReader}
                         * and/or {@link ClassPathBeanDefinitionScanner}, if any.
                         */
                        // @ts-ignore
                        getScopeMetadataResolver(): ScopeMetadataResolver
                        /**
                         * Register one or more component classes to be processed.
                         * <p>Note that {@link #refresh()} must be called in order for the context
                         * to fully process the new classes.
                         * @param componentClasses one or more component classes,
                         *  e.g. {#link org.springframework.context.annotation.Configuration @Configuration} classes
                         * @see #scan(String...)
                         * @see #loadBeanDefinitions(DefaultListableBeanFactory)
                         * @see #setConfigLocation(String)
                         * @see #refresh()
                         */
                        // @ts-ignore
                        register(...componentClasses: java.lang.Class[]): void
                        /**
                         * Perform a scan within the specified base packages.
                         * <p>Note that {@link #refresh()} must be called in order for the context
                         * to fully process the new classes.
                         * @param basePackages the packages to check for component classes
                         * @see #loadBeanDefinitions(DefaultListableBeanFactory)
                         * @see #register(Class...)
                         * @see #setConfigLocation(String)
                         * @see #refresh()
                         */
                        // @ts-ignore
                        scan(...basePackages: string[]): void
                        /**
                         * Register a {@link org.springframework.beans.factory.config.BeanDefinition} for
                         * any classes specified by {@link #register(Class...)} and scan any packages
                         * specified by {@link #scan(String...)}.
                         * <p>For any values specified by {@link #setConfigLocation(String)} or
                         * {@link #setConfigLocations(String[])}, attempt first to load each location as a
                         * class, registering a {@code BeanDefinition} if class loading is successful,
                         * and if class loading fails (i.e. a {@code ClassNotFoundException} is raised),
                         * assume the value is a package and attempt to scan it for component classes.
                         * <p>Enables the default set of annotation configuration post processors, such that
                         * {@code @Autowired}, {@code @Required}, and associated annotations can be used.
                         * <p>Configuration class bean definitions are registered with generated bean
                         * definition names unless the {@code value} attribute is provided to the stereotype
                         * annotation.
                         * @param beanFactory the bean factory to load bean definitions into
                         * @see #register(Class...)
                         * @see #scan(String...)
                         * @see #setConfigLocation(String)
                         * @see #setConfigLocations(String[])
                         * @see AnnotatedBeanDefinitionReader
                         * @see ClassPathBeanDefinitionScanner
                         */
                        // @ts-ignore
                        loadBeanDefinitions(beanFactory: DefaultListableBeanFactory): void
                        /**
                         * Build an {@link AnnotatedBeanDefinitionReader} for the given bean factory.
                         * <p>This should be pre-configured with the {@code Environment} (if desired)
                         * but not with a {@code BeanNameGenerator} or {@code ScopeMetadataResolver} yet.
                         * @param beanFactory the bean factory to load bean definitions into
                         * @since 4.1.9
                         * @see #getEnvironment()
                         * @see #getBeanNameGenerator()
                         * @see #getScopeMetadataResolver()
                         */
                        // @ts-ignore
                        getAnnotatedBeanDefinitionReader(beanFactory: DefaultListableBeanFactory): AnnotatedBeanDefinitionReader
                        /**
                         * Build a {@link ClassPathBeanDefinitionScanner} for the given bean factory.
                         * <p>This should be pre-configured with the {@code Environment} (if desired)
                         * but not with a {@code BeanNameGenerator} or {@code ScopeMetadataResolver} yet.
                         * @param beanFactory the bean factory to load bean definitions into
                         * @since 4.1.9
                         * @see #getEnvironment()
                         * @see #getBeanNameGenerator()
                         * @see #getScopeMetadataResolver()
                         */
                        // @ts-ignore
                        getClassPathBeanDefinitionScanner(beanFactory: DefaultListableBeanFactory): ClassPathBeanDefinitionScanner
                    }
                }
            }
        }
    }
}
