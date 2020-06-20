declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace soap {
                /**
                 * RemoteInvocationFailureException subclass that provides the details
                 * of a SOAP fault.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see javax.xml.rpc.soap.SOAPFaultException
                 * @see javax.xml.ws.soap.SOAPFaultException
                 */
                // @ts-ignore
                class SoapFaultException extends org.springframework.remoting.RemoteInvocationFailureException {
                    /**
                     * Constructor for SoapFaultException.
                     * @param msg the detail message
                     * @param cause the root cause from the SOAP API in use
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                    /**
                     * Return the SOAP fault code.
                     */
                    // @ts-ignore
                    abstract getFaultCode(): java.lang.String
                    /**
                     * Return the SOAP fault code as a {@code QName} object.
                     */
                    // @ts-ignore
                    abstract getFaultCodeAsQName(): javax.xml.namespace.QName
                    /**
                     * Return the descriptive SOAP fault string.
                     */
                    // @ts-ignore
                    abstract getFaultString(): java.lang.String
                    /**
                     * Return the actor that caused this fault.
                     */
                    // @ts-ignore
                    abstract getFaultActor(): java.lang.String
                }
            }
        }
    }
}
