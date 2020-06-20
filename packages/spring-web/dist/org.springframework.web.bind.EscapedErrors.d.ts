declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * Errors wrapper that adds automatic HTML escaping to the wrapped instance,
                 * for convenient usage in HTML views. Can be retrieved easily via
                 * RequestContext's {@code getErrors} method.
                 * <p>Note that BindTag does <i>not</i> use this class to avoid unnecessary
                 * creation of ObjectError instances. It just escapes the messages and values
                 * that get copied into the respective BindStatus instance.
                 * @author Juergen Hoeller
                 * @since 01.03.2003
                 * @see org.springframework.web.servlet.support.RequestContext#getErrors
                 * @see org.springframework.web.servlet.tags.BindTag
                 */
                // @ts-ignore
                class EscapedErrors extends java.lang.Object {
                    /**
                     * Create a new EscapedErrors instance for the given source instance.
                     */
                    // @ts-ignore
                    constructor(source: Errors)
                    // @ts-ignore
                    getSource(): Errors
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
                }
            }
        }
    }
}
