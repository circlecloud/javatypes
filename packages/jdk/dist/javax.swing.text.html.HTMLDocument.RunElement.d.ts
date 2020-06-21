declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLDocument {
                    /**
                     * An element that represents a chunk of text that has
                     * a set of HTML character level attributes assigned to
                     * it.
                     */
                    // @ts-ignore
                    class RunElement extends javax.swing.text.AbstractDocument.LeafElement {
                        /**
                         * Constructs an element that represents content within the
                         * document (has no children).
                         * @param parent  the parent element
                         * @param a       the element attributes
                         * @param offs0   the start offset (must be at least 0)
                         * @param offs1   the end offset (must be at least offs0)
                         * @since 1.4
                         */
                        // @ts-ignore
                        constructor(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet, offs0: number /*int*/, offs1: number /*int*/)
                        /**
                         * Gets the name of the element.
                         * @return the name, null if none
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Gets the resolving parent.  HTML attributes are not inherited
                         * at the model level so we override this to return null.
                         * @return null, there are none
                         * @see AttributeSet#getResolveParent
                         */
                        // @ts-ignore
                        public getResolveParent(): javax.swing.text.AttributeSet
                    }
                }
            }
        }
    }
}
