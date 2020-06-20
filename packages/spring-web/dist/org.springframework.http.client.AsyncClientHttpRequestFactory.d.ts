declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Factory for {@link AsyncClientHttpRequest} objects.
                 * Requests are created by the {@link #createAsyncRequest(URI, HttpMethod)} method.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @deprecated as of Spring 5.0, in favor of {#link org.springframework.http.client.reactive.ClientHttpConnector}
                 */
                // @ts-ignore
                interface AsyncClientHttpRequestFactory {
                    /**
                     * Create a new asynchronous {@link AsyncClientHttpRequest} for the specified URI
                     * and HTTP method.
                     * <p>The returned request can be written to, and then executed by calling
                     * {@link AsyncClientHttpRequest#executeAsync()}.
                     * @param uri the URI to create a request for
                     * @param httpMethod the HTTP method to execute
                     * @return the created request
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    createAsyncRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                }
            }
        }
    }
}
