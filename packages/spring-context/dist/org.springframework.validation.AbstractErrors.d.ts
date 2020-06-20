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
            class AbstractErrors extends java.lang.Object implements org.springframework.validation.Errors, java.io.Serializable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                setNestedPath(nestedPath: string): void
                // @ts-ignore
                getNestedPath(): java.lang.String
                // @ts-ignore
                pushNestedPath(subPath: string): void
                // @ts-ignore
                popNestedPath(): void
                /**
                 * Actually set the nested path.
                 * Delegated to by setNestedPath and pushNestedPath.
                 */
                // @ts-ignore
                doSetNestedPath(nestedPath: string): void
                /**
                 * Transform the given field into its full path,
                 * regarding the nested path of this instance.
                 */
                // @ts-ignore
                fixedField(field: string): java.lang.String
                /**
                 * Determine the canonical field name for the given field.
                 * <p>The default implementation simply returns the field name as-is.
                 * @param field the original field name
                 * @return the canonical field name
                 */
                // @ts-ignore
                canonicalFieldName(field: string): java.lang.String
                // @ts-ignore
                reject(errorCode: string): void
                // @ts-ignore
                reject(errorCode: string, defaultMessage: string): void
                // @ts-ignore
                rejectValue(field: string, errorCode: string): void
                // @ts-ignore
                rejectValue(field: string, errorCode: string, defaultMessage: string): void
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
                getGlobalError(): org.springframework.validation.ObjectError
                // @ts-ignore
                hasFieldErrors(): boolean
                // @ts-ignore
                getFieldErrorCount(): int
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
                getFieldType(field: string): java.lang.Class<?>
                /**
                 * Check whether the given FieldError matches the given field.
                 * @param field the field that we are looking up FieldErrors for
                 * @param fieldError the candidate FieldError
                 * @return whether the FieldError matches the given field
                 */
                // @ts-ignore
                isMatchingFieldError(field: string, fieldError: org.springframework.validation.FieldError): boolean
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
