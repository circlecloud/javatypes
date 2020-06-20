declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link FactoryBean} that retrieves a specific ServletContext init parameter
                     * (that is, a "context-param" defined in {@code web.xml}).
                     * Exposes that ServletContext init parameter when used as bean reference,
                     * effectively making it available as named Spring bean instance.
                     * <p><b>NOTE:</b> As of Spring 3.0, you may also use the "contextParameters" default
                     * bean which is of type Map, and dereference it using an "#{contextParameters.myKey}"
                     * expression to access a specific parameter by name.
                     * @author Juergen Hoeller
                     * @since 1.2.4
                     * @see org.springframework.web.context.WebApplicationContext#CONTEXT_PARAMETERS_BEAN_NAME
                     * @see ServletContextAttributeFactoryBean
                     */
                    // @ts-ignore
                    class ServletContextParameterFactoryBean extends java.lang.Object implements org.springframework.web.context.ServletContextAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the name of the ServletContext init parameter to expose.
                         */
                        // @ts-ignore
                        setInitParamName(initParamName: string): void
                        // @ts-ignore
                        setServletContext(servletContext: ServletContext): void
                        // @ts-ignore
                        getObject(): java.lang.String
                        // @ts-ignore
                        getObjectType(): java.lang.Class<java.lang.String>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
