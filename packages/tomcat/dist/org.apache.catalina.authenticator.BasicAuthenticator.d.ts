declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * An <b>Authenticator</b> and <b>Valve</b> implementation of HTTP BASIC
                 * Authentication, as outlined in RFC 2617:  "HTTP Authentication: Basic
                 * and Digest Access Authentication."
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class BasicAuthenticator extends org.apache.catalina.authenticator.AuthenticatorBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getCharset(): string
                    // @ts-ignore
                    public setCharset(charsetString: java.lang.String | string): void
                    // @ts-ignore
                    public getTrimCredentials(): boolean
                    // @ts-ignore
                    public setTrimCredentials(trimCredentials: boolean): void
                    // @ts-ignore
                    doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                    // @ts-ignore
                    getAuthMethod(): string
                }
            }
        }
    }
}
