declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Convenient base class for self-autowiring classes that gets constructed
                     * within a Spring-based web application. Resolves {@code @Autowired}
                     * annotations in the endpoint class against beans in the current Spring
                     * root web application context (as determined by the current thread's
                     * context ClassLoader, which needs to be the web application's ClassLoader).
                     * Can alternatively be used as a delegate instead of as a base class.
                     * <p>A typical usage of this base class is a JAX-WS endpoint class:
                     * Such a Spring-based JAX-WS endpoint implementation will follow the
                     * standard JAX-WS contract for endpoint classes but will be 'thin'
                     * in that it delegates the actual work to one or more Spring-managed
                     * service beans - typically obtained using {@code @Autowired}.
                     * The lifecycle of such an endpoint instance will be managed by the
                     * JAX-WS runtime, hence the need for this base class to provide
                     * {@code @Autowired} processing based on the current Spring context.
                     * <p><b>NOTE:</b> If there is an explicit way to access the ServletContext,
                     * prefer such a way over using this class. The {@link WebApplicationContextUtils}
                     * class allows for easy access to the Spring root web application context
                     * based on the ServletContext.
                     * @author Juergen Hoeller
                     * @since 2.5.1
                     * @see WebApplicationObjectSupport
                     */
                    // @ts-ignore
                    abstract class SpringBeanAutowiringSupport extends java.lang.Object {
                        /**
                         * This constructor performs injection on this instance,
                         * based on the current web application context.
                         * <p>Intended for use as a base class.
                         * @see #processInjectionBasedOnCurrentContext
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Process {@code @Autowired} injection for the given target object,
                         * based on the current web application context.
                         * <p>Intended for use as a delegate.
                         * @param target the target object to process
                         * @see org.springframework.web.context.ContextLoader#getCurrentWebApplicationContext()
                         */
                        // @ts-ignore
                        public static processInjectionBasedOnCurrentContext(target: java.lang.Object | any): void
                        /**
                         * Process {@code @Autowired} injection for the given target object,
                         * based on the current root web application context as stored in the ServletContext.
                         * <p>Intended for use as a delegate.
                         * @param target the target object to process
                         * @param servletContext the ServletContext to find the Spring web application context in
                         * @see WebApplicationContextUtils#getWebApplicationContext(javax.servlet.ServletContext)
                         */
                        // @ts-ignore
                        public static processInjectionBasedOnServletContext(target: java.lang.Object | any, servletContext: ServletContext): void
                    }
                }
            }
        }
    }
}
