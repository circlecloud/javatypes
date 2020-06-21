declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * A representation of the XML <code>SignatureProperties</code> element as
                 * defined in the <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                 * The XML Schema Definition is defined as:
                 * <pre><code>
                 * &lt;element name="SignatureProperties" type="ds:SignaturePropertiesType"/&gt;
                 * &lt;complexType name="SignaturePropertiesType"&gt;
                 * &lt;sequence&gt;
                 * &lt;element ref="ds:SignatureProperty" maxOccurs="unbounded"/&gt;
                 * &lt;/sequence&gt;
                 * &lt;attribute name="Id" type="ID" use="optional"/&gt;
                 * &lt;/complexType&gt;
                 * </code></pre>
                 * A <code>SignatureProperties</code> instance may be created by invoking the
                 * {@link XMLSignatureFactory#newSignatureProperties newSignatureProperties}
                 * method of the {@link XMLSignatureFactory} class; for example:
                 * <pre>
                 * XMLSignatureFactory factory = XMLSignatureFactory.getInstance("DOM");
                 * SignatureProperties properties =
                 * factory.newSignatureProperties(props, "signature-properties-1");
                 * </pre>
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 * @see XMLSignatureFactory#newSignatureProperties(List, String)
                 * @see SignatureProperty
                 */
                // @ts-ignore
                interface SignatureProperties extends javax.xml.crypto.XMLStructure {
                    /**
                     * URI that identifies the <code>SignatureProperties</code> element (this
                     * can be specified as the value of the <code>type</code> parameter of the
                     * {@link Reference} class to identify the referent's type).
                     */
                    // @ts-ignore
                    readonly TYPE: java.lang.String | string
                    /**
                     * Returns the Id of this <code>SignatureProperties</code>.
                     * @return the Id of this <code>SignatureProperties</code> (or
                     *     <code>null</code> if not specified)
                     */
                    // @ts-ignore
                    getId(): string
                    /**
                     * Returns an {@link java.util.Collections#unmodifiableList unmodifiable
                     * list} of one or more {@link SignatureProperty}s that are contained in
                     * this <code>SignatureProperties</code>.
                     * @return an unmodifiable list of one or more
                     *     <code>SignatureProperty</code>s
                     */
                    // @ts-ignore
                    getProperties(): Array<any>
                }
            }
        }
    }
}
