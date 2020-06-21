declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLEditorKit {
                    /**
                     * Class to watch the associated component and fire
                     * hyperlink events on it when appropriate.
                     */
                    // @ts-ignore
                    class LinkController extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener, java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        /**
                         * Called for a mouse click event.
                         * If the component is read-only (ie a browser) then
                         * the clicked event is used to drive an attempt to
                         * follow the reference specified by a link.
                         * @param e the mouse event
                         * @see MouseListener#mouseClicked
                         */
                        // @ts-ignore
                        public mouseClicked(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public mouseDragged(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        public mouseMoved(e: java.awt.event.MouseEvent): void
                        /**
                         * Calls linkActivated on the associated JEditorPane
                         * if the given position represents a link.<p>This is implemented
                         * to forward to the method with the same name, but with the following
                         * args both == -1.
                         * @param pos the position
                         * @param editor the editor pane
                         */
                        // @ts-ignore
                        activateLink(pos: number /*int*/, editor: javax.swing.JEditorPane): void
                    }
                }
            }
        }
    }
}
