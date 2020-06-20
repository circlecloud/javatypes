declare namespace javax {
    namespace xml {
        namespace transform {
            namespace dom {
                /**
                 * Indicates the position of a node in a source DOM, intended
                 * primarily for error reporting.  To use a DOMLocator, the receiver of an
                 * error must downcast the {@link javax.xml.transform.SourceLocator}
                 * object returned by an exception. A {@link javax.xml.transform.Transformer}
                 * may use this object for purposes other than error reporting, for instance,
                 * to indicate the source node that originated a result node.
                 */
                // @ts-ignore
                interface DOMLocator extends javax.xml.transform.SourceLocator {
                    /**
                     * Return the node where the event occurred.
                     * @return The node that is the location for the event.
                     */
                    // @ts-ignore
                    getOriginatingNode(): org.w3c.dom.Node
                }
            }
        }
    }
}
