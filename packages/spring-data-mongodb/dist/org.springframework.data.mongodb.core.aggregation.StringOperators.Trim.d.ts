declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * {@link AggregationExpression} for {@code $trim} which removes whitespace or the specified characters from the
                             * beginning and end of a string. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class Trim extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link Trim} using the value of the provided {@link Field fieldReference} as {@literal input} value.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link LTrim}.
                                 */
                                // @ts-ignore
                                public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Creates new {@link Trim} using the result of the provided {@link AggregationExpression} as {@literal input}
                                 * value.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Trim}.
                                 */
                                // @ts-ignore
                                public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Optional specify the character(s) to trim from the beginning.
                                 * @param chars must not be {#literal null}.
                                 * @return new instance of {#link Trim}.
                                 */
                                // @ts-ignore
                                public chars(chars: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Optional specify the reference to the {@link Field field} holding the character values to trim from the
                                 * beginning.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link Trim}.
                                 */
                                // @ts-ignore
                                public charsOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Optional specify the {@link AggregationExpression} evaluating to the character sequence to trim from the
                                 * beginning.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Trim}.
                                 */
                                // @ts-ignore
                                public charsOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Remove whitespace or the specified characters from the beginning of a string.<br />
                                 * @return new instance of {#link LTrim}.
                                 */
                                // @ts-ignore
                                public left(): org.springframework.data.mongodb.core.aggregation.StringOperators.LTrim
                                /**
                                 * Remove whitespace or the specified characters from the end of a string.<br />
                                 * @return new instance of {#link RTrim}.
                                 */
                                // @ts-ignore
                                public right(): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
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
