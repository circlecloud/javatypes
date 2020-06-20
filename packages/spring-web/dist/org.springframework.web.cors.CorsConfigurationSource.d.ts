declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                /**
                 * Interface to be implemented by classes (usually HTTP request handlers) that
                 * provides a {@link CorsConfiguration} instance based on the provided request.
                 * @author Sebastien Deleuze
                 * @since 4.2
                 */
                // @ts-ignore
                interface CorsConfigurationSource {
                    /**
                     * Return a {@link CorsConfiguration} based on the incoming request.
                     * @return the associated {#link CorsConfiguration}, or {@code null} if none
                     */
                    // @ts-ignore
                    getCorsConfiguration(request: HttpServletRequest): org.springframework.web.cors.CorsConfiguration
                }
            }
        }
    }
}
