declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Abstract base class for {@link org.springframework.beans.factory.BeanFactory}
                     * implementations, providing the full capabilities of the
                     * {@link org.springframework.beans.factory.config.ConfigurableBeanFactory} SPI.
                     * Does <i>not</i> assume a listable bean factory: can therefore also be used
                     * as base class for bean factory implementations which obtain bean definitions
                     * from some backend resource (where bean definition access is an expensive operation).
                     * <p>This class provides a singleton cache (through its base class
                     * {@link org.springframework.beans.factory.support.DefaultSingletonBeanRegistry},
                     * singleton/prototype determination, {@link org.springframework.beans.factory.FactoryBean}
                     * handling, aliases, bean definition merging for child bean definitions,
                     * and bean destruction ({@link org.springframework.beans.factory.DisposableBean}
                     * interface, custom destroy methods). Furthermore, it can manage a bean factory
                     * hierarchy (delegating to the parent in case of an unknown bean), through implementing
                     * the {@link org.springframework.beans.factory.HierarchicalBeanFactory} interface.
                     * <p>The main template methods to be implemented by subclasses are
                     * {@link #getBeanDefinition} and {@link #createBean}, retrieving a bean definition
                     * for a given bean name and creating a bean instance for a given bean definition,
                     * respectively. Default implementations of those operations can be found in
                     * {@link DefaultListableBeanFactory} and {@link AbstractAutowireCapableBeanFactory}.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Costin Leau
                     * @author Chris Beams
                     * @author Phillip Webb
                     * @since 15 April 2001
                     * @see #getBeanDefinition
                     * @see #createBean
                     * @see AbstractAutowireCapableBeanFactory#createBean
                     * @see DefaultListableBeanFactory#getBeanDefinition
                     */
                    // @ts-ignore
                    abstract class AbstractBeanFactory extends org.springframework.beans.factory.support.FactoryBeanRegistrySupport implements org.springframework.beans.factory.config.ConfigurableBeanFactory {
                        /**
                         * Create a new AbstractBeanFactory.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new AbstractBeanFactory with the given parent.
                         * @param parentBeanFactory parent bean factory, or {#code null} if none
                         * @see #getBean
                         */
                        // @ts-ignore
                        constructor(parentBeanFactory: org.springframework.beans.factory.BeanFactory)
                        // @ts-ignore
                        public getBean(name: java.lang.String | string): any
                        // @ts-ignore
                        public getBean<T>(name: java.lang.String | string, requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getBean(name: java.lang.String | string, ...args: java.lang.Object[] | any[]): any
                        /**
                         * Return an instance, which may be shared or independent, of the specified bean.
                         * @param name the name of the bean to retrieve
                         * @param requiredType the required type of the bean to retrieve
                         * @param args arguments to use when creating a bean instance using explicit arguments
                         *  (only applied when creating a new instance as opposed to retrieving an existing one)
                         * @return an instance of the bean
                         * @throws BeansException if the bean could not be created
                         */
                        // @ts-ignore
                        public getBean<T>(name: java.lang.String | string, requiredType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                        /**
                         * Return an instance, which may be shared or independent, of the specified bean.
                         * @param name the name of the bean to retrieve
                         * @param requiredType the required type of the bean to retrieve
                         * @param args arguments to use when creating a bean instance using explicit arguments
                         *  (only applied when creating a new instance as opposed to retrieving an existing one)
                         * @param typeCheckOnly whether the instance is obtained for a type check,
                         *  not for actual use
                         * @return an instance of the bean
                         * @throws BeansException if the bean could not be created
                         */
                        // @ts-ignore
                        doGetBean<T>(name: java.lang.String | string, requiredType: java.lang.Class<T>, args: java.lang.Object[] | any[], typeCheckOnly: boolean): T
                        // @ts-ignore
                        public containsBean(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isSingleton(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isPrototype(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isTypeMatch(name: java.lang.String | string, typeToMatch: ResolvableType): boolean
                        /**
                         * Internal extended variant of {@link #isTypeMatch(String, ResolvableType)}
                         * to check whether the bean with the given name matches the specified type. Allow
                         * additional constraints to be applied to ensure that beans are not created early.
                         * @param name the name of the bean to query
                         * @param typeToMatch the type to match against (as a
                         *  {#code ResolvableType})
                         * @return {#code true} if the bean type matches, {@code false} if it
                         *  doesn't match or cannot be determined yet
                         * @throws NoSuchBeanDefinitionException if there is no bean with the given name
                         * @since 5.2
                         * @see #getBean
                         * @see #getType
                         */
                        // @ts-ignore
                        isTypeMatch(name: java.lang.String | string, typeToMatch: ResolvableType, allowFactoryBeanInit: boolean): boolean
                        // @ts-ignore
                        public getType(name: java.lang.String | string): java.lang.Class<any>
                        // @ts-ignore
                        public getType(name: java.lang.String | string, allowFactoryBeanInit: boolean): java.lang.Class<any>
                        // @ts-ignore
                        public getAliases(name: java.lang.String | string): string[]
                        // @ts-ignore
                        public getParentBeanFactory(): org.springframework.beans.factory.BeanFactory
                        // @ts-ignore
                        public containsLocalBean(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public setParentBeanFactory(parentBeanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        public setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public getBeanClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        public setTempClassLoader(tempClassLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public getTempClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        public setCacheBeanMetadata(cacheBeanMetadata: boolean): void
                        // @ts-ignore
                        public isCacheBeanMetadata(): boolean
                        // @ts-ignore
                        public setBeanExpressionResolver(resolver: org.springframework.beans.factory.config.BeanExpressionResolver): void
                        // @ts-ignore
                        public getBeanExpressionResolver(): org.springframework.beans.factory.config.BeanExpressionResolver
                        // @ts-ignore
                        public setConversionService(conversionService: ConversionService): void
                        // @ts-ignore
                        public getConversionService(): ConversionService
                        // @ts-ignore
                        public addPropertyEditorRegistrar(registrar: org.springframework.beans.PropertyEditorRegistrar): void
                        /**
                         * Return the set of PropertyEditorRegistrars.
                         */
                        // @ts-ignore
                        public getPropertyEditorRegistrars(): Array<org.springframework.beans.PropertyEditorRegistrar>
                        // @ts-ignore
                        public registerCustomEditor(requiredType: java.lang.Class<any>, propertyEditorClass: java.lang.Class<any>): void
                        // @ts-ignore
                        public copyRegisteredEditorsTo(registry: org.springframework.beans.PropertyEditorRegistry): void
                        /**
                         * Return the map of custom editors, with Classes as keys and PropertyEditor classes as values.
                         */
                        // @ts-ignore
                        public getCustomEditors(): java.util.Map<java.lang.Class<any>, java.lang.Class<any>>
                        // @ts-ignore
                        public setTypeConverter(typeConverter: org.springframework.beans.TypeConverter): void
                        /**
                         * Return the custom TypeConverter to use, if any.
                         * @return the custom TypeConverter, or {#code null} if none specified
                         */
                        // @ts-ignore
                        getCustomTypeConverter(): org.springframework.beans.TypeConverter
                        // @ts-ignore
                        public getTypeConverter(): org.springframework.beans.TypeConverter
                        // @ts-ignore
                        public addEmbeddedValueResolver(valueResolver: StringValueResolver): void
                        // @ts-ignore
                        public hasEmbeddedValueResolver(): boolean
                        // @ts-ignore
                        public resolveEmbeddedValue(value: java.lang.String | string): string
                        // @ts-ignore
                        public addBeanPostProcessor(beanPostProcessor: org.springframework.beans.factory.config.BeanPostProcessor): void
                        // @ts-ignore
                        public getBeanPostProcessorCount(): number /*int*/
                        /**
                         * Return the list of BeanPostProcessors that will get applied
                         * to beans created with this factory.
                         */
                        // @ts-ignore
                        public getBeanPostProcessors(): Array<org.springframework.beans.factory.config.BeanPostProcessor>
                        /**
                         * Return whether this factory holds a InstantiationAwareBeanPostProcessor
                         * that will get applied to singleton beans on shutdown.
                         * @see #addBeanPostProcessor
                         * @see org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor
                         */
                        // @ts-ignore
                        hasInstantiationAwareBeanPostProcessors(): boolean
                        /**
                         * Return whether this factory holds a DestructionAwareBeanPostProcessor
                         * that will get applied to singleton beans on shutdown.
                         * @see #addBeanPostProcessor
                         * @see org.springframework.beans.factory.config.DestructionAwareBeanPostProcessor
                         */
                        // @ts-ignore
                        hasDestructionAwareBeanPostProcessors(): boolean
                        // @ts-ignore
                        public registerScope(scopeName: java.lang.String | string, scope: org.springframework.beans.factory.config.Scope): void
                        // @ts-ignore
                        public getRegisteredScopeNames(): string[]
                        // @ts-ignore
                        public getRegisteredScope(scopeName: java.lang.String | string): org.springframework.beans.factory.config.Scope
                        /**
                         * Set the security context provider for this bean factory. If a security manager
                         * is set, interaction with the user code will be executed using the privileged
                         * of the provided security context.
                         */
                        // @ts-ignore
                        public setSecurityContextProvider(securityProvider: org.springframework.beans.factory.support.SecurityContextProvider): void
                        /**
                         * Delegate the creation of the access control context to the
                         * {@link #setSecurityContextProvider SecurityContextProvider}.
                         */
                        // @ts-ignore
                        public getAccessControlContext(): java.security.AccessControlContext
                        // @ts-ignore
                        public copyConfigurationFrom(otherFactory: org.springframework.beans.factory.config.ConfigurableBeanFactory): void
                        /**
                         * Return a 'merged' BeanDefinition for the given bean name,
                         * merging a child bean definition with its parent if necessary.
                         * <p>This {@code getMergedBeanDefinition} considers bean definition
                         * in ancestors as well.
                         * @param name the name of the bean to retrieve the merged definition for
                         *  (may be an alias)
                         * @return a (potentially merged) RootBeanDefinition for the given bean
                         * @throws NoSuchBeanDefinitionException if there is no bean with the given name
                         * @throws BeanDefinitionStoreException in case of an invalid bean definition
                         */
                        // @ts-ignore
                        public getMergedBeanDefinition(name: java.lang.String | string): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        public isFactoryBean(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isActuallyInCreation(beanName: java.lang.String | string): boolean
                        /**
                         * Return whether the specified prototype bean is currently in creation
                         * (within the current thread).
                         * @param beanName the name of the bean
                         */
                        // @ts-ignore
                        isPrototypeCurrentlyInCreation(beanName: java.lang.String | string): boolean
                        /**
                         * Callback before prototype creation.
                         * <p>The default implementation register the prototype as currently in creation.
                         * @param beanName the name of the prototype about to be created
                         * @see #isPrototypeCurrentlyInCreation
                         */
                        // @ts-ignore
                        beforePrototypeCreation(beanName: java.lang.String | string): void
                        /**
                         * Callback after prototype creation.
                         * <p>The default implementation marks the prototype as not in creation anymore.
                         * @param beanName the name of the prototype that has been created
                         * @see #isPrototypeCurrentlyInCreation
                         */
                        // @ts-ignore
                        afterPrototypeCreation(beanName: java.lang.String | string): void
                        // @ts-ignore
                        public destroyBean(beanName: java.lang.String | string, beanInstance: java.lang.Object | any): void
                        /**
                         * Destroy the given bean instance (usually a prototype instance
                         * obtained from this factory) according to the given bean definition.
                         * @param beanName the name of the bean definition
                         * @param bean the bean instance to destroy
                         * @param mbd the merged bean definition
                         */
                        // @ts-ignore
                        destroyBean(beanName: java.lang.String | string, bean: java.lang.Object | any, mbd: org.springframework.beans.factory.support.RootBeanDefinition): void
                        // @ts-ignore
                        public destroyScopedBean(beanName: java.lang.String | string): void
                        /**
                         * Return the bean name, stripping out the factory dereference prefix if necessary,
                         * and resolving aliases to canonical names.
                         * @param name the user-specified name
                         * @return the transformed bean name
                         */
                        // @ts-ignore
                        transformedBeanName(name: java.lang.String | string): string
                        /**
                         * Determine the original bean name, resolving locally defined aliases to canonical names.
                         * @param name the user-specified name
                         * @return the original bean name
                         */
                        // @ts-ignore
                        originalBeanName(name: java.lang.String | string): string
                        /**
                         * Initialize the given BeanWrapper with the custom editors registered
                         * with this factory. To be called for BeanWrappers that will create
                         * and populate bean instances.
                         * <p>The default implementation delegates to {@link #registerCustomEditors}.
                         * Can be overridden in subclasses.
                         * @param bw the BeanWrapper to initialize
                         */
                        // @ts-ignore
                        initBeanWrapper(bw: org.springframework.beans.BeanWrapper): void
                        /**
                         * Initialize the given PropertyEditorRegistry with the custom editors
                         * that have been registered with this BeanFactory.
                         * <p>To be called for BeanWrappers that will create and populate bean
                         * instances, and for SimpleTypeConverter used for constructor argument
                         * and factory method type conversion.
                         * @param registry the PropertyEditorRegistry to initialize
                         */
                        // @ts-ignore
                        registerCustomEditors(registry: org.springframework.beans.PropertyEditorRegistry): void
                        /**
                         * Return a merged RootBeanDefinition, traversing the parent bean definition
                         * if the specified bean corresponds to a child bean definition.
                         * @param beanName the name of the bean to retrieve the merged definition for
                         * @return a (potentially merged) RootBeanDefinition for the given bean
                         * @throws NoSuchBeanDefinitionException if there is no bean with the given name
                         * @throws BeanDefinitionStoreException in case of an invalid bean definition
                         */
                        // @ts-ignore
                        getMergedLocalBeanDefinition(beanName: java.lang.String | string): org.springframework.beans.factory.support.RootBeanDefinition
                        /**
                         * Return a RootBeanDefinition for the given top-level bean, by merging with
                         * the parent if the given bean's definition is a child bean definition.
                         * @param beanName the name of the bean definition
                         * @param bd the original bean definition (Root/ChildBeanDefinition)
                         * @return a (potentially merged) RootBeanDefinition for the given bean
                         * @throws BeanDefinitionStoreException in case of an invalid bean definition
                         */
                        // @ts-ignore
                        getMergedBeanDefinition(beanName: java.lang.String | string, bd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.support.RootBeanDefinition
                        /**
                         * Return a RootBeanDefinition for the given bean, by merging with the
                         * parent if the given bean's definition is a child bean definition.
                         * @param beanName the name of the bean definition
                         * @param bd the original bean definition (Root/ChildBeanDefinition)
                         * @param containingBd the containing bean definition in case of inner bean,
                         *  or {#code null} in case of a top-level bean
                         * @return a (potentially merged) RootBeanDefinition for the given bean
                         * @throws BeanDefinitionStoreException in case of an invalid bean definition
                         */
                        // @ts-ignore
                        getMergedBeanDefinition(beanName: java.lang.String | string, bd: org.springframework.beans.factory.config.BeanDefinition, containingBd: org.springframework.beans.factory.config.BeanDefinition): org.springframework.beans.factory.support.RootBeanDefinition
                        /**
                         * Check the given merged bean definition,
                         * potentially throwing validation exceptions.
                         * @param mbd the merged bean definition to check
                         * @param beanName the name of the bean
                         * @param args the arguments for bean creation, if any
                         * @throws BeanDefinitionStoreException in case of validation failure
                         */
                        // @ts-ignore
                        checkMergedBeanDefinition(mbd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, args: java.lang.Object[] | any[]): void
                        /**
                         * Remove the merged bean definition for the specified bean,
                         * recreating it on next access.
                         * @param beanName the bean name to clear the merged definition for
                         */
                        // @ts-ignore
                        clearMergedBeanDefinition(beanName: java.lang.String | string): void
                        /**
                         * Clear the merged bean definition cache, removing entries for beans
                         * which are not considered eligible for full metadata caching yet.
                         * <p>Typically triggered after changes to the original bean definitions,
                         * e.g. after applying a {@code BeanFactoryPostProcessor}. Note that metadata
                         * for beans which have already been created at this point will be kept around.
                         * @since 4.2
                         */
                        // @ts-ignore
                        public clearMetadataCache(): void
                        /**
                         * Resolve the bean class for the specified bean definition,
                         * resolving a bean class name into a Class reference (if necessary)
                         * and storing the resolved Class in the bean definition for further use.
                         * @param mbd the merged bean definition to determine the class for
                         * @param beanName the name of the bean (for error handling purposes)
                         * @param typesToMatch the types to match in case of internal type matching purposes
                         *  (also signals that the returned {#code Class} will never be exposed to application code)
                         * @return the resolved bean class (or {#code null} if none)
                         * @throws CannotLoadBeanClassException if we failed to load the class
                         */
                        // @ts-ignore
                        resolveBeanClass(mbd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, ...typesToMatch: java.lang.Class<any>[]): java.lang.Class<any>
                        /**
                         * Evaluate the given String as contained in a bean definition,
                         * potentially resolving it as an expression.
                         * @param value the value to check
                         * @param beanDefinition the bean definition that the value comes from
                         * @return the resolved value
                         * @see #setBeanExpressionResolver
                         */
                        // @ts-ignore
                        evaluateBeanDefinitionString(value: java.lang.String | string, beanDefinition: org.springframework.beans.factory.config.BeanDefinition): any
                        /**
                         * Predict the eventual bean type (of the processed bean instance) for the
                         * specified bean. Called by {@link #getType} and {@link #isTypeMatch}.
                         * Does not need to handle FactoryBeans specifically, since it is only
                         * supposed to operate on the raw bean type.
                         * <p>This implementation is simplistic in that it is not able to
                         * handle factory methods and InstantiationAwareBeanPostProcessors.
                         * It only predicts the bean type correctly for a standard bean.
                         * To be overridden in subclasses, applying more sophisticated type detection.
                         * @param beanName the name of the bean
                         * @param mbd the merged bean definition to determine the type for
                         * @param typesToMatch the types to match in case of internal type matching purposes
                         *  (also signals that the returned {#code Class} will never be exposed to application code)
                         * @return the type of the bean, or {#code null} if not predictable
                         */
                        // @ts-ignore
                        predictBeanType(beanName: java.lang.String | string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, ...typesToMatch: java.lang.Class<any>[]): java.lang.Class<any>
                        /**
                         * Check whether the given bean is defined as a {@link FactoryBean}.
                         * @param beanName the name of the bean
                         * @param mbd the corresponding bean definition
                         */
                        // @ts-ignore
                        isFactoryBean(beanName: java.lang.String | string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): boolean
                        /**
                         * Determine the bean type for the given FactoryBean definition, as far as possible.
                         * Only called if there is no singleton instance registered for the target bean
                         * already. Implementations are only allowed to instantiate the factory bean if
                         * {@code allowInit} is {@code true}, otherwise they should try to determine the
                         * result through other means.
                         * <p>If no {@link FactoryBean#OBJECT_TYPE_ATTRIBUTE} if set on the bean definition
                         * and {@code allowInit} is {@code true}, the default implementation will create
                         * the FactoryBean via {@code getBean} to call its {@code getObjectType} method.
                         * Subclasses are encouraged to optimize this, typically by inspecting the generic
                         * signature of the factory bean class or the factory method that creates it. If
                         * subclasses do instantiate the FactoryBean, they should consider trying the
                         * {@code getObjectType} method without fully populating the bean. If this fails, a
                         * full FactoryBean creation as performed by this implementation should be used as
                         * fallback.
                         * @param beanName the name of the bean
                         * @param mbd the merged bean definition for the bean
                         * @param allowInit if initialization of the FactoryBean is permitted
                         * @return the type for the bean if determinable, otherwise {#code ResolvableType.NONE}
                         * @since 5.2
                         * @see org.springframework.beans.factory.FactoryBean#getObjectType()
                         * @see #getBean(String)
                         */
                        // @ts-ignore
                        getTypeForFactoryBean(beanName: java.lang.String | string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, allowInit: boolean): ResolvableType
                        /**
                         * Determine the bean type for the given FactoryBean definition, as far as possible.
                         * Only called if there is no singleton instance registered for the target bean already.
                         * <p>The default implementation creates the FactoryBean via {@code getBean}
                         * to call its {@code getObjectType} method. Subclasses are encouraged to optimize
                         * this, typically by just instantiating the FactoryBean but not populating it yet,
                         * trying whether its {@code getObjectType} method already returns a type.
                         * If no type found, a full FactoryBean creation as performed by this implementation
                         * should be used as fallback.
                         * @param beanName the name of the bean
                         * @param mbd the merged bean definition for the bean
                         * @return the type for the bean if determinable, or {#code null} otherwise
                         * @see org.springframework.beans.factory.FactoryBean#getObjectType()
                         * @see #getBean(String)
                         * @deprecated since 5.2 in favor of {#link #getTypeForFactoryBean(String, RootBeanDefinition, boolean)}
                         */
                        // @ts-ignore
                        getTypeForFactoryBean(beanName: java.lang.String | string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): java.lang.Class<any>
                        /**
                         * Mark the specified bean as already created (or about to be created).
                         * <p>This allows the bean factory to optimize its caching for repeated
                         * creation of the specified bean.
                         * @param beanName the name of the bean
                         */
                        // @ts-ignore
                        markBeanAsCreated(beanName: java.lang.String | string): void
                        /**
                         * Perform appropriate cleanup of cached metadata after bean creation failed.
                         * @param beanName the name of the bean
                         */
                        // @ts-ignore
                        cleanupAfterBeanCreationFailure(beanName: java.lang.String | string): void
                        /**
                         * Determine whether the specified bean is eligible for having
                         * its bean definition metadata cached.
                         * @param beanName the name of the bean
                         * @return {#code true} if the bean's metadata may be cached
                         *  at this point already
                         */
                        // @ts-ignore
                        isBeanEligibleForMetadataCaching(beanName: java.lang.String | string): boolean
                        /**
                         * Remove the singleton instance (if any) for the given bean name,
                         * but only if it hasn't been used for other purposes than type checking.
                         * @param beanName the name of the bean
                         * @return {#code true} if actually removed, {@code false} otherwise
                         */
                        // @ts-ignore
                        removeSingletonIfCreatedForTypeCheckOnly(beanName: java.lang.String | string): boolean
                        /**
                         * Check whether this factory's bean creation phase already started,
                         * i.e. whether any bean has been marked as created in the meantime.
                         * @since 4.2.2
                         * @see #markBeanAsCreated
                         */
                        // @ts-ignore
                        hasBeanCreationStarted(): boolean
                        /**
                         * Get the object for the given bean instance, either the bean
                         * instance itself or its created object in case of a FactoryBean.
                         * @param beanInstance the shared bean instance
                         * @param name the name that may include factory dereference prefix
                         * @param beanName the canonical bean name
                         * @param mbd the merged bean definition
                         * @return the object to expose for the bean
                         */
                        // @ts-ignore
                        getObjectForBeanInstance(beanInstance: java.lang.Object | any, name: java.lang.String | string, beanName: java.lang.String | string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): any
                        /**
                         * Determine whether the given bean name is already in use within this factory,
                         * i.e. whether there is a local bean or alias registered under this name or
                         * an inner bean created with this name.
                         * @param beanName the name to check
                         */
                        // @ts-ignore
                        public isBeanNameInUse(beanName: java.lang.String | string): boolean
                        /**
                         * Determine whether the given bean requires destruction on shutdown.
                         * <p>The default implementation checks the DisposableBean interface as well as
                         * a specified destroy method and registered DestructionAwareBeanPostProcessors.
                         * @param bean the bean instance to check
                         * @param mbd the corresponding bean definition
                         * @see org.springframework.beans.factory.DisposableBean
                         * @see AbstractBeanDefinition#getDestroyMethodName()
                         * @see org.springframework.beans.factory.config.DestructionAwareBeanPostProcessor
                         */
                        // @ts-ignore
                        requiresDestruction(bean: java.lang.Object | any, mbd: org.springframework.beans.factory.support.RootBeanDefinition): boolean
                        /**
                         * Add the given bean to the list of disposable beans in this factory,
                         * registering its DisposableBean interface and/or the given destroy method
                         * to be called on factory shutdown (if applicable). Only applies to singletons.
                         * @param beanName the name of the bean
                         * @param bean the bean instance
                         * @param mbd the bean definition for the bean
                         * @see RootBeanDefinition#isSingleton
                         * @see RootBeanDefinition#getDependsOn
                         * @see #registerDisposableBean
                         * @see #registerDependentBean
                         */
                        // @ts-ignore
                        registerDisposableBeanIfNecessary(beanName: java.lang.String | string, bean: java.lang.Object | any, mbd: org.springframework.beans.factory.support.RootBeanDefinition): void
                        /**
                         * Check if this bean factory contains a bean definition with the given name.
                         * Does not consider any hierarchy this factory may participate in.
                         * Invoked by {@code containsBean} when no cached singleton instance is found.
                         * <p>Depending on the nature of the concrete bean factory implementation,
                         * this operation might be expensive (for example, because of directory lookups
                         * in external registries). However, for listable bean factories, this usually
                         * just amounts to a local hash lookup: The operation is therefore part of the
                         * public interface there. The same implementation can serve for both this
                         * template method and the public interface method in that case.
                         * @param beanName the name of the bean to look for
                         * @return if this bean factory contains a bean definition with the given name
                         * @see #containsBean
                         * @see org.springframework.beans.factory.ListableBeanFactory#containsBeanDefinition
                         */
                        // @ts-ignore
                        abstract containsBeanDefinition(beanName: java.lang.String | string): boolean
                        /**
                         * Return the bean definition for the given bean name.
                         * Subclasses should normally implement caching, as this method is invoked
                         * by this class every time bean definition metadata is needed.
                         * <p>Depending on the nature of the concrete bean factory implementation,
                         * this operation might be expensive (for example, because of directory lookups
                         * in external registries). However, for listable bean factories, this usually
                         * just amounts to a local hash lookup: The operation is therefore part of the
                         * public interface there. The same implementation can serve for both this
                         * template method and the public interface method in that case.
                         * @param beanName the name of the bean to find a definition for
                         * @return the BeanDefinition for this prototype name (never {#code null})
                         * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
                         *  if the bean definition cannot be resolved
                         * @throws BeansException in case of errors
                         * @see RootBeanDefinition
                         * @see ChildBeanDefinition
                         * @see org.springframework.beans.factory.config.ConfigurableListableBeanFactory#getBeanDefinition
                         */
                        // @ts-ignore
                        abstract getBeanDefinition(beanName: java.lang.String | string): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Create a bean instance for the given merged bean definition (and arguments).
                         * The bean definition will already have been merged with the parent definition
                         * in case of a child definition.
                         * <p>All bean retrieval methods delegate to this method for actual bean creation.
                         * @param beanName the name of the bean
                         * @param mbd the merged bean definition for the bean
                         * @param args explicit arguments to use for constructor or factory method invocation
                         * @return a new instance of the bean
                         * @throws BeanCreationException if the bean could not be created
                         */
                        // @ts-ignore
                        abstract createBean(beanName: java.lang.String | string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, args: java.lang.Object[] | any[]): any
                    }
                }
            }
        }
    }
}
