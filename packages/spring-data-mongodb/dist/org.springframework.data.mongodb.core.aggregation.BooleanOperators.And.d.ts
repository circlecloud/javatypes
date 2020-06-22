declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BooleanOperators {
                            /**
                             * {@link AggregationExpression} for {@code $and}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class And extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link And} that evaluates one or more expressions and returns {@literal true} if all of the
                                 * expressions are {@literal true}.
                                 * @param expressions
                                 * @return 
                                 */
                                // @ts-ignore
                                public static and(...expressions: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.BooleanOperators.And
                                /**
                                 * Creates new {@link And} with all previously added arguments appending the given one.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public andExpression(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.And
                                /**
                                 * Creates new {@link And} with all previously added arguments appending the given one.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public andField(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.And
                                /**
                                 * Creates new {@link And} with all previously added arguments appending the given one.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public andValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.BooleanOperators.And
                            }
                        }
                    }
                }
            }
        }
    }
}
