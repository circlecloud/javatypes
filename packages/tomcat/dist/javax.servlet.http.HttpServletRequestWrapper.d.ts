declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Provides a convenient implementation of the HttpServletRequest interface that
             * can be subclassed by developers wishing to adapt the request to a Servlet.
             * This class implements the Wrapper or Decorator pattern. Methods default to
             * calling through to the wrapped request object.
             * @see javax.servlet.http.HttpServletRequest
             * @since v 2.3
             */
            // @ts-ignore
            class HttpServletRequestWrapper extends javax.servlet.ServletRequestWrapper implements javax.servlet.http.HttpServletRequest {
                /**
                 * Constructs a request object wrapping the given request.
                 * @param request The request to wrap
                 * @throws java.lang.IllegalArgumentException
                 *              if the request is null
                 */
                // @ts-ignore
                constructor(request: javax.servlet.http.HttpServletRequest)
                /**
                 * The default behavior of this method is to return getAuthType() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getAuthType(): string
                /**
                 * The default behavior of this method is to return getCookies() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getCookies(): javax.servlet.http.Cookie[]
                /**
                 * The default behavior of this method is to return getDateHeader(String
                 * name) on the wrapped request object.
                 */
                // @ts-ignore
                public getDateHeader(name: java.lang.String | string): number /*long*/
                /**
                 * The default behavior of this method is to return getHeader(String name)
                 * on the wrapped request object.
                 */
                // @ts-ignore
                public getHeader(name: java.lang.String | string): string
                /**
                 * The default behavior of this method is to return getHeaders(String name)
                 * on the wrapped request object.
                 */
                // @ts-ignore
                public getHeaders(name: java.lang.String | string): java.util.Enumeration<java.lang.String | string>
                /**
                 * The default behavior of this method is to return getHeaderNames() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getHeaderNames(): java.util.Enumeration<java.lang.String | string>
                /**
                 * The default behavior of this method is to return getIntHeader(String
                 * name) on the wrapped request object.
                 */
                // @ts-ignore
                public getIntHeader(name: java.lang.String | string): number /*int*/
                /**
                 * The default behavior of this method is to return getMapping() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getHttpServletMapping(): javax.servlet.http.HttpServletMapping
                /**
                 * The default behavior of this method is to return getMethod() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getMethod(): string
                /**
                 * The default behavior of this method is to return getPathInfo() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getPathInfo(): string
                /**
                 * The default behavior of this method is to return getPathTranslated() on
                 * the wrapped request object.
                 */
                // @ts-ignore
                public getPathTranslated(): string
                /**
                 * The default behavior of this method is to return getContextPath() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getContextPath(): string
                /**
                 * The default behavior of this method is to return getQueryString() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getQueryString(): string
                /**
                 * The default behavior of this method is to return getRemoteUser() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getRemoteUser(): string
                /**
                 * The default behavior of this method is to return isUserInRole(String
                 * role) on the wrapped request object.
                 */
                // @ts-ignore
                public isUserInRole(role: java.lang.String | string): boolean
                /**
                 * The default behavior of this method is to return getUserPrincipal() on
                 * the wrapped request object.
                 */
                // @ts-ignore
                public getUserPrincipal(): java.security.Principal
                /**
                 * The default behavior of this method is to return getRequestedSessionId()
                 * on the wrapped request object.
                 */
                // @ts-ignore
                public getRequestedSessionId(): string
                /**
                 * The default behavior of this method is to return getRequestURI() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getRequestURI(): string
                /**
                 * The default behavior of this method is to return getRequestURL() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getRequestURL(): java.lang.StringBuffer
                /**
                 * The default behavior of this method is to return getServletPath() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getServletPath(): string
                /**
                 * The default behavior of this method is to return getSession(boolean
                 * create) on the wrapped request object.
                 */
                // @ts-ignore
                public getSession(create: boolean): javax.servlet.http.HttpSession
                /**
                 * The default behavior of this method is to return getSession() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public getSession(): javax.servlet.http.HttpSession
                /**
                 * The default behavior of this method is to call changeSessionId() on the
                 * wrapped request object.
                 */
                // @ts-ignore
                public changeSessionId(): string
                /**
                 * The default behavior of this method is to return
                 * isRequestedSessionIdValid() on the wrapped request object.
                 */
                // @ts-ignore
                public isRequestedSessionIdValid(): boolean
                /**
                 * The default behavior of this method is to return
                 * isRequestedSessionIdFromCookie() on the wrapped request object.
                 */
                // @ts-ignore
                public isRequestedSessionIdFromCookie(): boolean
                /**
                 * The default behavior of this method is to return
                 * isRequestedSessionIdFromURL() on the wrapped request object.
                 */
                // @ts-ignore
                public isRequestedSessionIdFromURL(): boolean
                /**
                 * The default behavior of this method is to return
                 * isRequestedSessionIdFromUrl() on the wrapped request object.
                 * @deprecated As of Version 3.0 of the Java Servlet API
                 */
                // @ts-ignore
                public isRequestedSessionIdFromUrl(): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#authenticate(HttpServletResponse)}
                 * on the wrapped request object.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public authenticate(response: javax.servlet.http.HttpServletResponse): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#login(String, String)}
                 * on the wrapped request object.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public login(username: java.lang.String | string, password: java.lang.String | string): void
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#logout()}
                 * on the wrapped request object.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public logout(): void
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#getParts()}
                 * on the wrapped request object.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public getParts(): Array<javax.servlet.http.Part>
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#getPart(String)}
                 * on the wrapped request object.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public getPart(name: java.lang.String | string): javax.servlet.http.Part
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#upgrade(Class)} on the wrapped request object.
                 * @since Servlet 3.1
                 */
                // @ts-ignore
                public upgrade<T extends javax.servlet.http.HttpUpgradeHandler>(httpUpgradeHandlerClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#newPushBuilder()} on the wrapped request
                 * object.
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                public newPushBuilder(): javax.servlet.http.PushBuilder
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#getTrailerFields()} on the wrapped request
                 * object.
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                public getTrailerFields(): java.util.Map<java.lang.String | string, java.lang.String | string>
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default behavior of this method is to return
                 * {@link HttpServletRequest#isTrailerFieldsReady()} on the wrapped request
                 * object.
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                public isTrailerFieldsReady(): boolean
            }
        }
    }
}
