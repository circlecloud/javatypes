declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * Parameters for the W3C Recommendation
                     * <a href="http://www.w3.org/TR/xmldsig-filter2/">
                     * XPath Filter 2.0 Transform Algorithm</a>.
                     * The parameters include a list of one or more {@link XPathType} objects.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see Transform
                     * @see XPathFilterParameterSpec
                     */
                    // @ts-ignore
                    class XPathFilter2ParameterSpec extends java.lang.Object implements javax.xml.crypto.dsig.spec.TransformParameterSpec {
                        /**
                         * Creates an <code>XPathFilter2ParameterSpec</code>.
                         * @param xPathList a list of one or more {#link XPathType} objects. The
                         *     list is defensively copied to protect against subsequent modification.
                         * @throws ClassCastException if <code>xPathList</code> contains any
                         *     entries that are not of type {#link XPathType}
                         * @throws IllegalArgumentException if <code>xPathList</code> is empty
                         * @throws NullPointerException if <code>xPathList</code> is
                         *     <code>null</code>
                         */
                        // @ts-ignore
                        constructor(xPathList: Array)
                        /**
                         * Returns a list of one or more {@link XPathType} objects.
                         * <p>
                         * This implementation returns an {@link Collections#unmodifiableList
                         * unmodifiable list}.
                         * @return a <code>List</code> of <code>XPathType</code> objects
                         *     (never <code>null</code> or empty)
                         */
                        // @ts-ignore
                        getXPathList(): java.util.List
                    }
                }
            }
        }
    }
}
