declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Base class for the authentication methods used by the websocket client.
                 */
                // @ts-ignore
                abstract class Authenticator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Generate the authentication header that will be sent to the server.
                     * @param requestUri The request URI
                     * @param WWWAuthenticate The server auth challenge
                     * @param UserProperties The user information
                     * @return The auth header
                     * @throws AuthenticationException When an error occurs
                     */
                    // @ts-ignore
                    public abstract getAuthorization(requestUri: java.lang.String | string, WWWAuthenticate: java.lang.String | string, UserProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): string
                    /**
                     * Get the authentication method.
                     * @return the auth scheme
                     */
                    // @ts-ignore
                    public abstract getSchemeName(): string
                    /**
                     * Utility method to parse the authentication header.
                     * @param WWWAuthenticate The server auth challenge
                     * @return the parsed header
                     */
                    // @ts-ignore
                    public parseWWWAuthenticateHeader(WWWAuthenticate: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.String | string>
                }
            }
        }
    }
}
