declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * A BeanDefinition describes a bean instance, which has property values,
                     * constructor argument values, and further information supplied by
                     * concrete implementations.
                     * <p>This is just a minimal interface: The main intention is to allow a
                     * {@link BeanFactoryPostProcessor} to introspect and modify property values
                     * and other bean metadata.
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 19.03.2004
                     * @see ConfigurableListableBeanFactory#getBeanDefinition
                     * @see org.springframework.beans.factory.support.RootBeanDefinition
                     * @see org.springframework.beans.factory.support.ChildBeanDefinition
                     */
                    // @ts-ignore
                    interface BeanDefinition extends org.springframework.beans.BeanMetadataElement {
                        /**
                         * Scope identifier for the standard singleton scope: {@value}.
                         * <p>Note that extended bean factories might support further scopes.
                         * @see #setScope
                         * @see ConfigurableBeanFactory#SCOPE_SINGLETON
                         */
                        // @ts-ignore
                        readonly SCOPE_SINGLETON: java.lang.String | string
                        /**
                         * Scope identifier for the standard prototype scope: {@value}.
                         * <p>Note that extended bean factories might support further scopes.
                         * @see #setScope
                         * @see ConfigurableBeanFactory#SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        readonly SCOPE_PROTOTYPE: java.lang.String | string
                        /**
                         * Role hint indicating that a {@code BeanDefinition} is a major part
                         * of the application. Typically corresponds to a user-defined bean.
                         */
                        // @ts-ignore
                        readonly ROLE_APPLICATION: number /*int*/
                        /**
                         * Role hint indicating that a {@code BeanDefinition} is a supporting
                         * part of some larger configuration, typically an outer
                         * {@link org.springframework.beans.factory.parsing.ComponentDefinition}.
                         * {@code SUPPORT} beans are considered important enough to be aware
                         * of when looking more closely at a particular
                         * {@link org.springframework.beans.factory.parsing.ComponentDefinition},
                         * but not when looking at the overall configuration of an application.
                         */
                        // @ts-ignore
                        readonly ROLE_SUPPORT: number /*int*/
                        /**
                         * Role hint indicating that a {@code BeanDefinition} is providing an
                         * entirely background role and has no relevance to the end-user. This hint is
                         * used when registering beans that are completely part of the internal workings
                         * of a {@link org.springframework.beans.factory.parsing.ComponentDefinition}.
                         */
                        // @ts-ignore
                        readonly ROLE_INFRASTRUCTURE: number /*int*/
                        /**
                         * Set the name of the parent definition of this bean definition, if any.
                         */
                        // @ts-ignore
                        setParentName(parentName: java.lang.String | string): void
                        /**
                         * Return the name of the parent definition of this bean definition, if any.
                         */
                        // @ts-ignore
                        getParentName(): string
                        /**
                         * Specify the bean class name of this bean definition.
                         * <p>The class name can be modified during bean factory post-processing,
                         * typically replacing the original class name with a parsed variant of it.
                         * @see #setParentName
                         * @see #setFactoryBeanName
                         * @see #setFactoryMethodName
                         */
                        // @ts-ignore
                        setBeanClassName(beanClassName: java.lang.String | string): void
                        /**
                         * Return the current bean class name of this bean definition.
                         * <p>Note that this does not have to be the actual class name used at runtime, in
                         * case of a child definition overriding/inheriting the class name from its parent.
                         * Also, this may just be the class that a factory method is called on, or it may
                         * even be empty in case of a factory bean reference that a method is called on.
                         * Hence, do <i>not</i> consider this to be the definitive bean type at runtime but
                         * rather only use it for parsing purposes at the individual bean definition level.
                         * @see #getParentName()
                         * @see #getFactoryBeanName()
                         * @see #getFactoryMethodName()
                         */
                        // @ts-ignore
                        getBeanClassName(): string
                        /**
                         * Override the target scope of this bean, specifying a new scope name.
                         * @see #SCOPE_SINGLETON
                         * @see #SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        setScope(scope: java.lang.String | string): void
                        /**
                         * Return the name of the current target scope for this bean,
                         * or {@code null} if not known yet.
                         */
                        // @ts-ignore
                        getScope(): string
                        /**
                         * Set whether this bean should be lazily initialized.
                         * <p>If {@code false}, the bean will get instantiated on startup by bean
                         * factories that perform eager initialization of singletons.
                         */
                        // @ts-ignore
                        setLazyInit(lazyInit: boolean): void
                        /**
                         * Return whether this bean should be lazily initialized, i.e. not
                         * eagerly instantiated on startup. Only applicable to a singleton bean.
                         */
                        // @ts-ignore
                        isLazyInit(): boolean
                        /**
                         * Set the names of the beans that this bean depends on being initialized.
                         * The bean factory will guarantee that these beans get initialized first.
                         */
                        // @ts-ignore
                        setDependsOn(...dependsOn: java.lang.String[] | string[]): void
                        /**
                         * Return the bean names that this bean depends on.
                         */
                        // @ts-ignore
                        getDependsOn(): string[]
                        /**
                         * Set whether this bean is a candidate for getting autowired into some other bean.
                         * <p>Note that this flag is designed to only affect type-based autowiring.
                         * It does not affect explicit references by name, which will get resolved even
                         * if the specified bean is not marked as an autowire candidate. As a consequence,
                         * autowiring by name will nevertheless inject a bean if the name matches.
                         */
                        // @ts-ignore
                        setAutowireCandidate(autowireCandidate: boolean): void
                        /**
                         * Return whether this bean is a candidate for getting autowired into some other bean.
                         */
                        // @ts-ignore
                        isAutowireCandidate(): boolean
                        /**
                         * Set whether this bean is a primary autowire candidate.
                         * <p>If this value is {@code true} for exactly one bean among multiple
                         * matching candidates, it will serve as a tie-breaker.
                         */
                        // @ts-ignore
                        setPrimary(primary: boolean): void
                        /**
                         * Return whether this bean is a primary autowire candidate.
                         */
                        // @ts-ignore
                        isPrimary(): boolean
                        /**
                         * Specify the factory bean to use, if any.
                         * This the name of the bean to call the specified factory method on.
                         * @see #setFactoryMethodName
                         */
                        // @ts-ignore
                        setFactoryBeanName(factoryBeanName: java.lang.String | string): void
                        /**
                         * Return the factory bean name, if any.
                         */
                        // @ts-ignore
                        getFactoryBeanName(): string
                        /**
                         * Specify a factory method, if any. This method will be invoked with
                         * constructor arguments, or with no arguments if none are specified.
                         * The method will be invoked on the specified factory bean, if any,
                         * or otherwise as a static method on the local bean class.
                         * @see #setFactoryBeanName
                         * @see #setBeanClassName
                         */
                        // @ts-ignore
                        setFactoryMethodName(factoryMethodName: java.lang.String | string): void
                        /**
                         * Return a factory method, if any.
                         */
                        // @ts-ignore
                        getFactoryMethodName(): string
                        /**
                         * Return the constructor argument values for this bean.
                         * <p>The returned instance can be modified during bean factory post-processing.
                         * @return the ConstructorArgumentValues object (never {#code null})
                         */
                        // @ts-ignore
                        getConstructorArgumentValues(): org.springframework.beans.factory.config.ConstructorArgumentValues
                        /**
                         * Return if there are constructor argument values defined for this bean.
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        hasConstructorArgumentValues(): boolean
                        /**
                         * Return the property values to be applied to a new instance of the bean.
                         * <p>The returned instance can be modified during bean factory post-processing.
                         * @return the MutablePropertyValues object (never {#code null})
                         */
                        // @ts-ignore
                        getPropertyValues(): org.springframework.beans.MutablePropertyValues
                        /**
                         * Return if there are property values defined for this bean.
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        hasPropertyValues(): boolean
                        /**
                         * Set the name of the initializer method.
                         * @since 5.1
                         */
                        // @ts-ignore
                        setInitMethodName(initMethodName: java.lang.String | string): void
                        /**
                         * Return the name of the initializer method.
                         * @since 5.1
                         */
                        // @ts-ignore
                        getInitMethodName(): string
                        /**
                         * Set the name of the destroy method.
                         * @since 5.1
                         */
                        // @ts-ignore
                        setDestroyMethodName(destroyMethodName: java.lang.String | string): void
                        /**
                         * Return the name of the destroy method.
                         * @since 5.1
                         */
                        // @ts-ignore
                        getDestroyMethodName(): string
                        /**
                         * Set the role hint for this {@code BeanDefinition}. The role hint
                         * provides the frameworks as well as tools an indication of
                         * the role and importance of a particular {@code BeanDefinition}.
                         * @since 5.1
                         * @see #ROLE_APPLICATION
                         * @see #ROLE_SUPPORT
                         * @see #ROLE_INFRASTRUCTURE
                         */
                        // @ts-ignore
                        setRole(role: number /*int*/): void
                        /**
                         * Get the role hint for this {@code BeanDefinition}. The role hint
                         * provides the frameworks as well as tools an indication of
                         * the role and importance of a particular {@code BeanDefinition}.
                         * @see #ROLE_APPLICATION
                         * @see #ROLE_SUPPORT
                         * @see #ROLE_INFRASTRUCTURE
                         */
                        // @ts-ignore
                        getRole(): number /*int*/
                        /**
                         * Set a human-readable description of this bean definition.
                         * @since 5.1
                         */
                        // @ts-ignore
                        setDescription(description: java.lang.String | string): void
                        /**
                         * Return a human-readable description of this bean definition.
                         */
                        // @ts-ignore
                        getDescription(): string
                        /**
                         * Return a resolvable type for this bean definition,
                         * based on the bean class or other specific metadata.
                         * <p>This is typically fully resolved on a runtime-merged bean definition
                         * but not necessarily on a configuration-time definition instance.
                         * @return the resolvable type (potentially {#link ResolvableType#NONE})
                         * @since 5.2
                         * @see ConfigurableBeanFactory#getMergedBeanDefinition
                         */
                        // @ts-ignore
                        getResolvableType(): ResolvableType
                        /**
                         * Return whether this a <b>Singleton</b>, with a single, shared instance
                         * returned on all calls.
                         * @see #SCOPE_SINGLETON
                         */
                        // @ts-ignore
                        isSingleton(): boolean
                        /**
                         * Return whether this a <b>Prototype</b>, with an independent instance
                         * returned for each call.
                         * @since 3.0
                         * @see #SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        isPrototype(): boolean
                        /**
                         * Return whether this bean is "abstract", that is, not meant to be instantiated.
                         */
                        // @ts-ignore
                        isAbstract(): boolean
                        /**
                         * Return a description of the resource that this bean definition
                         * came from (for the purpose of showing context in case of errors).
                         */
                        // @ts-ignore
                        getResourceDescription(): string
                        /**
                         * Return the originating BeanDefinition, or {@code null} if none.
                         * <p>Allows for retrieving the decorated bean definition, if any.
                         * <p>Note that this method returns the immediate originator. Iterate through the
                         * originator chain to find the original BeanDefinition as defined by the user.
                         */
                        // @ts-ignore
                        getOriginatingBeanDefinition(): org.springframework.beans.factory.config.BeanDefinition
                    }
                }
            }
        }
    }
}
