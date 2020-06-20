declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                /**
                 * A strategy interface for streaming an object to an OutputStream.
                 * @author Gary Russell
                 * @author Mark Fisher
                 * @since 3.0.5
                 * @param <T> the object type
                 */
                // @ts-ignore
                interface Serializer<T> {
                    /**
                     * Write an object of type T to the given OutputStream.
                     * <p>Note: Implementations should not close the given OutputStream
                     * (or any decorators of that OutputStream) but rather leave this up
                     * to the caller.
                     * @param object the object to serialize
                     * @param outputStream the output stream
                     * @throws IOException in case of errors writing to the stream
                     */
                    // @ts-ignore
                    serialize(object: T, outputStream: java.io.OutputStream): void
                }
            }
        }
    }
}
