declare namespace java {
    namespace security {
        /**
         * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
         * for the {@code KeyFactory} class.
         * All the abstract methods in this class must be implemented by each
         * cryptographic service provider who wishes to supply the implementation
         * of a key factory for a particular algorithm.
         * <P> Key factories are used to convert <I>keys</I> (opaque
         * cryptographic keys of type {@code Key}) into <I>key specifications</I>
         * (transparent representations of the underlying key material), and vice
         * versa.
         * <P> Key factories are bi-directional. That is, they allow you to build an
         * opaque key object from a given key specification (key material), or to
         * retrieve the underlying key material of a key object in a suitable format.
         * <P> Multiple compatible key specifications may exist for the same key.
         * For example, a DSA public key may be specified using
         * {@code DSAPublicKeySpec} or
         * {@code X509EncodedKeySpec}. A key factory can be used to translate
         * between compatible key specifications.
         * <P> A provider should document all the key specifications supported by its
         * key factory.
         * @author Jan Luehe
         * @see KeyFactory
         * @see Key
         * @see PublicKey
         * @see PrivateKey
         * @see java.security.spec.KeySpec
         * @see java.security.spec.DSAPublicKeySpec
         * @see java.security.spec.X509EncodedKeySpec
         * @since 1.2
         */
        // @ts-ignore
        abstract class KeyFactorySpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Generates a public key object from the provided key
             * specification (key material).
             * @param keySpec the specification (key material) of the public key.
             * @return the public key.
             * @exception InvalidKeySpecException if the given key specification
             *  is inappropriate for this key factory to produce a public key.
             */
            // @ts-ignore
            abstract engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey
            /**
             * Generates a private key object from the provided key
             * specification (key material).
             * @param keySpec the specification (key material) of the private key.
             * @return the private key.
             * @exception InvalidKeySpecException if the given key specification
             *  is inappropriate for this key factory to produce a private key.
             */
            // @ts-ignore
            abstract engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey
            /**
             * Returns a specification (key material) of the given key
             * object.
             * {@code keySpec} identifies the specification class in which
             * the key material should be returned. It could, for example, be
             * {@code DSAPublicKeySpec.class}, to indicate that the
             * key material should be returned in an instance of the
             * {@code DSAPublicKeySpec} class.
             * @param <T> the type of the key specification to be returned
             * @param key the key.
             * @param keySpec the specification class in which
             *  the key material should be returned.
             * @return the underlying key specification (key material) in an instance
             *  of the requested specification class.
             * @exception InvalidKeySpecException if the requested key specification is
             *  inappropriate for the given key, or the given key cannot be dealt with
             *  (e.g., the given key has an unrecognized format).
             */
            // @ts-ignore
            abstract engineGetKeySpec<T extends java.security.spec.KeySpec>(key: java.security.Key, keySpec: java.lang.Class<T>): T
            /**
             * Translates a key object, whose provider may be unknown or
             * potentially untrusted, into a corresponding key object of this key
             * factory.
             * @param key the key whose provider is unknown or untrusted.
             * @return the translated key.
             * @exception InvalidKeyException if the given key cannot be processed
             *  by this key factory.
             */
            // @ts-ignore
            abstract engineTranslateKey(key: java.security.Key): java.security.Key
        }
    }
}
