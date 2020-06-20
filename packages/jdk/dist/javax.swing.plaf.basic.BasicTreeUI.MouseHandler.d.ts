declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * TreeMouseListener is responsible for updating the selection
                     * based on mouse events.
                     */
                    // @ts-ignore
                    class MouseHandler extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Invoked when a mouse button has been pressed on a component.
                         */
                        // @ts-ignore
                        mousePressed(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseDragged(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the mouse button has been moved on a component
                         * (with no buttons no down).
                         * @since 1.4
                         */
                        // @ts-ignore
                        mouseMoved(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseReleased(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
