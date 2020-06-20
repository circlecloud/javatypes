declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Generic registry for shared bean instances, implementing the
                     * {@link org.springframework.beans.factory.config.SingletonBeanRegistry}.
                     * Allows for registering singleton instances that should be shared
                     * for all callers of the registry, to be obtained via bean name.
                     * <p>Also supports registration of
                     * {@link org.springframework.beans.factory.DisposableBean} instances,
                     * (which might or might not correspond to registered singletons),
                     * to be destroyed on shutdown of the registry. Dependencies between
                     * beans can be registered to enforce an appropriate shutdown order.
                     * <p>This class mainly serves as base class for
                     * {@link org.springframework.beans.factory.BeanFactory} implementations,
                     * factoring out the common management of singleton bean instances. Note that
                     * the {@link org.springframework.beans.factory.config.ConfigurableBeanFactory}
                     * interface extends the {@link SingletonBeanRegistry} interface.
                     * <p>Note that this class assumes neither a bean definition concept
                     * nor a specific creation process for bean instances, in contrast to
                     * {@link AbstractBeanFactory} and {@link DefaultListableBeanFactory}
                     * (which inherit from it). Can alternatively also be used as a nested
                     * helper to delegate to.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #registerSingleton
                     * @see #registerDisposableBean
                     * @see org.springframework.beans.factory.DisposableBean
                     * @see org.springframework.beans.factory.config.ConfigurableBeanFactory
                     */
                    // @ts-ignore
                    class DefaultSingletonBeanRegistry extends SimpleAliasRegistry implements org.springframework.beans.factory.config.SingletonBeanRegistry {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        registerSingleton(beanName: string, singletonObject: any): void
                        /**
                         * Add the given singleton object to the singleton cache of this factory.
                         * <p>To be called for eager registration of singletons.
                         * @param beanName the name of the bean
                         * @param singletonObject the singleton object
                         */
                        // @ts-ignore
                        addSingleton(beanName: string, singletonObject: any): void
                        /**
                         * Add the given singleton factory for building the specified singleton
                         * if necessary.
                         * <p>To be called for eager registration of singletons, e.g. to be able to
                         * resolve circular references.
                         * @param beanName the name of the bean
                         * @param singletonFactory the factory for the singleton object
                         */
                        // @ts-ignore
                        addSingletonFactory(beanName: string, singletonFactory: org.springframework.beans.factory.ObjectFactory<any>): void
                        // @ts-ignore
                        getSingleton(beanName: string): java.lang.Object
                        /**
                         * Return the (raw) singleton object registered under the given name.
                         * <p>Checks already instantiated singletons and also allows for an early
                         * reference to a currently created singleton (resolving a circular reference).
                         * @param beanName the name of the bean to look for
                         * @param allowEarlyReference whether early references should be created or not
                         * @return the registered singleton object, or {#code null} if none found
                         */
                        // @ts-ignore
                        getSingleton(beanName: string, allowEarlyReference: boolean): java.lang.Object
                        /**
                         * Return the (raw) singleton object registered under the given name,
                         * creating and registering a new one if none registered yet.
                         * @param beanName the name of the bean
                         * @param singletonFactory the ObjectFactory to lazily create the singleton
                         *  with, if necessary
                         * @return the registered singleton object
                         */
                        // @ts-ignore
                        getSingleton(beanName: string, singletonFactory: org.springframework.beans.factory.ObjectFactory<any>): java.lang.Object
                        /**
                         * Register an exception that happened to get suppressed during the creation of a
                         * singleton bean instance, e.g. a temporary circular reference resolution problem.
                         * <p>The default implementation preserves any given exception in this registry's
                         * collection of suppressed exceptions, up to a limit of 100 exceptions, adding
                         * them as related causes to an eventual top-level {@link BeanCreationException}.
                         * @param ex the Exception to register
                         * @see BeanCreationException#getRelatedCauses()
                         */
                        // @ts-ignore
                        onSuppressedException(ex: java.lang.Exception): void
                        /**
                         * Remove the bean with the given name from the singleton cache of this factory,
                         * to be able to clean up eager registration of a singleton if creation failed.
                         * @param beanName the name of the bean
                         * @see #getSingletonMutex()
                         */
                        // @ts-ignore
                        removeSingleton(beanName: string): void
                        // @ts-ignore
                        containsSingleton(beanName: string): boolean
                        // @ts-ignore
                        getSingletonNames(): java.lang.String[]
                        // @ts-ignore
                        getSingletonCount(): int
                        // @ts-ignore
                        setCurrentlyInCreation(beanName: string, inCreation: boolean): void
                        // @ts-ignore
                        isCurrentlyInCreation(beanName: string): boolean
                        // @ts-ignore
                        isActuallyInCreation(beanName: string): boolean
                        /**
                         * Return whether the specified singleton bean is currently in creation
                         * (within the entire factory).
                         * @param beanName the name of the bean
                         */
                        // @ts-ignore
                        isSingletonCurrentlyInCreation(beanName: string): boolean
                        /**
                         * Callback before singleton creation.
                         * <p>The default implementation register the singleton as currently in creation.
                         * @param beanName the name of the singleton about to be created
                         * @see #isSingletonCurrentlyInCreation
                         */
                        // @ts-ignore
                        beforeSingletonCreation(beanName: string): void
                        /**
                         * Callback after singleton creation.
                         * <p>The default implementation marks the singleton as not in creation anymore.
                         * @param beanName the name of the singleton that has been created
                         * @see #isSingletonCurrentlyInCreation
                         */
                        // @ts-ignore
                        afterSingletonCreation(beanName: string): void
                        /**
                         * Add the given bean to the list of disposable beans in this registry.
                         * <p>Disposable beans usually correspond to registered singletons,
                         * matching the bean name but potentially being a different instance
                         * (for example, a DisposableBean adapter for a singleton that does not
                         * naturally implement Spring's DisposableBean interface).
                         * @param beanName the name of the bean
                         * @param bean the bean instance
                         */
                        // @ts-ignore
                        registerDisposableBean(beanName: string, bean: org.springframework.beans.factory.DisposableBean): void
                        /**
                         * Register a containment relationship between two beans,
                         * e.g. between an inner bean and its containing outer bean.
                         * <p>Also registers the containing bean as dependent on the contained bean
                         * in terms of destruction order.
                         * @param containedBeanName the name of the contained (inner) bean
                         * @param containingBeanName the name of the containing (outer) bean
                         * @see #registerDependentBean
                         */
                        // @ts-ignore
                        registerContainedBean(containedBeanName: string, containingBeanName: string): void
                        /**
                         * Register a dependent bean for the given bean,
                         * to be destroyed before the given bean is destroyed.
                         * @param beanName the name of the bean
                         * @param dependentBeanName the name of the dependent bean
                         */
                        // @ts-ignore
                        registerDependentBean(beanName: string, dependentBeanName: string): void
                        /**
                         * Determine whether the specified dependent bean has been registered as
                         * dependent on the given bean or on any of its transitive dependencies.
                         * @param beanName the name of the bean to check
                         * @param dependentBeanName the name of the dependent bean
                         * @since 4.0
                         */
                        // @ts-ignore
                        isDependent(beanName: string, dependentBeanName: string): boolean
                        /**
                         * Determine whether a dependent bean has been registered for the given name.
                         * @param beanName the name of the bean to check
                         */
                        // @ts-ignore
                        hasDependentBean(beanName: string): boolean
                        /**
                         * Return the names of all beans which depend on the specified bean, if any.
                         * @param beanName the name of the bean
                         * @return the array of dependent bean names, or an empty array if none
                         */
                        // @ts-ignore
                        getDependentBeans(beanName: string): java.lang.String[]
                        /**
                         * Return the names of all beans that the specified bean depends on, if any.
                         * @param beanName the name of the bean
                         * @return the array of names of beans which the bean depends on,
                         *  or an empty array if none
                         */
                        // @ts-ignore
                        getDependenciesForBean(beanName: string): java.lang.String[]
                        // @ts-ignore
                        destroySingletons(): void
                        /**
                         * Clear all cached singleton instances in this registry.
                         * @since 4.3.15
                         */
                        // @ts-ignore
                        clearSingletonCache(): void
                        /**
                         * Destroy the given bean. Delegates to {@code destroyBean}
                         * if a corresponding disposable bean instance is found.
                         * @param beanName the name of the bean
                         * @see #destroyBean
                         */
                        // @ts-ignore
                        destroySingleton(beanName: string): void
                        /**
                         * Destroy the given bean. Must destroy beans that depend on the given
                         * bean before the bean itself. Should not throw any exceptions.
                         * @param beanName the name of the bean
                         * @param bean the bean instance to destroy
                         */
                        // @ts-ignore
                        destroyBean(beanName: string, bean: org.springframework.beans.factory.DisposableBean): void
                        /**
                         * Exposes the singleton mutex to subclasses and external collaborators.
                         * <p>Subclasses should synchronize on the given Object if they perform
                         * any sort of extended singleton creation phase. In particular, subclasses
                         * should <i>not</i> have their own mutexes involved in singleton creation,
                         * to avoid the potential for deadlocks in lazy-init situations.
                         */
                        // @ts-ignore
                        getSingletonMutex(): java.lang.Object
                    }
                }
            }
        }
    }
}
