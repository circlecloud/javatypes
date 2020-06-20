declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A factory to create a view of some portion of document subject.
             * This is intended to enable customization of how views get
             * mapped over a document model.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface ViewFactory {
                /**
                 * Creates a view from the given structural element of a
                 * document.
                 * @param elem  the piece of the document to build a view of
                 * @return the view
                 * @see View
                 */
                // @ts-ignore
                create(elem: javax.swing.text.Element): javax.swing.text.View
            }
        }
    }
}
