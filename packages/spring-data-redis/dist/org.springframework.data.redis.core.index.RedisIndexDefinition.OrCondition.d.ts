declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        namespace RedisIndexDefinition {
                            /**
                             * @author Christoph Strobl
                             * @since 1.7
                             * @param <T>
                             */
                            // @ts-ignore
                            class OrCondition<T> extends java.lang.Object implements org.springframework.data.redis.core.index.IndexDefinition.Condition<T> {
                                // @ts-ignore
                                constructor(conditions: java.util.Collection<org.springframework.data.redis.core.index.IndexDefinition.Condition<T>> | Array<org.springframework.data.redis.core.index.IndexDefinition.Condition<T>>)
                                // @ts-ignore
                                public matches(value: T, context: org.springframework.data.redis.core.index.IndexDefinition.IndexingContext): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
