declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link Resource} implementation for a given {@link InputStream}.
                 * <p>Should only be used if no other specific {@code Resource} implementation
                 * is applicable. In particular, prefer {@link ByteArrayResource} or any of the
                 * file-based {@code Resource} implementations where possible.
                 * <p>In contrast to other {@code Resource} implementations, this is a descriptor
                 * for an <i>already opened</i> resource - therefore returning {@code true} from
                 * {@link #isOpen()}. Do not use an {@code InputStreamResource} if you need to
                 * keep the resource descriptor somewhere, or if you need to read from a stream
                 * multiple times.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 28.12.2003
                 * @see ByteArrayResource
                 * @see ClassPathResource
                 * @see FileSystemResource
                 * @see UrlResource
                 */
                // @ts-ignore
                class InputStreamResource extends org.springframework.core.io.AbstractResource {
                    /**
                     * Create a new InputStreamResource.
                     * @param inputStream the InputStream to use
                     */
                    // @ts-ignore
                    constructor(inputStream: java.io.InputStream)
                    /**
                     * Create a new InputStreamResource.
                     * @param inputStream the InputStream to use
                     * @param description where the InputStream comes from
                     */
                    // @ts-ignore
                    constructor(inputStream: java.io.InputStream, description: string)
                    /**
                     * This implementation always returns {@code true}.
                     */
                    // @ts-ignore
                    exists(): boolean
                    /**
                     * This implementation always returns {@code true}.
                     */
                    // @ts-ignore
                    isOpen(): boolean
                    /**
                     * This implementation throws IllegalStateException if attempting to
                     * read the underlying stream multiple times.
                     */
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    /**
                     * This implementation returns a description that includes the passed-in
                     * description, if any.
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * This implementation compares the underlying InputStream.
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns the hash code of the underlying InputStream.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
