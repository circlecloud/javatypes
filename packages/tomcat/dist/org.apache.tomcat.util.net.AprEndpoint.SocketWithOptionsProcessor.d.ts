declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        /**
                         * This class is the equivalent of the Worker, but will simply use in an
                         * external Executor thread pool. This will also set the socket options
                         * and do the handshake.
                         * This is called after an accept().
                         */
                        // @ts-ignore
                        class SocketWithOptionsProcessor extends java.lang.Object implements java.lang.Runnable {
                            // @ts-ignore
                            constructor(socket: org.apache.tomcat.util.net.SocketWrapperBase<java.lang.Long | number>)
                            // @ts-ignore
                            socket: org.apache.tomcat.util.net.SocketWrapperBase<java.lang.Long | number>
                            // @ts-ignore
                            public run(): void
                        }
                    }
                }
            }
        }
    }
}
