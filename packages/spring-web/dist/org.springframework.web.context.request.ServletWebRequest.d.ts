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
                        public getNativeRequest(): any
                        // @ts-ignore
                        public getNativeResponse(): any
                        // @ts-ignore
                        public getNativeRequest<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getNativeResponse<T>(requiredType: java.lang.Class<T>): T
                        /**
                         * Return the HTTP method of the request.
                         * @since 4.0.2
                         */
                        // @ts-ignore
                        public getHttpMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        public getHeader(headerName: java.lang.String | string): string
                        // @ts-ignore
                        public getHeaderValues(headerName: java.lang.String | string): string[]
                        // @ts-ignore
                        public getHeaderNames(): java.util.Iterator<java.lang.String | string>
                        // @ts-ignore
                        public getParameter(paramName: java.lang.String | string): string
                        // @ts-ignore
                        public getParameterValues(paramName: java.lang.String | string): string[]
                        // @ts-ignore
                        public getParameterNames(): java.util.Iterator<java.lang.String | string>
                        // @ts-ignore
                        public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                        // @ts-ignore
                        public getLocale(): java.util.Locale
                        // @ts-ignore
                        public getContextPath(): string
                        // @ts-ignore
                        public getRemoteUser(): string
                        // @ts-ignore
                        public getUserPrincipal(): java.security.Principal
                        // @ts-ignore
                        public isUserInRole(role: java.lang.String | string): boolean
                        // @ts-ignore
                        public isSecure(): boolean
                        // @ts-ignore
                        public checkNotModified(lastModifiedTimestamp: number /*long*/): boolean
                        // @ts-ignore
                        public checkNotModified(etag: java.lang.String | string): boolean
                        // @ts-ignore
                        public checkNotModified(etag: java.lang.String | string, lastModifiedTimestamp: number /*long*/): boolean
                        // @ts-ignore
                        public isNotModified(): boolean
                        // @ts-ignore
                        public getDescription(includeClientInfo: boolean): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
