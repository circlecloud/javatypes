declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class implements an output stream filter for writing files in the
             * ZIP file format. Includes support for both compressed and uncompressed
             * entries.
             * @author David Connelly
             */
            // @ts-ignore
            class ZipOutputStream extends java.util.zip.DeflaterOutputStream implements java.util.zip.ZipConstants {
                /**
                 * Creates a new ZIP output stream.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used
                 * to encode the entry names and comments.
                 * @param out the actual output stream
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Creates a new ZIP output stream.
                 * @param out the actual output stream
                 * @param charset the {#linkplain java.nio.charset.Charset charset}
                 *                 to be used to encode the entry names and comments
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, charset: java.nio.charset.Charset)
                /**
                 * Compression method for uncompressed (STORED) entries.
                 */
                // @ts-ignore
                readonly STORED: number /*int*/
                /**
                 * Compression method for compressed (DEFLATED) entries.
                 */
                // @ts-ignore
                readonly DEFLATED: number /*int*/
                /**
                 * Sets the ZIP file comment.
                 * @param comment the comment string
                 * @exception IllegalArgumentException if the length of the specified
                 *             ZIP file comment is greater than 0xFFFF bytes
                 */
                // @ts-ignore
                setComment(comment: string): void
                /**
                 * Sets the default compression method for subsequent entries. This
                 * default will be used whenever the compression method is not specified
                 * for an individual ZIP file entry, and is initially set to DEFLATED.
                 * @param method the default compression method
                 * @exception IllegalArgumentException if the specified compression method
                 *             is invalid
                 */
                // @ts-ignore
                setMethod(method: number /*int*/): void
                /**
                 * Sets the compression level for subsequent entries which are DEFLATED.
                 * The default setting is DEFAULT_COMPRESSION.
                 * @param level the compression level (0-9)
                 * @exception IllegalArgumentException if the compression level is invalid
                 */
                // @ts-ignore
                setLevel(level: number /*int*/): void
                /**
                 * Begins writing a new ZIP file entry and positions the stream to the
                 * start of the entry data. Closes the current entry if still active.
                 * The default compression method will be used if no compression method
                 * was specified for the entry, and the current time will be used if
                 * the entry has no set modification time.
                 * @param e the ZIP entry to be written
                 * @exception ZipException if a ZIP format error has occurred
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                putNextEntry(e: java.util.zip.ZipEntry): void
                /**
                 * Closes the current ZIP entry and positions the stream for writing
                 * the next entry.
                 * @exception ZipException if a ZIP format error has occurred
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                closeEntry(): void
                /**
                 * Writes an array of bytes to the current ZIP entry data. This method
                 * will block until all the bytes are written.
                 * @param b the data to be written
                 * @param off the start offset in the data
                 * @param len the number of bytes that are written
                 * @exception ZipException if a ZIP file error has occurred
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Finishes writing the contents of the ZIP output stream without closing
                 * the underlying stream. Use this method when applying multiple filters
                 * in succession to the same output stream.
                 * @exception ZipException if a ZIP file error has occurred
                 * @exception IOException if an I/O exception has occurred
                 */
                // @ts-ignore
                finish(): void
                /**
                 * Closes the ZIP output stream as well as the stream being filtered.
                 * @exception ZipException if a ZIP file error has occurred
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                close(): void
            }
        }
    }
}
