declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                namespace StandardEngine {
                    // @ts-ignore
                    class AccessLogListener extends java.lang.Object implements java.beans.PropertyChangeListener, org.apache.catalina.LifecycleListener, org.apache.catalina.ContainerListener {
                        // @ts-ignore
                        constructor(engine: org.apache.catalina.core.StandardEngine, host: org.apache.catalina.Host, context: org.apache.catalina.Context)
                        // @ts-ignore
                        public install(): void
                        // @ts-ignore
                        public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                        // @ts-ignore
                        public propertyChange(evt: java.beans.PropertyChangeEvent): void
                        // @ts-ignore
                        public containerEvent(event: org.apache.catalina.ContainerEvent): void
                    }
                }
            }
        }
    }
}
