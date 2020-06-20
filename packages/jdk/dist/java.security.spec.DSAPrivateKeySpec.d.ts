declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies a DSA private key with its associated parameters.
             * @author Jan Luehe
             * @see java.security.Key
             * @see java.security.KeyFactory
             * @see KeySpec
             * @see DSAPublicKeySpec
             * @see PKCS8EncodedKeySpec
             * @since 1.2
             */
            // @ts-ignore
            class DSAPrivateKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a new DSAPrivateKeySpec with the specified parameter values.
                 * @param x the private key.
                 * @param p the prime.
                 * @param q the sub-prime.
                 * @param g the base.
                 */
                // @ts-ignore
                constructor(x: java.math.BigInteger, p: java.math.BigInteger, q: java.math.BigInteger, g: java.math.BigInteger)
                /**
                 * Returns the private key {@code x}.
                 * @return the private key {#code x}.
                 */
                // @ts-ignore
                getX(): java.math.BigInteger
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
