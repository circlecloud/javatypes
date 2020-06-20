declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * A {@link ScopeMetadataResolver} implementation that by default checks for
                 * the presence of Spring's {@link Scope @Scope} annotation on the bean class.
                 * <p>The exact type of annotation that is checked for is configurable via
                 * {@link #setScopeAnnotationType(Class)}.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 2.5
                 * @see org.springframework.context.annotation.Scope
                 */
                // @ts-ignore
                class AnnotationScopeMetadataResolver extends java.lang.Object implements org.springframework.context.annotation.ScopeMetadataResolver {
                    /**
                     * Construct a new {@code AnnotationScopeMetadataResolver}.
                     * @see #AnnotationScopeMetadataResolver(ScopedProxyMode)
                     * @see ScopedProxyMode#NO
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new {@code AnnotationScopeMetadataResolver} using the
                     * supplied default {@link ScopedProxyMode}.
                     * @param defaultProxyMode the default scoped-proxy mode
                     */
                    // @ts-ignore
                    constructor(defaultProxyMode: org.springframework.context.annotation.ScopedProxyMode)
                    // @ts-ignore
                    scopeAnnotationType: java.lang.Class<java.lang.annotation.Annotation>
                    /**
                     * Set the type of annotation that is checked for by this
                     * {@code AnnotationScopeMetadataResolver}.
                     * @param scopeAnnotationType the target annotation type
                     */
                    // @ts-ignore
                    setScopeAnnotationType(scopeAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): void
                    // @ts-ignore
                    resolveScopeMetadata(definition: BeanDefinition): org.springframework.context.annotation.ScopeMetadata
                }
            }
        }
    }
}
