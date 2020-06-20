declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Thrown when binding errors are considered fatal. Implements the
             * {@link BindingResult} interface (and its super-interface {@link Errors})
             * to allow for the direct analysis of binding errors.
             * <p>As of Spring 2.0, this is a special-purpose class. Normally,
             * application code will work with the {@link BindingResult} interface,
             * or with a {@link DataBinder} that in turn exposes a BindingResult via
             * {@link org.springframework.validation.DataBinder#getBindingResult()}.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @see BindingResult
             * @see DataBinder#getBindingResult()
             * @see DataBinder#close()
             */
            // @ts-ignore
            class BindException extends java.lang.Exception implements org.springframework.validation.BindingResult {
                /**
                 * Create a new BindException instance for a BindingResult.
                 * @param bindingResult the BindingResult instance to wrap
                 */
                // @ts-ignore
                constructor(bindingResult: org.springframework.validation.BindingResult)
                /**
                 * Create a new BindException instance for a target bean.
                 * @param target the target bean to bind onto
                 * @param objectName the name of the target object
                 * @see BeanPropertyBindingResult
                 */
                // @ts-ignore
                constructor(target: any, objectName: string)
                /**
                 * Return the BindingResult that this BindException wraps.
                 * Will typically be a BeanPropertyBindingResult.
                 * @see BeanPropertyBindingResult
                 */
                // @ts-ignore
                getBindingResult(): org.springframework.validation.BindingResult
                // @ts-ignore
                getObjectName(): java.lang.String
                // @ts-ignore
                setNestedPath(nestedPath: string): void
                // @ts-ignore
                getNestedPath(): java.lang.String
                // @ts-ignore
                pushNestedPath(subPath: string): void
                // @ts-ignore
                popNestedPath(): void
                // @ts-ignore
                reject(errorCode: string): void
                // @ts-ignore
                reject(errorCode: string, defaultMessage: string): void
                // @ts-ignore
                reject(errorCode: string, errorArgs: any[], defaultMessage: string): void
                // @ts-ignore
                rejectValue(field: string, errorCode: string): void
                // @ts-ignore
                rejectValue(field: string, errorCode: string, defaultMessage: string): void
                // @ts-ignore
                rejectValue(field: string, errorCode: string, errorArgs: any[], defaultMessage: string): void
                // @ts-ignore
                addAllErrors(errors: org.springframework.validation.Errors): void
                // @ts-ignore
                hasErrors(): boolean
                // @ts-ignore
                getErrorCount(): int
                // @ts-ignore
                getAllErrors(): java.util.List<org.springframework.validation.ObjectError>
                // @ts-ignore
                hasGlobalErrors(): boolean
                // @ts-ignore
                getGlobalErrorCount(): int
                // @ts-ignore
                getGlobalErrors(): java.util.List<org.springframework.validation.ObjectError>
                // @ts-ignore
                getGlobalError(): org.springframework.validation.ObjectError
                // @ts-ignore
                hasFieldErrors(): boolean
                // @ts-ignore
                getFieldErrorCount(): int
                // @ts-ignore
                getFieldErrors(): java.util.List<org.springframework.validation.FieldError>
                // @ts-ignore
                getFieldError(): org.springframework.validation.FieldError
                // @ts-ignore
                hasFieldErrors(field: string): boolean
                // @ts-ignore
                getFieldErrorCount(field: string): int
                // @ts-ignore
                getFieldErrors(field: string): java.util.List<org.springframework.validation.FieldError>
                // @ts-ignore
                getFieldError(field: string): org.springframework.validation.FieldError
                // @ts-ignore
                getFieldValue(field: string): java.lang.Object
                // @ts-ignore
                getFieldType(field: string): java.lang.Class<?>
                // @ts-ignore
                getTarget(): java.lang.Object
                // @ts-ignore
                getModel(): java.util.Map<java.lang.String, java.lang.Object>
                // @ts-ignore
                getRawFieldValue(field: string): java.lang.Object
                // @ts-ignore
                findEditor(field: string, valueType: java.lang.Class): java.beans.PropertyEditor
                // @ts-ignore
                getPropertyEditorRegistry(): PropertyEditorRegistry
                // @ts-ignore
                resolveMessageCodes(errorCode: string): java.lang.String[]
                // @ts-ignore
                resolveMessageCodes(errorCode: string, field: string): java.lang.String[]
                // @ts-ignore
                addError(error: org.springframework.validation.ObjectError): void
                // @ts-ignore
                recordFieldValue(field: string, type: java.lang.Class<any>, value: any): void
                // @ts-ignore
                recordSuppressedField(field: string): void
                // @ts-ignore
                getSuppressedFields(): java.lang.String[]
                /**
                 * Returns diagnostic information about the errors held in this object.
                 */
                // @ts-ignore
                getMessage(): java.lang.String
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
