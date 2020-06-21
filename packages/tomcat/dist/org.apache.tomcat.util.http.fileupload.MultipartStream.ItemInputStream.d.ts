declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace MultipartStream {
                            /**
                             * An {@link InputStream} for reading an items contents.
                             */
                            // @ts-ignore
                            class ItemInputStream extends java.io.InputStream implements org.apache.tomcat.util.http.fileupload.util.Closeable {
                                /**
                                 * Returns the number of bytes, which have been read
                                 * by the stream.
                                 * @return Number of bytes, which have been read so far.
                                 */
                                // @ts-ignore
                                public getBytesRead(): number /*long*/
                                /**
                                 * Returns the number of bytes, which are currently
                                 * available, without blocking.
                                 * @throws IOException An I/O error occurs.
                                 * @return Number of bytes in the buffer.
                                 */
                                // @ts-ignore
                                public available(): number /*int*/
                                /**
                                 * Returns the next byte in the stream.
                                 * @return The next byte in the stream, as a non-negative
                                 *    integer, or -1 for EOF.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public read(): number /*int*/
                                /**
                                 * Reads bytes into the given buffer.
                                 * @param b The destination buffer, where to write to.
                                 * @param off Offset of the first byte in the buffer.
                                 * @param len Maximum number of bytes to read.
                                 * @return Number of bytes, which have been actually read,
                                 *    or -1 for EOF.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                                /**
                                 * Closes the input stream.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public close(): void
                                /**
                                 * Closes the input stream.
                                 * @param pCloseUnderlying Whether to close the underlying stream
                                 *    (hard close)
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public close(pCloseUnderlying: boolean): void
                                /**
                                 * Skips the given number of bytes.
                                 * @param bytes Number of bytes to skip.
                                 * @return The number of bytes, which have actually been
                                 *    skipped.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public skip(bytes: number /*long*/): number /*long*/
                                /**
                                 * Returns, whether the stream is closed.
                                 * @return True, if the stream is closed, otherwise false.
                                 */
                                // @ts-ignore
                                public isClosed(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
