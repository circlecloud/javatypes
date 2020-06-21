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
                    public getSource(): Errors
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
                }
            }
        }
    }
}
