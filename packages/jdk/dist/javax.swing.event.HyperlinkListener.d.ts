declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * HyperlinkListener
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface HyperlinkListener extends java.util.EventListener {
                /**
                 * Called when a hypertext link is updated.
                 * @param e the event responsible for the update
                 */
                // @ts-ignore
                hyperlinkUpdate(e: javax.swing.event.HyperlinkEvent): void
            }
        }
    }
}
