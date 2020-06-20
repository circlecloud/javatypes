declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The listener interface for receiving keyboard focus events on
             * a component.
             * The class that is interested in processing a focus event
             * either implements this interface (and all the methods it
             * contains) or extends the abstract <code>FocusAdapter</code> class
             * (overriding only the methods of interest).
             * The listener object created from that class is then registered with a
             * component using the component's <code>addFocusListener</code>
             * method. When the component gains or loses the keyboard focus,
             * the relevant method in the listener object
             * is invoked, and the <code>FocusEvent</code> is passed to it.
             * @see FocusAdapter
             * @see FocusEvent
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/focuslistener.html">Tutorial: Writing a Focus Listener</a>
             * @author Carl Quinn
             * @since 1.1
             */
            // @ts-ignore
            interface FocusListener extends java.util.EventListener {
                /**
                 * Invoked when a component gains the keyboard focus.
                 */
                // @ts-ignore
                focusGained(e: java.awt.event.FocusEvent): void
                /**
                 * Invoked when a component loses the keyboard focus.
                 */
                // @ts-ignore
                focusLost(e: java.awt.event.FocusEvent): void
            }
        }
    }
}
