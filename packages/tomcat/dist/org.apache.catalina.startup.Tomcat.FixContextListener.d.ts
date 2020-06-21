declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                namespace Tomcat {
                    /**
                     * Fix startup sequence - required if you don't use web.xml.
                     * <p>
                     * The start() method in context will set 'configured' to false - and
                     * expects a listener to set it back to true.
                     */
                    // @ts-ignore
                    class FixContextListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    }
                }
            }
        }
    }
}
