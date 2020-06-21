declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicDesktopIconUI {
                    /**
                     * Listens for mouse movements and acts on them.
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of {@code BasicDesktopIconUI}.
                     */
                    // @ts-ignore
                    class MouseInputHandler extends javax.swing.event.MouseInputAdapter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public mouseReleased(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public mousePressed(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public mouseMoved(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public mouseDragged(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public moveAndRepaint(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/, newWidth: number /*int*/, newHeight: number /*int*/): void
                    }
                }
            }
        }
    }
}
