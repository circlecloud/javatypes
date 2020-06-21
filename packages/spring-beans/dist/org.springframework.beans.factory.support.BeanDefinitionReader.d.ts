declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Simple interface for bean definition readers.
                     * Specifies load methods with Resource and String location parameters.
                     * <p>Concrete bean definition readers can of course add additional
                     * load and register methods for bean definitions, specific to
                     * their bean definition format.
                     * <p>Note that a bean definition reader does not have to implement
                     * this interface. It only serves as suggestion for bean definition
                     * readers that want to follow standard naming conventions.
                     * @author Juergen Hoeller
                     * @since 1.1
                     * @see org.springframework.core.io.Resource
                     */
                    // @ts-ignore
                    interface BeanDefinitionReader {
                        /**
                         * Return the bean factory to register the bean definitions with.
                         * <p>The factory is exposed through the BeanDefinitionRegistry interface,
                         * encapsulating the methods that are relevant for bean definition handling.
                         */
                        // @ts-ignore
                        getRegistry(): org.springframework.beans.factory.support.BeanDefinitionRegistry
                        /**
                         * Return the resource loader to use for resource locations.
                         * Can be checked for the <b>ResourcePatternResolver</b> interface and cast
                         * accordingly, for loading multiple resources for a given resource pattern.
                         * <p>A {@code null} return value suggests that absolute resource loading
                         * is not available for this bean definition reader.
                         * <p>This is mainly meant to be used for importing further resources
                         * from within a bean definition resource, for example via the "import"
                         * tag in XML bean definitions. It is recommended, however, to apply
                         * such imports relative to the defining resource; only explicit full
                         * resource locations will trigger absolute resource loading.
                         * <p>There is also a {@code loadBeanDefinitions(String)} method available,
                         * for loading bean definitions from a resource location (or location pattern).
                         * This is a convenience to avoid explicit ResourceLoader handling.
                         * @see #loadBeanDefinitions(String)
                         * @see org.springframework.core.io.support.ResourcePatternResolver
                         */
                        // @ts-ignore
                        getResourceLoader(): ResourceLoader
                        /**
                         * Return the class loader to use for bean classes.
                         * <p>{@code null} suggests to not load bean classes eagerly
                         * but rather to just register bean definitions with class names,
                         * with the corresponding Classes to be resolved later (or never).
                         */
                        // @ts-ignore
                        getBeanClassLoader(): java.lang.ClassLoader
                        /**
                         * Return the BeanNameGenerator to use for anonymous beans
                         * (without explicit bean name specified).
                         */
                        // @ts-ignore
                        getBeanNameGenerator(): org.springframework.beans.factory.support.BeanNameGenerator
                        /**
                         * Load bean definitions from the specified resource.
                         * @param resource the resource descriptor
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        loadBeanDefinitions(resource: Resource): number /*int*/
                        /**
                         * Load bean definitions from the specified resources.
                         * @param resources the resource descriptors
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        loadBeanDefinitions(...resources: Resource[]): number /*int*/
                    }
                }
            }
        }
    }
}
