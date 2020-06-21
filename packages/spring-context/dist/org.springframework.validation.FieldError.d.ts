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
                constructor(objectName: java.lang.String | string, field: java.lang.String | string, defaultMessage: java.lang.String | string)
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
                constructor(objectName: java.lang.String | string, field: java.lang.String | string, rejectedValue: java.lang.Object | any, bindingFailure: boolean, codes: java.lang.String[] | string[], arguments: java.lang.Object[] | any[], defaultMessage: java.lang.String | string)
                /**
                 * Return the affected field of the object.
                 */
                // @ts-ignore
                public getField(): string
                /**
                 * Return the rejected field value.
                 */
                // @ts-ignore
                public getRejectedValue(): any
                /**
                 * Return whether this error represents a binding failure
                 * (like a type mismatch); otherwise it is a validation failure.
                 */
                // @ts-ignore
                public isBindingFailure(): boolean
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
