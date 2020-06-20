declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Exception for errors that fit response status 406 (not acceptable).
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class NotAcceptableStatusException extends org.springframework.web.server.ResponseStatusException {
                    /**
                     * Constructor for when the requested Content-Type is invalid.
                     */
                    // @ts-ignore
                    constructor(reason: string)
                    /**
                     * Constructor for when the requested Content-Type is not supported.
                     */
                    // @ts-ignore
                    constructor(supportedMediaTypes: Array<org.springframework.http.MediaType>)
                    /**
                     * Return a Map with an "Accept" header.
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    getHeaders(): java.util.Map<java.lang.String, java.lang.String>
                    /**
                     * Return HttpHeaders with an "Accept" header, or an empty instance.
                     * @since 5.1.13
                     */
                    // @ts-ignore
                    getResponseHeaders(): org.springframework.http.HttpHeaders
                    /**
                     * Return the list of supported content types in cases when the Accept
                     * header is parsed but not supported, or an empty list otherwise.
                     */
                    // @ts-ignore
                    getSupportedMediaTypes(): java.util.List<org.springframework.http.MediaType>
                }
            }
        }
    }
}
