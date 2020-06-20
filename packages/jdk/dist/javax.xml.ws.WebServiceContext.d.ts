declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * A <code>WebServiceContext</code> makes it possible for
             * a web service endpoint implementation class to access
             * message context and security information relative to
             * a request being served.
             * Typically a <code>WebServiceContext</code> is injected
             * into an endpoint implementation class using the
             * <code>Resource</code> annotation.
             * @since JAX-WS 2.0
             * @see javax.annotation.Resource
             */
            // @ts-ignore
            interface WebServiceContext {
                /**
                 * Returns the <code>MessageContext</code> for the request being served
                 * at the time this method is called. Only properties with
                 * APPLICATION scope will be visible to the application.
                 * @return MessageContext The message context.
                 * @throws IllegalStateException This exception is thrown
                 *          if the method is called while no request is
                 *          being serviced.
                 * @see javax.xml.ws.handler.MessageContext
                 * @see javax.xml.ws.handler.MessageContext.Scope
                 * @see java.lang.IllegalStateException
                 */
                // @ts-ignore
                getMessageContext(): javax.xml.ws.handler.MessageContext
                /**
                 * Returns the Principal that identifies the sender
                 * of the request currently being serviced. If the
                 * sender has not been authenticated, the method
                 * returns <code>null</code>.
                 * @return Principal The principal object.
                 * @throws IllegalStateException This exception is thrown
                 *          if the method is called while no request is
                 *          being serviced.
                 * @see java.security.Principal
                 * @see java.lang.IllegalStateException
                 */
                // @ts-ignore
                getUserPrincipal(): java.security.Principal
                /**
                 * Returns a boolean indicating whether the
                 * authenticated user is included in the specified
                 * logical role. If the user has not been
                 * authenticated, the method returns <code>false</code>.
                 * @param role  A <code>String</code> specifying the name of the role
                 * @return a <code>boolean</code> indicating whether
                 *  the sender of the request belongs to a given role
                 * @throws IllegalStateException This exception is thrown
                 *          if the method is called while no request is
                 *          being serviced.
                 */
                // @ts-ignore
                isUserInRole(role: string): boolean
                /**
                 * Returns the <code>EndpointReference</code> for this
                 * endpoint.
                 * <p>
                 * If the {@link Binding} for this <code>bindingProvider</code> is
                 * either SOAP1.1/HTTP or SOAP1.2/HTTP, then a
                 * <code>W3CEndpointReference</code> MUST be returned.
                 * @param referenceParameters Reference parameters to be associated with the
                 *  returned <code>EndpointReference</code> instance.
                 * @return EndpointReference of the endpoint associated with this
                 *  <code>WebServiceContext</code>.
                 *  If the returned <code>EndpointReference</code> is of type
                 *  <code>W3CEndpointReference</code> then it MUST contain the
                 *  the specified <code>referenceParameters</code>.
                 * @throws IllegalStateException This exception is thrown
                 *          if the method is called while no request is
                 *          being serviced.
                 * @see W3CEndpointReference
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                getEndpointReference(...referenceParameters: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
                /**
                 * Returns the <code>EndpointReference</code> associated with
                 * this endpoint.
                 * @param clazz The type of <code>EndpointReference</code> that
                 *  MUST be returned.
                 * @param referenceParameters Reference parameters to be associated with the
                 *  returned <code>EndpointReference</code> instance.
                 * @return EndpointReference of type <code>clazz</code> of the endpoint
                 *  associated with this <code>WebServiceContext</code> instance.
                 *  If the returned <code>EndpointReference</code> is of type
                 *  <code>W3CEndpointReference</code> then it MUST contain the
                 *  the specified <code>referenceParameters</code>.
                 * @throws IllegalStateException This exception is thrown
                 *          if the method is called while no request is
                 *          being serviced.
                 * @throws WebServiceException If the <code>clazz</code> type of
                 *  <code>EndpointReference</code> is not supported.
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                getEndpointReference<T extends javax.xml.ws.EndpointReference>(clazz: java.lang.Class<T>, ...referenceParameters: org.w3c.dom.Element[]): T
            }
        }
    }
}
