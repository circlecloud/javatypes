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
                    public static serialize(object: java.lang.Object | any): number /*byte*/[]
                    /**
                     * Deserialize the bytes.
                     * @param bytes a serialized object created
                     * @return the result of deserializing the bytes
                     */
                    // @ts-ignore
                    public static deserialize(bytes: number /*byte*/[]): any
                    /**
                     * Deserialize the stream.
                     * @param stream an object stream created from a serialized object
                     * @return the result of deserializing the bytes
                     */
                    // @ts-ignore
                    public static deserialize(stream: java.io.ObjectInputStream): any
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
                    public static deserialize(inputStream: java.io.InputStream, whiteListPatterns: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, classLoader: java.lang.ClassLoader): any
                    /**
                     * Verify that the class is in the white list.
                     * @param clazz the class.
                     * @param whiteListPatterns the patterns.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public static checkWhiteList(clazz: java.lang.Class<any>, whiteListPatterns: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                }
            }
        }
    }
}
