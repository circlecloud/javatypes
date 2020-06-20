declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <p>
             * ElementIterator, as the name suggests, iterates over the Element
             * tree.  The constructor can be invoked with either Document or an Element
             * as an argument.  If the constructor is invoked with a Document as an
             * argument then the root of the iteration is the return value of
             * document.getDefaultRootElement().
             * The iteration happens in a depth-first manner.  In terms of how
             * boundary conditions are handled:
             * a) if next() is called before first() or current(), the
             * root will be returned.
             * b) next() returns null to indicate the end of the list.
             * c) previous() returns null when the current element is the root
             * or next() has returned null.
             * The ElementIterator does no locking of the Element tree. This means
             * that it does not track any changes.  It is the responsibility of the
             * user of this class, to ensure that no changes happen during element
             * iteration.
             * Simple usage example:
             * public void iterate() {
             * ElementIterator it = new ElementIterator(root);
             * Element elem;
             * while (true) {
             * if ((elem = next()) != null) {
             * // process element
             * System.out.println("elem: " + elem.getName());
             * } else {
             * break;
             * }
             * }
             * }
             * @author Sunita Mani
             */
            // @ts-ignore
            class ElementIterator extends java.lang.Object implements java.lang.Cloneable {
                /**
                 * Creates a new ElementIterator. The
                 * root element is taken to get the
                 * default root element of the document.
                 * @param document a Document.
                 */
                // @ts-ignore
                constructor(document: javax.swing.text.Document)
                /**
                 * Creates a new ElementIterator.
                 * @param root the root Element.
                 */
                // @ts-ignore
                constructor(root: javax.swing.text.Element)
                /**
                 * Clones the ElementIterator.
                 * @return a cloned ElementIterator Object.
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Fetches the first element.
                 * @return an Element.
                 */
                // @ts-ignore
                first(): javax.swing.text.Element
                /**
                 * Fetches the current depth of element tree.
                 * @return the depth.
                 */
                // @ts-ignore
                depth(): int
                /**
                 * Fetches the current Element.
                 * @return element on top of the stack or
                 *           <code>null</code> if the root element is <code>null</code>
                 */
                // @ts-ignore
                current(): javax.swing.text.Element
                /**
                 * Fetches the next Element. The strategy
                 * used to locate the next element is
                 * a depth-first search.
                 * @return the next element or <code>null</code>
                 *           at the end of the list.
                 */
                // @ts-ignore
                next(): javax.swing.text.Element
                /**
                 * Fetches the previous Element. If however the current
                 * element is the last element, or the current element
                 * is null, then null is returned.
                 * @return previous <code>Element</code> if available
                 */
                // @ts-ignore
                previous(): javax.swing.text.Element
            }
        }
    }
}
