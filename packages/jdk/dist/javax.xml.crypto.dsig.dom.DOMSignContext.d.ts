declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace dom {
                    /**
                     * A DOM-specific {@link XMLSignContext}. This class contains additional methods
                     * to specify the location in a DOM tree where an {@link XMLSignature}
                     * object is to be marshalled when generating the signature.
                     * <p>Note that <code>DOMSignContext</code> instances can contain
                     * information and state specific to the XML signature structure it is
                     * used with. The results are unpredictable if a
                     * <code>DOMSignContext</code> is used with different signature structures
                     * (for example, you should not use the same <code>DOMSignContext</code>
                     * instance to sign two different {@link XMLSignature} objects).
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     */
                    // @ts-ignore
                    class DOMSignContext extends javax.xml.crypto.dom.DOMCryptoContext implements javax.xml.crypto.dsig.XMLSignContext {
                        /**
                         * Creates a <code>DOMSignContext</code> with the specified signing key
                         * and parent node. The signing key is stored in a
                         * {@link KeySelector#singletonKeySelector singleton KeySelector} that is
                         * returned by the {@link #getKeySelector getKeySelector} method.
                         * The marshalled <code>XMLSignature</code> will be added as the last
                         * child element of the specified parent node unless a next sibling node is
                         * specified by invoking the {@link #setNextSibling setNextSibling} method.
                         * @param signingKey the signing key
                         * @param parent the parent node
                         * @throws NullPointerException if <code>signingKey</code> or
                         *     <code>parent</code> is <code>null</code>
                         */
                        // @ts-ignore
                        constructor(signingKey: java.security.Key, parent: org.w3c.dom.Node)
                        /**
                         * Creates a <code>DOMSignContext</code> with the specified signing key,
                         * parent and next sibling nodes. The signing key is stored in a
                         * {@link KeySelector#singletonKeySelector singleton KeySelector} that is
                         * returned by the {@link #getKeySelector getKeySelector} method.
                         * The marshalled <code>XMLSignature</code> will be inserted as a child
                         * element of the specified parent node and immediately before the
                         * specified next sibling node.
                         * @param signingKey the signing key
                         * @param parent the parent node
                         * @param nextSibling the next sibling node
                         * @throws NullPointerException if <code>signingKey</code>,
                         *     <code>parent</code> or <code>nextSibling</code> is <code>null</code>
                         */
                        // @ts-ignore
                        constructor(signingKey: java.security.Key, parent: org.w3c.dom.Node, nextSibling: org.w3c.dom.Node)
                        /**
                         * Creates a <code>DOMSignContext</code> with the specified key selector
                         * and parent node. The marshalled <code>XMLSignature</code> will be added
                         * as the last child element of the specified parent node unless a next
                         * sibling node is specified by invoking the
                         * {@link #setNextSibling setNextSibling} method.
                         * @param ks the key selector
                         * @param parent the parent node
                         * @throws NullPointerException if <code>ks</code> or <code>parent</code>
                         *     is <code>null</code>
                         */
                        // @ts-ignore
                        constructor(ks: javax.xml.crypto.KeySelector, parent: org.w3c.dom.Node)
                        /**
                         * Creates a <code>DOMSignContext</code> with the specified key selector,
                         * parent and next sibling nodes. The marshalled <code>XMLSignature</code>
                         * will be inserted as a child element of the specified parent node and
                         * immediately before the specified next sibling node.
                         * @param ks the key selector
                         * @param parent the parent node
                         * @param nextSibling the next sibling node
                         * @throws NullPointerException if <code>ks</code>, <code>parent</code> or
                         *     <code>nextSibling</code> is <code>null</code>
                         */
                        // @ts-ignore
                        constructor(ks: javax.xml.crypto.KeySelector, parent: org.w3c.dom.Node, nextSibling: org.w3c.dom.Node)
                        /**
                         * Sets the parent node.
                         * @param parent the parent node. The marshalled <code>XMLSignature</code>
                         *     will be added as a child element of this node.
                         * @throws NullPointerException if <code>parent</code> is <code>null</code>
                         * @see #getParent
                         */
                        // @ts-ignore
                        setParent(parent: org.w3c.dom.Node): void
                        /**
                         * Sets the next sibling node.
                         * @param nextSibling the next sibling node. The marshalled
                         *     <code>XMLSignature</code> will be inserted immediately before this
                         *     node. Specify <code>null</code> to remove the current setting.
                         * @see #getNextSibling
                         */
                        // @ts-ignore
                        setNextSibling(nextSibling: org.w3c.dom.Node): void
                        /**
                         * Returns the parent node.
                         * @return the parent node (never <code>null</code>)
                         * @see #setParent(Node)
                         */
                        // @ts-ignore
                        getParent(): org.w3c.dom.Node
                        /**
                         * Returns the nextSibling node.
                         * @return the nextSibling node, or <code>null</code> if not specified.
                         * @see #setNextSibling(Node)
                         */
                        // @ts-ignore
                        getNextSibling(): org.w3c.dom.Node
                    }
                }
            }
        }
    }
}
