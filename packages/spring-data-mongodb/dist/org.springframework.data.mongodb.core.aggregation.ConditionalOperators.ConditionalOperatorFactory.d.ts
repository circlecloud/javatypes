declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            // @ts-ignore
                            class ConditionalOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link ConditionalOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link ConditionalOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link ConditionalOperatorFactory} for given {@link CriteriaDefinition}.
                                 * @param criteriaDefinition must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition)
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates a boolean expression to return one of the two specified
                                 * return expressions.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public then(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.OtherwiseBuilder
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates a boolean expression to return one of the two specified
                                 * return expressions.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public thenValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.OtherwiseBuilder
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates a boolean expression to return one of the two specified
                                 * return expressions.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public thenValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.OtherwiseBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
