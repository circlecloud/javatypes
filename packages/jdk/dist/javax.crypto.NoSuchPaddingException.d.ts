declare namespace javax {
    namespace crypto {
        /**
         * This exception is thrown when a particular padding mechanism is
         * requested but is not available in the environment.
         * @author Jan Luehe
         * @since 1.4
         */
        // @ts-ignore
        class NoSuchPaddingException extends java.security.GeneralSecurityException {
            /**
             * Constructs a NoSuchPaddingException with no detail
             * message. A detail message is a String that describes this
             * particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a NoSuchPaddingException with the specified
             * detail message.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: string)
        }
    }
}
