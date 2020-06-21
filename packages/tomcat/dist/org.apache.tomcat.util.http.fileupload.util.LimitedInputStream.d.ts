declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace util {
                            /**
                             * An input stream, which limits its data size. This stream is
                             * used, if the content length is unknown.
                             */
                            // @ts-ignore
                            abstract class LimitedInputStream extends java.io.FilterInputStream implements org.apache.tomcat.util.http.fileupload.util.Closeable {
                                /**
                                 * Creates a new instance.
                                 * @param inputStream The input stream, which shall be limited.
                                 * @param pSizeMax The limit; no more than this number of bytes
                                 *    shall be returned by the source stream.
                                 */
                                // @ts-ignore
                                constructor(inputStream: java.io.InputStream, pSizeMax: number /*long*/)
                                /**
                                 * Called to indicate, that the input streams limit has
                                 * been exceeded.
                                 * @param pSizeMax The input streams limit, in bytes.
                                 * @param pCount The actual number of bytes.
                                 * @throws IOException The called method is expected
                                 *    to raise an IOException.
                                 */
                                // @ts-ignore
                                abstract raiseError(pSizeMax: number /*long*/, pCount: number /*long*/): void
                                /**
                                 * Reads the next byte of data from this input stream. The value
                                 * byte is returned as an <code>int</code> in the range
                                 * <code>0</code> to <code>255</code>. If no byte is available
                                 * because the end of the stream has been reached, the value
                                 * <code>-1</code> is returned. This method blocks until input data
                                 * is available, the end of the stream is detected, or an exception
                                 * is thrown.
                                 * <p>
                                 * This method
                                 * simply performs <code>in.read()</code> and returns the result.
                                 * @return the next byte of data, or <code>-1</code> if the end of the
                                 *              stream is reached.
                                 * @throws IOException  if an I/O error occurs.
                                 * @see java.io.FilterInputStream#in
                                 */
                                // @ts-ignore
                                public read(): number /*int*/
                                /**
                                 * Reads up to <code>len</code> bytes of data from this input stream
                                 * into an array of bytes. If <code>len</code> is not zero, the method
                                 * blocks until some input is available; otherwise, no
                                 * bytes are read and <code>0</code> is returned.
                                 * <p>
                                 * This method simply performs <code>in.read(b, off, len)</code>
                                 * and returns the result.
                                 * @param b     the buffer into which the data is read.
                                 * @param off   The start offset in the destination array
                                 *                    <code>b</code>.
                                 * @param len   the maximum number of bytes read.
                                 * @return the total number of bytes read into the buffer, or
                                 *              <code>-1</code> if there is no more data because the end of
                                 *              the stream has been reached.
                                 * @throws NullPointerException If <code>b</code> is <code>null</code>.
                                 * @throws IndexOutOfBoundsException If <code>off</code> is negative,
                                 *  <code>len</code> is negative, or <code>len</code> is greater than
                                 *  <code>b.length - off</code>
                                 * @throws IOException  if an I/O error occurs.
                                 * @see java.io.FilterInputStream#in
                                 */
                                // @ts-ignore
                                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                                /**
                                 * Returns, whether this stream is already closed.
                                 * @return True, if the stream is closed, otherwise false.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public isClosed(): boolean
                                /**
                                 * Closes this input stream and releases any system resources
                                 * associated with the stream.
                                 * This
                                 * method simply performs <code>in.close()</code>.
                                 * @throws IOException  if an I/O error occurs.
                                 * @see java.io.FilterInputStream#in
                                 */
                                // @ts-ignore
                                public close(): void
                            }
                        }
                    }
                }
            }
        }
    }
}
