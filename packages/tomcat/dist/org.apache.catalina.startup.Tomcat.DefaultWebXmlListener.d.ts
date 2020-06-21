declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                namespace Tomcat {
                    /**
                     * Fix reload - required if reloading and using programmatic configuration.
                     * When a context is reloaded, any programmatic configuration is lost. This
                     * listener sets the equivalent of conf/web.xml when the context starts.
                     */
                    // @ts-ignore
                    class DefaultWebXmlListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
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
