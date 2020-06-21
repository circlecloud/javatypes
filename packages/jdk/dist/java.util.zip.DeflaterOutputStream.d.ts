declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class implements an output stream filter for compressing data in
             * the "deflate" compression format. It is also used as the basis for other
             * types of compression filters, such as GZIPOutputStream.
             * @see Deflater
             * @author David Connelly
             */
            // @ts-ignore
            class DeflaterOutputStream extends java.io.FilterOutputStream {
                /**
                 * Creates a new output stream with the specified compressor,
                 * buffer size and flush mode.
                 * @param out the output stream
                 * @param def the compressor ("deflater")
                 * @param size the output buffer size
                 * @param syncFlush
                 *         if {#code true} the {@link #flush()} method of this
                 *         instance flushes the compressor with flush mode
                 *         {@link Deflater#SYNC_FLUSH} before flushing the output
                 *         stream, otherwise only flushes the output stream
                 * @throws IllegalArgumentException if {#code size <= 0}
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater, size: number /*int*/, syncFlush: boolean)
                /**
                 * Creates a new output stream with the specified compressor and
                 * buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 4-argument constructor DeflaterOutputStream(out, def, size, false).
                 * @param out the output stream
                 * @param def the compressor ("deflater")
                 * @param size the output buffer size
                 * @exception IllegalArgumentException if {#code size <= 0}
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater, size: number /*int*/)
                /**
                 * Creates a new output stream with the specified compressor, flush
                 * mode and a default buffer size.
                 * @param out the output stream
                 * @param def the compressor ("deflater")
                 * @param syncFlush
                 *         if {#code true} the {@link #flush()} method of this
                 *         instance flushes the compressor with flush mode
                 *         {@link Deflater#SYNC_FLUSH} before flushing the output
                 *         stream, otherwise only flushes the output stream
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater, syncFlush: boolean)
                /**
                 * Creates a new output stream with the specified compressor and
                 * a default buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 3-argument constructor DeflaterOutputStream(out, def, false).
                 * @param out the output stream
                 * @param def the compressor ("deflater")
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater)
                /**
                 * Creates a new output stream with a default compressor, a default
                 * buffer size and the specified flush mode.
                 * @param out the output stream
                 * @param syncFlush
                 *         if {#code true} the {@link #flush()} method of this
                 *         instance flushes the compressor with flush mode
                 *         {@link Deflater#SYNC_FLUSH} before flushing the output
                 *         stream, otherwise only flushes the output stream
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, syncFlush: boolean)
                /**
                 * Creates a new output stream with a default compressor and buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 2-argument constructor DeflaterOutputStream(out, false).
                 * @param out the output stream
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Compressor for this stream.
                 */
                // @ts-ignore
                def: java.util.zip.Deflater
                /**
                 * Output buffer for writing compressed data.
                 */
                // @ts-ignore
                buf: number /*byte*/[]
                /**
                 * Writes a byte to the compressed output stream. This method will
                 * block until the byte can be written.
                 * @param b the byte to be written
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public write(b: number /*int*/): void
                /**
                 * Writes an array of bytes to the compressed output stream. This
                 * method will block until all the bytes are written.
                 * @param b the data to be written
                 * @param off the start offset of the data
                 * @param len the length of the data
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Finishes writing compressed data to the output stream without closing
                 * the underlying stream. Use this method when applying multiple filters
                 * in succession to the same output stream.
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public finish(): void
                /**
                 * Writes remaining compressed data to the output stream and closes the
                 * underlying stream.
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Writes next block of compressed data to the output stream.
                 * @throws IOException if an I/O error has occurred
                 */
                // @ts-ignore
                deflate(): void
                /**
                 * Flushes the compressed output stream.
                 * If {@link #DeflaterOutputStream(OutputStream, Deflater, int, boolean)
                 * syncFlush} is {@code true} when this compressed output stream is
                 * constructed, this method first flushes the underlying {@code compressor}
                 * with the flush mode {@link Deflater#SYNC_FLUSH} to force
                 * all pending data to be flushed out to the output stream and then
                 * flushes the output stream. Otherwise this method only flushes the
                 * output stream without flushing the {@code compressor}.
                 * @throws IOException if an I/O error has occurred
                 * @since 1.7
                 */
                // @ts-ignore
                public flush(): void
            }
        }
    }
}
