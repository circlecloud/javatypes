declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * {@link WebRequest} adapter for an {@link javax.servlet.http.HttpServletRequest}.
                     * @author Juergen Hoeller
                     * @author Brian Clozel
                     * @author Markus Malkusch
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ServletWebRequest extends org.springframework.web.context.request.ServletRequestAttributes implements org.springframework.web.context.request.NativeWebRequest {
                        /**
                         * Create a new ServletWebRequest instance for the given request.
                         * @param request current HTTP request
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest)
                        /**
                         * Create a new ServletWebRequest instance for the given request/response pair.
                         * @param request current HTTP request
                         * @param response current HTTP response (for automatic last-modified handling)
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest, response: HttpServletResponse)
                        // @ts-ignore
                        getNativeRequest(): java.lang.Object
                        // @ts-ignore
                        getNativeResponse(): java.lang.Object
                        // @ts-ignore
                        getNativeRequest<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        getNativeResponse<T>(requiredType: java.lang.Class<T>): T
                        /**
                         * Return the HTTP method of the request.
                         * @since 4.0.2
                         */
                        // @ts-ignore
                        getHttpMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        getHeader(headerName: string): java.lang.String
                        // @ts-ignore
                        getHeaderValues(headerName: string): java.lang.String[]
                        // @ts-ignore
                        getHeaderNames(): java.util.Iterator<java.lang.String>
                        // @ts-ignore
                        getParameter(paramName: string): java.lang.String
                        // @ts-ignore
                        getParameterValues(paramName: string): java.lang.String[]
                        // @ts-ignore
                        getParameterNames(): java.util.Iterator<java.lang.String>
                        // @ts-ignore
                        getParameterMap(): java.util.Map<java.lang.String, java.lang.String[]>
                        // @ts-ignore
                        getLocale(): java.util.Locale
                        // @ts-ignore
                        getContextPath(): java.lang.String
                        // @ts-ignore
                        getRemoteUser(): java.lang.String
                        // @ts-ignore
                        getUserPrincipal(): java.security.Principal
                        // @ts-ignore
                        isUserInRole(role: string): boolean
                        // @ts-ignore
                        isSecure(): boolean
                        // @ts-ignore
                        checkNotModified(lastModifiedTimestamp: number /*long*/): boolean
                        // @ts-ignore
                        checkNotModified(etag: string): boolean
                        // @ts-ignore
                        checkNotModified(etag: string, lastModifiedTimestamp: number /*long*/): boolean
                        // @ts-ignore
                        isNotModified(): boolean
                        // @ts-ignore
                        getDescription(includeClientInfo: boolean): java.lang.String
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
