declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SocketWrapperBase {
                        // @ts-ignore
                        class BlockingMode extends java.lang.Enum<org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode> {
                            /**
                             * The operation will now block. If there are pending operations,
                             * the operation will return CompletionState.NOT_DONE.
                             */
                            // @ts-ignore
                            public static readonly NON_BLOCK: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode
                            /**
                             * The operation will block until pending operations are completed, but
                             * will not block after performing it.
                             */
                            // @ts-ignore
                            public static readonly SEMI_BLOCK: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode
                            /**
                             * The operation will block until completed.
                             */
                            // @ts-ignore
                            public static readonly BLOCK: org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode
                            // @ts-ignore
                            public static values(): org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SocketWrapperBase.BlockingMode
                        }
                    }
                }
            }
        }
    }
}
