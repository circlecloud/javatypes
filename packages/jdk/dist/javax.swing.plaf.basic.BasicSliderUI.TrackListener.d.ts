declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSliderUI {
                    /**
                     * Track mouse movements.
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of <code>Foo</code>.
                     */
                    // @ts-ignore
                    class TrackListener extends javax.swing.event.MouseInputAdapter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        offset: number /*int*/
                        // @ts-ignore
                        currentMouseX: number /*int*/
                        // @ts-ignore
                        currentMouseY: number /*int*/
                        // @ts-ignore
                        mouseReleased(e: java.awt.event.MouseEvent): void
                        /**
                         * If the mouse is pressed above the "thumb" component
                         * then reduce the scrollbars value by one page ("page up"),
                         * otherwise increase it by one page.  If there is no
                         * thumb then page up if the mouse is in the upper half
                         * of the track.
                         */
                        // @ts-ignore
                        mousePressed(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        shouldScroll(direction: number /*int*/): boolean
                        /**
                         * Set the models value to the position of the top/left
                         * of the thumb relative to the origin of the track.
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
