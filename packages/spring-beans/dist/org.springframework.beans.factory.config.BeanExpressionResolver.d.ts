declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Strategy interface for resolving a value through evaluating it
                     * as an expression, if applicable.
                     * <p>A raw {@link org.springframework.beans.factory.BeanFactory} does not
                     * contain a default implementation of this strategy. However,
                     * {@link org.springframework.context.ApplicationContext} implementations
                     * will provide expression support out of the box.
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    interface BeanExpressionResolver {
                        /**
                         * Evaluate the given value as an expression, if applicable;
                         * return the value as-is otherwise.
                         * @param value the value to check
                         * @param evalContext the evaluation context
                         * @return the resolved value (potentially the given value as-is)
                         * @throws BeansException if evaluation failed
                         */
                        // @ts-ignore
                        evaluate(value: string, evalContext: org.springframework.beans.factory.config.BeanExpressionContext): java.lang.Object
                    }
                }
            }
        }
    }
}
