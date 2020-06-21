declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class specifies the set of domain parameters
             * used with elliptic curve cryptography (ECC).
             * @see AlgorithmParameterSpec
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Creates elliptic curve domain parameters based on the
                 * specified values.
                 * @param curve the elliptic curve which this parameter
                 *  defines.
                 * @param g the generator which is also known as the base point.
                 * @param n the order of the generator {#code g}.
                 * @param h the cofactor.
                 * @exception NullPointerException if {#code curve},
                 *  {@code g}, or {@code n} is null.
                 * @exception IllegalArgumentException if {#code n}
                 *  or {@code h} is not positive.
                 */
                // @ts-ignore
                constructor(curve: java.security.spec.EllipticCurve, g: java.security.spec.ECPoint, n: java.math.BigInteger, h: number /*int*/)
                /**
                 * Returns the elliptic curve that this parameter defines.
                 * @return the elliptic curve that this parameter defines.
                 */
                // @ts-ignore
                public getCurve(): java.security.spec.EllipticCurve
                /**
                 * Returns the generator which is also known as the base point.
                 * @return the generator which is also known as the base point.
                 */
                // @ts-ignore
                public getGenerator(): java.security.spec.ECPoint
                /**
                 * Returns the order of the generator.
                 * @return the order of the generator.
                 */
                // @ts-ignore
                public getOrder(): java.math.BigInteger
                /**
                 * Returns the cofactor.
                 * @return the cofactor.
                 */
                // @ts-ignore
                public getCofactor(): number /*int*/
            }
        }
    }
}
