declare namespace java {
    namespace net {
        /**
         * Signals that an error occurred while attempting to connect a
         * socket to a remote address and port.  Typically, the connection
         * was refused remotely (e.g., no process is listening on the
         * remote address/port).
         * @since JDK1.1
         */
        // @ts-ignore
        class ConnectException extends java.net.SocketException {
            /**
             * Constructs a new ConnectException with the specified detail
             * message as to why the connect error occurred.
             * A detail message is a String that gives a specific
             * description of this error.
             * @param msg the detail message
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
            /**
             * Construct a new ConnectException with no detailed message.
             */
            // @ts-ignore
            constructor()
        }
    }
}
