declare namespace java {
    namespace util {
        namespace zip {
            /**
             * A class that can be used to compute the CRC-32 of a data stream.
             * <p> Passing a {@code null} argument to a method in this class will cause
             * a {@link NullPointerException} to be thrown.
             * @see Checksum
             * @author David Connelly
             */
            // @ts-ignore
            class CRC32 extends java.lang.Object implements java.util.zip.Checksum {
                /**
                 * Creates a new CRC32 object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Updates the CRC-32 checksum with the specified byte (the low
                 * eight bits of the argument b).
                 * @param b the byte to update the checksum with
                 */
                // @ts-ignore
                public update(b: number /*int*/): void
                /**
                 * Updates the CRC-32 checksum with the specified array of bytes.
                 * @throws ArrayIndexOutOfBoundsException
                 *           if {#code off} is negative, or {@code len} is negative,
                 *           or {@code off+len} is greater than the length of the
                 *           array {@code b}
                 */
                // @ts-ignore
                public update(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Updates the CRC-32 checksum with the specified array of bytes.
                 * @param b the array of bytes to update the checksum with
                 */
                // @ts-ignore
                public update(b: number /*byte*/[]): void
                /**
                 * Updates the checksum with the bytes from the specified buffer.
                 * The checksum is updated using
                 * buffer.{@link java.nio.Buffer#remaining() remaining()}
                 * bytes starting at
                 * buffer.{@link java.nio.Buffer#position() position()}
                 * Upon return, the buffer's position will
                 * be updated to its limit; its limit will not have been changed.
                 * @param buffer the ByteBuffer to update the checksum with
                 * @since 1.8
                 */
                // @ts-ignore
                public update(buffer: java.nio.ByteBuffer): void
                /**
                 * Resets CRC-32 to initial value.
                 */
                // @ts-ignore
                public reset(): void
                /**
                 * Returns CRC-32 value.
                 */
                // @ts-ignore
                public getValue(): number /*long*/
            }
        }
    }
}
