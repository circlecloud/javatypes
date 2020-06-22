declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveAggregationOperation {
                        /**
                         * Define the aggregation with pipeline stages.
                         */
                        // @ts-ignore
                        interface AggregationOperationWithAggregation<T> {
                            /**
                             * Set the aggregation to be used.
                             * @param aggregation must not be {#literal null}.
                             * @return new instance of {#link TerminatingAggregationOperation}. Never {@literal null}.
                             * @throws IllegalArgumentException if aggregation is {#literal null}.
                             */
                            // @ts-ignore
                            by(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation): org.springframework.data.mongodb.core.ReactiveAggregationOperation.TerminatingAggregationOperation<T>
                        }
                    }
                }
            }
        }
    }
}
