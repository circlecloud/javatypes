declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                namespace reactive {
                    /**
                     * Utility class for CORS reactive request handling based on the
                     * <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    abstract class CorsUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Returns {@code true} if the request is a valid CORS one by checking {@code Origin}
                         * header presence and ensuring that origins are different via {@link #isSameOrigin}.
                         */
                        // @ts-ignore
                        public static isCorsRequest(request: org.springframework.http.server.reactive.ServerHttpRequest): boolean
                        /**
                         * Returns {@code true} if the request is a valid CORS pre-flight one by checking {code OPTIONS} method with
                         * {@code Origin} and {@code Access-Control-Request-Method} headers presence.
                         */
                        // @ts-ignore
                        public static isPreFlightRequest(request: org.springframework.http.server.reactive.ServerHttpRequest): boolean
                        /**
                         * Check if the request is a same-origin one, based on {@code Origin}, and
                         * {@code Host} headers.
                         * <p><strong>Note:</strong> as of 5.1 this method ignores
                         * {@code "Forwarded"} and {@code "X-Forwarded-*"} headers that specify the
                         * client-originated address. Consider using the {@code ForwardedHeaderFilter}
                         * to extract and use, or to discard such headers.
                         * @return {#code true} if the request is a same-origin one, {@code false} in case
                         *  of a cross-origin request
                         * @deprecated as of 5.2, same-origin checks are performed directly by {#link #isCorsRequest}
                         */
                        // @ts-ignore
                        public static isSameOrigin(request: org.springframework.http.server.reactive.ServerHttpRequest): boolean
                    }
                }
            }
        }
    }
}
