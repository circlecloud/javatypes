declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies a DES key.
             * @author Jan Luehe
             * @since 1.4
             */
            // @ts-ignore
            class DESKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a DESKeySpec object using the first 8 bytes in
                 * <code>key</code> as the key material for the DES key.
                 * <p> The bytes that constitute the DES key are those between
                 * <code>key[0]</code> and <code>key[7]</code> inclusive.
                 * @param key the buffer with the DES key material. The first 8 bytes
                 *  of the buffer are copied to protect against subsequent modification.
                 * @exception NullPointerException if the given key material is
                 *  <code>null</code>
                 * @exception InvalidKeyException if the given key material is shorter
                 *  than 8 bytes.
                 */
                // @ts-ignore
                constructor(key: number /*byte*/[])
                /**
                 * Creates a DESKeySpec object using the first 8 bytes in
                 * <code>key</code>, beginning at <code>offset</code> inclusive,
                 * as the key material for the DES key.
                 * <p> The bytes that constitute the DES key are those between
                 * <code>key[offset]</code> and <code>key[offset+7]</code> inclusive.
                 * @param key the buffer with the DES key material. The first 8 bytes
                 *  of the buffer beginning at <code>offset</code> inclusive are copied
                 *  to protect against subsequent modification.
                 * @param offset the offset in <code>key</code>, where the DES key
                 *  material starts.
                 * @exception NullPointerException if the given key material is
                 *  <code>null</code>
                 * @exception InvalidKeyException if the given key material, starting at
                 *  <code>offset</code> inclusive, is shorter than 8 bytes.
                 */
                // @ts-ignore
                constructor(key: number /*byte*/[], offset: number /*int*/)
                /**
                 * The constant which defines the length of a DES key in bytes.
                 */
                // @ts-ignore
                readonly DES_KEY_LEN: number /*int*/
                /**
                 * Returns the DES key material.
                 * @return the DES key material. Returns a new array
                 *  each time this method is called.
                 */
                // @ts-ignore
                getKey(): byte[]
                /**
                 * Checks if the given DES key material, starting at <code>offset</code>
                 * inclusive, is parity-adjusted.
                 * @param key the buffer with the DES key material.
                 * @param offset the offset in <code>key</code>, where the DES key
                 *  material starts.
                 * @return true if the given DES key material is parity-adjusted, false
                 *  otherwise.
                 * @exception InvalidKeyException if the given key material is
                 *  <code>null</code>, or starting at <code>offset</code> inclusive, is
                 *  shorter than 8 bytes.
                 */
                // @ts-ignore
                isParityAdjusted(key: number /*byte*/[], offset: number /*int*/): boolean
                /**
                 * Checks if the given DES key material is weak or semi-weak.
                 * @param key the buffer with the DES key material.
                 * @param offset the offset in <code>key</code>, where the DES key
                 *  material starts.
                 * @return true if the given DES key material is weak or semi-weak, false
                 *  otherwise.
                 * @exception InvalidKeyException if the given key material is
                 *  <code>null</code>, or starting at <code>offset</code> inclusive, is
                 *  shorter than 8 bytes.
                 */
                // @ts-ignore
                isWeak(key: number /*byte*/[], offset: number /*int*/): boolean
            }
        }
    }
}
