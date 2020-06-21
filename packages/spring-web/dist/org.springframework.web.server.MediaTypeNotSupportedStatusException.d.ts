declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Exception for errors that fit response status 415 (unsupported media type).
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @deprecated in favor of {#link UnsupportedMediaTypeStatusException},
                 *  with this class never thrown by Spring code and to be removed in 5.3
                 */
                // @ts-ignore
                class MediaTypeNotSupportedStatusException extends org.springframework.web.server.ResponseStatusException {
                    /**
                     * Constructor for when the Content-Type is invalid.
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string)
                    /**
                     * Constructor for when the Content-Type is not supported.
                     */
                    // @ts-ignore
                    constructor(supportedMediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>)
                    /**
                     * Return the list of supported content types in cases when the Accept
                     * header is parsed but not supported, or an empty list otherwise.
                     */
                    // @ts-ignore
                    public getSupportedMediaTypes(): Array<org.springframework.http.MediaType>
                }
            }
        }
    }
}
