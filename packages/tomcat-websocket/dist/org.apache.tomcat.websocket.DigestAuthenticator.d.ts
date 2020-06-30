declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Authenticator supporting the DIGEST auth method.
                 */
                // @ts-ignore
                class DigestAuthenticator extends org.apache.tomcat.websocket.Authenticator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly schemeName: java.lang.String | string
                    // @ts-ignore
                    public getAuthorization(requestUri: java.lang.String | string, WWWAuthenticate: java.lang.String | string, userProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): string
                    // @ts-ignore
                    public getSchemeName(): string
                }
            }
        }
    }
}
