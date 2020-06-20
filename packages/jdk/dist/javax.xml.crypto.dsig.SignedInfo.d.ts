declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * An representation of the XML <code>SignedInfo</code> element as
                 * defined in the <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                 * The XML Schema Definition is defined as:
                 * <pre><code>
                 * &lt;element name="SignedInfo" type="ds:SignedInfoType"/&gt;
                 * &lt;complexType name="SignedInfoType"&gt;
                 * &lt;sequence&gt;
                 * &lt;element ref="ds:CanonicalizationMethod"/&gt;
                 * &lt;element ref="ds:SignatureMethod"/&gt;
                 * &lt;element ref="ds:Reference" maxOccurs="unbounded"/&gt;
                 * &lt;/sequence&gt;
                 * &lt;attribute name="Id" type="ID" use="optional"/&gt;
                 * &lt;/complexType&gt;
                 * </code></pre>
                 * A <code>SignedInfo</code> instance may be created by invoking one of the
                 * {@link XMLSignatureFactory#newSignedInfo newSignedInfo} methods of the
                 * {@link XMLSignatureFactory} class.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 * @see XMLSignatureFactory#newSignedInfo(CanonicalizationMethod, SignatureMethod, List)
                 * @see XMLSignatureFactory#newSignedInfo(CanonicalizationMethod, SignatureMethod, List, String)
                 */
                // @ts-ignore
                interface SignedInfo extends javax.xml.crypto.XMLStructure {
                    /**
                     * Returns the canonicalization method of this <code>SignedInfo</code>.
                     * @return the canonicalization method
                     */
                    // @ts-ignore
                    getCanonicalizationMethod(): javax.xml.crypto.dsig.CanonicalizationMethod
                    /**
                     * Returns the signature method of this <code>SignedInfo</code>.
                     * @return the signature method
                     */
                    // @ts-ignore
                    getSignatureMethod(): javax.xml.crypto.dsig.SignatureMethod
                    /**
                     * Returns an {@link java.util.Collections#unmodifiableList
                     * unmodifiable list} of one or more {@link Reference}s.
                     * @return an unmodifiable list of one or more {#link Reference}s
                     */
                    // @ts-ignore
                    getReferences(): java.util.List
                    /**
                     * Returns the optional <code>Id</code> attribute of this
                     * <code>SignedInfo</code>.
                     * @return the id (may be <code>null</code> if not specified)
                     */
                    // @ts-ignore
                    getId(): java.lang.String
                    /**
                     * Returns the canonicalized signed info bytes after a signing or
                     * validation operation. This method is useful for debugging.
                     * @return an <code>InputStream</code> containing the canonicalized bytes,
                     *     or <code>null</code> if this <code>SignedInfo</code> has not been
                     *     signed or validated yet
                     */
                    // @ts-ignore
                    getCanonicalizedData(): java.io.InputStream
                }
            }
        }
    }
}
