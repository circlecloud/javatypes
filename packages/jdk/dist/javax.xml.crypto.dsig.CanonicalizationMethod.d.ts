declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * A representation of the XML <code>CanonicalizationMethod</code>
                 * element as defined in the
                 * <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>. The XML
                 * Schema Definition is defined as:
                 * <p>
                 * <pre>
                 * &lt;element name="CanonicalizationMethod" type="ds:CanonicalizationMethodType"/&gt;
                 * &lt;complexType name="CanonicalizationMethodType" mixed="true"&gt;
                 * &lt;sequence&gt;
                 * &lt;any namespace="##any" minOccurs="0" maxOccurs="unbounded"/&gt;
                 * &lt;!-- (0,unbounded) elements from (1,1) namespace --&gt;
                 * &lt;/sequence&gt;
                 * &lt;attribute name="Algorithm" type="anyURI" use="required"/&gt;
                 * &lt;/complexType&gt;
                 * </pre>
                 * A <code>CanonicalizationMethod</code> instance may be created by invoking
                 * the {@link XMLSignatureFactory#newCanonicalizationMethod
                 * newCanonicalizationMethod} method of the {@link XMLSignatureFactory} class.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 * @see XMLSignatureFactory#newCanonicalizationMethod(String, C14NMethodParameterSpec)
                 */
                // @ts-ignore
                interface CanonicalizationMethod extends javax.xml.crypto.dsig.Transform {
                    /**
                     * The <a href="http://www.w3.org/TR/2001/REC-xml-c14n-20010315">Canonical
                     * XML (without comments)</a> canonicalization method algorithm URI.
                     */
                    // @ts-ignore
                    
                    /**
                     * The
                     * <a href="http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments">
                     * Canonical XML with comments</a> canonicalization method algorithm URI.
                     */
                    // @ts-ignore
                    
                    /**
                     * The <a href="http://www.w3.org/2001/10/xml-exc-c14n#">Exclusive
                     * Canonical XML (without comments)</a> canonicalization method algorithm
                     * URI.
                     */
                    // @ts-ignore
                    
                    /**
                     * The <a href="http://www.w3.org/2001/10/xml-exc-c14n#WithComments">
                     * Exclusive Canonical XML with comments</a> canonicalization method
                     * algorithm URI.
                     */
                    // @ts-ignore
                    
                    /**
                     * Returns the algorithm-specific input parameters associated with this
                     * <code>CanonicalizationMethod</code>.
                     * <p>The returned parameters can be typecast to a
                     * {@link C14NMethodParameterSpec} object.
                     * @return the algorithm-specific input parameters (may be
                     *     <code>null</code> if not specified)
                     */
                    // @ts-ignore
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
            }
        }
    }
}
