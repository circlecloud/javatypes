declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Exception thrown when an unknown (or custom) HTTP status code is received.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                class UnknownHttpStatusCodeException extends org.springframework.web.client.RestClientResponseException {
                    /**
                     * Construct a new instance of {@code HttpStatusCodeException} based on an
                     * {@link HttpStatus}, status text, and response body content.
                     * @param rawStatusCode the raw status code value
                     * @param statusText the status text
                     * @param responseHeaders the response headers (may be {#code null})
                     * @param responseBody the response body content (may be {#code null})
                     * @param responseCharset the response body charset (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(rawStatusCode: number /*int*/, statusText: java.lang.String | string, responseHeaders: org.springframework.http.HttpHeaders, responseBody: number /*byte*/[], responseCharset: java.nio.charset.Charset)
                    /**
                     * Construct a new instance of {@code HttpStatusCodeException} based on an
                     * {@link HttpStatus}, status text, and response body content.
                     * @param rawStatusCode the raw status code value
                     * @param statusText the status text
                     * @param responseHeaders the response headers (may be {#code null})
                     * @param responseBody the response body content (may be {#code null})
                     * @param responseCharset the response body charset (may be {#code null})
                     * @since 5.2.2
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, rawStatusCode: number /*int*/, statusText: java.lang.String | string, responseHeaders: org.springframework.http.HttpHeaders, responseBody: number /*byte*/[], responseCharset: java.nio.charset.Charset)
                }
            }
        }
    }
}
