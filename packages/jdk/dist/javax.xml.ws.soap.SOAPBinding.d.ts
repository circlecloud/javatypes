declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                /**
                 * The <code>SOAPBinding</code> interface is an abstraction for
                 * the SOAP binding.
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                interface SOAPBinding extends javax.xml.ws.Binding {
                    /**
                     * A constant representing the identity of the SOAP 1.1 over HTTP binding.
                     */
                    // @ts-ignore
                    
                    /**
                     * A constant representing the identity of the SOAP 1.2 over HTTP binding.
                     */
                    // @ts-ignore
                    
                    /**
                     * A constant representing the identity of the SOAP 1.1 over HTTP binding
                     * with MTOM enabled by default.
                     */
                    // @ts-ignore
                    
                    /**
                     * A constant representing the identity of the SOAP 1.2 over HTTP binding
                     * with MTOM enabled by default.
                     */
                    // @ts-ignore
                    
                    /**
                     * Gets the roles played by the SOAP binding instance.
                     * @return Set&lt;String> The set of roles played by the binding instance.
                     */
                    // @ts-ignore
                    getRoles(): java.util.Set<java.lang.String>
                    /**
                     * Sets the roles played by the SOAP binding instance.
                     * @param roles    The set of roles played by the binding instance.
                     * @throws WebServiceException On an error in the configuration of
                     *                   the list of roles.
                     */
                    // @ts-ignore
                    setRoles(roles: Array<java.lang.String>): void
                    /**
                     * Returns <code>true</code> if the use of MTOM is enabled.
                     * @return <code>true</code> if and only if the use of MTOM is enabled.
                     */
                    // @ts-ignore
                    isMTOMEnabled(): boolean
                    /**
                     * Enables or disables use of MTOM.
                     * @param flag   A <code>boolean</code> specifying whether the use of MTOM should
                     *                be enabled or disabled.
                     * @throws WebServiceException If the specified setting is not supported
                     *                   by this binding instance.
                     */
                    // @ts-ignore
                    setMTOMEnabled(flag: boolean): void
                    /**
                     * Gets the SAAJ <code>SOAPFactory</code> instance used by this SOAP binding.
                     * @return SOAPFactory instance used by this SOAP binding.
                     */
                    // @ts-ignore
                    getSOAPFactory(): javax.xml.soap.SOAPFactory
                    /**
                     * Gets the SAAJ <code>MessageFactory</code> instance used by this SOAP binding.
                     * @return MessageFactory instance used by this SOAP binding.
                     */
                    // @ts-ignore
                    getMessageFactory(): javax.xml.soap.MessageFactory
                }
            }
        }
    }
}
