declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * An <b>Authenticator</b> and <b>Valve</b> implementation of authentication
                 * that utilizes SSL certificates to identify client users.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class SSLAuthenticator extends org.apache.catalina.authenticator.AuthenticatorBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Authenticate the user by checking for the existence of a certificate
                     * chain, validating it against the trust manager for the connector and then
                     * validating the user's identity against the configured Realm.
                     * @param request Request we are processing
                     * @param response Response we are creating
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                    // @ts-ignore
                    getAuthMethod(): string
                }
            }
        }
    }
}
