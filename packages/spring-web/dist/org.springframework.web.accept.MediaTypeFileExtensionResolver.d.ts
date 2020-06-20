declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * Strategy to resolve a {@link MediaType} to a list of file extensions &mdash;
                 * for example, to resolve "application/json" to "json".
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                interface MediaTypeFileExtensionResolver {
                    /**
                     * Resolve the given media type to a list of file extensions.
                     * @param mediaType the media type to resolve
                     * @return a list of extensions or an empty list (never {#code null})
                     */
                    // @ts-ignore
                    resolveFileExtensions(mediaType: org.springframework.http.MediaType): java.util.List<java.lang.String>
                    /**
                     * Get all registered file extensions.
                     * @return a list of extensions or an empty list (never {#code null})
                     */
                    // @ts-ignore
                    getAllFileExtensions(): java.util.List<java.lang.String>
                }
            }
        }
    }
}
