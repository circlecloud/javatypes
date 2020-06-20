declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class defines an elliptic curve (EC) prime
             * finite field.
             * @see ECField
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECFieldFp extends java.lang.Object implements java.security.spec.ECField {
                /**
                 * Creates an elliptic curve prime finite field
                 * with the specified prime {@code p}.
                 * @param p the prime.
                 * @exception NullPointerException if {#code p} is null.
                 * @exception IllegalArgumentException if {#code p}
                 *  is not positive.
                 */
                // @ts-ignore
                constructor(p: java.math.BigInteger)
                /**
                 * Returns the field size in bits which is size of prime p
                 * for this prime finite field.
                 * @return the field size in bits.
                 */
                // @ts-ignore
                getFieldSize(): int
                /**
                 * Returns the prime {@code p} of this prime finite field.
                 * @return the prime.
                 */
                // @ts-ignore
                getP(): java.math.BigInteger
                /**
                 * Compares this prime finite field for equality with the
                 * specified object.
                 * @param obj the object to be compared.
                 * @return true if {#code obj} is an instance
                 *  of ECFieldFp and the prime value match, false otherwise.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hash code value for this prime finite field.
                 * @return a hash code value.
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
