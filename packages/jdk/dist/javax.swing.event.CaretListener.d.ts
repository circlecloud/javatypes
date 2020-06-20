declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Listener for changes in the caret position of a text
             * component.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface CaretListener extends java.util.EventListener {
                /**
                 * Called when the caret position is updated.
                 * @param e the caret event
                 */
                // @ts-ignore
                caretUpdate(e: javax.swing.event.CaretEvent): void
            }
        }
    }
}
