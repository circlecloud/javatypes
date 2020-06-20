declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * Provides a convenient implementation of the {@link HttpRequest} interface
                     * that can be overridden to adapt the request.
                     * <p>These methods default to calling through to the wrapped request object.
                     * @author Arjen Poutsma
                     * @since 3.1
                     */
                    // @ts-ignore
                    class HttpRequestWrapper extends java.lang.Object implements org.springframework.http.HttpRequest {
                        /**
                         * Create a new {@code HttpRequest} wrapping the given request object.
                         * @param request the request object to be wrapped
                         */
                        // @ts-ignore
                        constructor(request: org.springframework.http.HttpRequest)
                        /**
                         * Return the wrapped request.
                         */
                        // @ts-ignore
                        getRequest(): org.springframework.http.HttpRequest
                        /**
                         * Return the method of the wrapped request.
                         */
                        // @ts-ignore
                        getMethod(): org.springframework.http.HttpMethod
                        /**
                         * Return the method value of the wrapped request.
                         */
                        // @ts-ignore
                        getMethodValue(): java.lang.String
                        /**
                         * Return the URI of the wrapped request.
                         */
                        // @ts-ignore
                        getURI(): java.net.URI
                        /**
                         * Return the headers of the wrapped request.
                         */
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                    }
                }
            }
        }
    }
}
