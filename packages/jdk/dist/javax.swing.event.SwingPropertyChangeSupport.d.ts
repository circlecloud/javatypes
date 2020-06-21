declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * This subclass of {@code java.beans.PropertyChangeSupport} is almost
             * identical in functionality. The only difference is if constructed with
             * {@code SwingPropertyChangeSupport(sourceBean, true)} it ensures
             * listeners are only ever notified on the <i>Event Dispatch Thread</i>.
             * @author Igor Kushnirskiy
             */
            // @ts-ignore
            class SwingPropertyChangeSupport extends java.beans.PropertyChangeSupport {
                /**
                 * Constructs a SwingPropertyChangeSupport object.
                 * @param sourceBean  The bean to be given as the source for any
                 *         events.
                 * @throws NullPointerException if {#code sourceBean} is
                 *          {@code null}
                 */
                // @ts-ignore
                constructor(sourceBean: java.lang.Object | any)
                /**
                 * Constructs a SwingPropertyChangeSupport object.
                 * @param sourceBean the bean to be given as the source for any events
                 * @param notifyOnEDT whether to notify listeners on the <i>Event
                 *         Dispatch Thread</i> only
                 * @throws NullPointerException if {#code sourceBean} is
                 *          {@code null}
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(sourceBean: java.lang.Object | any, notifyOnEDT: boolean)
                /**
                 * {@inheritDoc}
                 * <p>
                 * If {@link #isNotifyOnEDT} is {@code true} and called off the
                 * <i>Event Dispatch Thread</i> this implementation uses
                 * {@code SwingUtilities.invokeLater} to send out the notification
                 * on the <i>Event Dispatch Thread</i>. This ensures  listeners
                 * are only ever notified on the <i>Event Dispatch Thread</i>.
                 * @throws NullPointerException if {#code evt} is
                 *          {@code null}
                 * @since 1.6
                 */
                // @ts-ignore
                public firePropertyChange(evt: java.beans.PropertyChangeEvent): void
                /**
                 * Returns {@code notifyOnEDT} property.
                 * @return {#code notifyOnEDT} property
                 * @see #SwingPropertyChangeSupport(Object sourceBean, boolean notifyOnEDT)
                 * @since 1.6
                 */
                // @ts-ignore
                public isNotifyOnEDT(): boolean
            }
        }
    }
}
