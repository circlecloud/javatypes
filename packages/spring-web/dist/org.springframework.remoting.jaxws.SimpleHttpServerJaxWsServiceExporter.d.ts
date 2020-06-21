declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * Simple exporter for JAX-WS services, autodetecting annotated service beans
                 * (through the JAX-WS {@link javax.jws.WebService} annotation) and exporting
                 * them through the HTTP server included in Sun's JDK 1.6. The full address
                 * for each service will consist of the server's base address with the
                 * service name appended (e.g. "http://localhost:8080/OrderService").
                 * <p>Note that this exporter will only work on Sun's JDK 1.6 or higher, as well
                 * as on JDKs that ship Sun's entire class library as included in the Sun JDK.
                 * For a portable JAX-WS exporter, have a look at {@link SimpleJaxWsServiceExporter}.
                 * @author Juergen Hoeller
                 * @since 2.5.5
                 * @see javax.jws.WebService
                 * @see javax.xml.ws.Endpoint#publish(Object)
                 * @see SimpleJaxWsServiceExporter
                 * @deprecated as of Spring Framework 5.1, in favor of {#link SimpleJaxWsServiceExporter}
                 */
                // @ts-ignore
                class SimpleHttpServerJaxWsServiceExporter extends org.springframework.remoting.jaxws.AbstractJaxWsServiceExporter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Specify an existing HTTP server to register the web service contexts
                     * with. This will typically be a server managed by the general Spring
                     * {@link org.springframework.remoting.support.SimpleHttpServerFactoryBean}.
                     * <p>Alternatively, configure a local HTTP server through the
                     * {@link #setPort "port"}, {@link #setHostname "hostname"} and
                     * {@link #setBacklog "backlog"} properties (or rely on the defaults there).
                     */
                    // @ts-ignore
                    public setServer(server: com.sun.net.httpserver.HttpServer): void
                    /**
                     * Specify the HTTP server's port. Default is 8080.
                     * <p>Only applicable for a locally configured HTTP server.
                     * Ignored when the {@link #setServer "server"} property has been specified.
                     */
                    // @ts-ignore
                    public setPort(port: number /*int*/): void
                    /**
                     * Specify the HTTP server's hostname to bind to. Default is localhost;
                     * can be overridden with a specific network address to bind to.
                     * <p>Only applicable for a locally configured HTTP server.
                     * Ignored when the {@link #setServer "server"} property has been specified.
                     */
                    // @ts-ignore
                    public setHostname(hostname: java.lang.String | string): void
                    /**
                     * Specify the HTTP server's TCP backlog. Default is -1,
                     * indicating the system's default value.
                     * <p>Only applicable for a locally configured HTTP server.
                     * Ignored when the {@link #setServer "server"} property has been specified.
                     */
                    // @ts-ignore
                    public setBacklog(backlog: number /*int*/): void
                    /**
                     * Specify the number of seconds to wait until HTTP exchanges have
                     * completed when shutting down the HTTP server. Default is 0.
                     * <p>Only applicable for a locally configured HTTP server.
                     * Ignored when the {@link #setServer "server"} property has been specified.
                     */
                    // @ts-ignore
                    public setShutdownDelay(shutdownDelay: number /*int*/): void
                    /**
                     * Set the base path for context publication. Default is "/".
                     * <p>For each context publication path, the service name will be
                     * appended to this base address. E.g. service name "OrderService"
                     * -> "/OrderService".
                     * @see javax.xml.ws.Endpoint#publish(Object)
                     * @see javax.jws.WebService#serviceName()
                     */
                    // @ts-ignore
                    public setBasePath(basePath: java.lang.String | string): void
                    /**
                     * Register common {@link com.sun.net.httpserver.Filter Filters} to be
                     * applied to all detected {@link javax.jws.WebService} annotated beans.
                     */
                    // @ts-ignore
                    public setFilters(filters: java.util.List<com.sun.net.httpserver.Filter> | Array<com.sun.net.httpserver.Filter>): void
                    /**
                     * Register a common {@link com.sun.net.httpserver.Authenticator} to be
                     * applied to all detected {@link javax.jws.WebService} annotated beans.
                     */
                    // @ts-ignore
                    public setAuthenticator(authenticator: com.sun.net.httpserver.Authenticator): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    publishEndpoint(endpoint: javax.xml.ws.Endpoint, annotation: javax.jws.WebService): void
                    // @ts-ignore
                    publishEndpoint(endpoint: javax.xml.ws.Endpoint, annotation: javax.xml.ws.WebServiceProvider): void
                    /**
                     * Build the HttpContext for the given endpoint.
                     * @param endpoint the JAX-WS Provider Endpoint object
                     * @param serviceName the given service name
                     * @return the fully populated HttpContext
                     */
                    // @ts-ignore
                    buildHttpContext(endpoint: javax.xml.ws.Endpoint, serviceName: java.lang.String | string): com.sun.net.httpserver.HttpContext
                    /**
                     * Calculate the full endpoint path for the given endpoint.
                     * @param endpoint the JAX-WS Provider Endpoint object
                     * @param serviceName the given service name
                     * @return the full endpoint path
                     */
                    // @ts-ignore
                    calculateEndpointPath(endpoint: javax.xml.ws.Endpoint, serviceName: java.lang.String | string): string
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
