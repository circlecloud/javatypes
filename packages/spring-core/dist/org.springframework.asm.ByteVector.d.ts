declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A dynamically extensible vector of bytes. This class is roughly equivalent to a DataOutputStream
             * on top of a ByteArrayOutputStream, but is more efficient.
             * @author Eric Bruneton
             */
            // @ts-ignore
            class ByteVector extends java.lang.Object {
                /**
                 * Constructs a new {@link ByteVector} with a default initial capacity.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new {@link ByteVector} with the given initial capacity.
                 * @param initialCapacity the initial capacity of the byte vector to be constructed.
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Puts a byte into this byte vector. The byte vector is automatically enlarged if necessary.
                 * @param byteValue a byte.
                 * @return this byte vector.
                 */
                // @ts-ignore
                putByte(byteValue: number /*int*/): org.springframework.asm.ByteVector
                /**
                 * Puts a short into this byte vector. The byte vector is automatically enlarged if necessary.
                 * @param shortValue a short.
                 * @return this byte vector.
                 */
                // @ts-ignore
                putShort(shortValue: number /*int*/): org.springframework.asm.ByteVector
                /**
                 * Puts an int into this byte vector. The byte vector is automatically enlarged if necessary.
                 * @param intValue an int.
                 * @return this byte vector.
                 */
                // @ts-ignore
                putInt(intValue: number /*int*/): org.springframework.asm.ByteVector
                /**
                 * Puts a long into this byte vector. The byte vector is automatically enlarged if necessary.
                 * @param longValue a long.
                 * @return this byte vector.
                 */
                // @ts-ignore
                putLong(longValue: number /*long*/): org.springframework.asm.ByteVector
                /**
                 * Puts an UTF8 string into this byte vector. The byte vector is automatically enlarged if
                 * necessary.
                 * @param stringValue a String whose UTF8 encoded length must be less than 65536.
                 * @return this byte vector.
                 */
                // @ts-ignore
                putUTF8(stringValue: string): org.springframework.asm.ByteVector
                /**
                 * Puts an array of bytes into this byte vector. The byte vector is automatically enlarged if
                 * necessary.
                 * @param byteArrayValue an array of bytes. May be {#literal null} to put {@code byteLength} null
                 *      bytes into this byte vector.
                 * @param byteOffset index of the first byte of byteArrayValue that must be copied.
                 * @param byteLength number of bytes of byteArrayValue that must be copied.
                 * @return this byte vector.
                 */
                // @ts-ignore
                putByteArray(byteArrayValue: number /*byte*/[], byteOffset: number /*int*/, byteLength: number /*int*/): org.springframework.asm.ByteVector
            }
        }
    }
}
