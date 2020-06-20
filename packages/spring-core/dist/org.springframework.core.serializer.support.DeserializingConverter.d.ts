declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                namespace support {
                    /**
                     * A {@link Converter} that delegates to a
                     * {@link org.springframework.core.serializer.Deserializer}
                     * to convert data in a byte array to an object.
                     * @author Gary Russell
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 3.0.5
                     */
                    // @ts-ignore
                    class DeserializingConverter extends java.lang.Object implements org.springframework.core.convert.converter.Converter<byte[], java.lang.Object> {
                        /**
                         * Create a {@code DeserializingConverter} with default {@link java.io.ObjectInputStream}
                         * configuration, using the "latest user-defined ClassLoader".
                         * @see DefaultDeserializer#DefaultDeserializer()
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a {@code DeserializingConverter} for using an {@link java.io.ObjectInputStream}
                         * with the given {@code ClassLoader}.
                         * @since 4.2.1
                         * @see DefaultDeserializer#DefaultDeserializer(ClassLoader)
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Create a {@code DeserializingConverter} that delegates to the provided {@link Deserializer}.
                         */
                        // @ts-ignore
                        constructor(deserializer: org.springframework.core.serializer.Deserializer<java.lang.Object>)
                        // @ts-ignore
                        convert(source: number /*byte*/[]): java.lang.Object
                    }
                }
            }
        }
    }
}
