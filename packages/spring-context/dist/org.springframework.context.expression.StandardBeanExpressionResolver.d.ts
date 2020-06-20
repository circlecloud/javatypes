declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * Standard implementation of the
                 * {@link org.springframework.beans.factory.config.BeanExpressionResolver}
                 * interface, parsing and evaluating Spring EL using Spring's expression module.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see org.springframework.expression.ExpressionParser
                 * @see org.springframework.expression.spel.standard.SpelExpressionParser
                 * @see org.springframework.expression.spel.support.StandardEvaluationContext
                 */
                // @ts-ignore
                class StandardBeanExpressionResolver extends java.lang.Object {
                    /**
                     * Create a new {@code StandardBeanExpressionResolver} with default settings.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code StandardBeanExpressionResolver} with the given bean class loader,
                     * using it as the basis for expression compilation.
                     * @param beanClassLoader the factory's bean class loader
                     */
                    // @ts-ignore
                    constructor(beanClassLoader: java.lang.ClassLoader)
                    /**
                     * Default expression prefix: "#{".
                     */
                    // @ts-ignore
                    readonly DEFAULT_EXPRESSION_PREFIX: string
                    /**
                     * Default expression suffix: "}".
                     */
                    // @ts-ignore
                    readonly DEFAULT_EXPRESSION_SUFFIX: string
                    /**
                     * Set the prefix that an expression string starts with.
                     * The default is "#{".
                     * @see #DEFAULT_EXPRESSION_PREFIX
                     */
                    // @ts-ignore
                    setExpressionPrefix(expressionPrefix: string): void
                    /**
                     * Set the suffix that an expression string ends with.
                     * The default is "}".
                     * @see #DEFAULT_EXPRESSION_SUFFIX
                     */
                    // @ts-ignore
                    setExpressionSuffix(expressionSuffix: string): void
                    /**
                     * Specify the EL parser to use for expression parsing.
                     * <p>Default is a {@link org.springframework.expression.spel.standard.SpelExpressionParser},
                     * compatible with standard Unified EL style expression syntax.
                     */
                    // @ts-ignore
                    setExpressionParser(expressionParser: ExpressionParser): void
                    // @ts-ignore
                    evaluate(value: string, evalContext: BeanExpressionContext): java.lang.Object
                    /**
                     * Template method for customizing the expression evaluation context.
                     * <p>The default implementation is empty.
                     */
                    // @ts-ignore
                    customizeEvaluationContext(evalContext: StandardEvaluationContext): void
                }
            }
        }
    }
}
