declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * A single {@code condition} that must be {@linkplain #matches matched} in order
                 * for a component to be registered.
                 * <p>Conditions are checked immediately before the bean-definition is due to be
                 * registered and are free to veto registration based on any criteria that can
                 * be determined at that point.
                 * <p>Conditions must follow the same restrictions as {@link BeanFactoryPostProcessor}
                 * and take care to never interact with bean instances. For more fine-grained control
                 * of conditions that interact with {@code @Configuration} beans consider the
                 * {@link ConfigurationCondition} interface.
                 * @author Phillip Webb
                 * @since 4.0
                 * @see ConfigurationCondition
                 * @see Conditional
                 * @see ConditionContext
                 */
                // @ts-ignore
                interface Condition {
                    /**
                     * Determine if the condition matches.
                     * @param context the condition context
                     * @param metadata the metadata of the {#link org.springframework.core.type.AnnotationMetadata class}
                     *  or {@link org.springframework.core.type.MethodMetadata method} being checked
                     * @return {#code true} if the condition matches and the component can be registered,
                     *  or {@code false} to veto the annotated component's registration
                     */
                    // @ts-ignore
                    matches(context: org.springframework.context.annotation.ConditionContext, metadata: AnnotatedTypeMetadata): boolean
                }
            }
        }
    }
}
