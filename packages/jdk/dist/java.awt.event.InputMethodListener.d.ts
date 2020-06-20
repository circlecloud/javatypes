declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The listener interface for receiving input method events. A text editing
             * component has to install an input method event listener in order to work
             * with input methods.
             * <p>
             * The text editing component also has to provide an instance of InputMethodRequests.
             * @author JavaSoft Asia/Pacific
             * @see InputMethodEvent
             * @see java.awt.im.InputMethodRequests
             * @since 1.2
             */
            // @ts-ignore
            interface InputMethodListener extends java.util.EventListener {
                /**
                 * Invoked when the text entered through an input method has changed.
                 */
                // @ts-ignore
                inputMethodTextChanged(event: java.awt.event.InputMethodEvent): void
                /**
                 * Invoked when the caret within composed text has changed.
                 */
                // @ts-ignore
                caretPositionChanged(event: java.awt.event.InputMethodEvent): void
            }
        }
    }
}
