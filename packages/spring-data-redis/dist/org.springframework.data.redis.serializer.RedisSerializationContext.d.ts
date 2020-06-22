declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Serialization context for reactive use.
                     * <p />
                     * This context provides {@link SerializationPair}s for key, value, hash-key (field), hash-value and {@link String}
                     * serialization and deserialization.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     * @see RedisElementWriter
                     * @see RedisElementReader
                     */
                    // @ts-ignore
                    interface RedisSerializationContext<K, V> {
                        /**
                         * Creates a new {@link RedisSerializationContextBuilder}.
                         * @param <K> expected key type.
                         * @param <V> expected value type.
                         * @return a new {#link RedisSerializationContextBuilder}.
                         */
                        // @ts-ignore
                        newSerializationContext<K, V>(): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                        /**
                         * Creates a new {@link RedisSerializationContextBuilder} using a given default {@link RedisSerializer}.
                         * @param defaultSerializer must not be {#literal null}.
                         * @param <K> expected key type.
                         * @param <V> expected value type.
                         * @return a new {#link RedisSerializationContextBuilder}.
                         */
                        // @ts-ignore
                        newSerializationContext<K, V>(defaultSerializer: org.springframework.data.redis.serializer.RedisSerializer<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                        /**
                         * Creates a new {@link RedisSerializationContextBuilder} using a given default {@link SerializationPair}.
                         * @param serializationPair must not be {#literal null}.
                         * @param <K> expected key type.
                         * @param <V> expected value type.
                         * @return a new {#link RedisSerializationContextBuilder}.
                         */
                        // @ts-ignore
                        newSerializationContext<K, V>(serializationPair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                        /**
                         * Creates a new {@link RedisSerializationContext} using a {@link SerializationPair#raw()} serialization pair.
                         * @return 
                         */
                        // @ts-ignore
                        raw(): org.springframework.data.redis.serializer.RedisSerializationContext<number /*byte*/[], number /*byte*/[]>
                        /**
                         * Creates a new {@link RedisSerializationContext} using a {@link JdkSerializationRedisSerializer}.
                         * @return new instance of {#link RedisSerializationContext}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        java(): org.springframework.data.redis.serializer.RedisSerializationContext<java.lang.Object | any, java.lang.Object | any>
                        /**
                         * Creates a new {@link RedisSerializationContext} using a {@link JdkSerializationRedisSerializer} with given
                         * {@link ClassLoader}.
                         * @param classLoader the {#link ClassLoader} to use for deserialization. Can be {@literal null}.
                         * @return new instance of {#link RedisSerializationContext}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        java(classLoader: java.lang.ClassLoader): org.springframework.data.redis.serializer.RedisSerializationContext<java.lang.Object | any, java.lang.Object | any>
                        /**
                         * Creates a new {@link RedisSerializationContext} using a {@link StringRedisSerializer}.
                         * @return 
                         */
                        // @ts-ignore
                        string(): org.springframework.data.redis.serializer.RedisSerializationContext<java.lang.String | string, java.lang.String | string>
                        /**
                         * Creates a new {@link RedisSerializationContext} using the given {@link RedisSerializer}.
                         * @param serializer must not be {#literal null}.
                         * @param <T>
                         * @return 
                         */
                        // @ts-ignore
                        fromSerializer<T>(serializer: org.springframework.data.redis.serializer.RedisSerializer<T>): org.springframework.data.redis.serializer.RedisSerializationContext<T, T>
                        /**
                         * Creates a new {@link RedisSerializationContext} using the given {@link SerializationPair}.
                         * @param serializationPair
                         * @param <T>
                         * @return 
                         */
                        // @ts-ignore
                        just<T>(serializationPair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<T>): org.springframework.data.redis.serializer.RedisSerializationContext<T, T>
                        /**
                         * @return {#link SerializationPair} for key-typed serialization and deserialization.
                         */
                        // @ts-ignore
                        getKeySerializationPair(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<K>
                        /**
                         * @return {#link SerializationPair} for value-typed serialization and deserialization.
                         */
                        // @ts-ignore
                        getValueSerializationPair(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<V>
                        /**
                         * @return {#link SerializationPair} for hash-key-typed serialization and deserialization.
                         */
                        // @ts-ignore
                        getHashKeySerializationPair<HK>(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<HK>
                        /**
                         * @return {#link SerializationPair} for hash-value-typed serialization and deserialization.
                         */
                        // @ts-ignore
                        getHashValueSerializationPair<HV>(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<HV>
                        /**
                         * @return {#link SerializationPair} for {@link String}-typed serialization and deserialization.
                         */
                        // @ts-ignore
                        getStringSerializationPair(): org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<java.lang.String | string>
                    }
                }
            }
        }
    }
}
