declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Represents a client-side HTTP request.
                 * Created via an implementation of the {@link ClientHttpRequestFactory}.
                 * <p>A {@code ClientHttpRequest} can be {@linkplain #execute() executed},
                 * receiving a {@link ClientHttpResponse} which can be read from.
                 * @author Arjen Poutsma
                 * @since 3.0
                 * @see ClientHttpRequestFactory#createRequest(java.net.URI, HttpMethod)
                 */
                // @ts-ignore
                interface ClientHttpRequest extends org.springframework.http.HttpRequest, org.springframework.http.HttpOutputMessage {
                    /**
                     * Execute this request, resulting in a {@link ClientHttpResponse} that can be read.
                     * @return the response result of the execution
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    execute(): org.springframework.http.client.ClientHttpResponse
                }
            }
        }
    }
}
