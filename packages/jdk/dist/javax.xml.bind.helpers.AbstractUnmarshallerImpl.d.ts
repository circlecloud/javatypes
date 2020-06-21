declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                /**
                 * Partial default <tt>Unmarshaller</tt> implementation.
                 * <p>
                 * This class provides a partial default implementation for the
                 * {@link javax.xml.bind.Unmarshaller}interface.
                 * <p>
                 * A JAXB Provider has to implement five methods (getUnmarshallerHandler,
                 * unmarshal(Node), unmarshal(XMLReader,InputSource),
                 * unmarshal(XMLStreamReader), and unmarshal(XMLEventReader).
                 * @author <ul>
                 *          <li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li>
                 *          </ul>
                 * @see javax.xml.bind.Unmarshaller
                 * @since JAXB1.0
                 */
                // @ts-ignore
                abstract class AbstractUnmarshallerImpl extends java.lang.Object implements javax.xml.bind.Unmarshaller {
                    // @ts-ignore
                    constructor()
                    /**
                     * whether or not the unmarshaller will validate
                     */
                    // @ts-ignore
                    validating: boolean
                    /**
                     * Obtains a configured XMLReader.
                     * This method is used when the client-specified
                     * {@link SAXSource} object doesn't have XMLReader.
                     * {@link Unmarshaller} is not re-entrant, so we will
                     * only use one instance of XMLReader.
                     */
                    // @ts-ignore
                    getXMLReader(): org.xml.sax.XMLReader
                    // @ts-ignore
                    public unmarshal(source: javax.xml.transform.Source): any
                    /**
                     * Unmarshals an object by using the specified XMLReader and the InputSource.
                     * The callee should call the setErrorHandler method of the XMLReader
                     * so that errors are passed to the client-specified ValidationEventHandler.
                     */
                    // @ts-ignore
                    abstract unmarshal(reader: org.xml.sax.XMLReader, source: org.xml.sax.InputSource): any
                    // @ts-ignore
                    public unmarshal(source: org.xml.sax.InputSource): any
                    // @ts-ignore
                    public unmarshal(url: java.net.URL): any
                    // @ts-ignore
                    public unmarshal(f: java.io.File): any
                    // @ts-ignore
                    public unmarshal(jis: java.io.InputStream): any
                    // @ts-ignore
                    public unmarshal(reader: java.io.Reader): any
                    /**
                     * Indicates whether or not the Unmarshaller is configured to validate
                     * during unmarshal operations.
                     * <p>
                     * <i><b>Note:</b> I named this method isValidating() to stay in-line
                     * with JAXP, as opposed to naming it getValidating(). </i>
                     * @return true if the Unmarshaller is configured to validate during
                     *         unmarshal operations, false otherwise
                     * @throws JAXBException if an error occurs while retrieving the validating
                     *         flag
                     */
                    // @ts-ignore
                    public isValidating(): boolean
                    /**
                     * Allow an application to register a validation event handler.
                     * <p>
                     * The validation event handler will be called by the JAXB Provider if any
                     * validation errors are encountered during calls to any of the
                     * <tt>unmarshal</tt> methods.  If the client application does not register
                     * a validation event handler before invoking the unmarshal methods, then
                     * all validation events will be silently ignored and may result in
                     * unexpected behaviour.
                     * @param handler the validation event handler
                     * @throws JAXBException if an error was encountered while setting the
                     *         event handler
                     */
                    // @ts-ignore
                    public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void
                    /**
                     * Specifies whether or not the Unmarshaller should validate during
                     * unmarshal operations.  By default, the <tt>Unmarshaller</tt> does
                     * not validate.
                     * <p>
                     * This method may only be invoked before or after calling one of the
                     * unmarshal methods.
                     * @param validating true if the Unmarshaller should validate during
                     *        unmarshal, false otherwise
                     * @throws JAXBException if an error occurred while enabling or disabling
                     *  validation at unmarshal time
                     */
                    // @ts-ignore
                    public setValidating(validating: boolean): void
                    /**
                     * Return the current event handler or the default event handler if one
                     * hasn't been set.
                     * @return the current ValidationEventHandler or the default event handler
                     *         if it hasn't been set
                     * @throws JAXBException if an error was encountered while getting the
                     *         current event handler
                     */
                    // @ts-ignore
                    public getEventHandler(): javax.xml.bind.ValidationEventHandler
                    /**
                     * Creates an UnmarshalException from a SAXException.
                     * This is an utility method provided for the derived classes.
                     * <p>
                     * When a provider-implemented ContentHandler wants to throw a
                     * JAXBException, it needs to wrap the exception by a SAXException.
                     * If the unmarshaller implementation blindly wrap SAXException
                     * by JAXBException, such an exception will be a JAXBException
                     * wrapped by a SAXException wrapped by another JAXBException.
                     * This is silly.
                     * <p>
                     * This method checks the nested exception of SAXException
                     * and reduce those excessive wrapping.
                     * @return the resulting UnmarshalException
                     */
                    // @ts-ignore
                    createUnmarshalException(e: org.xml.sax.SAXException): javax.xml.bind.UnmarshalException
                    /**
                     * Default implementation of the setProperty method always
                     * throws PropertyException since there are no required
                     * properties. If a provider needs to handle additional
                     * properties, it should override this method in a derived class.
                     */
                    // @ts-ignore
                    public setProperty(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Default implementation of the getProperty method always
                     * throws PropertyException since there are no required
                     * properties. If a provider needs to handle additional
                     * properties, it should override this method in a derived class.
                     */
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): any
                    // @ts-ignore
                    public unmarshal(reader: javax.xml.stream.XMLEventReader): any
                    // @ts-ignore
                    public unmarshal(reader: javax.xml.stream.XMLStreamReader): any
                    // @ts-ignore
                    public unmarshal<T>(node: org.w3c.dom.Node, expectedType: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                    // @ts-ignore
                    public unmarshal<T>(source: javax.xml.transform.Source, expectedType: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                    // @ts-ignore
                    public unmarshal<T>(reader: javax.xml.stream.XMLStreamReader, expectedType: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                    // @ts-ignore
                    public unmarshal<T>(reader: javax.xml.stream.XMLEventReader, expectedType: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                    // @ts-ignore
                    public setSchema(schema: javax.xml.validation.Schema): void
                    // @ts-ignore
                    public getSchema(): javax.xml.validation.Schema
                    // @ts-ignore
                    public setAdapter(adapter: javax.xml.bind.annotation.adapters.XmlAdapter<any>): void
                    // @ts-ignore
                    public setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(type: java.lang.Class<A>, adapter: A): void
                    // @ts-ignore
                    public getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(type: java.lang.Class<A>): A
                    // @ts-ignore
                    public setAttachmentUnmarshaller(au: javax.xml.bind.attachment.AttachmentUnmarshaller): void
                    // @ts-ignore
                    public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller
                    // @ts-ignore
                    public setListener(listener: javax.xml.bind.Unmarshaller.Listener): void
                    // @ts-ignore
                    public getListener(): javax.xml.bind.Unmarshaller.Listener
                }
            }
        }
    }
}
