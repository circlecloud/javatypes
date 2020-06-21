declare namespace javax {
    namespace crypto {
        /**
         * This exception is thrown when an output buffer provided by the user
         * is too short to hold the operation result.
         * @author Jan Luehe
         * @since 1.4
         */
        // @ts-ignore
        class ShortBufferException extends java.security.GeneralSecurityException {
            /**
             * Constructs a ShortBufferException with no detail
             * message. A detail message is a String that describes this
             * particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a ShortBufferException with the specified
             * detail message.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
