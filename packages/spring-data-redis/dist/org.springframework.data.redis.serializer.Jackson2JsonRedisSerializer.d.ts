declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * {@link RedisSerializer} that can read and write JSON using
                     * <a href="https://github.com/FasterXML/jackson-core">Jackson's</a> and
                     * <a href="https://github.com/FasterXML/jackson-databind">Jackson Databind</a> {@link ObjectMapper}.
                     * <p>
                     * This converter can be used to bind to typed beans, or untyped {@link java.util.HashMap HashMap} instances.
                     * <b>Note:</b>Null objects are serialized as empty arrays and vice versa.
                     * @author Thomas Darimont
                     * @since 1.2
                     */
                    // @ts-ignore
                    class Jackson2JsonRedisSerializer<T> extends java.lang.Object implements org.springframework.data.redis.serializer.RedisSerializer<T> {
                        /**
                         * Creates a new {@link Jackson2JsonRedisSerializer} for the given target {@link Class}.
                         * @param type
                         */
                        // @ts-ignore
                        constructor(type: java.lang.Class<T>)
                        /**
                         * Creates a new {@link Jackson2JsonRedisSerializer} for the given target {@link JavaType}.
                         * @param javaType
                         */
                        // @ts-ignore
                        constructor(javaType: JavaType)
                        // @ts-ignore
                        public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        // @ts-ignore
                        public deserialize(bytes: number /*byte*/[]): T
                        // @ts-ignore
                        public serialize(t: java.lang.Object | any): number /*byte*/[]
                        /**
                         * Sets the {@code ObjectMapper} for this view. If not set, a default {@link ObjectMapper#ObjectMapper() ObjectMapper}
                         * is used.
                         * <p>
                         * Setting a custom-configured {@code ObjectMapper} is one way to take further control of the JSON serialization
                         * process. For example, an extended {@link SerializerFactory} can be configured that provides custom serializers for
                         * specific types. The other option for refining the serialization process is to use Jackson's provided annotations on
                         * the types to be serialized, in which case a custom-configured ObjectMapper is unnecessary.
                         */
                        // @ts-ignore
                        public setObjectMapper(objectMapper: ObjectMapper): void
                        /**
                         * Returns the Jackson {@link JavaType} for the specific class.
                         * <p>
                         * Default implementation returns {@link TypeFactory#constructType(java.lang.reflect.Type)}, but this can be
                         * overridden in subclasses, to allow for custom generic collection handling. For instance:
                         * <pre class="code">
                         * protected JavaType getJavaType(Class&lt;?&gt; clazz) {
                         * if (List.class.isAssignableFrom(clazz)) {
                         * return TypeFactory.defaultInstance().constructCollectionType(ArrayList.class, MyBean.class);
                         * } else {
                         * return super.getJavaType(clazz);
                         * }
                         * }
                         * </pre>
                         * @param clazz the class to return the java type for
                         * @return the java type
                         */
                        // @ts-ignore
                        getJavaType(clazz: java.lang.Class<any>): JavaType
                    }
                }
            }
        }
    }
}
