declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * Parameters for the W3C Recommendation:
                     * <a href="http://www.w3.org/TR/xml-exc-c14n/">
                     * Exclusive XML Canonicalization (C14N) algorithm</a>. The
                     * parameters include an optional inclusive namespace prefix list. The XML
                     * Schema Definition of the Exclusive XML Canonicalization parameters is
                     * defined as:
                     * <pre><code>
                     * &lt;schema xmlns="http://www.w3.org/2001/XMLSchema"
                     * xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
                     * targetNamespace="http://www.w3.org/2001/10/xml-exc-c14n#"
                     * version="0.1" elementFormDefault="qualified"&gt;
                     * &lt;element name="InclusiveNamespaces" type="ec:InclusiveNamespaces"/&gt;
                     * &lt;complexType name="InclusiveNamespaces"&gt;
                     * &lt;attribute name="PrefixList" type="xsd:string"/&gt;
                     * &lt;/complexType&gt;
                     * &lt;/schema&gt;
                     * </code></pre>
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see CanonicalizationMethod
                     */
                    // @ts-ignore
                    class ExcC14NParameterSpec extends java.lang.Object implements javax.xml.crypto.dsig.spec.C14NMethodParameterSpec {
                        /**
                         * Creates a <code>ExcC14NParameterSpec</code> with an empty prefix
                         * list.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a <code>ExcC14NParameterSpec</code> with the specified list
                         * of prefixes. The list is copied to protect against subsequent
                         * modification.
                         * @param prefixList the inclusive namespace prefix list. Each entry in
                         *     the list is a <code>String</code> that represents a namespace prefix.
                         * @throws NullPointerException if <code>prefixList</code> is
                         *     <code>null</code>
                         * @throws ClassCastException if any of the entries in the list are not
                         *     of type <code>String</code>
                         */
                        // @ts-ignore
                        constructor(prefixList: Array)
                        /**
                         * Indicates the default namespace ("#default").
                         */
                        // @ts-ignore
                        readonly DEFAULT: string
                        /**
                         * Returns the inclusive namespace prefix list. Each entry in the list
                         * is a <code>String</code> that represents a namespace prefix.
                         * <p>This implementation returns an {@link
                         * java.util.Collections#unmodifiableList unmodifiable list}.
                         * @return the inclusive namespace prefix list (may be empty but never
                         *     <code>null</code>)
                         */
                        // @ts-ignore
                        getPrefixList(): java.util.List
                    }
                }
            }
        }
    }
}
