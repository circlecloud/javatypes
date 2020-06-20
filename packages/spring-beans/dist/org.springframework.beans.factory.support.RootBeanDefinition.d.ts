declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * A root bean definition represents the merged bean definition that backs
                     * a specific bean in a Spring BeanFactory at runtime. It might have been created
                     * from multiple original bean definitions that inherit from each other,
                     * typically registered as {@link GenericBeanDefinition GenericBeanDefinitions}.
                     * A root bean definition is essentially the 'unified' bean definition view at runtime.
                     * <p>Root bean definitions may also be used for registering individual bean definitions
                     * in the configuration phase. However, since Spring 2.5, the preferred way to register
                     * bean definitions programmatically is the {@link GenericBeanDefinition} class.
                     * GenericBeanDefinition has the advantage that it allows to dynamically define
                     * parent dependencies, not 'hard-coding' the role as a root bean definition.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @see GenericBeanDefinition
                     * @see ChildBeanDefinition
                     */
                    // @ts-ignore
                    class RootBeanDefinition extends org.springframework.beans.factory.support.AbstractBeanDefinition {
                        /**
                         * Create a new RootBeanDefinition, to be configured through its bean
                         * properties and configuration methods.
                         * @see #setBeanClass
                         * @see #setScope
                         * @see #setConstructorArgumentValues
                         * @see #setPropertyValues
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new RootBeanDefinition for a singleton.
                         * @param beanClass the class of the bean to instantiate
                         * @see #setBeanClass
                         */
                        // @ts-ignore
                        constructor(beanClass: java.lang.Class<any>)
                        /**
                         * Create a new RootBeanDefinition for a singleton bean, constructing each instance
                         * through calling the given supplier (possibly a lambda or method reference).
                         * @param beanClass the class of the bean to instantiate
                         * @param instanceSupplier the supplier to construct a bean instance,
                         *  as an alternative to a declaratively specified factory method
                         * @since 5.0
                         * @see #setInstanceSupplier
                         */
                        // @ts-ignore
                        constructor(beanClass: java.lang.Class<T>, instanceSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>)
                        /**
                         * Create a new RootBeanDefinition for a scoped bean, constructing each instance
                         * through calling the given supplier (possibly a lambda or method reference).
                         * @param beanClass the class of the bean to instantiate
                         * @param scope the name of the corresponding scope
                         * @param instanceSupplier the supplier to construct a bean instance,
                         *  as an alternative to a declaratively specified factory method
                         * @since 5.0
                         * @see #setInstanceSupplier
                         */
                        // @ts-ignore
                        constructor(beanClass: java.lang.Class<T>, scope: string, instanceSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>)
                        /**
                         * Create a new RootBeanDefinition for a singleton,
                         * using the given autowire mode.
                         * @param beanClass the class of the bean to instantiate
                         * @param autowireMode by name or type, using the constants in this interface
                         * @param dependencyCheck whether to perform a dependency check for objects
                         *  (not applicable to autowiring a constructor, thus ignored there)
                         */
                        // @ts-ignore
                        constructor(beanClass: java.lang.Class<any>, autowireMode: number /*int*/, dependencyCheck: boolean)
                        /**
                         * Create a new RootBeanDefinition for a singleton,
                         * providing constructor arguments and property values.
                         * @param beanClass the class of the bean to instantiate
                         * @param cargs the constructor argument values to apply
                         * @param pvs the property values to apply
                         */
                        // @ts-ignore
                        constructor(beanClass: java.lang.Class<any>, cargs: org.springframework.beans.factory.config.ConstructorArgumentValues, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new RootBeanDefinition for a singleton,
                         * providing constructor arguments and property values.
                         * <p>Takes a bean class name to avoid eager loading of the bean class.
                         * @param beanClassName the name of the class to instantiate
                         */
                        // @ts-ignore
                        constructor(beanClassName: string)
                        /**
                         * Create a new RootBeanDefinition for a singleton,
                         * providing constructor arguments and property values.
                         * <p>Takes a bean class name to avoid eager loading of the bean class.
                         * @param beanClassName the name of the class to instantiate
                         * @param cargs the constructor argument values to apply
                         * @param pvs the property values to apply
                         */
                        // @ts-ignore
                        constructor(beanClassName: string, cargs: org.springframework.beans.factory.config.ConstructorArgumentValues, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new RootBeanDefinition as deep copy of the given
                         * bean definition.
                         * @param original the original bean definition to copy from
                         */
                        // @ts-ignore
                        constructor(original: org.springframework.beans.factory.support.RootBeanDefinition)
                        // @ts-ignore
                        getParentName(): java.lang.String
                        // @ts-ignore
                        setParentName(parentName: string): void
                        /**
                         * Register a target definition that is being decorated by this bean definition.
                         */
                        // @ts-ignore
                        setDecoratedDefinition(decoratedDefinition: org.springframework.beans.factory.config.BeanDefinitionHolder): void
                        /**
                         * Return the target definition that is being decorated by this bean definition, if any.
                         */
                        // @ts-ignore
                        getDecoratedDefinition(): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Specify the {@link AnnotatedElement} defining qualifiers,
                         * to be used instead of the target class or factory method.
                         * @since 4.3.3
                         * @see #setTargetType(ResolvableType)
                         * @see #getResolvedFactoryMethod()
                         */
                        // @ts-ignore
                        setQualifiedElement(qualifiedElement: java.lang.reflect.AnnotatedElement): void
                        /**
                         * Return the {@link AnnotatedElement} defining qualifiers, if any.
                         * Otherwise, the factory method and target class will be checked.
                         * @since 4.3.3
                         */
                        // @ts-ignore
                        getQualifiedElement(): java.lang.reflect.AnnotatedElement
                        /**
                         * Specify a generics-containing target type of this bean definition, if known in advance.
                         * @since 4.3.3
                         */
                        // @ts-ignore
                        setTargetType(targetType: ResolvableType): void
                        /**
                         * Return the target type of this bean definition, if known
                         * (either specified in advance or resolved on first instantiation).
                         * @since 3.2.2
                         */
                        // @ts-ignore
                        getTargetType(): java.lang.Class<?>
                        /**
                         * Return a {@link ResolvableType} for this bean definition,
                         * either from runtime-cached type information or from configuration-time
                         * {@link #setTargetType(ResolvableType)} or {@link #setBeanClass(Class)},
                         * also considering resolved factory method definitions.
                         * @since 5.1
                         * @see #setTargetType(ResolvableType)
                         * @see #setBeanClass(Class)
                         * @see #setResolvedFactoryMethod(Method)
                         */
                        // @ts-ignore
                        getResolvableType(): ResolvableType
                        /**
                         * Determine preferred constructors to use for default construction, if any.
                         * Constructor arguments will be autowired if necessary.
                         * @return one or more preferred constructors, or {#code null} if none
                         *  (in which case the regular no-arg default constructor will be called)
                         * @since 5.1
                         */
                        // @ts-ignore
                        getPreferredConstructors(): java.lang.reflect.Constructor[]
                        /**
                         * Specify a factory method name that refers to a non-overloaded method.
                         */
                        // @ts-ignore
                        setUniqueFactoryMethodName(name: string): void
                        /**
                         * Specify a factory method name that refers to an overloaded method.
                         * @since 5.2
                         */
                        // @ts-ignore
                        setNonUniqueFactoryMethodName(name: string): void
                        /**
                         * Check whether the given candidate qualifies as a factory method.
                         */
                        // @ts-ignore
                        isFactoryMethod(candidate: java.lang.reflect.Method): boolean
                        /**
                         * Set a resolved Java Method for the factory method on this bean definition.
                         * @param method the resolved factory method, or {#code null} to reset it
                         * @since 5.2
                         */
                        // @ts-ignore
                        setResolvedFactoryMethod(method: java.lang.reflect.Method): void
                        /**
                         * Return the resolved factory method as a Java Method object, if available.
                         * @return the factory method, or {#code null} if not found or not resolved yet
                         */
                        // @ts-ignore
                        getResolvedFactoryMethod(): java.lang.reflect.Method
                        // @ts-ignore
                        registerExternallyManagedConfigMember(configMember: java.lang.reflect.Member): void
                        // @ts-ignore
                        isExternallyManagedConfigMember(configMember: java.lang.reflect.Member): boolean
                        // @ts-ignore
                        registerExternallyManagedInitMethod(initMethod: string): void
                        // @ts-ignore
                        isExternallyManagedInitMethod(initMethod: string): boolean
                        // @ts-ignore
                        registerExternallyManagedDestroyMethod(destroyMethod: string): void
                        // @ts-ignore
                        isExternallyManagedDestroyMethod(destroyMethod: string): boolean
                        // @ts-ignore
                        cloneBeanDefinition(): org.springframework.beans.factory.support.RootBeanDefinition
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
