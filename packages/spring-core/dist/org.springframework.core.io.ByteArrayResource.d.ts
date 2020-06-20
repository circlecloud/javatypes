declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link Resource} implementation for a given byte array.
                 * <p>Creates a {@link ByteArrayInputStream} for the given byte array.
                 * <p>Useful for loading content from any given byte array,
                 * without having to resort to a single-use {@link InputStreamResource}.
                 * Particularly useful for creating mail attachments from local content,
                 * where JavaMail needs to be able to read the stream multiple times.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 1.2.3
                 * @see java.io.ByteArrayInputStream
                 * @see InputStreamResource
                 * @see org.springframework.mail.javamail.MimeMessageHelper#addAttachment(String, InputStreamSource)
                 */
                // @ts-ignore
                class ByteArrayResource extends org.springframework.core.io.AbstractResource {
                    /**
                     * Create a new {@code ByteArrayResource}.
                     * @param byteArray the byte array to wrap
                     */
                    // @ts-ignore
                    constructor(byteArray: number /*byte*/[])
                    /**
                     * Create a new {@code ByteArrayResource} with a description.
                     * @param byteArray the byte array to wrap
                     * @param description where the byte array comes from
                     */
                    // @ts-ignore
                    constructor(byteArray: number /*byte*/[], description: string)
                    /**
                     * Return the underlying byte array.
                     */
                    // @ts-ignore
                    getByteArray(): byte[]
                    /**
                     * This implementation always returns {@code true}.
                     */
                    // @ts-ignore
                    exists(): boolean
                    /**
                     * This implementation returns the length of the underlying byte array.
                     */
                    // @ts-ignore
                    contentLength(): long
                    /**
                     * This implementation returns a ByteArrayInputStream for the
                     * underlying byte array.
                     * @see java.io.ByteArrayInputStream
                     */
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    /**
                     * This implementation returns a description that includes the passed-in
                     * {@code description}, if any.
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * This implementation compares the underlying byte array.
                     * @see java.util.Arrays#equals(byte[], byte[])
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns the hash code based on the
                     * underlying byte array.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
