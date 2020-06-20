declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * A popup menu listener
             * @author Arnaud Weber
             */
            // @ts-ignore
            interface PopupMenuListener extends java.util.EventListener {
                /**
                 * This method is called before the popup menu becomes visible
                 */
                // @ts-ignore
                popupMenuWillBecomeVisible(e: javax.swing.event.PopupMenuEvent): void
                /**
                 * This method is called before the popup menu becomes invisible
                 * Note that a JPopupMenu can become invisible any time
                 */
                // @ts-ignore
                popupMenuWillBecomeInvisible(e: javax.swing.event.PopupMenuEvent): void
                /**
                 * This method is called when the popup menu is canceled
                 */
                // @ts-ignore
                popupMenuCanceled(e: javax.swing.event.PopupMenuEvent): void
            }
        }
    }
}
