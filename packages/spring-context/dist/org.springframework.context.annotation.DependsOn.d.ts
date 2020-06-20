declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Beans on which the current bean depends. Any beans specified are guaranteed to be
                 * created by the container before this bean. Used infrequently in cases where a bean
                 * does not explicitly depend on another through properties or constructor arguments,
                 * but rather depends on the side effects of another bean's initialization.
                 * <p>A depends-on declaration can specify both an initialization-time dependency and,
                 * in the case of singleton beans only, a corresponding destruction-time dependency.
                 * Dependent beans that define a depends-on relationship with a given bean are destroyed
                 * first, prior to the given bean itself being destroyed. Thus, a depends-on declaration
                 * can also control shutdown order.
                 * <p>May be used on any class directly or indirectly annotated with
                 * {@link org.springframework.stereotype.Component} or on methods annotated
                 * with {@link Bean}.
                 * <p>Using {@link DependsOn} at the class level has no effect unless component-scanning
                 * is being used. If a {@link DependsOn}-annotated class is declared via XML,
                 * {@link DependsOn} annotation metadata is ignored, and
                 * {@code <bean depends-on="..."/>} is respected instead.
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class DependsOn implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
