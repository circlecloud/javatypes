declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Represents a client-side asynchronous HTTP request. Created via an
                 * implementation of the {@link AsyncClientHttpRequestFactory}.
                 * <p>A {@code AsyncHttpRequest} can be {@linkplain #executeAsync() executed},
                 * getting a future {@link ClientHttpResponse} which can be read from.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @see AsyncClientHttpRequestFactory#createAsyncRequest
                 * @deprecated as of Spring 5.0, in favor of {#link org.springframework.web.reactive.function.client.ClientRequest}
                 */
                // @ts-ignore
                interface AsyncClientHttpRequest extends org.springframework.http.HttpRequest, org.springframework.http.HttpOutputMessage {
                    /**
                     * Execute this request asynchronously, resulting in a Future handle.
                     * {@link ClientHttpResponse} that can be read.
                     * @return the future response result of the execution
                     * @throws java.io.IOException in case of I/O errors
                     */
                    // @ts-ignore
                    executeAsync(): <any>
                }
            }
        }
    }
}
