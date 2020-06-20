declare namespace java {
    namespace security {
        /**
         * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
         * for the {@code AlgorithmParameterGenerator} class, which
         * is used to generate a set of parameters to be used with a certain algorithm.
         * <p> All the abstract methods in this class must be implemented by each
         * cryptographic service provider who wishes to supply the implementation
         * of a parameter generator for a particular algorithm.
         * <p> In case the client does not explicitly initialize the
         * AlgorithmParameterGenerator (via a call to an {@code engineInit}
         * method), each provider must supply (and document) a default initialization.
         * For example, the Sun provider uses a default modulus prime size of 1024
         * bits for the generation of DSA parameters.
         * @author Jan Luehe
         * @see AlgorithmParameterGenerator
         * @see AlgorithmParameters
         * @see java.security.spec.AlgorithmParameterSpec
         * @since 1.2
         */
        // @ts-ignore
        class AlgorithmParameterGeneratorSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Initializes this parameter generator for a certain size
             * and source of randomness.
             * @param size the size (number of bits).
             * @param random the source of randomness.
             */
            // @ts-ignore
            abstract engineInit(size: number /*int*/, random: java.security.SecureRandom): void
            /**
             * Initializes this parameter generator with a set of
             * algorithm-specific parameter generation values.
             * @param genParamSpec the set of algorithm-specific parameter generation values.
             * @param random the source of randomness.
             * @exception InvalidAlgorithmParameterException if the given parameter
             *  generation values are inappropriate for this parameter generator.
             */
            // @ts-ignore
            abstract engineInit(genParamSpec: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void
            /**
             * Generates the parameters.
             * @return the new AlgorithmParameters object.
             */
            // @ts-ignore
            abstract engineGenerateParameters(): java.security.AlgorithmParameters
        }
    }
}
