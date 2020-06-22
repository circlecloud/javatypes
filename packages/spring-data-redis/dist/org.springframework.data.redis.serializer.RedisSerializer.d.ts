declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Basic interface serialization and deserialization of Objects to byte arrays (binary data). It is recommended that
                     * implementations are designed to handle null objects/empty arrays on serialization and deserialization side. Note that
                     * Redis does not accept null keys or values but can return null replies (for non existing keys).
                     * @author Mark Pollack
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface RedisSerializer<T> {
                        /**
                         * Serialize the given object to binary data.
                         * @param t object to serialize. Can be {#literal null}.
                         * @return the equivalent binary data. Can be {#literal null}.
                         */
                        // @ts-ignore
                        serialize(t: T): number /*byte*/[]
                        /**
                         * Deserialize an object from the given binary data.
                         * @param bytes object binary representation. Can be {#literal null}.
                         * @return the equivalent object instance. Can be {#literal null}.
                         */
                        // @ts-ignore
                        deserialize(bytes: number /*byte*/[]): T
                        /**
                         * Obtain a {@link RedisSerializer} using java serialization.<br />
                         * <strong>Note:</strong> Ensure that your domain objects are actually {@link java.io.Serializable serializable}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        java(): org.springframework.data.redis.serializer.RedisSerializer<java.lang.Object | any>
                        /**
                         * Obtain a {@link RedisSerializer} using java serialization with the given {@link ClassLoader}.<br />
                         * <strong>Note:</strong> Ensure that your domain objects are actually {@link java.io.Serializable serializable}.
                         * @param classLoader the {#link ClassLoader} to use for deserialization. Can be {@literal null}.
                         * @return new instance of {#link RedisSerializer}. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        java(classLoader: java.lang.ClassLoader): org.springframework.data.redis.serializer.RedisSerializer<java.lang.Object | any>
                        /**
                         * Obtain a {@link RedisSerializer} that can read and write JSON using
                         * <a href="https://github.com/FasterXML/jackson-core">Jackson</a>.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        json(): org.springframework.data.redis.serializer.RedisSerializer<java.lang.Object | any>
                        /**
                         * Obtain a simple {@link java.lang.String} to {@literal byte[]} (and back) serializer using
                         * {@link java.nio.charset.StandardCharsets#UTF_8 UTF-8} as the default {@link java.nio.charset.Charset}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        string(): org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>
                    }
                }
            }
        }
    }
}
