declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * {@link WebRequest} adapter for a JSF {@link javax.faces.context.FacesContext}.
                     * <p>Requires JSF 2.0 or higher, as of Spring 4.0.
                     * @author Juergen Hoeller
                     * @since 2.5.2
                     */
                    // @ts-ignore
                    class FacesWebRequest extends org.springframework.web.context.request.FacesRequestAttributes implements org.springframework.web.context.request.NativeWebRequest {
                        /**
                         * Create a new FacesWebRequest adapter for the given FacesContext.
                         * @param facesContext the current FacesContext
                         * @see javax.faces.context.FacesContext#getCurrentInstance()
                         */
                        // @ts-ignore
                        constructor(facesContext: FacesContext)
                        // @ts-ignore
                        public getNativeRequest(): any
                        // @ts-ignore
                        public getNativeResponse(): any
                        // @ts-ignore
                        public getNativeRequest<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getNativeResponse<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getHeader(headerName: java.lang.String | string): string
                        // @ts-ignore
                        public getHeaderValues(headerName: java.lang.String | string): string[]
                        // @ts-ignore
                        public getHeaderNames(): java.util.Iterator<java.lang.String | string>
                        // @ts-ignore
                        public getParameter(paramName: java.lang.String | string): string
                        // @ts-ignore
                        public getParameterNames(): java.util.Iterator<java.lang.String | string>
                        // @ts-ignore
                        public getParameterValues(paramName: java.lang.String | string): string[]
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
                        public checkNotModified(eTag: java.lang.String | string): boolean
                        // @ts-ignore
                        public checkNotModified(etag: java.lang.String | string, lastModifiedTimestamp: number /*long*/): boolean
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
