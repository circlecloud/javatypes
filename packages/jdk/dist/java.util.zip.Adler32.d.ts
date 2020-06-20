declare namespace java {
    namespace util {
        namespace zip {
            /**
             * A class that can be used to compute the Adler-32 checksum of a data
             * stream. An Adler-32 checksum is almost as reliable as a CRC-32 but
             * can be computed much faster.
             * <p> Passing a {@code null} argument to a method in this class will cause
             * a {@link NullPointerException} to be thrown.
             * @see Checksum
             * @author David Connelly
             */
            // @ts-ignore
            class Adler32 extends java.lang.Object implements java.util.zip.Checksum {
                /**
                 * Creates a new Adler32 object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Updates the checksum with the specified byte (the low eight
                 * bits of the argument b).
                 * @param b the byte to update the checksum with
                 */
                // @ts-ignore
                update(b: number /*int*/): void
                /**
                 * Updates the checksum with the specified array of bytes.
                 * @throws ArrayIndexOutOfBoundsException
                 *           if {#code off} is negative, or {@code len} is negative,
                 *           or {@code off+len} is greater than the length of the
                 *           array {@code b}
                 */
                // @ts-ignore
                update(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Updates the checksum with the specified array of bytes.
                 * @param b the byte array to update the checksum with
                 */
                // @ts-ignore
                update(b: number /*byte*/[]): void
                /**
                 * Updates the checksum with the bytes from the specified buffer.
                 * The checksum is updated using
                 * buffer.{@link java.nio.Buffer#remaining() remaining()}
                 * bytes starting at
                 * buffer.{@link java.nio.Buffer#position() position()}
                 * Upon return, the buffer's position will be updated to its
                 * limit; its limit will not have been changed.
                 * @param buffer the ByteBuffer to update the checksum with
                 * @since 1.8
                 */
                // @ts-ignore
                update(buffer: java.nio.ByteBuffer): void
                /**
                 * Resets the checksum to initial value.
                 */
                // @ts-ignore
                reset(): void
                /**
                 * Returns the checksum value.
                 */
                // @ts-ignore
                getValue(): long
            }
        }
    }
}
