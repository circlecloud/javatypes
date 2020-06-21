declare namespace javax {
    namespace xml {
        namespace transform {
            namespace sax {
                /**
                 * A SAX ContentHandler that may be used to process SAX
                 * parse events (parsing transformation instructions) into a Templates object.
                 * <p>Note that TemplatesHandler does not need to implement LexicalHandler.</p>
                 */
                // @ts-ignore
                interface TemplatesHandler extends org.xml.sax.ContentHandler {
                    /**
                     * When a TemplatesHandler object is used as a ContentHandler
                     * for the parsing of transformation instructions, it creates a Templates object,
                     * which the caller can get once the SAX events have been completed.
                     * @return The Templates object that was created during
                     *  the SAX event process, or null if no Templates object has
                     *  been created.
                     */
                    // @ts-ignore
                    getTemplates(): javax.xml.transform.Templates
                    /**
                     * Set the base ID (URI or system ID) for the Templates object
                     * created by this builder.  This must be set in order to
                     * resolve relative URIs in the stylesheet.  This must be
                     * called before the startDocument event.
                     * @param systemID Base URI for this stylesheet.
                     */
                    // @ts-ignore
                    setSystemId(systemID: java.lang.String | string): void
                    /**
                     * Get the base ID (URI or system ID) from where relative
                     * URLs will be resolved.
                     * @return The systemID that was set with {#link #setSystemId}.
                     */
                    // @ts-ignore
                    getSystemId(): string
                }
            }
        }
    }
}
