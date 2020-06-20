declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Defines a listener for menu events.
             * @author Georges Saab
             */
            // @ts-ignore
            interface MenuListener extends java.util.EventListener {
                /**
                 * Invoked when a menu is selected.
                 * @param e  a MenuEvent object
                 */
                // @ts-ignore
                menuSelected(e: javax.swing.event.MenuEvent): void
                /**
                 * Invoked when the menu is deselected.
                 * @param e  a MenuEvent object
                 */
                // @ts-ignore
                menuDeselected(e: javax.swing.event.MenuEvent): void
                /**
                 * Invoked when the menu is canceled.
                 * @param e  a MenuEvent object
                 */
                // @ts-ignore
                menuCanceled(e: javax.swing.event.MenuEvent): void
            }
        }
    }
}
