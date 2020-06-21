declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Indicates that a component is only eligible for registration when all
                 * {@linkplain #value specified conditions} match.
                 * <p>A <em>condition</em> is any state that can be determined programmatically
                 * before the bean definition is due to be registered (see {@link Condition} for details).
                 * <p>The {@code @Conditional} annotation may be used in any of the following ways:
                 * <ul>
                 * <li>as a type-level annotation on any class directly or indirectly annotated with
                 * {@code @Component}, including {@link Configuration @Configuration} classes</li>
                 * <li>as a meta-annotation, for the purpose of composing custom stereotype
                 * annotations</li>
                 * <li>as a method-level annotation on any {@link Bean @Bean} method</li>
                 * </ul>
                 * <p>If a {@code @Configuration} class is marked with {@code @Conditional},
                 * all of the {@code @Bean} methods, {@link Import @Import} annotations, and
                 * {@link ComponentScan @ComponentScan} annotations associated with that
                 * class will be subject to the conditions.
                 * <p><strong>NOTE</strong>: Inheritance of {@code @Conditional} annotations
                 * is not supported; any conditions from superclasses or from overridden
                 * methods will not be considered. In order to enforce these semantics,
                 * {@code @Conditional} itself is not declared as
                 * {@link java.lang.annotation.Inherited @Inherited}; furthermore, any
                 * custom <em>composed annotation</em> that is meta-annotated with
                 * {@code @Conditional} must not be declared as {@code @Inherited}.
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @since 4.0
                 * @see Condition
                 */
                // @ts-ignore
                abstract class Conditional implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
