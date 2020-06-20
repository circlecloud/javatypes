declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * {@code AnnotationAwareOrderComparator} is an extension of
                 * {@link OrderComparator} that supports Spring's
                 * {@link org.springframework.core.Ordered} interface as well as the
                 * {@link Order @Order} and {@link javax.annotation.Priority @Priority}
                 * annotations, with an order value provided by an {@code Ordered}
                 * instance overriding a statically defined annotation value (if any).
                 * <p>Consult the Javadoc for {@link OrderComparator} for details on the
                 * sort semantics for non-ordered objects.
                 * @author Juergen Hoeller
                 * @author Oliver Gierke
                 * @author Stephane Nicoll
                 * @since 2.0.1
                 * @see org.springframework.core.Ordered
                 * @see org.springframework.core.annotation.Order
                 * @see javax.annotation.Priority
                 */
                // @ts-ignore
                class AnnotationAwareOrderComparator extends org.springframework.core.OrderComparator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Shared default instance of {@code AnnotationAwareOrderComparator}.
                     */
                    // @ts-ignore
                    readonly INSTANCE: org.springframework.core.annotation.AnnotationAwareOrderComparator
                    /**
                     * This implementation checks for {@link Order @Order} or
                     * {@link javax.annotation.Priority @Priority} on various kinds of
                     * elements, in addition to the {@link org.springframework.core.Ordered}
                     * check in the superclass.
                     */
                    // @ts-ignore
                    findOrder(obj: any): java.lang.Integer
                    /**
                     * This implementation retrieves an @{@link javax.annotation.Priority}
                     * value, allowing for additional semantics over the regular @{@link Order}
                     * annotation: typically, selecting one object over another in case of
                     * multiple matches but only one object to be returned.
                     */
                    // @ts-ignore
                    getPriority(obj: any): java.lang.Integer
                    /**
                     * Sort the given list with a default {@link AnnotationAwareOrderComparator}.
                     * <p>Optimized to skip sorting for lists with size 0 or 1,
                     * in order to avoid unnecessary array extraction.
                     * @param list the List to sort
                     * @see java.util.List#sort(java.util.Comparator)
                     */
                    // @ts-ignore
                    sort(list: Array<any>): void
                    /**
                     * Sort the given array with a default AnnotationAwareOrderComparator.
                     * <p>Optimized to skip sorting for lists with size 0 or 1,
                     * in order to avoid unnecessary array extraction.
                     * @param array the array to sort
                     * @see java.util.Arrays#sort(Object[], java.util.Comparator)
                     */
                    // @ts-ignore
                    sort(array: any[]): void
                    /**
                     * Sort the given array or List with a default AnnotationAwareOrderComparator,
                     * if necessary. Simply skips sorting when given any other value.
                     * <p>Optimized to skip sorting for lists with size 0 or 1,
                     * in order to avoid unnecessary array extraction.
                     * @param value the array or List to sort
                     * @see java.util.Arrays#sort(Object[], java.util.Comparator)
                     */
                    // @ts-ignore
                    sortIfNecessary(value: any): void
                }
            }
        }
    }
}
