declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace adapter {
                    /**
                     * Default adapter of {@link WebHandler} to the {@link HttpHandler} contract.
                     * <p>By default creates and configures a {@link DefaultServerWebExchange} and
                     * then invokes the target {@code WebHandler}.
                     * @author Rossen Stoyanchev
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    class HttpWebHandlerAdapter extends org.springframework.web.server.handler.WebHandlerDecorator implements org.springframework.http.server.reactive.HttpHandler {
                        // @ts-ignore
                        constructor(delegate: org.springframework.web.server.WebHandler)
                        /**
                         * Configure a custom {@link WebSessionManager} to use for managing web
                         * sessions. The provided instance is set on each created
                         * {@link DefaultServerWebExchange}.
                         * <p>By default this is set to {@link DefaultWebSessionManager}.
                         * @param sessionManager the session manager to use
                         */
                        // @ts-ignore
                        setSessionManager(sessionManager: org.springframework.web.server.session.WebSessionManager): void
                        /**
                         * Return the configured {@link WebSessionManager}.
                         */
                        // @ts-ignore
                        getSessionManager(): org.springframework.web.server.session.WebSessionManager
                        /**
                         * Configure a custom {@link ServerCodecConfigurer}. The provided instance is set on
                         * each created {@link DefaultServerWebExchange}.
                         * <p>By default this is set to {@link ServerCodecConfigurer#create()}.
                         * @param codecConfigurer the codec configurer to use
                         */
                        // @ts-ignore
                        setCodecConfigurer(codecConfigurer: org.springframework.http.codec.ServerCodecConfigurer): void
                        /**
                         * Return the configured {@link ServerCodecConfigurer}.
                         */
                        // @ts-ignore
                        getCodecConfigurer(): org.springframework.http.codec.ServerCodecConfigurer
                        /**
                         * Configure a custom {@link LocaleContextResolver}. The provided instance is set on
                         * each created {@link DefaultServerWebExchange}.
                         * <p>By default this is set to
                         * {@link org.springframework.web.server.i18n.AcceptHeaderLocaleContextResolver}.
                         * @param resolver the locale context resolver to use
                         */
                        // @ts-ignore
                        setLocaleContextResolver(resolver: org.springframework.web.server.i18n.LocaleContextResolver): void
                        /**
                         * Return the configured {@link LocaleContextResolver}.
                         */
                        // @ts-ignore
                        getLocaleContextResolver(): org.springframework.web.server.i18n.LocaleContextResolver
                        /**
                         * Enable processing of forwarded headers, either extracting and removing,
                         * or remove only.
                         * <p>By default this is not set.
                         * @param transformer the transformer to use
                         * @since 5.1
                         */
                        // @ts-ignore
                        setForwardedHeaderTransformer(transformer: org.springframework.web.server.adapter.ForwardedHeaderTransformer): void
                        /**
                         * Return the configured {@link ForwardedHeaderTransformer}.
                         * @since 5.1
                         */
                        // @ts-ignore
                        getForwardedHeaderTransformer(): org.springframework.web.server.adapter.ForwardedHeaderTransformer
                        /**
                         * Configure the {@code ApplicationContext} associated with the web application,
                         * if it was initialized with one via
                         * {@link org.springframework.web.server.adapter.WebHttpHandlerBuilder#applicationContext(ApplicationContext)}.
                         * @param applicationContext the context
                         * @since 5.0.3
                         */
                        // @ts-ignore
                        setApplicationContext(applicationContext: ApplicationContext): void
                        /**
                         * Return the configured {@code ApplicationContext}, if any.
                         * @since 5.0.3
                         */
                        // @ts-ignore
                        getApplicationContext(): ApplicationContext
                        /**
                         * This method must be invoked after all properties have been set to
                         * complete initialization.
                         */
                        // @ts-ignore
                        afterPropertiesSet(): void
                        // @ts-ignore
                        handle(request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): <any>
                        // @ts-ignore
                        createExchange(request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): org.springframework.web.server.ServerWebExchange
                        /**
                         * Format the request for logging purposes including HTTP method and URL.
                         * <p>By default this prints the HTTP method, the URL path, and the query.
                         * @param request the request to format
                         * @return the String to display, never empty or {#code null}
                         */
                        // @ts-ignore
                        formatRequest(request: org.springframework.http.server.reactive.ServerHttpRequest): java.lang.String
                    }
                }
            }
        }
    }
}
