declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>BindingProvider</code> interface provides access to the
             * protocol binding and associated context objects for request and
             * response message processing.
             * @since JAX-WS 2.0
             * @see javax.xml.ws.Binding
             */
            // @ts-ignore
            interface BindingProvider {
                /**
                 * Standard property: User name for authentication.
                 * <p>Type: <code>java.lang.String</code>
                 */
                // @ts-ignore
                
                /**
                 * Standard property: Password for authentication.
                 * <p>Type: <code>java.lang.String</code>
                 */
                // @ts-ignore
                
                /**
                 * Standard property: Target service endpoint address. The
                 * URI scheme for the endpoint address specification MUST
                 * correspond to the protocol/transport binding for the
                 * binding in use.
                 * <p>Type: <code>java.lang.String</code>
                 */
                // @ts-ignore
                
                /**
                 * Standard property: This boolean property is used by a service
                 * client to indicate whether or not it wants to participate in
                 * a session with a service endpoint. If this property is set to
                 * <code>true</code>, the service client indicates that it wants the session
                 * to be maintained. If set to <code>false</code>, the session is not maintained.
                 * The default value for this property is <code>false</code>.
                 * <p>Type: <code>java.lang.Boolean</code>
                 */
                // @ts-ignore
                
                /**
                 * Standard property for SOAPAction. This boolean property
                 * indicates whether or not the value of the
                 * <code>javax.xml.ws.soap.http.soapaction.uri</code> property
                 * is used for the value of the SOAPAction. The
                 * default value of this property is <code>false</code> indicating
                 * that the
                 * <code>javax.xml.ws.soap.http.soapaction.uri</code> property
                 * is not used for the value of the SOAPAction, however,
                 * if WS-Addressing is enabled, the default value is
                 * <code>true</code>.
                 * <p>Type: <code>java.lang.Boolean</code>
                 */
                // @ts-ignore
                
                /**
                 * Standard property for SOAPAction. Indicates the SOAPAction
                 * URI if the <code>javax.xml.ws.soap.http.soapaction.use</code>
                 * property is set to <code>true</code>. If WS-Addressing
                 * is enabled, this value will also be used for the value of the
                 * WS-Addressing Action header.  If this property is not set,
                 * the default SOAPAction and WS-Addressing Action will be sent.
                 * <p>Type: <code>java.lang.String</code>
                 */
                // @ts-ignore
                
                /**
                 * Get the context that is used to initialize the message context
                 * for request messages.
                 * Modifications to the request context do not affect the message context of
                 * either synchronous or asynchronous operations that have already been
                 * started.
                 * @return The context that is used in processing request messages.
                 */
                // @ts-ignore
                getRequestContext(): java.util.Map<java.lang.String, java.lang.Object>
                /**
                 * Get the context that resulted from processing a response message.
                 * The returned context is for the most recently completed synchronous
                 * operation. Subsequent synchronous operation invocations overwrite the
                 * response context. Asynchronous operations return their response context
                 * via the Response interface.
                 * @return The context that resulted from processing the latest
                 *  response messages.
                 */
                // @ts-ignore
                getResponseContext(): java.util.Map<java.lang.String, java.lang.Object>
                /**
                 * Get the Binding for this binding provider.
                 * @return The Binding for this binding provider.
                 */
                // @ts-ignore
                getBinding(): javax.xml.ws.Binding
                /**
                 * Returns the <code>EndpointReference</code> associated with
                 * this <code>BindingProvider</code> instance.
                 * <p>
                 * If the Binding for this <code>bindingProvider</code> is
                 * either SOAP1.1/HTTP or SOAP1.2/HTTP, then a
                 * <code>W3CEndpointReference</code> MUST be returned.
                 * @return EndpointReference of the target endpoint associated with this
                 *  <code>BindingProvider</code> instance.
                 * @throws java.lang.UnsupportedOperationException If this
                 *  <code>BindingProvider</code> uses the XML/HTTP binding.
                 * @see W3CEndpointReference
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                getEndpointReference(): javax.xml.ws.EndpointReference
                /**
                 * Returns the <code>EndpointReference</code> associated with
                 * this <code>BindingProvider</code> instance.  The instance
                 * returned will be of type <code>clazz</code>.
                 * @param clazz Specifies the type of <code>EndpointReference</code>
                 *  that MUST be returned.
                 * @return EndpointReference of the target endpoint associated with this
                 *  <code>BindingProvider</code> instance. MUST be of type
                 *  <code>clazz</code>.
                 * @throws WebServiceException If the Class <code>clazz</code>
                 *  is not supported by this implementation.
                 * @throws java.lang.UnsupportedOperationException If this
                 *  <code>BindingProvider</code> uses the XML/HTTP binding.
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                getEndpointReference<T extends javax.xml.ws.EndpointReference>(clazz: java.lang.Class<T>): T
            }
        }
    }
}
