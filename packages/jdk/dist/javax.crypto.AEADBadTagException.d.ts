declare namespace javax {
    namespace crypto {
        /**
         * This exception is thrown when a {@link Cipher} operating in
         * an AEAD mode (such as GCM/CCM) is unable to verify the supplied
         * authentication tag.
         * @since 1.7
         */
        // @ts-ignore
        class AEADBadTagException extends javax.crypto.BadPaddingException {
            /**
             * Constructs a AEADBadTagException with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a AEADBadTagException with the specified
             * detail message.
             * @param msg the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
