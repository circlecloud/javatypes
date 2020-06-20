declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace utils {
                /**
                 * Static utility to help with serialization.
                 * @author Dave Syer
                 * @author Gary Russell
                 */
                // @ts-ignore
                class SerializationUtils extends java.lang.Object {
                    /**
                     * Serialize the object provided.
                     * @param object the object to serialize
                     * @return an array of bytes representing the object in a portable fashion
                     */
                    // @ts-ignore
                    serialize(object: any): byte[]
                    /**
                     * Deserialize the bytes.
                     * @param bytes a serialized object created
                     * @return the result of deserializing the bytes
                     */
                    // @ts-ignore
                    deserialize(bytes: number /*byte*/[]): java.lang.Object
                    /**
                     * Deserialize the stream.
                     * @param stream an object stream created from a serialized object
                     * @return the result of deserializing the bytes
                     */
                    // @ts-ignore
                    deserialize(stream: java.io.ObjectInputStream): java.lang.Object
                    /**
                     * Deserialize the stream.
                     * @param inputStream the stream.
                     * @param whiteListPatterns allowed classes.
                     * @param classLoader the class loader.
                     * @return the result.
                     * @throws IOException IO Exception.
                     * @since 2.1
                     */
                    // @ts-ignore
                    deserialize(inputStream: java.io.InputStream, whiteListPatterns: Array<java.lang.String>, classLoader: java.lang.ClassLoader): java.lang.Object
                    /**
                     * Verify that the class is in the white list.
                     * @param clazz the class.
                     * @param whiteListPatterns the patterns.
                     * @since 2.1
                     */
                    // @ts-ignore
                    checkWhiteList(clazz: java.lang.Class<any>, whiteListPatterns: Array<java.lang.String>): void
                }
            }
        }
    }
}
