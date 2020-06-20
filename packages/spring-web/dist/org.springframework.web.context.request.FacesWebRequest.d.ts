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
                        getNativeRequest(): java.lang.Object
                        // @ts-ignore
                        getNativeResponse(): java.lang.Object
                        // @ts-ignore
                        getNativeRequest<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        getNativeResponse<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        getHeader(headerName: string): java.lang.String
                        // @ts-ignore
                        getHeaderValues(headerName: string): java.lang.String[]
                        // @ts-ignore
                        getHeaderNames(): java.util.Iterator<java.lang.String>
                        // @ts-ignore
                        getParameter(paramName: string): java.lang.String
                        // @ts-ignore
                        getParameterNames(): java.util.Iterator<java.lang.String>
                        // @ts-ignore
                        getParameterValues(paramName: string): java.lang.String[]
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
                        checkNotModified(eTag: string): boolean
                        // @ts-ignore
                        checkNotModified(etag: string, lastModifiedTimestamp: number /*long*/): boolean
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
