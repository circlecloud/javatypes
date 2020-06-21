declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface for the end element event.  An EndElement is reported
                 * for each End Tag in the document.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @see XMLEvent
                 * @since 1.6
                 */
                // @ts-ignore
                interface EndElement extends javax.xml.stream.events.XMLEvent {
                    /**
                     * Get the name of this event
                     * @return the qualified name of this event
                     */
                    // @ts-ignore
                    getName(): javax.xml.namespace.QName
                    /**
                     * Returns an Iterator of namespaces that have gone out
                     * of scope.  Returns an empty iterator if no namespaces have gone
                     * out of scope.
                     * @return an Iterator over Namespace interfaces, or an
                     *  empty iterator
                     */
                    // @ts-ignore
                    getNamespaces(): java.util.Iterator<any>
                }
            }
        }
    }
}
