declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace adapter {
                    /**
                     * This builder has two purposes:
                     * <p>One is to assemble a processing chain that consists of a target {@link WebHandler},
                     * then decorated with a set of {@link WebFilter WebFilters}, then further decorated with
                     * a set of {@link WebExceptionHandler WebExceptionHandlers}.
                     * <p>The second purpose is to adapt the resulting processing chain to an {@link HttpHandler}:
                     * the lowest-level reactive HTTP handling abstraction which can then be used with any of the
                     * supported runtimes. The adaptation is done with the help of {@link HttpWebHandlerAdapter}.
                     * <p>The processing chain can be assembled manually via builder methods, or detected from
                     * a Spring {@link ApplicationContext} via {@link #applicationContext}, or a mix of both.
                     * @author Rossen Stoyanchev
                     * @author Sebastien Deleuze
                     * @since 5.0
                     * @see HttpWebHandlerAdapter
                     */
                    // @ts-ignore
                    class WebHttpHandlerBuilder extends java.lang.Object {
                        /**
                         * Well-known name for the target WebHandler in the bean factory.
                         */
                        // @ts-ignore
                        readonly WEB_HANDLER_BEAN_NAME: string
                        /**
                         * Well-known name for the WebSessionManager in the bean factory.
                         */
                        // @ts-ignore
                        readonly WEB_SESSION_MANAGER_BEAN_NAME: string
                        /**
                         * Well-known name for the ServerCodecConfigurer in the bean factory.
                         */
                        // @ts-ignore
                        readonly SERVER_CODEC_CONFIGURER_BEAN_NAME: string
                        /**
                         * Well-known name for the LocaleContextResolver in the bean factory.
                         */
                        // @ts-ignore
                        readonly LOCALE_CONTEXT_RESOLVER_BEAN_NAME: string
                        /**
                         * Well-known name for the ForwardedHeaderTransformer in the bean factory.
                         */
                        // @ts-ignore
                        readonly FORWARDED_HEADER_TRANSFORMER_BEAN_NAME: string
                        /**
                         * Static factory method to create a new builder instance.
                         * @param webHandler the target handler for the request
                         * @return the prepared builder
                         */
                        // @ts-ignore
                        webHandler(webHandler: org.springframework.web.server.WebHandler): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Static factory method to create a new builder instance by detecting beans
                         * in an {@link ApplicationContext}. The following are detected:
                         * <ul>
                         * <li>{@link WebHandler} [1] -- looked up by the name
                         * {@link #WEB_HANDLER_BEAN_NAME}.
                         * <li>{@link WebFilter} [0..N] -- detected by type and ordered,
                         * see {@link AnnotationAwareOrderComparator}.
                         * <li>{@link WebExceptionHandler} [0..N] -- detected by type and
                         * ordered.
                         * <li>{@link WebSessionManager} [0..1] -- looked up by the name
                         * {@link #WEB_SESSION_MANAGER_BEAN_NAME}.
                         * <li>{@link ServerCodecConfigurer} [0..1] -- looked up by the name
                         * {@link #SERVER_CODEC_CONFIGURER_BEAN_NAME}.
                         * <li>{@link LocaleContextResolver} [0..1] -- looked up by the name
                         * {@link #LOCALE_CONTEXT_RESOLVER_BEAN_NAME}.
                         * </ul>
                         * @param context the application context to use for the lookup
                         * @return the prepared builder
                         */
                        // @ts-ignore
                        applicationContext(context: ApplicationContext): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Add the given filter(s).
                         * @param filters the filter(s) to add that's
                         */
                        // @ts-ignore
                        filter(...filters: org.springframework.web.server.WebFilter[]): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Manipulate the "live" list of currently configured filters.
                         * @param consumer the consumer to use
                         */
                        // @ts-ignore
                        filters(consumer: java.util.function.Consumer<java.util.List<org.springframework.web.server.WebFilter>> | java.util.function$.Consumer<java.util.List<org.springframework.web.server.WebFilter>>): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Add the given exception handler(s).
                         * @param handlers the exception handler(s)
                         */
                        // @ts-ignore
                        exceptionHandler(...handlers: org.springframework.web.server.WebExceptionHandler[]): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Manipulate the "live" list of currently configured exception handlers.
                         * @param consumer the consumer to use
                         */
                        // @ts-ignore
                        exceptionHandlers(consumer: java.util.function.Consumer<java.util.List<org.springframework.web.server.WebExceptionHandler>> | java.util.function$.Consumer<java.util.List<org.springframework.web.server.WebExceptionHandler>>): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Configure the {@link WebSessionManager} to set on the
                         * {@link ServerWebExchange WebServerExchange}.
                         * <p>By default {@link DefaultWebSessionManager} is used.
                         * @param manager the session manager
                         * @see HttpWebHandlerAdapter#setSessionManager(WebSessionManager)
                         */
                        // @ts-ignore
                        sessionManager(manager: org.springframework.web.server.session.WebSessionManager): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Whether a {@code WebSessionManager} is configured or not, either detected from an
                         * {@code ApplicationContext} or explicitly configured via {@link #sessionManager}.
                         * @since 5.0.9
                         */
                        // @ts-ignore
                        hasSessionManager(): boolean
                        /**
                         * Configure the {@link ServerCodecConfigurer} to set on the {@code WebServerExchange}.
                         * @param codecConfigurer the codec configurer
                         */
                        // @ts-ignore
                        codecConfigurer(codecConfigurer: org.springframework.http.codec.ServerCodecConfigurer): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Whether a {@code ServerCodecConfigurer} is configured or not, either detected from an
                         * {@code ApplicationContext} or explicitly configured via {@link #codecConfigurer}.
                         * @since 5.0.9
                         */
                        // @ts-ignore
                        hasCodecConfigurer(): boolean
                        /**
                         * Configure the {@link LocaleContextResolver} to set on the
                         * {@link ServerWebExchange WebServerExchange}.
                         * @param localeContextResolver the locale context resolver
                         */
                        // @ts-ignore
                        localeContextResolver(localeContextResolver: org.springframework.web.server.i18n.LocaleContextResolver): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Whether a {@code LocaleContextResolver} is configured or not, either detected from an
                         * {@code ApplicationContext} or explicitly configured via {@link #localeContextResolver}.
                         * @since 5.0.9
                         */
                        // @ts-ignore
                        hasLocaleContextResolver(): boolean
                        /**
                         * Configure the {@link ForwardedHeaderTransformer} for extracting and/or
                         * removing forwarded headers.
                         * @param transformer the transformer
                         * @since 5.1
                         */
                        // @ts-ignore
                        forwardedHeaderTransformer(transformer: org.springframework.web.server.adapter.ForwardedHeaderTransformer): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                        /**
                         * Whether a {@code ForwardedHeaderTransformer} is configured or not, either
                         * detected from an {@code ApplicationContext} or explicitly configured via
                         * {@link #forwardedHeaderTransformer(ForwardedHeaderTransformer)}.
                         * @since 5.1
                         */
                        // @ts-ignore
                        hasForwardedHeaderTransformer(): boolean
                        /**
                         * Build the {@link HttpHandler}.
                         */
                        // @ts-ignore
                        build(): org.springframework.http.server.reactive.HttpHandler
                        /**
                         * Clone this {@link WebHttpHandlerBuilder}.
                         * @return the cloned builder instance
                         */
                        // @ts-ignore
                        clone(): org.springframework.web.server.adapter.WebHttpHandlerBuilder
                    }
                }
            }
        }
    }
}
