declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal boolean expressions} that evaluate their argument expressions as booleans and return a boolean
                         * as the result.
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class BooleanOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the array referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.BooleanOperatorFactory
                            /**
                             * Take the value resulting of the given {@link AggregationExpression}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.BooleanOperatorFactory
                            /**
                             * Creates new {@link AggregationExpression} that evaluates the boolean value of the referenced field and returns the
                             * opposite boolean value.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static not(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Not
                            /**
                             * Creates new {@link AggregationExpression} that evaluates the boolean value of {@link AggregationExpression} result
                             * and returns the opposite boolean value.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static not(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BooleanOperators.Not
                        }
                    }
                }
            }
        }
    }
}
