declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * Parameters for the <a href="http://www.w3.org/TR/xmldsig-core/#sec-MACs">
                     * XML Signature HMAC Algorithm</a>. The parameters include an optional output
                     * length which specifies the MAC truncation length in bits. The resulting
                     * HMAC will be truncated to the specified number of bits. If the parameter is
                     * not specified, then this implies that all the bits of the hash are to be
                     * output. The XML Schema Definition of the <code>HMACOutputLength</code>
                     * element is defined as:
                     * <pre><code>
                     * &lt;element name="HMACOutputLength" minOccurs="0" type="ds:HMACOutputLengthType"/&gt;
                     * &lt;simpleType name="HMACOutputLengthType"&gt;
                     * &lt;restriction base="integer"/&gt;
                     * &lt;/simpleType&gt;
                     * </code></pre>
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see SignatureMethod
                     * @see <a href="http://www.ietf.org/rfc/rfc2104.txt">RFC 2104</a>
                     */
                    // @ts-ignore
                    class HMACParameterSpec extends java.lang.Object implements javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec {
                        /**
                         * Creates an <code>HMACParameterSpec</code> with the specified truncation
                         * length.
                         * @param outputLength the truncation length in number of bits
                         */
                        // @ts-ignore
                        constructor(outputLength: number /*int*/)
                        /**
                         * Returns the truncation length.
                         * @return the truncation length in number of bits
                         */
                        // @ts-ignore
                        getOutputLength(): int
                    }
                }
            }
        }
    }
}
