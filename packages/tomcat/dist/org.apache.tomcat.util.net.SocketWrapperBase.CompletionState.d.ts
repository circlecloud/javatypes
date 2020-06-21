declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SocketWrapperBase {
                        // @ts-ignore
                        class CompletionState extends java.lang.Enum<org.apache.tomcat.util.net.SocketWrapperBase.CompletionState> {
                            /**
                             * Operation is still pending.
                             */
                            // @ts-ignore
                            readonly PENDING: org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            /**
                             * Operation was pending and non blocking.
                             */
                            // @ts-ignore
                            readonly NOT_DONE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            /**
                             * The operation completed inline.
                             */
                            // @ts-ignore
                            readonly INLINE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            /**
                             * The operation completed inline but failed.
                             */
                            // @ts-ignore
                            readonly ERROR: org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            /**
                             * The operation completed, but not inline.
                             */
                            // @ts-ignore
                            readonly DONE: org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                            // @ts-ignore
                            values(): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SocketWrapperBase.CompletionState
                        }
                    }
                }
            }
        }
    }
}
