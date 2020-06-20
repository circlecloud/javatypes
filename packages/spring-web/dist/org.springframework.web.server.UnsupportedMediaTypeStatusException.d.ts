declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Exception for errors that fit response status 415 (unsupported media type).
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class UnsupportedMediaTypeStatusException extends org.springframework.web.server.ResponseStatusException {
                    /**
                     * Constructor for when the specified Content-Type is invalid.
                     */
                    // @ts-ignore
                    constructor(reason: string)
                    /**
                     * Constructor for when the Content-Type can be parsed but is not supported.
                     */
                    // @ts-ignore
                    constructor(contentType: org.springframework.http.MediaType, supportedTypes: Array<org.springframework.http.MediaType>)
                    /**
                     * Constructor for when trying to encode from or decode to a specific Java type.
                     * @since 5.1
                     */
                    // @ts-ignore
                    constructor(contentType: org.springframework.http.MediaType, supportedTypes: Array<org.springframework.http.MediaType>, bodyType: ResolvableType)
                    /**
                     * Return the request Content-Type header if it was parsed successfully,
                     * or {@code null} otherwise.
                     */
                    // @ts-ignore
                    getContentType(): org.springframework.http.MediaType
                    /**
                     * Return the list of supported content types in cases when the Content-Type
                     * header is parsed but not supported, or an empty list otherwise.
                     */
                    // @ts-ignore
                    getSupportedMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    /**
                     * Return the body type in the context of which this exception was generated.
                     * <p>This is applicable when the exception was raised as a result trying to
                     * encode from or decode to a specific Java type.
                     * @return the body type, or {#code null} if not available
                     * @since 5.1
                     */
                    // @ts-ignore
                    getBodyType(): ResolvableType
                }
            }
        }
    }
}
