declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Extension of the {@link WebRequest} interface, exposing the
                     * native request and response objects in a generic fashion.
                     * <p>Mainly intended for framework-internal usage,
                     * in particular for generic argument resolution code.
                     * @author Juergen Hoeller
                     * @since 2.5.2
                     */
                    // @ts-ignore
                    interface NativeWebRequest extends org.springframework.web.context.request.WebRequest {
                        /**
                         * Return the underlying native request object.
                         * @see javax.servlet.http.HttpServletRequest
                         */
                        // @ts-ignore
                        getNativeRequest(): any
                        /**
                         * Return the underlying native response object, if any.
                         * @see javax.servlet.http.HttpServletResponse
                         */
                        // @ts-ignore
                        getNativeResponse(): any
                        /**
                         * Return the underlying native request object, if available.
                         * @param requiredType the desired type of request object
                         * @return the matching request object, or {#code null} if none
                         *  of that type is available
                         * @see javax.servlet.http.HttpServletRequest
                         */
                        // @ts-ignore
                        getNativeRequest<T>(requiredType: java.lang.Class<T>): T
                        /**
                         * Return the underlying native response object, if available.
                         * @param requiredType the desired type of response object
                         * @return the matching response object, or {#code null} if none
                         *  of that type is available
                         * @see javax.servlet.http.HttpServletResponse
                         */
                        // @ts-ignore
                        getNativeResponse<T>(requiredType: java.lang.Class<T>): T
                    }
                }
            }
        }
    }
}
