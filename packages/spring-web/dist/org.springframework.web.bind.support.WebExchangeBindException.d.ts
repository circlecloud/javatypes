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
                        public getBindingResult(): BindingResult
                        // @ts-ignore
                        public getObjectName(): string
                        // @ts-ignore
                        public setNestedPath(nestedPath: java.lang.String | string): void
                        // @ts-ignore
                        public getNestedPath(): string
                        // @ts-ignore
                        public pushNestedPath(subPath: java.lang.String | string): void
                        // @ts-ignore
                        public popNestedPath(): void
                        // @ts-ignore
                        public reject(errorCode: java.lang.String | string): void
                        // @ts-ignore
                        public reject(errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                        // @ts-ignore
                        public reject(errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                        // @ts-ignore
                        public rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string): void
                        // @ts-ignore
                        public rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                        // @ts-ignore
                        public rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                        // @ts-ignore
                        public addAllErrors(errors: Errors): void
                        // @ts-ignore
                        public hasErrors(): boolean
                        // @ts-ignore
                        public getErrorCount(): number /*int*/
                        // @ts-ignore
                        public getAllErrors(): Array<ObjectError>
                        // @ts-ignore
                        public hasGlobalErrors(): boolean
                        // @ts-ignore
                        public getGlobalErrorCount(): number /*int*/
                        // @ts-ignore
                        public getGlobalErrors(): Array<ObjectError>
                        // @ts-ignore
                        public getGlobalError(): ObjectError
                        // @ts-ignore
                        public hasFieldErrors(): boolean
                        // @ts-ignore
                        public getFieldErrorCount(): number /*int*/
                        // @ts-ignore
                        public getFieldErrors(): Array<FieldError>
                        // @ts-ignore
                        public getFieldError(): FieldError
                        // @ts-ignore
                        public hasFieldErrors(field: java.lang.String | string): boolean
                        // @ts-ignore
                        public getFieldErrorCount(field: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public getFieldErrors(field: java.lang.String | string): Array<FieldError>
                        // @ts-ignore
                        public getFieldError(field: java.lang.String | string): FieldError
                        // @ts-ignore
                        public getFieldValue(field: java.lang.String | string): any
                        // @ts-ignore
                        public getFieldType(field: java.lang.String | string): java.lang.Class<any>
                        // @ts-ignore
                        public getTarget(): any
                        // @ts-ignore
                        public getModel(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public getRawFieldValue(field: java.lang.String | string): any
                        // @ts-ignore
                        public findEditor(field: java.lang.String | string, valueType: java.lang.Class<any>): java.beans.PropertyEditor
                        // @ts-ignore
                        public getPropertyEditorRegistry(): PropertyEditorRegistry
                        // @ts-ignore
                        public resolveMessageCodes(errorCode: java.lang.String | string): string[]
                        // @ts-ignore
                        public resolveMessageCodes(errorCode: java.lang.String | string, field: java.lang.String | string): string[]
                        // @ts-ignore
                        public addError(error: ObjectError): void
                        // @ts-ignore
                        public recordFieldValue(field: java.lang.String | string, type: java.lang.Class<any>, value: java.lang.Object | any): void
                        // @ts-ignore
                        public recordSuppressedField(field: java.lang.String | string): void
                        // @ts-ignore
                        public getSuppressedFields(): string[]
                        /**
                         * Returns diagnostic information about the errors held in this object.
                         */
                        // @ts-ignore
                        public getMessage(): string
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
