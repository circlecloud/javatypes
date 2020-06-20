declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * An AOP Alliance {@link MethodInterceptor} implementation that delegates to a
                 * JSR-303 provider for performing method-level validation on annotated methods.
                 * <p>Applicable methods have JSR-303 constraint annotations on their parameters
                 * and/or on their return value (in the latter case specified at the method level,
                 * typically as inline annotation).
                 * <p>E.g.: {@code public @NotNull Object myValidMethod(@NotNull String arg1, @Max(10) int arg2)}
                 * <p>Validation groups can be specified through Spring's {@link Validated} annotation
                 * at the type level of the containing target class, applying to all public service methods
                 * of that class. By default, JSR-303 will validate against its default group only.
                 * <p>As of Spring 5.0, this functionality requires a Bean Validation 1.1 provider.
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see MethodValidationPostProcessor
                 * @see javax.validation.executable.ExecutableValidator
                 */
                // @ts-ignore
                class MethodValidationInterceptor extends java.lang.Object {
                    /**
                     * Create a new MethodValidationInterceptor using a default JSR-303 validator underneath.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new MethodValidationInterceptor using the given JSR-303 ValidatorFactory.
                     * @param validatorFactory the JSR-303 ValidatorFactory to use
                     */
                    // @ts-ignore
                    constructor(validatorFactory: ValidatorFactory)
                    /**
                     * Create a new MethodValidationInterceptor using the given JSR-303 Validator.
                     * @param validator the JSR-303 Validator to use
                     */
                    // @ts-ignore
                    constructor(validator: Validator)
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Determine the validation groups to validate against for the given method invocation.
                     * <p>Default are the validation groups as specified in the {@link Validated} annotation
                     * on the containing target class of the method.
                     * @param invocation the current MethodInvocation
                     * @return the applicable validation groups as a Class array
                     */
                    // @ts-ignore
                    determineValidationGroups(invocation: MethodInvocation): java.lang.Class[]
                }
            }
        }
    }
}
