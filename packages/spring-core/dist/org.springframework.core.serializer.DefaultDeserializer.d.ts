declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                /**
                 * A default {@link Deserializer} implementation that reads an input stream
                 * using Java serialization.
                 * @author Gary Russell
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 3.0.5
                 * @see ObjectInputStream
                 */
                // @ts-ignore
                class DefaultDeserializer extends java.lang.Object implements org.springframework.core.serializer.Deserializer<java.lang.Object> {
                    /**
                     * Create a {@code DefaultDeserializer} with default {@link ObjectInputStream}
                     * configuration, using the "latest user-defined ClassLoader".
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a {@code DefaultDeserializer} for using an {@link ObjectInputStream}
                     * with the given {@code ClassLoader}.
                     * @since 4.2.1
                     * @see ConfigurableObjectInputStream#ConfigurableObjectInputStream(InputStream, ClassLoader)
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    /**
                     * Read from the supplied {@code InputStream} and deserialize the contents
                     * into an object.
                     * @see ObjectInputStream#readObject()
                     */
                    // @ts-ignore
                    deserialize(inputStream: java.io.InputStream): java.lang.Object
                }
            }
        }
    }
}
