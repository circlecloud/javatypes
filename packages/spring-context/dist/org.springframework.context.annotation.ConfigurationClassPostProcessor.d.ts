declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * {@link BeanFactoryPostProcessor} used for bootstrapping processing of
                 * {@link Configuration @Configuration} classes.
                 * <p>Registered by default when using {@code <context:annotation-config/>} or
                 * {@code <context:component-scan/>}. Otherwise, may be declared manually as
                 * with any other BeanFactoryPostProcessor.
                 * <p>This post processor is priority-ordered as it is important that any
                 * {@link Bean} methods declared in {@code @Configuration} classes have
                 * their corresponding bean definitions registered before any other
                 * {@link BeanFactoryPostProcessor} executes.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Phillip Webb
                 * @since 3.0
                 */
                // @ts-ignore
                class ConfigurationClassPostProcessor extends java.lang.Object implements org.springframework.context.ResourceLoaderAware, org.springframework.context.EnvironmentAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * A {@code BeanNameGenerator} using fully qualified class names as default bean names.
                     * <p>This default for configuration-level import purposes may be overridden through
                     * {@link #setBeanNameGenerator}. Note that the default for component scanning purposes
                     * is a plain {@link AnnotationBeanNameGenerator#INSTANCE}, unless overridden through
                     * {@link #setBeanNameGenerator} with a unified user-level bean name generator.
                     * @since 5.2
                     * @see #setBeanNameGenerator
                     */
                    // @ts-ignore
                    readonly IMPORT_BEAN_NAME_GENERATOR: org.springframework.context.annotation.AnnotationBeanNameGenerator
                    // @ts-ignore
                    getOrder(): int
                    /**
                     * Set the {@link SourceExtractor} to use for generated bean definitions
                     * that correspond to {@link Bean} factory methods.
                     */
                    // @ts-ignore
                    setSourceExtractor(sourceExtractor: SourceExtractor): void
                    /**
                     * Set the {@link ProblemReporter} to use.
                     * <p>Used to register any problems detected with {@link Configuration} or {@link Bean}
                     * declarations. For instance, an @Bean method marked as {@code final} is illegal
                     * and would be reported as a problem. Defaults to {@link FailFastProblemReporter}.
                     */
                    // @ts-ignore
                    setProblemReporter(problemReporter: ProblemReporter): void
                    /**
                     * Set the {@link MetadataReaderFactory} to use.
                     * <p>Default is a {@link CachingMetadataReaderFactory} for the specified
                     * {@linkplain #setBeanClassLoader bean class loader}.
                     */
                    // @ts-ignore
                    setMetadataReaderFactory(metadataReaderFactory: MetadataReaderFactory): void
                    /**
                     * Set the {@link BeanNameGenerator} to be used when triggering component scanning
                     * from {@link Configuration} classes and when registering {@link Import}'ed
                     * configuration classes. The default is a standard {@link AnnotationBeanNameGenerator}
                     * for scanned components (compatible with the default in {@link ClassPathBeanDefinitionScanner})
                     * and a variant thereof for imported configuration classes (using unique fully-qualified
                     * class names instead of standard component overriding).
                     * <p>Note that this strategy does <em>not</em> apply to {@link Bean} methods.
                     * <p>This setter is typically only appropriate when configuring the post-processor as a
                     * standalone bean definition in XML, e.g. not using the dedicated {@code AnnotationConfig*}
                     * application contexts or the {@code <context:annotation-config>} element. Any bean name
                     * generator specified against the application context will take precedence over any set here.
                     * @since 3.1.1
                     * @see AnnotationConfigApplicationContext#setBeanNameGenerator(BeanNameGenerator)
                     * @see AnnotationConfigUtils#CONFIGURATION_BEAN_NAME_GENERATOR
                     */
                    // @ts-ignore
                    setBeanNameGenerator(beanNameGenerator: BeanNameGenerator): void
                    // @ts-ignore
                    setEnvironment(environment: Environment): void
                    // @ts-ignore
                    setResourceLoader(resourceLoader: ResourceLoader): void
                    // @ts-ignore
                    setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                    /**
                     * Derive further bean definitions from the configuration classes in the registry.
                     */
                    // @ts-ignore
                    postProcessBeanDefinitionRegistry(registry: BeanDefinitionRegistry): void
                    /**
                     * Prepare the Configuration classes for servicing bean requests at runtime
                     * by replacing them with CGLIB-enhanced subclasses.
                     */
                    // @ts-ignore
                    postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Build and validate a configuration model based on the registry of
                     * {@link Configuration} classes.
                     */
                    // @ts-ignore
                    processConfigBeanDefinitions(registry: BeanDefinitionRegistry): void
                    /**
                     * Post-processes a BeanFactory in search of Configuration class BeanDefinitions;
                     * any candidates are then enhanced by a {@link ConfigurationClassEnhancer}.
                     * Candidate status is determined by BeanDefinition attribute metadata.
                     * @see ConfigurationClassEnhancer
                     */
                    // @ts-ignore
                    enhanceConfigurationClasses(beanFactory: ConfigurableListableBeanFactory): void
                }
            }
        }
    }
}
