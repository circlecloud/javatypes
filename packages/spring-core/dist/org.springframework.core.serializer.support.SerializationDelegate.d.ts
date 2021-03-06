declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                namespace support {
                    /**
                     * A convenient delegate with pre-arranged configuration state for common
                     * serialization needs. Implements {@link Serializer} and {@link Deserializer}
                     * itself, so can also be passed into such more specific callback methods.
                     * @author Juergen Hoeller
                     * @since 4.3
                     */
                    // @ts-ignore
                    class SerializationDelegate extends java.lang.Object implements org.springframework.core.serializer.Serializer<java.lang.Object | any>, org.springframework.core.serializer.Deserializer<java.lang.Object | any> {
                        /**
                         * Create a {@code SerializationDelegate} with a default serializer/deserializer
                         * for the given {@code ClassLoader}.
                         * @see DefaultDeserializer
                         * @see DefaultDeserializer#DefaultDeserializer(ClassLoader)
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Create a {@code SerializationDelegate} with the given serializer/deserializer.
                         * @param serializer the {#link Serializer} to use (never {@code null)}
                         * @param deserializer the {#link Deserializer} to use (never {@code null)}
                         */
                        // @ts-ignore
                        constructor(serializer: org.springframework.core.serializer.Serializer<java.lang.Object | any>, deserializer: org.springframework.core.serializer.Deserializer<java.lang.Object | any>)
                        // @ts-ignore
                        public serialize(object: java.lang.Object | any, outputStream: java.io.OutputStream): void
                        // @ts-ignore
                        public deserialize(inputStream: java.io.InputStream): any
                    }
                }
            }
        }
    }
}
