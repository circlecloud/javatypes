declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * Updates the preferred size when scrolling (if necessary).
                     */
                    // @ts-ignore
                    class ComponentHandler extends java.awt.event.ComponentAdapter implements java.awt.event.ActionListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Timer used when inside a scrollpane and the scrollbar is
                         * adjusting.
                         */
                        // @ts-ignore
                        timer: javax.swing.Timer
                        /**
                         * ScrollBar that is being adjusted.
                         */
                        // @ts-ignore
                        scrollBar: javax.swing.JScrollBar
                        // @ts-ignore
                        public componentMoved(e: java.awt.event.ComponentEvent): void
                        /**
                         * Creates, if necessary, and starts a Timer to check if need to
                         * resize the bounds.
                         */
                        // @ts-ignore
                        startTimer(): void
                        /**
                         * Returns the JScrollPane housing the JTree, or null if one isn't
                         * found.
                         */
                        // @ts-ignore
                        getScrollPane(): javax.swing.JScrollPane
                        /**
                         * Public as a result of Timer. If the scrollBar is null, or
                         * not adjusting, this stops the timer and updates the sizing.
                         */
                        // @ts-ignore
                        public actionPerformed(ae: java.awt.event.ActionEvent): void
                    }
                }
            }
        }
    }
}
