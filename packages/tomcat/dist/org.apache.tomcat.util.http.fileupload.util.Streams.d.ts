declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace util {
                            /**
                             * Utility class for working with streams.
                             */
                            // @ts-ignore
                            class Streams extends java.lang.Object {
                                /**
                                 * Copies the contents of the given {@link InputStream}
                                 * to the given {@link OutputStream}. Shortcut for
                                 * <pre>
                                 * copy(pInputStream, pOutputStream, new byte[8192]);
                                 * </pre>
                                 * @param inputStream The input stream, which is being read.
                                 *  It is guaranteed, that {#link InputStream#close()} is called
                                 *  on the stream.
                                 * @param outputStream The output stream, to which data should
                                 *  be written. May be null, in which case the input streams
                                 *  contents are simply discarded.
                                 * @param closeOutputStream True guarantees, that {#link OutputStream#close()}
                                 *  is called on the stream. False indicates, that only
                                 *  {@link OutputStream#flush()} should be called finally.
                                 * @return Number of bytes, which have been copied.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public static copy(inputStream: java.io.InputStream, outputStream: java.io.OutputStream, closeOutputStream: boolean): number /*long*/
                                /**
                                 * Copies the contents of the given {@link InputStream}
                                 * to the given {@link OutputStream}.
                                 * @param inputStream The input stream, which is being read.
                                 *    It is guaranteed, that {#link InputStream#close()} is called
                                 *    on the stream.
                                 * @param outputStream The output stream, to which data should
                                 *    be written. May be null, in which case the input streams
                                 *    contents are simply discarded.
                                 * @param closeOutputStream True guarantees, that {#link OutputStream#close()}
                                 *    is called on the stream. False indicates, that only
                                 *    {@link OutputStream#flush()} should be called finally.
                                 * @param buffer Temporary buffer, which is to be used for
                                 *    copying data.
                                 * @return Number of bytes, which have been copied.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public static copy(inputStream: java.io.InputStream, outputStream: java.io.OutputStream, closeOutputStream: boolean, buffer: number /*byte*/[]): number /*long*/
                                /**
                                 * This convenience method allows to read a
                                 * {@link org.apache.tomcat.util.http.fileupload.FileItemStream}'s
                                 * content into a string. The platform's default character encoding
                                 * is used for converting bytes into characters.
                                 * @param inputStream The input stream to read.
                                 * @see #asString(InputStream, String)
                                 * @return The streams contents, as a string.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public static asString(inputStream: java.io.InputStream): string
                                /**
                                 * This convenience method allows to read a
                                 * {@link org.apache.tomcat.util.http.fileupload.FileItemStream}'s
                                 * content into a string, using the given character encoding.
                                 * @param inputStream The input stream to read.
                                 * @param encoding The character encoding, typically "UTF-8".
                                 * @see #asString(InputStream)
                                 * @return The streams contents, as a string.
                                 * @throws IOException An I/O error occurred.
                                 */
                                // @ts-ignore
                                public static asString(inputStream: java.io.InputStream, encoding: java.lang.String | string): string
                                /**
                                 * Checks, whether the given file name is valid in the sense,
                                 * that it doesn't contain any NUL characters. If the file name
                                 * is valid, it will be returned without any modifications. Otherwise,
                                 * an {@link InvalidFileNameException} is raised.
                                 * @param fileName The file name to check
                                 * @return Unmodified file name, if valid.
                                 * @throws InvalidFileNameException The file name was found to be invalid.
                                 */
                                // @ts-ignore
                                public static checkFileName(fileName: java.lang.String | string): string
                            }
                        }
                    }
                }
            }
        }
    }
}
