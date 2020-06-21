declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Facade class that wraps a Coyote request object.
                 * All methods are delegated to the wrapped request.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class RequestFacade extends java.lang.Object implements javax.servlet.http.HttpServletRequest {
                    /**
                     * Construct a wrapper for the specified request.
                     * @param request The request to be wrapped
                     */
                    // @ts-ignore
                    constructor(request: org.apache.catalina.connector.Request)
                    /**
                     * The wrapped request.
                     */
                    // @ts-ignore
                    request: org.apache.catalina.connector.Request
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Clear facade.
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Prevent cloning the facade.
                     */
                    // @ts-ignore
                    clone(): any
                    // @ts-ignore
                    public getAttribute(name: java.lang.String | string): any
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public getCharacterEncoding(): string
                    // @ts-ignore
                    public setCharacterEncoding(env: java.lang.String | string): void
                    // @ts-ignore
                    public getContentLength(): number /*int*/
                    // @ts-ignore
                    public getContentType(): string
                    // @ts-ignore
                    public getInputStream(): javax.servlet.ServletInputStream
                    // @ts-ignore
                    public getParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public getParameterNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public getParameterValues(name: java.lang.String | string): string[]
                    // @ts-ignore
                    public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                    // @ts-ignore
                    public getProtocol(): string
                    // @ts-ignore
                    public getScheme(): string
                    // @ts-ignore
                    public getServerName(): string
                    // @ts-ignore
                    public getServerPort(): number /*int*/
                    // @ts-ignore
                    public getReader(): java.io.BufferedReader
                    // @ts-ignore
                    public getRemoteAddr(): string
                    // @ts-ignore
                    public getRemoteHost(): string
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, o: java.lang.Object | any): void
                    // @ts-ignore
                    public removeAttribute(name: java.lang.String | string): void
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    // @ts-ignore
                    public getLocales(): java.util.Enumeration<java.util.Locale>
                    // @ts-ignore
                    public isSecure(): boolean
                    // @ts-ignore
                    public getRequestDispatcher(path: java.lang.String | string): javax.servlet.RequestDispatcher
                    // @ts-ignore
                    public getRealPath(path: java.lang.String | string): string
                    // @ts-ignore
                    public getAuthType(): string
                    // @ts-ignore
                    public getCookies(): javax.servlet.http.Cookie[]
                    // @ts-ignore
                    public getDateHeader(name: java.lang.String | string): number /*long*/
                    // @ts-ignore
                    public getHeader(name: java.lang.String | string): string
                    // @ts-ignore
                    public getHeaders(name: java.lang.String | string): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public getHeaderNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public getIntHeader(name: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getHttpServletMapping(): javax.servlet.http.HttpServletMapping
                    // @ts-ignore
                    public getMethod(): string
                    // @ts-ignore
                    public getPathInfo(): string
                    // @ts-ignore
                    public getPathTranslated(): string
                    // @ts-ignore
                    public getContextPath(): string
                    // @ts-ignore
                    public getQueryString(): string
                    // @ts-ignore
                    public getRemoteUser(): string
                    // @ts-ignore
                    public isUserInRole(role: java.lang.String | string): boolean
                    // @ts-ignore
                    public getUserPrincipal(): java.security.Principal
                    // @ts-ignore
                    public getRequestedSessionId(): string
                    // @ts-ignore
                    public getRequestURI(): string
                    // @ts-ignore
                    public getRequestURL(): java.lang.StringBuffer
                    // @ts-ignore
                    public getServletPath(): string
                    // @ts-ignore
                    public getSession(create: boolean): javax.servlet.http.HttpSession
                    // @ts-ignore
                    public getSession(): javax.servlet.http.HttpSession
                    // @ts-ignore
                    public changeSessionId(): string
                    // @ts-ignore
                    public isRequestedSessionIdValid(): boolean
                    // @ts-ignore
                    public isRequestedSessionIdFromCookie(): boolean
                    // @ts-ignore
                    public isRequestedSessionIdFromURL(): boolean
                    // @ts-ignore
                    public isRequestedSessionIdFromUrl(): boolean
                    // @ts-ignore
                    public getLocalAddr(): string
                    // @ts-ignore
                    public getLocalName(): string
                    // @ts-ignore
                    public getLocalPort(): number /*int*/
                    // @ts-ignore
                    public getRemotePort(): number /*int*/
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    // @ts-ignore
                    public startAsync(): javax.servlet.AsyncContext
                    // @ts-ignore
                    public startAsync(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): javax.servlet.AsyncContext
                    // @ts-ignore
                    public isAsyncStarted(): boolean
                    // @ts-ignore
                    public isAsyncSupported(): boolean
                    // @ts-ignore
                    public getAsyncContext(): javax.servlet.AsyncContext
                    // @ts-ignore
                    public getDispatcherType(): javax.servlet.DispatcherType
                    // @ts-ignore
                    public authenticate(response: javax.servlet.http.HttpServletResponse): boolean
                    // @ts-ignore
                    public login(username: java.lang.String | string, password: java.lang.String | string): void
                    // @ts-ignore
                    public logout(): void
                    // @ts-ignore
                    public getParts(): Array<javax.servlet.http.Part>
                    // @ts-ignore
                    public getPart(name: java.lang.String | string): javax.servlet.http.Part
                    // @ts-ignore
                    public getAllowTrace(): boolean
                    // @ts-ignore
                    public getContentLengthLong(): number /*long*/
                    // @ts-ignore
                    public upgrade<T extends javax.servlet.http.HttpUpgradeHandler>(httpUpgradeHandlerClass: java.lang.Class<T>): T
                    // @ts-ignore
                    public newPushBuilder(): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public newPushBuilder(request: javax.servlet.http.HttpServletRequest): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public isTrailerFieldsReady(): boolean
                    // @ts-ignore
                    public getTrailerFields(): java.util.Map<java.lang.String | string, java.lang.String | string>
                }
            }
        }
    }
}
