declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple utility methods for dealing with streams. The copy methods of this class are
             * similar to those defined in {@link FileCopyUtils} except that all affected streams are
             * left open when done. All copy methods use a block size of 4096 bytes.
             * <p>Mainly for use within the framework, but also useful for application code.
             * @author Juergen Hoeller
             * @author Phillip Webb
             * @author Brian Clozel
             * @since 3.2.2
             * @see FileCopyUtils
             */
            // @ts-ignore
            class StreamUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The default buffer size used when copying bytes.
                 */
                // @ts-ignore
                readonly BUFFER_SIZE: number /*int*/
                /**
                 * Copy the contents of the given InputStream into a new byte array.
                 * <p>Leaves the stream open when done.
                 * @param in the stream to copy from (may be {#code null} or empty)
                 * @return the new byte array that has been copied to (possibly empty)
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copyToByteArray(input: java.io.InputStream): byte[]
                /**
                 * Copy the contents of the given InputStream into a String.
                 * <p>Leaves the stream open when done.
                 * @param in the InputStream to copy from (may be {#code null} or empty)
                 * @param charset the {#link Charset} to use to decode the bytes
                 * @return the String that has been copied to (possibly empty)
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copyToString(input: java.io.InputStream, charset: java.nio.charset.Charset): java.lang.String
                /**
                 * Copy the contents of the given {@link ByteArrayOutputStream} into a {@link String}.
                 * <p>This is a more effective equivalent of {@code new String(baos.toByteArray(), charset)}.
                 * <p>As long as the {@code charset} is already available at the point of
                 * invocation, no exception is expected to be thrown by this method.
                 * @param baos the {#code ByteArrayOutputStream} to be copied into a String
                 * @param charset the {#link Charset} to use to decode the bytes
                 * @return the String that has been copied to (possibly empty)
                 * @since 5.2.6
                 */
                // @ts-ignore
                copyToString(baos: java.io.ByteArrayOutputStream, charset: java.nio.charset.Charset): java.lang.String
                /**
                 * Copy the contents of the given byte array to the given OutputStream.
                 * <p>Leaves the stream open when done.
                 * @param in the byte array to copy from
                 * @param out the OutputStream to copy to
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: number /*byte*/[], out: java.io.OutputStream): void
                /**
                 * Copy the contents of the given String to the given output OutputStream.
                 * <p>Leaves the stream open when done.
                 * @param in the String to copy from
                 * @param charset the Charset
                 * @param out the OutputStream to copy to
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: string, charset: java.nio.charset.Charset, out: java.io.OutputStream): void
                /**
                 * Copy the contents of the given InputStream to the given OutputStream.
                 * <p>Leaves both streams open when done.
                 * @param in the InputStream to copy from
                 * @param out the OutputStream to copy to
                 * @return the number of bytes copied
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: java.io.InputStream, out: java.io.OutputStream): int
                /**
                 * Copy a range of content of the given InputStream to the given OutputStream.
                 * <p>If the specified range exceeds the length of the InputStream, this copies
                 * up to the end of the stream and returns the actual number of copied bytes.
                 * <p>Leaves both streams open when done.
                 * @param in the InputStream to copy from
                 * @param out the OutputStream to copy to
                 * @param start the position to start copying from
                 * @param end the position to end copying
                 * @return the number of bytes copied
                 * @throws IOException in case of I/O errors
                 * @since 4.3
                 */
                // @ts-ignore
                copyRange(input: java.io.InputStream, out: java.io.OutputStream, start: number /*long*/, end: number /*long*/): long
                /**
                 * Drain the remaining content of the given InputStream.
                 * <p>Leaves the InputStream open when done.
                 * @param in the InputStream to drain
                 * @return the number of bytes read
                 * @throws IOException in case of I/O errors
                 * @since 4.3
                 */
                // @ts-ignore
                drain(input: java.io.InputStream): int
                /**
                 * Return an efficient empty {@link InputStream}.
                 * @return a {#link ByteArrayInputStream} based on an empty byte array
                 * @since 4.2.2
                 */
                // @ts-ignore
                emptyInput(): java.io.InputStream
                /**
                 * Return a variant of the given {@link InputStream} where calling
                 * {@link InputStream#close() close()} has no effect.
                 * @param in the InputStream to decorate
                 * @return a version of the InputStream that ignores calls to close
                 */
                // @ts-ignore
                nonClosing(input: java.io.InputStream): java.io.InputStream
                /**
                 * Return a variant of the given {@link OutputStream} where calling
                 * {@link OutputStream#close() close()} has no effect.
                 * @param out the OutputStream to decorate
                 * @return a version of the OutputStream that ignores calls to close
                 */
                // @ts-ignore
                nonClosing(out: java.io.OutputStream): java.io.OutputStream
            }
        }
    }
}
