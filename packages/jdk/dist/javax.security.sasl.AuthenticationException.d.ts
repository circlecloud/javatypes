declare namespace javax {
    namespace security {
        namespace sasl {
            /**
             * This exception is thrown by a SASL mechanism implementation
             * to indicate that the SASL
             * exchange has failed due to reasons related to authentication, such as
             * an invalid identity, passphrase, or key.
             * <p>
             * Note that the lack of an AuthenticationException does not mean that
             * the failure was not due to an authentication error.  A SASL mechanism
             * implementation might throw the more general SaslException instead of
             * AuthenticationException if it is unable to determine the nature
             * of the failure, or if does not want to disclose the nature of
             * the failure, for example, due to security reasons.
             * @since 1.5
             * @author Rosanna Lee
             * @author Rob Weltman
             */
            // @ts-ignore
            class AuthenticationException extends javax.security.sasl.SaslException {
                /**
                 * Constructs a new instance of {@code AuthenticationException}.
                 * The root exception and the detailed message are null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of {@code AuthenticationException}
                 * with a detailed message.
                 * The root exception is null.
                 * @param detail A possibly null string containing details of the exception.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(detail: string)
                /**
                 * Constructs a new instance of {@code AuthenticationException} with a detailed message
                 * and a root exception.
                 * @param detail A possibly null string containing details of the exception.
                 * @param ex A possibly null root exception that caused this exception.
                 * @see java.lang.Throwable#getMessage
                 * @see #getCause
                 */
                // @ts-ignore
                constructor(detail: string, ex: Error)
            }
        }
    }
}
