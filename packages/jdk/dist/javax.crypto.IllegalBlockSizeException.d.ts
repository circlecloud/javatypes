declare namespace javax {
    namespace crypto {
        /**
         * This exception is thrown when the length of data provided to a block
         * cipher is incorrect, i.e., does not match the block size of the cipher.
         * @author Jan Luehe
         * @since 1.4
         */
        // @ts-ignore
        class IllegalBlockSizeException extends java.security.GeneralSecurityException {
            /**
             * Constructs an IllegalBlockSizeException with no detail message.
             * A detail message is a String that describes this particular
             * exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an IllegalBlockSizeException with the specified
             * detail message.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: string)
        }
    }
}
