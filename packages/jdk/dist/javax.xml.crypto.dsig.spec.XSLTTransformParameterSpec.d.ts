declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * Parameters for the <a href="http://www.w3.org/TR/1999/REC-xslt-19991116">
                     * XSLT Transform Algorithm</a>.
                     * The parameters include a namespace-qualified stylesheet element.
                     * <p>An <code>XSLTTransformParameterSpec</code> is instantiated with a
                     * mechanism-dependent (ex: DOM) stylesheet element. For example:
                     * <pre>
                     * DOMStructure stylesheet = new DOMStructure(element)
                     * XSLTTransformParameterSpec spec = new XSLTransformParameterSpec(stylesheet);
                     * </pre>
                     * where <code>element</code> is an {@link org.w3c.dom.Element} containing
                     * the namespace-qualified stylesheet element.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see Transform
                     */
                    // @ts-ignore
                    class XSLTTransformParameterSpec extends java.lang.Object implements javax.xml.crypto.dsig.spec.TransformParameterSpec {
                        /**
                         * Creates an <code>XSLTTransformParameterSpec</code> with the specified
                         * stylesheet.
                         * @param stylesheet the XSLT stylesheet to be used
                         * @throws NullPointerException if <code>stylesheet</code> is
                         *     <code>null</code>
                         */
                        // @ts-ignore
                        constructor(stylesheet: javax.xml.crypto.XMLStructure)
                        /**
                         * Returns the stylesheet.
                         * @return the stylesheet
                         */
                        // @ts-ignore
                        getStylesheet(): javax.xml.crypto.XMLStructure
                    }
                }
            }
        }
    }
}
