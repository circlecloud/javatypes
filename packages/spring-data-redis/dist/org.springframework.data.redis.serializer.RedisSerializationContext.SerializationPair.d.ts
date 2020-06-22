declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    namespace RedisSerializationContext {
                        /**
                         * Typed serialization tuple.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface SerializationPair<T> {
                            /**
                             * Creates a {@link SerializationPair} adapter given {@link RedisSerializer}.
                             * @param serializer must not be {#literal null}.
                             * @return a {#link SerializationPair} adapter for {@link RedisSerializer}.
                             */
                            // @ts-ignore
                            fromSerializer<T>(serializer: org.springframework.data.redis.serializer.RedisSerializer<T>): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<T>
                            /**
                             * Creates a {@link SerializationPair} adapter given {@link RedisElementReader} and {@link RedisElementWriter}.
                             * @param reader must not be {#literal null}.
                             * @param writer must not be {#literal null}.
                             * @return a {#link SerializationPair} encapsulating {@link RedisElementReader} and {@link RedisElementWriter}.
                             */
                            // @ts-ignore
                            just<T>(reader: org.springframework.data.redis.serializer.RedisElementReader<any>, writer: org.springframework.data.redis.serializer.RedisElementWriter<any>): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<T>
                            /**
                             * Creates a pass through {@link SerializationPair} to pass-thru {@link ByteBuffer} objects.
                             * @return a pass through {#link SerializationPair}.
                             */
                            // @ts-ignore
                            raw<T>(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<T>
                            /**
                             * @return the {#link RedisElementReader}.
                             */
                            // @ts-ignore
                            getReader(): org.springframework.data.redis.serializer.RedisElementReader<T>
                            /**
                             * Deserialize a {@link ByteBuffer} into the according type.
                             * @param buffer must not be {#literal null}.
                             * @return the deserialized value.
                             */
                            // @ts-ignore
                            read(buffer: java.nio.ByteBuffer): T
                            /**
                             * @return the {#link RedisElementWriter}.
                             */
                            // @ts-ignore
                            getWriter(): org.springframework.data.redis.serializer.RedisElementWriter<T>
                            /**
                             * Serialize a {@code element} to its {@link ByteBuffer} representation.
                             * @param element
                             * @return the {#link ByteBuffer} representing {@code element} in its binary form.
                             */
                            // @ts-ignore
                            write(element: T): java.nio.ByteBuffer
                        }
                    }
                }
            }
        }
    }
}
