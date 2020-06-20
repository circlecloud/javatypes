declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                /**
                 * Signals that user authentication failed.
                 * <p> This exception is thrown by LoginModules if authentication failed.
                 * For example, a {@code LoginModule} throws this exception if
                 * the user entered an incorrect password.
                 */
                // @ts-ignore
                class FailedLoginException extends javax.security.auth.login.LoginException {
                    /**
                     * Constructs a FailedLoginException with no detail message. A detail
                     * message is a String that describes this particular exception.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a FailedLoginException with the specified detail
                     * message.  A detail message is a String that describes this particular
                     * exception.
                     * <p>
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(msg: string)
                }
            }
        }
    }
}
