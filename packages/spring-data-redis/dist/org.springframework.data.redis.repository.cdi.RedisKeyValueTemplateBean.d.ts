declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace cdi {
                        /**
                         * {@link CdiBean} to create {@link RedisKeyValueTemplate} instances.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class RedisKeyValueTemplateBean extends org.springframework.data.redis.repository.cdi.CdiBean<KeyValueOperations> {
                            /**
                             * Creates a new {@link RedisKeyValueTemplateBean}.
                             * @param keyValueAdapter must not be {#literal null}.
                             * @param qualifiers must not be {#literal null}.
                             * @param beanManager must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(keyValueAdapter: object, qualifiers: java.util.Set<java.lang.annotation.Annotation> | Array<java.lang.annotation.Annotation>, beanManager: BeanManager)
                            // @ts-ignore
                            public create(creationalContext: object): KeyValueOperations
                            // @ts-ignore
                            public destroy(instance: KeyValueOperations, creationalContext: object): void
                        }
                    }
                }
            }
        }
    }
}
