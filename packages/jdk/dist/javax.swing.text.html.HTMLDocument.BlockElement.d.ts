declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLDocument {
                    /**
                     * An element that represents a structural <em>block</em> of
                     * HTML.
                     */
                    // @ts-ignore
                    class BlockElement extends javax.swing.text.AbstractDocument.BranchElement {
                        /**
                         * Constructs a composite element that initially contains
                         * no children.
                         * @param parent  the parent element
                         * @param a       the attributes for the element
                         * @since 1.4
                         */
                        // @ts-ignore
                        constructor(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet)
                        /**
                         * Gets the name of the element.
                         * @return the name, null if none
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Gets the resolving parent.  HTML attributes are not inherited
                         * at the model level so we override this to return null.
                         * @return null, there are none
                         * @see AttributeSet#getResolveParent
                         */
                        // @ts-ignore
                        getResolveParent(): javax.swing.text.AttributeSet
                    }
                }
            }
        }
    }
}
