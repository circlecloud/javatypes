declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Represents a client-side reactive HTTP request.
                     * @author Arjen Poutsma
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface ClientHttpRequest extends org.springframework.http.ReactiveHttpOutputMessage {
                        /**
                         * Return the HTTP method of the request.
                         */
                        // @ts-ignore
                        getMethod(): org.springframework.http.HttpMethod
                        /**
                         * Return the URI of the request.
                         */
                        // @ts-ignore
                        getURI(): java.net.URI
                        /**
                         * Return a mutable map of request cookies to send to the server.
                         */
                        // @ts-ignore
                        getCookies(): object
                    }
                }
            }
        }
    }
}
