declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Intercepts client-side HTTP requests. Implementations of this interface can be
                 * {@linkplain org.springframework.web.client.AsyncRestTemplate#setInterceptors registered}
                 * with the {@link org.springframework.web.client.AsyncRestTemplate} as to modify
                 * the outgoing {@link HttpRequest} and/or register to modify the incoming
                 * {@link ClientHttpResponse} with help of a
                 * {@link org.springframework.util.concurrent.ListenableFutureAdapter}.
                 * <p>The main entry point for interceptors is {@link #intercept}.
                 * @author Jakub Narloch
                 * @author Rossen Stoyanchev
                 * @since 4.3
                 * @see org.springframework.web.client.AsyncRestTemplate
                 * @see org.springframework.http.client.support.InterceptingAsyncHttpAccessor
                 * @deprecated as of Spring 5.0, in favor of
                 *  {#link org.springframework.web.reactive.function.client.ExchangeFilterFunction}
                 */
                // @ts-ignore
                interface AsyncClientHttpRequestInterceptor {
                    /**
                     * Intercept the given request, and return a response future. The given
                     * {@link AsyncClientHttpRequestExecution} allows the interceptor to pass on
                     * the request to the next entity in the chain.
                     * <p>An implementation might follow this pattern:
                     * <ol>
                     * <li>Examine the {@linkplain HttpRequest request} and body</li>
                     * <li>Optionally {@linkplain org.springframework.http.client.support.HttpRequestWrapper
                     * wrap} the request to filter HTTP attributes.</li>
                     * <li>Optionally modify the body of the request.</li>
                     * <li>One of the following:
                     * <ul>
                     * <li>execute the request through {@link ClientHttpRequestExecution}</li>
                     * <li>don't execute the request to block the execution altogether</li>
                     * </ul>
                     * <li>Optionally adapt the response to filter HTTP attributes with the help of
                     * {@link org.springframework.util.concurrent.ListenableFutureAdapter
                     * ListenableFutureAdapter}.</li>
                     * </ol>
                     * @param request the request, containing method, URI, and headers
                     * @param body the body of the request
                     * @param execution the request execution
                     * @return the response future
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    intercept(request: org.springframework.http.HttpRequest, body: number /*byte*/[], execution: org.springframework.http.client.AsyncClientHttpRequestExecution): object
                }
            }
        }
    }
}
