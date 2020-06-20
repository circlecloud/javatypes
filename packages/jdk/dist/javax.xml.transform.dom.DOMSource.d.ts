declare namespace javax {
    namespace xml {
        namespace transform {
            namespace dom {
                /**
                 * <p>Acts as a holder for a transformation Source tree in the
                 * form of a Document Object Model (DOM) tree.</p>
                 * <p>Note that XSLT requires namespace support. Attempting to transform a DOM
                 * that was not contructed with a namespace-aware parser may result in errors.
                 * Parsers can be made namespace aware by calling
                 * {@link javax.xml.parsers.DocumentBuilderFactory#setNamespaceAware(boolean awareness)}.</p>
                 * @author <a href="Jeff.Suttor#Sun.com">Jeff Suttor</a>
                 * @see <a href="http://www.w3.org/TR/DOM-Level-2">Document Object Model (DOM) Level 2 Specification</a>
                 */
                // @ts-ignore
                class DOMSource extends java.lang.Object implements javax.xml.transform.Source {
                    /**
                     * <p>Zero-argument default constructor.  If this constructor is used, and
                     * no DOM source is set using {@link #setNode(Node node)} , then the
                     * <code>Transformer</code> will
                     * create an empty source {@link org.w3c.dom.Document} using
                     * {@link javax.xml.parsers.DocumentBuilder#newDocument()}.</p>
                     * @see javax.xml.transform.Transformer#transform(Source xmlSource, Result outputTarget)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new input source with a DOM node.  The operation
                     * will be applied to the subtree rooted at this node.  In XSLT,
                     * a "/" pattern still means the root of the tree (not the subtree),
                     * and the evaluation of global variables and parameters is done
                     * from the root node also.
                     * @param n The DOM node that will contain the Source tree.
                     */
                    // @ts-ignore
                    constructor(n: org.w3c.dom.Node)
                    /**
                     * Create a new input source with a DOM node, and with the
                     * system ID also passed in as the base URI.
                     * @param node The DOM node that will contain the Source tree.
                     * @param systemID Specifies the base URI associated with node.
                     */
                    // @ts-ignore
                    constructor(node: org.w3c.dom.Node, systemID: string)
                    /**
                     * If {@link javax.xml.transform.TransformerFactory#getFeature}
                     * returns true when passed this value as an argument,
                     * the Transformer supports Source input of this type.
                     */
                    // @ts-ignore
                    readonly FEATURE: string
                    /**
                     * Set the node that will represents a Source DOM tree.
                     * @param node The node that is to be transformed.
                     */
                    // @ts-ignore
                    setNode(node: org.w3c.dom.Node): void
                    /**
                     * Get the node that represents a Source DOM tree.
                     * @return The node that is to be transformed.
                     */
                    // @ts-ignore
                    getNode(): org.w3c.dom.Node
                    /**
                     * Set the base ID (URL or system ID) from where URLs
                     * will be resolved.
                     * @param systemID Base URL for this DOM tree.
                     */
                    // @ts-ignore
                    setSystemId(systemID: string): void
                    /**
                     * Get the base ID (URL or system ID) from where URLs
                     * will be resolved.
                     * @return Base URL for this DOM tree.
                     */
                    // @ts-ignore
                    getSystemId(): java.lang.String
                }
            }
        }
    }
}
