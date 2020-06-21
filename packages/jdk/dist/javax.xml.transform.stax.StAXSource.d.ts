declare namespace javax {
    namespace xml {
        namespace transform {
            namespace stax {
                /**
                 * <p>Acts as a holder for an XML {@link Source} in the
                 * form of a StAX reader,i.e.
                 * {@link XMLStreamReader} or {@link XMLEventReader}.
                 * <code>StAXSource</code> can be used in all cases that accept
                 * a <code>Source</code>, e.g. {@link javax.xml.transform.Transformer},
                 * {@link javax.xml.validation.Validator} which accept
                 * <code>Source</code> as input.
                 * <p><code>StAXSource</code>s are consumed during processing
                 * and are not reusable.</p>
                 * @author <a href="mailto:Neeraj.Bajaj#Sun.com">Neeraj Bajaj</a>
                 * @author <a href="mailto:Jeff.Suttor#Sun.com">Jeff Suttor</a>
                 * @see <a href="http://jcp.org/en/jsr/detail?id=173">
                 *   JSR 173: Streaming API for XML</a>
                 * @see XMLStreamReader
                 * @see XMLEventReader
                 * @since 1.6
                 */
                // @ts-ignore
                class StAXSource extends java.lang.Object implements javax.xml.transform.Source {
                    /**
                     * <p>Creates a new instance of a <code>StAXSource</code>
                     * by supplying an {@link XMLEventReader}.</p>
                     * <p><code>XMLEventReader</code> must be a
                     * non-<code>null</code> reference.</p>
                     * <p><code>XMLEventReader</code> must be in
                     * {@link XMLStreamConstants#START_DOCUMENT} or
                     * {@link XMLStreamConstants#START_ELEMENT} state.</p>
                     * @param xmlEventReader <code>XMLEventReader</code> used to create
                     *    this <code>StAXSource</code>.
                     * @throws XMLStreamException If <code>xmlEventReader</code> access
                     *    throws an <code>Exception</code>.
                     * @throws IllegalArgumentException If <code>xmlEventReader</code> ==
                     *    <code>null</code>.
                     * @throws IllegalStateException If <code>xmlEventReader</code>
                     *    is not in <code>XMLStreamConstants.START_DOCUMENT</code> or
                     *    <code>XMLStreamConstants.START_ELEMENT</code> state.
                     */
                    // @ts-ignore
                    constructor(xmlEventReader: javax.xml.stream.XMLEventReader)
                    /**
                     * <p>Creates a new instance of a <code>StAXSource</code>
                     * by supplying an {@link XMLStreamReader}.</p>
                     * <p><code>XMLStreamReader</code> must be a
                     * non-<code>null</code> reference.</p>
                     * <p><code>XMLStreamReader</code> must be in
                     * {@link XMLStreamConstants#START_DOCUMENT} or
                     * {@link XMLStreamConstants#START_ELEMENT} state.</p>
                     * @param xmlStreamReader <code>XMLStreamReader</code> used to create
                     *    this <code>StAXSource</code>.
                     * @throws IllegalArgumentException If <code>xmlStreamReader</code> ==
                     *    <code>null</code>.
                     * @throws IllegalStateException If <code>xmlStreamReader</code>
                     *    is not in <code>XMLStreamConstants.START_DOCUMENT</code> or
                     *    <code>XMLStreamConstants.START_ELEMENT</code> state.
                     */
                    // @ts-ignore
                    constructor(xmlStreamReader: javax.xml.stream.XMLStreamReader)
                    /**
                     * If {@link javax.xml.transform.TransformerFactory#getFeature(String name)}
                     * returns true when passed this value as an argument,
                     * the Transformer supports Source input of this type.
                     */
                    // @ts-ignore
                    public static readonly FEATURE: java.lang.String | string
                    /**
                     * <p>Get the <code>XMLEventReader</code> used by this
                     * <code>StAXSource</code>.</p>
                     * <p><code>XMLEventReader</code> will be <code>null</code>.
                     * if this <code>StAXSource</code> was created with a
                     * <code>XMLStreamReader</code>.</p>
                     * @return <code>XMLEventReader</code> used by this
                     *    <code>StAXSource</code>.
                     */
                    // @ts-ignore
                    public getXMLEventReader(): javax.xml.stream.XMLEventReader
                    /**
                     * <p>Get the <code>XMLStreamReader</code> used by this
                     * <code>StAXSource</code>.</p>
                     * <p><code>XMLStreamReader</code> will be <code>null</code>
                     * if this <code>StAXSource</code> was created with a
                     * <code>XMLEventReader</code>.</p>
                     * @return <code>XMLStreamReader</code> used by this
                     *    <code>StAXSource</code>.
                     */
                    // @ts-ignore
                    public getXMLStreamReader(): javax.xml.stream.XMLStreamReader
                    /**
                     * <p>In the context of a <code>StAXSource</code>, it is not appropriate
                     * to explicitly set the system identifier.
                     * The <code>XMLStreamReader</code> or <code>XMLEventReader</code>
                     * used to construct this <code>StAXSource</code> determines the
                     * system identifier of the XML source.</p>
                     * <p>An {@link UnsupportedOperationException} is <strong>always</strong>
                     * thrown by this method.</p>
                     * @param systemId Ignored.
                     * @throws UnsupportedOperationException Is <strong>always</strong>
                     *    thrown by this method.
                     */
                    // @ts-ignore
                    public setSystemId(systemId: java.lang.String | string): void
                    /**
                     * <p>Get the system identifier used by this
                     * <code>StAXSource</code>.</p>
                     * <p>The <code>XMLStreamReader</code> or <code>XMLEventReader</code>
                     * used to construct this <code>StAXSource</code> is queried to determine
                     * the system identifier of the XML source.</p>
                     * <p>The system identifier may be <code>null</code> or
                     * an empty <code>""</code> <code>String</code>.</p>
                     * @return System identifier used by this <code>StAXSource</code>.
                     */
                    // @ts-ignore
                    public getSystemId(): string
                }
            }
        }
    }
}
