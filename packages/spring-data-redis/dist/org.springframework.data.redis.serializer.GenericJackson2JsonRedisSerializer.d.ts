declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * @author Christoph Strobl
                     * @author Mao Shuai
                     * @since 1.6
                     */
                    // @ts-ignore
                    class GenericJackson2JsonRedisSerializer extends java.lang.Object implements org.springframework.data.redis.serializer.RedisSerializer<java.lang.Object | any> {
                        /**
                         * Creates {@link GenericJackson2JsonRedisSerializer} and configures {@link ObjectMapper} for default typing.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates {@link GenericJackson2JsonRedisSerializer} and configures {@link ObjectMapper} for default typing using the
                         * given {@literal name}. In case of an {@literal empty} or {@literal null} String the default
                         * {@link JsonTypeInfo.Id#CLASS} will be used.
                         * @param classPropertyTypeName Name of the JSON property holding type information. Can be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(classPropertyTypeName: java.lang.String | string)
                        /**
                         * Setting a custom-configured {@link ObjectMapper} is one way to take further control of the JSON serialization
                         * process. For example, an extended {@link SerializerFactory} can be configured that provides custom serializers for
                         * specific types.
                         * @param mapper must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mapper: ObjectMapper)
                        // @ts-ignore
                        public serialize(source: java.lang.Object | any): number /*byte*/[]
                        // @ts-ignore
                        public deserialize(source: number /*byte*/[]): any
                        /**
                         * @param source can be {#literal null}.
                         * @param type must not be {#literal null}.
                         * @return {#literal null} for empty source.
                         * @throws SerializationException
                         */
                        // @ts-ignore
                        public deserialize<T>(source: number /*byte*/[], type: java.lang.Class<T>): T
                    }
                }
            }
        }
    }
}
