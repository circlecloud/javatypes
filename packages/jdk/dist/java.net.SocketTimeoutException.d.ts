declare namespace java {
    namespace net {
        /**
         * Signals that a timeout has occurred on a socket read or accept.
         * @since 1.4
         */
        // @ts-ignore
        class SocketTimeoutException extends java.io.InterruptedIOException {
            /**
             * Constructs a new SocketTimeoutException with a detail
             * message.
             * @param msg the detail message
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
            /**
             * Construct a new SocketTimeoutException with no detailed message.
             */
            // @ts-ignore
            constructor()
        }
    }
}
