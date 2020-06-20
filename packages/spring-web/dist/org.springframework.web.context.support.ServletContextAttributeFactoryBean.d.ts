declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link FactoryBean} that fetches a specific, existing ServletContext attribute.
                     * Exposes that ServletContext attribute when used as bean reference,
                     * effectively making it available as named Spring bean instance.
                     * <p>Intended to link in ServletContext attributes that exist before
                     * the startup of the Spring application context. Typically, such
                     * attributes will have been put there by third-party web frameworks.
                     * In a purely Spring-based web application, no such linking in of
                     * ServletContext attributes will be necessary.
                     * <p><b>NOTE:</b> As of Spring 3.0, you may also use the "contextAttributes" default
                     * bean which is of type Map, and dereference it using an "#{contextAttributes.myKey}"
                     * expression to access a specific attribute by name.
                     * @author Juergen Hoeller
                     * @since 1.1.4
                     * @see org.springframework.web.context.WebApplicationContext#CONTEXT_ATTRIBUTES_BEAN_NAME
                     * @see ServletContextParameterFactoryBean
                     */
                    // @ts-ignore
                    class ServletContextAttributeFactoryBean extends java.lang.Object implements org.springframework.web.context.ServletContextAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the name of the ServletContext attribute to expose.
                         */
                        // @ts-ignore
                        setAttributeName(attributeName: string): void
                        // @ts-ignore
                        setServletContext(servletContext: ServletContext): void
                        // @ts-ignore
                        getObject(): java.lang.Object
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
