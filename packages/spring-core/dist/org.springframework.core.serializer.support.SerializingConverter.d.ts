declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                namespace support {
                    /**
                     * A {@link Converter} that delegates to a
                     * {@link org.springframework.core.serializer.Serializer}
                     * to convert an object to a byte array.
                     * @author Gary Russell
                     * @author Mark Fisher
                     * @since 3.0.5
                     */
                    // @ts-ignore
                    class SerializingConverter extends java.lang.Object implements org.springframework.core.convert.converter.Converter<java.lang.Object, byte[]> {
                        /**
                         * Create a default {@code SerializingConverter} that uses standard Java serialization.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a {@code SerializingConverter} that delegates to the provided {@link Serializer}.
                         */
                        // @ts-ignore
                        constructor(serializer: org.springframework.core.serializer.Serializer<java.lang.Object>)
                        /**
                         * Serializes the source object and returns the byte array result.
                         */
                        // @ts-ignore
                        convert(source: any): byte[]
                    }
                }
            }
        }
    }
}
