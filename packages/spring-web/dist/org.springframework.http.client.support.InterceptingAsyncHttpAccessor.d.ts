declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * The HTTP accessor that extends the base {@link AsyncHttpAccessor} with
                     * request intercepting functionality.
                     * @author Jakub Narloch
                     * @author Rossen Stoyanchev
                     * @since 4.3
                     * @deprecated as of Spring 5.0, with no direct replacement
                     */
                    // @ts-ignore
                    class InterceptingAsyncHttpAccessor extends org.springframework.http.client.support.AsyncHttpAccessor {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the request interceptors that this accessor should use.
                         * @param interceptors the list of interceptors
                         */
                        // @ts-ignore
                        setInterceptors(interceptors: Array<org.springframework.http.client.AsyncClientHttpRequestInterceptor>): void
                        /**
                         * Return the request interceptor that this accessor uses.
                         */
                        // @ts-ignore
                        getInterceptors(): java.util.List<org.springframework.http.client.AsyncClientHttpRequestInterceptor>
                        // @ts-ignore
                        getAsyncRequestFactory(): org.springframework.http.client.AsyncClientHttpRequestFactory
                    }
                }
            }
        }
    }
}
