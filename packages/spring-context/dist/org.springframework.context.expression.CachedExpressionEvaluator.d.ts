declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * Shared utility class used to evaluate and cache SpEL expressions that
                 * are defined on {@link java.lang.reflect.AnnotatedElement}.
                 * @author Stephane Nicoll
                 * @since 4.2
                 * @see AnnotatedElementKey
                 */
                // @ts-ignore
                abstract class CachedExpressionEvaluator extends java.lang.Object {
                    /**
                     * Create a new instance with the specified {@link SpelExpressionParser}.
                     */
                    // @ts-ignore
                    constructor(parser: SpelExpressionParser)
                    /**
                     * Create a new instance with a default {@link SpelExpressionParser}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the {@link SpelExpressionParser} to use.
                     */
                    // @ts-ignore
                    getParser(): SpelExpressionParser
                    /**
                     * Return a shared parameter name discoverer which caches data internally.
                     * @since 4.3
                     */
                    // @ts-ignore
                    getParameterNameDiscoverer(): ParameterNameDiscoverer
                    /**
                     * Return the {@link Expression} for the specified SpEL value
                     * <p>Parse the expression if it hasn't been already.
                     * @param cache the cache to use
                     * @param elementKey the element on which the expression is defined
                     * @param expression the expression to parse
                     */
                    // @ts-ignore
                    getExpression(cache: java.util.Map<org.springframework.context.expression.CachedExpressionEvaluator.ExpressionKey, Expression>, elementKey: org.springframework.context.expression.AnnotatedElementKey, expression: java.lang.String | string): Expression
                }
            }
        }
    }
}
