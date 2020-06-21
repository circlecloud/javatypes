declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        /**
                         * This class is the equivalent of the Worker, but will simply use in an
                         * external Executor thread pool.
                         */
                        // @ts-ignore
                        class SocketProcessor extends org.apache.tomcat.util.net.SocketProcessorBase<java.lang.Long | number> {
                            // @ts-ignore
                            constructor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<java.lang.Long | number>, event: org.apache.tomcat.util.net.SocketEvent)
                            // @ts-ignore
                            doRun(): void
                        }
                    }
                }
            }
        }
    }
}
