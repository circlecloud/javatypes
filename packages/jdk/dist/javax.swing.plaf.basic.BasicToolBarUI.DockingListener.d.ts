declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicToolBarUI {
                    /**
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of BasicToolBarUI.
                     */
                    // @ts-ignore
                    class DockingListener extends java.lang.Object implements javax.swing.event.MouseInputListener {
                        // @ts-ignore
                        constructor(t: javax.swing.JToolBar)
                        // @ts-ignore
                        toolBar: javax.swing.JToolBar
                        // @ts-ignore
                        isDragging: boolean
                        // @ts-ignore
                        origin: java.awt.Point
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
                    }
                }
            }
        }
    }
}
