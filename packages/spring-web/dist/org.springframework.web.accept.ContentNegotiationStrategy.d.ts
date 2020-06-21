declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * A strategy for resolving the requested media types for a request.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                interface ContentNegotiationStrategy {
                    /**
                     * A singleton list with {@link MediaType#ALL} that is returned from
                     * {@link #resolveMediaTypes} when no specific media types are requested.
                     * @since 5.0.5
                     */
                    // @ts-ignore
                    readonly MEDIA_TYPE_ALL_LIST: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>
                    /**
                     * Resolve the given request to a list of media types. The returned list is
                     * ordered by specificity first and by quality parameter second.
                     * @param webRequest the current request
                     * @return the requested media types, or {#link #MEDIA_TYPE_ALL_LIST} if none
                     *  were requested.
                     * @throws HttpMediaTypeNotAcceptableException if the requested media
                     *  types cannot be parsed
                     */
                    // @ts-ignore
                    resolveMediaTypes(webRequest: org.springframework.web.context.request.NativeWebRequest): Array<org.springframework.http.MediaType>
                }
            }
        }
    }
}
