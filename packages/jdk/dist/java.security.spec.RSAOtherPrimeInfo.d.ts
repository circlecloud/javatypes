declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class represents the triplet (prime, exponent, and coefficient)
             * inside RSA's OtherPrimeInfo structure, as defined in the PKCS#1 v2.1.
             * The ASN.1 syntax of RSA's OtherPrimeInfo is as follows:
             * <pre>
             * OtherPrimeInfo ::= SEQUENCE {
             * prime INTEGER,
             * exponent INTEGER,
             * coefficient INTEGER
             * }
             * </pre>
             * @author Valerie Peng
             * @see RSAPrivateCrtKeySpec
             * @see java.security.interfaces.RSAMultiPrimePrivateCrtKey
             * @since 1.4
             */
            // @ts-ignore
            class RSAOtherPrimeInfo extends java.lang.Object {
                /**
                 * Creates a new {@code RSAOtherPrimeInfo}
                 * given the prime, primeExponent, and
                 * crtCoefficient as defined in PKCS#1.
                 * @param prime the prime factor of n.
                 * @param primeExponent the exponent.
                 * @param crtCoefficient the Chinese Remainder Theorem
                 *  coefficient.
                 * @exception NullPointerException if any of the parameters, i.e.
                 *  {#code prime}, {@code primeExponent},
                 *  {@code crtCoefficient}, is null.
                 */
                // @ts-ignore
                constructor(prime: java.math.BigInteger, primeExponent: java.math.BigInteger, crtCoefficient: java.math.BigInteger)
                /**
                 * Returns the prime.
                 * @return the prime.
                 */
                // @ts-ignore
                getPrime(): java.math.BigInteger
                /**
                 * Returns the prime's exponent.
                 * @return the primeExponent.
                 */
                // @ts-ignore
                getExponent(): java.math.BigInteger
                /**
                 * Returns the prime's crtCoefficient.
                 * @return the crtCoefficient.
                 */
                // @ts-ignore
                getCrtCoefficient(): java.math.BigInteger
            }
        }
    }
}
