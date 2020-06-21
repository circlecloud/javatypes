declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace adapter {
                    /**
                     * Extract values from "Forwarded" and "X-Forwarded-*" headers to override
                     * the request URI (i.e. {@link ServerHttpRequest#getURI()}) so it reflects
                     * the client-originated protocol and address.
                     * <p>Alternatively if {@link #setRemoveOnly removeOnly} is set to "true",
                     * then "Forwarded" and "X-Forwarded-*" headers are only removed, and not used.
                     * <p>An instance of this class is typically declared as a bean with the name
                     * "forwardedHeaderTransformer" and detected by
                     * {@link WebHttpHandlerBuilder#applicationContext(ApplicationContext)}, or it
                     * can also be registered directly via
                     * {@link WebHttpHandlerBuilder#forwardedHeaderTransformer(ForwardedHeaderTransformer)}.
                     * @author Rossen Stoyanchev
                     * @since 5.1
                     * @see <a href="https://tools.ietf.org/html/rfc7239">https://tools.ietf.org/html/rfc7239</a>
                     */
                    // @ts-ignore
                    class ForwardedHeaderTransformer extends java.lang.Object implements java.util.function.Function<org.springframework.http.server.reactive.ServerHttpRequest, org.springframework.http.server.reactive.ServerHttpRequest> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Enable mode in which any "Forwarded" or "X-Forwarded-*" headers are
                         * removed only and the information in them ignored.
                         * @param removeOnly whether to discard and ignore forwarded headers
                         */
                        // @ts-ignore
                        public setRemoveOnly(removeOnly: boolean): void
                        /**
                         * Whether the "remove only" mode is on.
                         * @see #setRemoveOnly
                         */
                        // @ts-ignore
                        public isRemoveOnly(): boolean
                        /**
                         * Apply and remove, or remove Forwarded type headers.
                         * @param request the request
                         */
                        // @ts-ignore
                        public apply(request: org.springframework.http.server.reactive.ServerHttpRequest): org.springframework.http.server.reactive.ServerHttpRequest
                        /**
                         * Whether the request has any Forwarded headers.
                         * @param request the request
                         */
                        // @ts-ignore
                        hasForwardedHeaders(request: org.springframework.http.server.reactive.ServerHttpRequest): boolean
                    }
                }
            }
        }
    }
}
