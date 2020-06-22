declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexDefinition} allow to set up a blueprint for creating secondary index structures in Redis. Setting up
                         * conditions allows to define {@link Condition} that have to be passed in order to add a value to the index. This
                         * allows to fine grained tune the index structure. {@link IndexValueTransformer} gets applied to the raw value for
                         * creating the actual index entry.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface IndexDefinition {
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getKeyspace(): string
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getConditions(): Array<org.springframework.data.redis.core.index.IndexDefinition.Condition<any>>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            valueTransformer(): org.springframework.data.redis.core.index.IndexValueTransformer
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getIndexName(): string
                        }
                    }
                }
            }
        }
    }
}
