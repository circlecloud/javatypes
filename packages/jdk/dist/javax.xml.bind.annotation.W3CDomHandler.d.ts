declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * {@link DomHandler} implementation for W3C DOM (<code>org.w3c.dom</code> package.)
                 * @author Kohsuke Kawaguchi
                 * @since JAXB2.0
                 */
                // @ts-ignore
                class W3CDomHandler extends java.lang.Object implements javax.xml.bind.annotation.DomHandler<org.w3c.dom.Element, javax.xml.transform.dom.DOMResult> {
                    /**
                     * Default constructor.
                     * It is up to a JAXB provider to decide which DOM implementation
                     * to use or how that is configured.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructor that allows applications to specify which DOM implementation
                     * to be used.
                     * @param builder
                     *       must not be null. JAXB uses this {#link DocumentBuilder} to create
                     *       a new element.
                     */
                    // @ts-ignore
                    constructor(builder: javax.xml.parsers.DocumentBuilder)
                    // @ts-ignore
                    public getBuilder(): javax.xml.parsers.DocumentBuilder
                    // @ts-ignore
                    public setBuilder(builder: javax.xml.parsers.DocumentBuilder): void
                    // @ts-ignore
                    public createUnmarshaller(errorHandler: javax.xml.bind.ValidationEventHandler): javax.xml.transform.dom.DOMResult
                    // @ts-ignore
                    public getElement(r: javax.xml.transform.dom.DOMResult): org.w3c.dom.Element
                    // @ts-ignore
                    public marshal(element: org.w3c.dom.Element, errorHandler: javax.xml.bind.ValidationEventHandler): javax.xml.transform.Source
                }
            }
        }
    }
}
