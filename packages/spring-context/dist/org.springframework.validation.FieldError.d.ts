declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Encapsulates a field error, that is, a reason for rejecting a specific
             * field value.
             * <p>See the {@link DefaultMessageCodesResolver} javadoc for details on
             * how a message code list is built for a {@code FieldError}.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 10.03.2003
             * @see DefaultMessageCodesResolver
             */
            // @ts-ignore
            class FieldError extends org.springframework.validation.ObjectError {
                /**
                 * Create a new FieldError instance.
                 * @param objectName the name of the affected object
                 * @param field the affected field of the object
                 * @param defaultMessage the default message to be used to resolve this message
                 */
                // @ts-ignore
                constructor(objectName: string, field: string, defaultMessage: string)
                /**
                 * Create a new FieldError instance.
                 * @param objectName the name of the affected object
                 * @param field the affected field of the object
                 * @param rejectedValue the rejected field value
                 * @param bindingFailure whether this error represents a binding failure
                 *  (like a type mismatch); else, it is a validation failure
                 * @param codes the codes to be used to resolve this message
                 * @param arguments the array of arguments to be used to resolve this message
                 * @param defaultMessage the default message to be used to resolve this message
                 */
                // @ts-ignore
                constructor(objectName: string, field: string, rejectedValue: any, bindingFailure: boolean, codes: string[], arguments: any[], defaultMessage: string)
                /**
                 * Return the affected field of the object.
                 */
                // @ts-ignore
                getField(): java.lang.String
                /**
                 * Return the rejected field value.
                 */
                // @ts-ignore
                getRejectedValue(): java.lang.Object
                /**
                 * Return whether this error represents a binding failure
                 * (like a type mismatch); otherwise it is a validation failure.
                 */
                // @ts-ignore
                isBindingFailure(): boolean
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
