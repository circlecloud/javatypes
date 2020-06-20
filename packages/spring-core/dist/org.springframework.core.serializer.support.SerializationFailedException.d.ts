declare namespace org {
    namespace springframework {
        namespace core {
            namespace serializer {
                namespace support {
                    /**
                     * Wrapper for the native IOException (or similar) when a
                     * {@link org.springframework.core.serializer.Serializer} or
                     * {@link org.springframework.core.serializer.Deserializer} failed.
                     * Thrown by {@link SerializingConverter} and {@link DeserializingConverter}.
                     * @author Gary Russell
                     * @author Juergen Hoeller
                     * @since 3.0.5
                     */
                    // @ts-ignore
                    class SerializationFailedException extends org.springframework.core.NestedRuntimeException {
                        /**
                         * Construct a {@code SerializationException} with the specified detail message.
                         * @param message the detail message
                         */
                        // @ts-ignore
                        constructor(message: string)
                        /**
                         * Construct a {@code SerializationException} with the specified detail message
                         * and nested exception.
                         * @param message the detail message
                         * @param cause the nested exception
                         */
                        // @ts-ignore
                        constructor(message: string, cause: Error)
                    }
                }
            }
        }
    }
}
