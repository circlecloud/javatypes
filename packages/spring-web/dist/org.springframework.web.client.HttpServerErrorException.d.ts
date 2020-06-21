declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Exception thrown when an HTTP 5xx is received.
                 * @author Arjen Poutsma
                 * @since 3.0
                 * @see DefaultResponseErrorHandler
                 */
                // @ts-ignore
                class HttpServerErrorException extends org.springframework.web.client.HttpStatusCodeException {
                    /**
                     * Constructor with a status code only.
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus)
                    /**
                     * Constructor with a status code and status text.
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus, statusText: java.lang.String | string)
                    /**
                     * Constructor with a status code and status text, and content.
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus, statusText: java.lang.String | string, body: number /*byte*/[], charset: java.nio.charset.Charset)
                    /**
                     * Constructor with a status code and status text, headers, and content.
                     */
                    // @ts-ignore
                    constructor(statusCode: org.springframework.http.HttpStatus, statusText: java.lang.String | string, headers: org.springframework.http.HttpHeaders, body: number /*byte*/[], charset: java.nio.charset.Charset)
                    /**
                     * Constructor with a status code and status text, headers, content, and an
                     * prepared message.
                     * @since 5.2.2
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, statusCode: org.springframework.http.HttpStatus, statusText: java.lang.String | string, headers: org.springframework.http.HttpHeaders, body: number /*byte*/[], charset: java.nio.charset.Charset)
                    /**
                     * Create an {@code HttpServerErrorException} or an HTTP status specific sub-class.
                     * @since 5.1
                     */
                    // @ts-ignore
                    public static create(statusCode: org.springframework.http.HttpStatus, statusText: java.lang.String | string, headers: org.springframework.http.HttpHeaders, body: number /*byte*/[], charset: java.nio.charset.Charset): org.springframework.web.client.HttpServerErrorException
                    /**
                     * Variant of {@link #create(String, HttpStatus, String, HttpHeaders, byte[], Charset)}
                     * with an optional prepared message.
                     * @since 5.2.2.
                     */
                    // @ts-ignore
                    public static create(message: java.lang.String | string, statusCode: org.springframework.http.HttpStatus, statusText: java.lang.String | string, headers: org.springframework.http.HttpHeaders, body: number /*byte*/[], charset: java.nio.charset.Charset): org.springframework.web.client.HttpServerErrorException
                }
            }
        }
    }
}
