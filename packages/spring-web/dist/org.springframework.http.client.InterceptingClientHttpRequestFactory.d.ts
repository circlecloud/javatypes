declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * {@link ClientHttpRequestFactory} wrapper with support for
                 * {@link ClientHttpRequestInterceptor ClientHttpRequestInterceptors}.
                 * @author Arjen Poutsma
                 * @since 3.1
                 * @see ClientHttpRequestFactory
                 * @see ClientHttpRequestInterceptor
                 */
                // @ts-ignore
                class InterceptingClientHttpRequestFactory extends org.springframework.http.client.AbstractClientHttpRequestFactoryWrapper {
                    /**
                     * Create a new instance of the {@code InterceptingClientHttpRequestFactory} with the given parameters.
                     * @param requestFactory the request factory to wrap
                     * @param interceptors the interceptors that are to be applied (can be {#code null})
                     */
                    // @ts-ignore
                    constructor(requestFactory: org.springframework.http.client.ClientHttpRequestFactory, interceptors: java.util.List<org.springframework.http.client.ClientHttpRequestInterceptor> | Array<org.springframework.http.client.ClientHttpRequestInterceptor>)
                    // @ts-ignore
                    createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod, requestFactory: org.springframework.http.client.ClientHttpRequestFactory): org.springframework.http.client.ClientHttpRequest
                }
            }
        }
    }
}
