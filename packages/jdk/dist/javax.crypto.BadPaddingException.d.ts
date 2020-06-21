declare namespace javax {
    namespace crypto {
        /**
         * This exception is thrown when a particular padding mechanism is
         * expected for the input data but the data is not padded properly.
         * @author Gigi Ankney
         * @since 1.4
         */
        // @ts-ignore
        class BadPaddingException extends java.security.GeneralSecurityException {
            /**
             * Constructs a BadPaddingException with no detail
             * message. A detail message is a String that describes this
             * particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a BadPaddingException with the specified
             * detail message.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
