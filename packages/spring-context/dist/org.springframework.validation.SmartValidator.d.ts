declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Extended variant of the {@link Validator} interface, adding support for
             * validation 'hints'.
             * @author Juergen Hoeller
             * @author Sam Brannen
             * @since 3.1
             */
            // @ts-ignore
            interface SmartValidator extends org.springframework.validation.Validator {
                /**
                 * Validate the supplied {@code target} object, which must be of a type of {@link Class}
                 * for which the {@link #supports(Class)} method typically returns {@code true}.
                 * <p>The supplied {@link Errors errors} instance can be used to report any
                 * resulting validation errors.
                 * <p><b>This variant of {@code validate()} supports validation hints, such as
                 * validation groups against a JSR-303 provider</b> (in which case, the provided hint
                 * objects need to be annotation arguments of type {@code Class}).
                 * <p>Note: Validation hints may get ignored by the actual target {@code Validator},
                 * in which case this method should behave just like its regular
                 * {@link #validate(Object, Errors)} sibling.
                 * @param target the object that is to be validated
                 * @param errors contextual state about the validation process
                 * @param validationHints one or more hint objects to be passed to the validation engine
                 * @see javax.validation.Validator#validate(Object, Class[])
                 */
                // @ts-ignore
                validate(target: java.lang.Object | any, errors: org.springframework.validation.Errors, ...validationHints: java.lang.Object[] | any[]): void
                /**
                 * Validate the supplied value for the specified field on the target type,
                 * reporting the same validation errors as if the value would be bound to
                 * the field on an instance of the target class.
                 * @param targetType the target type
                 * @param fieldName the name of the field
                 * @param value the candidate value
                 * @param errors contextual state about the validation process
                 * @param validationHints one or more hint objects to be passed to the validation engine
                 * @since 5.1
                 * @see javax.validation.Validator#validateValue(Class, String, Object, Class[])
                 */
                // @ts-ignore
                validateValue(targetType: java.lang.Class<any>, fieldName: java.lang.String | string, value: java.lang.Object | any, errors: org.springframework.validation.Errors, ...validationHints: java.lang.Object[] | any[]): void
            }
        }
    }
}
