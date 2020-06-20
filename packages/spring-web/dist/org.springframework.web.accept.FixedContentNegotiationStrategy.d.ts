declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * A {@code ContentNegotiationStrategy} that returns a fixed content type.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                class FixedContentNegotiationStrategy extends java.lang.Object implements org.springframework.web.accept.ContentNegotiationStrategy {
                    /**
                     * Constructor with a single default {@code MediaType}.
                     */
                    // @ts-ignore
                    constructor(contentType: org.springframework.http.MediaType)
                    /**
                     * Constructor with an ordered List of default {@code MediaType}'s to return
                     * for use in applications that support a variety of content types.
                     * <p>Consider appending {@link MediaType#ALL} at the end if destinations
                     * are present which do not support any of the other default media types.
                     * @since 5.0
                     */
                    // @ts-ignore
                    constructor(contentTypes: Array<org.springframework.http.MediaType>)
                    /**
                     * Return the configured list of media types.
                     */
                    // @ts-ignore
                    getContentTypes(): java.util.List<org.springframework.http.MediaType>
                    // @ts-ignore
                    resolveMediaTypes(request: org.springframework.web.context.request.NativeWebRequest): java.util.List<org.springframework.http.MediaType>
                }
            }
        }
    }
}
