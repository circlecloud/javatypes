declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Utility class offering convenient methods for invoking a {@link Validator}
             * and for rejecting empty fields.
             * <p>Checks for an empty field in {@code Validator} implementations can become
             * one-liners when using {@link #rejectIfEmpty} or {@link #rejectIfEmptyOrWhitespace}.
             * @author Juergen Hoeller
             * @author Dmitriy Kopylenko
             * @since 06.05.2003
             * @see Validator
             * @see Errors
             */
            // @ts-ignore
            abstract class ValidationUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoke the given {@link Validator} for the supplied object and
                 * {@link Errors} instance.
                 * @param validator the {#code Validator} to be invoked
                 * @param target the object to bind the parameters to
                 * @param errors the {#link Errors} instance that should store the errors
                 * @throws IllegalArgumentException if either of the {#code Validator} or {@code Errors}
                 *  arguments is {@code null}, or if the supplied {@code Validator} does not
                 *  {@link Validator#supports(Class) support} the validation of the supplied object's type
                 */
                // @ts-ignore
                public static invokeValidator(validator: org.springframework.validation.Validator, target: java.lang.Object | any, errors: org.springframework.validation.Errors): void
                /**
                 * Invoke the given {@link Validator}/{@link SmartValidator} for the supplied object and
                 * {@link Errors} instance.
                 * @param validator the {#code Validator} to be invoked
                 * @param target the object to bind the parameters to
                 * @param errors the {#link Errors} instance that should store the errors
                 * @param validationHints one or more hint objects to be passed to the validation engine
                 * @throws IllegalArgumentException if either of the {#code Validator} or {@code Errors}
                 *  arguments is {@code null}, or if the supplied {@code Validator} does not
                 *  {@link Validator#supports(Class) support} the validation of the supplied object's type
                 */
                // @ts-ignore
                public static invokeValidator(validator: org.springframework.validation.Validator, target: java.lang.Object | any, errors: org.springframework.validation.Errors, ...validationHints: java.lang.Object[] | any[]): void
                /**
                 * Reject the given field with the given error code if the value is empty.
                 * <p>An 'empty' value in this context means either {@code null} or
                 * the empty string "".
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 */
                // @ts-ignore
                public static rejectIfEmpty(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string): void
                /**
                 * Reject the given field with the given error code and default message
                 * if the value is empty.
                 * <p>An 'empty' value in this context means either {@code null} or
                 * the empty string "".
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode error code, interpretable as message key
                 * @param defaultMessage fallback default message
                 */
                // @ts-ignore
                public static rejectIfEmpty(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                /**
                 * Reject the given field with the given error code and error arguments
                 * if the value is empty.
                 * <p>An 'empty' value in this context means either {@code null} or
                 * the empty string "".
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 * @param errorArgs the error arguments, for argument binding via MessageFormat
                 *  (can be {#code null})
                 */
                // @ts-ignore
                public static rejectIfEmpty(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[]): void
                /**
                 * Reject the given field with the given error code, error arguments
                 * and default message if the value is empty.
                 * <p>An 'empty' value in this context means either {@code null} or
                 * the empty string "".
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 * @param errorArgs the error arguments, for argument binding via MessageFormat
                 *  (can be {#code null})
                 * @param defaultMessage fallback default message
                 */
                // @ts-ignore
                public static rejectIfEmpty(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                /**
                 * Reject the given field with the given error code if the value is empty
                 * or just contains whitespace.
                 * <p>An 'empty' value in this context means either {@code null},
                 * the empty string "", or consisting wholly of whitespace.
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 */
                // @ts-ignore
                public static rejectIfEmptyOrWhitespace(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string): void
                /**
                 * Reject the given field with the given error code and default message
                 * if the value is empty or just contains whitespace.
                 * <p>An 'empty' value in this context means either {@code null},
                 * the empty string "", or consisting wholly of whitespace.
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 * @param defaultMessage fallback default message
                 */
                // @ts-ignore
                public static rejectIfEmptyOrWhitespace(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                /**
                 * Reject the given field with the given error code and error arguments
                 * if the value is empty or just contains whitespace.
                 * <p>An 'empty' value in this context means either {@code null},
                 * the empty string "", or consisting wholly of whitespace.
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 * @param errorArgs the error arguments, for argument binding via MessageFormat
                 *  (can be {#code null})
                 */
                // @ts-ignore
                public static rejectIfEmptyOrWhitespace(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[]): void
                /**
                 * Reject the given field with the given error code, error arguments
                 * and default message if the value is empty or just contains whitespace.
                 * <p>An 'empty' value in this context means either {@code null},
                 * the empty string "", or consisting wholly of whitespace.
                 * <p>The object whose field is being validated does not need to be passed
                 * in because the {@link Errors} instance can resolve field values by itself
                 * (it will usually hold an internal reference to the target object).
                 * @param errors the {#code Errors} instance to register errors on
                 * @param field the field name to check
                 * @param errorCode the error code, interpretable as message key
                 * @param errorArgs the error arguments, for argument binding via MessageFormat
                 *  (can be {#code null})
                 * @param defaultMessage fallback default message
                 */
                // @ts-ignore
                public static rejectIfEmptyOrWhitespace(errors: org.springframework.validation.Errors, field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
            }
        }
    }
}
