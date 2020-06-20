declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Encapsulates an object error, that is, a global reason for rejecting
             * an object.
             * <p>See the {@link DefaultMessageCodesResolver} javadoc for details on
             * how a message code list is built for an {@code ObjectError}.
             * @author Juergen Hoeller
             * @since 10.03.2003
             * @see FieldError
             * @see DefaultMessageCodesResolver
             */
            // @ts-ignore
            class ObjectError extends org.springframework.context.support.DefaultMessageSourceResolvable {
                /**
                 * Create a new instance of the ObjectError class.
                 * @param objectName the name of the affected object
                 * @param defaultMessage the default message to be used to resolve this message
                 */
                // @ts-ignore
                constructor(objectName: string, defaultMessage: string)
                /**
                 * Create a new instance of the ObjectError class.
                 * @param objectName the name of the affected object
                 * @param codes the codes to be used to resolve this message
                 * @param arguments	the array of arguments to be used to resolve this message
                 * @param defaultMessage the default message to be used to resolve this message
                 */
                // @ts-ignore
                constructor(objectName: string, codes: string[], arguments: any[], defaultMessage: string)
                /**
                 * Return the name of the affected object.
                 */
                // @ts-ignore
                getObjectName(): java.lang.String
                /**
                 * Preserve the source behind this error: possibly an {@link Exception}
                 * (typically {@link org.springframework.beans.PropertyAccessException})
                 * or a Bean Validation {@link javax.validation.ConstraintViolation}.
                 * <p>Note that any such source object is being stored as transient:
                 * that is, it won't be part of a serialized error representation.
                 * @param source the source object
                 * @since 5.0.4
                 */
                // @ts-ignore
                wrap(source: any): void
                /**
                 * Unwrap the source behind this error: possibly an {@link Exception}
                 * (typically {@link org.springframework.beans.PropertyAccessException})
                 * or a Bean Validation {@link javax.validation.ConstraintViolation}.
                 * <p>The cause of the outermost exception will be introspected as well,
                 * e.g. the underlying conversion exception or exception thrown from a setter
                 * (instead of having to unwrap the {@code PropertyAccessException} in turn).
                 * @return the source object of the given type
                 * @throws IllegalArgumentException if no such source object is available
                 *  (i.e. none specified or not available anymore after deserialization)
                 * @since 5.0.4
                 */
                // @ts-ignore
                unwrap<T>(sourceType: java.lang.Class<T>): T
                /**
                 * Check the source behind this error: possibly an {@link Exception}
                 * (typically {@link org.springframework.beans.PropertyAccessException})
                 * or a Bean Validation {@link javax.validation.ConstraintViolation}.
                 * <p>The cause of the outermost exception will be introspected as well,
                 * e.g. the underlying conversion exception or exception thrown from a setter
                 * (instead of having to unwrap the {@code PropertyAccessException} in turn).
                 * @return whether this error has been caused by a source object of the given type
                 * @since 5.0.4
                 */
                // @ts-ignore
                contains(sourceType: java.lang.Class<any>): boolean
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
