declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Stripped down interface providing access to a fluent API that specifies a basic set of reactive MongoDB operations.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveFluentMongoOperations extends org.springframework.data.mongodb.core.ReactiveFindOperation, org.springframework.data.mongodb.core.ReactiveInsertOperation, org.springframework.data.mongodb.core.ReactiveUpdateOperation, org.springframework.data.mongodb.core.ReactiveRemoveOperation, org.springframework.data.mongodb.core.ReactiveAggregationOperation, org.springframework.data.mongodb.core.ReactiveMapReduceOperation {
                    }
                }
            }
        }
    }
}
