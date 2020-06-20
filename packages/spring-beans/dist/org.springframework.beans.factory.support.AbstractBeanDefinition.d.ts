declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Base class for concrete, full-fledged {@link BeanDefinition} classes,
                     * factoring out common properties of {@link GenericBeanDefinition},
                     * {@link RootBeanDefinition}, and {@link ChildBeanDefinition}.
                     * <p>The autowire constants match the ones defined in the
                     * {@link org.springframework.beans.factory.config.AutowireCapableBeanFactory}
                     * interface.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @author Mark Fisher
                     * @see GenericBeanDefinition
                     * @see RootBeanDefinition
                     * @see ChildBeanDefinition
                     */
                    // @ts-ignore
                    class AbstractBeanDefinition extends org.springframework.beans.BeanMetadataAttributeAccessor implements org.springframework.beans.factory.config.BeanDefinition, java.lang.Cloneable {
                        /**
                         * Create a new AbstractBeanDefinition with default settings.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new AbstractBeanDefinition with the given
                         * constructor argument values and property values.
                         */
                        // @ts-ignore
                        constructor(cargs: org.springframework.beans.factory.config.ConstructorArgumentValues, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new AbstractBeanDefinition as a deep copy of the given
                         * bean definition.
                         * @param original the original bean definition to copy from
                         */
                        // @ts-ignore
                        constructor(original: org.springframework.beans.factory.config.BeanDefinition)
                        /**
                         * Constant for the default scope name: {@code ""}, equivalent to singleton
                         * status unless overridden from a parent bean definition (if applicable).
                         */
                        // @ts-ignore
                        readonly SCOPE_DEFAULT: string
                        /**
                         * Constant that indicates no external autowiring at all.
                         * @see #setAutowireMode
                         */
                        // @ts-ignore
                        readonly AUTOWIRE_NO: number /*int*/
                        /**
                         * Constant that indicates autowiring bean properties by name.
                         * @see #setAutowireMode
                         */
                        // @ts-ignore
                        readonly AUTOWIRE_BY_NAME: number /*int*/
                        /**
                         * Constant that indicates autowiring bean properties by type.
                         * @see #setAutowireMode
                         */
                        // @ts-ignore
                        readonly AUTOWIRE_BY_TYPE: number /*int*/
                        /**
                         * Constant that indicates autowiring a constructor.
                         * @see #setAutowireMode
                         */
                        // @ts-ignore
                        readonly AUTOWIRE_CONSTRUCTOR: number /*int*/
                        /**
                         * Constant that indicates determining an appropriate autowire strategy
                         * through introspection of the bean class.
                         * @see #setAutowireMode
                         * @deprecated as of Spring 3.0: If you are using mixed autowiring strategies,
                         *  use annotation-based autowiring for clearer demarcation of autowiring needs.
                         */
                        // @ts-ignore
                        readonly AUTOWIRE_AUTODETECT: number /*int*/
                        /**
                         * Constant that indicates no dependency check at all.
                         * @see #setDependencyCheck
                         */
                        // @ts-ignore
                        readonly DEPENDENCY_CHECK_NONE: number /*int*/
                        /**
                         * Constant that indicates dependency checking for object references.
                         * @see #setDependencyCheck
                         */
                        // @ts-ignore
                        readonly DEPENDENCY_CHECK_OBJECTS: number /*int*/
                        /**
                         * Constant that indicates dependency checking for "simple" properties.
                         * @see #setDependencyCheck
                         * @see org.springframework.beans.BeanUtils#isSimpleProperty
                         */
                        // @ts-ignore
                        readonly DEPENDENCY_CHECK_SIMPLE: number /*int*/
                        /**
                         * Constant that indicates dependency checking for all properties
                         * (object references as well as "simple" properties).
                         * @see #setDependencyCheck
                         */
                        // @ts-ignore
                        readonly DEPENDENCY_CHECK_ALL: number /*int*/
                        /**
                         * Constant that indicates the container should attempt to infer the
                         * {@link #setDestroyMethodName destroy method name} for a bean as opposed to
                         * explicit specification of a method name. The value {@value} is specifically
                         * designed to include characters otherwise illegal in a method name, ensuring
                         * no possibility of collisions with legitimately named methods having the same
                         * name.
                         * <p>Currently, the method names detected during destroy method inference
                         * are "close" and "shutdown", if present on the specific bean class.
                         */
                        // @ts-ignore
                        readonly INFER_METHOD: string
                        /**
                         * Override settings in this bean definition (presumably a copied parent
                         * from a parent-child inheritance relationship) from the given bean
                         * definition (presumably the child).
                         * <ul>
                         * <li>Will override beanClass if specified in the given bean definition.
                         * <li>Will always take {@code abstract}, {@code scope},
                         * {@code lazyInit}, {@code autowireMode}, {@code dependencyCheck},
                         * and {@code dependsOn} from the given bean definition.
                         * <li>Will add {@code constructorArgumentValues}, {@code propertyValues},
                         * {@code methodOverrides} from the given bean definition to existing ones.
                         * <li>Will override {@code factoryBeanName}, {@code factoryMethodName},
                         * {@code initMethodName}, and {@code destroyMethodName} if specified
                         * in the given bean definition.
                         * </ul>
                         */
                        // @ts-ignore
                        overrideFrom(other: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Apply the provided default values to this bean.
                         * @param defaults the default settings to apply
                         * @since 2.5
                         */
                        // @ts-ignore
                        applyDefaults(defaults: org.springframework.beans.factory.support.BeanDefinitionDefaults): void
                        /**
                         * Specify the bean class name of this bean definition.
                         */
                        // @ts-ignore
                        setBeanClassName(beanClassName: string): void
                        /**
                         * Return the current bean class name of this bean definition.
                         */
                        // @ts-ignore
                        getBeanClassName(): java.lang.String
                        /**
                         * Specify the class for this bean.
                         * @see #setBeanClassName(String)
                         */
                        // @ts-ignore
                        setBeanClass(beanClass: java.lang.Class<any>): void
                        /**
                         * Return the specified class of the bean definition (assuming it is resolved already).
                         * <p><b>NOTE:</b> This is an initial class reference as declared in the bean metadata
                         * definition, potentially combined with a declared factory method or a
                         * {@link org.springframework.beans.factory.FactoryBean} which may lead to a different
                         * runtime type of the bean, or not being set at all in case of an instance-level
                         * factory method (which is resolved via {@link #getFactoryBeanName()} instead).
                         * <b>Do not use this for runtime type introspection of arbitrary bean definitions.</b>
                         * The recommended way to find out about the actual runtime type of a particular bean
                         * is a {@link org.springframework.beans.factory.BeanFactory#getType} call for the
                         * specified bean name; this takes all of the above cases into account and returns the
                         * type of object that a {@link org.springframework.beans.factory.BeanFactory#getBean}
                         * call is going to return for the same bean name.
                         * @return the resolved bean class (never {#code null})
                         * @throws IllegalStateException if the bean definition does not define a bean class,
                         *  or a specified bean class name has not been resolved into an actual Class yet
                         * @see #getBeanClassName()
                         * @see #hasBeanClass()
                         * @see #setBeanClass(Class)
                         * @see #resolveBeanClass(ClassLoader)
                         */
                        // @ts-ignore
                        getBeanClass(): java.lang.Class<?>
                        /**
                         * Return whether this definition specifies a bean class.
                         * @see #getBeanClass()
                         * @see #setBeanClass(Class)
                         * @see #resolveBeanClass(ClassLoader)
                         */
                        // @ts-ignore
                        hasBeanClass(): boolean
                        /**
                         * Determine the class of the wrapped bean, resolving it from a
                         * specified class name if necessary. Will also reload a specified
                         * Class from its name when called with the bean class already resolved.
                         * @param classLoader the ClassLoader to use for resolving a (potential) class name
                         * @return the resolved bean class
                         * @throws ClassNotFoundException if the class name could be resolved
                         */
                        // @ts-ignore
                        resolveBeanClass(classLoader: java.lang.ClassLoader): java.lang.Class<?>
                        /**
                         * Return a resolvable type for this bean definition.
                         * <p>This implementation delegates to {@link #getBeanClass()}.
                         * @since 5.2
                         */
                        // @ts-ignore
                        getResolvableType(): ResolvableType
                        /**
                         * Set the name of the target scope for the bean.
                         * <p>The default is singleton status, although this is only applied once
                         * a bean definition becomes active in the containing factory. A bean
                         * definition may eventually inherit its scope from a parent bean definition.
                         * For this reason, the default scope name is an empty string (i.e., {@code ""}),
                         * with singleton status being assumed until a resolved scope is set.
                         * @see #SCOPE_SINGLETON
                         * @see #SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        setScope(scope: string): void
                        /**
                         * Return the name of the target scope for the bean.
                         */
                        // @ts-ignore
                        getScope(): java.lang.String
                        /**
                         * Return whether this a <b>Singleton</b>, with a single shared instance
                         * returned from all calls.
                         * @see #SCOPE_SINGLETON
                         */
                        // @ts-ignore
                        isSingleton(): boolean
                        /**
                         * Return whether this a <b>Prototype</b>, with an independent instance
                         * returned for each call.
                         * @see #SCOPE_PROTOTYPE
                         */
                        // @ts-ignore
                        isPrototype(): boolean
                        /**
                         * Set if this bean is "abstract", i.e. not meant to be instantiated itself but
                         * rather just serving as parent for concrete child bean definitions.
                         * <p>Default is "false". Specify true to tell the bean factory to not try to
                         * instantiate that particular bean in any case.
                         */
                        // @ts-ignore
                        setAbstract(abstractFlag: boolean): void
                        /**
                         * Return whether this bean is "abstract", i.e. not meant to be instantiated
                         * itself but rather just serving as parent for concrete child bean definitions.
                         */
                        // @ts-ignore
                        isAbstract(): boolean
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
                         * @return whether to apply lazy-init semantics ({#code false} by default)
                         */
                        // @ts-ignore
                        isLazyInit(): boolean
                        /**
                         * Return whether this bean should be lazily initialized, i.e. not
                         * eagerly instantiated on startup. Only applicable to a singleton bean.
                         * @return the lazy-init flag if explicitly set, or {#code null} otherwise
                         * @since 5.2
                         */
                        // @ts-ignore
                        getLazyInit(): java.lang.Boolean
                        /**
                         * Set the autowire mode. This determines whether any automagical detection
                         * and setting of bean references will happen. Default is AUTOWIRE_NO
                         * which means there won't be convention-based autowiring by name or type
                         * (however, there may still be explicit annotation-driven autowiring).
                         * @param autowireMode the autowire mode to set.
                         *  Must be one of the constants defined in this class.
                         * @see #AUTOWIRE_NO
                         * @see #AUTOWIRE_BY_NAME
                         * @see #AUTOWIRE_BY_TYPE
                         * @see #AUTOWIRE_CONSTRUCTOR
                         * @see #AUTOWIRE_AUTODETECT
                         */
                        // @ts-ignore
                        setAutowireMode(autowireMode: number /*int*/): void
                        /**
                         * Return the autowire mode as specified in the bean definition.
                         */
                        // @ts-ignore
                        getAutowireMode(): int
                        /**
                         * Return the resolved autowire code,
                         * (resolving AUTOWIRE_AUTODETECT to AUTOWIRE_CONSTRUCTOR or AUTOWIRE_BY_TYPE).
                         * @see #AUTOWIRE_AUTODETECT
                         * @see #AUTOWIRE_CONSTRUCTOR
                         * @see #AUTOWIRE_BY_TYPE
                         */
                        // @ts-ignore
                        getResolvedAutowireMode(): int
                        /**
                         * Set the dependency check code.
                         * @param dependencyCheck the code to set.
                         *  Must be one of the four constants defined in this class.
                         * @see #DEPENDENCY_CHECK_NONE
                         * @see #DEPENDENCY_CHECK_OBJECTS
                         * @see #DEPENDENCY_CHECK_SIMPLE
                         * @see #DEPENDENCY_CHECK_ALL
                         */
                        // @ts-ignore
                        setDependencyCheck(dependencyCheck: number /*int*/): void
                        /**
                         * Return the dependency check code.
                         */
                        // @ts-ignore
                        getDependencyCheck(): int
                        /**
                         * Set the names of the beans that this bean depends on being initialized.
                         * The bean factory will guarantee that these beans get initialized first.
                         * <p>Note that dependencies are normally expressed through bean properties or
                         * constructor arguments. This property should just be necessary for other kinds
                         * of dependencies like statics (*ugh*) or database preparation on startup.
                         */
                        // @ts-ignore
                        setDependsOn(...dependsOn: string[]): void
                        /**
                         * Return the bean names that this bean depends on.
                         */
                        // @ts-ignore
                        getDependsOn(): java.lang.String[]
                        /**
                         * Set whether this bean is a candidate for getting autowired into some other bean.
                         * <p>Note that this flag is designed to only affect type-based autowiring.
                         * It does not affect explicit references by name, which will get resolved even
                         * if the specified bean is not marked as an autowire candidate. As a consequence,
                         * autowiring by name will nevertheless inject a bean if the name matches.
                         * @see #AUTOWIRE_BY_TYPE
                         * @see #AUTOWIRE_BY_NAME
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
                         * Register a qualifier to be used for autowire candidate resolution,
                         * keyed by the qualifier's type name.
                         * @see AutowireCandidateQualifier#getTypeName()
                         */
                        // @ts-ignore
                        addQualifier(qualifier: org.springframework.beans.factory.support.AutowireCandidateQualifier): void
                        /**
                         * Return whether this bean has the specified qualifier.
                         */
                        // @ts-ignore
                        hasQualifier(typeName: string): boolean
                        /**
                         * Return the qualifier mapped to the provided type name.
                         */
                        // @ts-ignore
                        getQualifier(typeName: string): org.springframework.beans.factory.support.AutowireCandidateQualifier
                        /**
                         * Return all registered qualifiers.
                         * @return the Set of {#link AutowireCandidateQualifier} objects.
                         */
                        // @ts-ignore
                        getQualifiers(): java.util.Set<org.springframework.beans.factory.support.AutowireCandidateQualifier>
                        /**
                         * Copy the qualifiers from the supplied AbstractBeanDefinition to this bean definition.
                         * @param source the AbstractBeanDefinition to copy from
                         */
                        // @ts-ignore
                        copyQualifiersFrom(source: org.springframework.beans.factory.support.AbstractBeanDefinition): void
                        /**
                         * Specify a callback for creating an instance of the bean,
                         * as an alternative to a declaratively specified factory method.
                         * <p>If such a callback is set, it will override any other constructor
                         * or factory method metadata. However, bean property population and
                         * potential annotation-driven injection will still apply as usual.
                         * @since 5.0
                         * @see #setConstructorArgumentValues(ConstructorArgumentValues)
                         * @see #setPropertyValues(MutablePropertyValues)
                         */
                        // @ts-ignore
                        setInstanceSupplier(instanceSupplier: java.util.function.Supplier<any> | java.util.function$.Supplier<?>): void
                        /**
                         * Return a callback for creating an instance of the bean, if any.
                         * @since 5.0
                         */
                        // @ts-ignore
                        getInstanceSupplier(): java.util.function.Supplier<?>
                        /**
                         * Specify whether to allow access to non-public constructors and methods,
                         * for the case of externalized metadata pointing to those. The default is
                         * {@code true}; switch this to {@code false} for public access only.
                         * <p>This applies to constructor resolution, factory method resolution,
                         * and also init/destroy methods. Bean property accessors have to be public
                         * in any case and are not affected by this setting.
                         * <p>Note that annotation-driven configuration will still access non-public
                         * members as far as they have been annotated. This setting applies to
                         * externalized metadata in this bean definition only.
                         */
                        // @ts-ignore
                        setNonPublicAccessAllowed(nonPublicAccessAllowed: boolean): void
                        /**
                         * Return whether to allow access to non-public constructors and methods.
                         */
                        // @ts-ignore
                        isNonPublicAccessAllowed(): boolean
                        /**
                         * Specify whether to resolve constructors in lenient mode ({@code true},
                         * which is the default) or to switch to strict resolution (throwing an exception
                         * in case of ambiguous constructors that all match when converting the arguments,
                         * whereas lenient mode would use the one with the 'closest' type matches).
                         */
                        // @ts-ignore
                        setLenientConstructorResolution(lenientConstructorResolution: boolean): void
                        /**
                         * Return whether to resolve constructors in lenient mode or in strict mode.
                         */
                        // @ts-ignore
                        isLenientConstructorResolution(): boolean
                        /**
                         * Specify the factory bean to use, if any.
                         * This the name of the bean to call the specified factory method on.
                         * @see #setFactoryMethodName
                         */
                        // @ts-ignore
                        setFactoryBeanName(factoryBeanName: string): void
                        /**
                         * Return the factory bean name, if any.
                         */
                        // @ts-ignore
                        getFactoryBeanName(): java.lang.String
                        /**
                         * Specify a factory method, if any. This method will be invoked with
                         * constructor arguments, or with no arguments if none are specified.
                         * The method will be invoked on the specified factory bean, if any,
                         * or otherwise as a static method on the local bean class.
                         * @see #setFactoryBeanName
                         * @see #setBeanClassName
                         */
                        // @ts-ignore
                        setFactoryMethodName(factoryMethodName: string): void
                        /**
                         * Return a factory method, if any.
                         */
                        // @ts-ignore
                        getFactoryMethodName(): java.lang.String
                        /**
                         * Specify constructor argument values for this bean.
                         */
                        // @ts-ignore
                        setConstructorArgumentValues(constructorArgumentValues: org.springframework.beans.factory.config.ConstructorArgumentValues): void
                        /**
                         * Return constructor argument values for this bean (never {@code null}).
                         */
                        // @ts-ignore
                        getConstructorArgumentValues(): org.springframework.beans.factory.config.ConstructorArgumentValues
                        /**
                         * Return if there are constructor argument values defined for this bean.
                         */
                        // @ts-ignore
                        hasConstructorArgumentValues(): boolean
                        /**
                         * Specify property values for this bean, if any.
                         */
                        // @ts-ignore
                        setPropertyValues(propertyValues: org.springframework.beans.MutablePropertyValues): void
                        /**
                         * Return property values for this bean (never {@code null}).
                         */
                        // @ts-ignore
                        getPropertyValues(): org.springframework.beans.MutablePropertyValues
                        /**
                         * Return if there are property values values defined for this bean.
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        hasPropertyValues(): boolean
                        /**
                         * Specify method overrides for the bean, if any.
                         */
                        // @ts-ignore
                        setMethodOverrides(methodOverrides: org.springframework.beans.factory.support.MethodOverrides): void
                        /**
                         * Return information about methods to be overridden by the IoC
                         * container. This will be empty if there are no method overrides.
                         * <p>Never returns {@code null}.
                         */
                        // @ts-ignore
                        getMethodOverrides(): org.springframework.beans.factory.support.MethodOverrides
                        /**
                         * Return if there are method overrides defined for this bean.
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        hasMethodOverrides(): boolean
                        /**
                         * Set the name of the initializer method.
                         * <p>The default is {@code null} in which case there is no initializer method.
                         */
                        // @ts-ignore
                        setInitMethodName(initMethodName: string): void
                        /**
                         * Return the name of the initializer method.
                         */
                        // @ts-ignore
                        getInitMethodName(): java.lang.String
                        /**
                         * Specify whether or not the configured init method is the default.
                         * <p>The default value is {@code false}.
                         * @see #setInitMethodName
                         */
                        // @ts-ignore
                        setEnforceInitMethod(enforceInitMethod: boolean): void
                        /**
                         * Indicate whether the configured init method is the default.
                         * @see #getInitMethodName()
                         */
                        // @ts-ignore
                        isEnforceInitMethod(): boolean
                        /**
                         * Set the name of the destroy method.
                         * <p>The default is {@code null} in which case there is no destroy method.
                         */
                        // @ts-ignore
                        setDestroyMethodName(destroyMethodName: string): void
                        /**
                         * Return the name of the destroy method.
                         */
                        // @ts-ignore
                        getDestroyMethodName(): java.lang.String
                        /**
                         * Specify whether or not the configured destroy method is the default.
                         * <p>The default value is {@code false}.
                         * @see #setDestroyMethodName
                         */
                        // @ts-ignore
                        setEnforceDestroyMethod(enforceDestroyMethod: boolean): void
                        /**
                         * Indicate whether the configured destroy method is the default.
                         * @see #getDestroyMethodName
                         */
                        // @ts-ignore
                        isEnforceDestroyMethod(): boolean
                        /**
                         * Set whether this bean definition is 'synthetic', that is, not defined
                         * by the application itself (for example, an infrastructure bean such
                         * as a helper for auto-proxying, created through {@code <aop:config>}).
                         */
                        // @ts-ignore
                        setSynthetic(synthetic: boolean): void
                        /**
                         * Return whether this bean definition is 'synthetic', that is,
                         * not defined by the application itself.
                         */
                        // @ts-ignore
                        isSynthetic(): boolean
                        /**
                         * Set the role hint for this {@code BeanDefinition}.
                         */
                        // @ts-ignore
                        setRole(role: number /*int*/): void
                        /**
                         * Return the role hint for this {@code BeanDefinition}.
                         */
                        // @ts-ignore
                        getRole(): int
                        /**
                         * Set a human-readable description of this bean definition.
                         */
                        // @ts-ignore
                        setDescription(description: string): void
                        /**
                         * Return a human-readable description of this bean definition.
                         */
                        // @ts-ignore
                        getDescription(): java.lang.String
                        /**
                         * Set the resource that this bean definition came from
                         * (for the purpose of showing context in case of errors).
                         */
                        // @ts-ignore
                        setResource(resource: Resource): void
                        /**
                         * Return the resource that this bean definition came from.
                         */
                        // @ts-ignore
                        getResource(): Resource
                        /**
                         * Set a description of the resource that this bean definition
                         * came from (for the purpose of showing context in case of errors).
                         */
                        // @ts-ignore
                        setResourceDescription(resourceDescription: string): void
                        /**
                         * Return a description of the resource that this bean definition
                         * came from (for the purpose of showing context in case of errors).
                         */
                        // @ts-ignore
                        getResourceDescription(): java.lang.String
                        /**
                         * Set the originating (e.g. decorated) BeanDefinition, if any.
                         */
                        // @ts-ignore
                        setOriginatingBeanDefinition(originatingBd: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Return the originating BeanDefinition, or {@code null} if none.
                         * Allows for retrieving the decorated bean definition, if any.
                         * <p>Note that this method returns the immediate originator. Iterate through the
                         * originator chain to find the original BeanDefinition as defined by the user.
                         */
                        // @ts-ignore
                        getOriginatingBeanDefinition(): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Validate this bean definition.
                         * @throws BeanDefinitionValidationException in case of validation failure
                         */
                        // @ts-ignore
                        validate(): void
                        /**
                         * Validate and prepare the method overrides defined for this bean.
                         * Checks for existence of a method with the specified name.
                         * @throws BeanDefinitionValidationException in case of validation failure
                         */
                        // @ts-ignore
                        prepareMethodOverrides(): void
                        /**
                         * Validate and prepare the given method override.
                         * Checks for existence of a method with the specified name,
                         * marking it as not overloaded if none found.
                         * @param mo the MethodOverride object to validate
                         * @throws BeanDefinitionValidationException in case of validation failure
                         */
                        // @ts-ignore
                        prepareMethodOverride(mo: org.springframework.beans.factory.support.MethodOverride): void
                        /**
                         * Public declaration of Object's {@code clone()} method.
                         * Delegates to {@link #cloneBeanDefinition()}.
                         * @see Object#clone()
                         */
                        // @ts-ignore
                        clone(): java.lang.Object
                        /**
                         * Clone this bean definition.
                         * To be implemented by concrete subclasses.
                         * @return the cloned bean definition object
                         */
                        // @ts-ignore
                        abstract cloneBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
