declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The listener interface for receiving text events.
             * The class that is interested in processing a text event
             * implements this interface. The object created with that
             * class is then registered with a component using the
             * component's <code>addTextListener</code> method. When the
             * component's text changes, the listener object's
             * <code>textValueChanged</code> method is invoked.
             * @author Georges Saab
             * @see TextEvent
             * @since 1.1
             */
            // @ts-ignore
            interface TextListener extends java.util.EventListener {
                /**
                 * Invoked when the value of the text has changed.
                 * The code written for this method performs the operations
                 * that need to occur when text changes.
                 */
                // @ts-ignore
                textValueChanged(e: java.awt.event.TextEvent): void
            }
        }
    }
}
