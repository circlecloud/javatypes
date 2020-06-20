declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Programmatic means of constructing
                     * {@link org.springframework.beans.factory.config.BeanDefinition BeanDefinitions}
                     * using the builder pattern. Intended primarily for use when implementing Spring 2.0
                     * {@link org.springframework.beans.factory.xml.NamespaceHandler NamespaceHandlers}.
                     * @author Rod Johnson
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class BeanDefinitionBuilder extends java.lang.Object {
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         */
                        // @ts-ignore
                        genericBeanDefinition(): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         * @param beanClassName the class name for the bean that the definition is being created for
                         */
                        // @ts-ignore
                        genericBeanDefinition(beanClassName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         */
                        // @ts-ignore
                        genericBeanDefinition(beanClass: java.lang.Class<any>): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         * @param instanceSupplier a callback for creating an instance of the bean
                         * @since 5.0
                         */
                        // @ts-ignore
                        genericBeanDefinition<T>(beanClass: java.lang.Class<T>, instanceSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClassName the class name for the bean that the definition is being created for
                         */
                        // @ts-ignore
                        rootBeanDefinition(beanClassName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClassName the class name for the bean that the definition is being created for
                         * @param factoryMethodName the name of the method to use to construct the bean instance
                         */
                        // @ts-ignore
                        rootBeanDefinition(beanClassName: string, factoryMethodName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         */
                        // @ts-ignore
                        rootBeanDefinition(beanClass: java.lang.Class<any>): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         * @param factoryMethodName the name of the method to use to construct the bean instance
                         */
                        // @ts-ignore
                        rootBeanDefinition(beanClass: java.lang.Class<any>, factoryMethodName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link ChildBeanDefinition}.
                         * @param parentName the name of the parent bean
                         */
                        // @ts-ignore
                        childBeanDefinition(parentName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Return the current BeanDefinition object in its raw (unvalidated) form.
                         * @see #getBeanDefinition()
                         */
                        // @ts-ignore
                        getRawBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Validate and return the created BeanDefinition object.
                         */
                        // @ts-ignore
                        getBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Set the name of the parent definition of this bean definition.
                         */
                        // @ts-ignore
                        setParentName(parentName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the name of a static factory method to use for this definition,
                         * to be called on this bean's class.
                         */
                        // @ts-ignore
                        setFactoryMethod(factoryMethod: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the name of a non-static factory method to use for this definition,
                         * including the bean name of the factory instance to call the method on.
                         * @param factoryMethod the name of the factory method
                         * @param factoryBean the name of the bean to call the specified factory method on
                         * @since 4.3.6
                         */
                        // @ts-ignore
                        setFactoryMethodOnBean(factoryMethod: string, factoryBean: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add an indexed constructor arg value. The current index is tracked internally
                         * and all additions are at the present point.
                         */
                        // @ts-ignore
                        addConstructorArgValue(value: any): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add a reference to a named bean as a constructor arg.
                         * @see #addConstructorArgValue(Object)
                         */
                        // @ts-ignore
                        addConstructorArgReference(beanName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add the supplied property value under the given property name.
                         */
                        // @ts-ignore
                        addPropertyValue(name: string, value: any): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add a reference to the specified bean name under the property specified.
                         * @param name the name of the property to add the reference to
                         * @param beanName the name of the bean being referenced
                         */
                        // @ts-ignore
                        addPropertyReference(name: string, beanName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add an autowired marker for the specified property on the specified bean.
                         * @param name the name of the property to mark as autowired
                         * @since 5.2
                         * @see AutowiredPropertyMarker
                         */
                        // @ts-ignore
                        addAutowiredProperty(name: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the init method for this definition.
                         */
                        // @ts-ignore
                        setInitMethodName(methodName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the destroy method for this definition.
                         */
                        // @ts-ignore
                        setDestroyMethodName(methodName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the scope of this definition.
                         * @see org.springframework.beans.factory.config.BeanDefinition#SCOPE_SINGLETON
                         * @see org.springframework.beans.factory.config.BeanDefinition#SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        setScope(scope: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set whether or not this definition is abstract.
                         */
                        // @ts-ignore
                        setAbstract(flag: boolean): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set whether beans for this definition should be lazily initialized or not.
                         */
                        // @ts-ignore
                        setLazyInit(lazy: boolean): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the autowire mode for this definition.
                         */
                        // @ts-ignore
                        setAutowireMode(autowireMode: number /*int*/): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the dependency check mode for this definition.
                         */
                        // @ts-ignore
                        setDependencyCheck(dependencyCheck: number /*int*/): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Append the specified bean name to the list of beans that this definition
                         * depends on.
                         */
                        // @ts-ignore
                        addDependsOn(beanName: string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set whether this bean is a primary autowire candidate.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setPrimary(primary: boolean): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the role of this definition.
                         */
                        // @ts-ignore
                        setRole(role: number /*int*/): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Apply the given customizers to the underlying bean definition.
                         * @since 5.0
                         */
                        // @ts-ignore
                        applyCustomizers(...customizers: org.springframework.beans.factory.config.BeanDefinitionCustomizer[]): org.springframework.beans.factory.support.BeanDefinitionBuilder
                    }
                }
            }
        }
    }
}
