declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            /**
                             * Encapsulates the aggregation framework {@code $cond} operator. A {@link Cond} allows nested conditions
                             * {@code if-then[if-then-else]-else} using {@link Field}, {@link CriteriaDefinition}, {@link AggregationExpression}
                             * or a {@link Document custom} condition. Replacement values can be either {@link Field field references},
                             * {@link AggregationExpression expressions}, values of simple MongoDB types or values that can be converted to a
                             * simple MongoDB type.
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/cond/">https://docs.mongodb.com/manual/reference/operator/aggregation/cond/</a>
                             * @author Mark Paluch
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Cond extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                                /**
                                 * Get a builder that allows fluent creation of {@link Cond}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static newBuilder(): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.WhenBuilder
                                /**
                                 * Start creating new {@link Cond} by providing the boolean expression used in {@code if}.
                                 * @param booleanExpression must not be {#literal null}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static when(booleanExpression: Document): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.ThenBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
