declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSplitPaneDivider {
                    /**
                     * MouseHandler is responsible for converting mouse events
                     * (released, dragged...) into the appropriate DragController
                     * methods.
                     */
                    // @ts-ignore
                    class MouseHandler extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Starts the dragging session by creating the appropriate instance
                         * of DragController.
                         */
                        // @ts-ignore
                        public mousePressed(e: java.awt.event.MouseEvent): void
                        /**
                         * If dragger is not null it is messaged with completeDrag.
                         */
                        // @ts-ignore
                        public mouseReleased(e: java.awt.event.MouseEvent): void
                        /**
                         * If dragger is not null it is messaged with continueDrag.
                         */
                        // @ts-ignore
                        public mouseDragged(e: java.awt.event.MouseEvent): void
                        /**
                         * Resets the cursor based on the orientation.
                         */
                        // @ts-ignore
                        public mouseMoved(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the mouse enters a component.
                         * @param e MouseEvent describing the details of the enter event.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public mouseEntered(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the mouse exits a component.
                         * @param e MouseEvent describing the details of the exit event.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public mouseExited(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
