declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * A specialization of {@link ServerWebInputException} thrown when after data
                     * binding and validation failure. Implements {@link BindingResult} (and its
                     * super-interface {@link Errors}) to allow for direct analysis of binding and
                     * validation errors.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class WebExchangeBindException extends org.springframework.web.server.ServerWebInputException {
                        // @ts-ignore
                        constructor(parameter: MethodParameter, bindingResult: BindingResult)
                        /**
                         * Return the BindingResult that this BindException wraps.
                         * Will typically be a BeanPropertyBindingResult.
                         * @see BeanPropertyBindingResult
                         */
                        // @ts-ignore
                        getBindingResult(): BindingResult
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
                        addAllErrors(errors: Errors): void
                        // @ts-ignore
                        hasErrors(): boolean
                        // @ts-ignore
                        getErrorCount(): int
                        // @ts-ignore
                        getAllErrors(): java.util.List<ObjectError>
                        // @ts-ignore
                        hasGlobalErrors(): boolean
                        // @ts-ignore
                        getGlobalErrorCount(): int
                        // @ts-ignore
                        getGlobalErrors(): java.util.List<ObjectError>
                        // @ts-ignore
                        getGlobalError(): ObjectError
                        // @ts-ignore
                        hasFieldErrors(): boolean
                        // @ts-ignore
                        getFieldErrorCount(): int
                        // @ts-ignore
                        getFieldErrors(): java.util.List<FieldError>
                        // @ts-ignore
                        getFieldError(): FieldError
                        // @ts-ignore
                        hasFieldErrors(field: string): boolean
                        // @ts-ignore
                        getFieldErrorCount(field: string): int
                        // @ts-ignore
                        getFieldErrors(field: string): java.util.List<FieldError>
                        // @ts-ignore
                        getFieldError(field: string): FieldError
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
                        addError(error: ObjectError): void
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
    }
}
