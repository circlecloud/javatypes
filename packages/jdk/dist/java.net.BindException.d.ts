declare namespace java {
    namespace net {
        /**
         * Signals that an error occurred while attempting to bind a
         * socket to a local address and port.  Typically, the port is
         * in use, or the requested local address could not be assigned.
         * @since JDK1.1
         */
        // @ts-ignore
        class BindException extends java.net.SocketException {
            /**
             * Constructs a new BindException with the specified detail
             * message as to why the bind error occurred.
             * A detail message is a String that gives a specific
             * description of this error.
             * @param msg the detail message
             */
            // @ts-ignore
            constructor(msg: string)
            /**
             * Construct a new BindException with no detailed message.
             */
            // @ts-ignore
            constructor()
        }
    }
}
