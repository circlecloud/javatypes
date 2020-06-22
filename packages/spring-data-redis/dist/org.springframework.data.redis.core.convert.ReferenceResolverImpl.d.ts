declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link ReferenceResolver} using {@link RedisKeyValueAdapter} to read raw data.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class ReferenceResolverImpl extends java.lang.Object implements org.springframework.data.redis.core.convert.ReferenceResolver {
                            /**
                             * @param redisOperations must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(redisOperations: org.springframework.data.redis.core.RedisOperations<any, any>)
                            // @ts-ignore
                            public resolveReference(id: java.lang.Object | any, keyspace: java.lang.String | string): java.util.Map<number /*byte*/[], number /*byte*/[]>
                        }
                    }
                }
            }
        }
    }
}
