declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Default implementation of {@link RedisTypeMapper} allowing configuration of the key to lookup and store type
                         * information via {@link BucketPropertyPath} in buckets. The key defaults to {@link #DEFAULT_TYPE_KEY}. Actual
                         * type-to-{@code byte[]} conversion and back is done in {@link BucketTypeAliasAccessor}.
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class DefaultRedisTypeMapper extends java.lang.Object implements org.springframework.data.redis.core.convert.RedisTypeMapper {
                            /**
                             * Create a new {@link DefaultRedisTypeMapper} using {@link #DEFAULT_TYPE_KEY} to exchange type hints.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Create a new {@link DefaultRedisTypeMapper} given {@code typeKey} to exchange type hints. Does not consider type
                             * hints if {@code typeKey} is {@literal null}.
                             * @param typeKey the type key can be {#literal null} to skip type hinting.
                             */
                            // @ts-ignore
                            constructor(typeKey: java.lang.String | string)
                            /**
                             * Create a new {@link DefaultRedisTypeMapper} given {@code typeKey} to exchange type hints and
                             * {@link MappingContext}. Does not consider type hints if {@code typeKey} is {@literal null}. {@link MappingContext}
                             * is used to obtain entity-based aliases
                             * @param typeKey the type key can be {#literal null} to skip type hinting.
                             * @param mappingContext must not be {#literal null}.
                             * @see org.springframework.data.annotation.TypeAlias
                             */
                            // @ts-ignore
                            constructor(typeKey: java.lang.String | string, mappingContext: object)
                            // @ts-ignore
                            public static readonly DEFAULT_TYPE_KEY: java.lang.String | string
                            // @ts-ignore
                            public isTypeKey(key: java.lang.String | string): boolean
                        }
                    }
                }
            }
        }
    }
}
