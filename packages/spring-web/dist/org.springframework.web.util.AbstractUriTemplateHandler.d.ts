declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Abstract base class for {@link UriTemplateHandler} implementations.
                 * <p>Support {@link #setBaseUrl} and {@link #setDefaultUriVariables} properties
                 * that should be relevant regardless of the URI template expand and encode
                 * mechanism used in sub-classes.
                 * @author Rossen Stoyanchev
                 * @since 4.3
                 * @deprecated as of 5.0 in favor of {#link DefaultUriBuilderFactory}
                 */
                // @ts-ignore
                class AbstractUriTemplateHandler extends java.lang.Object implements org.springframework.web.util.UriTemplateHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Configure a base URL to prepend URI templates with. The base URL must
                     * have a scheme and host but may optionally contain a port and a path.
                     * The base URL must be fully expanded and encoded which can be done via
                     * {@link UriComponentsBuilder}.
                     * @param baseUrl the base URL.
                     */
                    // @ts-ignore
                    setBaseUrl(baseUrl: string): void
                    /**
                     * Return the configured base URL.
                     */
                    // @ts-ignore
                    getBaseUrl(): java.lang.String
                    /**
                     * Configure default URI variable values to use with every expanded URI
                     * template. These default values apply only when expanding with a Map, and
                     * not with an array, where the Map supplied to {@link #expand(String, Map)}
                     * can override the default values.
                     * @param defaultUriVariables the default URI variable values
                     * @since 4.3
                     */
                    // @ts-ignore
                    setDefaultUriVariables(defaultUriVariables: java.util.Map<java.lang.String, any>): void
                    /**
                     * Return a read-only copy of the configured default URI variables.
                     */
                    // @ts-ignore
                    getDefaultUriVariables(): java.util.Map<java.lang.String, ?>
                    // @ts-ignore
                    expand(uriTemplate: string, uriVariables: java.util.Map<java.lang.String, any>): java.net.URI
                    // @ts-ignore
                    expand(uriTemplate: string, ...uriVariables: any[]): java.net.URI
                    /**
                     * Actually expand and encode the URI template.
                     */
                    // @ts-ignore
                    abstract expandInternal(uriTemplate: string, uriVariables: java.util.Map<java.lang.String, any>): java.net.URI
                    /**
                     * Actually expand and encode the URI template.
                     */
                    // @ts-ignore
                    abstract expandInternal(uriTemplate: string, ...uriVariables: any[]): java.net.URI
                }
            }
        }
    }
}
