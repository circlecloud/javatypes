declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * When used as a type-level annotation in conjunction with
                 * {@link org.springframework.stereotype.Component @Component},
                 * {@code @Scope} indicates the name of a scope to use for instances of
                 * the annotated type.
                 * <p>When used as a method-level annotation in conjunction with
                 * {@link Bean @Bean}, {@code @Scope} indicates the name of a scope to use
                 * for the instance returned from the method.
                 * <p><b>NOTE:</b> {@code @Scope} annotations are only introspected on the
                 * concrete bean class (for annotated components) or the factory method
                 * (for {@code @Bean} methods). In contrast to XML bean definitions,
                 * there is no notion of bean definition inheritance, and inheritance
                 * hierarchies at the class level are irrelevant for metadata purposes.
                 * <p>In this context, <em>scope</em> means the lifecycle of an instance,
                 * such as {@code singleton}, {@code prototype}, and so forth. Scopes
                 * provided out of the box in Spring may be referred to using the
                 * {@code SCOPE_*} constants available in the {@link ConfigurableBeanFactory}
                 * and {@code WebApplicationContext} interfaces.
                 * <p>To register additional custom scopes, see
                 * {@link org.springframework.beans.factory.config.CustomScopeConfigurer
                 * CustomScopeConfigurer}.
                 * @author Mark Fisher
                 * @author Chris Beams
                 * @author Sam Brannen
                 * @since 2.5
                 * @see org.springframework.stereotype.Component
                 * @see org.springframework.context.annotation.Bean
                 */
                // @ts-ignore
                abstract class Scope implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
