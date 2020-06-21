declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * A component provider that provides candidate components from a base package. Can
                 * use {@link CandidateComponentsIndex the index} if it is available of scans the
                 * classpath otherwise. Candidate components are identified by applying exclude and
                 * include filters. {@link AnnotationTypeFilter}, {@link AssignableTypeFilter} include
                 * filters on an annotation/superclass that are annotated with {@link Indexed} are
                 * supported: if any other include filter is specified, the index is ignored and
                 * classpath scanning is used instead.
                 * <p>This implementation is based on Spring's
                 * {@link org.springframework.core.type.classreading.MetadataReader MetadataReader}
                 * facility, backed by an ASM {@link org.springframework.asm.ClassReader ClassReader}.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Ramnivas Laddad
                 * @author Chris Beams
                 * @author Stephane Nicoll
                 * @since 2.5
                 * @see org.springframework.core.type.classreading.MetadataReaderFactory
                 * @see org.springframework.core.type.AnnotationMetadata
                 * @see ScannedGenericBeanDefinition
                 * @see CandidateComponentsIndex
                 */
                // @ts-ignore
                class ClassPathScanningCandidateComponentProvider extends java.lang.Object implements org.springframework.context.ResourceLoaderAware {
                    /**
                     * Protected constructor for flexible subclass initialization.
                     * @since 4.3.6
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a ClassPathScanningCandidateComponentProvider with a {@link StandardEnvironment}.
                     * @param useDefaultFilters whether to register the default filters for the
                     *  {#link Component @Component}, {@link Repository @Repository},
                     *  {@link Service @Service}, and {@link Controller @Controller}
                     *  stereotype annotations
                     * @see #registerDefaultFilters()
                     */
                    // @ts-ignore
                    constructor(useDefaultFilters: boolean)
                    /**
                     * Create a ClassPathScanningCandidateComponentProvider with the given {@link Environment}.
                     * @param useDefaultFilters whether to register the default filters for the
                     *  {#link Component @Component}, {@link Repository @Repository},
                     *  {@link Service @Service}, and {@link Controller @Controller}
                     *  stereotype annotations
                     * @param environment the Environment to use
                     * @see #registerDefaultFilters()
                     */
                    // @ts-ignore
                    constructor(useDefaultFilters: boolean, environment: Environment)
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the resource pattern to use when scanning the classpath.
                     * This value will be appended to each base package name.
                     * @see #findCandidateComponents(String)
                     * @see #DEFAULT_RESOURCE_PATTERN
                     */
                    // @ts-ignore
                    public setResourcePattern(resourcePattern: java.lang.String | string): void
                    /**
                     * Add an include type filter to the <i>end</i> of the inclusion list.
                     */
                    // @ts-ignore
                    public addIncludeFilter(includeFilter: TypeFilter): void
                    /**
                     * Add an exclude type filter to the <i>front</i> of the exclusion list.
                     */
                    // @ts-ignore
                    public addExcludeFilter(excludeFilter: TypeFilter): void
                    /**
                     * Reset the configured type filters.
                     * @param useDefaultFilters whether to re-register the default filters for
                     *  the {#link Component @Component}, {@link Repository @Repository},
                     *  {@link Service @Service}, and {@link Controller @Controller}
                     *  stereotype annotations
                     * @see #registerDefaultFilters()
                     */
                    // @ts-ignore
                    public resetFilters(useDefaultFilters: boolean): void
                    /**
                     * Register the default filter for {@link Component @Component}.
                     * <p>This will implicitly register all annotations that have the
                     * {@link Component @Component} meta-annotation including the
                     * {@link Repository @Repository}, {@link Service @Service}, and
                     * {@link Controller @Controller} stereotype annotations.
                     * <p>Also supports Java EE 6's {@link javax.annotation.ManagedBean} and
                     * JSR-330's {@link javax.inject.Named} annotations, if available.
                     */
                    // @ts-ignore
                    registerDefaultFilters(): void
                    /**
                     * Set the Environment to use when resolving placeholders and evaluating
                     * {@link Conditional @Conditional}-annotated component classes.
                     * <p>The default is a {@link StandardEnvironment}.
                     * @param environment the Environment to use
                     */
                    // @ts-ignore
                    public setEnvironment(environment: Environment): void
                    // @ts-ignore
                    public getEnvironment(): Environment
                    /**
                     * Return the {@link BeanDefinitionRegistry} used by this scanner, if any.
                     */
                    // @ts-ignore
                    getRegistry(): BeanDefinitionRegistry
                    /**
                     * Set the {@link ResourceLoader} to use for resource locations.
                     * This will typically be a {@link ResourcePatternResolver} implementation.
                     * <p>Default is a {@code PathMatchingResourcePatternResolver}, also capable of
                     * resource pattern resolving through the {@code ResourcePatternResolver} interface.
                     * @see org.springframework.core.io.support.ResourcePatternResolver
                     * @see org.springframework.core.io.support.PathMatchingResourcePatternResolver
                     */
                    // @ts-ignore
                    public setResourceLoader(resourceLoader: ResourceLoader): void
                    /**
                     * Return the ResourceLoader that this component provider uses.
                     */
                    // @ts-ignore
                    public getResourceLoader(): ResourceLoader
                    /**
                     * Set the {@link MetadataReaderFactory} to use.
                     * <p>Default is a {@link CachingMetadataReaderFactory} for the specified
                     * {@linkplain #setResourceLoader resource loader}.
                     * <p>Call this setter method <i>after</i> {@link #setResourceLoader} in order
                     * for the given MetadataReaderFactory to override the default factory.
                     */
                    // @ts-ignore
                    public setMetadataReaderFactory(metadataReaderFactory: MetadataReaderFactory): void
                    /**
                     * Return the MetadataReaderFactory used by this component provider.
                     */
                    // @ts-ignore
                    public getMetadataReaderFactory(): MetadataReaderFactory
                    /**
                     * Scan the class path for candidate components.
                     * @param basePackage the package to check for annotated classes
                     * @return a corresponding Set of autodetected bean definitions
                     */
                    // @ts-ignore
                    public findCandidateComponents(basePackage: java.lang.String | string): Array<BeanDefinition>
                    /**
                     * Resolve the specified base package into a pattern specification for
                     * the package search path.
                     * <p>The default implementation resolves placeholders against system properties,
                     * and converts a "."-based package path to a "/"-based resource path.
                     * @param basePackage the base package as specified by the user
                     * @return the pattern specification to be used for package searching
                     */
                    // @ts-ignore
                    resolveBasePackage(basePackage: java.lang.String | string): string
                    /**
                     * Determine whether the given class does not match any exclude filter
                     * and does match at least one include filter.
                     * @param metadataReader the ASM ClassReader for the class
                     * @return whether the class qualifies as a candidate component
                     */
                    // @ts-ignore
                    isCandidateComponent(metadataReader: MetadataReader): boolean
                    /**
                     * Determine whether the given bean definition qualifies as candidate.
                     * <p>The default implementation checks whether the class is not an interface
                     * and not dependent on an enclosing class.
                     * <p>Can be overridden in subclasses.
                     * @param beanDefinition the bean definition to check
                     * @return whether the bean definition qualifies as a candidate component
                     */
                    // @ts-ignore
                    isCandidateComponent(beanDefinition: AnnotatedBeanDefinition): boolean
                    /**
                     * Clear the local metadata cache, if any, removing all cached class metadata.
                     */
                    // @ts-ignore
                    public clearCache(): void
                }
            }
        }
    }
}
