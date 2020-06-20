declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class implements a stream filter for writing compressed data in
             * the GZIP file format.
             * @author David Connelly
             */
            // @ts-ignore
            class GZIPOutputStream extends java.util.zip.DeflaterOutputStream {
                /**
                 * Creates a new output stream with the specified buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 3-argument constructor GZIPOutputStream(out, size, false).
                 * @param out the output stream
                 * @param size the output buffer size
                 * @exception IOException If an I/O error has occurred.
                 * @exception IllegalArgumentException if {#code size <= 0}
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, size: number /*int*/)
                /**
                 * Creates a new output stream with the specified buffer size and
                 * flush mode.
                 * @param out the output stream
                 * @param size the output buffer size
                 * @param syncFlush
                 *         if {#code true} invocation of the inherited
                 *         {@link DeflaterOutputStream#flush() flush()} method of
                 *         this instance flushes the compressor with flush mode
                 *         {@link Deflater#SYNC_FLUSH} before flushing the output
                 *         stream, otherwise only flushes the output stream
                 * @exception IOException If an I/O error has occurred.
                 * @exception IllegalArgumentException if {#code size <= 0}
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, size: number /*int*/, syncFlush: boolean)
                /**
                 * Creates a new output stream with a default buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 2-argument constructor GZIPOutputStream(out, false).
                 * @param out the output stream
                 * @exception IOException If an I/O error has occurred.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Creates a new output stream with a default buffer size and
                 * the specified flush mode.
                 * @param out the output stream
                 * @param syncFlush
                 *         if {#code true} invocation of the inherited
                 *         {@link DeflaterOutputStream#flush() flush()} method of
                 *         this instance flushes the compressor with flush mode
                 *         {@link Deflater#SYNC_FLUSH} before flushing the output
                 *         stream, otherwise only flushes the output stream
                 * @exception IOException If an I/O error has occurred.
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, syncFlush: boolean)
                /**
                 * CRC-32 of uncompressed data.
                 */
                // @ts-ignore
                crc: java.util.zip.CRC32
                /**
                 * Writes array of bytes to the compressed output stream. This method
                 * will block until all the bytes are written.
                 * @param buf the data to be written
                 * @param off the start offset of the data
                 * @param len the length of the data
                 * @exception IOException If an I/O error has occurred.
                 */
                // @ts-ignore
                write(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Finishes writing compressed data to the output stream without closing
                 * the underlying stream. Use this method when applying multiple filters
                 * in succession to the same output stream.
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                finish(): void
            }
        }
    }
}
