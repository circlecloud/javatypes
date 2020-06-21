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
                constructor(target: java.lang.Object | any, objectName: java.lang.String | string)
                /**
                 * Return the BindingResult that this BindException wraps.
                 * Will typically be a BeanPropertyBindingResult.
                 * @see BeanPropertyBindingResult
                 */
                // @ts-ignore
                getBindingResult(): org.springframework.validation.BindingResult
                // @ts-ignore
                getObjectName(): string
                // @ts-ignore
                setNestedPath(nestedPath: java.lang.String | string): void
                // @ts-ignore
                getNestedPath(): string
                // @ts-ignore
                pushNestedPath(subPath: java.lang.String | string): void
                // @ts-ignore
                popNestedPath(): void
                // @ts-ignore
                reject(errorCode: java.lang.String | string): void
                // @ts-ignore
                reject(errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                // @ts-ignore
                reject(errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                // @ts-ignore
                rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string): void
                // @ts-ignore
                rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                // @ts-ignore
                rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                // @ts-ignore
                addAllErrors(errors: org.springframework.validation.Errors): void
                // @ts-ignore
                hasErrors(): boolean
                // @ts-ignore
                getErrorCount(): number /*int*/
                // @ts-ignore
                getAllErrors(): Array<org.springframework.validation.ObjectError>
                // @ts-ignore
                hasGlobalErrors(): boolean
                // @ts-ignore
                getGlobalErrorCount(): number /*int*/
                // @ts-ignore
                getGlobalErrors(): Array<org.springframework.validation.ObjectError>
                // @ts-ignore
                getGlobalError(): org.springframework.validation.ObjectError
                // @ts-ignore
                hasFieldErrors(): boolean
                // @ts-ignore
                getFieldErrorCount(): number /*int*/
                // @ts-ignore
                getFieldErrors(): Array<org.springframework.validation.FieldError>
                // @ts-ignore
                getFieldError(): org.springframework.validation.FieldError
                // @ts-ignore
                hasFieldErrors(field: java.lang.String | string): boolean
                // @ts-ignore
                getFieldErrorCount(field: java.lang.String | string): number /*int*/
                // @ts-ignore
                getFieldErrors(field: java.lang.String | string): Array<org.springframework.validation.FieldError>
                // @ts-ignore
                getFieldError(field: java.lang.String | string): org.springframework.validation.FieldError
                // @ts-ignore
                getFieldValue(field: java.lang.String | string): any
                // @ts-ignore
                getFieldType(field: java.lang.String | string): java.lang.Class<any>
                // @ts-ignore
                getTarget(): any
                // @ts-ignore
                getModel(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                getRawFieldValue(field: java.lang.String | string): any
                // @ts-ignore
                findEditor(field: java.lang.String | string, valueType: java.lang.Class<any>): java.beans.PropertyEditor
                // @ts-ignore
                getPropertyEditorRegistry(): PropertyEditorRegistry
                // @ts-ignore
                resolveMessageCodes(errorCode: java.lang.String | string): string[]
                // @ts-ignore
                resolveMessageCodes(errorCode: java.lang.String | string, field: java.lang.String | string): string[]
                // @ts-ignore
                addError(error: org.springframework.validation.ObjectError): void
                // @ts-ignore
                recordFieldValue(field: java.lang.String | string, type: java.lang.Class<any>, value: java.lang.Object | any): void
                // @ts-ignore
                recordSuppressedField(field: java.lang.String | string): void
                // @ts-ignore
                getSuppressedFields(): string[]
                /**
                 * Returns diagnostic information about the errors held in this object.
                 */
                // @ts-ignore
                getMessage(): string
                // @ts-ignore
                equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                hashCode(): number /*int*/
            }
        }
    }
}
