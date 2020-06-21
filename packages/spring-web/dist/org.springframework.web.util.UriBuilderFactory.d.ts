declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Factory to create {@link UriBuilder} instances with shared configuration
                 * such as a base URI, an encoding mode strategy, and others across all URI
                 * builder instances created through a factory.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface UriBuilderFactory extends org.springframework.web.util.UriTemplateHandler {
                    /**
                     * Initialize a builder with the given URI template.
                     * @param uriTemplate the URI template to use
                     * @return the URI builder instance
                     */
                    // @ts-ignore
                    uriString(uriTemplate: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Create a URI builder with default settings.
                     * @return the builder instance
                     */
                    // @ts-ignore
                    builder(): org.springframework.web.util.UriBuilder
                }
            }
        }
    }
}
