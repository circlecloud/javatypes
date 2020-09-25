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
                                public static readonly OPEN: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly CLOSED: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly LONG: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly ASYNC_END: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly SENDFILE: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly UPGRADING: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly UPGRADED: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static readonly SUSPENDED: org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                                // @ts-ignore
                                public static values(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState[]
                                // @ts-ignore
                                public static valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                            }
                        }
                    }
                }
            }
        }
    }
}
