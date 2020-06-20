declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies the set of parameters used for generating
             * Diffie-Hellman (system) parameters for use in Diffie-Hellman key
             * agreement. This is typically done by a central
             * authority.
             * <p> The central authority, after computing the parameters, must send this
             * information to the parties looking to agree on a secret key.
             * @author Jan Luehe
             * @see DHParameterSpec
             * @since 1.4
             */
            // @ts-ignore
            class DHGenParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Constructs a parameter set for the generation of Diffie-Hellman
                 * (system) parameters. The constructed parameter set can be used to
                 * initialize an
                 * {@link java.security.AlgorithmParameterGenerator AlgorithmParameterGenerator}
                 * object for the generation of Diffie-Hellman parameters.
                 * @param primeSize the size (in bits) of the prime modulus.
                 * @param exponentSize the size (in bits) of the random exponent.
                 */
                // @ts-ignore
                constructor(primeSize: number /*int*/, exponentSize: number /*int*/)
                /**
                 * Returns the size in bits of the prime modulus.
                 * @return the size in bits of the prime modulus
                 */
                // @ts-ignore
                getPrimeSize(): int
                /**
                 * Returns the size in bits of the random exponent (private value).
                 * @return the size in bits of the random exponent (private value)
                 */
                // @ts-ignore
                getExponentSize(): int
            }
        }
    }
}
