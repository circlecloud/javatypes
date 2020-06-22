declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            /**
                             * Encapsulates the aggregation framework {@code $ifNull} operator. Replacement values can be either {@link Field
                             * field references}, {@link AggregationExpression expressions}, values of simple MongoDB types or values that can be
                             * converted to a simple MongoDB type.
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/ifNull/">https://docs.mongodb.com/manual/reference/operator/aggregation/ifNull/</a>
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class IfNull extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                /**
                                 * Creates new {@link IfNull}.
                                 * @param fieldReference the field to check for a {#literal null} value, field reference must not be {@literal null}
                                 *           .
                                 * @return 
                                 */
                                // @ts-ignore
                                public static ifNull(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull.ThenBuilder
                                /**
                                 * Creates new {@link IfNull}.
                                 * @param expression the expression to check for a {#literal null} value, field reference must not be
                                 *           {@literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static ifNull(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull.ThenBuilder
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
