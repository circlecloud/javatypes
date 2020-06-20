declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Strategy interface for resolving the scope of bean definitions.
                 * @author Mark Fisher
                 * @since 2.5
                 * @see org.springframework.context.annotation.Scope
                 */
                // @ts-ignore
                interface ScopeMetadataResolver {
                    /**
                     * Resolve the {@link ScopeMetadata} appropriate to the supplied
                     * bean {@code definition}.
                     * <p>Implementations can of course use any strategy they like to
                     * determine the scope metadata, but some implementations that spring
                     * immediately to mind might be to use source level annotations
                     * present on {@link BeanDefinition#getBeanClassName() the class} of the
                     * supplied {@code definition}, or to use metadata present in the
                     * {@link BeanDefinition#attributeNames()} of the supplied {@code definition}.
                     * @param definition the target bean definition
                     * @return the relevant scope metadata; never {#code null}
                     */
                    // @ts-ignore
                    resolveScopeMetadata(definition: BeanDefinition): org.springframework.context.annotation.ScopeMetadata
                }
            }
        }
    }
}
