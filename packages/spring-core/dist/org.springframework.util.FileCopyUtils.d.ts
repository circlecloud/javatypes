declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple utility methods for file and stream copying. All copy methods use a block size
             * of 4096 bytes, and close all affected streams when done. A variation of the copy
             * methods from this class that leave streams open can be found in {@link StreamUtils}.
             * <p>Mainly for use within the framework, but also useful for application code.
             * @author Juergen Hoeller
             * @author Hyunjin Choi
             * @since 06.10.2003
             * @see StreamUtils
             * @see FileSystemUtils
             */
            // @ts-ignore
            class FileCopyUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The default buffer size used when copying bytes.
                 */
                // @ts-ignore
                readonly BUFFER_SIZE: number /*int*/
                /**
                 * Copy the contents of the given input File to the given output File.
                 * @param in the file to copy from
                 * @param out the file to copy to
                 * @return the number of bytes copied
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: java.io.File, out: java.io.File): int
                /**
                 * Copy the contents of the given byte array to the given output File.
                 * @param in the byte array to copy from
                 * @param out the file to copy to
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: number /*byte*/[], out: java.io.File): void
                /**
                 * Copy the contents of the given input File into a new byte array.
                 * @param in the file to copy from
                 * @return the new byte array that has been copied to
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copyToByteArray(input: java.io.File): byte[]
                /**
                 * Copy the contents of the given InputStream to the given OutputStream.
                 * Closes both streams when done.
                 * @param in the stream to copy from
                 * @param out the stream to copy to
                 * @return the number of bytes copied
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: java.io.InputStream, out: java.io.OutputStream): int
                /**
                 * Copy the contents of the given byte array to the given OutputStream.
                 * Closes the stream when done.
                 * @param in the byte array to copy from
                 * @param out the OutputStream to copy to
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: number /*byte*/[], out: java.io.OutputStream): void
                /**
                 * Copy the contents of the given InputStream into a new byte array.
                 * Closes the stream when done.
                 * @param in the stream to copy from (may be {#code null} or empty)
                 * @return the new byte array that has been copied to (possibly empty)
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copyToByteArray(input: java.io.InputStream): byte[]
                /**
                 * Copy the contents of the given Reader to the given Writer.
                 * Closes both when done.
                 * @param in the Reader to copy from
                 * @param out the Writer to copy to
                 * @return the number of characters copied
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: java.io.Reader, out: java.io.Writer): int
                /**
                 * Copy the contents of the given String to the given output Writer.
                 * Closes the writer when done.
                 * @param in the String to copy from
                 * @param out the Writer to copy to
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copy(input: string, out: java.io.Writer): void
                /**
                 * Copy the contents of the given Reader into a String.
                 * Closes the reader when done.
                 * @param in the reader to copy from (may be {#code null} or empty)
                 * @return the String that has been copied to (possibly empty)
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                copyToString(input: java.io.Reader): java.lang.String
            }
        }
    }
}
