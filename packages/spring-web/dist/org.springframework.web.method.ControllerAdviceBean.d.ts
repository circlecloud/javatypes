declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                /**
                 * Encapsulates information about an {@link ControllerAdvice @ControllerAdvice}
                 * Spring-managed bean without necessarily requiring it to be instantiated.
                 * <p>The {@link #findAnnotatedBeans(ApplicationContext)} method can be used to
                 * discover such beans. However, a {@code ControllerAdviceBean} may be created
                 * from any object, including ones without an {@code @ControllerAdvice} annotation.
                 * @author Rossen Stoyanchev
                 * @author Brian Clozel
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.2
                 */
                // @ts-ignore
                class ControllerAdviceBean extends java.lang.Object {
                    /**
                     * Create a {@code ControllerAdviceBean} using the given bean instance.
                     * @param bean the bean instance
                     */
                    // @ts-ignore
                    constructor(bean: any)
                    /**
                     * Create a {@code ControllerAdviceBean} using the given bean name and
                     * {@code BeanFactory}.
                     * @param beanName the name of the bean
                     * @param beanFactory a {#code BeanFactory} to retrieve the bean type initially
                     *  and later to resolve the actual bean
                     */
                    // @ts-ignore
                    constructor(beanName: string, beanFactory: BeanFactory)
                    /**
                     * Create a {@code ControllerAdviceBean} using the given bean name,
                     * {@code BeanFactory}, and {@link ControllerAdvice @ControllerAdvice}
                     * annotation.
                     * @param beanName the name of the bean
                     * @param beanFactory a {#code BeanFactory} to retrieve the bean type initially
                     *  and later to resolve the actual bean
                     * @param controllerAdvice the {#code @ControllerAdvice} annotation for the
                     *  bean, or {@code null} if not yet retrieved
                     * @since 5.2
                     */
                    // @ts-ignore
                    constructor(beanName: string, beanFactory: BeanFactory, controllerAdvice: org.springframework.web.bind.annotation.ControllerAdvice)
                    /**
                     * Get the order value for the contained bean.
                     * <p>As of Spring Framework 5.2, the order value is lazily retrieved using
                     * the following algorithm and cached. Note, however, that a
                     * {@link ControllerAdvice @ControllerAdvice} bean that is configured as a
                     * scoped bean &mdash; for example, as a request-scoped or session-scoped
                     * bean &mdash; will not be eagerly resolved. Consequently, {@link Ordered} is
                     * not honored for scoped {@code @ControllerAdvice} beans.
                     * <ul>
                     * <li>If the {@linkplain #resolveBean resolved bean} implements {@link Ordered},
                     * use the value returned by {@link Ordered#getOrder()}.</li>
                     * <li>If the {@linkplain #getBeanType() bean type} is known, use the value returned
                     * by {@link OrderUtils#getOrder(Class, int)} with {@link Ordered#LOWEST_PRECEDENCE}
                     * used as the default order value.</li>
                     * <li>Otherwise use {@link Ordered#LOWEST_PRECEDENCE} as the default, fallback
                     * order value.</li>
                     * </ul>
                     * @see #resolveBean()
                     */
                    // @ts-ignore
                    getOrder(): int
                    /**
                     * Return the type of the contained bean.
                     * <p>If the bean type is a CGLIB-generated class, the original user-defined
                     * class is returned.
                     */
                    // @ts-ignore
                    getBeanType(): java.lang.Class<?>
                    /**
                     * Get the bean instance for this {@code ControllerAdviceBean}, if necessary
                     * resolving the bean name through the {@link BeanFactory}.
                     * <p>As of Spring Framework 5.2, once the bean instance has been resolved it
                     * will be cached if it is a singleton, thereby avoiding repeated lookups in
                     * the {@code BeanFactory}.
                     */
                    // @ts-ignore
                    resolveBean(): java.lang.Object
                    /**
                     * Check whether the given bean type should be advised by this
                     * {@code ControllerAdviceBean}.
                     * @param beanType the type of the bean to check
                     * @since 4.0
                     * @see ControllerAdvice
                     */
                    // @ts-ignore
                    isApplicableToBeanType(beanType: java.lang.Class<any>): boolean
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Find beans annotated with {@link ControllerAdvice @ControllerAdvice} in the
                     * given {@link ApplicationContext} and wrap them as {@code ControllerAdviceBean}
                     * instances.
                     * <p>As of Spring Framework 5.2, the {@code ControllerAdviceBean} instances
                     * in the returned list are sorted using {@link OrderComparator#sort(List)}.
                     * @see #getOrder()
                     * @see OrderComparator
                     * @see Ordered
                     */
                    // @ts-ignore
                    findAnnotatedBeans(context: ApplicationContext): java.util.List<org.springframework.web.method.ControllerAdviceBean>
                }
            }
        }
    }
}
