declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * {@link AggregationExpression} for {@code $zip}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Zip extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                constructor(value: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Start creating new {@link Zip}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip.ZipBuilder
                                /**
                                 * Start creating new {@link Zip}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static arrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip.ZipBuilder
                                /**
                                 * Create new {@link Zip} and set the {@code useLongestLength} property to {@literal true}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public useLongestLength(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip
                                /**
                                 * Optionally provide a default value.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public defaultTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip
                                /**
                                 * Optionally provide a default value.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public defaultTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip
                                /**
                                 * Optionally provide a default value.
                                 * @param array must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public defaultTo(array: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip
                            }
                        }
                    }
                }
            }
        }
    }
}
