declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $rtrim} which removes whitespace or the specified characters from the end
                             * of a string. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class RTrim extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link RTrim} using the value of the provided {@link Field fieldReference} as {@literal input} value.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                /**
                                 * Creates new {@link RTrim} using the result of the provided {@link AggregationExpression} as {@literal input}
                                 * value.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                /**
                                 * Optional specify the character(s) to trim from the end.
                                 * @param chars must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 */
                                // @ts-ignore
                                public chars(chars: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                /**
                                 * Optional specify the reference to the {@link Field field} holding the character values to trim from the end.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 */
                                // @ts-ignore
                                public charsOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                /**
                                 * Optional specify the {@link AggregationExpression} evaluating to the character sequence to trim from the end.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 */
                                // @ts-ignore
                                public charsOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                // @ts-ignore
                                getMongoMethod(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
