declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLEditorKit {
                    /**
                     * An abstract Action providing some convenience methods that may
                     * be useful in inserting HTML into an existing document.
                     * <p>NOTE: None of the convenience methods obtain a lock on the
                     * document. If you have another thread modifying the text these
                     * methods may have inconsistent behavior, or return the wrong thing.
                     */
                    // @ts-ignore
                    class HTMLTextAction extends javax.swing.text.StyledEditorKit.StyledTextAction {
                        // @ts-ignore
                        constructor(name: string)
                        /**
                         * @return HTMLDocument of <code>e</code>.
                         */
                        // @ts-ignore
                        getHTMLDocument(e: javax.swing.JEditorPane): javax.swing.text.html.HTMLDocument
                        /**
                         * @return HTMLEditorKit for <code>e</code>.
                         */
                        // @ts-ignore
                        getHTMLEditorKit(e: javax.swing.JEditorPane): javax.swing.text.html.HTMLEditorKit
                        /**
                         * Returns an array of the Elements that contain <code>offset</code>.
                         * The first elements corresponds to the root.
                         */
                        // @ts-ignore
                        getElementsAt(doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/): javax.swing.text.Element[]
                        /**
                         * Returns number of elements, starting at the deepest leaf, needed
                         * to get to an element representing <code>tag</code>. This will
                         * return -1 if no elements is found representing <code>tag</code>,
                         * or 0 if the parent of the leaf at <code>offset</code> represents
                         * <code>tag</code>.
                         */
                        // @ts-ignore
                        elementCountToTag(doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/, tag: javax.swing.text.html.HTML.Tag): int
                        /**
                         * Returns the deepest element at <code>offset</code> matching
                         * <code>tag</code>.
                         */
                        // @ts-ignore
                        findElementMatchingTag(doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/, tag: javax.swing.text.html.HTML.Tag): javax.swing.text.Element
                    }
                }
            }
        }
    }
}
