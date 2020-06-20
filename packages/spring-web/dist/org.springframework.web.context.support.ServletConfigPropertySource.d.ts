declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link PropertySource} that reads init parameters from a {@link ServletConfig} object.
                     * @author Chris Beams
                     * @since 3.1
                     * @see ServletContextPropertySource
                     */
                    // @ts-ignore
                    class ServletConfigPropertySource extends <any> {
                        // @ts-ignore
                        constructor(name: string, servletConfig: ServletConfig)
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
