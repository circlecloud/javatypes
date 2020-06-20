declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                /**
                 * The interface <code>MessageContext</code> abstracts the message
                 * context that is processed by a handler in the <code>handle</code>
                 * method.
                 * <p>The <code>MessageContext</code> interface provides methods to
                 * manage a property set. <code>MessageContext</code> properties
                 * enable handlers in a handler chain to share processing related
                 * state.
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                interface MessageContext extends java.util.Map<java.lang.String, java.lang.Object> {
                    /**
                     * Standard property: message direction, <code>true</code> for
                     * outbound messages, <code>false</code> for inbound.
                     * <p>Type: boolean
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: Map of attachments to a message for the inbound
                     * message, key is  the MIME Content-ID, value is a DataHandler.
                     * <p>Type: java.util.Map&lt;String,DataHandler>
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: Map of attachments to a message for the outbound
                     * message, key is the MIME Content-ID, value is a DataHandler.
                     * <p>Type: java.util.Map&lt;String,DataHandler>
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: input source for WSDL document.
                     * <p>Type: org.xml.sax.InputSource
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: name of WSDL service.
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: name of WSDL port.
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: name of wsdl interface (2.0) or port type (1.1).
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: name of WSDL operation.
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: HTTP response status code.
                     * <p>Type: java.lang.Integer
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: HTTP request headers.
                     * <p>Type: java.util.Map&lt;java.lang.String, java.util.List&lt;java.lang.String>>
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: HTTP response headers.
                     * <p>Type: java.util.Map&lt;java.lang.String, java.util.List&lt;java.lang.String>>
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: HTTP request method.
                     * <p>Type: java.lang.String
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: servlet request object.
                     * <p>Type: javax.servlet.http.HttpServletRequest
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: servlet response object.
                     * <p>Type: javax.servlet.http.HttpServletResponse
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: servlet context object.
                     * <p>Type: javax.servlet.ServletContext
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: Query string for request.
                     * <p>Type: String
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: Request Path Info
                     * <p>Type: String
                     */
                    // @ts-ignore
                    
                    /**
                     * Standard property: WS Addressing Reference Parameters.
                     * The list MUST include all SOAP headers marked with the
                     * wsa:IsReferenceParameter="true" attribute.
                     * <p>Type: List&lt;Element>
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    
                    /**
                     * Sets the scope of a property.
                     * @param name Name of the property associated with the
                     *              <code>MessageContext</code>
                     * @param scope Desired scope of the property
                     * @throws java.lang.IllegalArgumentException if an illegal
                     *              property name is specified
                     */
                    // @ts-ignore
                    setScope(name: string, scope: javax.xml.ws.handler.MessageContext.Scope): void
                    /**
                     * Gets the scope of a property.
                     * @param name Name of the property
                     * @return Scope of the property
                     * @throws java.lang.IllegalArgumentException if a non-existant
                     *              property name is specified
                     */
                    // @ts-ignore
                    getScope(name: string): javax.xml.ws.handler.MessageContext.Scope
                }
            }
        }
    }
}
