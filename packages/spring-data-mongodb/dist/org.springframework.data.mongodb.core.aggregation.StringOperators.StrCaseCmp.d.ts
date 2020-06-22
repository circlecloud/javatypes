declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $strcasecmp}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class StrCaseCmp extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link StrCaseCmp}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                /**
                                 * Creates new {@link StrCaseCmp}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                /**
                                 * Creates new {@link StrCaseCmp}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static stringValue(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                // @ts-ignore
                                public strcasecmp(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                // @ts-ignore
                                public strcasecmpValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                // @ts-ignore
                                public strcasecmpValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                            }
                        }
                    }
                }
            }
        }
    }
}
