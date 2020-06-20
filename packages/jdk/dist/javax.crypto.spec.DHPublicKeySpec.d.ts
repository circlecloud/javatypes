declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies a Diffie-Hellman public key with its associated
             * parameters.
             * <p>Note that this class does not perform any validation on specified
             * parameters. Thus, the specified values are returned directly even
             * if they are null.
             * @author Jan Luehe
             * @see DHPrivateKeySpec
             * @since 1.4
             */
            // @ts-ignore
            class DHPublicKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Constructor that takes a public value <code>y</code>, a prime
                 * modulus <code>p</code>, and a base generator <code>g</code>.
                 * @param y  public value y
                 * @param p  prime modulus p
                 * @param g  base generator g
                 */
                // @ts-ignore
                constructor(y: java.math.BigInteger, p: java.math.BigInteger, g: java.math.BigInteger)
                /**
                 * Returns the public value <code>y</code>.
                 * @return the public value <code>y</code>
                 */
                // @ts-ignore
                getY(): java.math.BigInteger
                /**
                 * Returns the prime modulus <code>p</code>.
                 * @return the prime modulus <code>p</code>
                 */
                // @ts-ignore
                getP(): java.math.BigInteger
                /**
                 * Returns the base generator <code>g</code>.
                 * @return the base generator <code>g</code>
                 */
                // @ts-ignore
                getG(): java.math.BigInteger
            }
        }
    }
}
