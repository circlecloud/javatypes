declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Abstract base class for {@link ClientHttpRequestFactory} implementations
                 * that decorate another request factory.
                 * @author Arjen Poutsma
                 * @since 3.1
                 */
                // @ts-ignore
                class AbstractClientHttpRequestFactoryWrapper extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestFactory {
                    /**
                     * Create a {@code AbstractClientHttpRequestFactoryWrapper} wrapping the given request factory.
                     * @param requestFactory the request factory to be wrapped
                     */
                    // @ts-ignore
                    constructor(requestFactory: org.springframework.http.client.ClientHttpRequestFactory)
                    /**
                     * This implementation simply calls {@link #createRequest(URI, HttpMethod, ClientHttpRequestFactory)}
                     * with the wrapped request factory provided to the
                     * {@linkplain #AbstractClientHttpRequestFactoryWrapper(ClientHttpRequestFactory) constructor}.
                     */
                    // @ts-ignore
                    createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                    /**
                     * Create a new {@link ClientHttpRequest} for the specified URI and HTTP method
                     * by using the passed-on request factory.
                     * <p>Called from {@link #createRequest(URI, HttpMethod)}.
                     * @param uri the URI to create a request for
                     * @param httpMethod the HTTP method to execute
                     * @param requestFactory the wrapped request factory
                     * @return the created request
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    abstract createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod, requestFactory: org.springframework.http.client.ClientHttpRequestFactory): org.springframework.http.client.ClientHttpRequest
                }
            }
        }
    }
}
