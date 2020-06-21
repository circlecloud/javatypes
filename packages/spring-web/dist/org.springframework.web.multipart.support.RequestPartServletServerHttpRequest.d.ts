declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * {@link ServerHttpRequest} implementation that accesses one part of a multipart
                     * request. If using {@link MultipartResolver} configuration the part is accessed
                     * through a {@link MultipartFile}. Or if using Servlet 3.0 multipart processing
                     * the part is accessed through {@code ServletRequest.getPart}.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class RequestPartServletServerHttpRequest extends org.springframework.http.server.ServletServerHttpRequest {
                        /**
                         * Create a new {@code RequestPartServletServerHttpRequest} instance.
                         * @param request the current servlet request
                         * @param partName the name of the part to adapt to the {#link ServerHttpRequest} contract
                         * @throws MissingServletRequestPartException if the request part cannot be found
                         * @throws MultipartException if MultipartHttpServletRequest cannot be initialized
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest, partName: java.lang.String | string)
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getBody(): java.io.InputStream
                    }
                }
            }
        }
    }
}
