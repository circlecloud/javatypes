declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicScrollBarUI {
                    /**
                     * Track mouse drags.
                     */
                    // @ts-ignore
                    class TrackListener extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        offset: number /*int*/
                        // @ts-ignore
                        currentMouseX: number /*int*/
                        // @ts-ignore
                        currentMouseY: number /*int*/
                        // @ts-ignore
                        public mouseReleased(e: java.awt.event.MouseEvent): void
                        /**
                         * If the mouse is pressed above the "thumb" component
                         * then reduce the scrollbars value by one page ("page up"),
                         * otherwise increase it by one page.  If there is no
                         * thumb then page up if the mouse is in the upper half
                         * of the track.
                         */
                        // @ts-ignore
                        public mousePressed(e: java.awt.event.MouseEvent): void
                        /**
                         * Set the models value to the position of the thumb's top of Vertical
                         * scrollbar, or the left/right of Horizontal scrollbar in
                         * left-to-right/right-to-left scrollbar relative to the origin of the
                         * track.
                         */
                        // @ts-ignore
                        public mouseDragged(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public mouseMoved(e: java.awt.event.MouseEvent): void
                        /**
                         * Invoked when the mouse exits the scrollbar.
                         * @param e MouseEvent further describing the event
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
