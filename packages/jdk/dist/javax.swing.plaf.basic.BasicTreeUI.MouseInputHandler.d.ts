declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * MouseInputHandler handles passing all mouse events,
                     * including mouse motion events, until the mouse is released to
                     * the destination it is constructed with. It is assumed all the
                     * events are currently target at source.
                     */
                    // @ts-ignore
                    class MouseInputHandler extends java.lang.Object implements javax.swing.event.MouseInputListener {
                        // @ts-ignore
                        constructor(source: java.awt.Component, destination: java.awt.Component, event: java.awt.event.MouseEvent)
                        /**
                         * Source that events are coming from.
                         */
                        // @ts-ignore
                        source: java.awt.Component
                        /**
                         * Destination that receives all events.
                         */
                        // @ts-ignore
                        destination: java.awt.Component
                        // @ts-ignore
                        mouseClicked(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mousePressed(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseReleased(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseEntered(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseExited(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseDragged(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseMoved(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        removeFromSource(): void
                    }
                }
            }
        }
    }
}
