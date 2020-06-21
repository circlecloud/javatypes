declare namespace javax {
    namespace imageio {
        namespace metadata {
            /**
             * A class representing a node in a meta-data tree, which implements
             * the <a
             * href="../../../../api/org/w3c/dom/Element.html">
             * <code>org.w3c.dom.Element</code></a> interface and additionally allows
             * for the storage of non-textual objects via the
             * <code>getUserObject</code> and <code>setUserObject</code> methods.
             * <p> This class is not intended to be used for general XML
             * processing. In particular, <code>Element</code> nodes created
             * within the Image I/O API are not compatible with those created by
             * Sun's standard implementation of the <code>org.w3.dom</code> API.
             * In particular, the implementation is tuned for simple uses and may
             * not perform well for intensive processing.
             * <p> Namespaces are ignored in this implementation.  The terms "tag
             * name" and "node name" are always considered to be synonymous.
             * <em>Note:</em>
             * The DOM Level 3 specification added a number of new methods to the
             * {@code Node}, {@code Element} and {@code Attr} interfaces that are not
             * of value to the {@code IIOMetadataNode} implementation or specification.
             * Calling such methods on an {@code IIOMetadataNode}, or an {@code Attr}
             * instance returned from an {@code IIOMetadataNode} will result in a
             * {@code DOMException} being thrown.
             * @see IIOMetadata#getAsTree
             * @see IIOMetadata#setFromTree
             * @see IIOMetadata#mergeTree
             */
            // @ts-ignore
            class IIOMetadataNode extends java.lang.Object implements org.w3c.dom.Element, org.w3c.dom.NodeList {
                /**
                 * Constructs an empty <code>IIOMetadataNode</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>IIOMetadataNode</code> with a given node
                 * name.
                 * @param nodeName the name of the node, as a <code>String</code>.
                 */
                // @ts-ignore
                constructor(nodeName: java.lang.String | string)
                /**
                 * Returns the node name associated with this node.
                 * @return the node name, as a <code>String</code>.
                 */
                // @ts-ignore
                public getNodeName(): string
                /**
                 * Returns the value associated with this node.
                 * @return the node value, as a <code>String</code>.
                 */
                // @ts-ignore
                public getNodeValue(): string
                /**
                 * Sets the <code>String</code> value associated with this node.
                 */
                // @ts-ignore
                public setNodeValue(nodeValue: java.lang.String | string): void
                /**
                 * Returns the node type, which is always
                 * <code>ELEMENT_NODE</code>.
                 * @return the <code>short</code> value <code>ELEMENT_NODE</code>.
                 */
                // @ts-ignore
                public getNodeType(): number /*short*/
                /**
                 * Returns the parent of this node.  A <code>null</code> value
                 * indicates that the node is the root of its own tree.  To add a
                 * node to an existing tree, use one of the
                 * <code>insertBefore</code>, <code>replaceChild</code>, or
                 * <code>appendChild</code> methods.
                 * @return the parent, as a <code>Node</code>.
                 * @see #insertBefore
                 * @see #replaceChild
                 * @see #appendChild
                 */
                // @ts-ignore
                public getParentNode(): org.w3c.dom.Node
                /**
                 * Returns a <code>NodeList</code> that contains all children of this node.
                 * If there are no children, this is a <code>NodeList</code> containing
                 * no nodes.
                 * @return the children as a <code>NodeList</code>
                 */
                // @ts-ignore
                public getChildNodes(): org.w3c.dom.NodeList
                /**
                 * Returns the first child of this node, or <code>null</code> if
                 * the node has no children.
                 * @return the first child, as a <code>Node</code>, or
                 *  <code>null</code>
                 */
                // @ts-ignore
                public getFirstChild(): org.w3c.dom.Node
                /**
                 * Returns the last child of this node, or <code>null</code> if
                 * the node has no children.
                 * @return the last child, as a <code>Node</code>, or
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public getLastChild(): org.w3c.dom.Node
                /**
                 * Returns the previous sibling of this node, or <code>null</code>
                 * if this node has no previous sibling.
                 * @return the previous sibling, as a <code>Node</code>, or
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public getPreviousSibling(): org.w3c.dom.Node
                /**
                 * Returns the next sibling of this node, or <code>null</code> if
                 * the node has no next sibling.
                 * @return the next sibling, as a <code>Node</code>, or
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public getNextSibling(): org.w3c.dom.Node
                /**
                 * Returns a <code>NamedNodeMap</code> containing the attributes of
                 * this node.
                 * @return a <code>NamedNodeMap</code> containing the attributes of
                 *  this node.
                 */
                // @ts-ignore
                public getAttributes(): org.w3c.dom.NamedNodeMap
                /**
                 * Returns <code>null</code>, since <code>IIOMetadataNode</code>s
                 * do not belong to any <code>Document</code>.
                 * @return <code>null</code>.
                 */
                // @ts-ignore
                public getOwnerDocument(): org.w3c.dom.Document
                /**
                 * Inserts the node <code>newChild</code> before the existing
                 * child node <code>refChild</code>. If <code>refChild</code> is
                 * <code>null</code>, insert <code>newChild</code> at the end of
                 * the list of children.
                 * @param newChild the <code>Node</code> to insert.
                 * @param refChild the reference <code>Node</code>.
                 * @return the node being inserted.
                 * @exception IllegalArgumentException if <code>newChild</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public insertBefore(newChild: org.w3c.dom.Node, refChild: org.w3c.dom.Node): org.w3c.dom.Node
                /**
                 * Replaces the child node <code>oldChild</code> with
                 * <code>newChild</code> in the list of children, and returns the
                 * <code>oldChild</code> node.
                 * @param newChild the <code>Node</code> to insert.
                 * @param oldChild the <code>Node</code> to be replaced.
                 * @return the node replaced.
                 * @exception IllegalArgumentException if <code>newChild</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public replaceChild(newChild: org.w3c.dom.Node, oldChild: org.w3c.dom.Node): org.w3c.dom.Node
                /**
                 * Removes the child node indicated by <code>oldChild</code> from
                 * the list of children, and returns it.
                 * @param oldChild the <code>Node</code> to be removed.
                 * @return the node removed.
                 * @exception IllegalArgumentException if <code>oldChild</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public removeChild(oldChild: org.w3c.dom.Node): org.w3c.dom.Node
                /**
                 * Adds the node <code>newChild</code> to the end of the list of
                 * children of this node.
                 * @param newChild the <code>Node</code> to insert.
                 * @return the node added.
                 * @exception IllegalArgumentException if <code>newChild</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public appendChild(newChild: org.w3c.dom.Node): org.w3c.dom.Node
                /**
                 * Returns <code>true</code> if this node has child nodes.
                 * @return <code>true</code> if this node has children.
                 */
                // @ts-ignore
                public hasChildNodes(): boolean
                /**
                 * Returns a duplicate of this node.  The duplicate node has no
                 * parent (<code>getParentNode</code> returns <code>null</code>).
                 * If a shallow clone is being performed (<code>deep</code> is
                 * <code>false</code>), the new node will not have any children or
                 * siblings.  If a deep clone is being performed, the new node
                 * will form the root of a complete cloned subtree.
                 * @param deep if <code>true</code>, recursively clone the subtree
                 *  under the specified node; if <code>false</code>, clone only the
                 *  node itself.
                 * @return the duplicate node.
                 */
                // @ts-ignore
                public cloneNode(deep: boolean): org.w3c.dom.Node
                /**
                 * Does nothing, since <code>IIOMetadataNode</code>s do not
                 * contain <code>Text</code> children.
                 */
                // @ts-ignore
                public normalize(): void
                /**
                 * Returns <code>false</code> since DOM features are not
                 * supported.
                 * @return <code>false</code>.
                 * @param feature a <code>String</code>, which is ignored.
                 * @param version a <code>String</code>, which is ignored.
                 */
                // @ts-ignore
                public isSupported(feature: java.lang.String | string, version: java.lang.String | string): boolean
                /**
                 * Returns <code>null</code>, since namespaces are not supported.
                 */
                // @ts-ignore
                public getNamespaceURI(): string
                /**
                 * Returns <code>null</code>, since namespaces are not supported.
                 * @return <code>null</code>.
                 * @see #setPrefix
                 */
                // @ts-ignore
                public getPrefix(): string
                /**
                 * Does nothing, since namespaces are not supported.
                 * @param prefix a <code>String</code>, which is ignored.
                 * @see #getPrefix
                 */
                // @ts-ignore
                public setPrefix(prefix: java.lang.String | string): void
                /**
                 * Equivalent to <code>getNodeName</code>.
                 * @return the node name, as a <code>String</code>.
                 */
                // @ts-ignore
                public getLocalName(): string
                /**
                 * Equivalent to <code>getNodeName</code>.
                 * @return the node name, as a <code>String</code>
                 */
                // @ts-ignore
                public getTagName(): string
                /**
                 * Retrieves an attribute value by name.
                 * @param name The name of the attribute to retrieve.
                 * @return The <code>Attr</code> value as a string, or the empty string
                 *  if that attribute does not have a specified or default value.
                 */
                // @ts-ignore
                public getAttribute(name: java.lang.String | string): string
                /**
                 * Equivalent to <code>getAttribute(localName)</code>.
                 * @see #setAttributeNS
                 */
                // @ts-ignore
                public getAttributeNS(namespaceURI: java.lang.String | string, localName: java.lang.String | string): string
                // @ts-ignore
                public setAttribute(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Equivalent to <code>setAttribute(qualifiedName, value)</code>.
                 * @see #getAttributeNS
                 */
                // @ts-ignore
                public setAttributeNS(namespaceURI: java.lang.String | string, qualifiedName: java.lang.String | string, value: java.lang.String | string): void
                // @ts-ignore
                public removeAttribute(name: java.lang.String | string): void
                /**
                 * Equivalent to <code>removeAttribute(localName)</code>.
                 */
                // @ts-ignore
                public removeAttributeNS(namespaceURI: java.lang.String | string, localName: java.lang.String | string): void
                // @ts-ignore
                public getAttributeNode(name: java.lang.String | string): org.w3c.dom.Attr
                /**
                 * Equivalent to <code>getAttributeNode(localName)</code>.
                 * @see #setAttributeNodeNS
                 */
                // @ts-ignore
                public getAttributeNodeNS(namespaceURI: java.lang.String | string, localName: java.lang.String | string): org.w3c.dom.Attr
                // @ts-ignore
                public setAttributeNode(newAttr: org.w3c.dom.Attr): org.w3c.dom.Attr
                /**
                 * Equivalent to <code>setAttributeNode(newAttr)</code>.
                 * @see #getAttributeNodeNS
                 */
                // @ts-ignore
                public setAttributeNodeNS(newAttr: org.w3c.dom.Attr): org.w3c.dom.Attr
                // @ts-ignore
                public removeAttributeNode(oldAttr: org.w3c.dom.Attr): org.w3c.dom.Attr
                // @ts-ignore
                public getElementsByTagName(name: java.lang.String | string): org.w3c.dom.NodeList
                /**
                 * Equivalent to <code>getElementsByTagName(localName)</code>.
                 */
                // @ts-ignore
                public getElementsByTagNameNS(namespaceURI: java.lang.String | string, localName: java.lang.String | string): org.w3c.dom.NodeList
                // @ts-ignore
                public hasAttributes(): boolean
                // @ts-ignore
                public hasAttribute(name: java.lang.String | string): boolean
                /**
                 * Equivalent to <code>hasAttribute(localName)</code>.
                 */
                // @ts-ignore
                public hasAttributeNS(namespaceURI: java.lang.String | string, localName: java.lang.String | string): boolean
                // @ts-ignore
                public getLength(): number /*int*/
                // @ts-ignore
                public item(index: number /*int*/): org.w3c.dom.Node
                /**
                 * Returns the <code>Object</code> value associated with this node.
                 * @return the user <code>Object</code>.
                 * @see #setUserObject
                 */
                // @ts-ignore
                public getUserObject(): any
                /**
                 * Sets the value associated with this node.
                 * @param userObject the user <code>Object</code>.
                 * @see #getUserObject
                 */
                // @ts-ignore
                public setUserObject(userObject: java.lang.Object | any): void
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public setIdAttribute(name: java.lang.String | string, isId: boolean): void
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public setIdAttributeNS(namespaceURI: java.lang.String | string, localName: java.lang.String | string, isId: boolean): void
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public setIdAttributeNode(idAttr: org.w3c.dom.Attr, isId: boolean): void
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public getSchemaTypeInfo(): org.w3c.dom.TypeInfo
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public setUserData(key: java.lang.String | string, data: java.lang.Object | any, handler: org.w3c.dom.UserDataHandler): any
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public getUserData(key: java.lang.String | string): any
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public getFeature(feature: java.lang.String | string, version: java.lang.String | string): any
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public isSameNode(node: org.w3c.dom.Node): boolean
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public isEqualNode(node: org.w3c.dom.Node): boolean
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public lookupNamespaceURI(prefix: java.lang.String | string): string
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public isDefaultNamespace(namespaceURI: java.lang.String | string): boolean
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public lookupPrefix(namespaceURI: java.lang.String | string): string
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public getTextContent(): string
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public setTextContent(textContent: java.lang.String | string): void
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public compareDocumentPosition(other: org.w3c.dom.Node): number /*short*/
                /**
                 * This DOM Level 3 method is not supported for {@code IIOMetadataNode}
                 * and will throw a {@code DOMException}.
                 * @throws DOMException - always.
                 */
                // @ts-ignore
                public getBaseURI(): string
            }
        }
    }
}
