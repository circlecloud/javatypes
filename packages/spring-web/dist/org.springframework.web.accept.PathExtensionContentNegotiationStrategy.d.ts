declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * A {@code ContentNegotiationStrategy} that resolves the file extension in the
                 * request path to a key to be used to look up a media type.
                 * <p>If the file extension is not found in the explicit registrations provided
                 * to the constructor, the {@link MediaTypeFactory} is used as a fallback
                 * mechanism.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 * @deprecated as of 5.2.4. See class-level note in
                 *  {#link ContentNegotiationManagerFactoryBean} on the deprecation of path
                 *  extension config options.
                 */
                // @ts-ignore
                class PathExtensionContentNegotiationStrategy extends org.springframework.web.accept.AbstractMappingContentNegotiationStrategy {
                    /**
                     * Create an instance without any mappings to start with. Mappings may be added
                     * later on if any extensions are resolved through the Java Activation framework.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create an instance with the given map of file extensions and media types.
                     */
                    // @ts-ignore
                    constructor(mediaTypes: java.util.Map<java.lang.String, org.springframework.http.MediaType>)
                    /**
                     * Configure a {@code UrlPathHelper} to use in {@link #getMediaTypeKey}
                     * in order to derive the lookup path for a target request URL path.
                     * @since 4.2.8
                     */
                    // @ts-ignore
                    setUrlPathHelper(urlPathHelper: org.springframework.web.util.UrlPathHelper): void
                    /**
                     * Indicate whether to use the Java Activation Framework as a fallback option
                     * to map from file extensions to media types.
                     * @deprecated as of 5.0, in favor of {#link #setUseRegisteredExtensionsOnly(boolean)}.
                     */
                    // @ts-ignore
                    setUseJaf(useJaf: boolean): void
                    // @ts-ignore
                    getMediaTypeKey(webRequest: org.springframework.web.context.request.NativeWebRequest): java.lang.String
                    /**
                     * A public method exposing the knowledge of the path extension strategy to
                     * resolve file extensions to a {@link MediaType} in this case for a given
                     * {@link Resource}. The method first looks up any explicitly registered
                     * file extensions first and then falls back on {@link MediaTypeFactory} if available.
                     * @param resource the resource to look up
                     * @return the MediaType for the extension, or {#code null} if none found
                     * @since 4.3
                     */
                    // @ts-ignore
                    getMediaTypeForResource(resource: Resource): org.springframework.http.MediaType
                }
            }
        }
    }
}
