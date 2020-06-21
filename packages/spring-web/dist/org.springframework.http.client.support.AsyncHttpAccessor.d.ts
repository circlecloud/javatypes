declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * Base class for {@link org.springframework.web.client.AsyncRestTemplate}
                     * and other HTTP accessing gateway helpers, defining common properties
                     * such as the {@link org.springframework.http.client.AsyncClientHttpRequestFactory}
                     * to operate on.
                     * <p>Not intended to be used directly. See
                     * {@link org.springframework.web.client.AsyncRestTemplate}.
                     * @author Arjen Poutsma
                     * @since 4.0
                     * @see org.springframework.web.client.AsyncRestTemplate
                     * @deprecated as of Spring 5.0, with no direct replacement
                     */
                    // @ts-ignore
                    class AsyncHttpAccessor extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the request factory that this accessor uses for obtaining {@link
                         * org.springframework.http.client.ClientHttpRequest HttpRequests}.
                         */
                        // @ts-ignore
                        public setAsyncRequestFactory(asyncRequestFactory: org.springframework.http.client.AsyncClientHttpRequestFactory): void
                        /**
                         * Return the request factory that this accessor uses for obtaining {@link
                         * org.springframework.http.client.ClientHttpRequest HttpRequests}.
                         */
                        // @ts-ignore
                        public getAsyncRequestFactory(): org.springframework.http.client.AsyncClientHttpRequestFactory
                        /**
                         * Create a new {@link org.springframework.http.client.AsyncClientHttpRequest} via this template's
                         * {@link org.springframework.http.client.AsyncClientHttpRequestFactory}.
                         * @param url the URL to connect to
                         * @param method the HTTP method to execute (GET, POST, etc.)
                         * @return the created request
                         * @throws IOException in case of I/O errors
                         */
                        // @ts-ignore
                        createAsyncRequest(url: java.net.URI, method: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                    }
                }
            }
        }
    }
}
