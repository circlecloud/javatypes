declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dom {
                /**
                 * A DOM-specific {@link URIReference}. The purpose of this class is to
                 * provide additional context necessary for resolving XPointer URIs or
                 * same-document references.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 */
                // @ts-ignore
                interface DOMURIReference extends javax.xml.crypto.URIReference {
                    /**
                     * Returns the here node.
                     * @return the attribute or processing instruction node or the
                     *     parent element of the text node that directly contains the URI
                     */
                    // @ts-ignore
                    getHere(): org.w3c.dom.Node
                }
            }
        }
    }
}
