declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $replaceRoot}-operation. <br />
                         * We recommend to use the static factory method {@link Aggregation#replaceRoot(String)} instead of creating instances
                         * of this class directly.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.10
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/replaceRoot/">MongoDB Aggregation Framework: $replaceRoot</a>
                         */
                        // @ts-ignore
                        class ReplaceRootOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link ReplaceRootOperation} given the {@link Field} field name.
                             * @param field must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(field: org.springframework.data.mongodb.core.aggregation.Field)
                            /**
                             * Creates a new {@link ReplaceRootOperation} given the {@link AggregationExpression} pointing to a document.
                             * @param aggregationExpression must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(aggregationExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                            /**
                             * Creates a new {@link ReplaceRootOperation} given the {@link Replacement}.
                             * @param replacement must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(replacement: org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation.Replacement)
                            /**
                             * Creates a new {@link ReplaceRootDocumentOperationBuilder}.
                             * @return a new {#link ReplaceRootDocumentOperationBuilder}.
                             */
                            // @ts-ignore
                            public static builder(): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation.ReplaceRootOperationBuilder
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
