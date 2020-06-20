declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Wrapper for a {@link ClientHttpRequestFactory} that buffers
                 * all outgoing and incoming streams in memory.
                 * <p>Using this wrapper allows for multiple reads of the
                 * {@linkplain ClientHttpResponse#getBody() response body}.
                 * @author Arjen Poutsma
                 * @since 3.1
                 */
                // @ts-ignore
                class BufferingClientHttpRequestFactory extends org.springframework.http.client.AbstractClientHttpRequestFactoryWrapper {
                    /**
                     * Create a buffering wrapper for the given {@link ClientHttpRequestFactory}.
                     * @param requestFactory the target request factory to wrap
                     */
                    // @ts-ignore
                    constructor(requestFactory: org.springframework.http.client.ClientHttpRequestFactory)
                    // @ts-ignore
                    createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod, requestFactory: org.springframework.http.client.ClientHttpRequestFactory): org.springframework.http.client.ClientHttpRequest
                    /**
                     * Indicates whether the request/response exchange for the given URI and method
                     * should be buffered in memory.
                     * <p>The default implementation returns {@code true} for all URIs and methods.
                     * Subclasses can override this method to change this behavior.
                     * @param uri the URI
                     * @param httpMethod the method
                     * @return {#code true} if the exchange should be buffered; {@code false} otherwise
                     */
                    // @ts-ignore
                    shouldBuffer(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): boolean
                }
            }
        }
    }
}
