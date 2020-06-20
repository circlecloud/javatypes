declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Spring's default implementation of the {@link ConfigurableListableBeanFactory}
                     * and {@link BeanDefinitionRegistry} interfaces: a full-fledged bean factory
                     * based on bean definition metadata, extensible through post-processors.
                     * <p>Typical usage is registering all bean definitions first (possibly read
                     * from a bean definition file), before accessing beans. Bean lookup by name
                     * is therefore an inexpensive operation in a local bean definition table,
                     * operating on pre-resolved bean definition metadata objects.
                     * <p>Note that readers for specific bean definition formats are typically
                     * implemented separately rather than as bean factory subclasses:
                     * see for example {@link PropertiesBeanDefinitionReader} and
                     * {@link org.springframework.beans.factory.xml.XmlBeanDefinitionReader}.
                     * <p>For an alternative implementation of the
                     * {@link org.springframework.beans.factory.ListableBeanFactory} interface,
                     * have a look at {@link StaticListableBeanFactory}, which manages existing
                     * bean instances rather than creating new ones based on bean definitions.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @author Costin Leau
                     * @author Chris Beams
                     * @author Phillip Webb
                     * @author Stephane Nicoll
                     * @since 16 April 2001
                     * @see #registerBeanDefinition
                     * @see #addBeanPostProcessor
                     * @see #getBean
                     * @see #resolveDependency
                     */
                    // @ts-ignore
                    class DefaultListableBeanFactory extends org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory implements org.springframework.beans.factory.config.ConfigurableListableBeanFactory, org.springframework.beans.factory.support.BeanDefinitionRegistry, java.io.Serializable {
                        /**
                         * Create a new DefaultListableBeanFactory.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new DefaultListableBeanFactory with the given parent.
                         * @param parentBeanFactory the parent BeanFactory
                         */
                        // @ts-ignore
                        constructor(parentBeanFactory: org.springframework.beans.factory.BeanFactory)
                        /**
                         * Specify an id for serialization purposes, allowing this BeanFactory to be
                         * deserialized from this id back into the BeanFactory object, if needed.
                         */
                        // @ts-ignore
                        setSerializationId(serializationId: string): void
                        /**
                         * Return an id for serialization purposes, if specified, allowing this BeanFactory
                         * to be deserialized from this id back into the BeanFactory object, if needed.
                         * @since 4.1.2
                         */
                        // @ts-ignore
                        getSerializationId(): java.lang.String
                        /**
                         * Set whether it should be allowed to override bean definitions by registering
                         * a different definition with the same name, automatically replacing the former.
                         * If not, an exception will be thrown. This also applies to overriding aliases.
                         * <p>Default is "true".
                         * @see #registerBeanDefinition
                         */
                        // @ts-ignore
                        setAllowBeanDefinitionOverriding(allowBeanDefinitionOverriding: boolean): void
                        /**
                         * Return whether it should be allowed to override bean definitions by registering
                         * a different definition with the same name, automatically replacing the former.
                         * @since 4.1.2
                         */
                        // @ts-ignore
                        isAllowBeanDefinitionOverriding(): boolean
                        /**
                         * Set whether the factory is allowed to eagerly load bean classes
                         * even for bean definitions that are marked as "lazy-init".
                         * <p>Default is "true". Turn this flag off to suppress class loading
                         * for lazy-init beans unless such a bean is explicitly requested.
                         * In particular, by-type lookups will then simply ignore bean definitions
                         * without resolved class name, instead of loading the bean classes on
                         * demand just to perform a type check.
                         * @see AbstractBeanDefinition#setLazyInit
                         */
                        // @ts-ignore
                        setAllowEagerClassLoading(allowEagerClassLoading: boolean): void
                        /**
                         * Return whether the factory is allowed to eagerly load bean classes
                         * even for bean definitions that are marked as "lazy-init".
                         * @since 4.1.2
                         */
                        // @ts-ignore
                        isAllowEagerClassLoading(): boolean
                        /**
                         * Set a {@link java.util.Comparator} for dependency Lists and arrays.
                         * @since 4.0
                         * @see org.springframework.core.OrderComparator
                         * @see org.springframework.core.annotation.AnnotationAwareOrderComparator
                         */
                        // @ts-ignore
                        setDependencyComparator(dependencyComparator: java.util.Comparator<java.lang.Object>): void
                        /**
                         * Return the dependency comparator for this BeanFactory (may be {@code null}.
                         * @since 4.0
                         */
                        // @ts-ignore
                        getDependencyComparator(): java.util.Comparator<java.lang.Object>
                        /**
                         * Set a custom autowire candidate resolver for this BeanFactory to use
                         * when deciding whether a bean definition should be considered as a
                         * candidate for autowiring.
                         */
                        // @ts-ignore
                        setAutowireCandidateResolver(autowireCandidateResolver: org.springframework.beans.factory.support.AutowireCandidateResolver): void
                        /**
                         * Return the autowire candidate resolver for this BeanFactory (never {@code null}).
                         */
                        // @ts-ignore
                        getAutowireCandidateResolver(): org.springframework.beans.factory.support.AutowireCandidateResolver
                        // @ts-ignore
                        copyConfigurationFrom(otherFactory: org.springframework.beans.factory.config.ConfigurableBeanFactory): void
                        // @ts-ignore
                        getBean<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        getBean<T>(requiredType: java.lang.Class<T>, ...args: any[]): T
                        // @ts-ignore
                        getBeanProvider<T>(requiredType: java.lang.Class<T>): org.springframework.beans.factory.ObjectProvider<T>
                        // @ts-ignore
                        getBeanProvider<T>(requiredType: ResolvableType): org.springframework.beans.factory.ObjectProvider<T>
                        // @ts-ignore
                        containsBeanDefinition(beanName: string): boolean
                        // @ts-ignore
                        getBeanDefinitionCount(): int
                        // @ts-ignore
                        getBeanDefinitionNames(): java.lang.String[]
                        // @ts-ignore
                        getBeanNamesForType(type: ResolvableType): java.lang.String[]
                        // @ts-ignore
                        getBeanNamesForType(type: ResolvableType, includeNonSingletons: boolean, allowEagerInit: boolean): java.lang.String[]
                        // @ts-ignore
                        getBeansOfType<T>(type: java.lang.Class<T>): java.util.Map<java.lang.String, T>
                        // @ts-ignore
                        getBeansOfType<T>(type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): java.util.Map<java.lang.String, T>
                        // @ts-ignore
                        getBeanNamesForAnnotation(annotationType: java.lang.Class<java.lang.annotation.Annotation>): java.lang.String[]
                        // @ts-ignore
                        getBeansWithAnnotation(annotationType: java.lang.Class<java.lang.annotation.Annotation>): java.util.Map<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        findAnnotationOnBean<A extends java.lang.annotation.Annotation>(beanName: string, annotationType: java.lang.Class<A>): A
                        // @ts-ignore
                        registerResolvableDependency(dependencyType: java.lang.Class<any>, autowiredValue: any): void
                        // @ts-ignore
                        isAutowireCandidate(beanName: string, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Determine whether the specified bean definition qualifies as an autowire candidate,
                         * to be injected into other beans which declare a dependency of matching type.
                         * @param beanName the name of the bean definition to check
                         * @param descriptor the descriptor of the dependency to resolve
                         * @param resolver the AutowireCandidateResolver to use for the actual resolution algorithm
                         * @return whether the bean should be considered as autowire candidate
                         */
                        // @ts-ignore
                        isAutowireCandidate(beanName: string, descriptor: org.springframework.beans.factory.config.DependencyDescriptor, resolver: org.springframework.beans.factory.support.AutowireCandidateResolver): boolean
                        /**
                         * Determine whether the specified bean definition qualifies as an autowire candidate,
                         * to be injected into other beans which declare a dependency of matching type.
                         * @param beanName the name of the bean definition to check
                         * @param mbd the merged bean definition to check
                         * @param descriptor the descriptor of the dependency to resolve
                         * @param resolver the AutowireCandidateResolver to use for the actual resolution algorithm
                         * @return whether the bean should be considered as autowire candidate
                         */
                        // @ts-ignore
                        isAutowireCandidate(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, descriptor: org.springframework.beans.factory.config.DependencyDescriptor, resolver: org.springframework.beans.factory.support.AutowireCandidateResolver): boolean
                        // @ts-ignore
                        getBeanDefinition(beanName: string): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        getBeanNamesIterator(): java.util.Iterator<java.lang.String>
                        // @ts-ignore
                        clearMergedBeanDefinition(beanName: string): void
                        // @ts-ignore
                        clearMetadataCache(): void
                        // @ts-ignore
                        freezeConfiguration(): void
                        // @ts-ignore
                        isConfigurationFrozen(): boolean
                        /**
                         * Considers all beans as eligible for metadata caching
                         * if the factory's configuration has been marked as frozen.
                         * @see #freezeConfiguration()
                         */
                        // @ts-ignore
                        isBeanEligibleForMetadataCaching(beanName: string): boolean
                        // @ts-ignore
                        preInstantiateSingletons(): void
                        // @ts-ignore
                        registerBeanDefinition(beanName: string, beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        removeBeanDefinition(beanName: string): void
                        /**
                         * Reset all bean definition caches for the given bean,
                         * including the caches of beans that are derived from it.
                         * <p>Called after an existing bean definition has been replaced or removed,
                         * triggering {@link #clearMergedBeanDefinition}, {@link #destroySingleton}
                         * and {@link MergedBeanDefinitionPostProcessor#resetBeanDefinition} on the
                         * given bean and on all bean definitions that have the given bean as parent.
                         * @param beanName the name of the bean to reset
                         * @see #registerBeanDefinition
                         * @see #removeBeanDefinition
                         */
                        // @ts-ignore
                        resetBeanDefinition(beanName: string): void
                        /**
                         * Only allows alias overriding if bean definition overriding is allowed.
                         */
                        // @ts-ignore
                        allowAliasOverriding(): boolean
                        // @ts-ignore
                        registerSingleton(beanName: string, singletonObject: any): void
                        // @ts-ignore
                        destroySingletons(): void
                        // @ts-ignore
                        destroySingleton(beanName: string): void
                        // @ts-ignore
                        resolveNamedBean<T>(requiredType: java.lang.Class<T>): org.springframework.beans.factory.config.NamedBeanHolder<T>
                        // @ts-ignore
                        resolveDependency(descriptor: org.springframework.beans.factory.config.DependencyDescriptor, requestingBeanName: string, autowiredBeanNames: Array<java.lang.String>, typeConverter: org.springframework.beans.TypeConverter): java.lang.Object
                        // @ts-ignore
                        doResolveDependency(descriptor: org.springframework.beans.factory.config.DependencyDescriptor, beanName: string, autowiredBeanNames: Array<java.lang.String>, typeConverter: org.springframework.beans.TypeConverter): java.lang.Object
                        /**
                         * Find bean instances that match the required type.
                         * Called during autowiring for the specified bean.
                         * @param beanName the name of the bean that is about to be wired
                         * @param requiredType the actual type of bean to look for
                         *  (may be an array component type or collection element type)
                         * @param descriptor the descriptor of the dependency to resolve
                         * @return a Map of candidate names and candidate instances that match
                         *  the required type (never {#code null})
                         * @throws BeansException in case of errors
                         * @see #autowireByType
                         * @see #autowireConstructor
                         */
                        // @ts-ignore
                        findAutowireCandidates(beanName: string, requiredType: java.lang.Class<any>, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): java.util.Map<java.lang.String, java.lang.Object>
                        /**
                         * Determine the autowire candidate in the given set of beans.
                         * <p>Looks for {@code @Primary} and {@code @Priority} (in that order).
                         * @param candidates a Map of candidate names and candidate instances
                         *  that match the required type, as returned by {#link #findAutowireCandidates}
                         * @param descriptor the target dependency to match against
                         * @return the name of the autowire candidate, or {#code null} if none found
                         */
                        // @ts-ignore
                        determineAutowireCandidate(candidates: java.util.Map<java.lang.String, java.lang.Object>, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): java.lang.String
                        /**
                         * Determine the primary candidate in the given set of beans.
                         * @param candidates a Map of candidate names and candidate instances
                         *  (or candidate classes if not created yet) that match the required type
                         * @param requiredType the target dependency type to match against
                         * @return the name of the primary candidate, or {#code null} if none found
                         * @see #isPrimary(String, Object)
                         */
                        // @ts-ignore
                        determinePrimaryCandidate(candidates: java.util.Map<java.lang.String, java.lang.Object>, requiredType: java.lang.Class<any>): java.lang.String
                        /**
                         * Determine the candidate with the highest priority in the given set of beans.
                         * <p>Based on {@code @javax.annotation.Priority}. As defined by the related
                         * {@link org.springframework.core.Ordered} interface, the lowest value has
                         * the highest priority.
                         * @param candidates a Map of candidate names and candidate instances
                         *  (or candidate classes if not created yet) that match the required type
                         * @param requiredType the target dependency type to match against
                         * @return the name of the candidate with the highest priority,
                         *  or {#code null} if none found
                         * @see #getPriority(Object)
                         */
                        // @ts-ignore
                        determineHighestPriorityCandidate(candidates: java.util.Map<java.lang.String, java.lang.Object>, requiredType: java.lang.Class<any>): java.lang.String
                        /**
                         * Return whether the bean definition for the given bean name has been
                         * marked as a primary bean.
                         * @param beanName the name of the bean
                         * @param beanInstance the corresponding bean instance (can be null)
                         * @return whether the given bean qualifies as primary
                         */
                        // @ts-ignore
                        isPrimary(beanName: string, beanInstance: any): boolean
                        /**
                         * Return the priority assigned for the given bean instance by
                         * the {@code javax.annotation.Priority} annotation.
                         * <p>The default implementation delegates to the specified
                         * {@link #setDependencyComparator dependency comparator}, checking its
                         * {@link OrderComparator#getPriority method} if it is an extension of
                         * Spring's common {@link OrderComparator} - typically, an
                         * {@link org.springframework.core.annotation.AnnotationAwareOrderComparator}.
                         * If no such comparator is present, this implementation returns {@code null}.
                         * @param beanInstance the bean instance to check (can be {#code null})
                         * @return the priority assigned to that bean or {#code null} if none is set
                         */
                        // @ts-ignore
                        getPriority(beanInstance: any): java.lang.Integer
                        /**
                         * Determine whether the given candidate name matches the bean name or the aliases
                         * stored in this bean definition.
                         */
                        // @ts-ignore
                        matchesBeanName(beanName: string, candidateName: string): boolean
                        // @ts-ignore
                        toString(): java.lang.String
                        // @ts-ignore
                        writeReplace(): java.lang.Object
                    }
                }
            }
        }
    }
}
