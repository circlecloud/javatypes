declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * General IO stream manipulation utilities.
                         * <p>
                         * This class provides static utility methods for input/output operations.
                         * <ul>
                         * <li>closeQuietly - these methods close a stream ignoring nulls and exceptions
                         * <li>toXxx/read - these methods read data from a stream
                         * <li>write - these methods write data to a stream
                         * <li>copy - these methods copy all the data from one stream to another
                         * <li>contentEquals - these methods compare the content of two streams
                         * </ul>
                         * <p>
                         * The byte-to-char methods and char-to-byte methods involve a conversion step.
                         * Two methods are provided in each case, one that uses the platform default
                         * encoding and the other which allows you to specify an encoding. You are
                         * encouraged to always specify an encoding because relying on the platform
                         * default can lead to unexpected results, for example when moving from
                         * development to production.
                         * <p>
                         * All the methods in this class that read a stream are buffered internally.
                         * This means that there is no cause to use a <code>BufferedInputStream</code>
                         * or <code>BufferedReader</code>. The default buffer size of 4K has been shown
                         * to be efficient in tests.
                         * <p>
                         * Wherever possible, the methods in this class do <em>not</em> flush or close
                         * the stream. This is to avoid making non-portable assumptions about the
                         * streams' origin and further use. Thus the caller is still responsible for
                         * closing streams after use.
                         * <p>
                         * Origin of code: Excalibur.
                         */
                        // @ts-ignore
                        class IOUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Represents the end-of-file (or stream).
                             * @since 2.5 (made public)
                             */
                            // @ts-ignore
                            public static readonly EOF: number /*int*/
                            /**
                             * Closes a <code>Closeable</code> unconditionally.
                             * <p>
                             * Equivalent to {@link Closeable#close()}, except any exceptions will be ignored. This is typically used in
                             * finally blocks.
                             * <p>
                             * Example code:
                             * </p>
                             * <pre>
                             * Closeable closeable = null;
                             * try {
                             * closeable = new FileReader(&quot;foo.txt&quot;);
                             * // process closeable
                             * closeable.close();
                             * } catch (Exception e) {
                             * // error handling
                             * } finally {
                             * IOUtils.closeQuietly(closeable);
                             * }
                             * </pre>
                             * <p>
                             * Closing all streams:
                             * </p>
                             * <pre>
                             * try {
                             * return IOUtils.copy(inputStream, outputStream);
                             * } finally {
                             * IOUtils.closeQuietly(inputStream);
                             * IOUtils.closeQuietly(outputStream);
                             * }
                             * </pre>
                             * @param closeable the objects to close, may be null or already closed
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static closeQuietly(closeable: java.io.Closeable): void
                            /**
                             * Copies bytes from an <code>InputStream</code> to an
                             * <code>OutputStream</code>.
                             * <p>
                             * This method buffers the input internally, so there is no need to use a
                             * <code>BufferedInputStream</code>.
                             * <p>
                             * Large streams (over 2GB) will return a bytes copied value of
                             * <code>-1</code> after the copy has completed since the correct
                             * number of bytes cannot be returned as an int. For large streams
                             * use the <code>copyLarge(InputStream, OutputStream)</code> method.
                             * @param input the <code>InputStream</code> to read from
                             * @param output the <code>OutputStream</code> to write to
                             * @return the number of bytes copied, or -1 if &gt; Integer.MAX_VALUE
                             * @throws NullPointerException if the input or output is null
                             * @throws IOException          if an I/O error occurs
                             * @since 1.1
                             */
                            // @ts-ignore
                            public static copy(input: java.io.InputStream, output: java.io.OutputStream): number /*int*/
                            /**
                             * Copies bytes from a large (over 2GB) <code>InputStream</code> to an
                             * <code>OutputStream</code>.
                             * <p>
                             * This method buffers the input internally, so there is no need to use a
                             * <code>BufferedInputStream</code>.
                             * <p>
                             * The buffer size is given by {@link #DEFAULT_BUFFER_SIZE}.
                             * @param input the <code>InputStream</code> to read from
                             * @param output the <code>OutputStream</code> to write to
                             * @return the number of bytes copied
                             * @throws NullPointerException if the input or output is null
                             * @throws IOException          if an I/O error occurs
                             * @since 1.3
                             */
                            // @ts-ignore
                            public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream): number /*long*/
                            /**
                             * Reads bytes from an input stream.
                             * This implementation guarantees that it will read as many bytes
                             * as possible before giving up; this may not always be the case for
                             * subclasses of {@link InputStream}.
                             * @param input where to read input from
                             * @param buffer destination
                             * @param offset initial offset into buffer
                             * @param length length to read, must be &gt;= 0
                             * @return actual length read; may be less than requested if EOF was reached
                             * @throws IOException if a read error occurs
                             * @since 2.2
                             */
                            // @ts-ignore
                            public static read(input: java.io.InputStream, buffer: number /*byte*/[], offset: number /*int*/, length: number /*int*/): number /*int*/
                            /**
                             * Reads the requested number of bytes or fail if there are not enough left.
                             * <p>
                             * This allows for the possibility that {@link InputStream#read(byte[], int, int)} may
                             * not read as many bytes as requested (most likely because of reaching EOF).
                             * @param input where to read input from
                             * @param buffer destination
                             * @param offset initial offset into buffer
                             * @param length length to read, must be &gt;= 0
                             * @throws IOException              if there is a problem reading the file
                             * @throws IllegalArgumentException if length is negative
                             * @throws EOFException             if the number of bytes read was incorrect
                             * @since 2.2
                             */
                            // @ts-ignore
                            public static readFully(input: java.io.InputStream, buffer: number /*byte*/[], offset: number /*int*/, length: number /*int*/): void
                            /**
                             * Reads the requested number of bytes or fail if there are not enough left.
                             * <p>
                             * This allows for the possibility that {@link InputStream#read(byte[], int, int)} may
                             * not read as many bytes as requested (most likely because of reaching EOF).
                             * @param input where to read input from
                             * @param buffer destination
                             * @throws IOException              if there is a problem reading the file
                             * @throws IllegalArgumentException if length is negative
                             * @throws EOFException             if the number of bytes read was incorrect
                             * @since 2.2
                             */
                            // @ts-ignore
                            public static readFully(input: java.io.InputStream, buffer: number /*byte*/[]): void
                        }
                    }
                }
            }
        }
    }
}
