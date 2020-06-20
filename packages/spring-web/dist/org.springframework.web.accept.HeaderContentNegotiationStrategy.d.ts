declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * A {@code ContentNegotiationStrategy} that checks the 'Accept' request header.
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 3.2
                 */
                // @ts-ignore
                class HeaderContentNegotiationStrategy extends java.lang.Object implements org.springframework.web.accept.ContentNegotiationStrategy {
                    // @ts-ignore
                    constructor()
                    /**
                     * {@inheritDoc}
                     * @throws HttpMediaTypeNotAcceptableException if the 'Accept' header cannot be parsed
                     */
                    // @ts-ignore
                    resolveMediaTypes(request: org.springframework.web.context.request.NativeWebRequest): java.util.List<org.springframework.http.MediaType>
                }
            }
        }
    }
}
