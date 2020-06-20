declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Abstract base class for exceptions based on an {@link HttpStatus}.
                 * @author Arjen Poutsma
                 * @author Chris Beams
                 * @author Rossen Stoyanchev
                 * @since 3.0
                 */
                // @ts-ignore
                class HttpStatusCodeException extends org.springframework.web.client.RestClientResponseException {
                    /**
                     * Construct a new instance with an {@link HttpStatus}.
                     * @param statusCode the status code
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus)
                    /**
                     * Construct a new instance with an {@link HttpStatus} and status text.
                     * @param statusCode the status code
                     * @param statusText the status text
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus, statusText: string)
                    /**
                     * Construct instance with an {@link HttpStatus}, status text, and content.
                     * @param statusCode the status code
                     * @param statusText the status text
                     * @param responseBody the response body content, may be {#code null}
                     * @param responseCharset the response body charset, may be {#code null}
                     * @since 3.0.5
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus, statusText: string, responseBody: number /*byte*/[], responseCharset: java.nio.charset.Charset)
                    /**
                     * Construct instance with an {@link HttpStatus}, status text, content, and
                     * a response charset.
                     * @param statusCode the status code
                     * @param statusText the status text
                     * @param responseHeaders the response headers, may be {#code null}
                     * @param responseBody the response body content, may be {#code null}
                     * @param responseCharset the response body charset, may be {#code null}
                     * @since 3.1.2
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus, statusText: string, responseHeaders: org.springframework.http.HttpHeaders, responseBody: number /*byte*/[], responseCharset: java.nio.charset.Charset)
                    /**
                     * Construct instance with an {@link HttpStatus}, status text, content, and
                     * a response charset.
                     * @param message the exception message
                     * @param statusCode the status code
                     * @param statusText the status text
                     * @param responseHeaders the response headers, may be {#code null}
                     * @param responseBody the response body content, may be {#code null}
                     * @param responseCharset the response body charset, may be {#code null}
                     * @since 5.2.2
                     */
                    // @ts-ignore
                    constructor(message: string, statusCode: org.springframework.http.HttpStatus, statusText: string, responseHeaders: org.springframework.http.HttpHeaders, responseBody: number /*byte*/[], responseCharset: java.nio.charset.Charset)
                    /**
                     * Return the HTTP status code.
                     */
                    // @ts-ignore
                    getStatusCode(): org.springframework.http.HttpStatus
                }
            }
        }
    }
}
