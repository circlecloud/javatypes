declare namespace javax {
    namespace crypto {
        /**
         * The NullCipher class is a class that provides an
         * "identity cipher" -- one that does not transform the plain text.  As
         * a consequence, the ciphertext is identical to the plaintext.  All
         * initialization methods do nothing, while the blocksize is set to 1
         * byte.
         * @author Li Gong
         * @since 1.4
         */
        // @ts-ignore
        class NullCipher extends javax.crypto.Cipher {
            /**
             * Creates a NullCipher object.
             */
            // @ts-ignore
            constructor()
        }
    }
}
