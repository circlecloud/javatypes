declare namespace java {
    namespace awt {
        namespace event {
            /**
             * A class which extends the {@code EventListenerProxy}
             * specifically for adding an {@code AWTEventListener}
             * for a specific event mask.
             * Instances of this class can be added as {@code AWTEventListener}s
             * to a {@code Toolkit} object.
             * <p>
             * The {@code getAWTEventListeners} method of {@code Toolkit}
             * can return a mixture of {@code AWTEventListener}
             * and {@code AWTEventListenerProxy} objects.
             * @see java.awt.Toolkit
             * @see java.util.EventListenerProxy
             * @since 1.4
             */
            // @ts-ignore
            class AWTEventListenerProxy extends java.util.EventListenerProxy<java.awt.event.AWTEventListener> implements java.awt.event.AWTEventListener {
                /**
                 * Constructor which binds the {@code AWTEventListener}
                 * to a specific event mask.
                 * @param eventMask  the bitmap of event types to receive
                 * @param listener   the listener object
                 */
                // @ts-ignore
                constructor(eventMask: number /*long*/, listener: java.awt.event.AWTEventListener)
                /**
                 * Forwards the AWT event to the listener delegate.
                 * @param event  the AWT event
                 */
                // @ts-ignore
                eventDispatched(event: java.awt.AWTEvent): void
                /**
                 * Returns the event mask associated with the listener.
                 * @return the event mask associated with the listener
                 */
                // @ts-ignore
                getEventMask(): long
            }
        }
    }
}
