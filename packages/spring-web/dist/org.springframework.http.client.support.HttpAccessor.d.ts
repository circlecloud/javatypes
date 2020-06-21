declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * Base class for {@link org.springframework.web.client.RestTemplate}
                     * and other HTTP accessing gateway helpers, defining common properties
                     * such as the {@link ClientHttpRequestFactory} to operate on.
                     * <p>Not intended to be used directly.
                     * <p>See {@link org.springframework.web.client.RestTemplate} for an entry point.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @author Phillip Webb
                     * @since 3.0
                     * @see ClientHttpRequestFactory
                     * @see org.springframework.web.client.RestTemplate
                     */
                    // @ts-ignore
                    abstract class HttpAccessor extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the request factory that this accessor uses for obtaining client request handles.
                         * <p>The default is a {@link SimpleClientHttpRequestFactory} based on the JDK's own
                         * HTTP libraries ({@link java.net.HttpURLConnection}).
                         * <p><b>Note that the standard JDK HTTP library does not support the HTTP PATCH method.
                         * Configure the Apache HttpComponents or OkHttp request factory to enable PATCH.</b>
                         * @see #createRequest(URI, HttpMethod)
                         * @see SimpleClientHttpRequestFactory
                         * @see org.springframework.http.client.HttpComponentsAsyncClientHttpRequestFactory
                         * @see org.springframework.http.client.OkHttp3ClientHttpRequestFactory
                         */
                        // @ts-ignore
                        public setRequestFactory(requestFactory: org.springframework.http.client.ClientHttpRequestFactory): void
                        /**
                         * Return the request factory that this accessor uses for obtaining client request handles.
                         */
                        // @ts-ignore
                        public getRequestFactory(): org.springframework.http.client.ClientHttpRequestFactory
                        /**
                         * Set the request initializers that this accessor should use.
                         * <p>The initializers will get immediately sorted according to their
                         * {@linkplain AnnotationAwareOrderComparator#sort(List) order}.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public setClientHttpRequestInitializers(clientHttpRequestInitializers: java.util.List<org.springframework.http.client.ClientHttpRequestInitializer> | Array<org.springframework.http.client.ClientHttpRequestInitializer>): void
                        /**
                         * Get the request initializers that this accessor uses.
                         * <p>The returned {@link List} is active and may be modified. Note,
                         * however, that the initializers will not be resorted according to their
                         * {@linkplain AnnotationAwareOrderComparator#sort(List) order} before the
                         * {@link ClientHttpRequest} is initialized.
                         * @since 5.2
                         * @see #setClientHttpRequestInitializers(List)
                         */
                        // @ts-ignore
                        public getClientHttpRequestInitializers(): Array<org.springframework.http.client.ClientHttpRequestInitializer>
                        /**
                         * Create a new {@link ClientHttpRequest} via this template's {@link ClientHttpRequestFactory}.
                         * @param url the URL to connect to
                         * @param method the HTTP method to execute (GET, POST, etc)
                         * @return the created request
                         * @throws IOException in case of I/O errors
                         * @see #getRequestFactory()
                         * @see ClientHttpRequestFactory#createRequest(URI, HttpMethod)
                         */
                        // @ts-ignore
                        createRequest(url: java.net.URI, method: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                    }
                }
            }
        }
    }
}
