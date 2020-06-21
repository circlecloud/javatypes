declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicScrollPaneUI {
                    /**
                     * MouseWheelHandler is an inner class which implements the
                     * MouseWheelListener interface.  MouseWheelHandler responds to
                     * MouseWheelEvents by scrolling the JScrollPane appropriately.
                     * If the scroll pane's
                     * <code>isWheelScrollingEnabled</code>
                     * method returns false, no scrolling occurs.
                     * @see javax.swing.JScrollPane#isWheelScrollingEnabled
                     * @see #createMouseWheelListener
                     * @see java.awt.event.MouseWheelListener
                     * @see java.awt.event.MouseWheelEvent
                     * @since 1.4
                     */
                    // @ts-ignore
                    class MouseWheelHandler extends java.lang.Object implements java.awt.event.MouseWheelListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Called when the mouse wheel is rotated while over a
                         * JScrollPane.
                         * @param e     MouseWheelEvent to be handled
                         * @since 1.4
                         */
                        // @ts-ignore
                        public mouseWheelMoved(e: java.awt.event.MouseWheelEvent): void
                    }
                }
            }
        }
    }
}
