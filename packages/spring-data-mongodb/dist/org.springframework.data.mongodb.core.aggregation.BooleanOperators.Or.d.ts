declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BooleanOperators {
                            /**
                             * {@link AggregationExpression} for {@code $or}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Or extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Or} that evaluates one or more expressions and returns {@literal true} if any of the
                                 * expressions are {@literal true}.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static or(...expressions: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Or
                                /**
                                 * Creates new {@link Or} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public orExpression(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Or
                                /**
                                 * Creates new {@link Or} with all previously added arguments appending the given one.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public orField(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Or
                                /**
                                 * Creates new {@link Or} with all previously added arguments appending the given one.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public orValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Or
                            }
                        }
                    }
                }
            }
        }
    }
}
