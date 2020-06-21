declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * <code>SOAPElementFactory</code> is a factory for XML fragments that
             * will eventually end up in the SOAP part. These fragments
             * can be inserted as children of the <code>SOAPHeader</code> or
             * <code>SOAPBody</code> or <code>SOAPEnvelope</code>.
             * <p>Elements created using this factory do not have the properties
             * of an element that lives inside a SOAP header document. These
             * elements are copied into the XML document tree when they are
             * inserted.
             * @deprecated - Use <code>javax.xml.soap.SOAPFactory</code> for creating SOAPElements.
             * @see javax.xml.soap.SOAPFactory
             */
            // @ts-ignore
            class SOAPElementFactory extends java.lang.Object {
                /**
                 * Create a <code>SOAPElement</code> object initialized with the
                 * given <code>Name</code> object.
                 * @param name a <code>Name</code> object with the XML name for
                 *              the new element
                 * @return the new <code>SOAPElement</code> object that was
                 *          created
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 * @deprecated Use
                 *  javax.xml.soap.SOAPFactory.createElement(javax.xml.soap.Name)
                 *  instead
                 * @see javax.xml.soap.SOAPFactory#createElement(javax.xml.soap.Name)
                 * @see javax.xml.soap.SOAPFactory#createElement(javax.xml.namespace.QName)
                 */
                // @ts-ignore
                public create(name: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                /**
                 * Create a <code>SOAPElement</code> object initialized with the
                 * given local name.
                 * @param localName a <code>String</code> giving the local name for
                 *              the new element
                 * @return the new <code>SOAPElement</code> object that was
                 *          created
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 * @deprecated Use
                 *  javax.xml.soap.SOAPFactory.createElement(String localName) instead
                 * @see javax.xml.soap.SOAPFactory#createElement(java.lang.String)
                 */
                // @ts-ignore
                public create(localName: java.lang.String | string): javax.xml.soap.SOAPElement
                /**
                 * Create a new <code>SOAPElement</code> object with the given
                 * local name, prefix and uri.
                 * @param localName a <code>String</code> giving the local name
                 *                   for the new element
                 * @param prefix the prefix for this <code>SOAPElement</code>
                 * @param uri a <code>String</code> giving the URI of the
                 *             namespace to which the new element belongs
                 * @exception SOAPException if there is an error in creating the
                 *             <code>SOAPElement</code> object
                 * @deprecated Use
                 *  javax.xml.soap.SOAPFactory.createElement(String localName,
                 *                       String prefix,
                 *                       String uri)
                 *  instead
                 * @see javax.xml.soap.SOAPFactory#createElement(java.lang.String, java.lang.String, java.lang.String)
                 */
                // @ts-ignore
                public create(localName: java.lang.String | string, prefix: java.lang.String | string, uri: java.lang.String | string): javax.xml.soap.SOAPElement
                /**
                 * Creates a new instance of <code>SOAPElementFactory</code>.
                 * @return a new instance of a <code>SOAPElementFactory</code>
                 * @exception SOAPException if there was an error creating the
                 *             default <code>SOAPElementFactory</code>
                 */
                // @ts-ignore
                public static newInstance(): javax.xml.soap.SOAPElementFactory
            }
        }
    }
}
