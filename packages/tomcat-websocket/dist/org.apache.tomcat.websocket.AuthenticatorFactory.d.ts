declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Utility method to return the appropriate authenticator according to
                 * the scheme that the server uses.
                 */
                // @ts-ignore
                class AuthenticatorFactory extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return a new authenticator instance.
                     * @param authScheme The scheme used
                     * @return the authenticator
                     */
                    // @ts-ignore
                    public static getAuthenticator(authScheme: java.lang.String | string): org.apache.tomcat.websocket.Authenticator
                }
            }
        }
    }
}
