declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * Parameters for the <a href="http://www.w3.org/TR/xmldsig-core/#sec-XPath">
                     * XPath Filtering Transform Algorithm</a>.
                     * The parameters include the XPath expression and an optional <code>Map</code>
                     * of additional namespace prefix mappings. The XML Schema Definition of
                     * the XPath Filtering transform parameters is defined as:
                     * <pre><code>
                     * &lt;element name="XPath" type="string"/&gt;
                     * </code></pre>
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see Transform
                     */
                    // @ts-ignore
                    class XPathFilterParameterSpec extends java.lang.Object implements javax.xml.crypto.dsig.spec.TransformParameterSpec {
                        /**
                         * Creates an <code>XPathFilterParameterSpec</code> with the specified
                         * XPath expression.
                         * @param xPath the XPath expression to be evaluated
                         * @throws NullPointerException if <code>xPath</code> is <code>null</code>
                         */
                        // @ts-ignore
                        constructor(xPath: java.lang.String | string)
                        /**
                         * Creates an <code>XPathFilterParameterSpec</code> with the specified
                         * XPath expression and namespace map. The map is copied to protect against
                         * subsequent modification.
                         * @param xPath the XPath expression to be evaluated
                         * @param namespaceMap the map of namespace prefixes. Each key is a
                         *     namespace prefix <code>String</code> that maps to a corresponding
                         *     namespace URI <code>String</code>.
                         * @throws NullPointerException if <code>xPath</code> or
                         *     <code>namespaceMap</code> are <code>null</code>
                         * @throws ClassCastException if any of the map's keys or entries are not
                         *     of type <code>String</code>
                         */
                        // @ts-ignore
                        constructor(xPath: java.lang.String | string, namespaceMap: java.util.Map<any>)
                        /**
                         * Returns the XPath expression to be evaluated.
                         * @return the XPath expression to be evaluated
                         */
                        // @ts-ignore
                        public getXPath(): string
                        /**
                         * Returns a map of namespace prefixes. Each key is a namespace prefix
                         * <code>String</code> that maps to a corresponding namespace URI
                         * <code>String</code>.
                         * <p>
                         * This implementation returns an {@link Collections#unmodifiableMap
                         * unmodifiable map}.
                         * @return a <code>Map</code> of namespace prefixes to namespace URIs (may
                         *     be empty, but never <code>null</code>)
                         */
                        // @ts-ignore
                        public getNamespaceMap(): java.util.Map<any>
                    }
                }
            }
        }
    }
}
