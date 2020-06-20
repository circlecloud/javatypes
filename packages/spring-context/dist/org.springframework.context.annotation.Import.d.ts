declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Indicates one or more <em>component classes</em> to import &mdash; typically
                 * {@link Configuration @Configuration} classes.
                 * <p>Provides functionality equivalent to the {@code <import/>} element in Spring XML.
                 * Allows for importing {@code @Configuration} classes, {@link ImportSelector} and
                 * {@link ImportBeanDefinitionRegistrar} implementations, as well as regular component
                 * classes (as of 4.2; analogous to {@link AnnotationConfigApplicationContext#register}).
                 * <p>{@code @Bean} definitions declared in imported {@code @Configuration} classes should be
                 * accessed by using {@link org.springframework.beans.factory.annotation.Autowired @Autowired}
                 * injection. Either the bean itself can be autowired, or the configuration class instance
                 * declaring the bean can be autowired. The latter approach allows for explicit, IDE-friendly
                 * navigation between {@code @Configuration} class methods.
                 * <p>May be declared at the class level or as a meta-annotation.
                 * <p>If XML or other non-{@code @Configuration} bean definition resources need to be
                 * imported, use the {@link ImportResource @ImportResource} annotation instead.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see Configuration
                 * @see ImportSelector
                 * @see ImportBeanDefinitionRegistrar
                 * @see ImportResource
                 */
                // @ts-ignore
                class Import implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
