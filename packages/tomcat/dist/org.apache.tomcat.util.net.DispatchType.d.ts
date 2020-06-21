declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * This enumeration lists the different types of dispatches that request
                     * processing can trigger. In this instance, dispatch means re-process this
                     * request using the given socket status.
                     */
                    // @ts-ignore
                    class DispatchType extends java.lang.Enum<org.apache.tomcat.util.net.DispatchType> {
                        // @ts-ignore
                        readonly NON_BLOCKING_READ: org.apache.tomcat.util.net.DispatchType
                        // @ts-ignore
                        readonly NON_BLOCKING_WRITE: org.apache.tomcat.util.net.DispatchType
                        // @ts-ignore
                        values(): org.apache.tomcat.util.net.DispatchType[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.DispatchType
                        // @ts-ignore
                        getSocketStatus(): org.apache.tomcat.util.net.SocketEvent
                    }
                }
            }
        }
    }
}
