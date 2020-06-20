declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * ResourceLoader implementation that resolves paths as ServletContext
                     * resources, for use outside a WebApplicationContext (for example,
                     * in an HttpServletBean or GenericFilterBean subclass).
                     * <p>Within a WebApplicationContext, resource paths are automatically
                     * resolved as ServletContext resources by the context implementation.
                     * @author Juergen Hoeller
                     * @since 1.0.2
                     * @see #getResourceByPath
                     * @see ServletContextResource
                     * @see org.springframework.web.context.WebApplicationContext
                     * @see org.springframework.web.servlet.HttpServletBean
                     * @see org.springframework.web.filter.GenericFilterBean
                     */
                    // @ts-ignore
                    class ServletContextResourceLoader extends DefaultResourceLoader {
                        /**
                         * Create a new ServletContextResourceLoader.
                         * @param servletContext the ServletContext to load resources with
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        /**
                         * This implementation supports file paths beneath the root of the web application.
                         * @see ServletContextResource
                         */
                        // @ts-ignore
                        getResourceByPath(path: string): Resource
                    }
                }
            }
        }
    }
}
