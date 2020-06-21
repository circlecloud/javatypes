declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Indicates whether a bean is to be lazily initialized.
                 * <p>May be used on any class directly or indirectly annotated with {@link
                 * org.springframework.stereotype.Component @Component} or on methods annotated with
                 * {@link Bean @Bean}.
                 * <p>If this annotation is not present on a {@code @Component} or {@code @Bean} definition,
                 * eager initialization will occur. If present and set to {@code true}, the {@code @Bean} or
                 * {@code @Component} will not be initialized until referenced by another bean or explicitly
                 * retrieved from the enclosing {@link org.springframework.beans.factory.BeanFactory
                 * BeanFactory}. If present and set to {@code false}, the bean will be instantiated on
                 * startup by bean factories that perform eager initialization of singletons.
                 * <p>If Lazy is present on a {@link Configuration @Configuration} class, this
                 * indicates that all {@code @Bean} methods within that {@code @Configuration}
                 * should be lazily initialized. If {@code @Lazy} is present and false on a {@code @Bean}
                 * method within a {@code @Lazy}-annotated {@code @Configuration} class, this indicates
                 * overriding the 'default lazy' behavior and that the bean should be eagerly initialized.
                 * <p>In addition to its role for component initialization, this annotation may also be placed
                 * on injection points marked with {@link org.springframework.beans.factory.annotation.Autowired}
                 * or {@link javax.inject.Inject}: In that context, it leads to the creation of a
                 * lazy-resolution proxy for all affected dependencies, as an alternative to using
                 * {@link org.springframework.beans.factory.ObjectFactory} or {@link javax.inject.Provider}.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see Primary
                 * @see Bean
                 * @see Configuration
                 * @see org.springframework.stereotype.Component
                 */
                // @ts-ignore
                abstract class Lazy implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
