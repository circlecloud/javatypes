declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Exporter that takes Spring-defined objects and exposes them as
                     * ServletContext attributes. Usually, bean references will be used
                     * to export Spring-defined beans as ServletContext attributes.
                     * <p>Useful to make Spring-defined beans available to code that is
                     * not aware of Spring at all, but rather just of the Servlet API.
                     * Client code can then use plain ServletContext attribute lookups
                     * to access those objects, despite them being defined in a Spring
                     * application context.
                     * <p>Alternatively, consider using the WebApplicationContextUtils
                     * class to access Spring-defined beans via the WebApplicationContext
                     * interface. This makes client code aware of Spring API, of course.
                     * @author Juergen Hoeller
                     * @since 1.1.4
                     * @see javax.servlet.ServletContext#getAttribute
                     * @see WebApplicationContextUtils#getWebApplicationContext
                     */
                    // @ts-ignore
                    class ServletContextAttributeExporter extends java.lang.Object implements org.springframework.web.context.ServletContextAware {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the ServletContext attributes to expose as key-value pairs.
                         * Each key will be considered a ServletContext attributes key,
                         * and each value will be used as corresponding attribute value.
                         * <p>Usually, you will use bean references for the values,
                         * to export Spring-defined beans as ServletContext attributes.
                         * Of course, it is also possible to define plain values to export.
                         */
                        // @ts-ignore
                        setAttributes(attributes: java.util.Map<java.lang.String, java.lang.Object>): void
                        // @ts-ignore
                        setServletContext(servletContext: ServletContext): void
                    }
                }
            }
        }
    }
}
