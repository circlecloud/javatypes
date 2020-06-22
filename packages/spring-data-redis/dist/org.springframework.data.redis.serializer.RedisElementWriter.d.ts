declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Strategy interface that specifies a serializer that can serialize an element to its binary representation to be used
                     * as Redis protocol payload.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface RedisElementWriter<T> {
                        /**
                         * Serialize a {@code element} to its {@link ByteBuffer} representation.
                         * @param element can be {#literal null}.
                         * @return the {#link ByteBuffer} representing {@code element} in its binary form.
                         */
                        // @ts-ignore
                        write(element: T): java.nio.ByteBuffer
                        /**
                         * Create new {@link RedisElementWriter} using given {@link RedisSerializer}.
                         * @param serializer must not be {#literal null}.
                         * @return new instance of {#link RedisElementWriter}.
                         */
                        // @ts-ignore
                        from<T>(serializer: org.springframework.data.redis.serializer.RedisSerializer<T>): org.springframework.data.redis.serializer.RedisElementWriter<T>
                    }
                }
            }
        }
    }
}
