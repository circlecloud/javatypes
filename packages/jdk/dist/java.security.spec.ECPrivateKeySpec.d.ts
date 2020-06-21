declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class specifies an elliptic curve private key with
             * its associated parameters.
             * @see KeySpec
             * @see ECParameterSpec
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECPrivateKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a new ECPrivateKeySpec with the specified
                 * parameter values.
                 * @param s the private value.
                 * @param params the associated elliptic curve domain
                 *  parameters.
                 * @exception NullPointerException if {#code s}
                 *  or {@code params} is null.
                 */
                // @ts-ignore
                constructor(s: java.math.BigInteger, params: java.security.spec.ECParameterSpec)
                /**
                 * Returns the private value S.
                 * @return the private value S.
                 */
                // @ts-ignore
                public getS(): java.math.BigInteger
                /**
                 * Returns the associated elliptic curve domain
                 * parameters.
                 * @return the EC domain parameters.
                 */
                // @ts-ignore
                public getParams(): java.security.spec.ECParameterSpec
            }
        }
    }
}
