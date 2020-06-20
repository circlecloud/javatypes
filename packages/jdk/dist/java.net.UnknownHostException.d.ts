declare namespace java {
    namespace net {
        /**
         * Thrown to indicate that the IP address of a host could not be determined.
         * @author Jonathan Payne
         * @since JDK1.0
         */
        // @ts-ignore
        class UnknownHostException extends java.io.IOException {
            /**
             * Constructs a new {@code UnknownHostException} with the
             * specified detail message.
             * @param host   the detail message.
             */
            // @ts-ignore
            constructor(host: string)
            /**
             * Constructs a new {@code UnknownHostException} with no detail
             * message.
             */
            // @ts-ignore
            constructor()
        }
    }
}
