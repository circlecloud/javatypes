declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Represents the context of a client-side HTTP request execution.
                 * <p>Used to invoke the next interceptor in the interceptor chain,
                 * or - if the calling interceptor is last - execute the request itself.
                 * @author Arjen Poutsma
                 * @since 3.1
                 * @see ClientHttpRequestInterceptor
                 */
                // @ts-ignore
                interface ClientHttpRequestExecution {
                    /**
                     * Execute the request with the given request attributes and body,
                     * and return the response.
                     * @param request the request, containing method, URI, and headers
                     * @param body the body of the request to execute
                     * @return the response
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    execute(request: org.springframework.http.HttpRequest, body: number /*byte*/[]): org.springframework.http.client.ClientHttpResponse
                }
            }
        }
    }
}
