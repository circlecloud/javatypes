declare namespace javax {
    namespace xml {
        namespace transform {
            namespace sax {
                /**
                 * <p>Acts as an holder for a transformation Result.</p>
                 * @author <a href="Jeff.Suttor#Sun.com">Jeff Suttor</a>
                 */
                // @ts-ignore
                class SAXResult extends java.lang.Object implements javax.xml.transform.Result {
                    /**
                     * Zero-argument default constructor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a SAXResult that targets a SAX2 {@link org.xml.sax.ContentHandler}.
                     * @param handler Must be a non-null ContentHandler reference.
                     */
                    // @ts-ignore
                    constructor(handler: org.xml.sax.ContentHandler)
                    /**
                     * If {@link javax.xml.transform.TransformerFactory#getFeature}
                     * returns true when passed this value as an argument,
                     * the Transformer supports Result output of this type.
                     */
                    // @ts-ignore
                    readonly FEATURE: string
                    /**
                     * Set the target to be a SAX2 {@link org.xml.sax.ContentHandler}.
                     * @param handler Must be a non-null ContentHandler reference.
                     */
                    // @ts-ignore
                    setHandler(handler: org.xml.sax.ContentHandler): void
                    /**
                     * Get the {@link org.xml.sax.ContentHandler} that is the Result.
                     * @return The ContentHandler that is to be transformation output.
                     */
                    // @ts-ignore
                    getHandler(): org.xml.sax.ContentHandler
                    /**
                     * Set the SAX2 {@link org.xml.sax.ext.LexicalHandler} for the output.
                     * <p>This is needed to handle XML comments and the like.  If the
                     * lexical handler is not set, an attempt should be made by the
                     * transformer to cast the {@link org.xml.sax.ContentHandler} to a
                     * <code>LexicalHandler</code>.</p>
                     * @param handler A non-null <code>LexicalHandler</code> for
                     *  handling lexical parse events.
                     */
                    // @ts-ignore
                    setLexicalHandler(handler: org.xml.sax.ext.LexicalHandler): void
                    /**
                     * Get a SAX2 {@link org.xml.sax.ext.LexicalHandler} for the output.
                     * @return A <code>LexicalHandler</code>, or null.
                     */
                    // @ts-ignore
                    getLexicalHandler(): org.xml.sax.ext.LexicalHandler
                    /**
                     * Method setSystemId Set the systemID that may be used in association
                     * with the {@link org.xml.sax.ContentHandler}.
                     * @param systemId The system identifier as a URI string.
                     */
                    // @ts-ignore
                    setSystemId(systemId: string): void
                    /**
                     * Get the system identifier that was set with setSystemId.
                     * @return The system identifier that was set with setSystemId, or null
                     *  if setSystemId was not called.
                     */
                    // @ts-ignore
                    getSystemId(): java.lang.String
                }
            }
        }
    }
}
