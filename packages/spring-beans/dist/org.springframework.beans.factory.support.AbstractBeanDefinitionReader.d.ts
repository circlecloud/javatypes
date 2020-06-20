declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Abstract base class for bean definition readers which implement
                     * the {@link BeanDefinitionReader} interface.
                     * <p>Provides common properties like the bean factory to work on
                     * and the class loader to use for loading bean classes.
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 11.12.2003
                     * @see BeanDefinitionReaderUtils
                     */
                    // @ts-ignore
                    class AbstractBeanDefinitionReader extends java.lang.Object implements org.springframework.beans.factory.support.BeanDefinitionReader {
                        /**
                         * Create a new AbstractBeanDefinitionReader for the given bean factory.
                         * <p>If the passed-in bean factory does not only implement the BeanDefinitionRegistry
                         * interface but also the ResourceLoader interface, it will be used as default
                         * ResourceLoader as well. This will usually be the case for
                         * {@link org.springframework.context.ApplicationContext} implementations.
                         * <p>If given a plain BeanDefinitionRegistry, the default ResourceLoader will be a
                         * {@link org.springframework.core.io.support.PathMatchingResourcePatternResolver}.
                         * <p>If the passed-in bean factory also implements {@link EnvironmentCapable} its
                         * environment will be used by this reader.  Otherwise, the reader will initialize and
                         * use a {@link StandardEnvironment}. All ApplicationContext implementations are
                         * EnvironmentCapable, while normal BeanFactory implementations are not.
                         * @param registry the BeanFactory to load bean definitions into,
                         *  in the form of a BeanDefinitionRegistry
                         * @see #setResourceLoader
                         * @see #setEnvironment
                         */
                        // @ts-ignore
                        constructor(registry: org.springframework.beans.factory.support.BeanDefinitionRegistry)
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        getBeanFactory(): org.springframework.beans.factory.support.BeanDefinitionRegistry
                        // @ts-ignore
                        getRegistry(): org.springframework.beans.factory.support.BeanDefinitionRegistry
                        /**
                         * Set the ResourceLoader to use for resource locations.
                         * If specifying a ResourcePatternResolver, the bean definition reader
                         * will be capable of resolving resource patterns to Resource arrays.
                         * <p>Default is PathMatchingResourcePatternResolver, also capable of
                         * resource pattern resolving through the ResourcePatternResolver interface.
                         * <p>Setting this to {@code null} suggests that absolute resource loading
                         * is not available for this bean definition reader.
                         * @see org.springframework.core.io.support.ResourcePatternResolver
                         * @see org.springframework.core.io.support.PathMatchingResourcePatternResolver
                         */
                        // @ts-ignore
                        setResourceLoader(resourceLoader: ResourceLoader): void
                        // @ts-ignore
                        getResourceLoader(): ResourceLoader
                        /**
                         * Set the ClassLoader to use for bean classes.
                         * <p>Default is {@code null}, which suggests to not load bean classes
                         * eagerly but rather to just register bean definitions with class names,
                         * with the corresponding Classes to be resolved later (or never).
                         * @see Thread#getContextClassLoader()
                         */
                        // @ts-ignore
                        setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        getBeanClassLoader(): java.lang.ClassLoader
                        /**
                         * Set the Environment to use when reading bean definitions. Most often used
                         * for evaluating profile information to determine which bean definitions
                         * should be read and which should be omitted.
                         */
                        // @ts-ignore
                        setEnvironment(environment: Environment): void
                        // @ts-ignore
                        getEnvironment(): Environment
                        /**
                         * Set the BeanNameGenerator to use for anonymous beans
                         * (without explicit bean name specified).
                         * <p>Default is a {@link DefaultBeanNameGenerator}.
                         */
                        // @ts-ignore
                        setBeanNameGenerator(beanNameGenerator: org.springframework.beans.factory.support.BeanNameGenerator): void
                        // @ts-ignore
                        getBeanNameGenerator(): org.springframework.beans.factory.support.BeanNameGenerator
                        // @ts-ignore
                        loadBeanDefinitions(...resources: Resource[]): int
                        // @ts-ignore
                        loadBeanDefinitions(location: string): int
                        /**
                         * Load bean definitions from the specified resource location.
                         * <p>The location can also be a location pattern, provided that the
                         * ResourceLoader of this bean definition reader is a ResourcePatternResolver.
                         * @param location the resource location, to be loaded with the ResourceLoader
                         *  (or ResourcePatternResolver) of this bean definition reader
                         * @param actualResources a Set to be filled with the actual Resource objects
                         *  that have been resolved during the loading process. May be {#code null}
                         *  to indicate that the caller is not interested in those Resource objects.
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         * @see #getResourceLoader()
                         * @see #loadBeanDefinitions(org.springframework.core.io.Resource)
                         * @see #loadBeanDefinitions(org.springframework.core.io.Resource[])
                         */
                        // @ts-ignore
                        loadBeanDefinitions(location: string, actualResources: Array<Resource>): int
                    }
                }
            }
        }
    }
}
