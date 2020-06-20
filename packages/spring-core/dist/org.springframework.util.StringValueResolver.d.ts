declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple strategy interface for resolving a String value.
             * Used by {@link org.springframework.beans.factory.config.ConfigurableBeanFactory}.
             * @author Juergen Hoeller
             * @since 2.5
             * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#resolveAliases
             * @see org.springframework.beans.factory.config.BeanDefinitionVisitor#BeanDefinitionVisitor(StringValueResolver)
             * @see org.springframework.beans.factory.config.PropertyPlaceholderConfigurer
             */
            // @ts-ignore
            interface StringValueResolver {
                /**
                 * Resolve the given String value, for example parsing placeholders.
                 * @param strVal the original String value (never {#code null})
                 * @return the resolved String value (may be {#code null} when resolved to a null
                 *  value), possibly the original String value itself (in case of no placeholders
                 *  to resolve or when ignoring unresolvable placeholders)
                 * @throws IllegalArgumentException in case of an unresolvable String value
                 */
                // @ts-ignore
                resolveStringValue(strVal: string): java.lang.String
            }
        }
    }
}
