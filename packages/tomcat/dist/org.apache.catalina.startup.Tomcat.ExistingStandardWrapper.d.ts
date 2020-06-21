declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                namespace Tomcat {
                    /**
                     * Helper class for wrapping existing servlets. This disables servlet
                     * lifecycle and normal reloading, but also reduces overhead and provide
                     * more direct control over the servlet.
                     */
                    // @ts-ignore
                    class ExistingStandardWrapper extends org.apache.catalina.core.StandardWrapper {
                        // @ts-ignore
                        constructor(existing: javax.servlet.Servlet)
                        // @ts-ignore
                        public loadServlet(): javax.servlet.Servlet
                        // @ts-ignore
                        public getAvailable(): number /*long*/
                        // @ts-ignore
                        public isUnavailable(): boolean
                        // @ts-ignore
                        public getServlet(): javax.servlet.Servlet
                        // @ts-ignore
                        public getServletClass(): string
                    }
                }
            }
        }
    }
}
