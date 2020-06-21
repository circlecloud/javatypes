declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * Extends {@code PathExtensionContentNegotiationStrategy} that also uses
                 * {@link ServletContext#getMimeType(String)} to resolve file extensions.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 * @deprecated as of 5.2.4. See class-level note in
                 *  {#link ContentNegotiationManagerFactoryBean} on the deprecation of path
                 *  extension config options.
                 */
                // @ts-ignore
                class ServletPathExtensionContentNegotiationStrategy extends org.springframework.web.accept.PathExtensionContentNegotiationStrategy {
                    /**
                     * Create an instance without any mappings to start with. Mappings may be
                     * added later when extensions are resolved through
                     * {@link ServletContext#getMimeType(String)} or via
                     * {@link org.springframework.http.MediaTypeFactory}.
                     */
                    // @ts-ignore
                    constructor(context: ServletContext)
                    /**
                     * Create an instance with the given extension-to-MediaType lookup.
                     */
                    // @ts-ignore
                    constructor(servletContext: ServletContext, mediaTypes: java.util.Map<java.lang.String | string, org.springframework.http.MediaType>)
                    /**
                     * Resolve file extension via {@link ServletContext#getMimeType(String)}
                     * and also delegate to base class for a potential
                     * {@link org.springframework.http.MediaTypeFactory} lookup.
                     */
                    // @ts-ignore
                    handleNoMatch(webRequest: org.springframework.web.context.request.NativeWebRequest, extension: java.lang.String | string): org.springframework.http.MediaType
                    /**
                     * Extends the base class
                     * {@link PathExtensionContentNegotiationStrategy#getMediaTypeForResource}
                     * with the ability to also look up through the ServletContext.
                     * @param resource the resource to look up
                     * @return the MediaType for the extension, or {#code null} if none found
                     * @since 4.3
                     */
                    // @ts-ignore
                    public getMediaTypeForResource(resource: Resource): org.springframework.http.MediaType
                }
            }
        }
    }
}
