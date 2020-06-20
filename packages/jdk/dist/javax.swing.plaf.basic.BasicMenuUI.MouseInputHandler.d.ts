declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicMenuUI {
                    /**
                     * Instantiated and used by a menu item to handle the current menu selection
                     * from mouse events. A MouseInputHandler processes and forwards all mouse events
                     * to a shared instance of the MenuSelectionManager.
                     * <p>
                     * This class is protected so that it can be subclassed by other look and
                     * feels to implement their own mouse handling behavior. All overridden
                     * methods should call the parent methods so that the menu selection
                     * is correct.
                     * @see javax.swing.MenuSelectionManager
                     * @since 1.4
                     */
                    // @ts-ignore
                    class MouseInputHandler extends java.lang.Object implements javax.swing.event.MouseInputListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        mouseClicked(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the mouse has been clicked on the menu. This
                         * method clears or sets the selection path of the
                         * MenuSelectionManager.
                         * @param e the mouse event
                         */
                        // @ts-ignore
                        mousePressed(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the mouse has been released on the menu. Delegates the
                         * mouse event to the MenuSelectionManager.
                         * @param e the mouse event
                         */
                        // @ts-ignore
                        mouseReleased(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the cursor enters the menu. This method sets the selected
                         * path for the MenuSelectionManager and handles the case
                         * in which a menu item is used to pop up an additional menu, as in a
                         * hierarchical menu system.
                         * @param e the mouse event; not used
                         */
                        // @ts-ignore
                        mouseEntered(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseExited(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when a mouse button is pressed on the menu and then dragged.
                         * Delegates the mouse event to the MenuSelectionManager.
                         * @param e the mouse event
                         * @see java.awt.event.MouseMotionListener#mouseDragged
                         */
                        // @ts-ignore
                        mouseDragged(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseMoved(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
