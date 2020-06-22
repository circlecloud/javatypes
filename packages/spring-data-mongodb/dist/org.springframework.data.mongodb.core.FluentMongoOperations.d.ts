declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Stripped down interface providing access to a fluent API that specifies a basic set of MongoDB operations.
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface FluentMongoOperations extends org.springframework.data.mongodb.core.ExecutableFindOperation, org.springframework.data.mongodb.core.ExecutableInsertOperation, org.springframework.data.mongodb.core.ExecutableUpdateOperation, org.springframework.data.mongodb.core.ExecutableRemoveOperation, org.springframework.data.mongodb.core.ExecutableAggregationOperation, org.springframework.data.mongodb.core.ExecutableMapReduceOperation {
                    }
                }
            }
        }
    }
}
