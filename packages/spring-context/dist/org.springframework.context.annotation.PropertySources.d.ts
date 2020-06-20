declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Container annotation that aggregates several {@link PropertySource} annotations.
                 * <p>Can be used natively, declaring several nested {@link PropertySource} annotations.
                 * Can also be used in conjunction with Java 8's support for <em>repeatable annotations</em>,
                 * where {@link PropertySource} can simply be declared several times on the same
                 * {@linkplain ElementType#TYPE type}, implicitly generating this container annotation.
                 * @author Phillip Webb
                 * @since 4.0
                 * @see PropertySource
                 */
                // @ts-ignore
                class PropertySources implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
