declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Java Serialization Redis serializer. Delegates to the default (Java based) {@link DefaultSerializer serializer} and
                     * {@link DefaultDeserializer}. This {@link RedisSerializer serializer} can be constructed with either custom
                     * {@link ClassLoader} or own {@link Converter converters}.
                     * @author Mark Pollack
                     * @author Costin Leau
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class JdkSerializationRedisSerializer extends java.lang.Object implements org.springframework.data.redis.serializer.RedisSerializer<java.lang.Object | any> {
                        /**
                         * Creates a new {@link JdkSerializationRedisSerializer} using the default class loader.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new {@link JdkSerializationRedisSerializer} using a {@link ClassLoader}.
                         * @param classLoader the {#link ClassLoader} to use for deserialization. Can be {@literal null}.
                         * @since 1.7
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Creates a new {@link JdkSerializationRedisSerializer} using a {@link Converter converters} to serialize and
                         * deserialize objects.
                         * @param serializer must not be {#literal null}
                         * @param deserializer must not be {#literal null}
                         * @since 1.7
                         */
                        // @ts-ignore
                        constructor(serializer: object, deserializer: object)
                        // @ts-ignore
                        public deserialize(bytes: number /*byte*/[]): any
                        // @ts-ignore
                        public serialize(object: java.lang.Object | any): number /*byte*/[]
                    }
                }
            }
        }
    }
}
