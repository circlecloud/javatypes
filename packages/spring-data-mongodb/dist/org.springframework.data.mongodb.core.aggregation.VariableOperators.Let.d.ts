declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace VariableOperators {
                            /**
                             * {@link AggregationExpression} for {@code $let} that binds {@link AggregationExpression} to variables for use in the
                             * specified {@code in} expression, and returns the result of the expression.
                             * @author Christoph Strobl
                             * @since 1.10
                             */
                            // @ts-ignore
                            class Let extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                /**
                                 * Start creating new {@link Let} by defining the variables for {@code $vars}.
                                 * @param variables must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static define(variables: java.util.Collection<org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable> | Array<org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable>): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.LetBuilder
                                /**
                                 * Start creating new {@link Let} by defining the variables for {@code $vars}.
                                 * @param variables must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static define(...variables: org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable[]): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.LetBuilder
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            }
                        }
                    }
                }
            }
        }
    }
}
