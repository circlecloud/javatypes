declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Spring's default implementation of the {@link ResponseErrorHandler} interface.
                 * <p>This error handler checks for the status code on the {@link ClientHttpResponse}:
                 * Any code with series {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR}
                 * or {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR} is considered to be
                 * an error; this behavior can be changed by overriding the {@link #hasError(HttpStatus)}
                 * method. Unknown status codes will be ignored by {@link #hasError(ClientHttpResponse)}.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see RestTemplate#setErrorHandler
                 */
                // @ts-ignore
                class DefaultResponseErrorHandler extends java.lang.Object implements org.springframework.web.client.ResponseErrorHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Delegates to {@link #hasError(HttpStatus)} (for a standard status enum value) or
                     * {@link #hasError(int)} (for an unknown status code) with the response status code.
                     * @see ClientHttpResponse#getRawStatusCode()
                     * @see #hasError(HttpStatus)
                     * @see #hasError(int)
                     */
                    // @ts-ignore
                    public hasError(response: org.springframework.http.client.ClientHttpResponse): boolean
                    /**
                     * Template method called from {@link #hasError(ClientHttpResponse)}.
                     * <p>The default implementation checks {@link HttpStatus#isError()}.
                     * Can be overridden in subclasses.
                     * @param statusCode the HTTP status code as enum value
                     * @return {#code true} if the response indicates an error; {@code false} otherwise
                     * @see HttpStatus#isError()
                     */
                    // @ts-ignore
                    hasError(statusCode: org.springframework.http.HttpStatus): boolean
                    /**
                     * Template method called from {@link #hasError(ClientHttpResponse)}.
                     * <p>The default implementation checks if the given status code is
                     * {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR CLIENT_ERROR} or
                     * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR SERVER_ERROR}.
                     * Can be overridden in subclasses.
                     * @param unknownStatusCode the HTTP status code as raw value
                     * @return {#code true} if the response indicates an error; {@code false} otherwise
                     * @since 4.3.21
                     * @see org.springframework.http.HttpStatus.Series#CLIENT_ERROR
                     * @see org.springframework.http.HttpStatus.Series#SERVER_ERROR
                     */
                    // @ts-ignore
                    hasError(unknownStatusCode: number /*int*/): boolean
                    /**
                     * Delegates to {@link #handleError(ClientHttpResponse, HttpStatus)} with the
                     * response status code.
                     * @throws UnknownHttpStatusCodeException in case of an unresolvable status code
                     * @see #handleError(ClientHttpResponse, HttpStatus)
                     */
                    // @ts-ignore
                    public handleError(response: org.springframework.http.client.ClientHttpResponse): void
                    /**
                     * Handle the error in the given response with the given resolved status code.
                     * <p>The default implementation throws an {@link HttpClientErrorException}
                     * if the status code is {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR
                     * CLIENT_ERROR}, an {@link HttpServerErrorException} if it is
                     * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR SERVER_ERROR},
                     * or an {@link UnknownHttpStatusCodeException} in other cases.
                     * @since 5.0
                     * @see HttpClientErrorException#create
                     * @see HttpServerErrorException#create
                     */
                    // @ts-ignore
                    handleError(response: org.springframework.http.client.ClientHttpResponse, statusCode: org.springframework.http.HttpStatus): void
                    /**
                     * Determine the HTTP status of the given response.
                     * @param response the response to inspect
                     * @return the associated HTTP status
                     * @throws IOException in case of I/O errors
                     * @throws UnknownHttpStatusCodeException in case of an unknown status code
                     *  that cannot be represented with the {#link HttpStatus} enum
                     * @since 4.3.8
                     * @deprecated as of 5.0, in favor of {#link #handleError(ClientHttpResponse, HttpStatus)}
                     */
                    // @ts-ignore
                    getHttpStatusCode(response: org.springframework.http.client.ClientHttpResponse): org.springframework.http.HttpStatus
                    /**
                     * Read the body of the given response (for inclusion in a status exception).
                     * @param response the response to inspect
                     * @return the response body as a byte array,
                     *  or an empty byte array if the body could not be read
                     * @since 4.3.8
                     */
                    // @ts-ignore
                    getResponseBody(response: org.springframework.http.client.ClientHttpResponse): number /*byte*/[]
                    /**
                     * Determine the charset of the response (for inclusion in a status exception).
                     * @param response the response to inspect
                     * @return the associated charset, or {#code null} if none
                     * @since 4.3.8
                     */
                    // @ts-ignore
                    getCharset(response: org.springframework.http.client.ClientHttpResponse): java.nio.charset.Charset
                }
            }
        }
    }
}
