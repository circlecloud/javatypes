declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableAggregationOperation {
                        /**
                         * Define the aggregation with pipeline stages.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface AggregationWithAggregation<T> {
                            /**
                             * Set the aggregation to be used.
                             * @param aggregation must not be {#literal null}.
                             * @return new instance of {#link TerminatingAggregation}.
                             * @throws IllegalArgumentException if aggregation is {#literal null}.
                             */
                            // @ts-ignore
                            by(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation): org.springframework.data.mongodb.core.ExecutableAggregationOperation.TerminatingAggregation<T>
                        }
                    }
                }
            }
        }
    }
}
