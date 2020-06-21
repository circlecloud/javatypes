declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AbstractEndpoint {
                        // @ts-ignore
                        interface Handler<S> {
                            /**
                             * Process the provided socket with the given current status.
                             * @param socket The socket to process
                             * @param status The current socket status
                             * @return The state of the socket after processing
                             */
                            // @ts-ignore
                            process(socket: org.apache.tomcat.util.net.SocketWrapperBase<S>, status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                            /**
                             * Obtain the GlobalRequestProcessor associated with the handler.
                             * @return the GlobalRequestProcessor
                             */
                            // @ts-ignore
                            getGlobal(): any
                            /**
                             * Obtain the currently open sockets.
                             * @return The sockets for which the handler is tracking a currently
                             *          open connection
                             */
                            // @ts-ignore
                            getOpenSockets(): Array<S>
                            /**
                             * Release any resources associated with the given SocketWrapper.
                             * @param socketWrapper The socketWrapper to release resources for
                             */
                            // @ts-ignore
                            release(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>): void
                            /**
                             * Inform the handler that the endpoint has stopped accepting any new
                             * connections. Typically, the endpoint will be stopped shortly
                             * afterwards but it is possible that the endpoint will be resumed so
                             * the handler should not assume that a stop will follow.
                             */
                            // @ts-ignore
                            pause(): void
                            /**
                             * Recycle resources associated with the handler.
                             */
                            // @ts-ignore
                            recycle(): void
                        }
                    }
                }
            }
        }
    }
}
