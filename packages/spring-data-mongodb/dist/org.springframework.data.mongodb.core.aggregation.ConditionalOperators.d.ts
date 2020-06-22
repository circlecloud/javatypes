declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal conditional expressions} that evaluate their argument expressions as booleans to a value.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class ConditionalOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the field referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static when(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.ConditionalOperatorFactory
                            /**
                             * Take the value resulting from the given {@literal expression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static when(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.ConditionalOperatorFactory
                            /**
                             * Take the value resulting from the given {@literal criteriaDefinition}.
                             * @param criteriaDefinition must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static when(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.ConditionalOperatorFactory
                            /**
                             * Creates new {@link AggregationExpression} that evaluates an expression and returns the value of the expression if
                             * the expression evaluates to a non-null value. If the expression evaluates to a {@literal null} value, including
                             * instances of undefined values or missing fields, returns the value of the replacement expression.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static ifNull(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull.ThenBuilder
                            /**
                             * Creates new {@link AggregationExpression} that evaluates an expression and returns the value of the expression if
                             * the expression evaluates to a non-null value. If the expression evaluates to a {@literal null} value, including
                             * instances of undefined values or missing fields, returns the value of the replacement expression.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static ifNull(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull.ThenBuilder
                            /**
                             * Creates new {@link AggregationExpression} that evaluates a series of {@link CaseOperator} expressions. When it
                             * finds an expression which evaluates to {@literal true}, {@code $switch} executes a specified expression and breaks
                             * out of the control flow.
                             * @param conditions must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static switchCases(...conditions: org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator[]): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch
                            /**
                             * Creates new {@link AggregationExpression} that evaluates a series of {@link CaseOperator} expressions. When it
                             * finds an expression which evaluates to {@literal true}, {@code $switch} executes a specified expression and breaks
                             * out of the control flow.
                             * @param conditions must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static switchCases(conditions: java.util.List<org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator> | Array<org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator>): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch
                        }
                    }
                }
            }
        }
    }
}
