declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * An object representing an element of a SOAP message that is allowed but not
             * specifically prescribed by a SOAP specification. This interface serves as the
             * base interface for those objects that are specifically prescribed by a SOAP
             * specification.
             * <p>
             * Methods in this interface that are required to return SAAJ specific objects
             * may "silently" replace nodes in the tree as required to successfully return
             * objects of the correct type. See {@link #getChildElements()} and
             * {@link <a HREF="package-summary.html#package_description">javax.xml.soap<a>}
             * for details.
             */
            // @ts-ignore
            interface SOAPElement extends javax.xml.soap.Node, org.w3c.dom.Element {
                /**
                 * Creates a new <code>SOAPElement</code> object initialized with the
                 * given <code>Name</code> object and adds the new element to this
                 * <code>SOAPElement</code> object.
                 * <P>
                 * This method may be deprecated in a future release of SAAJ in favor of
                 * addChildElement(javax.xml.namespace.QName)
                 * @param name a <code>Name</code> object with the XML name for the
                 *         new element
                 * @return the new <code>SOAPElement</code> object that was created
                 * @exception SOAPException if there is an error in creating the
                 *                           <code>SOAPElement</code> object
                 * @see SOAPElement#addChildElement(javax.xml.namespace.QName)
                 */
                // @ts-ignore
                addChildElement(name: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                /**
                 * Creates a new <code>SOAPElement</code> object initialized with the given
                 * <code>QName</code> object and adds the new element to this <code>SOAPElement</code>
                 * object. The  <i>namespace</i>, <i>localname</i> and <i>prefix</i> of the new
                 * <code>SOAPElement</code> are all taken  from the <code>qname</code> argument.
                 * @param qname a <code>QName</code> object with the XML name for the
                 *         new element
                 * @return the new <code>SOAPElement</code> object that was created
                 * @exception SOAPException if there is an error in creating the
                 *                           <code>SOAPElement</code> object
                 * @see SOAPElement#addChildElement(Name)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                addChildElement(qname: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                /**
                 * Creates a new <code>SOAPElement</code> object initialized with the
                 * specified local name and adds the new element to this
                 * <code>SOAPElement</code> object.
                 * The new  <code>SOAPElement</code> inherits any in-scope default namespace.
                 * @param localName a <code>String</code> giving the local name for
                 *           the element
                 * @return the new <code>SOAPElement</code> object that was created
                 * @exception SOAPException if there is an error in creating the
                 *                           <code>SOAPElement</code> object
                 */
                // @ts-ignore
                addChildElement(localName: string): javax.xml.soap.SOAPElement
                /**
                 * Creates a new <code>SOAPElement</code> object initialized with the
                 * specified local name and prefix and adds the new element to this
                 * <code>SOAPElement</code> object.
                 * @param localName a <code>String</code> giving the local name for
                 *         the new element
                 * @param prefix a <code>String</code> giving the namespace prefix for
                 *         the new element
                 * @return the new <code>SOAPElement</code> object that was created
                 * @exception SOAPException if the <code>prefix</code> is not valid in the
                 *          context of this <code>SOAPElement</code> or  if there is an error in creating the
                 *                           <code>SOAPElement</code> object
                 */
                // @ts-ignore
                addChildElement(localName: string, prefix: string): javax.xml.soap.SOAPElement
                /**
                 * Creates a new <code>SOAPElement</code> object initialized with the
                 * specified local name, prefix, and URI and adds the new element to this
                 * <code>SOAPElement</code> object.
                 * @param localName a <code>String</code> giving the local name for
                 *         the new element
                 * @param prefix a <code>String</code> giving the namespace prefix for
                 *         the new element
                 * @param uri a <code>String</code> giving the URI of the namespace
                 *         to which the new element belongs
                 * @return the new <code>SOAPElement</code> object that was created
                 * @exception SOAPException if there is an error in creating the
                 *                           <code>SOAPElement</code> object
                 */
                // @ts-ignore
                addChildElement(localName: string, prefix: string, uri: string): javax.xml.soap.SOAPElement
                /**
                 * Add a <code>SOAPElement</code> as a child of this
                 * <code>SOAPElement</code> instance. The <code>SOAPElement</code>
                 * is expected to be created by a
                 * <code>SOAPFactory</code>. Callers should not rely on the
                 * element instance being added as is into the XML
                 * tree. Implementations could end up copying the content
                 * of the <code>SOAPElement</code> passed into an instance of
                 * a different <code>SOAPElement</code> implementation. For
                 * instance if <code>addChildElement()</code> is called on a
                 * <code>SOAPHeader</code>, <code>element</code> will be copied
                 * into an instance of a <code>SOAPHeaderElement</code>.
                 * <P>The fragment rooted in <code>element</code> is either added
                 * as a whole or not at all, if there was an error.
                 * <P>The fragment rooted in <code>element</code> cannot contain
                 * elements named "Envelope", "Header" or "Body" and in the SOAP
                 * namespace. Any namespace prefixes present in the fragment
                 * should be fully resolved using appropriate namespace
                 * declarations within the fragment itself.
                 * @param element the <code>SOAPElement</code> to be added as a
                 *                 new child
                 * @exception SOAPException if there was an error in adding this
                 *                           element as a child
                 * @return an instance representing the new SOAP element that was
                 *          actually added to the tree.
                 */
                // @ts-ignore
                addChildElement(element: javax.xml.soap.SOAPElement): javax.xml.soap.SOAPElement
                /**
                 * Detaches all children of this <code>SOAPElement</code>.
                 * <p>
                 * This method is useful for rolling back the construction of partially
                 * completed <code>SOAPHeaders</code> and <code>SOAPBodys</code> in
                 * preparation for sending a fault when an error condition is detected. It
                 * is also useful for recycling portions of a document within a SOAP
                 * message.
                 * @since SAAJ 1.2
                 */
                // @ts-ignore
                removeContents(): void
                /**
                 * Creates a new <code>Text</code> object initialized with the given
                 * <code>String</code> and adds it to this <code>SOAPElement</code> object.
                 * @param text a <code>String</code> object with the textual content to be added
                 * @return the <code>SOAPElement</code> object into which
                 *          the new <code>Text</code> object was inserted
                 * @exception SOAPException if there is an error in creating the
                 *                     new <code>Text</code> object or if it is not legal to
                 *                       attach it as a child to this
                 *                       <code>SOAPElement</code>
                 */
                // @ts-ignore
                addTextNode(text: string): javax.xml.soap.SOAPElement
                /**
                 * Adds an attribute with the specified name and value to this
                 * <code>SOAPElement</code> object.
                 * @param name a <code>Name</code> object with the name of the attribute
                 * @param value a <code>String</code> giving the value of the attribute
                 * @return the <code>SOAPElement</code> object into which the attribute was
                 *          inserted
                 * @exception SOAPException if there is an error in creating the
                 *                           Attribute, or it is invalid to set
                 *                                 an attribute with <code>Name</code>
                 *                                  <code>name</code> on this SOAPElement.
                 * @see SOAPElement#addAttribute(javax.xml.namespace.QName, String)
                 */
                // @ts-ignore
                addAttribute(name: javax.xml.soap.Name, value: string): javax.xml.soap.SOAPElement
                /**
                 * Adds an attribute with the specified name and value to this
                 * <code>SOAPElement</code> object.
                 * @param qname a <code>QName</code> object with the name of the attribute
                 * @param value a <code>String</code> giving the value of the attribute
                 * @return the <code>SOAPElement</code> object into which the attribute was
                 *          inserted
                 * @exception SOAPException if there is an error in creating the
                 *                           Attribute, or it is invalid to set
                 *                                 an attribute with <code>QName</code>
                 *                                 <code>qname</code> on this SOAPElement.
                 * @see SOAPElement#addAttribute(Name, String)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                addAttribute(qname: javax.xml.namespace.QName, value: string): javax.xml.soap.SOAPElement
                /**
                 * Adds a namespace declaration with the specified prefix and URI to this
                 * <code>SOAPElement</code> object.
                 * @param prefix a <code>String</code> giving the prefix of the namespace
                 * @param uri a <code>String</code> giving the uri of the namespace
                 * @return the <code>SOAPElement</code> object into which this
                 *           namespace declaration was inserted.
                 * @exception SOAPException if there is an error in creating the
                 *                           namespace
                 */
                // @ts-ignore
                addNamespaceDeclaration(prefix: string, uri: string): javax.xml.soap.SOAPElement
                /**
                 * Returns the value of the attribute with the specified name.
                 * @param name a <code>Name</code> object with the name of the attribute
                 * @return a <code>String</code> giving the value of the specified
                 *          attribute, Null if there is no such attribute
                 * @see SOAPElement#getAttributeValue(javax.xml.namespace.QName)
                 */
                // @ts-ignore
                getAttributeValue(name: javax.xml.soap.Name): java.lang.String
                /**
                 * Returns the value of the attribute with the specified qname.
                 * @param qname a <code>QName</code> object with the qname of the attribute
                 * @return a <code>String</code> giving the value of the specified
                 *          attribute, Null if there is no such attribute
                 * @see SOAPElement#getAttributeValue(Name)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                getAttributeValue(qname: javax.xml.namespace.QName): java.lang.String
                /**
                 * Returns an <code>Iterator</code> over all of the attribute
                 * <code>Name</code> objects in this
                 * <code>SOAPElement</code> object. The iterator can be used to get
                 * the attribute names, which can then be passed to the method
                 * <code>getAttributeValue</code> to retrieve the value of each
                 * attribute.
                 * @see SOAPElement#getAllAttributesAsQNames()
                 * @return an iterator over the names of the attributes
                 */
                // @ts-ignore
                getAllAttributes(): java.util.Iterator
                /**
                 * Returns an <code>Iterator</code> over all of the attributes
                 * in this <code>SOAPElement</code>  as <code>QName</code> objects.
                 * The iterator can be used to get the attribute QName, which can then
                 * be passed to the method <code>getAttributeValue</code> to retrieve
                 * the value of each attribute.
                 * @return an iterator over the QNames of the attributes
                 * @see SOAPElement#getAllAttributes()
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                getAllAttributesAsQNames(): java.util.Iterator
                /**
                 * Returns the URI of the namespace that has the given prefix.
                 * @param prefix a <code>String</code> giving the prefix of the namespace
                 *         for which to search
                 * @return a <code>String</code> with the uri of the namespace that has
                 *         the given prefix
                 */
                // @ts-ignore
                getNamespaceURI(prefix: string): java.lang.String
                /**
                 * Returns an <code>Iterator</code> over the namespace prefix
                 * <code>String</code>s declared by this element. The prefixes returned by
                 * this iterator can be passed to the method
                 * <code>getNamespaceURI</code> to retrieve the URI of each namespace.
                 * @return an iterator over the namespace prefixes in this
                 *          <code>SOAPElement</code> object
                 */
                // @ts-ignore
                getNamespacePrefixes(): java.util.Iterator
                /**
                 * Returns an <code>Iterator</code> over the namespace prefix
                 * <code>String</code>s visible to this element. The prefixes returned by
                 * this iterator can be passed to the method
                 * <code>getNamespaceURI</code> to retrieve the URI of each namespace.
                 * @return an iterator over the namespace prefixes are within scope of this
                 *          <code>SOAPElement</code> object
                 * @since SAAJ 1.2
                 */
                // @ts-ignore
                getVisibleNamespacePrefixes(): java.util.Iterator
                /**
                 * Creates a <code>QName</code> whose namespace URI is the one associated
                 * with the parameter, <code>prefix</code>, in the context of this
                 * <code>SOAPElement</code>. The remaining elements of the new
                 * <code>QName</code> are taken directly from the parameters,
                 * <code>localName</code> and <code>prefix</code>.
                 * @param localName
                 *           a <code>String</code> containing the local part of the name.
                 * @param prefix
                 *           a <code>String</code> containing the prefix for the name.
                 * @return a <code>QName</code> with the specified <code>localName</code>
                 *           and <code>prefix</code>, and with a namespace that is associated
                 *           with the <code>prefix</code> in the context of this
                 *           <code>SOAPElement</code>. This namespace will be the same as
                 *           the one that would be returned by
                 *           <code>{#link #getNamespaceURI(String)}</code> if it were given
                 *           <code>prefix</code> as it's parameter.
                 * @exception SOAPException if the <code>QName</code> cannot be created.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                createQName(localName: string, prefix: string): javax.xml.namespace.QName
                /**
                 * Returns the name of this <code>SOAPElement</code> object.
                 * @return a <code>Name</code> object with the name of this
                 *          <code>SOAPElement</code> object
                 */
                // @ts-ignore
                getElementName(): javax.xml.soap.Name
                /**
                 * Returns the qname of this <code>SOAPElement</code> object.
                 * @return a <code>QName</code> object with the qname of this
                 *          <code>SOAPElement</code> object
                 * @see SOAPElement#getElementName()
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                getElementQName(): javax.xml.namespace.QName
                /**
                 * Changes the name of this <code>Element</code> to <code>newName</code> if
                 * possible. SOAP Defined elements such as SOAPEnvelope, SOAPHeader, SOAPBody
                 * etc. cannot have their names changed using this method. Any attempt to do
                 * so will result in a  SOAPException being thrown.
                 * <P>
                 * Callers should not rely on the element instance being renamed as is.
                 * Implementations could end up copying the content of the
                 * <code>SOAPElement</code> to a renamed instance.
                 * @param newName the new name for the <code>Element</code>.
                 * @exception SOAPException if changing the name of this <code>Element</code>
                 *                           is not allowed.
                 * @return The renamed Node
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                setElementQName(newName: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                /**
                 * Removes the attribute with the specified name.
                 * @param name the <code>Name</code> object with the name of the
                 *         attribute to be removed
                 * @return <code>true</code> if the attribute was
                 *          removed successfully; <code>false</code> if it was not
                 * @see SOAPElement#removeAttribute(javax.xml.namespace.QName)
                 */
                // @ts-ignore
                removeAttribute(name: javax.xml.soap.Name): boolean
                /**
                 * Removes the attribute with the specified qname.
                 * @param qname the <code>QName</code> object with the qname of the
                 *         attribute to be removed
                 * @return <code>true</code> if the attribute was
                 *          removed successfully; <code>false</code> if it was not
                 * @see SOAPElement#removeAttribute(Name)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                removeAttribute(qname: javax.xml.namespace.QName): boolean
                /**
                 * Removes the namespace declaration corresponding to the given prefix.
                 * @param prefix a <code>String</code> giving the prefix for which
                 *         to search
                 * @return <code>true</code> if the namespace declaration was
                 *          removed successfully; <code>false</code> if it was not
                 */
                // @ts-ignore
                removeNamespaceDeclaration(prefix: string): boolean
                /**
                 * Returns an <code>Iterator</code> over all the immediate child
                 * {@link Node}s of this element. This includes <code>javax.xml.soap.Text</code>
                 * objects as well as <code>SOAPElement</code> objects.
                 * <p>
                 * Calling this method may cause child <code>Element</code>,
                 * <code>SOAPElement</code> and <code>org.w3c.dom.Text</code> nodes to be
                 * replaced by <code>SOAPElement</code>, <code>SOAPHeaderElement</code>,
                 * <code>SOAPBodyElement</code> or <code>javax.xml.soap.Text</code> nodes as
                 * appropriate for the type of this parent node. As a result the calling
                 * application must treat any existing references to these child nodes that
                 * have been obtained through DOM APIs as invalid and either discard them or
                 * refresh them with the values returned by this <code>Iterator</code>. This
                 * behavior can be avoided by calling the equivalent DOM APIs. See
                 * {@link <a HREF="package-summary.html#package_description">javax.xml.soap<a>}
                 * for more details.
                 * @return an iterator with the content of this <code>SOAPElement</code>
                 *          object
                 */
                // @ts-ignore
                getChildElements(): java.util.Iterator
                /**
                 * Returns an <code>Iterator</code> over all the immediate child
                 * {@link Node}s of this element with the specified name. All of these
                 * children will be <code>SOAPElement</code> nodes.
                 * <p>
                 * Calling this method may cause child <code>Element</code>,
                 * <code>SOAPElement</code> and <code>org.w3c.dom.Text</code> nodes to be
                 * replaced by <code>SOAPElement</code>, <code>SOAPHeaderElement</code>,
                 * <code>SOAPBodyElement</code> or <code>javax.xml.soap.Text</code> nodes as
                 * appropriate for the type of this parent node. As a result the calling
                 * application must treat any existing references to these child nodes that
                 * have been obtained through DOM APIs as invalid and either discard them or
                 * refresh them with the values returned by this <code>Iterator</code>. This
                 * behavior can be avoided by calling the equivalent DOM APIs. See
                 * {@link <a HREF="package-summary.html#package_description">javax.xml.soap<a>}
                 * for more details.
                 * @param name a <code>Name</code> object with the name of the child
                 *         elements to be returned
                 * @return an <code>Iterator</code> object over all the elements
                 *          in this <code>SOAPElement</code> object with the
                 *          specified name
                 * @see SOAPElement#getChildElements(javax.xml.namespace.QName)
                 */
                // @ts-ignore
                getChildElements(name: javax.xml.soap.Name): java.util.Iterator
                /**
                 * Returns an <code>Iterator</code> over all the immediate child
                 * {@link Node}s of this element with the specified qname. All of these
                 * children will be <code>SOAPElement</code> nodes.
                 * <p>
                 * Calling this method may cause child <code>Element</code>,
                 * <code>SOAPElement</code> and <code>org.w3c.dom.Text</code> nodes to be
                 * replaced by <code>SOAPElement</code>, <code>SOAPHeaderElement</code>,
                 * <code>SOAPBodyElement</code> or <code>javax.xml.soap.Text</code> nodes as
                 * appropriate for the type of this parent node. As a result the calling
                 * application must treat any existing references to these child nodes that
                 * have been obtained through DOM APIs as invalid and either discard them or
                 * refresh them with the values returned by this <code>Iterator</code>. This
                 * behavior can be avoided by calling the equivalent DOM APIs. See
                 * {@link <a HREF="package-summary.html#package_description">javax.xml.soap<a>}
                 * for more details.
                 * @param qname a <code>QName</code> object with the qname of the child
                 *         elements to be returned
                 * @return an <code>Iterator</code> object over all the elements
                 *          in this <code>SOAPElement</code> object with the
                 *          specified qname
                 * @see SOAPElement#getChildElements(Name)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                getChildElements(qname: javax.xml.namespace.QName): java.util.Iterator
                /**
                 * Sets the encoding style for this <code>SOAPElement</code> object
                 * to one specified.
                 * @param encodingStyle a <code>String</code> giving the encoding style
                 * @exception IllegalArgumentException if there was a problem in the
                 *             encoding style being set.
                 * @exception SOAPException if setting the encodingStyle is invalid for this SOAPElement.
                 * @see #getEncodingStyle
                 */
                // @ts-ignore
                setEncodingStyle(encodingStyle: string): void
                /**
                 * Returns the encoding style for this <code>SOAPElement</code> object.
                 * @return a <code>String</code> giving the encoding style
                 * @see #setEncodingStyle
                 */
                // @ts-ignore
                getEncodingStyle(): java.lang.String
            }
        }
    }
}
