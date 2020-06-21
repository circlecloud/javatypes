declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * A representation of the XML <code>Transform</code> element as
                 * defined in the <a href="http://www.w3.org/TR/xmldsig-core/">
                 * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                 * The XML Schema Definition is defined as:
                 * <pre>
                 * &lt;element name="Transform" type="ds:TransformType"/&gt;
                 * &lt;complexType name="TransformType" mixed="true"&gt;
                 * &lt;choice minOccurs="0" maxOccurs="unbounded"&gt;
                 * &lt;any namespace="##other" processContents="lax"/&gt;
                 * &lt;!-- (1,1) elements from (0,unbounded) namespaces --&gt;
                 * &lt;element name="XPath" type="string"/&gt;
                 * &lt;/choice&gt;
                 * &lt;attribute name="Algorithm" type="anyURI" use="required"/&gt;
                 * &lt;/complexType&gt;
                 * </pre>
                 * A <code>Transform</code> instance may be created by invoking the
                 * {@link XMLSignatureFactory#newTransform newTransform} method
                 * of the {@link XMLSignatureFactory} class.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 * @see XMLSignatureFactory#newTransform(String, TransformParameterSpec)
                 */
                // @ts-ignore
                interface Transform extends javax.xml.crypto.XMLStructure, javax.xml.crypto.AlgorithmMethod {
                    /**
                     * The <a href="http://www.w3.org/2000/09/xmldsig#base64">Base64</a>
                     * transform algorithm URI.
                     */
                    // @ts-ignore
                    readonly BASE64: java.lang.String | string
                    /**
                     * The <a href="http://www.w3.org/2000/09/xmldsig#enveloped-signature">
                     * Enveloped Signature</a> transform algorithm URI.
                     */
                    // @ts-ignore
                    readonly ENVELOPED: java.lang.String | string
                    /**
                     * The <a href="http://www.w3.org/TR/1999/REC-xpath-19991116">XPath</a>
                     * transform algorithm URI.
                     */
                    // @ts-ignore
                    readonly XPATH: java.lang.String | string
                    /**
                     * The <a href="http://www.w3.org/2002/06/xmldsig-filter2">
                     * XPath Filter 2</a> transform algorithm URI.
                     */
                    // @ts-ignore
                    readonly XPATH2: java.lang.String | string
                    /**
                     * The <a href="http://www.w3.org/TR/1999/REC-xslt-19991116">XSLT</a>
                     * transform algorithm URI.
                     */
                    // @ts-ignore
                    readonly XSLT: java.lang.String | string
                    /**
                     * Returns the algorithm-specific input parameters associated with this
                     * <code>Transform</code>.
                     * <p>
                     * The returned parameters can be typecast to a
                     * {@link TransformParameterSpec} object.
                     * @return the algorithm-specific input parameters (may be <code>null</code>
                     *     if not specified)
                     */
                    // @ts-ignore
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                    /**
                     * Transforms the specified data using the underlying transform algorithm.
                     * @param data the data to be transformed
                     * @param context the <code>XMLCryptoContext</code> containing
                     *     additional context (may be <code>null</code> if not applicable)
                     * @return the transformed data
                     * @throws NullPointerException if <code>data</code> is <code>null</code>
                     * @throws TransformException if an error occurs while executing the
                     *     transform
                     */
                    // @ts-ignore
                    transform(data: javax.xml.crypto.Data, context: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                    /**
                     * Transforms the specified data using the underlying transform algorithm.
                     * If the output of this transform is an <code>OctetStreamData</code>, then
                     * this method returns <code>null</code> and the bytes are written to the
                     * specified <code>OutputStream</code>. Otherwise, the
                     * <code>OutputStream</code> is ignored and the method behaves as if
                     * {@link #transform(Data, XMLCryptoContext)} were invoked.
                     * @param data the data to be transformed
                     * @param context the <code>XMLCryptoContext</code> containing
                     *     additional context (may be <code>null</code> if not applicable)
                     * @param os the <code>OutputStream</code> that should be used to write
                     *     the transformed data to
                     * @return the transformed data (or <code>null</code> if the data was
                     *     written to the <code>OutputStream</code> parameter)
                     * @throws NullPointerException if <code>data</code> or <code>os</code>
                     *     is <code>null</code>
                     * @throws TransformException if an error occurs while executing the
                     *     transform
                     */
                    // @ts-ignore
                    transform(data: javax.xml.crypto.Data, context: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data
                }
            }
        }
    }
}
