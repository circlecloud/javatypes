declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@code $filter} {@link AggregationExpression} allows to select a subset of the array to return based on the
                             * specified condition.
                             * @author Christoph Strobl
                             * @since 1.10
                             */
                            // @ts-ignore
                            class Filter extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                /**
                                 * Set the {@literal field} to apply the {@code $filter} to.
                                 * @param field must not be {#literal null}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static filter(field: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.AsBuilder
                                /**
                                 * Set the {@literal field} to apply the {@code $filter} to.
                                 * @param field must not be {#literal null}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static filter(field: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.AsBuilder
                                /**
                                 * Set the {@literal values} to apply the {@code $filter} to.
                                 * @param values must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static filter(values: java.util.List<any> | Array<any>): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.AsBuilder
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            }
                        }
                    }
                }
            }
        }
    }
}
