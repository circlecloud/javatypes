declare namespace java {
    namespace net {
        /**
         * Signals that an error occurred while attempting to connect a
         * socket to a remote address and port.  Typically, the remote
         * host cannot be reached because of an intervening firewall, or
         * if an intermediate router is down.
         * @since JDK1.1
         */
        // @ts-ignore
        class NoRouteToHostException extends java.net.SocketException {
            /**
             * Constructs a new NoRouteToHostException with the specified detail
             * message as to why the remote host cannot be reached.
             * A detail message is a String that gives a specific
             * description of this error.
             * @param msg the detail message
             */
            // @ts-ignore
            constructor(msg: string)
            /**
             * Construct a new NoRouteToHostException with no detailed message.
             */
            // @ts-ignore
            constructor()
        }
    }
}
