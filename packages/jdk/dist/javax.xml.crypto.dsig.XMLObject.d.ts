declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * A representation of the XML <code>Object</code> element as defined in
                 * the <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                 * An <code>XMLObject</code> may contain any data and may include optional
                 * MIME type, ID, and encoding attributes. The XML Schema Definition is
                 * defined as:
                 * <pre><code>
                 * &lt;element name="Object" type="ds:ObjectType"/&gt;
                 * &lt;complexType name="ObjectType" mixed="true"&gt;
                 * &lt;sequence minOccurs="0" maxOccurs="unbounded"&gt;
                 * &lt;any namespace="##any" processContents="lax"/&gt;
                 * &lt;/sequence&gt;
                 * &lt;attribute name="Id" type="ID" use="optional"/&gt;
                 * &lt;attribute name="MimeType" type="string" use="optional"/&gt;
                 * &lt;attribute name="Encoding" type="anyURI" use="optional"/&gt;
                 * &lt;/complexType&gt;
                 * </code></pre>
                 * A <code>XMLObject</code> instance may be created by invoking the
                 * {@link XMLSignatureFactory#newXMLObject newXMLObject} method of the
                 * {@link XMLSignatureFactory} class; for example:
                 * <pre>
                 * XMLSignatureFactory fac = XMLSignatureFactory.getInstance("DOM");
                 * List content = Collections.singletonList(fac.newManifest(references)));
                 * XMLObject object = factory.newXMLObject(content, "object-1", null, null);
                 * </pre>
                 * <p>Note that this class is named <code>XMLObject</code> rather than
                 * <code>Object</code> to avoid naming clashes with the existing
                 * {@link java.lang.Object java.lang.Object} class.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @author Joyce L. Leung
                 * @since 1.6
                 * @see XMLSignatureFactory#newXMLObject(List, String, String, String)
                 */
                // @ts-ignore
                interface XMLObject extends javax.xml.crypto.XMLStructure {
                    /**
                     * URI that identifies the <code>Object</code> element (this can be
                     * specified as the value of the <code>type</code> parameter of the
                     * {@link Reference} class to identify the referent's type).
                     */
                    // @ts-ignore
                    readonly TYPE: java.lang.String | string
                    /**
                     * Returns an {@link java.util.Collections#unmodifiableList unmodifiable
                     * list} of {@link XMLStructure}s contained in this <code>XMLObject</code>,
                     * which represent elements from any namespace.
                     * <p>If there is a public subclass representing the type of
                     * <code>XMLStructure</code>, it is returned as an instance of that class
                     * (ex: a <code>SignatureProperties</code> element would be returned
                     * as an instance of {@link javax.xml.crypto.dsig.SignatureProperties}).
                     * @return an unmodifiable list of <code>XMLStructure</code>s (may be empty
                     *     but never <code>null</code>)
                     */
                    // @ts-ignore
                    getContent(): Array<any>
                    /**
                     * Returns the Id of this <code>XMLObject</code>.
                     * @return the Id (or <code>null</code> if not specified)
                     */
                    // @ts-ignore
                    getId(): string
                    /**
                     * Returns the mime type of this <code>XMLObject</code>. The
                     * mime type is an optional attribute which describes the data within this
                     * <code>XMLObject</code> (independent of its encoding).
                     * @return the mime type (or <code>null</code> if not specified)
                     */
                    // @ts-ignore
                    getMimeType(): string
                    /**
                     * Returns the encoding URI of this <code>XMLObject</code>. The encoding
                     * URI identifies the method by which the object is encoded.
                     * @return the encoding URI (or <code>null</code> if not specified)
                     */
                    // @ts-ignore
                    getEncoding(): string
                }
            }
        }
    }
}
