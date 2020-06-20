declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * MenuKeyListener
             * @author Georges Saab
             */
            // @ts-ignore
            interface MenuKeyListener extends java.util.EventListener {
                /**
                 * Invoked when a key has been typed.
                 * This event occurs when a key press is followed by a key release.
                 */
                // @ts-ignore
                menuKeyTyped(e: javax.swing.event.MenuKeyEvent): void
                /**
                 * Invoked when a key has been pressed.
                 */
                // @ts-ignore
                menuKeyPressed(e: javax.swing.event.MenuKeyEvent): void
                /**
                 * Invoked when a key has been released.
                 */
                // @ts-ignore
                menuKeyReleased(e: javax.swing.event.MenuKeyEvent): void
            }
        }
    }
}
