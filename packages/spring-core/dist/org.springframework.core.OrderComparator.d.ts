declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@link Comparator} implementation for {@link Ordered} objects, sorting
             * by order value ascending, respectively by priority descending.
             * <h3>{@code PriorityOrdered} Objects</h3>
             * <p>{@link PriorityOrdered} objects will be sorted with higher priority than
             * <em>plain</em> {@code Ordered} objects.
             * <h3>Same Order Objects</h3>
             * <p>Objects that have the same order value will be sorted with arbitrary
             * ordering with respect to other objects with the same order value.
             * <h3>Non-ordered Objects</h3>
             * <p>Any object that does not provide its own order value is implicitly
             * assigned a value of {@link Ordered#LOWEST_PRECEDENCE}, thus ending up
             * at the end of a sorted collection in arbitrary order with respect to
             * other objects with the same order value.
             * @author Juergen Hoeller
             * @author Sam Brannen
             * @since 07.04.2003
             * @see Ordered
             * @see PriorityOrdered
             * @see org.springframework.core.annotation.AnnotationAwareOrderComparator
             * @see java.util.List#sort(java.util.Comparator)
             * @see java.util.Arrays#sort(Object[], java.util.Comparator)
             */
            // @ts-ignore
            class OrderComparator extends java.lang.Object implements java.util.Comparator<java.lang.Object | any> {
                // @ts-ignore
                constructor()
                /**
                 * Shared default instance of {@code OrderComparator}.
                 */
                // @ts-ignore
                public static readonly INSTANCE: org.springframework.core.OrderComparator
                /**
                 * Build an adapted order comparator with the given source provider.
                 * @param sourceProvider the order source provider to use
                 * @return the adapted comparator
                 * @since 4.1
                 */
                // @ts-ignore
                public withSourceProvider(sourceProvider: org.springframework.core.OrderComparator.OrderSourceProvider): java.util.Comparator<java.lang.Object | any>
                // @ts-ignore
                public compare(o1: java.lang.Object | any, o2: java.lang.Object | any): number /*int*/
                /**
                 * Determine the order value for the given object.
                 * <p>The default implementation checks against the {@link Ordered} interface
                 * through delegating to {@link #findOrder}. Can be overridden in subclasses.
                 * @param obj the object to check
                 * @return the order value, or {#code Ordered.LOWEST_PRECEDENCE} as fallback
                 */
                // @ts-ignore
                getOrder(obj: java.lang.Object | any): number /*int*/
                /**
                 * Find an order value indicated by the given object.
                 * <p>The default implementation checks against the {@link Ordered} interface.
                 * Can be overridden in subclasses.
                 * @param obj the object to check
                 * @return the order value, or {#code null} if none found
                 */
                // @ts-ignore
                findOrder(obj: java.lang.Object | any): number
                /**
                 * Determine a priority value for the given object, if any.
                 * <p>The default implementation always returns {@code null}.
                 * Subclasses may override this to give specific kinds of values a
                 * 'priority' characteristic, in addition to their 'order' semantics.
                 * A priority indicates that it may be used for selecting one object over
                 * another, in addition to serving for ordering purposes in a list/array.
                 * @param obj the object to check
                 * @return the priority value, or {#code null} if none
                 * @since 4.1
                 */
                // @ts-ignore
                public getPriority(obj: java.lang.Object | any): number
                /**
                 * Sort the given List with a default OrderComparator.
                 * <p>Optimized to skip sorting for lists with size 0 or 1,
                 * in order to avoid unnecessary array extraction.
                 * @param list the List to sort
                 * @see java.util.List#sort(java.util.Comparator)
                 */
                // @ts-ignore
                public static sort(list: java.util.List<any> | Array<any>): void
                /**
                 * Sort the given array with a default OrderComparator.
                 * <p>Optimized to skip sorting for lists with size 0 or 1,
                 * in order to avoid unnecessary array extraction.
                 * @param array the array to sort
                 * @see java.util.Arrays#sort(Object[], java.util.Comparator)
                 */
                // @ts-ignore
                public static sort(array: java.lang.Object[] | any[]): void
                /**
                 * Sort the given array or List with a default OrderComparator,
                 * if necessary. Simply skips sorting when given any other value.
                 * <p>Optimized to skip sorting for lists with size 0 or 1,
                 * in order to avoid unnecessary array extraction.
                 * @param value the array or List to sort
                 * @see java.util.Arrays#sort(Object[], java.util.Comparator)
                 */
                // @ts-ignore
                public static sortIfNecessary(value: java.lang.Object | any): void
            }
        }
    }
}
