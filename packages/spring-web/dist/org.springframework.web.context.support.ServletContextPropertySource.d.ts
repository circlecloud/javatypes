declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link PropertySource} that reads init parameters from a {@link ServletContext} object.
                     * @author Chris Beams
                     * @since 3.1
                     * @see ServletConfigPropertySource
                     */
                    // @ts-ignore
                    class ServletContextPropertySource extends <any> {
                        // @ts-ignore
                        constructor(name: string, servletContext: ServletContext)
                        // @ts-ignore
                        getPropertyNames(): java.lang.String[]
                        // @ts-ignore
                        getProperty(name: string): java.lang.String
                    }
                }
            }
        }
    }
}
