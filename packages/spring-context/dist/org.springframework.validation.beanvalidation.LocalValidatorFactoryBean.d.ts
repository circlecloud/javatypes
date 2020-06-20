declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * This is the central class for {@code javax.validation} (JSR-303) setup in a Spring
                 * application context: It bootstraps a {@code javax.validation.ValidationFactory} and
                 * exposes it through the Spring {@link org.springframework.validation.Validator} interface
                 * as well as through the JSR-303 {@link javax.validation.Validator} interface and the
                 * {@link javax.validation.ValidatorFactory} interface itself.
                 * <p>When talking to an instance of this bean through the Spring or JSR-303 Validator interfaces,
                 * you'll be talking to the default Validator of the underlying ValidatorFactory. This is very
                 * convenient in that you don't have to perform yet another call on the factory, assuming that
                 * you will almost always use the default Validator anyway. This can also be injected directly
                 * into any target dependency of type {@link org.springframework.validation.Validator}!
                 * <p><b>As of Spring 5.0, this class requires Bean Validation 1.1+, with special support
                 * for Hibernate Validator 5.x</b> (see {@link #setValidationMessageSource}).
                 * This class is also runtime-compatible with Bean Validation 2.0 and Hibernate Validator 6.0,
                 * with one special note: If you'd like to call BV 2.0's {@code getClockProvider()} method,
                 * obtain the native {@code ValidatorFactory} through {@code #unwrap(ValidatorFactory.class)}
                 * and call the {@code getClockProvider()} method on the returned native reference there.
                 * <p>This class is also being used by Spring's MVC configuration namespace, in case of the
                 * {@code javax.validation} API being present but no explicit Validator having been configured.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see javax.validation.ValidatorFactory
                 * @see javax.validation.Validator
                 * @see javax.validation.Validation#buildDefaultValidatorFactory()
                 * @see javax.validation.ValidatorFactory#getValidator()
                 */
                // @ts-ignore
                class LocalValidatorFactoryBean extends org.springframework.validation.beanvalidation.SpringValidatorAdapter implements org.springframework.context.ApplicationContextAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify the desired provider class, if any.
                     * <p>If not specified, JSR-303's default search mechanism will be used.
                     * @see javax.validation.Validation#byProvider(Class)
                     * @see javax.validation.Validation#byDefaultProvider()
                     */
                    // @ts-ignore
                    setProviderClass(providerClass: java.lang.Class): void
                    /**
                     * Specify a JSR-303 {@link ValidationProviderResolver} for bootstrapping the
                     * provider of choice, as an alternative to {@code META-INF} driven resolution.
                     * @since 4.3
                     */
                    // @ts-ignore
                    setValidationProviderResolver(validationProviderResolver: ValidationProviderResolver): void
                    /**
                     * Specify a custom MessageInterpolator to use for this ValidatorFactory
                     * and its exposed default Validator.
                     */
                    // @ts-ignore
                    setMessageInterpolator(messageInterpolator: MessageInterpolator): void
                    /**
                     * Specify a custom Spring MessageSource for resolving validation messages,
                     * instead of relying on JSR-303's default "ValidationMessages.properties" bundle
                     * in the classpath. This may refer to a Spring context's shared "messageSource" bean,
                     * or to some special MessageSource setup for validation purposes only.
                     * <p><b>NOTE:</b> This feature requires Hibernate Validator 4.3 or higher on the classpath.
                     * You may nevertheless use a different validation provider but Hibernate Validator's
                     * {@link ResourceBundleMessageInterpolator} class must be accessible during configuration.
                     * <p>Specify either this property or {@link #setMessageInterpolator "messageInterpolator"},
                     * not both. If you would like to build a custom MessageInterpolator, consider deriving from
                     * Hibernate Validator's {@link ResourceBundleMessageInterpolator} and passing in a
                     * Spring-based {@code ResourceBundleLocator} when constructing your interpolator.
                     * <p>In order for Hibernate's default validation messages to be resolved still, your
                     * {@link MessageSource} must be configured for optional resolution (usually the default).
                     * In particular, the {@code MessageSource} instance specified here should not apply
                     * {@link org.springframework.context.support.AbstractMessageSource#setUseCodeAsDefaultMessage
                     * "useCodeAsDefaultMessage"} behavior. Please double-check your setup accordingly.
                     * @see ResourceBundleMessageInterpolator
                     */
                    // @ts-ignore
                    setValidationMessageSource(messageSource: org.springframework.context.MessageSource): void
                    /**
                     * Specify a custom TraversableResolver to use for this ValidatorFactory
                     * and its exposed default Validator.
                     */
                    // @ts-ignore
                    setTraversableResolver(traversableResolver: TraversableResolver): void
                    /**
                     * Specify a custom ConstraintValidatorFactory to use for this ValidatorFactory.
                     * <p>Default is a {@link SpringConstraintValidatorFactory}, delegating to the
                     * containing ApplicationContext for creating autowired ConstraintValidator instances.
                     */
                    // @ts-ignore
                    setConstraintValidatorFactory(constraintValidatorFactory: ConstraintValidatorFactory): void
                    /**
                     * Set the ParameterNameDiscoverer to use for resolving method and constructor
                     * parameter names if needed for message interpolation.
                     * <p>Default is a {@link org.springframework.core.DefaultParameterNameDiscoverer}.
                     */
                    // @ts-ignore
                    setParameterNameDiscoverer(parameterNameDiscoverer: ParameterNameDiscoverer): void
                    /**
                     * Specify resource locations to load XML constraint mapping files from, if any.
                     */
                    // @ts-ignore
                    setMappingLocations(...mappingLocations: Resource[]): void
                    /**
                     * Specify bean validation properties to be passed to the validation provider.
                     * <p>Can be populated with a String "value" (parsed via PropertiesEditor)
                     * or a "props" element in XML bean definitions.
                     * @see javax.validation.Configuration#addProperty(String, String)
                     */
                    // @ts-ignore
                    setValidationProperties(jpaProperties: java.util.Properties): void
                    /**
                     * Specify bean validation properties to be passed to the validation provider as a Map.
                     * <p>Can be populated with a "map" or "props" element in XML bean definitions.
                     * @see javax.validation.Configuration#addProperty(String, String)
                     */
                    // @ts-ignore
                    setValidationPropertyMap(validationProperties: java.util.Map<java.lang.String, java.lang.String>): void
                    /**
                     * Allow Map access to the bean validation properties to be passed to the validation provider,
                     * with the option to add or override specific entries.
                     * <p>Useful for specifying entries directly, for example via "validationPropertyMap[myKey]".
                     */
                    // @ts-ignore
                    getValidationPropertyMap(): java.util.Map<java.lang.String, java.lang.String>
                    // @ts-ignore
                    setApplicationContext(applicationContext: org.springframework.context.ApplicationContext): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Post-process the given Bean Validation configuration,
                     * adding to or overriding any of its settings.
                     * <p>Invoked right before building the {@link ValidatorFactory}.
                     * @param configuration the Configuration object, pre-populated with
                     *  settings driven by LocalValidatorFactoryBean's properties
                     */
                    // @ts-ignore
                    postProcessConfiguration(configuration: object): void
                    // @ts-ignore
                    getValidator(): Validator
                    // @ts-ignore
                    usingContext(): ValidatorContext
                    // @ts-ignore
                    getMessageInterpolator(): MessageInterpolator
                    // @ts-ignore
                    getTraversableResolver(): TraversableResolver
                    // @ts-ignore
                    getConstraintValidatorFactory(): ConstraintValidatorFactory
                    // @ts-ignore
                    getParameterNameProvider(): ParameterNameProvider
                    // @ts-ignore
                    unwrap<T>(type: java.lang.Class<T>): T
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
