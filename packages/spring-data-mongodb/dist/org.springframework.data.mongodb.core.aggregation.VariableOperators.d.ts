declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal variable} aggregation operations.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.10
                         */
                        // @ts-ignore
                        class VariableOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Starts building new {@link Map} that applies an {@link AggregationExpression} to each item of a referenced array
                             * and returns an array with the applied results.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static mapItemsOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.VariableOperators.Map.AsBuilder
                            /**
                             * Starts building new {@link Map} that applies an {@link AggregationExpression} to each item of a referenced array
                             * and returns an array with the applied results.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static mapItemsOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.VariableOperators.Map.AsBuilder
                            /**
                             * Start creating new {@link Let} that allows definition of {@link ExpressionVariable} that can be used within a
                             * nested {@link AggregationExpression}.
                             * @param variables must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static define(...variables: org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable[]): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.LetBuilder
                            /**
                             * Start creating new {@link Let} that allows definition of {@link ExpressionVariable} that can be used within a
                             * nested {@link AggregationExpression}.
                             * @param variables must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static define(variables: java.util.Collection<org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable> | Array<org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable>): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.LetBuilder
                        }
                    }
                }
            }
        }
    }
}
