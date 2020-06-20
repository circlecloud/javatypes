declare namespace java {
    namespace lang {
        namespace ProcessBuilder {
            /**
             * Represents a source of subprocess input or a destination of
             * subprocess output.
             * Each {@code Redirect} instance is one of the following:
             * <ul>
             * <li>the special value {@link #PIPE Redirect.PIPE}
             * <li>the special value {@link #INHERIT Redirect.INHERIT}
             * <li>a redirection to read from a file, created by an invocation of
             * {@link Redirect#from Redirect.from(File)}
             * <li>a redirection to write to a file,  created by an invocation of
             * {@link Redirect#to Redirect.to(File)}
             * <li>a redirection to append to a file, created by an invocation of
             * {@link Redirect#appendTo Redirect.appendTo(File)}
             * </ul>
             * <p>Each of the above categories has an associated unique
             * {@link Type Type}.
             * @since 1.7
             */
            // @ts-ignore
            class Redirect extends java.lang.Object {
                /**
                 * Indicates that subprocess I/O will be connected to the
                 * current Java process over a pipe.
                 * This is the default handling of subprocess standard I/O.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.PIPE.file() == null &&
                 * Redirect.PIPE.type() == Redirect.Type.PIPE
                 * }</pre>
                 */
                // @ts-ignore
                readonly PIPE: java.lang.ProcessBuilder.Redirect
                /**
                 * Indicates that subprocess I/O source or destination will be the
                 * same as those of the current process.  This is the normal
                 * behavior of most operating system command interpreters (shells).
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.INHERIT.file() == null &&
                 * Redirect.INHERIT.type() == Redirect.Type.INHERIT
                 * }</pre>
                 */
                // @ts-ignore
                readonly INHERIT: java.lang.ProcessBuilder.Redirect
                /**
                 * Returns the type of this {@code Redirect}.
                 * @return the type of this {#code Redirect}
                 */
                // @ts-ignore
                abstract type(): java.lang.ProcessBuilder.Redirect.Type
                /**
                 * Returns the {@link File} source or destination associated
                 * with this redirect, or {@code null} if there is no such file.
                 * @return the file associated with this redirect,
                 *          or {#code null} if there is no such file
                 */
                // @ts-ignore
                file(): java.io.File
                /**
                 * Returns a redirect to read from the specified file.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.from(file).file() == file &&
                 * Redirect.from(file).type() == Redirect.Type.READ
                 * }</pre>
                 * @param file The {#code File} for the {@code Redirect}.
                 * @throws NullPointerException if the specified file is null
                 * @return a redirect to read from the specified file
                 */
                // @ts-ignore
                from(file: java.io.File): java.lang.ProcessBuilder.Redirect
                /**
                 * Returns a redirect to write to the specified file.
                 * If the specified file exists when the subprocess is started,
                 * its previous contents will be discarded.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.to(file).file() == file &&
                 * Redirect.to(file).type() == Redirect.Type.WRITE
                 * }</pre>
                 * @param file The {#code File} for the {@code Redirect}.
                 * @throws NullPointerException if the specified file is null
                 * @return a redirect to write to the specified file
                 */
                // @ts-ignore
                to(file: java.io.File): java.lang.ProcessBuilder.Redirect
                /**
                 * Returns a redirect to append to the specified file.
                 * Each write operation first advances the position to the
                 * end of the file and then writes the requested data.
                 * Whether the advancement of the position and the writing
                 * of the data are done in a single atomic operation is
                 * system-dependent and therefore unspecified.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.appendTo(file).file() == file &&
                 * Redirect.appendTo(file).type() == Redirect.Type.APPEND
                 * }</pre>
                 * @param file The {#code File} for the {@code Redirect}.
                 * @throws NullPointerException if the specified file is null
                 * @return a redirect to append to the specified file
                 */
                // @ts-ignore
                appendTo(file: java.io.File): java.lang.ProcessBuilder.Redirect
                /**
                 * Compares the specified object with this {@code Redirect} for
                 * equality.  Returns {@code true} if and only if the two
                 * objects are identical or both objects are {@code Redirect}
                 * instances of the same type associated with non-null equal
                 * {@code File} instances.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hash code value for this {@code Redirect}.
                 * @return a hash code value for this {#code Redirect}
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
