declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboPopup {
                    /**
                     * A listener to be registered upon the combo box
                     * (<em>not</em> its popup menu)
                     * to handle mouse events
                     * that affect the state of the popup menu.
                     * The main purpose of this listener is to make the popup menu
                     * appear and disappear.
                     * This listener also helps
                     * with click-and-drag scenarios by setting the selection if the mouse was
                     * released over the list during a drag.
                     * <p>
                     * <strong>Warning:</strong>
                     * We recommend that you <em>not</em>
                     * create subclasses of this class.
                     * If you absolutely must create a subclass,
                     * be sure to invoke the superclass
                     * version of each method.
                     * @see BasicComboPopup#createMouseListener
                     */
                    // @ts-ignore
                    class InvocationMouseHandler extends java.awt.event.MouseAdapter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Responds to mouse-pressed events on the combo box.
                         * @param e the mouse-press event to be handled
                         */
                        // @ts-ignore
                        public mousePressed(e: java.awt.event.MouseEvent): void
                        /**
                         * Responds to the user terminating
                         * a click or drag that began on the combo box.
                         * @param e the mouse-release event to be handled
                         */
                        // @ts-ignore
                        public mouseReleased(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
