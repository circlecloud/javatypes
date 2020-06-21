declare namespace java {
    namespace security {
        /**
         * This class is a simple holder for a key pair (a public key and a
         * private key). It does not enforce any security, and, when initialized,
         * should be treated like a PrivateKey.
         * @see PublicKey
         * @see PrivateKey
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class KeyPair extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a key pair from the given public key and private key.
             * <p>Note that this constructor only stores references to the public
             * and private key components in the generated key pair. This is safe,
             * because {@code Key} objects are immutable.
             * @param publicKey the public key.
             * @param privateKey the private key.
             */
            // @ts-ignore
            constructor(publicKey: java.security.PublicKey, privateKey: java.security.PrivateKey)
            /**
             * Returns a reference to the public key component of this key pair.
             * @return a reference to the public key.
             */
            // @ts-ignore
            public getPublic(): java.security.PublicKey
            /**
             * Returns a reference to the private key component of this key pair.
             * @return a reference to the private key.
             */
            // @ts-ignore
            public getPrivate(): java.security.PrivateKey
        }
    }
}
