declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Handy class for wrapping runtime {@code Exceptions} with a root cause.
             * <p>This class is {@code abstract} to force the programmer to extend
             * the class. {@code getMessage} will include nested exception
             * information; {@code printStackTrace} and other like methods will
             * delegate to the wrapped exception, if any.
             * <p>The similarity between this class and the {@link NestedCheckedException}
             * class is unavoidable, as Java forces these two classes to have different
             * superclasses (ah, the inflexibility of concrete inheritance!).
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @see #getMessage
             * @see #printStackTrace
             * @see NestedCheckedException
             */
            // @ts-ignore
            class NestedRuntimeException extends java.lang.RuntimeException {
                /**
                 * Construct a {@code NestedRuntimeException} with the specified detail message.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Construct a {@code NestedRuntimeException} with the specified detail message
                 * and nested exception.
                 * @param msg the detail message
                 * @param cause the nested exception
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
                /**
                 * Return the detail message, including the message from the nested exception
                 * if there is one.
                 */
                // @ts-ignore
                getMessage(): java.lang.String
                /**
                 * Retrieve the innermost cause of this exception, if any.
                 * @return the innermost exception, or {#code null} if none
                 * @since 2.0
                 */
                // @ts-ignore
                getRootCause(): java.lang.Throwable
                /**
                 * Retrieve the most specific cause of this exception, that is,
                 * either the innermost cause (root cause) or this exception itself.
                 * <p>Differs from {@link #getRootCause()} in that it falls back
                 * to the present exception if there is no root cause.
                 * @return the most specific cause (never {#code null})
                 * @since 2.0.3
                 */
                // @ts-ignore
                getMostSpecificCause(): java.lang.Throwable
                /**
                 * Check whether this exception contains an exception of the given type:
                 * either it is of the given class itself or it contains a nested cause
                 * of the given type.
                 * @param exType the exception type to look for
                 * @return whether there is a nested exception of the specified type
                 */
                // @ts-ignore
                contains(exType: java.lang.Class<any>): boolean
            }
        }
    }
}
