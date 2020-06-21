declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    abstract class SocketProcessorBase<S> extends java.lang.Object implements java.lang.Runnable {
                        // @ts-ignore
                        constructor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>, event: org.apache.tomcat.util.net.SocketEvent)
                        // @ts-ignore
                        socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>
                        // @ts-ignore
                        event: org.apache.tomcat.util.net.SocketEvent
                        // @ts-ignore
                        public reset(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>, event: org.apache.tomcat.util.net.SocketEvent): void
                        // @ts-ignore
                        public run(): void
                        // @ts-ignore
                        abstract doRun(): void
                    }
                }
            }
        }
    }
}
