declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                /**
                 * Signals that a credential was not found.
                 * <p> This exception may be thrown by a LoginModule if it is unable
                 * to locate a credential necessary to perform authentication.
                 * @since 1.5
                 */
                // @ts-ignore
                class CredentialNotFoundException extends javax.security.auth.login.CredentialException {
                    /**
                     * Constructs a CredentialNotFoundException with no detail message.
                     * A detail message is a String that describes this particular exception.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a CredentialNotFoundException with the specified
                     * detail message. A detail message is a String that describes
                     * this particular exception.
                     * <p>
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                }
            }
        }
    }
}
