declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Convenience methods for retrieving the root {@link WebApplicationContext} for
                     * a given {@link ServletContext}. This is useful for programmatically accessing
                     * a Spring application context from within custom web views or MVC actions.
                     * <p>Note that there are more convenient ways of accessing the root context for
                     * many web frameworks, either part of Spring or available as an external library.
                     * This helper class is just the most generic way to access the root context.
                     * @author Juergen Hoeller
                     * @see org.springframework.web.context.ContextLoader
                     * @see org.springframework.web.servlet.FrameworkServlet
                     * @see org.springframework.web.servlet.DispatcherServlet
                     * @see org.springframework.web.jsf.FacesContextUtils
                     * @see org.springframework.web.jsf.el.SpringBeanFacesELResolver
                     */
                    // @ts-ignore
                    abstract class WebApplicationContextUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Find the root {@code WebApplicationContext} for this web app, typically
                         * loaded via {@link org.springframework.web.context.ContextLoaderListener}.
                         * <p>Will rethrow an exception that happened on root context startup,
                         * to differentiate between a failed context startup and no context at all.
                         * @param sc the ServletContext to find the web application context for
                         * @return the root WebApplicationContext for this web app
                         * @throws IllegalStateException if the root WebApplicationContext could not be found
                         * @see org.springframework.web.context.WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE
                         */
                        // @ts-ignore
                        public static getRequiredWebApplicationContext(sc: ServletContext): org.springframework.web.context.WebApplicationContext
                        /**
                         * Find the root {@code WebApplicationContext} for this web app, typically
                         * loaded via {@link org.springframework.web.context.ContextLoaderListener}.
                         * <p>Will rethrow an exception that happened on root context startup,
                         * to differentiate between a failed context startup and no context at all.
                         * @param sc the ServletContext to find the web application context for
                         * @return the root WebApplicationContext for this web app, or {#code null} if none
                         * @see org.springframework.web.context.WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE
                         */
                        // @ts-ignore
                        public static getWebApplicationContext(sc: ServletContext): org.springframework.web.context.WebApplicationContext
                        /**
                         * Find a custom {@code WebApplicationContext} for this web app.
                         * @param sc the ServletContext to find the web application context for
                         * @param attrName the name of the ServletContext attribute to look for
                         * @return the desired WebApplicationContext for this web app, or {#code null} if none
                         */
                        // @ts-ignore
                        public static getWebApplicationContext(sc: ServletContext, attrName: java.lang.String | string): org.springframework.web.context.WebApplicationContext
                        /**
                         * Find a unique {@code WebApplicationContext} for this web app: either the
                         * root web app context (preferred) or a unique {@code WebApplicationContext}
                         * among the registered {@code ServletContext} attributes (typically coming
                         * from a single {@code DispatcherServlet} in the current web application).
                         * <p>Note that {@code DispatcherServlet}'s exposure of its context can be
                         * controlled through its {@code publishContext} property, which is {@code true}
                         * by default but can be selectively switched to only publish a single context
                         * despite multiple {@code DispatcherServlet} registrations in the web app.
                         * @param sc the ServletContext to find the web application context for
                         * @return the desired WebApplicationContext for this web app, or {#code null} if none
                         * @since 4.2
                         * @see #getWebApplicationContext(ServletContext)
                         * @see ServletContext#getAttributeNames()
                         */
                        // @ts-ignore
                        public static findWebApplicationContext(sc: ServletContext): org.springframework.web.context.WebApplicationContext
                        /**
                         * Register web-specific scopes ("request", "session", "globalSession")
                         * with the given BeanFactory, as used by the WebApplicationContext.
                         * @param beanFactory the BeanFactory to configure
                         */
                        // @ts-ignore
                        public static registerWebApplicationScopes(beanFactory: ConfigurableListableBeanFactory): void
                        /**
                         * Register web-specific scopes ("request", "session", "globalSession", "application")
                         * with the given BeanFactory, as used by the WebApplicationContext.
                         * @param beanFactory the BeanFactory to configure
                         * @param sc the ServletContext that we're running within
                         */
                        // @ts-ignore
                        public static registerWebApplicationScopes(beanFactory: ConfigurableListableBeanFactory, sc: ServletContext): void
                        /**
                         * Register web-specific environment beans ("contextParameters", "contextAttributes")
                         * with the given BeanFactory, as used by the WebApplicationContext.
                         * @param bf the BeanFactory to configure
                         * @param sc the ServletContext that we're running within
                         */
                        // @ts-ignore
                        public static registerEnvironmentBeans(bf: ConfigurableListableBeanFactory, sc: ServletContext): void
                        /**
                         * Register web-specific environment beans ("contextParameters", "contextAttributes")
                         * with the given BeanFactory, as used by the WebApplicationContext.
                         * @param bf the BeanFactory to configure
                         * @param servletContext the ServletContext that we're running within
                         * @param servletConfig the ServletConfig
                         */
                        // @ts-ignore
                        public static registerEnvironmentBeans(bf: ConfigurableListableBeanFactory, servletContext: ServletContext, servletConfig: ServletConfig): void
                        /**
                         * Convenient variant of {@link #initServletPropertySources(MutablePropertySources,
                         * ServletContext, ServletConfig)} that always provides {@code null} for the
                         * {@link ServletConfig} parameter.
                         * @see #initServletPropertySources(MutablePropertySources, ServletContext, ServletConfig)
                         */
                        // @ts-ignore
                        public static initServletPropertySources(propertySources: MutablePropertySources, servletContext: ServletContext): void
                        /**
                         * Replace {@code Servlet}-based {@link StubPropertySource stub property sources} with
                         * actual instances populated with the given {@code servletContext} and
                         * {@code servletConfig} objects.
                         * <p>This method is idempotent with respect to the fact it may be called any number
                         * of times but will perform replacement of stub property sources with their
                         * corresponding actual property sources once and only once.
                         * @param sources the {#link MutablePropertySources} to initialize (must not
                         *  be {@code null})
                         * @param servletContext the current {#link ServletContext} (ignored if {@code null}
                         *  or if the {@link StandardServletEnvironment#SERVLET_CONTEXT_PROPERTY_SOURCE_NAME
                         *  servlet context property source} has already been initialized)
                         * @param servletConfig the current {#link ServletConfig} (ignored if {@code null}
                         *  or if the {@link StandardServletEnvironment#SERVLET_CONFIG_PROPERTY_SOURCE_NAME
                         *  servlet config property source} has already been initialized)
                         * @see org.springframework.core.env.PropertySource.StubPropertySource
                         * @see org.springframework.core.env.ConfigurableEnvironment#getPropertySources()
                         */
                        // @ts-ignore
                        public static initServletPropertySources(sources: MutablePropertySources, servletContext: ServletContext, servletConfig: ServletConfig): void
                    }
                }
            }
        }
    }
}
