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
                        public static genericBeanDefinition(): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         * @param beanClassName the class name for the bean that the definition is being created for
                         */
                        // @ts-ignore
                        public static genericBeanDefinition(beanClassName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         */
                        // @ts-ignore
                        public static genericBeanDefinition(beanClass: java.lang.Class<any>): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link GenericBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         * @param instanceSupplier a callback for creating an instance of the bean
                         * @since 5.0
                         */
                        // @ts-ignore
                        public static genericBeanDefinition<T>(beanClass: java.lang.Class<T>, instanceSupplier: java.util.function$.Supplier<T>): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClassName the class name for the bean that the definition is being created for
                         */
                        // @ts-ignore
                        public static rootBeanDefinition(beanClassName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClassName the class name for the bean that the definition is being created for
                         * @param factoryMethodName the name of the method to use to construct the bean instance
                         */
                        // @ts-ignore
                        public static rootBeanDefinition(beanClassName: java.lang.String | string, factoryMethodName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         */
                        // @ts-ignore
                        public static rootBeanDefinition(beanClass: java.lang.Class<any>): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link RootBeanDefinition}.
                         * @param beanClass the {#code Class} of the bean that the definition is being created for
                         * @param factoryMethodName the name of the method to use to construct the bean instance
                         */
                        // @ts-ignore
                        public static rootBeanDefinition(beanClass: java.lang.Class<any>, factoryMethodName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Create a new {@code BeanDefinitionBuilder} used to construct a {@link ChildBeanDefinition}.
                         * @param parentName the name of the parent bean
                         */
                        // @ts-ignore
                        public static childBeanDefinition(parentName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Return the current BeanDefinition object in its raw (unvalidated) form.
                         * @see #getBeanDefinition()
                         */
                        // @ts-ignore
                        public getRawBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Validate and return the created BeanDefinition object.
                         */
                        // @ts-ignore
                        public getBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Set the name of the parent definition of this bean definition.
                         */
                        // @ts-ignore
                        public setParentName(parentName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the name of a static factory method to use for this definition,
                         * to be called on this bean's class.
                         */
                        // @ts-ignore
                        public setFactoryMethod(factoryMethod: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the name of a non-static factory method to use for this definition,
                         * including the bean name of the factory instance to call the method on.
                         * @param factoryMethod the name of the factory method
                         * @param factoryBean the name of the bean to call the specified factory method on
                         * @since 4.3.6
                         */
                        // @ts-ignore
                        public setFactoryMethodOnBean(factoryMethod: java.lang.String | string, factoryBean: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add an indexed constructor arg value. The current index is tracked internally
                         * and all additions are at the present point.
                         */
                        // @ts-ignore
                        public addConstructorArgValue(value: java.lang.Object | any): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add a reference to a named bean as a constructor arg.
                         * @see #addConstructorArgValue(Object)
                         */
                        // @ts-ignore
                        public addConstructorArgReference(beanName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add the supplied property value under the given property name.
                         */
                        // @ts-ignore
                        public addPropertyValue(name: java.lang.String | string, value: java.lang.Object | any): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add a reference to the specified bean name under the property specified.
                         * @param name the name of the property to add the reference to
                         * @param beanName the name of the bean being referenced
                         */
                        // @ts-ignore
                        public addPropertyReference(name: java.lang.String | string, beanName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Add an autowired marker for the specified property on the specified bean.
                         * @param name the name of the property to mark as autowired
                         * @since 5.2
                         * @see AutowiredPropertyMarker
                         */
                        // @ts-ignore
                        public addAutowiredProperty(name: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the init method for this definition.
                         */
                        // @ts-ignore
                        public setInitMethodName(methodName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the destroy method for this definition.
                         */
                        // @ts-ignore
                        public setDestroyMethodName(methodName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the scope of this definition.
                         * @see org.springframework.beans.factory.config.BeanDefinition#SCOPE_SINGLETON
                         * @see org.springframework.beans.factory.config.BeanDefinition#SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        public setScope(scope: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set whether or not this definition is abstract.
                         */
                        // @ts-ignore
                        public setAbstract(flag: boolean): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set whether beans for this definition should be lazily initialized or not.
                         */
                        // @ts-ignore
                        public setLazyInit(lazy: boolean): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the autowire mode for this definition.
                         */
                        // @ts-ignore
                        public setAutowireMode(autowireMode: number /*int*/): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the dependency check mode for this definition.
                         */
                        // @ts-ignore
                        public setDependencyCheck(dependencyCheck: number /*int*/): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Append the specified bean name to the list of beans that this definition
                         * depends on.
                         */
                        // @ts-ignore
                        public addDependsOn(beanName: java.lang.String | string): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set whether this bean is a primary autowire candidate.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        public setPrimary(primary: boolean): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Set the role of this definition.
                         */
                        // @ts-ignore
                        public setRole(role: number /*int*/): org.springframework.beans.factory.support.BeanDefinitionBuilder
                        /**
                         * Apply the given customizers to the underlying bean definition.
                         * @since 5.0
                         */
                        // @ts-ignore
                        public applyCustomizers(...customizers: org.springframework.beans.factory.config.BeanDefinitionCustomizer[]): org.springframework.beans.factory.support.BeanDefinitionBuilder
                    }
                }
            }
        }
    }
}
