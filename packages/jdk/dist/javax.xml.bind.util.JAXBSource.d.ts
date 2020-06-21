declare namespace javax {
    namespace xml {
        namespace bind {
            namespace util {
                /**
                 * JAXP {@link javax.xml.transform.Source} implementation
                 * that marshals a JAXB-generated object.
                 * <p>
                 * This utility class is useful to combine JAXB with
                 * other Java/XML technologies.
                 * <p>
                 * The following example shows how to use JAXB to marshal a document
                 * for transformation by XSLT.
                 * <blockquote>
                 * <pre>
                 * MyObject o = // get JAXB content tree
                 * // jaxbContext is a JAXBContext object from which 'o' is created.
                 * JAXBSource source = new JAXBSource( jaxbContext, o );
                 * // set up XSLT transformation
                 * TransformerFactory tf = TransformerFactory.newInstance();
                 * Transformer t = tf.newTransformer(new StreamSource("test.xsl"));
                 * // run transformation
                 * t.transform(source,new StreamResult(System.out));
                 * </pre>
                 * </blockquote>
                 * <p>
                 * The fact that JAXBSource derives from SAXSource is an implementation
                 * detail. Thus in general applications are strongly discouraged from
                 * accessing methods defined on SAXSource. In particular,
                 * the setXMLReader and setInputSource methods shall never be called.
                 * The XMLReader object obtained by the getXMLReader method shall
                 * be used only for parsing the InputSource object returned by
                 * the getInputSource method.
                 * <p>
                 * Similarly the InputSource object obtained by the getInputSource
                 * method shall be used only for being parsed by the XMLReader object
                 * returned by the getXMLReader.
                 * @author Kohsuke Kawaguchi (kohsuke.kawaguchi#sun.com)
                 */
                // @ts-ignore
                class JAXBSource extends javax.xml.transform.sax.SAXSource {
                    /**
                     * Creates a new {@link javax.xml.transform.Source} for the given content object.
                     * @param context
                     *       JAXBContext that was used to create
                     *       <code>contentObject</code>. This context is used
                     *       to create a new instance of marshaller and must not be null.
                     * @param contentObject
                     *       An instance of a JAXB-generated class, which will be
                     *       used as a {#link javax.xml.transform.Source} (by marshalling it into XML).  It must
                     *       not be null.
                     * @throws JAXBException if an error is encountered while creating the
                     *  JAXBSource or if either of the parameters are null.
                     */
                    // @ts-ignore
                    constructor(context: javax.xml.bind.JAXBContext, contentObject: java.lang.Object | any)
                    /**
                     * Creates a new {@link javax.xml.transform.Source} for the given content object.
                     * @param marshaller
                     *       A marshaller instance that will be used to marshal
                     *       <code>contentObject</code> into XML. This must be
                     *       created from a JAXBContext that was used to build
                     *       <code>contentObject</code> and must not be null.
                     * @param contentObject
                     *       An instance of a JAXB-generated class, which will be
                     *       used as a {#link javax.xml.transform.Source} (by marshalling it into XML).  It must
                     *       not be null.
                     * @throws JAXBException if an error is encountered while creating the
                     *  JAXBSource or if either of the parameters are null.
                     */
                    // @ts-ignore
                    constructor(marshaller: javax.xml.bind.Marshaller, contentObject: java.lang.Object | any)
                }
            }
        }
    }
}
