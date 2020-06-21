declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace adapter {
                    /**
                     * Base class for a {@link org.springframework.web.WebApplicationInitializer}
                     * that installs a Spring Reactive Web Application on a Servlet container.
                     * <p>Spring configuration is loaded and given to
                     * {@link WebHttpHandlerBuilder#applicationContext WebHttpHandlerBuilder}
                     * which scans the context looking for specific beans and creates a reactive
                     * {@link HttpHandler}. The resulting handler is installed as a Servlet through
                     * the {@link ServletHttpHandlerAdapter}.
                     * @author Rossen Stoyanchev
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    abstract class AbstractReactiveWebInitializer extends java.lang.Object implements org.springframework.web.WebApplicationInitializer {
                        // @ts-ignore
                        constructor()
                        /**
                         * The default servlet name to use. See {@link #getServletName}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_SERVLET_NAME: java.lang.String | string
                        // @ts-ignore
                        public onStartup(servletContext: ServletContext): void
                        /**
                         * Return the name to use to register the {@link ServletHttpHandlerAdapter}.
                         * <p>By default this is {@link #DEFAULT_SERVLET_NAME}.
                         */
                        // @ts-ignore
                        getServletName(): string
                        /**
                         * Return the Spring configuration that contains application beans including
                         * the ones detected by {@link WebHttpHandlerBuilder#applicationContext}.
                         */
                        // @ts-ignore
                        createApplicationContext(): ApplicationContext
                        /**
                         * Specify {@link org.springframework.context.annotation.Configuration @Configuration}
                         * and/or {@link org.springframework.stereotype.Component @Component}
                         * classes that make up the application configuration. The config classes
                         * are given to {@linkplain #createApplicationContext()}.
                         */
                        // @ts-ignore
                        abstract getConfigClasses(): java.lang.Class<any>[]
                        /**
                         * Refresh the given application context, if necessary.
                         */
                        // @ts-ignore
                        refreshApplicationContext(context: ApplicationContext): void
                        /**
                         * Register a {@link ServletContextListener} that closes the given
                         * application context when the servlet context is destroyed.
                         * @param servletContext the servlet context to listen to
                         * @param applicationContext the application context that is to be
                         *  closed when {#code servletContext} is destroyed
                         */
                        // @ts-ignore
                        registerCloseListener(servletContext: ServletContext, applicationContext: ApplicationContext): void
                        /**
                         * Return the Servlet mapping to use. Only the default Servlet mapping '/'
                         * and path-based Servlet mappings such as '/api/*' are supported.
                         * <p>By default this is set to '/'.
                         */
                        // @ts-ignore
                        getServletMapping(): string
                    }
                }
            }
        }
    }
}
