declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies the set of parameters used with the DSA algorithm.
             * @author Jan Luehe
             * @see AlgorithmParameterSpec
             * @since 1.2
             */
            // @ts-ignore
            class DSAParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec, java.security.interfaces.DSAParams {
                /**
                 * Creates a new DSAParameterSpec with the specified parameter values.
                 * @param p the prime.
                 * @param q the sub-prime.
                 * @param g the base.
                 */
                // @ts-ignore
                constructor(p: java.math.BigInteger, q: java.math.BigInteger, g: java.math.BigInteger)
                /**
                 * Returns the prime {@code p}.
                 * @return the prime {#code p}.
                 */
                // @ts-ignore
                getP(): java.math.BigInteger
                /**
                 * Returns the sub-prime {@code q}.
                 * @return the sub-prime {#code q}.
                 */
                // @ts-ignore
                getQ(): java.math.BigInteger
                /**
                 * Returns the base {@code g}.
                 * @return the base {#code g}.
                 */
                // @ts-ignore
                getG(): java.math.BigInteger
            }
        }
    }
}
