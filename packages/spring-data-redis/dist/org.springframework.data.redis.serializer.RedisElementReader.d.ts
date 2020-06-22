declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Strategy interface that specifies a deserializer that can deserialize a binary element representation stored in Redis
                     * into an object.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface RedisElementReader<T> {
                        /**
                         * Deserialize a {@link ByteBuffer} into the according type.
                         * @param buffer must not be {#literal null}.
                         * @return the deserialized value. Can be {#literal null}.
                         */
                        // @ts-ignore
                        read(buffer: java.nio.ByteBuffer): T
                        /**
                         * Create new {@link RedisElementReader} using given {@link RedisSerializer}.
                         * @param serializer must not be {#literal null}.
                         * @return new instance of {#link RedisElementReader}.
                         */
                        // @ts-ignore
                        from<T>(serializer: org.springframework.data.redis.serializer.RedisSerializer<T>): org.springframework.data.redis.serializer.RedisElementReader<T>
                    }
                }
            }
        }
    }
}
