declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        // @ts-ignore
                        class SocketTimeouts extends java.lang.Object {
                            // @ts-ignore
                            constructor(size: number /*int*/)
                            // @ts-ignore
                            size: number /*int*/
                            // @ts-ignore
                            sockets: number /*long*/[]
                            // @ts-ignore
                            timeouts: number /*long*/[]
                            // @ts-ignore
                            pos: number /*int*/
                            // @ts-ignore
                            public add(socket: number /*long*/, timeout: number /*long*/): void
                            /**
                             * Removes the specified socket from the poller.
                             * @param socket The socket to remove
                             * @return The configured timeout for the socket or zero if the socket
                             *          was not in the list of socket timeouts
                             */
                            // @ts-ignore
                            public remove(socket: number /*long*/): number /*long*/
                            // @ts-ignore
                            public check(date: number /*long*/): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
