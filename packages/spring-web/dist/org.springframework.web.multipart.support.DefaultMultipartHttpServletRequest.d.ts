declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Default implementation of the
                     * {@link org.springframework.web.multipart.MultipartHttpServletRequest}
                     * interface. Provides management of pre-generated parameter values.
                     * <p>Used by {@link org.springframework.web.multipart.commons.CommonsMultipartResolver}.
                     * @author Trevor D. Cook
                     * @author Juergen Hoeller
                     * @author Arjen Poutsma
                     * @since 29.09.2003
                     * @see org.springframework.web.multipart.MultipartResolver
                     */
                    // @ts-ignore
                    class DefaultMultipartHttpServletRequest extends org.springframework.web.multipart.support.AbstractMultipartHttpServletRequest {
                        /**
                         * Wrap the given HttpServletRequest in a MultipartHttpServletRequest.
                         * @param request the servlet request to wrap
                         * @param mpFiles a map of the multipart files
                         * @param mpParams a map of the parameters to expose,
                         *  with Strings as keys and String arrays as values
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest, mpFiles: object, mpParams: java.util.Map<java.lang.String, java.lang.String[]>, mpParamContentTypes: java.util.Map<java.lang.String, java.lang.String>)
                        /**
                         * Wrap the given HttpServletRequest in a MultipartHttpServletRequest.
                         * @param request the servlet request to wrap
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest)
                        // @ts-ignore
                        getParameter(name: string): java.lang.String
                        // @ts-ignore
                        getParameterValues(name: string): java.lang.String[]
                        // @ts-ignore
                        getParameterNames(): java.util.Enumeration<java.lang.String>
                        // @ts-ignore
                        getParameterMap(): java.util.Map<java.lang.String, java.lang.String[]>
                        // @ts-ignore
                        getMultipartContentType(paramOrFileName: string): java.lang.String
                        // @ts-ignore
                        getMultipartHeaders(paramOrFileName: string): org.springframework.http.HttpHeaders
                        /**
                         * Set a Map with parameter names as keys and String array objects as values.
                         * To be invoked by subclasses on initialization.
                         */
                        // @ts-ignore
                        setMultipartParameters(multipartParameters: java.util.Map<java.lang.String, java.lang.String[]>): void
                        /**
                         * Obtain the multipart parameter Map for retrieval,
                         * lazily initializing it if necessary.
                         * @see #initializeMultipart()
                         */
                        // @ts-ignore
                        getMultipartParameters(): java.util.Map<java.lang.String, java.lang.String[]>
                        /**
                         * Set a Map with parameter names as keys and content type Strings as values.
                         * To be invoked by subclasses on initialization.
                         */
                        // @ts-ignore
                        setMultipartParameterContentTypes(multipartParameterContentTypes: java.util.Map<java.lang.String, java.lang.String>): void
                        /**
                         * Obtain the multipart parameter content type Map for retrieval,
                         * lazily initializing it if necessary.
                         * @see #initializeMultipart()
                         */
                        // @ts-ignore
                        getMultipartParameterContentTypes(): java.util.Map<java.lang.String, java.lang.String>
                    }
                }
            }
        }
    }
}
