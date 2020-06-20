declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                /**
                 * Utility class for CORS request handling based on the
                 * <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>.
                 * @author Sebastien Deleuze
                 * @since 4.2
                 */
                // @ts-ignore
                class CorsUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns {@code true} if the request is a valid CORS one by checking {@code Origin}
                     * header presence and ensuring that origins are different.
                     */
                    // @ts-ignore
                    isCorsRequest(request: HttpServletRequest): boolean
                    /**
                     * Returns {@code true} if the request is a valid CORS pre-flight one by checking {code OPTIONS} method with
                     * {@code Origin} and {@code Access-Control-Request-Method} headers presence.
                     */
                    // @ts-ignore
                    isPreFlightRequest(request: HttpServletRequest): boolean
                }
            }
        }
    }
}
