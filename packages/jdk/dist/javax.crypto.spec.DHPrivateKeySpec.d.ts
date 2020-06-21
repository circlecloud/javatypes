declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies a Diffie-Hellman private key with its associated
             * parameters.
             * <p>Note that this class does not perform any validation on specified
             * parameters. Thus, the specified values are returned directly even
             * if they are null.
             * @author Jan Luehe
             * @see DHPublicKeySpec
             * @since 1.4
             */
            // @ts-ignore
            class DHPrivateKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Constructor that takes a private value <code>x</code>, a prime
                 * modulus <code>p</code>, and a base generator <code>g</code>.
                 * @param x private value x
                 * @param p prime modulus p
                 * @param g base generator g
                 */
                // @ts-ignore
                constructor(x: java.math.BigInteger, p: java.math.BigInteger, g: java.math.BigInteger)
                /**
                 * Returns the private value <code>x</code>.
                 * @return the private value <code>x</code>
                 */
                // @ts-ignore
                public getX(): java.math.BigInteger
                /**
                 * Returns the prime modulus <code>p</code>.
                 * @return the prime modulus <code>p</code>
                 */
                // @ts-ignore
                public getP(): java.math.BigInteger
                /**
                 * Returns the base generator <code>g</code>.
                 * @return the base generator <code>g</code>
                 */
                // @ts-ignore
                public getG(): java.math.BigInteger
            }
        }
    }
}
