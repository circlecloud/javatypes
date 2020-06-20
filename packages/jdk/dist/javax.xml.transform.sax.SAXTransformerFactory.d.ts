declare namespace javax {
    namespace xml {
        namespace transform {
            namespace sax {
                /**
                 * This class extends TransformerFactory to provide SAX-specific
                 * factory methods.  It provides two types of ContentHandlers,
                 * one for creating Transformers, the other for creating Templates
                 * objects.
                 * <p>If an application wants to set the ErrorHandler or EntityResolver
                 * for an XMLReader used during a transformation, it should use a URIResolver
                 * to return the SAXSource which provides (with getXMLReader) a reference to
                 * the XMLReader.</p>
                 */
                // @ts-ignore
                class SAXTransformerFactory extends javax.xml.transform.TransformerFactory {
                    /**
                     * The default constructor is protected on purpose.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * If {@link javax.xml.transform.TransformerFactory#getFeature}
                     * returns true when passed this value as an argument,
                     * the TransformerFactory returned from
                     * {@link javax.xml.transform.TransformerFactory#newInstance} may
                     * be safely cast to a SAXTransformerFactory.
                     */
                    // @ts-ignore
                    readonly FEATURE: string
                    /**
                     * If {@link javax.xml.transform.TransformerFactory#getFeature}
                     * returns true when passed this value as an argument,
                     * the {@link #newXMLFilter(Source src)}
                     * and {@link #newXMLFilter(Templates templates)} methods are supported.
                     */
                    // @ts-ignore
                    readonly FEATURE_XMLFILTER: string
                    /**
                     * Get a TransformerHandler object that can process SAX
                     * ContentHandler events into a Result, based on the transformation
                     * instructions specified by the argument.
                     * @param src The Source of the transformation instructions.
                     * @return TransformerHandler ready to transform SAX events.
                     * @throws TransformerConfigurationException If for some reason the
                     *  TransformerHandler can not be created.
                     */
                    // @ts-ignore
                    abstract newTransformerHandler(src: javax.xml.transform.Source): javax.xml.transform.sax.TransformerHandler
                    /**
                     * Get a TransformerHandler object that can process SAX
                     * ContentHandler events into a Result, based on the Templates argument.
                     * @param templates The compiled transformation instructions.
                     * @return TransformerHandler ready to transform SAX events.
                     * @throws TransformerConfigurationException If for some reason the
                     *  TransformerHandler can not be created.
                     */
                    // @ts-ignore
                    abstract newTransformerHandler(templates: javax.xml.transform.Templates): javax.xml.transform.sax.TransformerHandler
                    /**
                     * Get a TransformerHandler object that can process SAX
                     * ContentHandler events into a Result. The transformation
                     * is defined as an identity (or copy) transformation, for example
                     * to copy a series of SAX parse events into a DOM tree.
                     * @return A non-null reference to a TransformerHandler, that may
                     *  be used as a ContentHandler for SAX parse events.
                     * @throws TransformerConfigurationException If for some reason the
                     *  TransformerHandler cannot be created.
                     */
                    // @ts-ignore
                    abstract newTransformerHandler(): javax.xml.transform.sax.TransformerHandler
                    /**
                     * Get a TemplatesHandler object that can process SAX
                     * ContentHandler events into a Templates object.
                     * @return A non-null reference to a TransformerHandler, that may
                     *  be used as a ContentHandler for SAX parse events.
                     * @throws TransformerConfigurationException If for some reason the
                     *  TemplatesHandler cannot be created.
                     */
                    // @ts-ignore
                    abstract newTemplatesHandler(): javax.xml.transform.sax.TemplatesHandler
                    /**
                     * Create an XMLFilter that uses the given Source as the
                     * transformation instructions.
                     * @param src The Source of the transformation instructions.
                     * @return An XMLFilter object, or null if this feature is not supported.
                     * @throws TransformerConfigurationException If for some reason the
                     *  TemplatesHandler cannot be created.
                     */
                    // @ts-ignore
                    abstract newXMLFilter(src: javax.xml.transform.Source): org.xml.sax.XMLFilter
                    /**
                     * Create an XMLFilter, based on the Templates argument..
                     * @param templates The compiled transformation instructions.
                     * @return An XMLFilter object, or null if this feature is not supported.
                     * @throws TransformerConfigurationException If for some reason the
                     *  TemplatesHandler cannot be created.
                     */
                    // @ts-ignore
                    abstract newXMLFilter(templates: javax.xml.transform.Templates): org.xml.sax.XMLFilter
                }
            }
        }
    }
}
