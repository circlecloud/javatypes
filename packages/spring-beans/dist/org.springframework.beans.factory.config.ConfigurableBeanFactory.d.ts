declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Configuration interface to be implemented by most bean factories. Provides
                     * facilities to configure a bean factory, in addition to the bean factory
                     * client methods in the {@link org.springframework.beans.factory.BeanFactory}
                     * interface.
                     * <p>This bean factory interface is not meant to be used in normal application
                     * code: Stick to {@link org.springframework.beans.factory.BeanFactory} or
                     * {@link org.springframework.beans.factory.ListableBeanFactory} for typical
                     * needs. This extended interface is just meant to allow for framework-internal
                     * plug'n'play and for special access to bean factory configuration methods.
                     * @author Juergen Hoeller
                     * @since 03.11.2003
                     * @see org.springframework.beans.factory.BeanFactory
                     * @see org.springframework.beans.factory.ListableBeanFactory
                     * @see ConfigurableListableBeanFactory
                     */
                    // @ts-ignore
                    interface ConfigurableBeanFactory extends org.springframework.beans.factory.HierarchicalBeanFactory, org.springframework.beans.factory.config.SingletonBeanRegistry {
                        /**
                         * Scope identifier for the standard singleton scope: {@value}.
                         * <p>Custom scopes can be added via {@code registerScope}.
                         * @see #registerScope
                         */
                        // @ts-ignore
                        readonly SCOPE_SINGLETON: java.lang.String | string
                        /**
                         * Scope identifier for the standard prototype scope: {@value}.
                         * <p>Custom scopes can be added via {@code registerScope}.
                         * @see #registerScope
                         */
                        // @ts-ignore
                        readonly SCOPE_PROTOTYPE: java.lang.String | string
                        /**
                         * Set the parent of this bean factory.
                         * <p>Note that the parent cannot be changed: It should only be set outside
                         * a constructor if it isn't available at the time of factory instantiation.
                         * @param parentBeanFactory the parent BeanFactory
                         * @throws IllegalStateException if this factory is already associated with
                         *  a parent BeanFactory
                         * @see #getParentBeanFactory()
                         */
                        // @ts-ignore
                        setParentBeanFactory(parentBeanFactory: org.springframework.beans.factory.BeanFactory): void
                        /**
                         * Set the class loader to use for loading bean classes.
                         * Default is the thread context class loader.
                         * <p>Note that this class loader will only apply to bean definitions
                         * that do not carry a resolved bean class yet. This is the case as of
                         * Spring 2.0 by default: Bean definitions only carry bean class names,
                         * to be resolved once the factory processes the bean definition.
                         * @param beanClassLoader the class loader to use,
                         *  or {#code null} to suggest the default class loader
                         */
                        // @ts-ignore
                        setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        /**
                         * Return this factory's class loader for loading bean classes
                         * (only {@code null} if even the system ClassLoader isn't accessible).
                         * @see org.springframework.util.ClassUtils#forName(String, ClassLoader)
                         */
                        // @ts-ignore
                        getBeanClassLoader(): java.lang.ClassLoader
                        /**
                         * Specify a temporary ClassLoader to use for type matching purposes.
                         * Default is none, simply using the standard bean ClassLoader.
                         * <p>A temporary ClassLoader is usually just specified if
                         * <i>load-time weaving</i> is involved, to make sure that actual bean
                         * classes are loaded as lazily as possible. The temporary loader is
                         * then removed once the BeanFactory completes its bootstrap phase.
                         * @since 2.5
                         */
                        // @ts-ignore
                        setTempClassLoader(tempClassLoader: java.lang.ClassLoader): void
                        /**
                         * Return the temporary ClassLoader to use for type matching purposes,
                         * if any.
                         * @since 2.5
                         */
                        // @ts-ignore
                        getTempClassLoader(): java.lang.ClassLoader
                        /**
                         * Set whether to cache bean metadata such as given bean definitions
                         * (in merged fashion) and resolved bean classes. Default is on.
                         * <p>Turn this flag off to enable hot-refreshing of bean definition objects
                         * and in particular bean classes. If this flag is off, any creation of a bean
                         * instance will re-query the bean class loader for newly resolved classes.
                         */
                        // @ts-ignore
                        setCacheBeanMetadata(cacheBeanMetadata: boolean): void
                        /**
                         * Return whether to cache bean metadata such as given bean definitions
                         * (in merged fashion) and resolved bean classes.
                         */
                        // @ts-ignore
                        isCacheBeanMetadata(): boolean
                        /**
                         * Specify the resolution strategy for expressions in bean definition values.
                         * <p>There is no expression support active in a BeanFactory by default.
                         * An ApplicationContext will typically set a standard expression strategy
                         * here, supporting "#{...}" expressions in a Unified EL compatible style.
                         * @since 3.0
                         */
                        // @ts-ignore
                        setBeanExpressionResolver(resolver: org.springframework.beans.factory.config.BeanExpressionResolver): void
                        /**
                         * Return the resolution strategy for expressions in bean definition values.
                         * @since 3.0
                         */
                        // @ts-ignore
                        getBeanExpressionResolver(): org.springframework.beans.factory.config.BeanExpressionResolver
                        /**
                         * Specify a Spring 3.0 ConversionService to use for converting
                         * property values, as an alternative to JavaBeans PropertyEditors.
                         * @since 3.0
                         */
                        // @ts-ignore
                        setConversionService(conversionService: ConversionService): void
                        /**
                         * Return the associated ConversionService, if any.
                         * @since 3.0
                         */
                        // @ts-ignore
                        getConversionService(): ConversionService
                        /**
                         * Add a PropertyEditorRegistrar to be applied to all bean creation processes.
                         * <p>Such a registrar creates new PropertyEditor instances and registers them
                         * on the given registry, fresh for each bean creation attempt. This avoids
                         * the need for synchronization on custom editors; hence, it is generally
                         * preferable to use this method instead of {@link #registerCustomEditor}.
                         * @param registrar the PropertyEditorRegistrar to register
                         */
                        // @ts-ignore
                        addPropertyEditorRegistrar(registrar: org.springframework.beans.PropertyEditorRegistrar): void
                        /**
                         * Register the given custom property editor for all properties of the
                         * given type. To be invoked during factory configuration.
                         * <p>Note that this method will register a shared custom editor instance;
                         * access to that instance will be synchronized for thread-safety. It is
                         * generally preferable to use {@link #addPropertyEditorRegistrar} instead
                         * of this method, to avoid for the need for synchronization on custom editors.
                         * @param requiredType type of the property
                         * @param propertyEditorClass the {#link PropertyEditor} class to register
                         */
                        // @ts-ignore
                        registerCustomEditor(requiredType: java.lang.Class<any>, propertyEditorClass: java.lang.Class<any>): void
                        /**
                         * Initialize the given PropertyEditorRegistry with the custom editors
                         * that have been registered with this BeanFactory.
                         * @param registry the PropertyEditorRegistry to initialize
                         */
                        // @ts-ignore
                        copyRegisteredEditorsTo(registry: org.springframework.beans.PropertyEditorRegistry): void
                        /**
                         * Set a custom type converter that this BeanFactory should use for converting
                         * bean property values, constructor argument values, etc.
                         * <p>This will override the default PropertyEditor mechanism and hence make
                         * any custom editors or custom editor registrars irrelevant.
                         * @since 2.5
                         * @see #addPropertyEditorRegistrar
                         * @see #registerCustomEditor
                         */
                        // @ts-ignore
                        setTypeConverter(typeConverter: org.springframework.beans.TypeConverter): void
                        /**
                         * Obtain a type converter as used by this BeanFactory. This may be a fresh
                         * instance for each call, since TypeConverters are usually <i>not</i> thread-safe.
                         * <p>If the default PropertyEditor mechanism is active, the returned
                         * TypeConverter will be aware of all custom editors that have been registered.
                         * @since 2.5
                         */
                        // @ts-ignore
                        getTypeConverter(): org.springframework.beans.TypeConverter
                        /**
                         * Add a String resolver for embedded values such as annotation attributes.
                         * @param valueResolver the String resolver to apply to embedded values
                         * @since 3.0
                         */
                        // @ts-ignore
                        addEmbeddedValueResolver(valueResolver: StringValueResolver): void
                        /**
                         * Determine whether an embedded value resolver has been registered with this
                         * bean factory, to be applied through {@link #resolveEmbeddedValue(String)}.
                         * @since 4.3
                         */
                        // @ts-ignore
                        hasEmbeddedValueResolver(): boolean
                        /**
                         * Resolve the given embedded value, e.g. an annotation attribute.
                         * @param value the value to resolve
                         * @return the resolved value (may be the original value as-is)
                         * @since 3.0
                         */
                        // @ts-ignore
                        resolveEmbeddedValue(value: java.lang.String | string): string
                        /**
                         * Add a new BeanPostProcessor that will get applied to beans created
                         * by this factory. To be invoked during factory configuration.
                         * <p>Note: Post-processors submitted here will be applied in the order of
                         * registration; any ordering semantics expressed through implementing the
                         * {@link org.springframework.core.Ordered} interface will be ignored. Note
                         * that autodetected post-processors (e.g. as beans in an ApplicationContext)
                         * will always be applied after programmatically registered ones.
                         * @param beanPostProcessor the post-processor to register
                         */
                        // @ts-ignore
                        addBeanPostProcessor(beanPostProcessor: org.springframework.beans.factory.config.BeanPostProcessor): void
                        /**
                         * Return the current number of registered BeanPostProcessors, if any.
                         */
                        // @ts-ignore
                        getBeanPostProcessorCount(): number /*int*/
                        /**
                         * Register the given scope, backed by the given Scope implementation.
                         * @param scopeName the scope identifier
                         * @param scope the backing Scope implementation
                         */
                        // @ts-ignore
                        registerScope(scopeName: java.lang.String | string, scope: org.springframework.beans.factory.config.Scope): void
                        /**
                         * Return the names of all currently registered scopes.
                         * <p>This will only return the names of explicitly registered scopes.
                         * Built-in scopes such as "singleton" and "prototype" won't be exposed.
                         * @return the array of scope names, or an empty array if none
                         * @see #registerScope
                         */
                        // @ts-ignore
                        getRegisteredScopeNames(): string[]
                        /**
                         * Return the Scope implementation for the given scope name, if any.
                         * <p>This will only return explicitly registered scopes.
                         * Built-in scopes such as "singleton" and "prototype" won't be exposed.
                         * @param scopeName the name of the scope
                         * @return the registered Scope implementation, or {#code null} if none
                         * @see #registerScope
                         */
                        // @ts-ignore
                        getRegisteredScope(scopeName: java.lang.String | string): org.springframework.beans.factory.config.Scope
                        /**
                         * Provides a security access control context relevant to this factory.
                         * @return the applicable AccessControlContext (never {#code null})
                         * @since 3.0
                         */
                        // @ts-ignore
                        getAccessControlContext(): java.security.AccessControlContext
                        /**
                         * Copy all relevant configuration from the given other factory.
                         * <p>Should include all standard configuration settings as well as
                         * BeanPostProcessors, Scopes, and factory-specific internal settings.
                         * Should not include any metadata of actual bean definitions,
                         * such as BeanDefinition objects and bean name aliases.
                         * @param otherFactory the other BeanFactory to copy from
                         */
                        // @ts-ignore
                        copyConfigurationFrom(otherFactory: org.springframework.beans.factory.config.ConfigurableBeanFactory): void
                        /**
                         * Given a bean name, create an alias. We typically use this method to
                         * support names that are illegal within XML ids (used for bean names).
                         * <p>Typically invoked during factory configuration, but can also be
                         * used for runtime registration of aliases. Therefore, a factory
                         * implementation should synchronize alias access.
                         * @param beanName the canonical name of the target bean
                         * @param alias the alias to be registered for the bean
                         * @throws BeanDefinitionStoreException if the alias is already in use
                         */
                        // @ts-ignore
                        registerAlias(beanName: java.lang.String | string, alias: java.lang.String | string): void
                        /**
                         * Resolve all alias target names and aliases registered in this
                         * factory, applying the given StringValueResolver to them.
                         * <p>The value resolver may for example resolve placeholders
                         * in target bean names and even in alias names.
                         * @param valueResolver the StringValueResolver to apply
                         * @since 2.5
                         */
                        // @ts-ignore
                        resolveAliases(valueResolver: StringValueResolver): void
                        /**
                         * Return a merged BeanDefinition for the given bean name,
                         * merging a child bean definition with its parent if necessary.
                         * Considers bean definitions in ancestor factories as well.
                         * @param beanName the name of the bean to retrieve the merged definition for
                         * @return a (potentially merged) BeanDefinition for the given bean
                         * @throws NoSuchBeanDefinitionException if there is no bean definition with the given name
                         * @since 2.5
                         */
                        // @ts-ignore
                        getMergedBeanDefinition(beanName: java.lang.String | string): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Determine whether the bean with the given name is a FactoryBean.
                         * @param name the name of the bean to check
                         * @return whether the bean is a FactoryBean
                         *  ({#code false} means the bean exists but is not a FactoryBean)
                         * @throws NoSuchBeanDefinitionException if there is no bean with the given name
                         * @since 2.5
                         */
                        // @ts-ignore
                        isFactoryBean(name: java.lang.String | string): boolean
                        /**
                         * Explicitly control the current in-creation status of the specified bean.
                         * For container-internal use only.
                         * @param beanName the name of the bean
                         * @param inCreation whether the bean is currently in creation
                         * @since 3.1
                         */
                        // @ts-ignore
                        setCurrentlyInCreation(beanName: java.lang.String | string, inCreation: boolean): void
                        /**
                         * Determine whether the specified bean is currently in creation.
                         * @param beanName the name of the bean
                         * @return whether the bean is currently in creation
                         * @since 2.5
                         */
                        // @ts-ignore
                        isCurrentlyInCreation(beanName: java.lang.String | string): boolean
                        /**
                         * Register a dependent bean for the given bean,
                         * to be destroyed before the given bean is destroyed.
                         * @param beanName the name of the bean
                         * @param dependentBeanName the name of the dependent bean
                         * @since 2.5
                         */
                        // @ts-ignore
                        registerDependentBean(beanName: java.lang.String | string, dependentBeanName: java.lang.String | string): void
                        /**
                         * Return the names of all beans which depend on the specified bean, if any.
                         * @param beanName the name of the bean
                         * @return the array of dependent bean names, or an empty array if none
                         * @since 2.5
                         */
                        // @ts-ignore
                        getDependentBeans(beanName: java.lang.String | string): string[]
                        /**
                         * Return the names of all beans that the specified bean depends on, if any.
                         * @param beanName the name of the bean
                         * @return the array of names of beans which the bean depends on,
                         *  or an empty array if none
                         * @since 2.5
                         */
                        // @ts-ignore
                        getDependenciesForBean(beanName: java.lang.String | string): string[]
                        /**
                         * Destroy the given bean instance (usually a prototype instance
                         * obtained from this factory) according to its bean definition.
                         * <p>Any exception that arises during destruction should be caught
                         * and logged instead of propagated to the caller of this method.
                         * @param beanName the name of the bean definition
                         * @param beanInstance the bean instance to destroy
                         */
                        // @ts-ignore
                        destroyBean(beanName: java.lang.String | string, beanInstance: java.lang.Object | any): void
                        /**
                         * Destroy the specified scoped bean in the current target scope, if any.
                         * <p>Any exception that arises during destruction should be caught
                         * and logged instead of propagated to the caller of this method.
                         * @param beanName the name of the scoped bean
                         */
                        // @ts-ignore
                        destroyScopedBean(beanName: java.lang.String | string): void
                        /**
                         * Destroy all singleton beans in this factory, including inner beans that have
                         * been registered as disposable. To be called on shutdown of a factory.
                         * <p>Any exception that arises during destruction should be caught
                         * and logged instead of propagated to the caller of this method.
                         */
                        // @ts-ignore
                        destroySingletons(): void
                    }
                }
            }
        }
    }
}
