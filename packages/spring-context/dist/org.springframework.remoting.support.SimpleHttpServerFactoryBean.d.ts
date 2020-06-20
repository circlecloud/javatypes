declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * {@link org.springframework.beans.factory.FactoryBean} that creates a simple
                 * HTTP server, based on the HTTP server that is included in Sun's JRE 1.6.
                 * Starts the HTTP server on initialization and stops it on destruction.
                 * Exposes the resulting {@link com.sun.net.httpserver.HttpServer} object.
                 * <p>Allows for registering {@link com.sun.net.httpserver.HttpHandler HttpHandlers}
                 * for specific {@link #setContexts context paths}. Alternatively,
                 * register such context-specific handlers programmatically on the
                 * {@link com.sun.net.httpserver.HttpServer} itself.
                 * @author Juergen Hoeller
                 * @author Arjen Poutsma
                 * @since 2.5.1
                 * @see #setPort
                 * @see #setContexts
                 * @deprecated as of Spring Framework 5.1, in favor of embedded Tomcat/Jetty/Undertow
                 */
                // @ts-ignore
                class SimpleHttpServerFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Specify the HTTP server's port. Default is 8080.
                     */
                    // @ts-ignore
                    setPort(port: number /*int*/): void
                    /**
                     * Specify the HTTP server's hostname to bind to. Default is localhost;
                     * can be overridden with a specific network address to bind to.
                     */
                    // @ts-ignore
                    setHostname(hostname: string): void
                    /**
                     * Specify the HTTP server's TCP backlog. Default is -1,
                     * indicating the system's default value.
                     */
                    // @ts-ignore
                    setBacklog(backlog: number /*int*/): void
                    /**
                     * Specify the number of seconds to wait until HTTP exchanges have
                     * completed when shutting down the HTTP server. Default is 0.
                     */
                    // @ts-ignore
                    setShutdownDelay(shutdownDelay: number /*int*/): void
                    /**
                     * Set the JDK concurrent executor to use for dispatching incoming requests.
                     * @see com.sun.net.httpserver.HttpServer#setExecutor
                     */
                    // @ts-ignore
                    setExecutor(executor: java.util.concurrent.Executor): void
                    /**
                     * Register {@link com.sun.net.httpserver.HttpHandler HttpHandlers}
                     * for specific context paths.
                     * @param contexts a Map with context paths as keys and HttpHandler
                     *  objects as values
                     * @see org.springframework.remoting.httpinvoker.SimpleHttpInvokerServiceExporter
                     * @see org.springframework.remoting.caucho.SimpleHessianServiceExporter
                     */
                    // @ts-ignore
                    setContexts(contexts: java.util.Map<java.lang.String, com.sun.net.httpserver.HttpHandler>): void
                    /**
                     * Register common {@link com.sun.net.httpserver.Filter Filters} to be
                     * applied to all locally registered {@link #setContexts contexts}.
                     */
                    // @ts-ignore
                    setFilters(filters: Array<com.sun.net.httpserver.Filter>): void
                    /**
                     * Register a common {@link com.sun.net.httpserver.Authenticator} to be
                     * applied to all locally registered {@link #setContexts contexts}.
                     */
                    // @ts-ignore
                    setAuthenticator(authenticator: com.sun.net.httpserver.Authenticator): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getObject(): com.sun.net.httpserver.HttpServer
                    // @ts-ignore
                    getObjectType(): java.lang.Class<? extends com.sun.net.httpserver.HttpServer>
                    // @ts-ignore
                    isSingleton(): boolean
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
