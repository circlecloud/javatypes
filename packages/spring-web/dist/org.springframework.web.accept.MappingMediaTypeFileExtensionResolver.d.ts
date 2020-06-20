declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * An implementation of {@code MediaTypeFileExtensionResolver} that maintains
                 * lookups between file extensions and MediaTypes in both directions.
                 * <p>Initially created with a map of file extensions and media types.
                 * Subsequently subclasses can use {@link #addMapping} to add more mappings.
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 3.2
                 */
                // @ts-ignore
                class MappingMediaTypeFileExtensionResolver extends java.lang.Object implements org.springframework.web.accept.MediaTypeFileExtensionResolver {
                    /**
                     * Create an instance with the given map of file extensions and media types.
                     */
                    // @ts-ignore
                    constructor(mediaTypes: java.util.Map<java.lang.String, org.springframework.http.MediaType>)
                    // @ts-ignore
                    getMediaTypes(): java.util.Map<java.lang.String, org.springframework.http.MediaType>
                    // @ts-ignore
                    getAllMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    /**
                     * Map an extension to a MediaType. Ignore if extension already mapped.
                     */
                    // @ts-ignore
                    addMapping(extension: string, mediaType: org.springframework.http.MediaType): void
                    // @ts-ignore
                    resolveFileExtensions(mediaType: org.springframework.http.MediaType): java.util.List<java.lang.String>
                    // @ts-ignore
                    getAllFileExtensions(): java.util.List<java.lang.String>
                    /**
                     * Use this method for a reverse lookup from extension to MediaType.
                     * @return a MediaType for the extension, or {#code null} if none found
                     */
                    // @ts-ignore
                    lookupMediaType(extension: string): org.springframework.http.MediaType
                }
            }
        }
    }
}
