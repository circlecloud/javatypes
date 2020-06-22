declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $count}-operation. <br />
                         * We recommend to use the static factory method {@link Aggregation#count()} instead of creating instances of this class
                         * directly.
                         * @see <a href=
                         *       "https://docs.mongodb.com/manual/reference/operator/aggregation/count/#pipe._S_count">https://docs.mongodb.com/manual/reference/operator/aggregation/count/</a>
                         * @author Mark Paluch
                         * @since 1.10
                         */
                        // @ts-ignore
                        class CountOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link CountOperation} given the {@link fieldName} field name.
                             * @param asFieldName must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(fieldName: java.lang.String | string)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                        }
                    }
                }
            }
        }
    }
}
