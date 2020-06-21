declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * A representation of the XML <code>Manifest</code> element as defined in
                 * the <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                 * The XML Schema Definition is defined as:
                 * <pre>{@code
                 * <element name="Manifest" type="ds:ManifestType"/>
                 * <complexType name="ManifestType">
                 * <sequence>
                 * <element ref="ds:Reference" maxOccurs="unbounded"/>
                 * </sequence>
                 * <attribute name="Id" type="ID" use="optional"/>
                 * </complexType>
                 * }</pre>
                 * A <code>Manifest</code> instance may be created by invoking
                 * one of the {@link XMLSignatureFactory#newManifest newManifest}
                 * methods of the {@link XMLSignatureFactory} class; for example:
                 * <pre>
                 * XMLSignatureFactory factory = XMLSignatureFactory.getInstance("DOM");
                 * List references = Collections.singletonList(factory.newReference
                 * ("#reference-1", DigestMethod.SHA1));
                 * Manifest manifest = factory.newManifest(references, "manifest-1");
                 * </pre>
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 * @see XMLSignatureFactory#newManifest(List)
                 * @see XMLSignatureFactory#newManifest(List, String)
                 */
                // @ts-ignore
                interface Manifest extends javax.xml.crypto.XMLStructure {
                    /**
                     * URI that identifies the <code>Manifest</code> element (this can be
                     * specified as the value of the <code>type</code> parameter of the
                     * {@link Reference} class to identify the referent's type).
                     */
                    // @ts-ignore
                    readonly TYPE: java.lang.String | string
                    /**
                     * Returns the Id of this <code>Manifest</code>.
                     * @return the Id  of this <code>Manifest</code> (or <code>null</code>
                     *     if not specified)
                     */
                    // @ts-ignore
                    getId(): string
                    /**
                     * Returns an {@link java.util.Collections#unmodifiableList unmodifiable
                     * list} of one or more {@link Reference}s that are contained in this
                     * <code>Manifest</code>.
                     * @return an unmodifiable list of one or more <code>Reference</code>s
                     */
                    // @ts-ignore
                    getReferences(): Array<any>
                }
            }
        }
    }
}
