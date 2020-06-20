declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor}
                     * implementation that passes the ServletContext to beans that implement
                     * the {@link ServletContextAware} interface.
                     * <p>Web application contexts will automatically register this with their
                     * underlying bean factory. Applications do not use this directly.
                     * @author Juergen Hoeller
                     * @author Phillip Webb
                     * @since 12.03.2004
                     * @see org.springframework.web.context.ServletContextAware
                     * @see org.springframework.web.context.support.XmlWebApplicationContext#postProcessBeanFactory
                     */
                    // @ts-ignore
                    class ServletContextAwareProcessor extends java.lang.Object {
                        /**
                         * Create a new ServletContextAwareProcessor without an initial context or config.
                         * When this constructor is used the {@link #getServletContext()} and/or
                         * {@link #getServletConfig()} methods should be overridden.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new ServletContextAwareProcessor for the given context.
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        /**
                         * Create a new ServletContextAwareProcessor for the given config.
                         */
                        // @ts-ignore
                        constructor(servletConfig: ServletConfig)
                        /**
                         * Create a new ServletContextAwareProcessor for the given context and config.
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext, servletConfig: ServletConfig)
                        /**
                         * Returns the {@link ServletContext} to be injected or {@code null}. This method
                         * can be overridden by subclasses when a context is obtained after the post-processor
                         * has been registered.
                         */
                        // @ts-ignore
                        getServletContext(): ServletContext
                        /**
                         * Returns the {@link ServletConfig} to be injected or {@code null}. This method
                         * can be overridden by subclasses when a context is obtained after the post-processor
                         * has been registered.
                         */
                        // @ts-ignore
                        getServletConfig(): ServletConfig
                        // @ts-ignore
                        postProcessBeforeInitialization(bean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        postProcessAfterInitialization(bean: any, beanName: string): java.lang.Object
                    }
                }
            }
        }
    }
}
