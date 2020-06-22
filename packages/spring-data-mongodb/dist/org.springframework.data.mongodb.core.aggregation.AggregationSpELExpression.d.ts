declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * An {@link AggregationExpression} that renders a MongoDB Aggregation Framework expression from the AST of a
                         * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#expressions">SpEL
                         * expression</a>. <br />
                         * <br />
                         * <strong>Samples:</strong> <br />
                         * <code>
                         * <pre>
                         * // { $and: [ { $gt: [ "$qty", 100 ] }, { $lt: [ "$qty", 250 ] } ] }
                         * expressionOf("qty > 100 && qty < 250);
                         * // { $cond : { if : { $gte : [ "$a", 42 ]}, then : "answer", else : "no-answer" } }
                         * expressionOf("cond(a >= 42, 'answer', 'no-answer')");
                         * </pre>
                         * </code>
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @see SpelExpressionTransformer
                         * @since 1.10
                         */
                        // @ts-ignore
                        class AggregationSpELExpression extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                            /**
                             * Creates new {@link AggregationSpELExpression} for the given {@literal expressionString} and {@literal parameters}.
                             * @param expressionString must not be {#literal null}.
                             * @param parameters can be empty.
                             * @return 
                             */
                            // @ts-ignore
                            public static expressionOf(expressionString: java.lang.String | string, ...parameters: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.AggregationSpELExpression
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
