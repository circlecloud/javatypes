declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                /**
                 * Signals that a user account has expired.
                 * <p> This exception is thrown by LoginModules when they determine
                 * that an account has expired.  For example, a {@code LoginModule},
                 * after successfully authenticating a user, may determine that the
                 * user's account has expired.  In this case the {@code LoginModule}
                 * throws this exception to notify the application.  The application can
                 * then take the appropriate steps to notify the user.
                 */
                // @ts-ignore
                class AccountExpiredException extends javax.security.auth.login.AccountException {
                    /**
                     * Constructs a AccountExpiredException with no detail message. A detail
                     * message is a String that describes this particular exception.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a AccountExpiredException with the specified detail
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
