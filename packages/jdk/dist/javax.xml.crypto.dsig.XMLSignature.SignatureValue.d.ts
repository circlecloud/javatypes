declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace XMLSignature {
                    /**
                     * A representation of the XML <code>SignatureValue</code> element as
                     * defined in the <a href="http://www.w3.org/TR/xmldsig-core/">
                     * W3C Recommendation for XML-Signature Syntax and Processing</a>.
                     * The XML Schema Definition is defined as:
                     * <p>
                     * <pre>
                     * &lt;element name="SignatureValue" type="ds:SignatureValueType"/&gt;
                     * &lt;complexType name="SignatureValueType"&gt;
                     * &lt;simpleContent&gt;
                     * &lt;extension base="base64Binary"&gt;
                     * &lt;attribute name="Id" type="ID" use="optional"/&gt;
                     * &lt;/extension&gt;
                     * &lt;/simpleContent&gt;
                     * &lt;/complexType&gt;
                     * </pre>
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     */
                    // @ts-ignore
                    interface SignatureValue extends javax.xml.crypto.XMLStructure {
                        /**
                         * Returns the optional <code>Id</code> attribute of this
                         * <code>SignatureValue</code>, which permits this element to be
                         * referenced from elsewhere.
                         * @return the <code>Id</code> attribute (may be <code>null</code> if
                         *     not specified)
                         */
                        // @ts-ignore
                        getId(): string
                        /**
                         * Returns the signature value of this <code>SignatureValue</code>.
                         * @return the signature value (may be <code>null</code> if the
                         *     <code>XMLSignature</code> has not been signed yet). Each
                         *     invocation of this method returns a new clone of the array to
                         *     prevent subsequent modification.
                         */
                        // @ts-ignore
                        getValue(): number /*byte*/[]
                        /**
                         * Validates the signature value. This method performs a
                         * cryptographic validation of the signature calculated over the
                         * <code>SignedInfo</code> of the <code>XMLSignature</code>.
                         * <p>This method only validates the signature the first
                         * time it is invoked. On subsequent invocations, it returns a cached
                         * result.
                         * @return <code>true</code> if the signature was
                         *     validated successfully; <code>false</code> otherwise
                         * @param validateContext the validating context
                         * @throws NullPointerException if <code>validateContext</code> is
                         *     <code>null</code>
                         * @throws XMLSignatureException if an unexpected exception occurs while
                         *     validating the signature
                         */
                        // @ts-ignore
                        validate(validateContext: javax.xml.crypto.dsig.XMLValidateContext): boolean
                    }
                }
            }
        }
    }
}
