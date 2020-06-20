declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * {@code HttpHandler} delegating requests to one of several {@code HttpHandler}'s
                     * based on simple, prefix-based mappings.
                     * <p>This is intended as a coarse-grained mechanism for delegating requests to
                     * one of several applications -- each represented by an {@code HttpHandler}, with
                     * the application "context path" (the prefix-based mapping) exposed via
                     * {@link ServerHttpRequest#getPath()}.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ContextPathCompositeHandler extends java.lang.Object implements org.springframework.http.server.reactive.HttpHandler {
                        // @ts-ignore
                        constructor(handlerMap: java.util.Map<java.lang.String, org.springframework.http.server.reactive.HttpHandler>)
                        // @ts-ignore
                        handle(request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): <any>
                    }
                }
            }
        }
    }
}
