declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Helper class for implementing exception classes which are capable of
             * holding nested exceptions. Necessary because we can't share a base
             * class among different exception types.
             * <p>Mainly for use within the framework.
             * @author Juergen Hoeller
             * @since 2.0
             * @see NestedRuntimeException
             * @see NestedCheckedException
             * @see NestedIOException
             * @see org.springframework.web.util.NestedServletException
             */
            // @ts-ignore
            abstract class NestedExceptionUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Build a message for the given base message and root cause.
                 * @param message the base message
                 * @param cause the root cause
                 * @return the full exception message
                 */
                // @ts-ignore
                public static buildMessage(message: java.lang.String | string, cause: java.lang.Throwable | Error): string
                /**
                 * Retrieve the innermost cause of the given exception, if any.
                 * @param original the original exception to introspect
                 * @return the innermost exception, or {#code null} if none
                 * @since 4.3.9
                 */
                // @ts-ignore
                public static getRootCause(original: java.lang.Throwable | Error): Error
                /**
                 * Retrieve the most specific cause of the given exception, that is,
                 * either the innermost cause (root cause) or the exception itself.
                 * <p>Differs from {@link #getRootCause} in that it falls back
                 * to the original exception if there is no root cause.
                 * @param original the original exception to introspect
                 * @return the most specific cause (never {#code null})
                 * @since 4.3.9
                 */
                // @ts-ignore
                public static getMostSpecificCause(original: java.lang.Throwable | Error): Error
            }
        }
    }
}
