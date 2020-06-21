declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                /**
                 * A {@link Serializer} implementation that writes an object to an output stream
                 * using Java serialization.
                 * @author Gary Russell
                 * @author Mark Fisher
                 * @since 3.0.5
                 */
                // @ts-ignore
                class DefaultSerializer extends java.lang.Object implements org.springframework.core.serializer.Serializer<java.lang.Object | any> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Writes the source object to an output stream using Java serialization.
                     * The source object must implement {@link Serializable}.
                     * @see ObjectOutputStream#writeObject(Object)
                     */
                    // @ts-ignore
                    public serialize(object: java.lang.Object | any, outputStream: java.io.OutputStream): void
                }
            }
        }
    }
}
