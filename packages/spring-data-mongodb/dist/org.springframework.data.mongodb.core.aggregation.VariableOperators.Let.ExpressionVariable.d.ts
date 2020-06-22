declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace VariableOperators {
                            namespace Let {
                                /**
                                 * @author Christoph Strobl
                                 */
                                // @ts-ignore
                                class ExpressionVariable extends java.lang.Object {
                                    /**
                                     * Create a new {@link ExpressionVariable} with given name.
                                     * @param variableName must not be {#literal null}.
                                     * @return never {#literal null}.
                                     */
                                    // @ts-ignore
                                    public static newVariable(variableName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable
                                    /**
                                     * Create a new {@link ExpressionVariable} with current name and given {@literal expression}.
                                     * @param expression must not be {#literal null}.
                                     * @return never {#literal null}.
                                     */
                                    // @ts-ignore
                                    public forExpression(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable
                                    /**
                                     * Create a new {@link ExpressionVariable} with current name and given {@literal expressionObject}.
                                     * @param expressionObject must not be {#literal null}.
                                     * @return never {#literal null}.
                                     */
                                    // @ts-ignore
                                    public forExpression(expressionObject: Document): org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
