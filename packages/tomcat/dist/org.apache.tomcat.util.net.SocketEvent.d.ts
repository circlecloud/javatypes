declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Defines events that occur per socket that require further processing by the
                     * container. Usually these events are triggered by the socket implementation
                     * but they may be triggered by the container.
                     */
                    // @ts-ignore
                    class SocketEvent extends java.lang.Enum<org.apache.tomcat.util.net.SocketEvent> {
                        /**
                         * Data is available to be read.
                         */
                        // @ts-ignore
                        readonly OPEN_READ: org.apache.tomcat.util.net.SocketEvent
                        /**
                         * The socket is ready to be written to.
                         */
                        // @ts-ignore
                        readonly OPEN_WRITE: org.apache.tomcat.util.net.SocketEvent
                        /**
                         * The associated Connector/Endpoint is stopping and the connection/socket
                         * needs to be closed cleanly.
                         */
                        // @ts-ignore
                        readonly STOP: org.apache.tomcat.util.net.SocketEvent
                        /**
                         * A timeout has occurred and the connection needs to be closed cleanly.
                         * Currently this is only used by the Servlet 3.0 async processing.
                         */
                        // @ts-ignore
                        readonly TIMEOUT: org.apache.tomcat.util.net.SocketEvent
                        /**
                         * The client has disconnected.
                         */
                        // @ts-ignore
                        readonly DISCONNECT: org.apache.tomcat.util.net.SocketEvent
                        /**
                         * An error has occurred on a non-container thread and processing needs to
                         * return to the container for any necessary clean-up. Examples of where
                         * this is used include:
                         * <ul>
                         * <li>by NIO2 to signal the failure of a completion handler</li>
                         * <li>by the container to signal an I/O error on a non-container thread
                         * during Servlet 3.0 asynchronous processing.</li>
                         * </ul>
                         */
                        // @ts-ignore
                        readonly ERROR: org.apache.tomcat.util.net.SocketEvent
                        // @ts-ignore
                        values(): org.apache.tomcat.util.net.SocketEvent[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SocketEvent
                    }
                }
            }
        }
    }
}
