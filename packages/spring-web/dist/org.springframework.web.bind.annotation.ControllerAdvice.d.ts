declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Specialization of {@link Component @Component} for classes that declare
                     * {@link ExceptionHandler @ExceptionHandler}, {@link InitBinder @InitBinder}, or
                     * {@link ModelAttribute @ModelAttribute} methods to be shared across
                     * multiple {@code @Controller} classes.
                     * <p>Classes annotated with {@code @ControllerAdvice} can be declared explicitly
                     * as Spring beans or auto-detected via classpath scanning. All such beans are
                     * sorted based on {@link org.springframework.core.Ordered Ordered} semantics or
                     * {@link org.springframework.core.annotation.Order @Order} /
                     * {@link javax.annotation.Priority @Priority} declarations, with {@code Ordered}
                     * semantics taking precedence over {@code @Order} / {@code @Priority} declarations.
                     * {@code @ControllerAdvice} beans are then applied in that order at runtime.
                     * Note, however, that {@code @ControllerAdvice} beans that implement
                     * {@link org.springframework.core.PriorityOrdered PriorityOrdered} are <em>not</em>
                     * given priority over {@code @ControllerAdvice} beans that implement {@code Ordered}.
                     * In addition, {@code Ordered} is not honored for scoped {@code @ControllerAdvice}
                     * beans &mdash; for example if such a bean has been configured as a request-scoped
                     * or session-scoped bean.  For handling exceptions, an {@code @ExceptionHandler}
                     * will be picked on the first advice with a matching exception handler method. For
                     * model attributes and data binding initialization, {@code @ModelAttribute} and
                     * {@code @InitBinder} methods will follow {@code @ControllerAdvice} order.
                     * <p>Note: For {@code @ExceptionHandler} methods, a root exception match will be
                     * preferred to just matching a cause of the current exception, among the handler
                     * methods of a particular advice bean. However, a cause match on a higher-priority
                     * advice will still be preferred over any match (whether root or cause level)
                     * on a lower-priority advice bean. As a consequence, please declare your primary
                     * root exception mappings on a prioritized advice bean with a corresponding order.
                     * <p>By default, the methods in an {@code @ControllerAdvice} apply globally to
                     * all controllers. Use selectors such as {@link #annotations},
                     * {@link #basePackageClasses}, and {@link #basePackages} (or its alias
                     * {@link #value}) to define a more narrow subset of targeted controllers.
                     * If multiple selectors are declared, boolean {@code OR} logic is applied, meaning
                     * selected controllers should match at least one selector. Note that selector checks
                     * are performed at runtime, so adding many selectors may negatively impact
                     * performance and add complexity.
                     * @author Rossen Stoyanchev
                     * @author Brian Clozel
                     * @author Sam Brannen
                     * @since 3.2
                     * @see org.springframework.stereotype.Controller
                     * @see RestControllerAdvice
                     */
                    // @ts-ignore
                    class ControllerAdvice implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
