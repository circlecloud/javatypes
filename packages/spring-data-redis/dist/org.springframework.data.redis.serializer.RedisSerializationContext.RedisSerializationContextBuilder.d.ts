declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    namespace RedisSerializationContext {
                        /**
                         * Builder for {@link RedisSerializationContext}.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface RedisSerializationContextBuilder<K, V> {
                            /**
                             * Set the key {@link SerializationPair}.
                             * @param pair must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            key(pair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<K>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the key {@link RedisElementReader} and {@link RedisElementWriter}.
                             * @param reader must not be {#literal null}.
                             * @param writer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            key(reader: org.springframework.data.redis.serializer.RedisElementReader<K>, writer: org.springframework.data.redis.serializer.RedisElementWriter<K>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the key {@link SerializationPair} given a {@link RedisSerializer}.
                             * @param serializer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            key(serializer: org.springframework.data.redis.serializer.RedisSerializer<K>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the value {@link SerializationPair}.
                             * @param pair must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            value(pair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<V>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the value {@link RedisElementReader} and {@link RedisElementWriter}.
                             * @param reader must not be {#literal null}.
                             * @param writer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            value(reader: org.springframework.data.redis.serializer.RedisElementReader<V>, writer: org.springframework.data.redis.serializer.RedisElementWriter<V>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the value {@link SerializationPair} given a {@link RedisSerializer}.
                             * @param serializer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            value(serializer: org.springframework.data.redis.serializer.RedisSerializer<V>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the hash key {@link SerializationPair}.
                             * @param pair must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            hashKey(pair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the hash key {@link RedisElementReader} and {@link RedisElementWriter}.
                             * @param reader must not be {#literal null}.
                             * @param writer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            hashKey(reader: org.springframework.data.redis.serializer.RedisElementReader<any>, writer: org.springframework.data.redis.serializer.RedisElementWriter<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the hash key {@link SerializationPair} given a {@link RedisSerializer}.
                             * @param serializer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            hashKey(serializer: org.springframework.data.redis.serializer.RedisSerializer<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the hash value {@link SerializationPair}.
                             * @param pair must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            hashValue(pair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the hash value {@link RedisElementReader} and {@link RedisElementWriter}.
                             * @param reader must not be {#literal null}.
                             * @param writer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            hashValue(reader: org.springframework.data.redis.serializer.RedisElementReader<any>, writer: org.springframework.data.redis.serializer.RedisElementWriter<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the hash value {@link SerializationPair} given a {@link RedisSerializer}.
                             * @param serializer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            hashValue(serializer: org.springframework.data.redis.serializer.RedisSerializer<any>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the string {@link SerializationPair}.
                             * @param pair must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            string(pair: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<java.lang.String | string>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the string {@link RedisElementReader} and {@link RedisElementWriter}.
                             * @param reader must not be {#literal null}.
                             * @param writer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            string(reader: org.springframework.data.redis.serializer.RedisElementReader<java.lang.String | string>, writer: org.springframework.data.redis.serializer.RedisElementWriter<java.lang.String | string>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Set the string {@link SerializationPair} given a {@link RedisSerializer}.
                             * @param serializer must not be {#literal null}.
                             * @return {#literal this} builder.
                             */
                            // @ts-ignore
                            string(serializer: org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>): org.springframework.data.redis.serializer.RedisSerializationContext.RedisSerializationContextBuilder<K, V>
                            /**
                             * Builds a {@link RedisSerializationContext}.
                             * @return the {#link RedisSerializationContext}.
                             */
                            // @ts-ignore
                            build(): org.springframework.data.redis.serializer.RedisSerializationContext<K, V>
                        }
                    }
                }
            }
        }
    }
}
