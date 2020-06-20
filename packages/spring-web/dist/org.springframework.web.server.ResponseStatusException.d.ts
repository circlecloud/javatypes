declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Base class for exceptions associated with specific HTTP response status codes.
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 5.0
                 */
                // @ts-ignore
                class ResponseStatusException extends NestedRuntimeException {
                    /**
                     * Constructor with a response status.
                     * @param status the HTTP status (required)
                     */
                    // @ts-ignore
                    constructor(status: org.springframework.http.HttpStatus)
                    /**
                     * Constructor with a response status and a reason to add to the exception
                     * message as explanation.
                     * @param status the HTTP status (required)
                     * @param reason the associated reason (optional)
                     */
                    // @ts-ignore
                    constructor(status: org.springframework.http.HttpStatus, reason: string)
                    /**
                     * Constructor with a response status and a reason to add to the exception
                     * message as explanation, as well as a nested exception.
                     * @param status the HTTP status (required)
                     * @param reason the associated reason (optional)
                     * @param cause a nested exception (optional)
                     */
                    // @ts-ignore
                    constructor(status: org.springframework.http.HttpStatus, reason: string, cause: Error)
                    /**
                     * Return the HTTP status associated with this exception.
                     */
                    // @ts-ignore
                    getStatus(): org.springframework.http.HttpStatus
                    /**
                     * Return headers associated with the exception that should be added to the
                     * error response, e.g. "Allow", "Accept", etc.
                     * <p>The default implementation in this class returns an empty map.
                     * @since 5.1.11
                     * @deprecated as of 5.1.13 in favor of {#link #getResponseHeaders()}
                     */
                    // @ts-ignore
                    getHeaders(): java.util.Map<java.lang.String, java.lang.String>
                    /**
                     * Return headers associated with the exception that should be added to the
                     * error response, e.g. "Allow", "Accept", etc.
                     * <p>The default implementation in this class returns empty headers.
                     * @since 5.1.13
                     */
                    // @ts-ignore
                    getResponseHeaders(): org.springframework.http.HttpHeaders
                    /**
                     * The reason explaining the exception (potentially {@code null} or empty).
                     */
                    // @ts-ignore
                    getReason(): java.lang.String
                    // @ts-ignore
                    getMessage(): java.lang.String
                }
            }
        }
    }
}
