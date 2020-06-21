declare namespace javax {
    namespace security {
        namespace sasl {
            /**
             * This class represents an error that has occurred when using SASL.
             * @since 1.5
             * @author Rosanna Lee
             * @author Rob Weltman
             */
            // @ts-ignore
            class SaslException extends java.io.IOException {
                /**
                 * Constructs a new instance of {@code SaslException}.
                 * The root exception and the detailed message are null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of {@code SaslException} with a detailed message.
                 * The root exception is null.
                 * @param detail A possibly null string containing details of the exception.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(detail: java.lang.String | string)
                /**
                 * Constructs a new instance of {@code SaslException} with a detailed message
                 * and a root exception.
                 * For example, a SaslException might result from a problem with
                 * the callback handler, which might throw a NoSuchCallbackException if
                 * it does not support the requested callback, or throw an IOException
                 * if it had problems obtaining data for the callback. The
                 * SaslException's root exception would be then be the exception thrown
                 * by the callback handler.
                 * @param detail A possibly null string containing details of the exception.
                 * @param ex A possibly null root exception that caused this exception.
                 * @see java.lang.Throwable#getMessage
                 * @see #getCause
                 */
                // @ts-ignore
                constructor(detail: java.lang.String | string, ex: java.lang.Throwable | Error)
                // @ts-ignore
                getCause(): Error
                // @ts-ignore
                initCause(cause: java.lang.Throwable | Error): Error
                /**
                 * Returns the string representation of this exception.
                 * The string representation contains
                 * this exception's class name, its detailed message, and if
                 * it has a root exception, the string representation of the root
                 * exception. This string representation
                 * is meant for debugging and not meant to be interpreted
                 * programmatically.
                 * @return The non-null string representation of this exception.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                toString(): string
            }
        }
    }
}
