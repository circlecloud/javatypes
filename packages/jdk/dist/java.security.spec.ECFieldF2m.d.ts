declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class defines an elliptic curve (EC)
             * characteristic 2 finite field.
             * @see ECField
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECFieldF2m extends java.lang.Object implements java.security.spec.ECField {
                /**
                 * Creates an elliptic curve characteristic 2 finite
                 * field which has 2^{@code m} elements with normal basis.
                 * @param m with 2^{#code m} being the number of elements.
                 * @exception IllegalArgumentException if {#code m}
                 *  is not positive.
                 */
                // @ts-ignore
                constructor(m: number /*int*/)
                /**
                 * Creates an elliptic curve characteristic 2 finite
                 * field which has 2^{@code m} elements with
                 * polynomial basis.
                 * The reduction polynomial for this field is based
                 * on {@code rp} whose i-th bit corresponds to
                 * the i-th coefficient of the reduction polynomial.<p>
                 * Note: A valid reduction polynomial is either a
                 * trinomial (X^{@code m} + X^{@code k} + 1
                 * with {@code m} &gt; {@code k} &gt;= 1) or a
                 * pentanomial (X^{@code m} + X^{@code k3}
                 * + X^{@code k2} + X^{@code k1} + 1 with
                 * {@code m} &gt; {@code k3} &gt; {@code k2}
                 * &gt; {@code k1} &gt;= 1).
                 * @param m with 2^{#code m} being the number of elements.
                 * @param rp the BigInteger whose i-th bit corresponds to
                 *  the i-th coefficient of the reduction polynomial.
                 * @exception NullPointerException if {#code rp} is null.
                 * @exception IllegalArgumentException if {#code m}
                 *  is not positive, or {@code rp} does not represent
                 *  a valid reduction polynomial.
                 */
                // @ts-ignore
                constructor(m: number /*int*/, rp: java.math.BigInteger)
                /**
                 * Creates an elliptic curve characteristic 2 finite
                 * field which has 2^{@code m} elements with
                 * polynomial basis. The reduction polynomial for this
                 * field is based on {@code ks} whose content
                 * contains the order of the middle term(s) of the
                 * reduction polynomial.
                 * Note: A valid reduction polynomial is either a
                 * trinomial (X^{@code m} + X^{@code k} + 1
                 * with {@code m} &gt; {@code k} &gt;= 1) or a
                 * pentanomial (X^{@code m} + X^{@code k3}
                 * + X^{@code k2} + X^{@code k1} + 1 with
                 * {@code m} &gt; {@code k3} &gt; {@code k2}
                 * &gt; {@code k1} &gt;= 1), so {@code ks} should
                 * have length 1 or 3.
                 * @param m with 2^{#code m} being the number of elements.
                 * @param ks the order of the middle term(s) of the
                 *  reduction polynomial. Contents of this array are copied
                 *  to protect against subsequent modification.
                 * @exception NullPointerException if {#code ks} is null.
                 * @exception IllegalArgumentException if{#code m}
                 *  is not positive, or the length of {@code ks}
                 *  is neither 1 nor 3, or values in {@code ks}
                 *  are not between {@code m}-1 and 1 (inclusive)
                 *  and in descending order.
                 */
                // @ts-ignore
                constructor(m: number /*int*/, ks: number /*int*/[])
                /**
                 * Returns the field size in bits which is {@code m}
                 * for this characteristic 2 finite field.
                 * @return the field size in bits.
                 */
                // @ts-ignore
                getFieldSize(): int
                /**
                 * Returns the value {@code m} of this characteristic
                 * 2 finite field.
                 * @return {#code m} with 2^{@code m} being the
                 *  number of elements.
                 */
                // @ts-ignore
                getM(): int
                /**
                 * Returns a BigInteger whose i-th bit corresponds to the
                 * i-th coefficient of the reduction polynomial for polynomial
                 * basis or null for normal basis.
                 * @return a BigInteger whose i-th bit corresponds to the
                 *  i-th coefficient of the reduction polynomial for polynomial
                 *  basis or null for normal basis.
                 */
                // @ts-ignore
                getReductionPolynomial(): java.math.BigInteger
                /**
                 * Returns an integer array which contains the order of the
                 * middle term(s) of the reduction polynomial for polynomial
                 * basis or null for normal basis.
                 * @return an integer array which contains the order of the
                 *  middle term(s) of the reduction polynomial for polynomial
                 *  basis or null for normal basis. A new array is returned
                 *  each time this method is called.
                 */
                // @ts-ignore
                getMidTermsOfReductionPolynomial(): int[]
                /**
                 * Compares this finite field for equality with the
                 * specified object.
                 * @param obj the object to be compared.
                 * @return true if {#code obj} is an instance
                 *  of ECFieldF2m and both {@code m} and the reduction
                 *  polynomial match, false otherwise.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hash code value for this characteristic 2
                 * finite field.
                 * @return a hash code value.
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
