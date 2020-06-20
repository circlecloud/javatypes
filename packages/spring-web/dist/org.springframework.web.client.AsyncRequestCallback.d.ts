declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Callback interface for code that operates on an
                 * {@link org.springframework.http.client.AsyncClientHttpRequest}. Allows to
                 * manipulate the request headers, and write to the request body.
                 * <p>Used internally by the {@link AsyncRestTemplate}, but also useful for
                 * application code.
                 * @author Arjen Poutsma
                 * @see org.springframework.web.client.AsyncRestTemplate#execute
                 * @since 4.0
                 * @deprecated as of Spring 5.0, in favor of
                 *  {#link org.springframework.web.reactive.function.client.ExchangeFilterFunction}
                 */
                // @ts-ignore
                interface AsyncRequestCallback {
                    /**
                     * Gets called by {@link AsyncRestTemplate#execute} with an opened {@code ClientHttpRequest}.
                     * Does not need to care about closing the request or about handling errors:
                     * this will all be handled by the {@code RestTemplate}.
                     * @param request the active HTTP request
                     * @throws java.io.IOException in case of I/O errors
                     */
                    // @ts-ignore
                    doWithRequest(request: org.springframework.http.client.AsyncClientHttpRequest): void
                }
            }
        }
    }
}
