declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Abstract implementation of the {@link Errors} interface. Provides common
             * access to evaluated errors; however, does not define concrete management
             * of {@link ObjectError ObjectErrors} and {@link FieldError FieldErrors}.
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @since 2.5.3
             */
            // @ts-ignore
            abstract class AbstractErrors extends java.lang.Object implements org.springframework.validation.Errors, java.io.Serializable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setNestedPath(nestedPath: java.lang.String | string): void
                // @ts-ignore
                public getNestedPath(): string
                // @ts-ignore
                public pushNestedPath(subPath: java.lang.String | string): void
                // @ts-ignore
                public popNestedPath(): void
                /**
                 * Actually set the nested path.
                 * Delegated to by setNestedPath and pushNestedPath.
                 */
                // @ts-ignore
                doSetNestedPath(nestedPath: java.lang.String | string): void
                /**
                 * Transform the given field into its full path,
                 * regarding the nested path of this instance.
                 */
                // @ts-ignore
                fixedField(field: java.lang.String | string): string
                /**
                 * Determine the canonical field name for the given field.
                 * <p>The default implementation simply returns the field name as-is.
                 * @param field the original field name
                 * @return the canonical field name
                 */
                // @ts-ignore
                canonicalFieldName(field: java.lang.String | string): string
                // @ts-ignore
                public reject(errorCode: java.lang.String | string): void
                // @ts-ignore
                public reject(errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                // @ts-ignore
                public rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string): void
                // @ts-ignore
                public rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string, defaultMessage: java.lang.String | string): void
                // @ts-ignore
                public hasErrors(): boolean
                // @ts-ignore
                public getErrorCount(): number /*int*/
                // @ts-ignore
                public getAllErrors(): Array<org.springframework.validation.ObjectError>
                // @ts-ignore
                public hasGlobalErrors(): boolean
                // @ts-ignore
                public getGlobalErrorCount(): number /*int*/
                // @ts-ignore
                public getGlobalError(): org.springframework.validation.ObjectError
                // @ts-ignore
                public hasFieldErrors(): boolean
                // @ts-ignore
                public getFieldErrorCount(): number /*int*/
                // @ts-ignore
                public getFieldError(): org.springframework.validation.FieldError
                // @ts-ignore
                public hasFieldErrors(field: java.lang.String | string): boolean
                // @ts-ignore
                public getFieldErrorCount(field: java.lang.String | string): number /*int*/
                // @ts-ignore
                public getFieldErrors(field: java.lang.String | string): Array<org.springframework.validation.FieldError>
                // @ts-ignore
                public getFieldError(field: java.lang.String | string): org.springframework.validation.FieldError
                // @ts-ignore
                public getFieldType(field: java.lang.String | string): java.lang.Class<any>
                /**
                 * Check whether the given FieldError matches the given field.
                 * @param field the field that we are looking up FieldErrors for
                 * @param fieldError the candidate FieldError
                 * @return whether the FieldError matches the given field
                 */
                // @ts-ignore
                isMatchingFieldError(field: java.lang.String | string, fieldError: org.springframework.validation.FieldError): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
