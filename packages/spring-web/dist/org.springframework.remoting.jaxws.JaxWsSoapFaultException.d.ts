declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * Spring SoapFaultException adapter for the JAX-WS
                 * {@link javax.xml.ws.soap.SOAPFaultException} class.
                 * @author Juergen Hoeller
                 * @since 2.5
                 */
                // @ts-ignore
                class JaxWsSoapFaultException extends SoapFaultException {
                    /**
                     * Constructor for JaxWsSoapFaultException.
                     * @param original the original JAX-WS SOAPFaultException to wrap
                     */
                    // @ts-ignore
                    constructor(original: javax.xml.ws.soap.SOAPFaultException)
                    /**
                     * Return the wrapped JAX-WS SOAPFault.
                     */
                    // @ts-ignore
                    public getFault(): javax.xml.soap.SOAPFault
                    // @ts-ignore
                    public getFaultCode(): string
                    // @ts-ignore
                    public getFaultCodeAsQName(): javax.xml.namespace.QName
                    // @ts-ignore
                    public getFaultString(): string
                    // @ts-ignore
                    public getFaultActor(): string
                }
            }
        }
    }
}
