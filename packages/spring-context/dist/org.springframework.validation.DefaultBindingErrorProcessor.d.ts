declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Default {@link BindingErrorProcessor} implementation.
             * <p>Uses the "required" error code and the field name to resolve message codes
             * for a missing field error.
             * <p>Creates a {@code FieldError} for each {@code PropertyAccessException}
             * given, using the {@code PropertyAccessException}'s error code ("typeMismatch",
             * "methodInvocation") for resolving message codes.
             * @author Alef Arendsen
             * @author Juergen Hoeller
             * @since 1.2
             * @see #MISSING_FIELD_ERROR_CODE
             * @see DataBinder#setBindingErrorProcessor
             * @see BeanPropertyBindingResult#addError
             * @see BeanPropertyBindingResult#resolveMessageCodes
             * @see org.springframework.beans.PropertyAccessException#getErrorCode
             * @see org.springframework.beans.TypeMismatchException#ERROR_CODE
             * @see org.springframework.beans.MethodInvocationException#ERROR_CODE
             */
            // @ts-ignore
            class DefaultBindingErrorProcessor extends java.lang.Object implements org.springframework.validation.BindingErrorProcessor {
                // @ts-ignore
                constructor()
                /**
                 * Error code that a missing field error (i.e. a required field not
                 * found in the list of property values) will be registered with:
                 * "required".
                 */
                // @ts-ignore
                readonly MISSING_FIELD_ERROR_CODE: string
                // @ts-ignore
                processMissingFieldError(missingField: string, bindingResult: org.springframework.validation.BindingResult): void
                // @ts-ignore
                processPropertyAccessException(ex: PropertyAccessException, bindingResult: org.springframework.validation.BindingResult): void
                /**
                 * Return FieldError arguments for a binding error on the given field.
                 * Invoked for each missing required field and each type mismatch.
                 * <p>The default implementation returns a single argument indicating the field name
                 * (of type DefaultMessageSourceResolvable, with "objectName.field" and "field" as codes).
                 * @param objectName the name of the target object
                 * @param field the field that caused the binding error
                 * @return the Object array that represents the FieldError arguments
                 * @see org.springframework.validation.FieldError#getArguments
                 * @see org.springframework.context.support.DefaultMessageSourceResolvable
                 */
                // @ts-ignore
                getArgumentsForBindError(objectName: string, field: string): java.lang.Object[]
            }
        }
    }
}
