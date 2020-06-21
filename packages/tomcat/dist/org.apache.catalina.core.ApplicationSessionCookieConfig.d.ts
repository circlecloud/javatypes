declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class ApplicationSessionCookieConfig extends java.lang.Object implements javax.servlet.SessionCookieConfig {
                    // @ts-ignore
                    constructor(context: org.apache.catalina.core.StandardContext)
                    // @ts-ignore
                    public getComment(): string
                    // @ts-ignore
                    public getDomain(): string
                    // @ts-ignore
                    public getMaxAge(): number /*int*/
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getPath(): string
                    // @ts-ignore
                    public isHttpOnly(): boolean
                    // @ts-ignore
                    public isSecure(): boolean
                    // @ts-ignore
                    public setComment(comment: java.lang.String | string): void
                    // @ts-ignore
                    public setDomain(domain: java.lang.String | string): void
                    // @ts-ignore
                    public setHttpOnly(httpOnly: boolean): void
                    // @ts-ignore
                    public setMaxAge(maxAge: number /*int*/): void
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public setPath(path: java.lang.String | string): void
                    // @ts-ignore
                    public setSecure(secure: boolean): void
                    /**
                     * Creates a new session cookie for the given session ID
                     * @param context     The Context for the web application
                     * @param sessionId   The ID of the session for which the cookie will be
                     *                     created
                     * @param secure      Should session cookie be configured as secure
                     * @return the cookie for the session
                     */
                    // @ts-ignore
                    public static createSessionCookie(context: org.apache.catalina.Context, sessionId: java.lang.String | string, secure: boolean): javax.servlet.http.Cookie
                }
            }
        }
    }
}
