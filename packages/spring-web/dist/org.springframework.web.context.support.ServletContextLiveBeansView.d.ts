declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link LiveBeansView} subclass which looks for all ApplicationContexts
                     * in the web application, as exposed in ServletContext attributes.
                     * @author Juergen Hoeller
                     * @since 3.2
                     */
                    // @ts-ignore
                    class ServletContextLiveBeansView extends LiveBeansView {
                        /**
                         * Create a new LiveBeansView for the given ServletContext.
                         * @param servletContext current ServletContext
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        // @ts-ignore
                        findApplicationContexts(): java.util.Set<ConfigurableApplicationContext>
                    }
                }
            }
        }
    }
}
