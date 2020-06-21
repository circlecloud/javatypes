declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * A SPNEGO authenticator that uses the SPNEGO/Kerberos support built in to Java
                 * 6. Successful Kerberos authentication depends on the correct configuration of
                 * multiple components. If the configuration is invalid, the error messages are
                 * often cryptic although a Google search will usually point you in the right
                 * direction.
                 */
                // @ts-ignore
                class SpnegoAuthenticator extends org.apache.catalina.authenticator.AuthenticatorBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getLoginConfigName(): string
                    // @ts-ignore
                    public setLoginConfigName(loginConfigName: java.lang.String | string): void
                    // @ts-ignore
                    public isStoreDelegatedCredential(): boolean
                    // @ts-ignore
                    public setStoreDelegatedCredential(storeDelegatedCredential: boolean): void
                    // @ts-ignore
                    public getNoKeepAliveUserAgents(): string
                    // @ts-ignore
                    public setNoKeepAliveUserAgents(noKeepAliveUserAgents: java.lang.String | string): void
                    // @ts-ignore
                    public getApplyJava8u40Fix(): boolean
                    // @ts-ignore
                    public setApplyJava8u40Fix(applyJava8u40Fix: boolean): void
                    // @ts-ignore
                    getAuthMethod(): string
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                }
            }
        }
    }
}
