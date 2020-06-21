declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies the parameters used with the
             * <a href="http://www.ietf.org/rfc/rfc2268.txt"><i>RC2</i></a>
             * algorithm.
             * <p> The parameters consist of an effective key size and optionally
             * an 8-byte initialization vector (IV) (only in feedback mode).
             * <p> This class can be used to initialize a <code>Cipher</code> object that
             * implements the <i>RC2</i> algorithm.
             * @author Jan Luehe
             * @since 1.4
             */
            // @ts-ignore
            class RC2ParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Constructs a parameter set for RC2 from the given effective key size
                 * (in bits).
                 * @param effectiveKeyBits the effective key size in bits.
                 */
                // @ts-ignore
                constructor(effectiveKeyBits: number /*int*/)
                /**
                 * Constructs a parameter set for RC2 from the given effective key size
                 * (in bits) and an 8-byte IV.
                 * <p> The bytes that constitute the IV are those between
                 * <code>iv[0]</code> and <code>iv[7]</code> inclusive.
                 * @param effectiveKeyBits the effective key size in bits.
                 * @param iv the buffer with the 8-byte IV. The first 8 bytes of
                 *  the buffer are copied to protect against subsequent modification.
                 * @exception IllegalArgumentException if <code>iv</code> is null.
                 */
                // @ts-ignore
                constructor(effectiveKeyBits: number /*int*/, iv: number /*byte*/[])
                /**
                 * Constructs a parameter set for RC2 from the given effective key size
                 * (in bits) and IV.
                 * <p> The IV is taken from <code>iv</code>, starting at
                 * <code>offset</code> inclusive.
                 * The bytes that constitute the IV are those between
                 * <code>iv[offset]</code> and <code>iv[offset+7]</code> inclusive.
                 * @param effectiveKeyBits the effective key size in bits.
                 * @param iv the buffer with the IV. The first 8 bytes
                 *  of the buffer beginning at <code>offset</code> inclusive
                 *  are copied to protect against subsequent modification.
                 * @param offset the offset in <code>iv</code> where the 8-byte IV
                 *  starts.
                 * @exception IllegalArgumentException if <code>iv</code> is null.
                 */
                // @ts-ignore
                constructor(effectiveKeyBits: number /*int*/, iv: number /*byte*/[], offset: number /*int*/)
                /**
                 * Returns the effective key size in bits.
                 * @return the effective key size in bits.
                 */
                // @ts-ignore
                public getEffectiveKeyBits(): number /*int*/
                /**
                 * Returns the IV or null if this parameter set does not contain an IV.
                 * @return the IV or null if this parameter set does not contain an IV.
                 *  Returns a new array each time this method is called.
                 */
                // @ts-ignore
                public getIV(): number /*byte*/[]
                /**
                 * Tests for equality between the specified object and this
                 * object. Two RC2ParameterSpec objects are considered equal if their
                 * effective key sizes and IVs are equal.
                 * (Two IV references are considered equal if both are <tt>null</tt>.)
                 * @param obj the object to test for equality with this object.
                 * @return true if the objects are considered equal, false if
                 *  <code>obj</code> is null or otherwise.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Calculates a hash code value for the object.
                 * Objects that are equal will also have the same hashcode.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
