declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                namespace PropertySource {
                    /**
                     * {@code PropertySource} to be used as a placeholder in cases where an actual
                     * property source cannot be eagerly initialized at application context
                     * creation time.  For example, a {@code ServletContext}-based property source
                     * must wait until the {@code ServletContext} object is available to its enclosing
                     * {@code ApplicationContext}.  In such cases, a stub should be used to hold the
                     * intended default position/order of the property source, then be replaced
                     * during context refresh.
                     * @see org.springframework.context.support.AbstractApplicationContext#initPropertySources()
                     * @see org.springframework.web.context.support.StandardServletEnvironment
                     * @see org.springframework.web.context.support.ServletContextPropertySource
                     */
                    // @ts-ignore
                    class StubPropertySource extends org.springframework.core.env.PropertySource<java.lang.Object> {
                        // @ts-ignore
                        constructor(name: string)
                        /**
                         * Always returns {@code null}.
                         */
                        // @ts-ignore
                        getProperty(name: string): java.lang.String
                    }
                }
            }
        }
    }
}
