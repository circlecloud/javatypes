declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class represents a point on an elliptic curve (EC)
             * in affine coordinates. Other coordinate systems can
             * extend this class to represent this point in other
             * coordinates.
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECPoint extends java.lang.Object {
                /**
                 * Creates an ECPoint from the specified affine x-coordinate
                 * {@code x} and affine y-coordinate {@code y}.
                 * @param x the affine x-coordinate.
                 * @param y the affine y-coordinate.
                 * @exception NullPointerException if {#code x} or
                 *  {@code y} is null.
                 */
                // @ts-ignore
                constructor(x: java.math.BigInteger, y: java.math.BigInteger)
                /**
                 * This defines the point at infinity.
                 */
                // @ts-ignore
                readonly POINT_INFINITY: java.security.spec.ECPoint
                /**
                 * Returns the affine x-coordinate {@code x}.
                 * Note: POINT_INFINITY has a null affine x-coordinate.
                 * @return the affine x-coordinate.
                 */
                // @ts-ignore
                getAffineX(): java.math.BigInteger
                /**
                 * Returns the affine y-coordinate {@code y}.
                 * Note: POINT_INFINITY has a null affine y-coordinate.
                 * @return the affine y-coordinate.
                 */
                // @ts-ignore
                getAffineY(): java.math.BigInteger
                /**
                 * Compares this elliptic curve point for equality with
                 * the specified object.
                 * @param obj the object to be compared.
                 * @return true if {#code obj} is an instance of
                 *  ECPoint and the affine coordinates match, false otherwise.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hash code value for this elliptic curve point.
                 * @return a hash code value.
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
