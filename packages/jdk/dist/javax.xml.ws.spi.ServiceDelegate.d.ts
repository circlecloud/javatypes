declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                /**
                 * Service delegates are used internally by <code>Service</code> objects
                 * to allow pluggability of JAX-WS implementations.
                 * <p>
                 * Every <code>Service</code> object has its own delegate, created using
                 * the {@link javax.xml.ws.spi.Provider#createServiceDelegate} method. A <code>Service</code>
                 * object delegates all of its instance methods to its delegate.
                 * @see javax.xml.ws.Service
                 * @see javax.xml.ws.spi.Provider
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                abstract class ServiceDelegate extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The <code>getPort</code> method returns a proxy. A service client
                     * uses this proxy to invoke operations on the target
                     * service endpoint. The <code>serviceEndpointInterface</code>
                     * specifies the service endpoint interface that is supported by
                     * the created dynamic proxy instance.
                     * @param portName  Qualified name of the service endpoint in
                     *                   the WSDL service description
                     * @param serviceEndpointInterface Service endpoint interface
                     *                   supported by the dynamic proxy
                     * @return Object Proxy instance that
                     *                 supports the specified service endpoint
                     *                 interface
                     * @throws WebServiceException This exception is thrown in the
                     *                   following cases:
                     *                   <UL>
                     *                   <LI>If there is an error in creation of
                     *                       the proxy
                     *                   <LI>If there is any missing WSDL metadata
                     *                       as required by this method
                     *                   <LI>If an illegal
                     *                       <code>serviceEndpointInterface</code>
                     *                       or <code>portName</code> is specified
                     *                   </UL>
                     * @see java.lang.reflect.Proxy
                     * @see java.lang.reflect.InvocationHandler
                     */
                    // @ts-ignore
                    public abstract getPort<T>(portName: javax.xml.namespace.QName, serviceEndpointInterface: java.lang.Class<T>): T
                    /**
                     * The <code>getPort</code> method returns a proxy. A service client
                     * uses this proxy to invoke operations on the target
                     * service endpoint. The <code>serviceEndpointInterface</code>
                     * specifies the service endpoint interface that is supported by
                     * the created dynamic proxy instance.
                     * @param portName  Qualified name of the service endpoint in
                     *                   the WSDL service description
                     * @param serviceEndpointInterface Service endpoint interface
                     *                   supported by the dynamic proxy or instance
                     * @param features  A list of WebServiceFeatures to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Object Proxy instance that
                     *                 supports the specified service endpoint
                     *                 interface
                     * @throws WebServiceException This exception is thrown in the
                     *                   following cases:
                     *                   <UL>
                     *                   <LI>If there is an error in creation of
                     *                       the proxy
                     *                   <LI>If there is any missing WSDL metadata
                     *                       as required by this method
                     *                   <LI>If an illegal
                     *                       <code>serviceEndpointInterface</code>
                     *                       or <code>portName</code> is specified
                     *                   <LI>If a feature is enabled that is not compatible
                     *                       with this port or is unsupported.
                     *                   </UL>
                     * @see java.lang.reflect.Proxy
                     * @see java.lang.reflect.InvocationHandler
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract getPort<T>(portName: javax.xml.namespace.QName, serviceEndpointInterface: java.lang.Class<T>, ...features: javax.xml.ws.WebServiceFeature[]): T
                    /**
                     * The <code>getPort</code> method returns a proxy.
                     * The parameter <code>endpointReference</code> specifies the
                     * endpoint that will be invoked by the returned proxy.  If there
                     * are any reference parameters in the
                     * <code>endpointReference</code>, then those reference
                     * parameters MUST appear as SOAP headers, indicating them to be
                     * reference parameters, on all messages sent to the endpoint.
                     * The <code>endpointReference's</code> address MUST be used
                     * for invocations on the endpoint.
                     * The parameter <code>serviceEndpointInterface</code> specifies
                     * the service endpoint interface that is supported by the
                     * returned proxy.
                     * In the implementation of this method, the JAX-WS
                     * runtime system takes the responsibility of selecting a protocol
                     * binding (and a port) and configuring the proxy accordingly from
                     * the WSDL associated with this <code>Service</code> instance or
                     * from the metadata from the <code>endpointReference</code>.
                     * If this <code>Service</code> instance has a WSDL and
                     * the <code>endpointReference</code> metadata
                     * also has a WSDL, then the WSDL from this instance MUST be used.
                     * If this <code>Service</code> instance does not have a WSDL and
                     * the <code>endpointReference</code> does have a WSDL, then the
                     * WSDL from the <code>endpointReference</code> MAY be used.
                     * The returned proxy should not be reconfigured by the client.
                     * If this <code>Service</code> instance has a known proxy
                     * port that matches the information contained in
                     * the WSDL,
                     * then that proxy is returned, otherwise a WebServiceException
                     * is thrown.
                     * <p>
                     * Calling this method has the same behavior as the following
                     * <pre>
                     * <code>port = service.getPort(portName, serviceEndpointInterface);</code>
                     * </pre>
                     * where the <code>portName</code> is retrieved from the
                     * metadata of the <code>endpointReference</code> or from the
                     * <code>serviceEndpointInterface</code> and the WSDL
                     * associated with this <code>Service</code> instance.
                     * @param endpointReference  The <code>EndpointReference</code>
                     *  for the target service endpoint that will be invoked by the
                     *  returned proxy.
                     * @param serviceEndpointInterface Service endpoint interface.
                     * @param features  A list of <code>WebServiceFeatures</code> to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Object Proxy instance that supports the
                     *                   specified service endpoint interface.
                     * @throws WebServiceException
                     *                   <UL>
                     *                   <LI>If there is an error during creation
                     *                       of the proxy.
                     *                   <LI>If there is any missing WSDL metadata
                     *                       as required by this method.
                     *                   <LI>If the <code>endpointReference</code> metadata does
                     *                       not match the <code>serviceName</code> of this
                     *                       <code>Service</code> instance.
                     *                   <LI>If a <code>portName</code> cannot be extracted
                     *                       from the WSDL or <code>endpointReference</code> metadata.
                     *                   <LI>If an invalid
                     *                       <code>endpointReference</code>
                     *                       is specified.
                     *                   <LI>If an invalid
                     *                       <code>serviceEndpointInterface</code>
                     *                       is specified.
                     *                   <LI>If a feature is enabled that is not compatible
                     *                       with this port or is unsupported.
                     *                   </UL>
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract getPort<T>(endpointReference: javax.xml.ws.EndpointReference, serviceEndpointInterface: java.lang.Class<T>, ...features: javax.xml.ws.WebServiceFeature[]): T
                    /**
                     * The <code>getPort</code> method returns a proxy. The parameter
                     * <code>serviceEndpointInterface</code> specifies the service
                     * endpoint interface that is supported by the returned proxy.
                     * In the implementation of this method, the JAX-WS
                     * runtime system takes the responsibility of selecting a protocol
                     * binding (and a port) and configuring the proxy accordingly.
                     * The returned proxy should not be reconfigured by the client.
                     * @param serviceEndpointInterface Service endpoint interface
                     * @return Object instance that supports the
                     *                   specified service endpoint interface
                     * @throws WebServiceException
                     *                   <UL>
                     *                   <LI>If there is an error during creation
                     *                       of the proxy
                     *                   <LI>If there is any missing WSDL metadata
                     *                       as required by this method
                     *                   <LI>If an illegal
                     *                       <code>serviceEndpointInterface</code>
                     *                       is specified
                     *                   </UL>
                     */
                    // @ts-ignore
                    public abstract getPort<T>(serviceEndpointInterface: java.lang.Class<T>): T
                    /**
                     * The <code>getPort</code> method returns a proxy. The parameter
                     * <code>serviceEndpointInterface</code> specifies the service
                     * endpoint interface that is supported by the returned proxy.
                     * In the implementation of this method, the JAX-WS
                     * runtime system takes the responsibility of selecting a protocol
                     * binding (and a port) and configuring the proxy accordingly.
                     * The returned proxy should not be reconfigured by the client.
                     * @param serviceEndpointInterface Service endpoint interface
                     * @param features  An array of <code>WebServiceFeatures</code> to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Object instance that supports the
                     *                   specified service endpoint interface
                     * @throws WebServiceException
                     *                   <UL>
                     *                   <LI>If there is an error during creation
                     *                       of the proxy
                     *                   <LI>If there is any missing WSDL metadata
                     *                       as required by this method
                     *                   <LI>If an illegal
                     *                       <code>serviceEndpointInterface</code>
                     *                       is specified
                     *                   <LI>If a feature is enabled that is not compatible
                     *                       with this port or is unsupported.
                     *                   </UL>
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract getPort<T>(serviceEndpointInterface: java.lang.Class<T>, ...features: javax.xml.ws.WebServiceFeature[]): T
                    /**
                     * Creates a new port for the service. Ports created in this way contain
                     * no WSDL port type information and can only be used for creating
                     * <code>Dispatch</code>instances.
                     * @param portName  Qualified name for the target service endpoint
                     * @param bindingId A URI identifier of a binding.
                     * @param endpointAddress Address of the target service endpoint as a URI
                     * @throws WebServiceException If any error in the creation of
                     *  the port
                     * @see javax.xml.ws.soap.SOAPBinding#SOAP11HTTP_BINDING
                     * @see javax.xml.ws.soap.SOAPBinding#SOAP12HTTP_BINDING
                     * @see javax.xml.ws.http.HTTPBinding#HTTP_BINDING
                     */
                    // @ts-ignore
                    public abstract addPort(portName: javax.xml.namespace.QName, bindingId: java.lang.String | string, endpointAddress: java.lang.String | string): void
                    /**
                     * Creates a <code>Dispatch</code> instance for use with objects of
                     * the user's choosing.
                     * @param portName  Qualified name for the target service endpoint
                     * @param type The class of object used for messages or message
                     *  payloads. Implementations are required to support
                     *  <code>javax.xml.transform.Source</code> and <code>javax.xml.soap.SOAPMessage</code>.
                     * @param mode Controls whether the created dispatch instance is message
                     *  or payload oriented, i.e. whether the user will work with complete
                     *  protocol messages or message payloads. E.g. when using the SOAP
                     *  protocol, this parameter controls whether the user will work with
                     *  SOAP messages or the contents of a SOAP body. Mode MUST be <code>MESSAGE</code>
                     *  when type is <code>SOAPMessage</code>.
                     * @return Dispatch instance
                     * @throws WebServiceException If any error in the creation of
                     *                   the <code>Dispatch</code> object
                     * @see javax.xml.transform.Source
                     * @see javax.xml.soap.SOAPMessage
                     */
                    // @ts-ignore
                    public abstract createDispatch<T>(portName: javax.xml.namespace.QName, type: java.lang.Class<T>, mode: javax.xml.ws.Service.Mode): javax.xml.ws.Dispatch<T>
                    /**
                     * Creates a <code>Dispatch</code> instance for use with objects of
                     * the user's choosing.
                     * @param portName  Qualified name for the target service endpoint
                     * @param type The class of object used for messages or message
                     *  payloads. Implementations are required to support
                     *  <code>javax.xml.transform.Source</code> and <code>javax.xml.soap.SOAPMessage</code>.
                     * @param mode Controls whether the created dispatch instance is message
                     *  or payload oriented, i.e. whether the user will work with complete
                     *  protocol messages or message payloads. E.g. when using the SOAP
                     *  protocol, this parameter controls whether the user will work with
                     *  SOAP messages or the contents of a SOAP body. Mode MUST be <code>MESSAGE</code>
                     *  when type is <code>SOAPMessage</code>.
                     * @param features  A list of <code>WebServiceFeatures</code> to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Dispatch instance
                     * @throws WebServiceException If any error in the creation of
                     *                   the <code>Dispatch</code> object or if a
                     *                   feature is enabled that is not compatible with
                     *                   this port or is unsupported.
                     * @see javax.xml.transform.Source
                     * @see javax.xml.soap.SOAPMessage
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract createDispatch<T>(portName: javax.xml.namespace.QName, type: java.lang.Class<T>, mode: javax.xml.ws.Service.Mode, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                    /**
                     * Creates a <code>Dispatch</code> instance for use with objects of
                     * the user's choosing. If there
                     * are any reference parameters in the
                     * <code>endpointReference</code>, then those reference
                     * parameters MUST appear as SOAP headers, indicating them to be
                     * reference parameters, on all messages sent to the endpoint.
                     * The <code>endpointReference's</code> address MUST be used
                     * for invocations on the endpoint.
                     * In the implementation of this method, the JAX-WS
                     * runtime system takes the responsibility of selecting a protocol
                     * binding (and a port) and configuring the dispatch accordingly from
                     * the WSDL associated with this <code>Service</code> instance or
                     * from the metadata from the <code>endpointReference</code>.
                     * If this <code>Service</code> instance has a WSDL and
                     * the <code>endpointReference</code>
                     * also has a WSDL in its metadata, then the WSDL from this instance MUST be used.
                     * If this <code>Service</code> instance does not have a WSDL and
                     * the <code>endpointReference</code> does have a WSDL, then the
                     * WSDL from the <code>endpointReference</code> MAY be used.
                     * An implementation MUST be able to retrieve the <code>portName</code> from the
                     * <code>endpointReference</code> metadata.
                     * <p>
                     * This method behaves the same as calling
                     * <pre>
                     * <code>dispatch = service.createDispatch(portName, type, mode, features);</code>
                     * </pre>
                     * where the <code>portName</code> is retrieved from the
                     * WSDL or <code>EndpointReference</code> metadata.
                     * @param endpointReference  The <code>EndpointReference</code>
                     *  for the target service endpoint that will be invoked by the
                     *  returned <code>Dispatch</code> object.
                     * @param type The class of object used to messages or message
                     *  payloads. Implementations are required to support
                     *  <code>javax.xml.transform.Source</code> and <code>javax.xml.soap.SOAPMessage</code>.
                     * @param mode Controls whether the created dispatch instance is message
                     *  or payload oriented, i.e. whether the user will work with complete
                     *  protocol messages or message payloads. E.g. when using the SOAP
                     *  protocol, this parameter controls whether the user will work with
                     *  SOAP messages or the contents of a SOAP body. Mode MUST be <code>MESSAGE</code>
                     *  when type is <code>SOAPMessage</code>.
                     * @param features  An array of <code>WebServiceFeatures</code> to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Dispatch instance
                     * @throws WebServiceException
                     *                   <UL>
                     *                     <LI>If there is any missing WSDL metadata
                     *                       as required by this method.
                     *                     <li>If the <code>endpointReference</code> metadata does
                     *                       not match the <code>serviceName</code> or <code>portName</code>
                     *                       of a WSDL associated
                     *                       with this <code>Service</code> instance.
                     *                     <li>If the <code>portName</code> cannot be determined
                     *                     from the <code>EndpointReference</code> metadata.
                     *                     <li>If any error in the creation of
                     *                      the <code>Dispatch</code> object.
                     *                     <li>If a feature is enabled that is not
                     *                     compatible with this port or is unsupported.
                     *                   </UL>
                     * @see javax.xml.transform.Source
                     * @see javax.xml.soap.SOAPMessage
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract createDispatch<T>(endpointReference: javax.xml.ws.EndpointReference, type: java.lang.Class<T>, mode: javax.xml.ws.Service.Mode, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                    /**
                     * Creates a <code>Dispatch</code> instance for use with JAXB
                     * generated objects.
                     * @param portName  Qualified name for the target service endpoint
                     * @param context The JAXB context used to marshall and unmarshall
                     *  messages or message payloads.
                     * @param mode Controls whether the created dispatch instance is message
                     *  or payload oriented, i.e. whether the user will work with complete
                     *  protocol messages or message payloads. E.g. when using the SOAP
                     *  protocol, this parameter controls whether the user will work with
                     *  SOAP messages or the contents of a SOAP body.
                     * @return Dispatch instance
                     * @throws WebServiceException If any error in the creation of
                     *                   the <code>Dispatch</code> object
                     * @see javax.xml.bind.JAXBContext
                     */
                    // @ts-ignore
                    public abstract createDispatch(portName: javax.xml.namespace.QName, context: javax.xml.bind.JAXBContext, mode: javax.xml.ws.Service.Mode): javax.xml.ws.Dispatch<java.lang.Object | any>
                    /**
                     * Creates a <code>Dispatch</code> instance for use with JAXB
                     * generated objects.
                     * @param portName  Qualified name for the target service endpoint
                     * @param context The JAXB context used to marshall and unmarshall
                     *  messages or message payloads.
                     * @param mode Controls whether the created dispatch instance is message
                     *  or payload oriented, i.e. whether the user will work with complete
                     *  protocol messages or message payloads. E.g. when using the SOAP
                     *  protocol, this parameter controls whether the user will work with
                     *  SOAP messages or the contents of a SOAP body.
                     * @param features  A list of <code>WebServiceFeatures</code> to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Dispatch instance
                     * @throws WebServiceException If any error in the creation of
                     *                   the <code>Dispatch</code> object or if a
                     *                   feature is enabled that is not compatible with
                     *                   this port or is unsupported.
                     * @see javax.xml.bind.JAXBContext
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract createDispatch(portName: javax.xml.namespace.QName, context: javax.xml.bind.JAXBContext, mode: javax.xml.ws.Service.Mode, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object | any>
                    /**
                     * Creates a <code>Dispatch</code> instance for use with JAXB
                     * generated objects. If there
                     * are any reference parameters in the
                     * <code>endpointReference</code>, then those reference
                     * parameters MUST appear as SOAP headers, indicating them to be
                     * reference parameters, on all messages sent to the endpoint.
                     * The <code>endpointReference's</code> address MUST be used
                     * for invocations on the endpoint.
                     * In the implementation of this method, the JAX-WS
                     * runtime system takes the responsibility of selecting a protocol
                     * binding (and a port) and configuring the dispatch accordingly from
                     * the WSDL associated with this <code>Service</code> instance or
                     * from the metadata from the <code>endpointReference</code>.
                     * If this <code>Service</code> instance has a WSDL and
                     * the <code>endpointReference</code>
                     * also has a WSDL in its metadata, then the WSDL from this instance
                     * MUST be used.
                     * If this <code>Service</code> instance does not have a WSDL and
                     * the <code>endpointReference</code> does have a WSDL, then the
                     * WSDL from the <code>endpointReference</code> MAY be used.
                     * An implementation MUST be able to retrieve the <code>portName</code> from the
                     * <code>endpointReference</code> metadata.
                     * <p>
                     * This method behavies the same as calling
                     * <pre>
                     * <code>dispatch = service.createDispatch(portName, context, mode, features);</code>
                     * </pre>
                     * where the <code>portName</code> is retrieved from the
                     * WSDL or <code>endpointReference</code> metadata.
                     * @param endpointReference  The <code>EndpointReference</code>
                     *  for the target service endpoint that will be invoked by the
                     *  returned <code>Dispatch</code> object.
                     * @param context The JAXB context used to marshall and unmarshall
                     *  messages or message payloads.
                     * @param mode Controls whether the created dispatch instance is message
                     *  or payload oriented, i.e. whether the user will work with complete
                     *  protocol messages or message payloads. E.g. when using the SOAP
                     *  protocol, this parameter controls whether the user will work with
                     *  SOAP messages or the contents of a SOAP body.
                     * @param features  An array of <code>WebServiceFeatures</code> to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Dispatch instance
                     * @throws WebServiceException
                     *                   <UL>
                     *                     <li>If there is any missing WSDL metadata
                     *                       as required by this method.
                     *                     <li>If the <code>endpointReference</code> metadata does
                     *                     not match the <code>serviceName</code> or <code>portName</code>
                     *                     of a WSDL associated
                     *                     with this <code>Service</code> instance.
                     *                     <li>If the <code>portName</code> cannot be determined
                     *                     from the <code>EndpointReference</code> metadata.
                     *                     <li>If any error in the creation of
                     *                     the <code>Dispatch</code> object.
                     *                     <li>if a feature is enabled that is not
                     *                     compatible with this port or is unsupported.
                     *                   </UL>
                     * @see javax.xml.bind.JAXBContext
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract createDispatch(endpointReference: javax.xml.ws.EndpointReference, context: javax.xml.bind.JAXBContext, mode: javax.xml.ws.Service.Mode, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object | any>
                    /**
                     * Gets the name of this service.
                     * @return Qualified name of this service
                     */
                    // @ts-ignore
                    public abstract getServiceName(): javax.xml.namespace.QName
                    /**
                     * Returns an <code>Iterator</code> for the list of
                     * <code>QName</code>s of service endpoints grouped by this
                     * service
                     * @return Returns <code>java.util.Iterator</code> with elements
                     *          of type <code>javax.xml.namespace.QName</code>
                     * @throws WebServiceException If this Service class does not
                     *          have access to the required WSDL metadata
                     */
                    // @ts-ignore
                    public abstract getPorts(): java.util.Iterator<javax.xml.namespace.QName>
                    /**
                     * Gets the location of the WSDL document for this Service.
                     * @return URL for the location of the WSDL document for
                     *          this service
                     */
                    // @ts-ignore
                    public abstract getWSDLDocumentLocation(): java.net.URL
                    /**
                     * Returns the configured handler resolver.
                     * @return HandlerResolver The <code>HandlerResolver</code> being
                     *          used by this <code>Service</code> instance, or <code>null</code>
                     *          if there isn't one.
                     */
                    // @ts-ignore
                    public abstract getHandlerResolver(): javax.xml.ws.handler.HandlerResolver
                    /**
                     * Sets the <code>HandlerResolver</code> for this <code>Service</code>
                     * instance.
                     * <p>
                     * The handler resolver, if present, will be called once for each
                     * proxy or dispatch instance that is created, and the handler chain
                     * returned by the resolver will be set on the instance.
                     * @param handlerResolver The <code>HandlerResolver</code> to use
                     *         for all subsequently created proxy/dispatch objects.
                     * @see javax.xml.ws.handler.HandlerResolver
                     */
                    // @ts-ignore
                    public abstract setHandlerResolver(handlerResolver: javax.xml.ws.handler.HandlerResolver): void
                    /**
                     * Returns the executor for this <code>Service</code>instance.
                     * The executor is used for all asynchronous invocations that
                     * require callbacks.
                     * @return The <code>java.util.concurrent.Executor</code> to be
                     *          used to invoke a callback.
                     * @see java.util.concurrent.Executor
                     */
                    // @ts-ignore
                    public abstract getExecutor(): java.util.concurrent.Executor
                    /**
                     * Sets the executor for this <code>Service</code> instance.
                     * The executor is used for all asynchronous invocations that
                     * require callbacks.
                     * @param executor The <code>java.util.concurrent.Executor</code>
                     *         to be used to invoke a callback.
                     * @throws SecurityException If the instance does not support
                     *          setting an executor for security reasons (e.g. the
                     *          necessary permissions are missing).
                     * @see java.util.concurrent.Executor
                     */
                    // @ts-ignore
                    public abstract setExecutor(executor: java.util.concurrent.Executor): void
                }
            }
        }
    }
}
