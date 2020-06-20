declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Defines a menu mouse-drag listener.
             * @author Georges Saab
             */
            // @ts-ignore
            interface MenuDragMouseListener extends java.util.EventListener {
                /**
                 * Invoked when the dragged mouse has entered a menu component's
                 * display area.
                 * @param e  a MenuDragMouseEvent object
                 */
                // @ts-ignore
                menuDragMouseEntered(e: javax.swing.event.MenuDragMouseEvent): void
                /**
                 * Invoked when the dragged mouse has left a menu component's
                 * display area.
                 * @param e  a MenuDragMouseEvent object
                 */
                // @ts-ignore
                menuDragMouseExited(e: javax.swing.event.MenuDragMouseEvent): void
                /**
                 * Invoked when the mouse is being dragged in a menu component's
                 * display area.
                 * @param e  a MenuDragMouseEvent object
                 */
                // @ts-ignore
                menuDragMouseDragged(e: javax.swing.event.MenuDragMouseEvent): void
                /**
                 * Invoked when a dragged mouse is release in a menu component's
                 * display area.
                 * @param e  a MenuDragMouseEvent object
                 */
                // @ts-ignore
                menuDragMouseReleased(e: javax.swing.event.MenuDragMouseEvent): void
            }
        }
    }
}
