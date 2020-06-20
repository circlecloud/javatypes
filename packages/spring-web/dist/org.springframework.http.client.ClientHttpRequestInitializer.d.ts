declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Callback interface for initializing a {@link ClientHttpRequest} prior to it
                 * being used.
                 * <p>Typically used with {@link HttpAccessor} and subclasses such as
                 * {@link org.springframework.web.client.RestTemplate RestTemplate} to apply
                 * consistent settings or headers to each request.
                 * <p>Unlike {@link ClientHttpRequestInterceptor}, this interface can apply
                 * customizations without needing to read the entire request body into memory.
                 * @author Phillip Webb
                 * @since 5.2
                 * @see HttpAccessor#getClientHttpRequestInitializers()
                 */
                // @ts-ignore
                interface ClientHttpRequestInitializer {
                    /**
                     * Initialize the given client HTTP request.
                     * @param request the request to configure
                     */
                    // @ts-ignore
                    initialize(request: org.springframework.http.client.ClientHttpRequest): void
                }
            }
        }
    }
}
