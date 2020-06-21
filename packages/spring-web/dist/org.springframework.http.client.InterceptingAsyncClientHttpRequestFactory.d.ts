declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Wrapper for a {@link AsyncClientHttpRequestFactory} that has support for
                 * {@link AsyncClientHttpRequestInterceptor AsyncClientHttpRequestInterceptors}.
                 * @author Jakub Narloch
                 * @since 4.3
                 * @see InterceptingAsyncClientHttpRequest
                 * @deprecated as of Spring 5.0, with no direct replacement
                 */
                // @ts-ignore
                class InterceptingAsyncClientHttpRequestFactory extends java.lang.Object implements org.springframework.http.client.AsyncClientHttpRequestFactory {
                    /**
                     * Create new instance of {@link InterceptingAsyncClientHttpRequestFactory}
                     * with delegated request factory and list of interceptors.
                     * @param delegate the request factory to delegate to
                     * @param interceptors the list of interceptors to use
                     */
                    // @ts-ignore
                    constructor(delegate: org.springframework.http.client.AsyncClientHttpRequestFactory, interceptors: java.util.List<org.springframework.http.client.AsyncClientHttpRequestInterceptor> | Array<org.springframework.http.client.AsyncClientHttpRequestInterceptor>)
                    // @ts-ignore
                    public createAsyncRequest(uri: java.net.URI, method: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                }
            }
        }
    }
}
