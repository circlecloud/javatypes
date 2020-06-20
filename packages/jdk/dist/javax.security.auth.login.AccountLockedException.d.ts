declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                /**
                 * Signals that an account was locked.
                 * <p> This exception may be thrown by a LoginModule if it
                 * determines that authentication is being attempted on a
                 * locked account.
                 * @since 1.5
                 */
                // @ts-ignore
                class AccountLockedException extends javax.security.auth.login.AccountException {
                    /**
                     * Constructs a AccountLockedException with no detail message.
                     * A detail message is a String that describes this particular exception.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a AccountLockedException with the specified
                     * detail message. A detail message is a String that describes
                     * this particular exception.
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
