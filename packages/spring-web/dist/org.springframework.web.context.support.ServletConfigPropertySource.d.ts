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
                    class ServletConfigPropertySource extends java.lang.Object {
                        // @ts-ignore
                        constructor(name: java.lang.String | string, servletConfig: ServletConfig)
                        // @ts-ignore
                        public getPropertyNames(): string[]
                        // @ts-ignore
                        public getProperty(name: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
