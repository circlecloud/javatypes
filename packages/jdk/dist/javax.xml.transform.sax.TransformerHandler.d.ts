declare namespace javax {
    namespace xml {
        namespace transform {
            namespace sax {
                /**
                 * A TransformerHandler
                 * listens for SAX ContentHandler parse events and transforms
                 * them to a Result.
                 */
                // @ts-ignore
                interface TransformerHandler extends org.xml.sax.ContentHandler, org.xml.sax.ext.LexicalHandler, org.xml.sax.DTDHandler {
                    /**
                     * <p>Set  the <code>Result</code> associated with this
                     * <code>TransformerHandler</code> to be used for the transformation.</p>
                     * @param result A <code>Result</code> instance, should not be
                     *    <code>null</code>.
                     * @throws IllegalArgumentException if result is invalid for some reason.
                     */
                    // @ts-ignore
                    setResult(result: javax.xml.transform.Result): void
                    /**
                     * Set the base ID (URI or system ID) from where relative
                     * URLs will be resolved.
                     * @param systemID Base URI for the source tree.
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
                    /**
                     * <p>Get the <code>Transformer</code> associated with this handler, which
                     * is needed in order to set parameters and output properties.</p>
                     * @return <code>Transformer</code> associated with this
                     *    <code>TransformerHandler</code>.
                     */
                    // @ts-ignore
                    getTransformer(): javax.xml.transform.Transformer
                }
            }
        }
    }
}
