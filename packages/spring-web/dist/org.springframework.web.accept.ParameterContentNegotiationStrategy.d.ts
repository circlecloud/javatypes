declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * Strategy that resolves the requested content type from a query parameter.
                 * The default query parameter name is {@literal "format"}.
                 * <p>You can register static mappings between keys (i.e. the expected value of
                 * the query parameter) and MediaType's via {@link #addMapping(String, MediaType)}.
                 * As of 5.0 this strategy also supports dynamic lookups of keys via
                 * {@link org.springframework.http.MediaTypeFactory#getMediaType}.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                class ParameterContentNegotiationStrategy extends org.springframework.web.accept.AbstractMappingContentNegotiationStrategy {
                    /**
                     * Create an instance with the given map of file extensions and media types.
                     */
                    // @ts-ignore
                    constructor(mediaTypes: java.util.Map<java.lang.String, org.springframework.http.MediaType>)
                    /**
                     * Set the name of the parameter to use to determine requested media types.
                     * <p>By default this is set to {@code "format"}.
                     */
                    // @ts-ignore
                    setParameterName(parameterName: string): void
                    // @ts-ignore
                    getParameterName(): java.lang.String
                    // @ts-ignore
                    getMediaTypeKey(request: org.springframework.web.context.request.NativeWebRequest): java.lang.String
                }
            }
        }
    }
}
