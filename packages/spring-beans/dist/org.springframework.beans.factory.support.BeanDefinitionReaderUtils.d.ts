declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Utility methods that are useful for bean definition reader implementations.
                     * Mainly intended for internal use.
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 1.1
                     * @see PropertiesBeanDefinitionReader
                     * @see org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader
                     */
                    // @ts-ignore
                    class BeanDefinitionReaderUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Separator for generated bean names. If a class name or parent name is not
                         * unique, "#1", "#2" etc will be appended, until the name becomes unique.
                         */
                        // @ts-ignore
                        readonly GENERATED_BEAN_NAME_SEPARATOR: string
                        /**
                         * Create a new GenericBeanDefinition for the given parent name and class name,
                         * eagerly loading the bean class if a ClassLoader has been specified.
                         * @param parentName the name of the parent bean, if any
                         * @param className the name of the bean class, if any
                         * @param classLoader the ClassLoader to use for loading bean classes
                         *  (can be {#code null} to just register bean classes by name)
                         * @return the bean definition
                         * @throws ClassNotFoundException if the bean class could not be loaded
                         */
                        // @ts-ignore
                        createBeanDefinition(parentName: string, className: string, classLoader: java.lang.ClassLoader): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Generate a bean name for the given top-level bean definition,
                         * unique within the given bean factory.
                         * @param beanDefinition the bean definition to generate a bean name for
                         * @param registry the bean factory that the definition is going to be
                         *  registered with (to check for existing bean names)
                         * @return the generated bean name
                         * @throws BeanDefinitionStoreException if no unique name can be generated
                         *  for the given bean definition
                         * @see #generateBeanName(BeanDefinition, BeanDefinitionRegistry, boolean)
                         */
                        // @ts-ignore
                        generateBeanName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): java.lang.String
                        /**
                         * Generate a bean name for the given bean definition, unique within the
                         * given bean factory.
                         * @param definition the bean definition to generate a bean name for
                         * @param registry the bean factory that the definition is going to be
                         *  registered with (to check for existing bean names)
                         * @param isInnerBean whether the given bean definition will be registered
                         *  as inner bean or as top-level bean (allowing for special name generation
                         *  for inner beans versus top-level beans)
                         * @return the generated bean name
                         * @throws BeanDefinitionStoreException if no unique name can be generated
                         *  for the given bean definition
                         */
                        // @ts-ignore
                        generateBeanName(definition: org.springframework.beans.factory.config.BeanDefinition, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry, isInnerBean: boolean): java.lang.String
                        /**
                         * Turn the given bean name into a unique bean name for the given bean factory,
                         * appending a unique counter as suffix if necessary.
                         * @param beanName the original bean name
                         * @param registry the bean factory that the definition is going to be
                         *  registered with (to check for existing bean names)
                         * @return the unique bean name to use
                         * @since 5.1
                         */
                        // @ts-ignore
                        uniqueBeanName(beanName: string, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): java.lang.String
                        /**
                         * Register the given bean definition with the given bean factory.
                         * @param definitionHolder the bean definition including name and aliases
                         * @param registry the bean factory to register with
                         * @throws BeanDefinitionStoreException if registration failed
                         */
                        // @ts-ignore
                        registerBeanDefinition(definitionHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): void
                        /**
                         * Register the given bean definition with a generated name,
                         * unique within the given bean factory.
                         * @param definition the bean definition to generate a bean name for
                         * @param registry the bean factory to register with
                         * @return the generated bean name
                         * @throws BeanDefinitionStoreException if no unique name can be generated
                         *  for the given bean definition or the definition cannot be registered
                         */
                        // @ts-ignore
                        registerWithGeneratedName(definition: org.springframework.beans.factory.support.AbstractBeanDefinition, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): java.lang.String
                    }
                }
            }
        }
    }
}
