declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    class SendfileState extends java.lang.Enum<org.apache.tomcat.util.net.SendfileState> {
                        /**
                         * The sending of the file has started but has not completed. Sendfile is
                         * still using the socket.
                         */
                        // @ts-ignore
                        public static readonly PENDING: org.apache.tomcat.util.net.SendfileState
                        /**
                         * The file has been fully sent. Sendfile is no longer using the socket.
                         */
                        // @ts-ignore
                        public static readonly DONE: org.apache.tomcat.util.net.SendfileState
                        /**
                         * Something went wrong. The file may or may not have been sent. The socket
                         * is in an unknown state.
                         */
                        // @ts-ignore
                        public static readonly ERROR: org.apache.tomcat.util.net.SendfileState
                        // @ts-ignore
                        public static values(): org.apache.tomcat.util.net.SendfileState[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SendfileState
                    }
                }
            }
        }
    }
}
