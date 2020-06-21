declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * A convenient {@link BeanPostProcessor} implementation that delegates to a
                 * JSR-303 provider for performing method-level validation on annotated methods.
                 * <p>Applicable methods have JSR-303 constraint annotations on their parameters
                 * and/or on their return value (in the latter case specified at the method level,
                 * typically as inline annotation), e.g.:
                 * <pre class="code">
                 * public @NotNull Object myValidMethod(@NotNull String arg1, @Max(10) int arg2)
                 * </pre>
                 * <p>Target classes with such annotated methods need to be annotated with Spring's
                 * {@link Validated} annotation at the type level, for their methods to be searched for
                 * inline constraint annotations. Validation groups can be specified through {@code @Validated}
                 * as well. By default, JSR-303 will validate against its default group only.
                 * <p>As of Spring 5.0, this functionality requires a Bean Validation 1.1 provider.
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see MethodValidationInterceptor
                 * @see javax.validation.executable.ExecutableValidator
                 */
                // @ts-ignore
                class MethodValidationPostProcessor extends AbstractBeanFactoryAwareAdvisingPostProcessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the 'validated' annotation type.
                     * The default validated annotation type is the {@link Validated} annotation.
                     * <p>This setter property exists so that developers can provide their own
                     * (non-Spring-specific) annotation type to indicate that a class is supposed
                     * to be validated in the sense of applying method validation.
                     * @param validatedAnnotationType the desired annotation type
                     */
                    // @ts-ignore
                    public setValidatedAnnotationType(validatedAnnotationType: java.lang.Class<any>): void
                    /**
                     * Set the JSR-303 Validator to delegate to for validating methods.
                     * <p>Default is the default ValidatorFactory's default Validator.
                     */
                    // @ts-ignore
                    public setValidator(validator: Validator): void
                    /**
                     * Set the JSR-303 ValidatorFactory to delegate to for validating methods,
                     * using its default Validator.
                     * <p>Default is the default ValidatorFactory's default Validator.
                     * @see javax.validation.ValidatorFactory#getValidator()
                     */
                    // @ts-ignore
                    public setValidatorFactory(validatorFactory: ValidatorFactory): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Create AOP advice for method validation purposes, to be applied
                     * with a pointcut for the specified 'validated' annotation.
                     * @param validator the JSR-303 Validator to delegate to
                     * @return the interceptor to use (typically, but not necessarily,
                     *  a {#link MethodValidationInterceptor} or subclass thereof)
                     * @since 4.2
                     */
                    // @ts-ignore
                    createMethodValidationAdvice(validator: Validator): Advice
                }
            }
        }
    }
}
