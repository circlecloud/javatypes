declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Spring MultipartHttpServletRequest adapter, wrapping a Servlet 3.0 HttpServletRequest
                     * and its Part objects. Parameters get exposed through the native request's getParameter
                     * methods - without any custom processing on our side.
                     * @author Juergen Hoeller
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     * @see StandardServletMultipartResolver
                     */
                    // @ts-ignore
                    class StandardMultipartHttpServletRequest extends org.springframework.web.multipart.support.AbstractMultipartHttpServletRequest {
                        /**
                         * Create a new StandardMultipartHttpServletRequest wrapper for the given request,
                         * immediately parsing the multipart content.
                         * @param request the servlet request to wrap
                         * @throws MultipartException if parsing failed
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest)
                        /**
                         * Create a new StandardMultipartHttpServletRequest wrapper for the given request.
                         * @param request the servlet request to wrap
                         * @param lazyParsing whether multipart parsing should be triggered lazily on
                         *  first access of multipart files or parameters
                         * @throws MultipartException if an immediate parsing attempt failed
                         * @since 3.2.9
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest, lazyParsing: boolean)
                        // @ts-ignore
                        handleParseFailure(ex: java.lang.Throwable | Error): void
                        // @ts-ignore
                        initializeMultipart(): void
                        // @ts-ignore
                        public getParameterNames(): java.util.Enumeration<java.lang.String | string>
                        // @ts-ignore
                        public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                        // @ts-ignore
                        public getMultipartContentType(paramOrFileName: java.lang.String | string): string
                        // @ts-ignore
                        public getMultipartHeaders(paramOrFileName: java.lang.String | string): org.springframework.http.HttpHeaders
                    }
                }
            }
        }
    }
}
