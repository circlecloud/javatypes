declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class specifies the set of parameters used for
             * generating DSA parameters as specified in
             * <a href="http://csrc.nist.gov/publications/fips/fips186-3/fips_186-3.pdf">FIPS 186-3 Digital Signature Standard (DSS)</a>.
             * @see AlgorithmParameterSpec
             * @since 8
             */
            // @ts-ignore
            class DSAGenParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Creates a domain parameter specification for DSA parameter
                 * generation using {@code primePLen} and {@code subprimeQLen}.
                 * The value of {@code subprimeQLen} is also used as the default
                 * length of the domain parameter seed in bits.
                 * @param primePLen the desired length of the prime P in bits.
                 * @param subprimeQLen the desired length of the sub-prime Q in bits.
                 * @exception IllegalArgumentException if {#code primePLen}
                 *  or {@code subprimeQLen} is illegal per the specification of
                 *  FIPS 186-3.
                 */
                // @ts-ignore
                constructor(primePLen: number /*int*/, subprimeQLen: number /*int*/)
                /**
                 * Creates a domain parameter specification for DSA parameter
                 * generation using {@code primePLen}, {@code subprimeQLen},
                 * and {@code seedLen}.
                 * @param primePLen the desired length of the prime P in bits.
                 * @param subprimeQLen the desired length of the sub-prime Q in bits.
                 * @param seedLen the desired length of the domain parameter seed in bits,
                 *  shall be equal to or greater than {#code subprimeQLen}.
                 * @exception IllegalArgumentException if {#code primePLenLen},
                 *  {@code subprimeQLen}, or {@code seedLen} is illegal per the
                 *  specification of FIPS 186-3.
                 */
                // @ts-ignore
                constructor(primePLen: number /*int*/, subprimeQLen: number /*int*/, seedLen: number /*int*/)
                /**
                 * Returns the desired length of the prime P of the
                 * to-be-generated DSA domain parameters in bits.
                 * @return the length of the prime P.
                 */
                // @ts-ignore
                getPrimePLength(): int
                /**
                 * Returns the desired length of the sub-prime Q of the
                 * to-be-generated DSA domain parameters in bits.
                 * @return the length of the sub-prime Q.
                 */
                // @ts-ignore
                getSubprimeQLength(): int
                /**
                 * Returns the desired length of the domain parameter seed in bits.
                 * @return the length of the domain parameter seed.
                 */
                // @ts-ignore
                getSeedLength(): int
            }
        }
    }
}
