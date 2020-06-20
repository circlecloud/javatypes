declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                /**
                 * The <code>SOAPFaultException</code> exception represents a
                 * SOAP 1.1 or 1.2 fault.
                 * <p>A <code>SOAPFaultException</code> wraps a SAAJ <code>SOAPFault</code>
                 * that manages the SOAP-specific representation of faults.
                 * The <code>createFault</code> method of
                 * <code>javax.xml.soap.SOAPFactory</code> may be used to create an instance
                 * of <code>javax.xml.soap.SOAPFault</code> for use with the
                 * constructor. <code>SOAPBinding</code> contains an accessor for the
                 * <code>SOAPFactory</code> used by the binding instance.
                 * <p>Note that the value of <code>getFault</code> is the only part of the
                 * exception used when searializing a SOAP fault.
                 * <p>Refer to the SOAP specification for a complete
                 * description of SOAP faults.
                 * @see javax.xml.soap.SOAPFault
                 * @see javax.xml.ws.soap.SOAPBinding#getSOAPFactory
                 * @see javax.xml.ws.ProtocolException
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                class SOAPFaultException extends javax.xml.ws.ProtocolException {
                    /**
                     * Constructor for SOAPFaultException
                     * @param fault   <code>SOAPFault</code> representing the fault
                     * @see javax.xml.soap.SOAPFactory#createFault
                     */
                    // @ts-ignore
                    constructor(fault: javax.xml.soap.SOAPFault)
                    /**
                     * Gets the embedded <code>SOAPFault</code> instance.
                     * @return <code>javax.xml.soap.SOAPFault</code> SOAP
                     *           fault element
                     */
                    // @ts-ignore
                    getFault(): javax.xml.soap.SOAPFault
                }
            }
        }
    }
}
