declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace Nio2Endpoint {
                        /**
                         * This class is the equivalent of the Worker, but will simply use in an
                         * external Executor thread pool.
                         */
                        // @ts-ignore
                        class SocketProcessor extends org.apache.tomcat.util.net.SocketProcessorBase<org.apache.tomcat.util.net.Nio2Channel> {
                            // @ts-ignore
                            constructor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel>, event: org.apache.tomcat.util.net.SocketEvent)
                            // @ts-ignore
                            doRun(): void
                        }
                    }
                }
            }
        }
    }
}
