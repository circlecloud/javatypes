declare namespace java {
    namespace net {
        /**
         * Thrown to indicate that there is an error in the underlying
         * protocol, such as a TCP error.
         * @author Chris Warth
         * @since JDK1.0
         */
        // @ts-ignore
        class ProtocolException extends java.io.IOException {
            /**
             * Constructs a new {@code ProtocolException} with the
             * specified detail message.
             * @param host   the detail message.
             */
            // @ts-ignore
            constructor(host: string)
            /**
             * Constructs a new {@code ProtocolException} with no detail message.
             */
            // @ts-ignore
            constructor()
        }
    }
}
