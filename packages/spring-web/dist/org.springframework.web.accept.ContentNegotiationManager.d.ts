declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * Central class to determine requested {@linkplain MediaType media types}
                 * for a request. This is done by delegating to a list of configured
                 * {@code ContentNegotiationStrategy} instances.
                 * <p>Also provides methods to look up file extensions for a media type.
                 * This is done by delegating to the list of configured
                 * {@code MediaTypeFileExtensionResolver} instances.
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 3.2
                 */
                // @ts-ignore
                class ContentNegotiationManager extends java.lang.Object implements org.springframework.web.accept.ContentNegotiationStrategy, org.springframework.web.accept.MediaTypeFileExtensionResolver {
                    /**
                     * Create an instance with the given list of
                     * {@code ContentNegotiationStrategy} strategies each of which may also be
                     * an instance of {@code MediaTypeFileExtensionResolver}.
                     * @param strategies the strategies to use
                     */
                    // @ts-ignore
                    constructor(...strategies: org.springframework.web.accept.ContentNegotiationStrategy[])
                    /**
                     * A collection-based alternative to
                     * {@link #ContentNegotiationManager(ContentNegotiationStrategy...)}.
                     * @param strategies the strategies to use
                     * @since 3.2.2
                     */
                    // @ts-ignore
                    constructor(strategies: Array<org.springframework.web.accept.ContentNegotiationStrategy>)
                    /**
                     * Create a default instance with a {@link HeaderContentNegotiationStrategy}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the configured content negotiation strategies.
                     * @since 3.2.16
                     */
                    // @ts-ignore
                    getStrategies(): java.util.List<org.springframework.web.accept.ContentNegotiationStrategy>
                    /**
                     * Find a {@code ContentNegotiationStrategy} of the given type.
                     * @param strategyType the strategy type
                     * @return the first matching strategy, or {#code null} if none
                     * @since 4.3
                     */
                    // @ts-ignore
                    getStrategy<T extends org.springframework.web.accept.ContentNegotiationStrategy>(strategyType: java.lang.Class<T>): T
                    /**
                     * Register more {@code MediaTypeFileExtensionResolver} instances in addition
                     * to those detected at construction.
                     * @param resolvers the resolvers to add
                     */
                    // @ts-ignore
                    addFileExtensionResolvers(...resolvers: org.springframework.web.accept.MediaTypeFileExtensionResolver[]): void
                    // @ts-ignore
                    resolveMediaTypes(request: org.springframework.web.context.request.NativeWebRequest): java.util.List<org.springframework.http.MediaType>
                    // @ts-ignore
                    resolveFileExtensions(mediaType: org.springframework.http.MediaType): java.util.List<java.lang.String>
                    /**
                     * {@inheritDoc}
                     * <p>At startup this method returns extensions explicitly registered with
                     * either {@link PathExtensionContentNegotiationStrategy} or
                     * {@link ParameterContentNegotiationStrategy}. At runtime if there is a
                     * "path extension" strategy and its
                     * {@link PathExtensionContentNegotiationStrategy#setUseRegisteredExtensionsOnly(boolean)
                     * useRegisteredExtensionsOnly} property is set to "false", the list of extensions may
                     * increase as file extensions are resolved via
                     * {@link org.springframework.http.MediaTypeFactory} and cached.
                     */
                    // @ts-ignore
                    getAllFileExtensions(): java.util.List<java.lang.String>
                    /**
                     * Return all registered lookup key to media type mappings by iterating
                     * {@link MediaTypeFileExtensionResolver}s.
                     * @since 5.2.4
                     */
                    // @ts-ignore
                    getMediaTypeMappings(): java.util.Map<java.lang.String, org.springframework.http.MediaType>
                }
            }
        }
    }
}
