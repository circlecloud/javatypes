declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SocketWrapperBase {
                        // @ts-ignore
                        class CompletionHandlerCall extends java.lang.Enum<org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall> {
                            /**
                             * Operation should continue, the completion handler shouldn't be
                             * called.
                             */
                            // @ts-ignore
                            public static readonly CONTINUE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall
                            /**
                             * The operation completed but the completion handler shouldn't be
                             * called.
                             */
                            // @ts-ignore
                            public static readonly NONE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall
                            /**
                             * The operation is complete, the completion handler should be
                             * called.
                             */
                            // @ts-ignore
                            public static readonly DONE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall
                            // @ts-ignore
                            public static values(): org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall
                        }
                    }
                }
            }
        }
    }
}
