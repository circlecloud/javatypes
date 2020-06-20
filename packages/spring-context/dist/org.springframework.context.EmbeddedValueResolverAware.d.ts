declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Interface to be implemented by any object that wishes to be notified of a
             * {@code StringValueResolver} for the resolution of embedded definition values.
             * <p>This is an alternative to a full ConfigurableBeanFactory dependency via the
             * {@code ApplicationContextAware}/{@code BeanFactoryAware} interfaces.
             * @author Juergen Hoeller
             * @author Chris Beams
             * @since 3.0.3
             * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#resolveEmbeddedValue(String)
             * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#getBeanExpressionResolver()
             * @see org.springframework.beans.factory.config.EmbeddedValueResolver
             */
            // @ts-ignore
            interface EmbeddedValueResolverAware {
                /**
                 * Set the StringValueResolver to use for resolving embedded definition values.
                 */
                // @ts-ignore
                setEmbeddedValueResolver(resolver: StringValueResolver): void
            }
        }
    }
}
