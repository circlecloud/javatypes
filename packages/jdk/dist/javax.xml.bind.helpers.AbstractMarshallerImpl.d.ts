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
                abstract class AbstractMarshallerImpl extends java.lang.Object implements javax.xml.bind.Marshaller {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public marshal(obj: java.lang.Object | any, os: java.io.OutputStream): void
                    // @ts-ignore
                    public marshal(jaxbElement: java.lang.Object | any, output: java.io.File): void
                    // @ts-ignore
                    public marshal(obj: java.lang.Object | any, w: java.io.Writer): void
                    // @ts-ignore
                    public marshal(obj: java.lang.Object | any, handler: org.xml.sax.ContentHandler): void
                    // @ts-ignore
                    public marshal(obj: java.lang.Object | any, node: org.w3c.dom.Node): void
                    /**
                     * By default, the getNode method is unsupported and throw
                     * an {@link java.lang.UnsupportedOperationException}.
                     * Implementations that choose to support this method must
                     * override this method.
                     */
                    // @ts-ignore
                    public getNode(obj: java.lang.Object | any): org.w3c.dom.Node
                    /**
                     * Convenience method for getting the current output encoding.
                     * @return the current encoding or "UTF-8" if it hasn't been set.
                     */
                    // @ts-ignore
                    getEncoding(): string
                    /**
                     * Convenience method for setting the output encoding.
                     * @param encoding a valid encoding as specified in the Marshaller class
                     *  documentation
                     */
                    // @ts-ignore
                    setEncoding(encoding: java.lang.String | string): void
                    /**
                     * Convenience method for getting the current schemaLocation.
                     * @return the current schemaLocation or null if it hasn't been set
                     */
                    // @ts-ignore
                    getSchemaLocation(): string
                    /**
                     * Convenience method for setting the schemaLocation.
                     * @param location the schemaLocation value
                     */
                    // @ts-ignore
                    setSchemaLocation(location: java.lang.String | string): void
                    /**
                     * Convenience method for getting the current noNamespaceSchemaLocation.
                     * @return the current noNamespaceSchemaLocation or null if it hasn't
                     *  been set
                     */
                    // @ts-ignore
                    getNoNSSchemaLocation(): string
                    /**
                     * Convenience method for setting the noNamespaceSchemaLocation.
                     * @param location the noNamespaceSchemaLocation value
                     */
                    // @ts-ignore
                    setNoNSSchemaLocation(location: java.lang.String | string): void
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
                    getJavaEncoding(encoding: java.lang.String | string): string
                    /**
                     * Default implementation of the setProperty method handles
                     * the four defined properties in Marshaller. If a provider
                     * needs to handle additional properties, it should override
                     * this method in a derived class.
                     */
                    // @ts-ignore
                    public setProperty(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Default implementation of the getProperty method handles
                     * the four defined properties in Marshaller.  If a provider
                     * needs to support additional provider specific properties,
                     * it should override this method in a derived class.
                     */
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): any
                    /**
                     * @see javax.xml.bind.Marshaller#getEventHandler()
                     */
                    // @ts-ignore
                    public getEventHandler(): javax.xml.bind.ValidationEventHandler
                    /**
                     * @see javax.xml.bind.Marshaller#setEventHandler(ValidationEventHandler)
                     */
                    // @ts-ignore
                    public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void
                    // @ts-ignore
                    public marshal(obj: java.lang.Object | any, writer: javax.xml.stream.XMLEventWriter): void
                    // @ts-ignore
                    public marshal(obj: java.lang.Object | any, writer: javax.xml.stream.XMLStreamWriter): void
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
                    public setAttachmentMarshaller(am: javax.xml.bind.attachment.AttachmentMarshaller): void
                    // @ts-ignore
                    public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller
                    // @ts-ignore
                    public setListener(listener: javax.xml.bind.Marshaller.Listener): void
                    // @ts-ignore
                    public getListener(): javax.xml.bind.Marshaller.Listener
                }
            }
        }
    }
}
