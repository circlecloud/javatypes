declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace dom {
                    /**
                     * A DOM-specific {@link XMLValidateContext}. This class contains additional
                     * methods to specify the location in a DOM tree where an {@link XMLSignature}
                     * is to be unmarshalled and validated from.
                     * <p>Note that the behavior of an unmarshalled <code>XMLSignature</code>
                     * is undefined if the contents of the underlying DOM tree are modified by the
                     * caller after the <code>XMLSignature</code> is created.
                     * <p>Also, note that <code>DOMValidateContext</code> instances can contain
                     * information and state specific to the XML signature structure it is
                     * used with. The results are unpredictable if a
                     * <code>DOMValidateContext</code> is used with different signature structures
                     * (for example, you should not use the same <code>DOMValidateContext</code>
                     * instance to validate two different {@link XMLSignature} objects).
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see XMLSignatureFactory#unmarshalXMLSignature(XMLValidateContext)
                     */
                    // @ts-ignore
                    class DOMValidateContext extends javax.xml.crypto.dom.DOMCryptoContext implements javax.xml.crypto.dsig.XMLValidateContext {
                        /**
                         * Creates a <code>DOMValidateContext</code> containing the specified key
                         * selector and node.
                         * @param ks a key selector for finding a validation key
                         * @param node the node
                         * @throws NullPointerException if <code>ks</code> or <code>node</code> is
                         *     <code>null</code>
                         */
                        // @ts-ignore
                        constructor(ks: javax.xml.crypto.KeySelector, node: org.w3c.dom.Node)
                        /**
                         * Creates a <code>DOMValidateContext</code> containing the specified key
                         * and node. The validating key will be stored in a
                         * {@link KeySelector#singletonKeySelector singleton KeySelector} that
                         * is returned when the {@link #getKeySelector getKeySelector}
                         * method is called.
                         * @param validatingKey the validating key
                         * @param node the node
                         * @throws NullPointerException if <code>validatingKey</code> or
                         *     <code>node</code> is <code>null</code>
                         */
                        // @ts-ignore
                        constructor(validatingKey: java.security.Key, node: org.w3c.dom.Node)
                        /**
                         * Sets the node.
                         * @param node the node
                         * @throws NullPointerException if <code>node</code> is <code>null</code>
                         * @see #getNode
                         */
                        // @ts-ignore
                        public setNode(node: org.w3c.dom.Node): void
                        /**
                         * Returns the node.
                         * @return the node (never <code>null</code>)
                         * @see #setNode(Node)
                         */
                        // @ts-ignore
                        public getNode(): org.w3c.dom.Node
                    }
                }
            }
        }
    }
}
