declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The listener interface for receiving action events.
             * The class that is interested in processing an action event
             * implements this interface, and the object created with that
             * class is registered with a component, using the component's
             * <code>addActionListener</code> method. When the action event
             * occurs, that object's <code>actionPerformed</code> method is
             * invoked.
             * @see ActionEvent
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/actionlistener.html">How to Write an Action Listener</a>
             * @author Carl Quinn
             * @since 1.1
             */
            // @ts-ignore
            interface ActionListener extends java.util.EventListener {
                /**
                 * Invoked when an action occurs.
                 */
                // @ts-ignore
                actionPerformed(e: java.awt.event.ActionEvent): void
            }
        }
    }
}
