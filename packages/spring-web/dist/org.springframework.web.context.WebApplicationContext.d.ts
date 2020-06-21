declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Interface to provide configuration for a web application. This is read-only while
                 * the application is running, but may be reloaded if the implementation supports this.
                 * <p>This interface adds a {@code getServletContext()} method to the generic
                 * ApplicationContext interface, and defines a well-known application attribute name
                 * that the root context must be bound to in the bootstrap process.
                 * <p>Like generic application contexts, web application contexts are hierarchical.
                 * There is a single root context per application, while each servlet in the application
                 * (including a dispatcher servlet in the MVC framework) has its own child context.
                 * <p>In addition to standard application context lifecycle capabilities,
                 * WebApplicationContext implementations need to detect {@link ServletContextAware}
                 * beans and invoke the {@code setServletContext} method accordingly.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since January 19, 2001
                 * @see ServletContextAware#setServletContext
                 */
                // @ts-ignore
                interface WebApplicationContext {
                    /**
                     * Context attribute to bind root WebApplicationContext to on successful startup.
                     * <p>Note: If the startup of the root context fails, this attribute can contain
                     * an exception or error as value. Use WebApplicationContextUtils for convenient
                     * lookup of the root WebApplicationContext.
                     * @see org.springframework.web.context.support.WebApplicationContextUtils#getWebApplicationContext
                     * @see org.springframework.web.context.support.WebApplicationContextUtils#getRequiredWebApplicationContext
                     */
                    // @ts-ignore
                    readonly ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE: java.lang.String | string
                    /**
                     * Scope identifier for request scope: "request".
                     * Supported in addition to the standard scopes "singleton" and "prototype".
                     */
                    // @ts-ignore
                    readonly SCOPE_REQUEST: java.lang.String | string
                    /**
                     * Scope identifier for session scope: "session".
                     * Supported in addition to the standard scopes "singleton" and "prototype".
                     */
                    // @ts-ignore
                    readonly SCOPE_SESSION: java.lang.String | string
                    /**
                     * Scope identifier for the global web application scope: "application".
                     * Supported in addition to the standard scopes "singleton" and "prototype".
                     */
                    // @ts-ignore
                    readonly SCOPE_APPLICATION: java.lang.String | string
                    /**
                     * Name of the ServletContext environment bean in the factory.
                     * @see javax.servlet.ServletContext
                     */
                    // @ts-ignore
                    readonly SERVLET_CONTEXT_BEAN_NAME: java.lang.String | string
                    /**
                     * Name of the ServletContext init-params environment bean in the factory.
                     * <p>Note: Possibly merged with ServletConfig parameters.
                     * ServletConfig parameters override ServletContext parameters of the same name.
                     * @see javax.servlet.ServletContext#getInitParameterNames()
                     * @see javax.servlet.ServletContext#getInitParameter(String)
                     * @see javax.servlet.ServletConfig#getInitParameterNames()
                     * @see javax.servlet.ServletConfig#getInitParameter(String)
                     */
                    // @ts-ignore
                    readonly CONTEXT_PARAMETERS_BEAN_NAME: java.lang.String | string
                    /**
                     * Name of the ServletContext attributes environment bean in the factory.
                     * @see javax.servlet.ServletContext#getAttributeNames()
                     * @see javax.servlet.ServletContext#getAttribute(String)
                     */
                    // @ts-ignore
                    readonly CONTEXT_ATTRIBUTES_BEAN_NAME: java.lang.String | string
                    /**
                     * Return the standard Servlet API ServletContext for this application.
                     */
                    // @ts-ignore
                    getServletContext(): ServletContext
                }
            }
        }
    }
}
