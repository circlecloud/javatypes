declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Abstract bean factory superclass that implements default bean creation,
                     * with the full capabilities specified by the {@link RootBeanDefinition} class.
                     * Implements the {@link org.springframework.beans.factory.config.AutowireCapableBeanFactory}
                     * interface in addition to AbstractBeanFactory's {@link #createBean} method.
                     * <p>Provides bean creation (with constructor resolution), property population,
                     * wiring (including autowiring), and initialization. Handles runtime bean
                     * references, resolves managed collections, calls initialization methods, etc.
                     * Supports autowiring constructors, properties by name, and properties by type.
                     * <p>The main template method to be implemented by subclasses is
                     * {@link #resolveDependency(DependencyDescriptor, String, Set, TypeConverter)},
                     * used for autowiring by type. In case of a factory which is capable of searching
                     * its bean definitions, matching beans will typically be implemented through such
                     * a search. For other factory styles, simplified matching algorithms can be implemented.
                     * <p>Note that this class does <i>not</i> assume or implement bean definition
                     * registry capabilities. See {@link DefaultListableBeanFactory} for an implementation
                     * of the {@link org.springframework.beans.factory.ListableBeanFactory} and
                     * {@link BeanDefinitionRegistry} interfaces, which represent the API and SPI
                     * view of such a factory, respectively.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @author Mark Fisher
                     * @author Costin Leau
                     * @author Chris Beams
                     * @author Sam Brannen
                     * @author Phillip Webb
                     * @since 13.02.2004
                     * @see RootBeanDefinition
                     * @see DefaultListableBeanFactory
                     * @see BeanDefinitionRegistry
                     */
                    // @ts-ignore
                    class AbstractAutowireCapableBeanFactory extends org.springframework.beans.factory.support.AbstractBeanFactory implements org.springframework.beans.factory.config.AutowireCapableBeanFactory {
                        /**
                         * Create a new AbstractAutowireCapableBeanFactory.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new AbstractAutowireCapableBeanFactory with the given parent.
                         * @param parentBeanFactory parent bean factory, or {#code null} if none
                         */
                        // @ts-ignore
                        constructor(parentBeanFactory: org.springframework.beans.factory.BeanFactory)
                        /**
                         * Set the instantiation strategy to use for creating bean instances.
                         * Default is CglibSubclassingInstantiationStrategy.
                         * @see CglibSubclassingInstantiationStrategy
                         */
                        // @ts-ignore
                        setInstantiationStrategy(instantiationStrategy: org.springframework.beans.factory.support.InstantiationStrategy): void
                        /**
                         * Return the instantiation strategy to use for creating bean instances.
                         */
                        // @ts-ignore
                        getInstantiationStrategy(): org.springframework.beans.factory.support.InstantiationStrategy
                        /**
                         * Set the ParameterNameDiscoverer to use for resolving method parameter
                         * names if needed (e.g. for constructor names).
                         * <p>Default is a {@link DefaultParameterNameDiscoverer}.
                         */
                        // @ts-ignore
                        setParameterNameDiscoverer(parameterNameDiscoverer: ParameterNameDiscoverer): void
                        /**
                         * Return the ParameterNameDiscoverer to use for resolving method parameter
                         * names if needed.
                         */
                        // @ts-ignore
                        getParameterNameDiscoverer(): ParameterNameDiscoverer
                        /**
                         * Set whether to allow circular references between beans - and automatically
                         * try to resolve them.
                         * <p>Note that circular reference resolution means that one of the involved beans
                         * will receive a reference to another bean that is not fully initialized yet.
                         * This can lead to subtle and not-so-subtle side effects on initialization;
                         * it does work fine for many scenarios, though.
                         * <p>Default is "true". Turn this off to throw an exception when encountering
                         * a circular reference, disallowing them completely.
                         * <p><b>NOTE:</b> It is generally recommended to not rely on circular references
                         * between your beans. Refactor your application logic to have the two beans
                         * involved delegate to a third bean that encapsulates their common logic.
                         */
                        // @ts-ignore
                        setAllowCircularReferences(allowCircularReferences: boolean): void
                        /**
                         * Set whether to allow the raw injection of a bean instance into some other
                         * bean's property, despite the injected bean eventually getting wrapped
                         * (for example, through AOP auto-proxying).
                         * <p>This will only be used as a last resort in case of a circular reference
                         * that cannot be resolved otherwise: essentially, preferring a raw instance
                         * getting injected over a failure of the entire bean wiring process.
                         * <p>Default is "false", as of Spring 2.0. Turn this on to allow for non-wrapped
                         * raw beans injected into some of your references, which was Spring 1.2's
                         * (arguably unclean) default behavior.
                         * <p><b>NOTE:</b> It is generally recommended to not rely on circular references
                         * between your beans, in particular with auto-proxying involved.
                         * @see #setAllowCircularReferences
                         */
                        // @ts-ignore
                        setAllowRawInjectionDespiteWrapping(allowRawInjectionDespiteWrapping: boolean): void
                        /**
                         * Ignore the given dependency type for autowiring:
                         * for example, String. Default is none.
                         */
                        // @ts-ignore
                        ignoreDependencyType(type: java.lang.Class<any>): void
                        /**
                         * Ignore the given dependency interface for autowiring.
                         * <p>This will typically be used by application contexts to register
                         * dependencies that are resolved in other ways, like BeanFactory through
                         * BeanFactoryAware or ApplicationContext through ApplicationContextAware.
                         * <p>By default, only the BeanFactoryAware interface is ignored.
                         * For further types to ignore, invoke this method for each type.
                         * @see org.springframework.beans.factory.BeanFactoryAware
                         * @see org.springframework.context.ApplicationContextAware
                         */
                        // @ts-ignore
                        ignoreDependencyInterface(ifc: java.lang.Class<any>): void
                        // @ts-ignore
                        copyConfigurationFrom(otherFactory: org.springframework.beans.factory.config.ConfigurableBeanFactory): void
                        // @ts-ignore
                        createBean<T>(beanClass: java.lang.Class<T>): T
                        // @ts-ignore
                        autowireBean(existingBean: any): void
                        // @ts-ignore
                        configureBean(existingBean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        createBean(beanClass: java.lang.Class<any>, autowireMode: number /*int*/, dependencyCheck: boolean): java.lang.Object
                        // @ts-ignore
                        autowire(beanClass: java.lang.Class<any>, autowireMode: number /*int*/, dependencyCheck: boolean): java.lang.Object
                        // @ts-ignore
                        autowireBeanProperties(existingBean: any, autowireMode: number /*int*/, dependencyCheck: boolean): void
                        // @ts-ignore
                        applyBeanPropertyValues(existingBean: any, beanName: string): void
                        // @ts-ignore
                        initializeBean(existingBean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        applyBeanPostProcessorsBeforeInitialization(existingBean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        applyBeanPostProcessorsAfterInitialization(existingBean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        destroyBean(existingBean: any): void
                        // @ts-ignore
                        resolveBeanByName(name: string, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): java.lang.Object
                        // @ts-ignore
                        resolveDependency(descriptor: org.springframework.beans.factory.config.DependencyDescriptor, requestingBeanName: string): java.lang.Object
                        /**
                         * Central method of this class: creates a bean instance,
                         * populates the bean instance, applies post-processors, etc.
                         * @see #doCreateBean
                         */
                        // @ts-ignore
                        createBean(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, args: any[]): java.lang.Object
                        /**
                         * Actually create the specified bean. Pre-creation processing has already happened
                         * at this point, e.g. checking {@code postProcessBeforeInstantiation} callbacks.
                         * <p>Differentiates between default bean instantiation, use of a
                         * factory method, and autowiring a constructor.
                         * @param beanName the name of the bean
                         * @param mbd the merged bean definition for the bean
                         * @param args explicit arguments to use for constructor or factory method invocation
                         * @return a new instance of the bean
                         * @throws BeanCreationException if the bean could not be created
                         * @see #instantiateBean
                         * @see #instantiateUsingFactoryMethod
                         * @see #autowireConstructor
                         */
                        // @ts-ignore
                        doCreateBean(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, args: any[]): java.lang.Object
                        // @ts-ignore
                        predictBeanType(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, ...typesToMatch: java.lang.Class[]): java.lang.Class<?>
                        /**
                         * Determine the target type for the given bean definition.
                         * @param beanName the name of the bean (for error handling purposes)
                         * @param mbd the merged bean definition for the bean
                         * @param typesToMatch the types to match in case of internal type matching purposes
                         *  (also signals that the returned {#code Class} will never be exposed to application code)
                         * @return the type for the bean if determinable, or {#code null} otherwise
                         */
                        // @ts-ignore
                        determineTargetType(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, ...typesToMatch: java.lang.Class[]): java.lang.Class<?>
                        /**
                         * Determine the target type for the given bean definition which is based on
                         * a factory method. Only called if there is no singleton instance registered
                         * for the target bean already.
                         * <p>This implementation determines the type matching {@link #createBean}'s
                         * different creation strategies. As far as possible, we'll perform static
                         * type checking to avoid creation of the target bean.
                         * @param beanName the name of the bean (for error handling purposes)
                         * @param mbd the merged bean definition for the bean
                         * @param typesToMatch the types to match in case of internal type matching purposes
                         *  (also signals that the returned {#code Class} will never be exposed to application code)
                         * @return the type for the bean if determinable, or {#code null} otherwise
                         * @see #createBean
                         */
                        // @ts-ignore
                        getTypeForFactoryMethod(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, ...typesToMatch: java.lang.Class[]): java.lang.Class<?>
                        /**
                         * This implementation attempts to query the FactoryBean's generic parameter metadata
                         * if present to determine the object type. If not present, i.e. the FactoryBean is
                         * declared as a raw type, checks the FactoryBean's {@code getObjectType} method
                         * on a plain instance of the FactoryBean, without bean properties applied yet.
                         * If this doesn't return a type yet, and {@code allowInit} is {@code true} a
                         * full creation of the FactoryBean is used as fallback (through delegation to the
                         * superclass's implementation).
                         * <p>The shortcut check for a FactoryBean is only applied in case of a singleton
                         * FactoryBean. If the FactoryBean instance itself is not kept as singleton,
                         * it will be fully created to check the type of its exposed object.
                         */
                        // @ts-ignore
                        getTypeForFactoryBean(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, allowInit: boolean): ResolvableType
                        /**
                         * This implementation attempts to query the FactoryBean's generic parameter metadata
                         * if present to determine the object type. If not present, i.e. the FactoryBean is
                         * declared as a raw type, checks the FactoryBean's {@code getObjectType} method
                         * on a plain instance of the FactoryBean, without bean properties applied yet.
                         * If this doesn't return a type yet, a full creation of the FactoryBean is
                         * used as fallback (through delegation to the superclass's implementation).
                         * <p>The shortcut check for a FactoryBean is only applied in case of a singleton
                         * FactoryBean. If the FactoryBean instance itself is not kept as singleton,
                         * it will be fully created to check the type of its exposed object.
                         */
                        // @ts-ignore
                        getTypeForFactoryBean(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): java.lang.Class<?>
                        /**
                         * Obtain a reference for early access to the specified bean,
                         * typically for the purpose of resolving a circular reference.
                         * @param beanName the name of the bean (for error handling purposes)
                         * @param mbd the merged bean definition for the bean
                         * @param bean the raw bean instance
                         * @return the object to expose as bean reference
                         */
                        // @ts-ignore
                        getEarlyBeanReference(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, bean: any): java.lang.Object
                        /**
                         * Apply MergedBeanDefinitionPostProcessors to the specified bean definition,
                         * invoking their {@code postProcessMergedBeanDefinition} methods.
                         * @param mbd the merged bean definition for the bean
                         * @param beanType the actual type of the managed bean instance
                         * @param beanName the name of the bean
                         * @see MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition
                         */
                        // @ts-ignore
                        applyMergedBeanDefinitionPostProcessors(mbd: org.springframework.beans.factory.support.RootBeanDefinition, beanType: java.lang.Class<any>, beanName: string): void
                        /**
                         * Apply before-instantiation post-processors, resolving whether there is a
                         * before-instantiation shortcut for the specified bean.
                         * @param beanName the name of the bean
                         * @param mbd the bean definition for the bean
                         * @return the shortcut-determined bean instance, or {#code null} if none
                         */
                        // @ts-ignore
                        resolveBeforeInstantiation(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): java.lang.Object
                        /**
                         * Apply InstantiationAwareBeanPostProcessors to the specified bean definition
                         * (by class and name), invoking their {@code postProcessBeforeInstantiation} methods.
                         * <p>Any returned object will be used as the bean instead of actually instantiating
                         * the target bean. A {@code null} return value from the post-processor will
                         * result in the target bean being instantiated.
                         * @param beanClass the class of the bean to be instantiated
                         * @param beanName the name of the bean
                         * @return the bean object to use instead of a default instance of the target bean, or {#code null}
                         * @see InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation
                         */
                        // @ts-ignore
                        applyBeanPostProcessorsBeforeInstantiation(beanClass: java.lang.Class<any>, beanName: string): java.lang.Object
                        /**
                         * Create a new instance for the specified bean, using an appropriate instantiation strategy:
                         * factory method, constructor autowiring, or simple instantiation.
                         * @param beanName the name of the bean
                         * @param mbd the bean definition for the bean
                         * @param args explicit arguments to use for constructor or factory method invocation
                         * @return a BeanWrapper for the new instance
                         * @see #obtainFromSupplier
                         * @see #instantiateUsingFactoryMethod
                         * @see #autowireConstructor
                         * @see #instantiateBean
                         */
                        // @ts-ignore
                        createBeanInstance(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, args: any[]): org.springframework.beans.BeanWrapper
                        /**
                         * Obtain a bean instance from the given supplier.
                         * @param instanceSupplier the configured supplier
                         * @param beanName the corresponding bean name
                         * @return a BeanWrapper for the new instance
                         * @since 5.0
                         * @see #getObjectForBeanInstance
                         */
                        // @ts-ignore
                        obtainFromSupplier(instanceSupplier: java.util.function.Supplier<any> | java.util.function$.Supplier<?>, beanName: string): org.springframework.beans.BeanWrapper
                        /**
                         * Overridden in order to implicitly register the currently created bean as
                         * dependent on further beans getting programmatically retrieved during a
                         * {@link Supplier} callback.
                         * @since 5.0
                         * @see #obtainFromSupplier
                         */
                        // @ts-ignore
                        getObjectForBeanInstance(beanInstance: any, name: string, beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): java.lang.Object
                        /**
                         * Determine candidate constructors to use for the given bean, checking all registered
                         * {@link SmartInstantiationAwareBeanPostProcessor SmartInstantiationAwareBeanPostProcessors}.
                         * @param beanClass the raw class of the bean
                         * @param beanName the name of the bean
                         * @return the candidate constructors, or {#code null} if none specified
                         * @throws org.springframework.beans.BeansException in case of errors
                         * @see org.springframework.beans.factory.config.SmartInstantiationAwareBeanPostProcessor#determineCandidateConstructors
                         */
                        // @ts-ignore
                        determineConstructorsFromBeanPostProcessors(beanClass: java.lang.Class<any>, beanName: string): java.lang.reflect.Constructor[]
                        /**
                         * Instantiate the given bean using its default constructor.
                         * @param beanName the name of the bean
                         * @param mbd the bean definition for the bean
                         * @return a BeanWrapper for the new instance
                         */
                        // @ts-ignore
                        instantiateBean(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition): org.springframework.beans.BeanWrapper
                        /**
                         * Instantiate the bean using a named factory method. The method may be static, if the
                         * mbd parameter specifies a class, rather than a factoryBean, or an instance variable
                         * on a factory object itself configured using Dependency Injection.
                         * @param beanName the name of the bean
                         * @param mbd the bean definition for the bean
                         * @param explicitArgs argument values passed in programmatically via the getBean method,
                         *  or {#code null} if none (-> use constructor argument values from bean definition)
                         * @return a BeanWrapper for the new instance
                         * @see #getBean(String, Object[])
                         */
                        // @ts-ignore
                        instantiateUsingFactoryMethod(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, explicitArgs: any[]): org.springframework.beans.BeanWrapper
                        /**
                         * "autowire constructor" (with constructor arguments by type) behavior.
                         * Also applied if explicit constructor argument values are specified,
                         * matching all remaining arguments with beans from the bean factory.
                         * <p>This corresponds to constructor injection: In this mode, a Spring
                         * bean factory is able to host components that expect constructor-based
                         * dependency resolution.
                         * @param beanName the name of the bean
                         * @param mbd the bean definition for the bean
                         * @param ctors the chosen candidate constructors
                         * @param explicitArgs argument values passed in programmatically via the getBean method,
                         *  or {#code null} if none (-> use constructor argument values from bean definition)
                         * @return a BeanWrapper for the new instance
                         */
                        // @ts-ignore
                        autowireConstructor(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, ctors: java.lang.reflect.Constructor[], explicitArgs: any[]): org.springframework.beans.BeanWrapper
                        /**
                         * Populate the bean instance in the given BeanWrapper with the property values
                         * from the bean definition.
                         * @param beanName the name of the bean
                         * @param mbd the bean definition for the bean
                         * @param bw the BeanWrapper with bean instance
                         */
                        // @ts-ignore
                        populateBean(beanName: string, mbd: org.springframework.beans.factory.support.RootBeanDefinition, bw: org.springframework.beans.BeanWrapper): void
                        /**
                         * Fill in any missing property values with references to
                         * other beans in this factory if autowire is set to "byName".
                         * @param beanName the name of the bean we're wiring up.
                         *  Useful for debugging messages; not used functionally.
                         * @param mbd bean definition to update through autowiring
                         * @param bw the BeanWrapper from which we can obtain information about the bean
                         * @param pvs the PropertyValues to register wired objects with
                         */
                        // @ts-ignore
                        autowireByName(beanName: string, mbd: org.springframework.beans.factory.support.AbstractBeanDefinition, bw: org.springframework.beans.BeanWrapper, pvs: org.springframework.beans.MutablePropertyValues): void
                        /**
                         * Abstract method defining "autowire by type" (bean properties by type) behavior.
                         * <p>This is like PicoContainer default, in which there must be exactly one bean
                         * of the property type in the bean factory. This makes bean factories simple to
                         * configure for small namespaces, but doesn't work as well as standard Spring
                         * behavior for bigger applications.
                         * @param beanName the name of the bean to autowire by type
                         * @param mbd the merged bean definition to update through autowiring
                         * @param bw the BeanWrapper from which we can obtain information about the bean
                         * @param pvs the PropertyValues to register wired objects with
                         */
                        // @ts-ignore
                        autowireByType(beanName: string, mbd: org.springframework.beans.factory.support.AbstractBeanDefinition, bw: org.springframework.beans.BeanWrapper, pvs: org.springframework.beans.MutablePropertyValues): void
                        /**
                         * Return an array of non-simple bean properties that are unsatisfied.
                         * These are probably unsatisfied references to other beans in the
                         * factory. Does not include simple properties like primitives or Strings.
                         * @param mbd the merged bean definition the bean was created with
                         * @param bw the BeanWrapper the bean was created with
                         * @return an array of bean property names
                         * @see org.springframework.beans.BeanUtils#isSimpleProperty
                         */
                        // @ts-ignore
                        unsatisfiedNonSimpleProperties(mbd: org.springframework.beans.factory.support.AbstractBeanDefinition, bw: org.springframework.beans.BeanWrapper): java.lang.String[]
                        /**
                         * Extract a filtered set of PropertyDescriptors from the given BeanWrapper,
                         * excluding ignored dependency types or properties defined on ignored dependency interfaces.
                         * @param bw the BeanWrapper the bean was created with
                         * @param cache whether to cache filtered PropertyDescriptors for the given bean Class
                         * @return the filtered PropertyDescriptors
                         * @see #isExcludedFromDependencyCheck
                         * @see #filterPropertyDescriptorsForDependencyCheck(org.springframework.beans.BeanWrapper)
                         */
                        // @ts-ignore
                        filterPropertyDescriptorsForDependencyCheck(bw: org.springframework.beans.BeanWrapper, cache: boolean): java.beans.PropertyDescriptor[]
                        /**
                         * Extract a filtered set of PropertyDescriptors from the given BeanWrapper,
                         * excluding ignored dependency types or properties defined on ignored dependency interfaces.
                         * @param bw the BeanWrapper the bean was created with
                         * @return the filtered PropertyDescriptors
                         * @see #isExcludedFromDependencyCheck
                         */
                        // @ts-ignore
                        filterPropertyDescriptorsForDependencyCheck(bw: org.springframework.beans.BeanWrapper): java.beans.PropertyDescriptor[]
                        /**
                         * Determine whether the given bean property is excluded from dependency checks.
                         * <p>This implementation excludes properties defined by CGLIB and
                         * properties whose type matches an ignored dependency type or which
                         * are defined by an ignored dependency interface.
                         * @param pd the PropertyDescriptor of the bean property
                         * @return whether the bean property is excluded
                         * @see #ignoreDependencyType(Class)
                         * @see #ignoreDependencyInterface(Class)
                         */
                        // @ts-ignore
                        isExcludedFromDependencyCheck(pd: java.beans.PropertyDescriptor): boolean
                        /**
                         * Perform a dependency check that all properties exposed have been set,
                         * if desired. Dependency checks can be objects (collaborating beans),
                         * simple (primitives and String), or all (both).
                         * @param beanName the name of the bean
                         * @param mbd the merged bean definition the bean was created with
                         * @param pds the relevant property descriptors for the target bean
                         * @param pvs the property values to be applied to the bean
                         * @see #isExcludedFromDependencyCheck(java.beans.PropertyDescriptor)
                         */
                        // @ts-ignore
                        checkDependencies(beanName: string, mbd: org.springframework.beans.factory.support.AbstractBeanDefinition, pds: java.beans.PropertyDescriptor[], pvs: org.springframework.beans.PropertyValues): void
                        /**
                         * Apply the given property values, resolving any runtime references
                         * to other beans in this bean factory. Must use deep copy, so we
                         * don't permanently modify this property.
                         * @param beanName the bean name passed for better exception information
                         * @param mbd the merged bean definition
                         * @param bw the BeanWrapper wrapping the target object
                         * @param pvs the new property values
                         */
                        // @ts-ignore
                        applyPropertyValues(beanName: string, mbd: org.springframework.beans.factory.config.BeanDefinition, bw: org.springframework.beans.BeanWrapper, pvs: org.springframework.beans.PropertyValues): void
                        /**
                         * Initialize the given bean instance, applying factory callbacks
                         * as well as init methods and bean post processors.
                         * <p>Called from {@link #createBean} for traditionally defined beans,
                         * and from {@link #initializeBean} for existing bean instances.
                         * @param beanName the bean name in the factory (for debugging purposes)
                         * @param bean the new bean instance we may need to initialize
                         * @param mbd the bean definition that the bean was created with
                         *  (can also be {#code null}, if given an existing bean instance)
                         * @return the initialized bean instance (potentially wrapped)
                         * @see BeanNameAware
                         * @see BeanClassLoaderAware
                         * @see BeanFactoryAware
                         * @see #applyBeanPostProcessorsBeforeInitialization
                         * @see #invokeInitMethods
                         * @see #applyBeanPostProcessorsAfterInitialization
                         */
                        // @ts-ignore
                        initializeBean(beanName: string, bean: any, mbd: org.springframework.beans.factory.support.RootBeanDefinition): java.lang.Object
                        /**
                         * Give a bean a chance to react now all its properties are set,
                         * and a chance to know about its owning bean factory (this object).
                         * This means checking whether the bean implements InitializingBean or defines
                         * a custom init method, and invoking the necessary callback(s) if it does.
                         * @param beanName the bean name in the factory (for debugging purposes)
                         * @param bean the new bean instance we may need to initialize
                         * @param mbd the merged bean definition that the bean was created with
                         *  (can also be {#code null}, if given an existing bean instance)
                         * @throws Throwable if thrown by init methods or by the invocation process
                         * @see #invokeCustomInitMethod
                         */
                        // @ts-ignore
                        invokeInitMethods(beanName: string, bean: any, mbd: org.springframework.beans.factory.support.RootBeanDefinition): void
                        /**
                         * Invoke the specified custom init method on the given bean.
                         * Called by invokeInitMethods.
                         * <p>Can be overridden in subclasses for custom resolution of init
                         * methods with arguments.
                         * @see #invokeInitMethods
                         */
                        // @ts-ignore
                        invokeCustomInitMethod(beanName: string, bean: any, mbd: org.springframework.beans.factory.support.RootBeanDefinition): void
                        /**
                         * Applies the {@code postProcessAfterInitialization} callback of all
                         * registered BeanPostProcessors, giving them a chance to post-process the
                         * object obtained from FactoryBeans (for example, to auto-proxy them).
                         * @see #applyBeanPostProcessorsAfterInitialization
                         */
                        // @ts-ignore
                        postProcessObjectFromFactoryBean(object: any, beanName: string): java.lang.Object
                        /**
                         * Overridden to clear FactoryBean instance cache as well.
                         */
                        // @ts-ignore
                        removeSingleton(beanName: string): void
                        /**
                         * Overridden to clear FactoryBean instance cache as well.
                         */
                        // @ts-ignore
                        clearSingletonCache(): void
                    }
                }
            }
        }
    }
}
