declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Contains commonly needed I/O-related methods
                 * @author Dan Sandberg
                 */
                // @ts-ignore
                class IOTools extends java.lang.Object {
                    // @ts-ignore
                    static readonly DEFAULT_BUFFER_SIZE: number /*int*/
                    /**
                     * Read input from reader and write it to writer until there is no more
                     * input from reader.
                     * @param reader the reader to read from.
                     * @param writer the writer to write to.
                     * @param buf the char array to use as a buffer
                     * @throws IOException IO error
                     */
                    // @ts-ignore
                    public static flow(reader: java.io.Reader, writer: java.io.Writer, buf: string[]): void
                    /**
                     * Read input from reader and write it to writer until there is no more
                     * input from reader.
                     * @param reader the reader to read from.
                     * @param writer the writer to write to.
                     * @throws IOException IO error
                     * @see #flow( Reader, Writer, char[] )
                     */
                    // @ts-ignore
                    public static flow(reader: java.io.Reader, writer: java.io.Writer): void
                    /**
                     * Read input from input stream and write it to output stream until there is
                     * no more input from input stream using a new buffer of the default size
                     * (4kB).
                     * @param is input stream the input stream to read from.
                     * @param os output stream the output stream to write to.
                     * @throws IOException If an I/O error occurs during the copy
                     */
                    // @ts-ignore
                    public static flow(jis: java.io.InputStream, os: java.io.OutputStream): void
                }
            }
        }
    }
}
