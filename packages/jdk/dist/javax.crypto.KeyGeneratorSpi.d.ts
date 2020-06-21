declare namespace javax {
    namespace crypto {
        /**
         * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
         * for the <code>KeyGenerator</code> class.
         * All the abstract methods in this class must be implemented by each
         * cryptographic service provider who wishes to supply the implementation
         * of a key generator for a particular algorithm.
         * @author Jan Luehe
         * @see SecretKey
         * @since 1.4
         */
        // @ts-ignore
        abstract class KeyGeneratorSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Initializes the key generator.
             * @param random the source of randomness for this generator
             */
            // @ts-ignore
            abstract engineInit(random: java.security.SecureRandom): void
            /**
             * Initializes the key generator with the specified parameter
             * set and a user-provided source of randomness.
             * @param params the key generation parameters
             * @param random the source of randomness for this key generator
             * @exception InvalidAlgorithmParameterException if <code>params</code> is
             *  inappropriate for this key generator
             */
            // @ts-ignore
            abstract engineInit(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void
            /**
             * Initializes this key generator for a certain keysize, using the given
             * source of randomness.
             * @param keysize the keysize. This is an algorithm-specific metric,
             *  specified in number of bits.
             * @param random the source of randomness for this key generator
             * @exception InvalidParameterException if the keysize is wrong or not
             *  supported.
             */
            // @ts-ignore
            abstract engineInit(keysize: number /*int*/, random: java.security.SecureRandom): void
            /**
             * Generates a secret key.
             * @return the new key
             */
            // @ts-ignore
            abstract engineGenerateKey(): javax.crypto.SecretKey
        }
    }
}
