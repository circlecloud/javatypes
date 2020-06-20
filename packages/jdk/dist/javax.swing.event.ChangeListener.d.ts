declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Defines an object which listens for ChangeEvents.
             * @author Jeff Dinkins
             */
            // @ts-ignore
            interface ChangeListener extends java.util.EventListener {
                /**
                 * Invoked when the target of the listener has changed its state.
                 * @param e  a ChangeEvent object
                 */
                // @ts-ignore
                stateChanged(e: javax.swing.event.ChangeEvent): void
            }
        }
    }
}
