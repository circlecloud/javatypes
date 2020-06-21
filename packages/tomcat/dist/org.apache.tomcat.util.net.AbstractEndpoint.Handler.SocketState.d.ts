declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AbstractEndpoint {
                        namespace Handler {
                            /**
                             * Different types of socket states to react upon.
                             */
                            // @ts-ignore
                            class SocketState extends java.lang.Enum<org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState> {
                                // @ts-ignore
                                readonly OPEN: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly CLOSED: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly LONG: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly ASYNC_END: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly SENDFILE: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly UPGRADING: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly UPGRADED: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                readonly SUSPENDED: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                values(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState[]
                                // @ts-ignore
                                valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                            }
                        }
                    }
                }
            }
        }
    }
}
