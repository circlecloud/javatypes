declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the {@code $sample}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#sample(long)} instead of creating instances of this
                         * class directly.
                         * @author Gustavo de Geus
                         * @since 2.0
                         * @see <a href="https://docs.mongodb.com/master/reference/operator/aggregation/sample/">MongoDB Aggregation Framework:
                         *       $sample</a>
                         */
                        // @ts-ignore
                        class SampleOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * @param sampleSize number of documents to be randomly selected from its input.
                             */
                            // @ts-ignore
                            constructor(sampleSize: number /*long*/)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
