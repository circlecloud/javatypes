declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@code Ordered} is an interface that can be implemented by objects that
             * should be <em>orderable</em>, for example in a {@code Collection}.
             * <p>The actual {@link #getOrder() order} can be interpreted as prioritization,
             * with the first object (with the lowest order value) having the highest
             * priority.
             * <p>Note that there is also a <em>priority</em> marker for this interface:
             * {@link PriorityOrdered}. Consult the Javadoc for {@code PriorityOrdered} for
             * details on how {@code PriorityOrdered} objects are ordered relative to
             * <em>plain</em> {@link Ordered} objects.
             * <p>Consult the Javadoc for {@link OrderComparator} for details on the
             * sort semantics for non-ordered objects.
             * @author Juergen Hoeller
             * @author Sam Brannen
             * @since 07.04.2003
             * @see PriorityOrdered
             * @see OrderComparator
             * @see org.springframework.core.annotation.Order
             * @see org.springframework.core.annotation.AnnotationAwareOrderComparator
             */
            // @ts-ignore
            interface Ordered {
                /**
                 * Useful constant for the highest precedence value.
                 * @see java.lang.Integer#MIN_VALUE
                 */
                // @ts-ignore
                readonly HIGHEST_PRECEDENCE: number /*int*/
                /**
                 * Useful constant for the lowest precedence value.
                 * @see java.lang.Integer#MAX_VALUE
                 */
                // @ts-ignore
                readonly LOWEST_PRECEDENCE: number /*int*/
                /**
                 * Get the order value of this object.
                 * <p>Higher values are interpreted as lower priority. As a consequence,
                 * the object with the lowest value has the highest priority (somewhat
                 * analogous to Servlet {@code load-on-startup} values).
                 * <p>Same order values will result in arbitrary sort positions for the
                 * affected objects.
                 * @return the order value
                 * @see #HIGHEST_PRECEDENCE
                 * @see #LOWEST_PRECEDENCE
                 */
                // @ts-ignore
                getOrder(): number /*int*/
            }
        }
    }
}
