declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Factory for {@link ClientHttpRequest} objects.
                 * Requests are created by the {@link #createRequest(URI, HttpMethod)} method.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                interface ClientHttpRequestFactory {
                    /**
                     * Create a new {@link ClientHttpRequest} for the specified URI and HTTP method.
                     * <p>The returned request can be written to, and then executed by calling
                     * {@link ClientHttpRequest#execute()}.
                     * @param uri the URI to create a request for
                     * @param httpMethod the HTTP method to execute
                     * @return the created request
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                }
            }
        }
    }
}
