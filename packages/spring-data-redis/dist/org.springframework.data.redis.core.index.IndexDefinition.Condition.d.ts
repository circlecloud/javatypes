declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        namespace IndexDefinition {
                            /**
                             * @author Christoph Strobl
                             * @since 1.7
                             * @param <T>
                             */
                            // @ts-ignore
                            interface Condition<T> {
                                // @ts-ignore
                                matches(value: T, context: org.springframework.data.redis.core.index.IndexDefinition.IndexingContext): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
