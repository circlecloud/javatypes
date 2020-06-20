declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies a DSA public key with its associated parameters.
             * @author Jan Luehe
             * @see java.security.Key
             * @see java.security.KeyFactory
             * @see KeySpec
             * @see DSAPrivateKeySpec
             * @see X509EncodedKeySpec
             * @since 1.2
             */
            // @ts-ignore
            class DSAPublicKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a new DSAPublicKeySpec with the specified parameter values.
                 * @param y the public key.
                 * @param p the prime.
                 * @param q the sub-prime.
                 * @param g the base.
                 */
                // @ts-ignore
                constructor(y: java.math.BigInteger, p: java.math.BigInteger, q: java.math.BigInteger, g: java.math.BigInteger)
                /**
                 * Returns the public key {@code y}.
                 * @return the public key {#code y}.
                 */
                // @ts-ignore
                getY(): java.math.BigInteger
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
