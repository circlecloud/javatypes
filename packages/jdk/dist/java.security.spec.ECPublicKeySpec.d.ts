declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class specifies an elliptic curve public key with
             * its associated parameters.
             * @see KeySpec
             * @see ECPoint
             * @see ECParameterSpec
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECPublicKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a new ECPublicKeySpec with the specified
                 * parameter values.
                 * @param w the public point.
                 * @param params the associated elliptic curve domain
                 *  parameters.
                 * @exception NullPointerException if {#code w}
                 *  or {@code params} is null.
                 * @exception IllegalArgumentException if {#code w}
                 *  is point at infinity, i.e. ECPoint.POINT_INFINITY
                 */
                // @ts-ignore
                constructor(w: java.security.spec.ECPoint, params: java.security.spec.ECParameterSpec)
                /**
                 * Returns the public point W.
                 * @return the public point W.
                 */
                // @ts-ignore
                public getW(): java.security.spec.ECPoint
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
