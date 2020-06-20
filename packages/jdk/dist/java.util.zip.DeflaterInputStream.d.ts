declare namespace java {
    namespace util {
        namespace zip {
            /**
             * Implements an input stream filter for compressing data in the "deflate"
             * compression format.
             * @since 1.6
             * @author David R Tribble (david#tribble.com)
             * @see DeflaterOutputStream
             * @see InflaterOutputStream
             * @see InflaterInputStream
             */
            // @ts-ignore
            class DeflaterInputStream extends java.io.FilterInputStream {
                /**
                 * Creates a new input stream with a default compressor and buffer
                 * size.
                 * @param in input stream to read the uncompressed data to
                 * @throws NullPointerException if {#code in} is null
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                /**
                 * Creates a new input stream with the specified compressor and a
                 * default buffer size.
                 * @param in input stream to read the uncompressed data to
                 * @param defl compressor ("deflater") for this stream
                 * @throws NullPointerException if {#code in} or {@code defl} is null
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, defl: java.util.zip.Deflater)
                /**
                 * Creates a new input stream with the specified compressor and buffer
                 * size.
                 * @param in input stream to read the uncompressed data to
                 * @param defl compressor ("deflater") for this stream
                 * @param bufLen compression buffer size
                 * @throws IllegalArgumentException if {#code bufLen <= 0}
                 * @throws NullPointerException if {#code in} or {@code defl} is null
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, defl: java.util.zip.Deflater, bufLen: number /*int*/)
                /**
                 * Compressor for this stream.
                 */
                // @ts-ignore
                readonly def: java.util.zip.Deflater
                /**
                 * Input buffer for reading compressed data.
                 */
                // @ts-ignore
                readonly buf: number /*byte*/[]
                /**
                 * Closes this input stream and its underlying input stream, discarding
                 * any pending uncompressed data.
                 * @throws IOException if an I/O error occurs
                 */
                // @ts-ignore
                close(): void
                /**
                 * Reads a single byte of compressed data from the input stream.
                 * This method will block until some input can be read and compressed.
                 * @return a single byte of compressed data, or -1 if the end of the
                 *  uncompressed input stream is reached
                 * @throws IOException if an I/O error occurs or if this stream is
                 *  already closed
                 */
                // @ts-ignore
                read(): int
                /**
                 * Reads compressed data into a byte array.
                 * This method will block until some input can be read and compressed.
                 * @param b buffer into which the data is read
                 * @param off starting offset of the data within {#code b}
                 * @param len maximum number of compressed bytes to read into {#code b}
                 * @return the actual number of bytes read, or -1 if the end of the
                 *  uncompressed input stream is reached
                 * @throws IndexOutOfBoundsException  if {#code len > b.length - off}
                 * @throws IOException if an I/O error occurs or if this input stream is
                 *  already closed
                 */
                // @ts-ignore
                read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
                /**
                 * Skips over and discards data from the input stream.
                 * This method may block until the specified number of bytes are read and
                 * skipped. <em>Note:</em> While {@code n} is given as a {@code long},
                 * the maximum number of bytes which can be skipped is
                 * {@code Integer.MAX_VALUE}.
                 * @param n number of bytes to be skipped
                 * @return the actual number of bytes skipped
                 * @throws IOException if an I/O error occurs or if this stream is
                 *  already closed
                 */
                // @ts-ignore
                skip(n: number /*long*/): long
                /**
                 * Returns 0 after EOF has been reached, otherwise always return 1.
                 * <p>
                 * Programs should not count on this method to return the actual number
                 * of bytes that could be read without blocking
                 * @return zero after the end of the underlying input stream has been
                 *  reached, otherwise always returns 1
                 * @throws IOException if an I/O error occurs or if this stream is
                 *  already closed
                 */
                // @ts-ignore
                available(): int
                /**
                 * Always returns {@code false} because this input stream does not support
                 * the {@link #mark mark()} and {@link #reset reset()} methods.
                 * @return false, always
                 */
                // @ts-ignore
                markSupported(): boolean
                /**
                 * <i>This operation is not supported</i>.
                 * @param limit maximum bytes that can be read before invalidating the position marker
                 */
                // @ts-ignore
                mark(limit: number /*int*/): void
                /**
                 * <i>This operation is not supported</i>.
                 * @throws IOException always thrown
                 */
                // @ts-ignore
                reset(): void
            }
        }
    }
}
