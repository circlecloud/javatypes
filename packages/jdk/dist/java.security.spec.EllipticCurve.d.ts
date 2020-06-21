declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class holds the necessary values needed to represent
             * an elliptic curve.
             * @see ECField
             * @see ECFieldFp
             * @see ECFieldF2m
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class EllipticCurve extends java.lang.Object {
                /**
                 * Creates an elliptic curve with the specified elliptic field
                 * {@code field} and the coefficients {@code a} and
                 * {@code b}.
                 * @param field the finite field that this elliptic curve is over.
                 * @param a the first coefficient of this elliptic curve.
                 * @param b the second coefficient of this elliptic curve.
                 * @exception NullPointerException if {#code field},
                 *  {@code a}, or {@code b} is null.
                 * @exception IllegalArgumentException if {#code a}
                 *  or {@code b} is not null and not in {@code field}.
                 */
                // @ts-ignore
                constructor(field: java.security.spec.ECField, a: java.math.BigInteger, b: java.math.BigInteger)
                /**
                 * Creates an elliptic curve with the specified elliptic field
                 * {@code field}, the coefficients {@code a} and
                 * {@code b}, and the {@code seed} used for curve generation.
                 * @param field the finite field that this elliptic curve is over.
                 * @param a the first coefficient of this elliptic curve.
                 * @param b the second coefficient of this elliptic curve.
                 * @param seed the bytes used during curve generation for later
                 *  validation. Contents of this array are copied to protect against
                 *  subsequent modification.
                 * @exception NullPointerException if {#code field},
                 *  {@code a}, or {@code b} is null.
                 * @exception IllegalArgumentException if {#code a}
                 *  or {@code b} is not null and not in {@code field}.
                 */
                // @ts-ignore
                constructor(field: java.security.spec.ECField, a: java.math.BigInteger, b: java.math.BigInteger, seed: number /*byte*/[])
                /**
                 * Returns the finite field {@code field} that this
                 * elliptic curve is over.
                 * @return the field {#code field} that this curve
                 *  is over.
                 */
                // @ts-ignore
                public getField(): java.security.spec.ECField
                /**
                 * Returns the first coefficient {@code a} of the
                 * elliptic curve.
                 * @return the first coefficient {#code a}.
                 */
                // @ts-ignore
                public getA(): java.math.BigInteger
                /**
                 * Returns the second coefficient {@code b} of the
                 * elliptic curve.
                 * @return the second coefficient {#code b}.
                 */
                // @ts-ignore
                public getB(): java.math.BigInteger
                /**
                 * Returns the seeding bytes {@code seed} used
                 * during curve generation. May be null if not specified.
                 * @return the seeding bytes {#code seed}. A new
                 *  array is returned each time this method is called.
                 */
                // @ts-ignore
                public getSeed(): number /*byte*/[]
                /**
                 * Compares this elliptic curve for equality with the
                 * specified object.
                 * @param obj the object to be compared.
                 * @return true if {#code obj} is an instance of
                 *  EllipticCurve and the field, A, and B match, false otherwise.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns a hash code value for this elliptic curve.
                 * @return a hash code value computed from the hash codes of the field, A,
                 *  and B, as follows:
                 *  <pre>{#code
                 *      (field.hashCode() << 6) + (a.hashCode() << 4) + (b.hashCode() << 2)
                 *  }</pre>
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
