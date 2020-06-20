declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                /**
                 * Default implementation of the ValidationEventLocator interface.
                 * <p>
                 * JAXB providers are allowed to use whatever class that implements
                 * the ValidationEventLocator interface. This class is just provided for a
                 * convenience.
                 * @author <ul><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li></ul>
                 * @see javax.xml.bind.Validator
                 * @see javax.xml.bind.ValidationEventHandler
                 * @see javax.xml.bind.ValidationEvent
                 * @see javax.xml.bind.ValidationEventLocator
                 * @since JAXB1.0
                 */
                // @ts-ignore
                class ValidationEventLocatorImpl extends java.lang.Object implements javax.xml.bind.ValidationEventLocator {
                    /**
                     * Creates an object with all fields unavailable.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs an object from an org.xml.sax.Locator.
                     * The object's ColumnNumber, LineNumber, and URL become available from the
                     * values returned by the locator's getColumnNumber(), getLineNumber(), and
                     * getSystemId() methods respectively. Node, Object, and Offset are not
                     * available.
                     * @param loc the SAX Locator object that will be used to populate this
                     *  event locator.
                     * @throws IllegalArgumentException if the Locator is null
                     */
                    // @ts-ignore
                    constructor(loc: org.xml.sax.Locator)
                    /**
                     * Constructs an object from the location information of a SAXParseException.
                     * The object's ColumnNumber, LineNumber, and URL become available from the
                     * values returned by the locator's getColumnNumber(), getLineNumber(), and
                     * getSystemId() methods respectively. Node, Object, and Offset are not
                     * available.
                     * @param e the SAXParseException object that will be used to populate this
                     *  event locator.
                     * @throws IllegalArgumentException if the SAXParseException is null
                     */
                    // @ts-ignore
                    constructor(e: org.xml.sax.SAXParseException)
                    /**
                     * Constructs an object that points to a DOM Node.
                     * The object's Node becomes available.  ColumnNumber, LineNumber, Object,
                     * Offset, and URL are not available.
                     * @param _node the DOM Node object that will be used to populate this
                     *  event locator.
                     * @throws IllegalArgumentException if the Node is null
                     */
                    // @ts-ignore
                    constructor(_node: org.w3c.dom.Node)
                    /**
                     * Constructs an object that points to a JAXB content object.
                     * The object's Object becomes available. ColumnNumber, LineNumber, Node,
                     * Offset, and URL are not available.
                     * @param _object the Object that will be used to populate this
                     *  event locator.
                     * @throws IllegalArgumentException if the Object is null
                     */
                    // @ts-ignore
                    constructor(_object: any)
                    /**
                     * @see javax.xml.bind.ValidationEventLocator#getURL()
                     */
                    // @ts-ignore
                    getURL(): java.net.URL
                    /**
                     * Set the URL field on this event locator.  Null values are allowed.
                     * @param _url the url
                     */
                    // @ts-ignore
                    setURL(_url: java.net.URL): void
                    /**
                     * @see javax.xml.bind.ValidationEventLocator#getOffset()
                     */
                    // @ts-ignore
                    getOffset(): int
                    /**
                     * Set the offset field on this event locator.
                     * @param _offset the offset
                     */
                    // @ts-ignore
                    setOffset(_offset: number /*int*/): void
                    /**
                     * @see javax.xml.bind.ValidationEventLocator#getLineNumber()
                     */
                    // @ts-ignore
                    getLineNumber(): int
                    /**
                     * Set the lineNumber field on this event locator.
                     * @param _lineNumber the line number
                     */
                    // @ts-ignore
                    setLineNumber(_lineNumber: number /*int*/): void
                    /**
                     * @see javax.xml.bind.ValidationEventLocator#getColumnNumber()
                     */
                    // @ts-ignore
                    getColumnNumber(): int
                    /**
                     * Set the columnNumber field on this event locator.
                     * @param _columnNumber the column number
                     */
                    // @ts-ignore
                    setColumnNumber(_columnNumber: number /*int*/): void
                    /**
                     * @see javax.xml.bind.ValidationEventLocator#getObject()
                     */
                    // @ts-ignore
                    getObject(): java.lang.Object
                    /**
                     * Set the Object field on this event locator.  Null values are allowed.
                     * @param _object the java content object
                     */
                    // @ts-ignore
                    setObject(_object: any): void
                    /**
                     * @see javax.xml.bind.ValidationEventLocator#getNode()
                     */
                    // @ts-ignore
                    getNode(): org.w3c.dom.Node
                    /**
                     * Set the Node field on this event locator.  Null values are allowed.
                     * @param _node the Node
                     */
                    // @ts-ignore
                    setNode(_node: org.w3c.dom.Node): void
                    /**
                     * Returns a string representation of this object in a format
                     * helpful to debugging.
                     * @see Object#equals(Object)
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
