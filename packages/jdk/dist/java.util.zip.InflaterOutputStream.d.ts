declare namespace java {
    namespace util {
        namespace zip {
            /**
             * Implements an output stream filter for uncompressing data stored in the
             * "deflate" compression format.
             * @since 1.6
             * @author David R Tribble (david#tribble.com)
             * @see InflaterInputStream
             * @see DeflaterInputStream
             * @see DeflaterOutputStream
             */
            // @ts-ignore
            class InflaterOutputStream extends java.io.FilterOutputStream {
                /**
                 * Creates a new output stream with a default decompressor and buffer
                 * size.
                 * @param out output stream to write the uncompressed data to
                 * @throws NullPointerException if {#code out} is null
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Creates a new output stream with the specified decompressor and a
                 * default buffer size.
                 * @param out output stream to write the uncompressed data to
                 * @param infl decompressor ("inflater") for this stream
                 * @throws NullPointerException if {#code out} or {@code infl} is null
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, infl: java.util.zip.Inflater)
                /**
                 * Creates a new output stream with the specified decompressor and
                 * buffer size.
                 * @param out output stream to write the uncompressed data to
                 * @param infl decompressor ("inflater") for this stream
                 * @param bufLen decompression buffer size
                 * @throws IllegalArgumentException if {#code bufLen <= 0}
                 * @throws NullPointerException if {#code out} or {@code infl} is null
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, infl: java.util.zip.Inflater, bufLen: number /*int*/)
                /**
                 * Decompressor for this stream.
                 */
                // @ts-ignore
                readonly inf: java.util.zip.Inflater
                /**
                 * Output buffer for writing uncompressed data.
                 */
                // @ts-ignore
                readonly buf: number /*byte*/[]
                /**
                 * Writes any remaining uncompressed data to the output stream and closes
                 * the underlying output stream.
                 * @throws IOException if an I/O error occurs
                 */
                // @ts-ignore
                close(): void
                /**
                 * Flushes this output stream, forcing any pending buffered output bytes to be
                 * written.
                 * @throws IOException if an I/O error occurs or this stream is already
                 *  closed
                 */
                // @ts-ignore
                flush(): void
                /**
                 * Finishes writing uncompressed data to the output stream without closing
                 * the underlying stream.  Use this method when applying multiple filters in
                 * succession to the same output stream.
                 * @throws IOException if an I/O error occurs or this stream is already
                 *  closed
                 */
                // @ts-ignore
                finish(): void
                /**
                 * Writes a byte to the uncompressed output stream.
                 * @param b a single byte of compressed data to decompress and write to
                 *  the output stream
                 * @throws IOException if an I/O error occurs or this stream is already
                 *  closed
                 * @throws ZipException if a compression (ZIP) format error occurs
                 */
                // @ts-ignore
                write(b: number /*int*/): void
                /**
                 * Writes an array of bytes to the uncompressed output stream.
                 * @param b buffer containing compressed data to decompress and write to
                 *  the output stream
                 * @param off starting offset of the compressed data within {#code b}
                 * @param len number of bytes to decompress from {#code b}
                 * @throws IndexOutOfBoundsException if {#code off < 0}, or if
                 *  {@code len < 0}, or if {@code len > b.length - off}
                 * @throws IOException if an I/O error occurs or this stream is already
                 *  closed
                 * @throws NullPointerException if {#code b} is null
                 * @throws ZipException if a compression (ZIP) format error occurs
                 */
                // @ts-ignore
                write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            }
        }
    }
}
