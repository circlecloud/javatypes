declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * Adapter that takes a JSR-303 {@code javax.validator.Validator} and
                 * exposes it as a Spring {@link org.springframework.validation.Validator}
                 * while also exposing the original JSR-303 Validator interface itself.
                 * <p>Can be used as a programmatic wrapper. Also serves as base class for
                 * {@link CustomValidatorBean} and {@link LocalValidatorFactoryBean},
                 * and as the primary implementation of the {@link SmartValidator} interface.
                 * <p>As of Spring Framework 5.0, this adapter is fully compatible with
                 * Bean Validation 1.1 as well as 2.0.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see SmartValidator
                 * @see CustomValidatorBean
                 * @see LocalValidatorFactoryBean
                 */
                // @ts-ignore
                class SpringValidatorAdapter extends java.lang.Object implements org.springframework.validation.SmartValidator {
                    /**
                     * Create a new SpringValidatorAdapter for the given JSR-303 Validator.
                     * @param targetValidator the JSR-303 Validator to wrap
                     */
                    // @ts-ignore
                    constructor(targetValidator: javax.validation.Validator)
                    // @ts-ignore
                    public supports(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public validate(target: java.lang.Object | any, errors: org.springframework.validation.Errors): void
                    // @ts-ignore
                    public validate(target: java.lang.Object | any, errors: org.springframework.validation.Errors, ...validationHints: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public validateValue(targetType: java.lang.Class<any>, fieldName: java.lang.String | string, value: java.lang.Object | any, errors: org.springframework.validation.Errors, ...validationHints: java.lang.Object[] | any[]): void
                    /**
                     * Process the given JSR-303 ConstraintViolations, adding corresponding errors to
                     * the provided Spring {@link Errors} object.
                     * @param violations the JSR-303 ConstraintViolation results
                     * @param errors the Spring errors object to register to
                     */
                    // @ts-ignore
                    processConstraintViolations(violations: java.util.Set<object> | Array<object>, errors: org.springframework.validation.Errors): void
                    /**
                     * Determine a field for the given constraint violation.
                     * <p>The default implementation returns the stringified property path.
                     * @param violation the current JSR-303 ConstraintViolation
                     * @return the Spring-reported field (for use with {#link Errors})
                     * @since 4.2
                     * @see javax.validation.ConstraintViolation#getPropertyPath()
                     * @see org.springframework.validation.FieldError#getField()
                     */
                    // @ts-ignore
                    determineField(violation: object): string
                    /**
                     * Determine a Spring-reported error code for the given constraint descriptor.
                     * <p>The default implementation returns the simple class name of the descriptor's
                     * annotation type. Note that the configured
                     * {@link org.springframework.validation.MessageCodesResolver} will automatically
                     * generate error code variations which include the object name and the field name.
                     * @param descriptor the JSR-303 ConstraintDescriptor for the current violation
                     * @return a corresponding error code (for use with {#link Errors})
                     * @since 4.2
                     * @see javax.validation.metadata.ConstraintDescriptor#getAnnotation()
                     * @see org.springframework.validation.MessageCodesResolver
                     */
                    // @ts-ignore
                    determineErrorCode(descriptor: object): string
                    /**
                     * Return FieldError arguments for a validation error on the given field.
                     * Invoked for each violated constraint.
                     * <p>The default implementation returns a first argument indicating the field name
                     * (see {@link #getResolvableField}). Afterwards, it adds all actual constraint
                     * annotation attributes (i.e. excluding "message", "groups" and "payload") in
                     * alphabetical order of their attribute names.
                     * <p>Can be overridden to e.g. add further attributes from the constraint descriptor.
                     * @param objectName the name of the target object
                     * @param field the field that caused the binding error
                     * @param descriptor the JSR-303 constraint descriptor
                     * @return the Object array that represents the FieldError arguments
                     * @see org.springframework.validation.FieldError#getArguments
                     * @see org.springframework.context.support.DefaultMessageSourceResolvable
                     * @see org.springframework.validation.DefaultBindingErrorProcessor#getArgumentsForBindError
                     */
                    // @ts-ignore
                    getArgumentsForConstraint(objectName: java.lang.String | string, field: java.lang.String | string, descriptor: object): any[]
                    /**
                     * Build a resolvable wrapper for the specified field, allowing to resolve the field's
                     * name in a {@code MessageSource}.
                     * <p>The default implementation returns a first argument indicating the field:
                     * of type {@code DefaultMessageSourceResolvable}, with "objectName.field" and "field"
                     * as codes, and with the plain field name as default message.
                     * @param objectName the name of the target object
                     * @param field the field that caused the binding error
                     * @return a corresponding {#code MessageSourceResolvable} for the specified field
                     * @since 4.3
                     * @see #getArgumentsForConstraint
                     */
                    // @ts-ignore
                    getResolvableField(objectName: java.lang.String | string, field: java.lang.String | string): org.springframework.context.MessageSourceResolvable
                    /**
                     * Extract the rejected value behind the given constraint violation,
                     * for exposure through the Spring errors representation.
                     * @param field the field that caused the binding error
                     * @param violation the corresponding JSR-303 ConstraintViolation
                     * @param bindingResult a Spring BindingResult for the backing object
                     *  which contains the current field's value
                     * @return the invalid value to expose as part of the field error
                     * @since 4.2
                     * @see javax.validation.ConstraintViolation#getInvalidValue()
                     * @see org.springframework.validation.FieldError#getRejectedValue()
                     */
                    // @ts-ignore
                    getRejectedValue(field: java.lang.String | string, violation: object, bindingResult: org.springframework.validation.BindingResult): any
                    /**
                     * Indicate whether this violation's interpolated message has remaining
                     * placeholders and therefore requires {@link java.text.MessageFormat}
                     * to be applied to it. Called for a Bean Validation defined message
                     * (coming out {@code ValidationMessages.properties}) when rendered
                     * as the default message in Spring's MessageSource.
                     * <p>The default implementation considers a Spring-style "{0}" placeholder
                     * for the field name as an indication for {@link java.text.MessageFormat}.
                     * Any other placeholder or escape syntax occurrences are typically a
                     * mismatch, coming out of regex pattern values or the like. Note that
                     * standard Bean Validation does not support "{0}" style placeholders at all;
                     * this is a feature typically used in Spring MessageSource resource bundles.
                     * @param violation the Bean Validation constraint violation, including
                     *  BV-defined interpolation of named attribute references in its message
                     * @return {#code true} if {@code java.text.MessageFormat} is to be applied,
                     *  or {@code false} if the violation's message should be used as-is
                     * @since 5.1.8
                     * @see #getArgumentsForConstraint
                     */
                    // @ts-ignore
                    requiresMessageFormat(violation: object): boolean
                    // @ts-ignore
                    public validate<T>(object: T, ...groups: java.lang.Class<any>[]): Array<object>
                    // @ts-ignore
                    public validateProperty<T>(object: T, propertyName: java.lang.String | string, ...groups: java.lang.Class<any>[]): Array<object>
                    // @ts-ignore
                    public validateValue<T>(beanType: java.lang.Class<T>, propertyName: java.lang.String | string, value: java.lang.Object | any, ...groups: java.lang.Class<any>[]): Array<object>
                    // @ts-ignore
                    public getConstraintsForClass(clazz: java.lang.Class<any>): BeanDescriptor
                    // @ts-ignore
                    public unwrap<T>(type: java.lang.Class<T>): T
                    // @ts-ignore
                    public forExecutables(): ExecutableValidator
                }
            }
        }
    }
}
