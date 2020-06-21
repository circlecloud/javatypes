declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    class SendfileKeepAliveState extends java.lang.Enum<org.apache.tomcat.util.net.SendfileKeepAliveState> {
                        /**
                         * Keep-alive is not in use. The socket can be closed when the response has
                         * been written.
                         */
                        // @ts-ignore
                        readonly NONE: org.apache.tomcat.util.net.SendfileKeepAliveState
                        /**
                         * Keep-alive is in use and there is pipelined data in the input buffer to
                         * be read as soon as the current response has been written.
                         */
                        // @ts-ignore
                        readonly PIPELINED: org.apache.tomcat.util.net.SendfileKeepAliveState
                        /**
                         * Keep-alive is in use. The socket should be added to the poller (or
                         * equivalent) to await more data as soon as the current response has been
                         * written.
                         */
                        // @ts-ignore
                        readonly OPEN: org.apache.tomcat.util.net.SendfileKeepAliveState
                        // @ts-ignore
                        values(): org.apache.tomcat.util.net.SendfileKeepAliveState[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SendfileKeepAliveState
                    }
                }
            }
        }
    }
}
