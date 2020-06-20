declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Simple {@link ScopeMetadataResolver} implementation that follows JSR-330 scoping rules:
                 * defaulting to prototype scope unless {@link javax.inject.Singleton} is present.
                 * <p>This scope resolver can be used with {@link ClassPathBeanDefinitionScanner} and
                 * {@link AnnotatedBeanDefinitionReader} for standard JSR-330 compliance. However,
                 * in practice, you will typically use Spring's rich default scoping instead - or extend
                 * this resolver with custom scoping annotations that point to extended Spring scopes.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see #registerScope
                 * @see #resolveScopeName
                 * @see ClassPathBeanDefinitionScanner#setScopeMetadataResolver
                 * @see AnnotatedBeanDefinitionReader#setScopeMetadataResolver
                 */
                // @ts-ignore
                class Jsr330ScopeMetadataResolver extends java.lang.Object implements org.springframework.context.annotation.ScopeMetadataResolver {
                    // @ts-ignore
                    constructor()
                    /**
                     * Register an extended JSR-330 scope annotation, mapping it onto a
                     * specific Spring scope by name.
                     * @param annotationType the JSR-330 annotation type as a Class
                     * @param scopeName the Spring scope name
                     */
                    // @ts-ignore
                    registerScope(annotationType: java.lang.Class<any>, scopeName: string): void
                    /**
                     * Register an extended JSR-330 scope annotation, mapping it onto a
                     * specific Spring scope by name.
                     * @param annotationType the JSR-330 annotation type by name
                     * @param scopeName the Spring scope name
                     */
                    // @ts-ignore
                    registerScope(annotationType: string, scopeName: string): void
                    /**
                     * Resolve the given annotation type into a named Spring scope.
                     * <p>The default implementation simply checks against registered scopes.
                     * Can be overridden for custom mapping rules, e.g. naming conventions.
                     * @param annotationType the JSR-330 annotation type
                     * @return the Spring scope name
                     */
                    // @ts-ignore
                    resolveScopeName(annotationType: string): java.lang.String
                    // @ts-ignore
                    resolveScopeMetadata(definition: BeanDefinition): org.springframework.context.annotation.ScopeMetadata
                }
            }
        }
    }
}
