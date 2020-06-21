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
                interface MessageContext extends java.util.Map<java.lang.String | string, java.lang.Object | any> {
                    /**
                     * Standard property: message direction, <code>true</code> for
                     * outbound messages, <code>false</code> for inbound.
                     * <p>Type: boolean
                     */
                    // @ts-ignore
                    readonly MESSAGE_OUTBOUND_PROPERTY: java.lang.String | string
                    /**
                     * Standard property: Map of attachments to a message for the inbound
                     * message, key is  the MIME Content-ID, value is a DataHandler.
                     * <p>Type: java.util.Map&lt;String,DataHandler>
                     */
                    // @ts-ignore
                    readonly INBOUND_MESSAGE_ATTACHMENTS: java.lang.String | string
                    /**
                     * Standard property: Map of attachments to a message for the outbound
                     * message, key is the MIME Content-ID, value is a DataHandler.
                     * <p>Type: java.util.Map&lt;String,DataHandler>
                     */
                    // @ts-ignore
                    readonly OUTBOUND_MESSAGE_ATTACHMENTS: java.lang.String | string
                    /**
                     * Standard property: input source for WSDL document.
                     * <p>Type: org.xml.sax.InputSource
                     */
                    // @ts-ignore
                    readonly WSDL_DESCRIPTION: java.lang.String | string
                    /**
                     * Standard property: name of WSDL service.
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    readonly WSDL_SERVICE: java.lang.String | string
                    /**
                     * Standard property: name of WSDL port.
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    readonly WSDL_PORT: java.lang.String | string
                    /**
                     * Standard property: name of wsdl interface (2.0) or port type (1.1).
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    readonly WSDL_INTERFACE: java.lang.String | string
                    /**
                     * Standard property: name of WSDL operation.
                     * <p>Type: javax.xml.namespace.QName
                     */
                    // @ts-ignore
                    readonly WSDL_OPERATION: java.lang.String | string
                    /**
                     * Standard property: HTTP response status code.
                     * <p>Type: java.lang.Integer
                     */
                    // @ts-ignore
                    readonly HTTP_RESPONSE_CODE: java.lang.String | string
                    /**
                     * Standard property: HTTP request headers.
                     * <p>Type: java.util.Map&lt;java.lang.String, java.util.List&lt;java.lang.String>>
                     */
                    // @ts-ignore
                    readonly HTTP_REQUEST_HEADERS: java.lang.String | string
                    /**
                     * Standard property: HTTP response headers.
                     * <p>Type: java.util.Map&lt;java.lang.String, java.util.List&lt;java.lang.String>>
                     */
                    // @ts-ignore
                    readonly HTTP_RESPONSE_HEADERS: java.lang.String | string
                    /**
                     * Standard property: HTTP request method.
                     * <p>Type: java.lang.String
                     */
                    // @ts-ignore
                    readonly HTTP_REQUEST_METHOD: java.lang.String | string
                    /**
                     * Standard property: servlet request object.
                     * <p>Type: javax.servlet.http.HttpServletRequest
                     */
                    // @ts-ignore
                    readonly SERVLET_REQUEST: java.lang.String | string
                    /**
                     * Standard property: servlet response object.
                     * <p>Type: javax.servlet.http.HttpServletResponse
                     */
                    // @ts-ignore
                    readonly SERVLET_RESPONSE: java.lang.String | string
                    /**
                     * Standard property: servlet context object.
                     * <p>Type: javax.servlet.ServletContext
                     */
                    // @ts-ignore
                    readonly SERVLET_CONTEXT: java.lang.String | string
                    /**
                     * Standard property: Query string for request.
                     * <p>Type: String
                     */
                    // @ts-ignore
                    readonly QUERY_STRING: java.lang.String | string
                    /**
                     * Standard property: Request Path Info
                     * <p>Type: String
                     */
                    // @ts-ignore
                    readonly PATH_INFO: java.lang.String | string
                    /**
                     * Standard property: WS Addressing Reference Parameters.
                     * The list MUST include all SOAP headers marked with the
                     * wsa:IsReferenceParameter="true" attribute.
                     * <p>Type: List&lt;Element>
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    readonly REFERENCE_PARAMETERS: java.lang.String | string
                    /**
                     * Sets the scope of a property.
                     * @param name Name of the property associated with the
                     *              <code>MessageContext</code>
                     * @param scope Desired scope of the property
                     * @throws java.lang.IllegalArgumentException if an illegal
                     *              property name is specified
                     */
                    // @ts-ignore
                    setScope(name: java.lang.String | string, scope: javax.xml.ws.handler.MessageContext.Scope): void
                    /**
                     * Gets the scope of a property.
                     * @param name Name of the property
                     * @return Scope of the property
                     * @throws java.lang.IllegalArgumentException if a non-existant
                     *              property name is specified
                     */
                    // @ts-ignore
                    getScope(name: java.lang.String | string): javax.xml.ws.handler.MessageContext.Scope
                }
            }
        }
    }
}
