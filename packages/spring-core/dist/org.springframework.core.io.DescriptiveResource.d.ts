declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Simple {@link Resource} implementation that holds a resource description
                 * but does not point to an actually readable resource.
                 * <p>To be used as placeholder if a {@code Resource} argument is
                 * expected by an API but not necessarily used for actual reading.
                 * @author Juergen Hoeller
                 * @since 1.2.6
                 */
                // @ts-ignore
                class DescriptiveResource extends org.springframework.core.io.AbstractResource {
                    /**
                     * Create a new DescriptiveResource.
                     * @param description the resource description
                     */
                    // @ts-ignore
                    constructor(description: string)
                    // @ts-ignore
                    exists(): boolean
                    // @ts-ignore
                    isReadable(): boolean
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * This implementation compares the underlying description String.
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns the hash code of the underlying description String.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
