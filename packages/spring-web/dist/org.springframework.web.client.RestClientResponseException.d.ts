declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Common base class for exceptions that contain actual HTTP response data.
                 * @author Rossen Stoyanchev
                 * @since 4.3
                 */
                // @ts-ignore
                class RestClientResponseException extends org.springframework.web.client.RestClientException {
                    /**
                     * Construct a new instance of with the given response data.
                     * @param statusCode the raw status code value
                     * @param statusText the status text
                     * @param responseHeaders the response headers (may be {#code null})
                     * @param responseBody the response body content (may be {#code null})
                     * @param responseCharset the response body charset (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(message: string, statusCode: number /*int*/, statusText: string, responseHeaders: org.springframework.http.HttpHeaders, responseBody: number /*byte*/[], responseCharset: java.nio.charset.Charset)
                    /**
                     * Return the raw HTTP status code value.
                     */
                    // @ts-ignore
                    getRawStatusCode(): int
                    /**
                     * Return the HTTP status text.
                     */
                    // @ts-ignore
                    getStatusText(): java.lang.String
                    /**
                     * Return the HTTP response headers.
                     */
                    // @ts-ignore
                    getResponseHeaders(): org.springframework.http.HttpHeaders
                    /**
                     * Return the response body as a byte array.
                     */
                    // @ts-ignore
                    getResponseBodyAsByteArray(): byte[]
                    /**
                     * Return the response body converted to String. The charset used is that
                     * of the response "Content-Type" or otherwise {@code "UTF-8"}.
                     */
                    // @ts-ignore
                    getResponseBodyAsString(): java.lang.String
                    /**
                     * Return the response body converted to String. The charset used is that
                     * of the response "Content-Type" or otherwise the one given.
                     * @param fallbackCharset the charset to use on if the response doesn't specify.
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    getResponseBodyAsString(fallbackCharset: java.nio.charset.Charset): java.lang.String
                }
            }
        }
    }
}
