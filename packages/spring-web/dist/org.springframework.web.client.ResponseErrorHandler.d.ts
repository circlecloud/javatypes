declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Strategy interface used by the {@link RestTemplate} to determine
                 * whether a particular response has an error or not.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                interface ResponseErrorHandler {
                    /**
                     * Indicate whether the given response has any errors.
                     * <p>Implementations will typically inspect the
                     * {@link ClientHttpResponse#getStatusCode() HttpStatus} of the response.
                     * @param response the response to inspect
                     * @return {#code true} if the response indicates an error; {@code false} otherwise
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    hasError(response: org.springframework.http.client.ClientHttpResponse): boolean
                    /**
                     * Handle the error in the given response.
                     * <p>This method is only called when {@link #hasError(ClientHttpResponse)}
                     * has returned {@code true}.
                     * @param response the response with the error
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    handleError(response: org.springframework.http.client.ClientHttpResponse): void
                    /**
                     * Alternative to {@link #handleError(ClientHttpResponse)} with extra
                     * information providing access to the request URL and HTTP method.
                     * @param url the request URL
                     * @param method the HTTP method
                     * @param response the response with the error
                     * @throws IOException in case of I/O errors
                     * @since 5.0
                     */
                    // @ts-ignore
                    handleError(url: java.net.URI, method: org.springframework.http.HttpMethod, response: org.springframework.http.client.ClientHttpResponse): void
                }
            }
        }
    }
}
