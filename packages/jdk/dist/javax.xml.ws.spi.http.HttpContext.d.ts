declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                namespace http {
                    /**
                     * HttpContext represents a mapping between the root URI path of a web
                     * service to a {@link HttpHandler} which is invoked to handle requests
                     * destined for that path on the associated container.
                     * <p>
                     * Container provides the implementation for this and it matches
                     * web service requests to corresponding HttpContext objects.
                     * @author Jitendra Kotamraju
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    abstract class HttpContext extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        handler: javax.xml.ws.spi.http.HttpHandler
                        /**
                         * JAX-WS runtime sets its handler during
                         * {@link Endpoint#publish(HttpContext)} to handle
                         * HTTP requests for this context. Container or its extensions
                         * use this handler to process the requests.
                         * @param handler the handler to set for this context
                         */
                        // @ts-ignore
                        public setHandler(handler: javax.xml.ws.spi.http.HttpHandler): void
                        /**
                         * Returns the path for this context. This path uniquely identifies
                         * an endpoint inside an application and the path is relative to
                         * application's context path. Container should give this
                         * path based on how it matches request URIs to this HttpContext object.
                         * <p>
                         * For servlet container, this is typically a url-pattern for an endpoint.
                         * <p>
                         * Endpoint's address for this context can be computed as follows:
                         * <pre>
                         * HttpExchange exch = ...;
                         * String endpointAddress =
                         * exch.getScheme() + "://"
                         * + exch.getLocalAddress().getHostName()
                         * + ":" + exch.getLocalAddress().getPort()
                         * + exch.getContextPath() + getPath();
                         * </pre>
                         * @return this context's path
                         */
                        // @ts-ignore
                        public abstract getPath(): string
                        /**
                         * Returns an attribute value for container's configuration
                         * and other data that can be used by jax-ws runtime.
                         * @param name attribute name
                         * @return attribute value
                         */
                        // @ts-ignore
                        public abstract getAttribute(name: java.lang.String | string): any
                        /**
                         * Returns all attribute names for container's configuration
                         * and other data that can be used by jax-ws runtime.
                         * @return set of all attribute names
                         */
                        // @ts-ignore
                        public abstract getAttributeNames(): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
