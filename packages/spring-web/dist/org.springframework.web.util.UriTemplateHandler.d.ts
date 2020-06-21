declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Defines methods for expanding a URI template with variables.
                 * @author Rossen Stoyanchev
                 * @since 4.2
                 * @see org.springframework.web.client.RestTemplate#setUriTemplateHandler(UriTemplateHandler)
                 */
                // @ts-ignore
                interface UriTemplateHandler {
                    /**
                     * Expand the given URI template with a map of URI variables.
                     * @param uriTemplate the URI template
                     * @param uriVariables variable values
                     * @return the created URI instance
                     */
                    // @ts-ignore
                    expand(uriTemplate: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): java.net.URI
                    /**
                     * Expand the given URI template with an array of URI variables.
                     * @param uriTemplate the URI template
                     * @param uriVariables variable values
                     * @return the created URI instance
                     */
                    // @ts-ignore
                    expand(uriTemplate: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): java.net.URI
                }
            }
        }
    }
}
