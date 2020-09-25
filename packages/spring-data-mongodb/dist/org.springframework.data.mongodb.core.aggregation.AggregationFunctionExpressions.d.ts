declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * An enum of supported {@link AggregationExpression}s in aggregation pipeline stages.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         * @deprecated since 1.10. Please use {#link ArithmeticOperators} and {@link ComparisonOperators} instead.
                         */
                        // @ts-ignore
                        class AggregationFunctionExpressions extends java.lang.Enum<org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions> {
                            // @ts-ignore
                            public static readonly SIZE: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly CMP: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly EQ: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly GT: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly GTE: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly LT: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly LTE: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly NE: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly SUBTRACT: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly ADD: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static readonly MULTIPLY: org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            // @ts-ignore
                            public static values(): org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AggregationFunctionExpressions
                            /**
                             * Returns an {@link AggregationExpression} build from the current {@link Enum} name and the given parameters.
                             * @param parameters must not be {#literal null}
                             * @return 
                             */
                            // @ts-ignore
                            public of(...parameters: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.AggregationExpression
                        }
                    }
                }
            }
        }
    }
}
