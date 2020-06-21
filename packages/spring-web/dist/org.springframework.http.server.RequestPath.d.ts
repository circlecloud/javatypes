declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * Represents the complete path for a request.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface RequestPath extends org.springframework.http.server.PathContainer {
                    /**
                     * Returns the portion of the URL path that represents the application.
                     * The context path is always at the beginning of the path and starts but
                     * does not end with "/". It is shared for URLs of the same application.
                     * <p>The context path may come from the underlying runtime API such as
                     * when deploying as a WAR to a Servlet container or it may be assigned in
                     * a WebFlux application through the use of
                     * {@link org.springframework.http.server.reactive.ContextPathCompositeHandler
                     * ContextPathCompositeHandler}.
                     */
                    // @ts-ignore
                    contextPath(): org.springframework.http.server.PathContainer
                    /**
                     * The portion of the request path after the context path.
                     */
                    // @ts-ignore
                    pathWithinApplication(): org.springframework.http.server.PathContainer
                    /**
                     * Return a new {@code RequestPath} instance with a modified context path.
                     * The new context path must match 0 or more path segments at the start.
                     * @param contextPath the new context path
                     * @return a new {#code RequestPath} instance
                     */
                    // @ts-ignore
                    modifyContextPath(contextPath: java.lang.String | string): org.springframework.http.server.RequestPath
                    /**
                     * Create a new {@code RequestPath} with the given parameters.
                     */
                    // @ts-ignore
                    parse(uri: java.net.URI, contextPath: java.lang.String | string): org.springframework.http.server.RequestPath
                }
            }
        }
    }
}
