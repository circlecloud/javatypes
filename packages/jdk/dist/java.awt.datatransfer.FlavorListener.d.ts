declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * Defines an object which listens for {@link FlavorEvent}s.
             * @author Alexander Gerasimov
             * @since 1.5
             */
            // @ts-ignore
            interface FlavorListener extends java.util.EventListener {
                /**
                 * Invoked when the target {@link Clipboard} of the listener
                 * has changed its available {@link DataFlavor}s.
                 * <p>
                 * Some notifications may be redundant &#151; they are not
                 * caused by a change of the set of DataFlavors available
                 * on the clipboard.
                 * For example, if the clipboard subsystem supposes that
                 * the system clipboard's contents has been changed but it
                 * can't ascertain whether its DataFlavors have been changed
                 * because of some exceptional condition when accessing the
                 * clipboard, the notification is sent to ensure from omitting
                 * a significant notification. Ordinarily, those redundant
                 * notifications should be occasional.
                 * @param e  a <code>FlavorEvent</code> object
                 */
                // @ts-ignore
                flavorsChanged(e: java.awt.datatransfer.FlavorEvent): void
            }
        }
    }
}
