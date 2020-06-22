declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace cdi {
                        /**
                         * {@link CdiBean} to create {@link RedisKeyValueAdapter} instances.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class RedisKeyValueAdapterBean extends org.springframework.data.redis.repository.cdi.CdiBean<org.springframework.data.redis.core.RedisKeyValueAdapter> {
                            /**
                             * Creates a new {@link RedisKeyValueAdapterBean}.
                             * @param redisOperations must not be {#literal null}.
                             * @param qualifiers must not be {#literal null}.
                             * @param beanManager must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(redisOperations: object, qualifiers: java.util.Set<java.lang.annotation.Annotation> | Array<java.lang.annotation.Annotation>, beanManager: BeanManager)
                            // @ts-ignore
                            public create(creationalContext: object): org.springframework.data.redis.core.RedisKeyValueAdapter
                            // @ts-ignore
                            public destroy(instance: org.springframework.data.redis.core.RedisKeyValueAdapter, creationalContext: object): void
                        }
                    }
                }
            }
        }
    }
}
