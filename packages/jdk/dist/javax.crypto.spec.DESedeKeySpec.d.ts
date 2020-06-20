declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies a DES-EDE ("triple-DES") key.
             * @author Jan Luehe
             * @since 1.4
             */
            // @ts-ignore
            class DESedeKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a DESedeKeySpec object using the first 24 bytes in
                 * <code>key</code> as the key material for the DES-EDE key.
                 * <p> The bytes that constitute the DES-EDE key are those between
                 * <code>key[0]</code> and <code>key[23]</code> inclusive
                 * @param key the buffer with the DES-EDE key material. The first
                 *  24 bytes of the buffer are copied to protect against subsequent
                 *  modification.
                 * @exception NullPointerException if <code>key</code> is null.
                 * @exception InvalidKeyException if the given key material is shorter
                 *  than 24 bytes.
                 */
                // @ts-ignore
                constructor(key: number /*byte*/[])
                /**
                 * Creates a DESedeKeySpec object using the first 24 bytes in
                 * <code>key</code>, beginning at <code>offset</code> inclusive,
                 * as the key material for the DES-EDE key.
                 * <p> The bytes that constitute the DES-EDE key are those between
                 * <code>key[offset]</code> and <code>key[offset+23]</code> inclusive.
                 * @param key the buffer with the DES-EDE key material. The first
                 *  24 bytes of the buffer beginning at <code>offset</code> inclusive
                 *  are copied to protect against subsequent modification.
                 * @param offset the offset in <code>key</code>, where the DES-EDE key
                 *  material starts.
                 * @exception NullPointerException if <code>key</code> is null.
                 * @exception InvalidKeyException if the given key material, starting at
                 *  <code>offset</code> inclusive, is shorter than 24 bytes
                 */
                // @ts-ignore
                constructor(key: number /*byte*/[], offset: number /*int*/)
                /**
                 * The constant which defines the length of a DESede key in bytes.
                 */
                // @ts-ignore
                readonly DES_EDE_KEY_LEN: number /*int*/
                /**
                 * Returns the DES-EDE key.
                 * @return the DES-EDE key. Returns a new array
                 *  each time this method is called.
                 */
                // @ts-ignore
                getKey(): byte[]
                /**
                 * Checks if the given DES-EDE key, starting at <code>offset</code>
                 * inclusive, is parity-adjusted.
                 * @param key    a byte array which holds the key value
                 * @param offset the offset into the byte array
                 * @return true if the given DES-EDE key is parity-adjusted, false
                 *  otherwise
                 * @exception NullPointerException if <code>key</code> is null.
                 * @exception InvalidKeyException if the given key material, starting at
                 *  <code>offset</code> inclusive, is shorter than 24 bytes
                 */
                // @ts-ignore
                isParityAdjusted(key: number /*byte*/[], offset: number /*int*/): boolean
            }
        }
    }
}
