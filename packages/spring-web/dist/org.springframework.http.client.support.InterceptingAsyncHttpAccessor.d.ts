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
                    abstract class InterceptingAsyncHttpAccessor extends org.springframework.http.client.support.AsyncHttpAccessor {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the request interceptors that this accessor should use.
                         * @param interceptors the list of interceptors
                         */
                        // @ts-ignore
                        public setInterceptors(interceptors: java.util.List<org.springframework.http.client.AsyncClientHttpRequestInterceptor> | Array<org.springframework.http.client.AsyncClientHttpRequestInterceptor>): void
                        /**
                         * Return the request interceptor that this accessor uses.
                         */
                        // @ts-ignore
                        public getInterceptors(): Array<org.springframework.http.client.AsyncClientHttpRequestInterceptor>
                        // @ts-ignore
                        public getAsyncRequestFactory(): org.springframework.http.client.AsyncClientHttpRequestFactory
                    }
                }
            }
        }
    }
}
