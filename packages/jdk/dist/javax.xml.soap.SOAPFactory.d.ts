declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * <code>SOAPFactory</code> is a factory for creating various objects
             * that exist in the SOAP XML tree.
             * <code>SOAPFactory</code> can be
             * used to create XML fragments that will eventually end up in the
             * SOAP part. These fragments can be inserted as children of the
             * {@link SOAPHeaderElement} or {@link SOAPBodyElement} or
             * {@link SOAPEnvelope} or other {@link SOAPElement} objects.
             * <code>SOAPFactory</code> also has methods to create
             * <code>javax.xml.soap.Detail</code> objects as well as
             * <code>java.xml.soap.Name</code> objects.
             */
            // @ts-ignore
            abstract class SOAPFactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>SOAPElement</code> object from an existing DOM
                 * <code>Element</code>. If the DOM <code>Element</code> that is passed in
                 * as an argument is already a <code>SOAPElement</code> then this method
                 * must return it unmodified without any further work. Otherwise, a new
                 * <code>SOAPElement</code> is created and a deep copy is made of the
                 * <code>domElement</code> argument. The concrete type of the return value
                 * will depend on the name of the <code>domElement</code> argument. If any
                 * part of the tree rooted in <code>domElement</code> violates SOAP rules, a
                 * <code>SOAPException</code> will be thrown.
                 * @param domElement - the <code>Element</code> to be copied.
                 * @return a new <code>SOAPElement</code> that is a copy of <code>domElement</code>.
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                public createElement(domElement: org.w3c.dom.Element): javax.xml.soap.SOAPElement
                /**
                 * Creates a <code>SOAPElement</code> object initialized with the
                 * given <code>Name</code> object. The concrete type of the return value
                 * will depend on the name given to the new <code>SOAPElement</code>. For
                 * instance, a new <code>SOAPElement</code> with the name
                 * "{http://www.w3.org/2003/05/soap-envelope}Envelope" would cause a
                 * <code>SOAPEnvelope</code> that supports SOAP 1.2 behavior to be created.
                 * @param name a <code>Name</code> object with the XML name for
                 *              the new element
                 * @return the new <code>SOAPElement</code> object that was
                 *          created
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 * @see SOAPFactory#createElement(javax.xml.namespace.QName)
                 */
                // @ts-ignore
                public abstract createElement(name: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                /**
                 * Creates a <code>SOAPElement</code> object initialized with the
                 * given <code>QName</code> object. The concrete type of the return value
                 * will depend on the name given to the new <code>SOAPElement</code>. For
                 * instance, a new <code>SOAPElement</code> with the name
                 * "{http://www.w3.org/2003/05/soap-envelope}Envelope" would cause a
                 * <code>SOAPEnvelope</code> that supports SOAP 1.2 behavior to be created.
                 * @param qname a <code>QName</code> object with the XML name for
                 *              the new element
                 * @return the new <code>SOAPElement</code> object that was
                 *          created
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 * @see SOAPFactory#createElement(Name)
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                public createElement(qname: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                /**
                 * Creates a <code>SOAPElement</code> object initialized with the
                 * given local name.
                 * @param localName a <code>String</code> giving the local name for
                 *              the new element
                 * @return the new <code>SOAPElement</code> object that was
                 *          created
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 */
                // @ts-ignore
                public abstract createElement(localName: java.lang.String | string): javax.xml.soap.SOAPElement
                /**
                 * Creates a new <code>SOAPElement</code> object with the given
                 * local name, prefix and uri. The concrete type of the return value
                 * will depend on the name given to the new <code>SOAPElement</code>. For
                 * instance, a new <code>SOAPElement</code> with the name
                 * "{http://www.w3.org/2003/05/soap-envelope}Envelope" would cause a
                 * <code>SOAPEnvelope</code> that supports SOAP 1.2 behavior to be created.
                 * @param localName a <code>String</code> giving the local name
                 *                   for the new element
                 * @param prefix the prefix for this <code>SOAPElement</code>
                 * @param uri a <code>String</code> giving the URI of the
                 *             namespace to which the new element belongs
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 */
                // @ts-ignore
                public abstract createElement(localName: java.lang.String | string, prefix: java.lang.String | string, uri: java.lang.String | string): javax.xml.soap.SOAPElement
                /**
                 * Creates a new <code>Detail</code> object which serves as a container
                 * for <code>DetailEntry</code> objects.
                 * <P>
                 * This factory method creates <code>Detail</code> objects for use in
                 * situations where it is not practical to use the <code>SOAPFault</code>
                 * abstraction.
                 * @return a <code>Detail</code> object
                 * @throws SOAPException if there is a SOAP error
                 * @throws UnsupportedOperationException if the protocol specified
                 *          for the SOAPFactory was <code>DYNAMIC_SOAP_PROTOCOL</code>
                 */
                // @ts-ignore
                public abstract createDetail(): javax.xml.soap.Detail
                /**
                 * Creates a new <code>SOAPFault</code> object initialized with the given <code>reasonText</code>
                 * and <code>faultCode</code>
                 * @param reasonText the ReasonText/FaultString for the fault
                 * @param faultCode the FaultCode for the fault
                 * @return a <code>SOAPFault</code> object
                 * @throws SOAPException if there is a SOAP error
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                public abstract createFault(reasonText: java.lang.String | string, faultCode: javax.xml.namespace.QName): javax.xml.soap.SOAPFault
                /**
                 * Creates a new default <code>SOAPFault</code> object
                 * @return a <code>SOAPFault</code> object
                 * @throws SOAPException if there is a SOAP error
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                public abstract createFault(): javax.xml.soap.SOAPFault
                /**
                 * Creates a new <code>Name</code> object initialized with the
                 * given local name, namespace prefix, and namespace URI.
                 * <P>
                 * This factory method creates <code>Name</code> objects for use in
                 * situations where it is not practical to use the <code>SOAPEnvelope</code>
                 * abstraction.
                 * @param localName a <code>String</code> giving the local name
                 * @param prefix a <code>String</code> giving the prefix of the namespace
                 * @param uri a <code>String</code> giving the URI of the namespace
                 * @return a <code>Name</code> object initialized with the given
                 *          local name, namespace prefix, and namespace URI
                 * @throws SOAPException if there is a SOAP error
                 */
                // @ts-ignore
                public abstract createName(localName: java.lang.String | string, prefix: java.lang.String | string, uri: java.lang.String | string): javax.xml.soap.Name
                /**
                 * Creates a new <code>Name</code> object initialized with the
                 * given local name.
                 * <P>
                 * This factory method creates <code>Name</code> objects for use in
                 * situations where it is not practical to use the <code>SOAPEnvelope</code>
                 * abstraction.
                 * @param localName a <code>String</code> giving the local name
                 * @return a <code>Name</code> object initialized with the given
                 *          local name
                 * @throws SOAPException if there is a SOAP error
                 */
                // @ts-ignore
                public abstract createName(localName: java.lang.String | string): javax.xml.soap.Name
                /**
                 * Creates a new <code>SOAPFactory</code> object that is an instance of
                 * the default implementation (SOAP 1.1),
                 * This method uses the following ordered lookup procedure to determine the SOAPFactory implementation class to load:
                 * <UL>
                 * <LI> Use the javax.xml.soap.SOAPFactory system property.
                 * <LI> Use the properties file "lib/jaxm.properties" in the JRE directory. This configuration file is in standard
                 * java.util.Properties format and contains the fully qualified name of the implementation class with the key being the
                 * system property defined above.
                 * <LI> Use the Services API (as detailed in the JAR specification), if available, to determine the classname. The Services API
                 * will look for a classname in the file META-INF/services/javax.xml.soap.SOAPFactory in jars available to the runtime.
                 * <LI> Use the SAAJMetaFactory instance to locate the SOAPFactory implementation class.
                 * </UL>
                 * @return a new instance of a <code>SOAPFactory</code>
                 * @exception SOAPException if there was an error creating the
                 *             default <code>SOAPFactory</code>
                 * @see SAAJMetaFactory
                 */
                // @ts-ignore
                public static newInstance(): javax.xml.soap.SOAPFactory
                /**
                 * Creates a new <code>SOAPFactory</code> object that is an instance of
                 * the specified implementation, this method uses the SAAJMetaFactory to
                 * locate the implementation class and create the SOAPFactory instance.
                 * @return a new instance of a <code>SOAPFactory</code>
                 * @param protocol  a string constant representing the protocol of the
                 *                    specified SOAP factory implementation. May be
                 *                    either <code>DYNAMIC_SOAP_PROTOCOL</code>,
                 *                    <code>DEFAULT_SOAP_PROTOCOL</code> (which is the same
                 *                    as) <code>SOAP_1_1_PROTOCOL</code>, or
                 *                    <code>SOAP_1_2_PROTOCOL</code>.
                 * @exception SOAPException if there was an error creating the
                 *             specified <code>SOAPFactory</code>
                 * @see SAAJMetaFactory
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                public static newInstance(protocol: java.lang.String | string): javax.xml.soap.SOAPFactory
            }
        }
    }
}
