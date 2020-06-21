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
                abstract class SoapFaultException extends org.springframework.remoting.RemoteInvocationFailureException {
                    /**
                     * Constructor for SoapFaultException.
                     * @param msg the detail message
                     * @param cause the root cause from the SOAP API in use
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    /**
                     * Return the SOAP fault code.
                     */
                    // @ts-ignore
                    public abstract getFaultCode(): string
                    /**
                     * Return the SOAP fault code as a {@code QName} object.
                     */
                    // @ts-ignore
                    public abstract getFaultCodeAsQName(): javax.xml.namespace.QName
                    /**
                     * Return the descriptive SOAP fault string.
                     */
                    // @ts-ignore
                    public abstract getFaultString(): string
                    /**
                     * Return the actor that caused this fault.
                     */
                    // @ts-ignore
                    public abstract getFaultActor(): string
                }
            }
        }
    }
}
