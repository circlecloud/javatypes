declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * The access point for the implementation classes of the factories defined in the
             * SAAJ API. All of the <code>newInstance</code> methods defined on factories in
             * SAAJ 1.3 defer to instances of this class to do the actual object creation.
             * The implementations of <code>newInstance()</code> methods (in SOAPFactory and MessageFactory)
             * that existed in SAAJ 1.2 have been updated to also delegate to the SAAJMetaFactory when the SAAJ 1.2
             * defined lookup fails to locate the Factory implementation class name.
             * <p>
             * SAAJMetaFactory is a service provider interface. There are no public methods on this
             * class.
             * @author SAAJ RI Development Team
             * @since SAAJ 1.3
             */
            // @ts-ignore
            class SAAJMetaFactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>MessageFactory</code> object for
                 * the given <code>String</code> protocol.
                 * @param protocol a <code>String</code> indicating the protocol
                 * @exception SOAPException if there is an error in creating the
                 *             MessageFactory
                 * @see SOAPConstants#SOAP_1_1_PROTOCOL
                 * @see SOAPConstants#SOAP_1_2_PROTOCOL
                 * @see SOAPConstants#DYNAMIC_SOAP_PROTOCOL
                 */
                // @ts-ignore
                abstract newMessageFactory(protocol: string): javax.xml.soap.MessageFactory
                /**
                 * Creates a <code>SOAPFactory</code> object for
                 * the given <code>String</code> protocol.
                 * @param protocol a <code>String</code> indicating the protocol
                 * @exception SOAPException if there is an error in creating the
                 *             SOAPFactory
                 * @see SOAPConstants#SOAP_1_1_PROTOCOL
                 * @see SOAPConstants#SOAP_1_2_PROTOCOL
                 * @see SOAPConstants#DYNAMIC_SOAP_PROTOCOL
                 */
                // @ts-ignore
                abstract newSOAPFactory(protocol: string): javax.xml.soap.SOAPFactory
            }
        }
    }
}
