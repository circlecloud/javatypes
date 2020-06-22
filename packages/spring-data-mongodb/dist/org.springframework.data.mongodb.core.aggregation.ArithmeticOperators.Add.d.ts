declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * {@link AggregationExpression} for {@code $add}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Add extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                constructor(value: java.util.List<any> | Array<any>)
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Add}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                /**
                                 * Creates new {@link Add}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                /**
                                 * Creates new {@link Add}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                // @ts-ignore
                                public add(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                // @ts-ignore
                                public add(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                // @ts-ignore
                                public add(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                            }
                        }
                    }
                }
            }
        }
    }
}
