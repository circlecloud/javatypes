declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                /**
                 * Service provider for <code>ServiceDelegate</code> and
                 * <code>Endpoint</code> objects.
                 * <p>
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                abstract class Provider extends java.lang.Object {
                    /**
                     * Creates a new instance of Provider
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * A constant representing the property used to lookup the
                     * name of a <code>Provider</code> implementation
                     * class.
                     */
                    // @ts-ignore
                    public static readonly JAXWSPROVIDER_PROPERTY: java.lang.String | string
                    /**
                     * Creates a new provider object.
                     * <p>
                     * The algorithm used to locate the provider subclass to use consists
                     * of the following steps:
                     * <p>
                     * <ul>
                     * <li>
                     * If a resource with the name of
                     * <code>META-INF/services/javax.xml.ws.spi.Provider</code>
                     * exists, then its first line, if present, is used as the UTF-8 encoded
                     * name of the implementation class.
                     * </li>
                     * <li>
                     * If the $java.home/lib/jaxws.properties file exists and it is readable by
                     * the <code>java.util.Properties.load(InputStream)</code> method and it contains
                     * an entry whose key is <code>javax.xml.ws.spi.Provider</code>, then the value of
                     * that entry is used as the name of the implementation class.
                     * </li>
                     * <li>
                     * If a system property with the name <code>javax.xml.ws.spi.Provider</code>
                     * is defined, then its value is used as the name of the implementation class.
                     * </li>
                     * <li>
                     * Finally, a default implementation class name is used.
                     * </li>
                     * </ul>
                     */
                    // @ts-ignore
                    public static provider(): javax.xml.ws.spi.Provider
                    /**
                     * Creates a service delegate object.
                     * <p>
                     * @param wsdlDocumentLocation A URL pointing to the WSDL document
                     *         for the service, or <code>null</code> if there isn't one.
                     * @param serviceName The qualified name of the service.
                     * @param serviceClass The service class, which MUST be either
                     *         <code>javax.xml.ws.Service</code> or a subclass thereof.
                     * @return The newly created service delegate.
                     */
                    // @ts-ignore
                    public abstract createServiceDelegate(wsdlDocumentLocation: java.net.URL, serviceName: javax.xml.namespace.QName, serviceClass: java.lang.Class<any>): javax.xml.ws.spi.ServiceDelegate
                    /**
                     * Creates a service delegate object.
                     * <p>
                     * @param wsdlDocumentLocation A URL pointing to the WSDL document
                     *         for the service, or <code>null</code> if there isn't one.
                     * @param serviceName The qualified name of the service.
                     * @param serviceClass The service class, which MUST be either
                     *         <code>javax.xml.ws.Service</code> or a subclass thereof.
                     * @param features Web Service features that must be configured on
                     *         the service. If the provider doesn't understand a feature,
                     *         it must throw a WebServiceException.
                     * @return The newly created service delegate.
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    public createServiceDelegate(wsdlDocumentLocation: java.net.URL, serviceName: javax.xml.namespace.QName, serviceClass: java.lang.Class<any>, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.spi.ServiceDelegate
                    /**
                     * Creates an endpoint object with the provided binding and implementation
                     * object.
                     * @param bindingId A URI specifying the desired binding (e.g. SOAP/HTTP)
                     * @param implementor A service implementation object to which
                     *         incoming requests will be dispatched. The corresponding
                     *         class MUST be annotated with all the necessary Web service
                     *         annotations.
                     * @return The newly created endpoint.
                     */
                    // @ts-ignore
                    public abstract createEndpoint(bindingId: java.lang.String | string, implementor: java.lang.Object | any): javax.xml.ws.Endpoint
                    /**
                     * Creates and publishes an endpoint object with the specified
                     * address and implementation object.
                     * @param address A URI specifying the address and transport/protocol
                     *         to use. A http: URI MUST result in the SOAP 1.1/HTTP
                     *         binding being used. Implementations may support other
                     *         URI schemes.
                     * @param implementor A service implementation object to which
                     *         incoming requests will be dispatched. The corresponding
                     *         class MUST be annotated with all the necessary Web service
                     *         annotations.
                     * @return The newly created endpoint.
                     */
                    // @ts-ignore
                    public abstract createAndPublishEndpoint(address: java.lang.String | string, implementor: java.lang.Object | any): javax.xml.ws.Endpoint
                    /**
                     * read an EndpointReference from the infoset contained in
                     * <code>eprInfoset</code>.
                     * @param eprInfoset infoset for EndpointReference
                     * @return the <code>EndpointReference</code> unmarshalled from
                     *  <code>eprInfoset</code>.  This method never returns <code>null</code>.
                     * @throws WebServiceException If there is an error creating the
                     *  <code>EndpointReference</code> from the specified <code>eprInfoset</code>.
                     * @throws NullPointerException If the <code>null</code>
                     *  <code>eprInfoset</code> value is given.
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract readEndpointReference(eprInfoset: javax.xml.transform.Source): javax.xml.ws.EndpointReference
                    /**
                     * The getPort method returns a proxy.  If there
                     * are any reference parameters in the
                     * <code>endpointReference</code>, then those reference
                     * parameters MUST appear as SOAP headers, indicating them to be
                     * reference parameters, on all messages sent to the endpoint.
                     * The parameter  <code>serviceEndpointInterface</code> specifies
                     * the service endpoint interface that is supported by the
                     * returned proxy.
                     * The parameter <code>endpointReference</code> specifies the
                     * endpoint that will be invoked by the returned proxy.
                     * In the implementation of this method, the JAX-WS
                     * runtime system takes the responsibility of selecting a protocol
                     * binding (and a port) and configuring the proxy accordingly from
                     * the WSDL metadata of the
                     * <code>serviceEndpointInterface</code> and the <code>EndpointReference</code>.
                     * For this method
                     * to successfully return a proxy, WSDL metadata MUST be available and the
                     * <code>endpointReference</code> MUST contain an implementation understood
                     * <code>serviceName</code> metadata.
                     * @param endpointReference the EndpointReference that will
                     *  be invoked by the returned proxy.
                     * @param serviceEndpointInterface Service endpoint interface
                     * @param features  A list of WebServiceFeatures to configure on the
                     *                 proxy.  Supported features not in the <code>features
                     *                 </code> parameter will have their default values.
                     * @return Object Proxy instance that supports the
                     *                   specified service endpoint interface
                     * @throws WebServiceException
                     *                   <UL>
                     *                   <LI>If there is an error during creation
                     *                       of the proxy
                     *                   <LI>If there is any missing WSDL metadata
                     *                       as required by this method}
                     *                   <LI>If this
                     *                       <code>endpointReference</code>
                     *                       is illegal
                     *                   <LI>If an illegal
                     *                       <code>serviceEndpointInterface</code>
                     *                       is specified
                     *                   <LI>If a feature is enabled that is not compatible with
                     *                       this port or is unsupported.
                     *                    </UL>
                     * @see WebServiceFeature
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract getPort<T>(endpointReference: javax.xml.ws.EndpointReference, serviceEndpointInterface: java.lang.Class<T>, ...features: javax.xml.ws.WebServiceFeature[]): T
                    /**
                     * Factory method to create a <code>W3CEndpointReference</code>.
                     * <p>
                     * This method can be used to create a <code>W3CEndpointReference</code>
                     * for any endpoint by specifying the <code>address</code> property along
                     * with any other desired properties.  This method
                     * can also be used to create a <code>W3CEndpointReference</code> for
                     * an endpoint that is published by the same Java EE application.
                     * To do so the <code>address</code> property can be provided or this
                     * method can automatically determine the <code>address</code> of
                     * an endpoint that is published by the same Java EE application and is
                     * identified by the <code>serviceName</code> and
                     * <code>portName</code> propeties.  If the <code>address</code> is
                     * <code>null</code> and the <code>serviceName</code> and
                     * <code>portName</code> do not identify an endpoint published by the
                     * same Java EE application, a
                     * <code>javax.lang.IllegalStateException</code> MUST be thrown.
                     * @param address Specifies the address of the target endpoint
                     * @param serviceName Qualified name of the service in the WSDL.
                     * @param portName Qualified name of the endpoint in the WSDL.
                     * @param metadata A list of elements that should be added to the
                     *  <code>W3CEndpointReference</code> instances <code>wsa:metadata</code>
                     *  element.
                     * @param wsdlDocumentLocation URL for the WSDL document location for
                     *  the service.
                     * @param referenceParameters Reference parameters to be associated
                     *  with the returned <code>EndpointReference</code> instance.
                     * @return the <code>W3CEndpointReference</code> created from
                     *           <code>serviceName</code>, <code>portName</code>,
                     *           <code>metadata</code>, <code>wsdlDocumentLocation</code>
                     *           and <code>referenceParameters</code>. This method
                     *           never returns <code>null</code>.
                     * @throws java.lang.IllegalStateException
                     *      <ul>
                     *         <li>If the <code>address</code>, <code>serviceName</code> and
                     *             <code>portName</code> are all <code>null</code>.
                     *         <li>If the <code>serviceName</code> service is <code>null</code> and the
                     *             <code>portName</code> is NOT <code>null</code>.
                     *         <li>If the <code>address</code> property is <code>null</code> and
                     *             the <code>serviceName</code> and <code>portName</code> do not
                     *             specify a valid endpoint published by the same Java EE
                     *             application.
                     *         <li>If the <code>serviceName</code>is NOT <code>null</code>
                     *              and is not present in the specified WSDL.
                     *         <li>If the <code>portName</code> port is not <code>null</code> and it
                     *              is not present in <code>serviceName</code> service in the WSDL.
                     *         <li>If the <code>wsdlDocumentLocation</code> is NOT <code>null</code>
                     *             and does not represent a valid WSDL.
                     *      </ul>
                     * @throws WebServiceException If an error occurs while creating the
                     *                              <code>W3CEndpointReference</code>.
                     * @since JAX-WS 2.1
                     */
                    // @ts-ignore
                    public abstract createW3CEndpointReference(address: java.lang.String | string, serviceName: javax.xml.namespace.QName, portName: javax.xml.namespace.QName, metadata: java.util.List<org.w3c.dom.Element> | Array<org.w3c.dom.Element>, wsdlDocumentLocation: java.lang.String | string, referenceParameters: java.util.List<org.w3c.dom.Element> | Array<org.w3c.dom.Element>): javax.xml.ws.wsaddressing.W3CEndpointReference
                    /**
                     * Factory method to create a <code>W3CEndpointReference</code>.
                     * Using this method, a <code>W3CEndpointReference</code> instance
                     * can be created with extension elements, and attributes.
                     * <code>Provider</code> implementations must override the default
                     * implementation.
                     * <p>
                     * This method can be used to create a <code>W3CEndpointReference</code>
                     * for any endpoint by specifying the <code>address</code> property along
                     * with any other desired properties.  This method
                     * can also be used to create a <code>W3CEndpointReference</code> for
                     * an endpoint that is published by the same Java EE application.
                     * To do so the <code>address</code> property can be provided or this
                     * method can automatically determine the <code>address</code> of
                     * an endpoint that is published by the same Java EE application and is
                     * identified by the <code>serviceName</code> and
                     * <code>portName</code> propeties.  If the <code>address</code> is
                     * <code>null</code> and the <code>serviceName</code> and
                     * <code>portName</code> do not identify an endpoint published by the
                     * same Java EE application, a
                     * <code>javax.lang.IllegalStateException</code> MUST be thrown.
                     * @param address Specifies the address of the target endpoint
                     * @param interfaceName the <code>wsam:InterfaceName</code> element in the
                     *  <code>wsa:Metadata</code> element.
                     * @param serviceName Qualified name of the service in the WSDL.
                     * @param portName Qualified name of the endpoint in the WSDL.
                     * @param metadata A list of elements that should be added to the
                     *  <code>W3CEndpointReference</code> instances <code>wsa:metadata</code>
                     *  element.
                     * @param wsdlDocumentLocation URL for the WSDL document location for
                     *  the service.
                     * @param referenceParameters Reference parameters to be associated
                     *  with the returned <code>EndpointReference</code> instance.
                     * @param elements extension elements to be associated
                     *  with the returned <code>EndpointReference</code> instance.
                     * @param attributes extension attributes to be associated
                     *  with the returned <code>EndpointReference</code> instance.
                     * @return the <code>W3CEndpointReference</code> created from
                     *           <code>serviceName</code>, <code>portName</code>,
                     *           <code>metadata</code>, <code>wsdlDocumentLocation</code>
                     *           and <code>referenceParameters</code>. This method
                     *           never returns <code>null</code>.
                     * @throws java.lang.IllegalStateException
                     *      <ul>
                     *         <li>If the <code>address</code>, <code>serviceName</code> and
                     *             <code>portName</code> are all <code>null</code>.
                     *         <li>If the <code>serviceName</code> service is <code>null</code> and the
                     *             <code>portName</code> is NOT <code>null</code>.
                     *         <li>If the <code>address</code> property is <code>null</code> and
                     *             the <code>serviceName</code> and <code>portName</code> do not
                     *             specify a valid endpoint published by the same Java EE
                     *             application.
                     *         <li>If the <code>serviceName</code>is NOT <code>null</code>
                     *              and is not present in the specified WSDL.
                     *         <li>If the <code>portName</code> port is not <code>null</code> and it
                     *              is not present in <code>serviceName</code> service in the WSDL.
                     *         <li>If the <code>wsdlDocumentLocation</code> is NOT <code>null</code>
                     *             and does not represent a valid WSDL.
                     *         <li>If the <code>wsdlDocumentLocation</code> is NOT <code>null</code> but
                     *             wsdli:wsdlLocation's namespace name cannot be got from the available
                     *             metadata.
                     *      </ul>
                     * @throws WebServiceException If an error occurs while creating the
                     *                              <code>W3CEndpointReference</code>.
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    public createW3CEndpointReference(address: java.lang.String | string, interfaceName: javax.xml.namespace.QName, serviceName: javax.xml.namespace.QName, portName: javax.xml.namespace.QName, metadata: java.util.List<org.w3c.dom.Element> | Array<org.w3c.dom.Element>, wsdlDocumentLocation: java.lang.String | string, referenceParameters: java.util.List<org.w3c.dom.Element> | Array<org.w3c.dom.Element>, elements: java.util.List<org.w3c.dom.Element> | Array<org.w3c.dom.Element>, attributes: java.util.Map<javax.xml.namespace.QName, java.lang.String | string>): javax.xml.ws.wsaddressing.W3CEndpointReference
                    /**
                     * Creates and publishes an endpoint object with the specified
                     * address, implementation object and web service features.
                     * <code>Provider</code> implementations must override the
                     * default implementation.
                     * @param address A URI specifying the address and transport/protocol
                     *         to use. A http: URI MUST result in the SOAP 1.1/HTTP
                     *         binding being used. Implementations may support other
                     *         URI schemes.
                     * @param implementor A service implementation object to which
                     *         incoming requests will be dispatched. The corresponding
                     *         class MUST be annotated with all the necessary Web service
                     *         annotations.
                     * @param features A list of WebServiceFeatures to configure on the
                     *         endpoint.  Supported features not in the <code>features
                     *         </code> parameter will have their default values.
                     * @return The newly created endpoint.
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    public createAndPublishEndpoint(address: java.lang.String | string, implementor: java.lang.Object | any, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                    /**
                     * Creates an endpoint object with the provided binding, implementation
                     * object and web service features. <code>Provider</code> implementations
                     * must override the default implementation.
                     * @param bindingId A URI specifying the desired binding (e.g. SOAP/HTTP)
                     * @param implementor A service implementation object to which
                     *         incoming requests will be dispatched. The corresponding
                     *         class MUST be annotated with all the necessary Web service
                     *         annotations.
                     * @param features A list of WebServiceFeatures to configure on the
                     *         endpoint.  Supported features not in the <code>features
                     *         </code> parameter will have their default values.
                     * @return The newly created endpoint.
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    public createEndpoint(bindingId: java.lang.String | string, implementor: java.lang.Object | any, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                    /**
                     * Creates an endpoint object with the provided binding, implementation
                     * class, invoker and web service features. Containers typically use
                     * this to create Endpoint objects. <code>Provider</code>
                     * implementations must override the default implementation.
                     * @param bindingId A URI specifying the desired binding (e.g. SOAP/HTTP).
                     *         Can be null.
                     * @param implementorClass A service implementation class that
                     *         MUST be annotated with all the necessary Web service
                     *         annotations.
                     * @param invoker that does the actual invocation on the service instance.
                     * @param features A list of WebServiceFeatures to configure on the
                     *         endpoint.  Supported features not in the <code>features
                     *         </code> parameter will have their default values.
                     * @return The newly created endpoint.
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    public createEndpoint(bindingId: java.lang.String | string, implementorClass: java.lang.Class<any>, invoker: javax.xml.ws.spi.Invoker, ...features: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                }
            }
        }
    }
}
