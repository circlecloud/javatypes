declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * {@link StringValueResolver} adapter for resolving placeholders and
                     * expressions against a {@link ConfigurableBeanFactory}.
                     * <p>Note that this adapter resolves expressions as well, in contrast
                     * to the {@link ConfigurableBeanFactory#resolveEmbeddedValue} method.
                     * The {@link BeanExpressionContext} used is for the plain bean factory,
                     * with no scope specified for any contextual objects to access.
                     * @author Juergen Hoeller
                     * @since 4.3
                     * @see ConfigurableBeanFactory#resolveEmbeddedValue(String)
                     * @see ConfigurableBeanFactory#getBeanExpressionResolver()
                     * @see BeanExpressionContext
                     */
                    // @ts-ignore
                    class EmbeddedValueResolver extends java.lang.Object {
                        // @ts-ignore
                        constructor(beanFactory: org.springframework.beans.factory.config.ConfigurableBeanFactory)
                        // @ts-ignore
                        resolveStringValue(strVal: string): java.lang.String
                    }
                }
            }
        }
    }
}
