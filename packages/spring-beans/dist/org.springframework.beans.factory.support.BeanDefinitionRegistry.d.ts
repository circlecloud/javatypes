declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Interface for registries that hold bean definitions, for example RootBeanDefinition
                     * and ChildBeanDefinition instances. Typically implemented by BeanFactories that
                     * internally work with the AbstractBeanDefinition hierarchy.
                     * <p>This is the only interface in Spring's bean factory packages that encapsulates
                     * <i>registration</i> of bean definitions. The standard BeanFactory interfaces
                     * only cover access to a <i>fully configured factory instance</i>.
                     * <p>Spring's bean definition readers expect to work on an implementation of this
                     * interface. Known implementors within the Spring core are DefaultListableBeanFactory
                     * and GenericApplicationContext.
                     * @author Juergen Hoeller
                     * @since 26.11.2003
                     * @see org.springframework.beans.factory.config.BeanDefinition
                     * @see AbstractBeanDefinition
                     * @see RootBeanDefinition
                     * @see ChildBeanDefinition
                     * @see DefaultListableBeanFactory
                     * @see org.springframework.context.support.GenericApplicationContext
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     * @see PropertiesBeanDefinitionReader
                     */
                    // @ts-ignore
                    interface BeanDefinitionRegistry {
                        /**
                         * Register a new bean definition with this registry.
                         * Must support RootBeanDefinition and ChildBeanDefinition.
                         * @param beanName the name of the bean instance to register
                         * @param beanDefinition definition of the bean instance to register
                         * @throws BeanDefinitionStoreException if the BeanDefinition is invalid
                         * @throws BeanDefinitionOverrideException if there is already a BeanDefinition
                         *  for the specified bean name and we are not allowed to override it
                         * @see GenericBeanDefinition
                         * @see RootBeanDefinition
                         * @see ChildBeanDefinition
                         */
                        // @ts-ignore
                        registerBeanDefinition(beanName: java.lang.String | string, beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Remove the BeanDefinition for the given name.
                         * @param beanName the name of the bean instance to register
                         * @throws NoSuchBeanDefinitionException if there is no such bean definition
                         */
                        // @ts-ignore
                        removeBeanDefinition(beanName: java.lang.String | string): void
                        /**
                         * Return the BeanDefinition for the given bean name.
                         * @param beanName name of the bean to find a definition for
                         * @return the BeanDefinition for the given name (never {#code null})
                         * @throws NoSuchBeanDefinitionException if there is no such bean definition
                         */
                        // @ts-ignore
                        getBeanDefinition(beanName: java.lang.String | string): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Check if this registry contains a bean definition with the given name.
                         * @param beanName the name of the bean to look for
                         * @return if this registry contains a bean definition with the given name
                         */
                        // @ts-ignore
                        containsBeanDefinition(beanName: java.lang.String | string): boolean
                        /**
                         * Return the names of all beans defined in this registry.
                         * @return the names of all beans defined in this registry,
                         *  or an empty array if none defined
                         */
                        // @ts-ignore
                        getBeanDefinitionNames(): string[]
                        /**
                         * Return the number of beans defined in the registry.
                         * @return the number of beans defined in the registry
                         */
                        // @ts-ignore
                        getBeanDefinitionCount(): number /*int*/
                        /**
                         * Determine whether the given bean name is already in use within this registry,
                         * i.e. whether there is a local bean or alias registered under this name.
                         * @param beanName the name to check
                         * @return whether the given bean name is already in use
                         */
                        // @ts-ignore
                        isBeanNameInUse(beanName: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
