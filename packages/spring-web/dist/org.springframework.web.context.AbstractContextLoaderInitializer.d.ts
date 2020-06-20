declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Convenient base class for {@link WebApplicationInitializer} implementations
                 * that register a {@link ContextLoaderListener} in the servlet context.
                 * <p>The only method required to be implemented by subclasses is
                 * {@link #createRootApplicationContext()}, which gets invoked from
                 * {@link #registerContextLoaderListener(ServletContext)}.
                 * @author Arjen Poutsma
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.2
                 */
                // @ts-ignore
                class AbstractContextLoaderInitializer extends java.lang.Object implements org.springframework.web.WebApplicationInitializer {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    onStartup(servletContext: ServletContext): void
                    /**
                     * Register a {@link ContextLoaderListener} against the given servlet context. The
                     * {@code ContextLoaderListener} is initialized with the application context returned
                     * from the {@link #createRootApplicationContext()} template method.
                     * @param servletContext the servlet context to register the listener against
                     */
                    // @ts-ignore
                    registerContextLoaderListener(servletContext: ServletContext): void
                    /**
                     * Create the "<strong>root</strong>" application context to be provided to the
                     * {@code ContextLoaderListener}.
                     * <p>The returned context is delegated to
                     * {@link ContextLoaderListener#ContextLoaderListener(WebApplicationContext)} and will
                     * be established as the parent context for any {@code DispatcherServlet} application
                     * contexts. As such, it typically contains middle-tier services, data sources, etc.
                     * @return the root application context, or {#code null} if a root context is not
                     *  desired
                     * @see org.springframework.web.servlet.support.AbstractDispatcherServletInitializer
                     */
                    // @ts-ignore
                    abstract createRootApplicationContext(): org.springframework.web.context.WebApplicationContext
                    /**
                     * Specify application context initializers to be applied to the root application
                     * context that the {@code ContextLoaderListener} is being created with.
                     * @since 4.2
                     * @see #createRootApplicationContext()
                     * @see ContextLoaderListener#setContextInitializers
                     */
                    // @ts-ignore
                    getRootApplicationContextInitializers(): <any>[]
                }
            }
        }
    }
}
