declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * {@code @Order} defines the sort order for an annotated component.
                 * <p>The {@link #value} is optional and represents an order value as defined in the
                 * {@link Ordered} interface. Lower values have higher priority. The default value is
                 * {@code Ordered.LOWEST_PRECEDENCE}, indicating lowest priority (losing to any other
                 * specified order value).
                 * <p><b>NOTE:</b> Since Spring 4.0, annotation-based ordering is supported for many
                 * kinds of components in Spring, even for collection injection where the order values
                 * of the target components are taken into account (either from their target class or
                 * from their {@code @Bean} method). While such order values may influence priorities
                 * at injection points, please be aware that they do not influence singleton startup
                 * order which is an orthogonal concern determined by dependency relationships and
                 * {@code @DependsOn} declarations (influencing a runtime-determined dependency graph).
                 * <p>Since Spring 4.1, the standard {@link javax.annotation.Priority} annotation
                 * can be used as a drop-in replacement for this annotation in ordering scenarios.
                 * Note that {@code @Priority} may have additional semantics when a single element
                 * has to be picked (see {@link AnnotationAwareOrderComparator#getPriority}).
                 * <p>Alternatively, order values may also be determined on a per-instance basis
                 * through the {@link Ordered} interface, allowing for configuration-determined
                 * instance values instead of hard-coded values attached to a particular class.
                 * <p>Consult the javadoc for {@link org.springframework.core.OrderComparator
                 * OrderComparator} for details on the sort semantics for non-ordered objects.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see org.springframework.core.Ordered
                 * @see AnnotationAwareOrderComparator
                 * @see OrderUtils
                 * @see javax.annotation.Priority
                 */
                // @ts-ignore
                class Order implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
