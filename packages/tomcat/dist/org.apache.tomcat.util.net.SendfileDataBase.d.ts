declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    abstract class SendfileDataBase extends java.lang.Object {
                        // @ts-ignore
                        constructor(filename: java.lang.String | string, pos: number /*long*/, length: number /*long*/)
                        /**
                         * Is the current request being processed on a keep-alive connection? This
                         * determines if the socket is closed once the send file completes or if
                         * processing continues with the next request on the connection or waiting
                         * for that next request to arrive.
                         */
                        // @ts-ignore
                        public keepAliveState: org.apache.tomcat.util.net.SendfileKeepAliveState
                        /**
                         * The full path to the file that contains the data to be written to the
                         * socket.
                         */
                        // @ts-ignore
                        public readonly fileName: java.lang.String | string
                        /**
                         * The position of the next byte in the file to be written to the socket.
                         * This is initialised to the start point and then updated as the file is
                         * written.
                         */
                        // @ts-ignore
                        public pos: number /*long*/
                        /**
                         * The number of bytes remaining to be written from the file (from the
                         * current {@link #pos}. This is initialised to the end point - the start
                         * point and then updated as the file is written.
                         */
                        // @ts-ignore
                        public length: number /*long*/
                    }
                }
            }
        }
    }
}
