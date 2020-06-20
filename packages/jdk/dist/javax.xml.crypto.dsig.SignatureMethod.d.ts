declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * A representation of the XML <code>SignatureMethod</code> element
                 * as defined in the <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                 * The XML Schema Definition is defined as:
                 * <p>
                 * <pre>
                 * &lt;element name="SignatureMethod" type="ds:SignatureMethodType"/&gt;
                 * &lt;complexType name="SignatureMethodType" mixed="true"&gt;
                 * &lt;sequence&gt;
                 * &lt;element name="HMACOutputLength" minOccurs="0" type="ds:HMACOutputLengthType"/&gt;
                 * &lt;any namespace="##any" minOccurs="0" maxOccurs="unbounded"/&gt;
                 * &lt;!-- (0,unbounded) elements from (1,1) namespace --&gt;
                 * &lt;/sequence&gt;
                 * &lt;attribute name="Algorithm" type="anyURI" use="required"/&gt;
                 * &lt;/complexType&gt;
                 * </pre>
                 * A <code>SignatureMethod</code> instance may be created by invoking the
                 * {@link XMLSignatureFactory#newSignatureMethod newSignatureMethod} method
                 * of the {@link XMLSignatureFactory} class.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 * @see XMLSignatureFactory#newSignatureMethod(String, SignatureMethodParameterSpec)
                 */
                // @ts-ignore
                interface SignatureMethod extends javax.xml.crypto.XMLStructure, javax.xml.crypto.AlgorithmMethod {
                    /**
                     * The <a href="http://www.w3.org/2000/09/xmldsig#dsa-sha1">DSAwithSHA1</a>
                     * (DSS) signature method algorithm URI.
                     */
                    // @ts-ignore
                    
                    /**
                     * The <a href="http://www.w3.org/2000/09/xmldsig#rsa-sha1">RSAwithSHA1</a>
                     * (PKCS #1) signature method algorithm URI.
                     */
                    // @ts-ignore
                    
                    /**
                     * The <a href="http://www.w3.org/2000/09/xmldsig#hmac-sha1">HMAC-SHA1</a>
                     * MAC signature method algorithm URI
                     */
                    // @ts-ignore
                    
                    /**
                     * Returns the algorithm-specific input parameters of this
                     * <code>SignatureMethod</code>.
                     * <p>The returned parameters can be typecast to a {@link
                     * SignatureMethodParameterSpec} object.
                     * @return the algorithm-specific input parameters of this
                     *     <code>SignatureMethod</code> (may be <code>null</code> if not
                     *     specified)
                     */
                    // @ts-ignore
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
            }
        }
    }
}
