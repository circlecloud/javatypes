declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class implements a stream filter for reading compressed data in
             * the GZIP file format.
             * @see InflaterInputStream
             * @author David Connelly
             */
            // @ts-ignore
            class GZIPInputStream extends java.util.zip.InflaterInputStream {
                /**
                 * Creates a new input stream with the specified buffer size.
                 * @param in the input stream
                 * @param size the input buffer size
                 * @exception ZipException if a GZIP format error has occurred or the
                 *                          compression method used is unsupported
                 * @exception IOException if an I/O error has occurred
                 * @exception IllegalArgumentException if {#code size <= 0}
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, size: number /*int*/)
                /**
                 * Creates a new input stream with a default buffer size.
                 * @param in the input stream
                 * @exception ZipException if a GZIP format error has occurred or the
                 *                          compression method used is unsupported
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                /**
                 * CRC-32 for uncompressed data.
                 */
                // @ts-ignore
                crc: java.util.zip.CRC32
                /**
                 * Indicates end of input stream.
                 */
                // @ts-ignore
                eos: boolean
                /**
                 * GZIP header magic number.
                 */
                // @ts-ignore
                public static readonly GZIP_MAGIC: number /*int*/
                /**
                 * Reads uncompressed data into an array of bytes. If <code>len</code> is not
                 * zero, the method will block until some input can be decompressed; otherwise,
                 * no bytes are read and <code>0</code> is returned.
                 * @param buf the buffer into which the data is read
                 * @param off the start offset in the destination array <code>b</code>
                 * @param len the maximum number of bytes read
                 * @return the actual number of bytes read, or -1 if the end of the
                 *           compressed input stream is reached
                 * @exception NullPointerException If <code>buf</code> is <code>null</code>.
                 * @exception IndexOutOfBoundsException If <code>off</code> is negative,
                 *  <code>len</code> is negative, or <code>len</code> is greater than
                 *  <code>buf.length - off</code>
                 * @exception ZipException if the compressed input data is corrupt.
                 * @exception IOException if an I/O error has occurred.
                 */
                // @ts-ignore
                public read(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                /**
                 * Closes this input stream and releases any system resources associated
                 * with the stream.
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public close(): void
            }
        }
    }
}
