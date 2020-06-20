declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                /**
                 * Partial default <tt>Marshaller</tt> implementation.
                 * <p>
                 * This class provides a partial default implementation for the
                 * {@link javax.xml.bind.Marshaller} interface.
                 * <p>
                 * The only methods that a JAXB Provider has to implement are
                 * {@link Marshaller#marshal(Object, javax.xml.transform.Result) marshal(Object, javax.xml.transform.Result)},
                 * {@link Marshaller#marshal(Object, javax.xml.transform.Result) marshal(Object, javax.xml.stream.XMLStreamWriter)}, and
                 * {@link Marshaller#marshal(Object, javax.xml.transform.Result) marshal(Object, javax.xml.stream.XMLEventWriter)}.
                 * @author <ul><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li></ul>
                 * @see javax.xml.bind.Marshaller
                 * @since JAXB1.0
                 */
                // @ts-ignore
                class AbstractMarshallerImpl extends java.lang.Object implements javax.xml.bind.Marshaller {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    marshal(obj: any, os: java.io.OutputStream): void
                    // @ts-ignore
                    marshal(jaxbElement: any, output: java.io.File): void
                    // @ts-ignore
                    marshal(obj: any, w: java.io.Writer): void
                    // @ts-ignore
                    marshal(obj: any, handler: org.xml.sax.ContentHandler): void
                    // @ts-ignore
                    marshal(obj: any, node: org.w3c.dom.Node): void
                    /**
                     * By default, the getNode method is unsupported and throw
                     * an {@link java.lang.UnsupportedOperationException}.
                     * Implementations that choose to support this method must
                     * override this method.
                     */
                    // @ts-ignore
                    getNode(obj: any): org.w3c.dom.Node
                    /**
                     * Convenience method for getting the current output encoding.
                     * @return the current encoding or "UTF-8" if it hasn't been set.
                     */
                    // @ts-ignore
                    getEncoding(): java.lang.String
                    /**
                     * Convenience method for setting the output encoding.
                     * @param encoding a valid encoding as specified in the Marshaller class
                     *  documentation
                     */
                    // @ts-ignore
                    setEncoding(encoding: string): void
                    /**
                     * Convenience method for getting the current schemaLocation.
                     * @return the current schemaLocation or null if it hasn't been set
                     */
                    // @ts-ignore
                    getSchemaLocation(): java.lang.String
                    /**
                     * Convenience method for setting the schemaLocation.
                     * @param location the schemaLocation value
                     */
                    // @ts-ignore
                    setSchemaLocation(location: string): void
                    /**
                     * Convenience method for getting the current noNamespaceSchemaLocation.
                     * @return the current noNamespaceSchemaLocation or null if it hasn't
                     *  been set
                     */
                    // @ts-ignore
                    getNoNSSchemaLocation(): java.lang.String
                    /**
                     * Convenience method for setting the noNamespaceSchemaLocation.
                     * @param location the noNamespaceSchemaLocation value
                     */
                    // @ts-ignore
                    setNoNSSchemaLocation(location: string): void
                    /**
                     * Convenience method for getting the formatted output flag.
                     * @return the current value of the formatted output flag or false if
                     *  it hasn't been set.
                     */
                    // @ts-ignore
                    isFormattedOutput(): boolean
                    /**
                     * Convenience method for setting the formatted output flag.
                     * @param v value of the formatted output flag.
                     */
                    // @ts-ignore
                    setFormattedOutput(v: boolean): void
                    /**
                     * Convenience method for getting the fragment flag.
                     * @return the current value of the fragment flag or false if
                     *  it hasn't been set.
                     */
                    // @ts-ignore
                    isFragment(): boolean
                    /**
                     * Convenience method for setting the fragment flag.
                     * @param v value of the fragment flag.
                     */
                    // @ts-ignore
                    setFragment(v: boolean): void
                    /**
                     * Gets the corresponding Java encoding name from an IANA name.
                     * This method is a helper method for the derived class to convert
                     * encoding names.
                     * @exception UnsupportedEncodingException
                     *       If this implementation couldn't find the Java encoding name.
                     */
                    // @ts-ignore
                    getJavaEncoding(encoding: string): java.lang.String
                    /**
                     * Default implementation of the setProperty method handles
                     * the four defined properties in Marshaller. If a provider
                     * needs to handle additional properties, it should override
                     * this method in a derived class.
                     */
                    // @ts-ignore
                    setProperty(name: string, value: any): void
                    /**
                     * Default implementation of the getProperty method handles
                     * the four defined properties in Marshaller.  If a provider
                     * needs to support additional provider specific properties,
                     * it should override this method in a derived class.
                     */
                    // @ts-ignore
                    getProperty(name: string): java.lang.Object
                    /**
                     * @see javax.xml.bind.Marshaller#getEventHandler()
                     */
                    // @ts-ignore
                    getEventHandler(): javax.xml.bind.ValidationEventHandler
                    /**
                     * @see javax.xml.bind.Marshaller#setEventHandler(ValidationEventHandler)
                     */
                    // @ts-ignore
                    setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void
                    // @ts-ignore
                    marshal(obj: any, writer: javax.xml.stream.XMLEventWriter): void
                    // @ts-ignore
                    marshal(obj: any, writer: javax.xml.stream.XMLStreamWriter): void
                    // @ts-ignore
                    setSchema(schema: javax.xml.validation.Schema): void
                    // @ts-ignore
                    getSchema(): javax.xml.validation.Schema
                    // @ts-ignore
                    setAdapter(adapter: javax.xml.bind.annotation.adapters.XmlAdapter): void
                    // @ts-ignore
                    setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(type: java.lang.Class<A>, adapter: A extends javax.xml.bind.annotation.adapters.XmlAdapter): void
                    // @ts-ignore
                    getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(type: java.lang.Class<A>): A
                    // @ts-ignore
                    setAttachmentMarshaller(am: javax.xml.bind.attachment.AttachmentMarshaller): void
                    // @ts-ignore
                    getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller
                    // @ts-ignore
                    setListener(listener: javax.xml.bind.Marshaller.Listener): void
                    // @ts-ignore
                    getListener(): javax.xml.bind.Marshaller.Listener
                }
            }
        }
    }
}
