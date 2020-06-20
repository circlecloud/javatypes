declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Convenience methods for working with the DOM API,
                 * in particular for working with DOM Nodes and DOM Elements.
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @author Costin Leau
                 * @author Arjen Poutsma
                 * @author Luke Taylor
                 * @since 1.2
                 * @see org.w3c.dom.Node
                 * @see org.w3c.dom.Element
                 */
                // @ts-ignore
                class DomUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Retrieves all child elements of the given DOM element that match any of the given element names.
                     * Only looks at the direct child level of the given element; do not go into further depth
                     * (in contrast to the DOM API's {@code getElementsByTagName} method).
                     * @param ele the DOM element to analyze
                     * @param childEleNames the child element names to look for
                     * @return a List of child {#code org.w3c.dom.Element} instances
                     * @see org.w3c.dom.Element
                     * @see org.w3c.dom.Element#getElementsByTagName
                     */
                    // @ts-ignore
                    getChildElementsByTagName(ele: org.w3c.dom.Element, ...childEleNames: string[]): java.util.List<org.w3c.dom.Element>
                    /**
                     * Retrieves all child elements of the given DOM element that match the given element name.
                     * Only look at the direct child level of the given element; do not go into further depth
                     * (in contrast to the DOM API's {@code getElementsByTagName} method).
                     * @param ele the DOM element to analyze
                     * @param childEleName the child element name to look for
                     * @return a List of child {#code org.w3c.dom.Element} instances
                     * @see org.w3c.dom.Element
                     * @see org.w3c.dom.Element#getElementsByTagName
                     */
                    // @ts-ignore
                    getChildElementsByTagName(ele: org.w3c.dom.Element, childEleName: string): java.util.List<org.w3c.dom.Element>
                    /**
                     * Utility method that returns the first child element identified by its name.
                     * @param ele the DOM element to analyze
                     * @param childEleName the child element name to look for
                     * @return the {#code org.w3c.dom.Element} instance, or {@code null} if none found
                     */
                    // @ts-ignore
                    getChildElementByTagName(ele: org.w3c.dom.Element, childEleName: string): org.w3c.dom.Element
                    /**
                     * Utility method that returns the first child element value identified by its name.
                     * @param ele the DOM element to analyze
                     * @param childEleName the child element name to look for
                     * @return the extracted text value, or {#code null} if no child element found
                     */
                    // @ts-ignore
                    getChildElementValueByTagName(ele: org.w3c.dom.Element, childEleName: string): java.lang.String
                    /**
                     * Retrieves all child elements of the given DOM element.
                     * @param ele the DOM element to analyze
                     * @return a List of child {#code org.w3c.dom.Element} instances
                     */
                    // @ts-ignore
                    getChildElements(ele: org.w3c.dom.Element): java.util.List<org.w3c.dom.Element>
                    /**
                     * Extracts the text value from the given DOM element, ignoring XML comments.
                     * <p>Appends all CharacterData nodes and EntityReference nodes into a single
                     * String value, excluding Comment nodes. Only exposes actual user-specified
                     * text, no default values of any kind.
                     * @see CharacterData
                     * @see EntityReference
                     * @see Comment
                     */
                    // @ts-ignore
                    getTextValue(valueEle: org.w3c.dom.Element): java.lang.String
                    /**
                     * Namespace-aware equals comparison. Returns {@code true} if either
                     * {@link Node#getLocalName} or {@link Node#getNodeName} equals
                     * {@code desiredName}, otherwise returns {@code false}.
                     */
                    // @ts-ignore
                    nodeNameEquals(node: org.w3c.dom.Node, desiredName: string): boolean
                    /**
                     * Returns a SAX {@code ContentHandler} that transforms callback calls to DOM {@code Node}s.
                     * @param node the node to publish events to
                     * @return the content handler
                     */
                    // @ts-ignore
                    createContentHandler(node: org.w3c.dom.Node): org.xml.sax.ContentHandler
                }
            }
        }
    }
}
