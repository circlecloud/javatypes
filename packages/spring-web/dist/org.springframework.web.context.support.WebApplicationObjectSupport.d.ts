declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Convenient superclass for application objects running in a {@link WebApplicationContext}.
                     * Provides {@code getWebApplicationContext()}, {@code getServletContext()}, and
                     * {@code getTempDir()} accessors.
                     * <p>Note: It is generally recommended to use individual callback interfaces for the actual
                     * callbacks needed. This broad base class is primarily intended for use within the framework,
                     * in case of {@link ServletContext} access etc typically being needed.
                     * @author Juergen Hoeller
                     * @since 28.08.2003
                     * @see SpringBeanAutowiringSupport
                     */
                    // @ts-ignore
                    abstract class WebApplicationObjectSupport extends ApplicationObjectSupport implements org.springframework.web.context.ServletContextAware {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setServletContext(servletContext: ServletContext): void
                        /**
                         * Overrides the base class behavior to enforce running in an ApplicationContext.
                         * All accessors will throw IllegalStateException if not running in a context.
                         * @see #getApplicationContext()
                         * @see #getMessageSourceAccessor()
                         * @see #getWebApplicationContext()
                         * @see #getServletContext()
                         * @see #getTempDir()
                         */
                        // @ts-ignore
                        isContextRequired(): boolean
                        /**
                         * Calls {@link #initServletContext(javax.servlet.ServletContext)} if the
                         * given ApplicationContext is a {@link WebApplicationContext}.
                         */
                        // @ts-ignore
                        initApplicationContext(context: ApplicationContext): void
                        /**
                         * Subclasses may override this for custom initialization based
                         * on the ServletContext that this application object runs in.
                         * <p>The default implementation is empty. Called by
                         * {@link #initApplicationContext(org.springframework.context.ApplicationContext)}
                         * as well as {@link #setServletContext(javax.servlet.ServletContext)}.
                         * @param servletContext the ServletContext that this application object runs in
                         *  (never {#code null})
                         */
                        // @ts-ignore
                        initServletContext(servletContext: ServletContext): void
                        /**
                         * Return the current application context as WebApplicationContext.
                         * <p><b>NOTE:</b> Only use this if you actually need to access
                         * WebApplicationContext-specific functionality. Preferably use
                         * {@code getApplicationContext()} or {@code getServletContext()}
                         * else, to be able to run in non-WebApplicationContext environments as well.
                         * @throws IllegalStateException if not running in a WebApplicationContext
                         * @see #getApplicationContext()
                         */
                        // @ts-ignore
                        getWebApplicationContext(): org.springframework.web.context.WebApplicationContext
                        /**
                         * Return the current ServletContext.
                         * @throws IllegalStateException if not running within a required ServletContext
                         * @see #isContextRequired()
                         */
                        // @ts-ignore
                        getServletContext(): ServletContext
                        /**
                         * Return the temporary directory for the current web application,
                         * as provided by the servlet container.
                         * @return the File representing the temporary directory
                         * @throws IllegalStateException if not running within a ServletContext
                         * @see org.springframework.web.util.WebUtils#getTempDir(javax.servlet.ServletContext)
                         */
                        // @ts-ignore
                        getTempDir(): java.io.File
                    }
                }
            }
        }
    }
}
