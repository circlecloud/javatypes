declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SocketWrapperBase {
                        // @ts-ignore
                        interface CompletionCheck {
                            /**
                             * Determine what call, if any, should be made to the completion
                             * handler.
                             * @param state of the operation (done or done in-line since the
                             *         IO call is done)
                             * @param buffers ByteBuffer[] that has been passed to the
                             *         original IO call
                             * @param offset that has been passed to the original IO call
                             * @param length that has been passed to the original IO call
                             * @return The call, if any, to make to the completion handler
                             */
                            // @ts-ignore
                            callHandler(state: org.apache.tomcat.util.net.SocketWrapperBase.CompletionState, buffers: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/): org.apache.tomcat.util.net.SocketWrapperBase.CompletionHandlerCall
                        }
                    }
                }
            }
        }
    }
}
