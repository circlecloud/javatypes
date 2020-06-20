declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                /**
                 * The <code>PortInfo</code> interface is used by a
                 * <code>HandlerResolver</code> to query information about
                 * the port it is being asked to create a handler chain for.
                 * <p>
                 * This interface is never implemented by an application,
                 * only by a JAX-WS implementation.
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                interface PortInfo {
                    /**
                     * Gets the qualified name of the WSDL service name containing
                     * the port being accessed.
                     * @return javax.xml.namespace.QName The qualified name of the WSDL service.
                     */
                    // @ts-ignore
                    getServiceName(): javax.xml.namespace.QName
                    /**
                     * Gets the qualified name of the WSDL port being accessed.
                     * @return javax.xml.namespace.QName The qualified name of the WSDL port.
                     */
                    // @ts-ignore
                    getPortName(): javax.xml.namespace.QName
                    /**
                     * Gets the URI identifying the binding used by the port being accessed.
                     * @return String The binding identifier for the port.
                     * @see javax.xml.ws.Binding
                     */
                    // @ts-ignore
                    getBindingID(): java.lang.String
                }
            }
        }
    }
}
