declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BooleanOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class BooleanOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link BooleanOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link BooleanOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates one or more expressions and returns {@literal true} if
                                 * all of the expressions are {@literal true}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.And
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates one or more expressions and returns {@literal true} if
                                 * all of the expressions are {@literal true}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.And
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates one or more expressions and returns {@literal true} if
                                 * any of the expressions are {@literal true}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public or(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Or
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates one or more expressions and returns {@literal true} if
                                 * any of the expressions are {@literal true}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public or(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Or
                                /**
                                 * Creates new {@link AggregationExpression} that evaluates a boolean and returns the opposite boolean value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public not(): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Not
                            }
                        }
                    }
                }
            }
        }
    }
}
