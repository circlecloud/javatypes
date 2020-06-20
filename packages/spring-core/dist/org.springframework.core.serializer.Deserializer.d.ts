declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                /**
                 * A strategy interface for converting from data in an InputStream to an Object.
                 * @author Gary Russell
                 * @author Mark Fisher
                 * @since 3.0.5
                 * @param <T> the object type
                 */
                // @ts-ignore
                interface Deserializer<T> {
                    /**
                     * Read (assemble) an object of type T from the given InputStream.
                     * <p>Note: Implementations should not close the given InputStream
                     * (or any decorators of that InputStream) but rather leave this up
                     * to the caller.
                     * @param inputStream the input stream
                     * @return the deserialized object
                     * @throws IOException in case of errors reading from the stream
                     */
                    // @ts-ignore
                    deserialize(inputStream: java.io.InputStream): T
                }
            }
        }
    }
}
