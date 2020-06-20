declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * <code>BeanContextEvent</code> is the abstract root event class
             * for all events emitted
             * from, and pertaining to the semantics of, a <code>BeanContext</code>.
             * This class introduces a mechanism to allow the propagation of
             * <code>BeanContextEvent</code> subclasses through a hierarchy of
             * <code>BeanContext</code>s. The <code>setPropagatedFrom()</code>
             * and <code>getPropagatedFrom()</code> methods allow a
             * <code>BeanContext</code> to identify itself as the source
             * of a propagated event.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.beancontext.BeanContext
             */
            // @ts-ignore
            class BeanContextEvent extends java.util.EventObject {
                /**
                 * Contruct a BeanContextEvent
                 * @param bc        The BeanContext source
                 */
                // @ts-ignore
                constructor(bc: java.beans.beancontext.BeanContext)
                /**
                 * The <code>BeanContext</code> from which this event was propagated
                 */
                // @ts-ignore
                propagatedFrom: java.beans.beancontext.BeanContext
                /**
                 * Gets the <code>BeanContext</code> associated with this event.
                 * @return the <code>BeanContext</code> associated with this event.
                 */
                // @ts-ignore
                getBeanContext(): java.beans.beancontext.BeanContext
                /**
                 * Sets the <code>BeanContext</code> from which this event was propagated.
                 * @param bc the <code>BeanContext</code> from which this event
                 *  was propagated
                 */
                // @ts-ignore
                setPropagatedFrom(bc: java.beans.beancontext.BeanContext): void
                /**
                 * Gets the <code>BeanContext</code> from which this event was propagated.
                 * @return the <code>BeanContext</code> from which this
                 *  event was propagated
                 */
                // @ts-ignore
                getPropagatedFrom(): java.beans.beancontext.BeanContext
                /**
                 * Reports whether or not this event is
                 * propagated from some other <code>BeanContext</code>.
                 * @return <code>true</code> if propagated, <code>false</code>
                 *  if not
                 */
                // @ts-ignore
                isPropagated(): boolean
            }
        }
    }
}
