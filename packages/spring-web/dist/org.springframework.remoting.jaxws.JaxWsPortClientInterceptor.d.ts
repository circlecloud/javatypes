declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * {@link org.aopalliance.intercept.MethodInterceptor} for accessing a
                 * specific port of a JAX-WS service.
                 * <p>Uses either {@link LocalJaxWsServiceFactory}'s facilities underneath,
                 * or takes an explicit reference to an existing JAX-WS Service instance
                 * (e.g. obtained via {@link org.springframework.jndi.JndiObjectFactoryBean}).
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see #setPortName
                 * @see #setServiceInterface
                 * @see javax.xml.ws.Service#getPort
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see org.springframework.jndi.JndiObjectFactoryBean
                 */
                // @ts-ignore
                class JaxWsPortClientInterceptor extends org.springframework.remoting.jaxws.LocalJaxWsServiceFactory {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set a reference to an existing JAX-WS Service instance,
                     * for example obtained via {@link org.springframework.jndi.JndiObjectFactoryBean}.
                     * If not set, {@link LocalJaxWsServiceFactory}'s properties have to be specified.
                     * @see #setWsdlDocumentUrl
                     * @see #setNamespaceUri
                     * @see #setServiceName
                     * @see org.springframework.jndi.JndiObjectFactoryBean
                     */
                    // @ts-ignore
                    setJaxWsService(jaxWsService: javax.xml.ws.Service): void
                    /**
                     * Return a reference to an existing JAX-WS Service instance, if any.
                     */
                    // @ts-ignore
                    getJaxWsService(): javax.xml.ws.Service
                    /**
                     * Set the name of the port.
                     * Corresponds to the "wsdl:port" name.
                     */
                    // @ts-ignore
                    setPortName(portName: string): void
                    /**
                     * Return the name of the port.
                     */
                    // @ts-ignore
                    getPortName(): java.lang.String
                    /**
                     * Set the username to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#USERNAME_PROPERTY
                     */
                    // @ts-ignore
                    setUsername(username: string): void
                    /**
                     * Return the username to specify on the stub.
                     */
                    // @ts-ignore
                    getUsername(): java.lang.String
                    /**
                     * Set the password to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#PASSWORD_PROPERTY
                     */
                    // @ts-ignore
                    setPassword(password: string): void
                    /**
                     * Return the password to specify on the stub.
                     */
                    // @ts-ignore
                    getPassword(): java.lang.String
                    /**
                     * Set the endpoint address to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#ENDPOINT_ADDRESS_PROPERTY
                     */
                    // @ts-ignore
                    setEndpointAddress(endpointAddress: string): void
                    /**
                     * Return the endpoint address to specify on the stub.
                     */
                    // @ts-ignore
                    getEndpointAddress(): java.lang.String
                    /**
                     * Set the "session.maintain" flag to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#SESSION_MAINTAIN_PROPERTY
                     */
                    // @ts-ignore
                    setMaintainSession(maintainSession: boolean): void
                    /**
                     * Return the "session.maintain" flag to specify on the stub.
                     */
                    // @ts-ignore
                    isMaintainSession(): boolean
                    /**
                     * Set the "soapaction.use" flag to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#SOAPACTION_USE_PROPERTY
                     */
                    // @ts-ignore
                    setUseSoapAction(useSoapAction: boolean): void
                    /**
                     * Return the "soapaction.use" flag to specify on the stub.
                     */
                    // @ts-ignore
                    isUseSoapAction(): boolean
                    /**
                     * Set the SOAP action URI to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#SOAPACTION_URI_PROPERTY
                     */
                    // @ts-ignore
                    setSoapActionUri(soapActionUri: string): void
                    /**
                     * Return the SOAP action URI to specify on the stub.
                     */
                    // @ts-ignore
                    getSoapActionUri(): java.lang.String
                    /**
                     * Set custom properties to be set on the stub.
                     * <p>Can be populated with a String "value" (parsed via PropertiesEditor)
                     * or a "props" element in XML bean definitions.
                     * @see javax.xml.ws.BindingProvider#getRequestContext()
                     */
                    // @ts-ignore
                    setCustomProperties(customProperties: java.util.Map<java.lang.String, java.lang.Object>): void
                    /**
                     * Allow Map access to the custom properties to be set on the stub,
                     * with the option to add or override specific entries.
                     * <p>Useful for specifying entries directly, for example via
                     * "customProperties[myKey]". This is particularly useful for
                     * adding or overriding entries in child bean definitions.
                     */
                    // @ts-ignore
                    getCustomProperties(): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Add a custom property to this JAX-WS BindingProvider.
                     * @param name the name of the attribute to expose
                     * @param value the attribute value to expose
                     * @see javax.xml.ws.BindingProvider#getRequestContext()
                     */
                    // @ts-ignore
                    addCustomProperty(name: string, value: any): void
                    /**
                     * Specify WebServiceFeature objects (e.g. as inner bean definitions)
                     * to apply to JAX-WS port stub creation.
                     * @since 4.0
                     * @see Service#getPort(Class, javax.xml.ws.WebServiceFeature...)
                     * @see #setServiceFeatures
                     */
                    // @ts-ignore
                    setPortFeatures(...features: javax.xml.ws.WebServiceFeature[]): void
                    /**
                     * Set the interface of the service that this factory should create a proxy for.
                     */
                    // @ts-ignore
                    setServiceInterface(serviceInterface: java.lang.Class<any>): void
                    /**
                     * Return the interface of the service that this factory should create a proxy for.
                     */
                    // @ts-ignore
                    getServiceInterface(): java.lang.Class<?>
                    /**
                     * Set whether to look up the JAX-WS service on startup.
                     * <p>Default is "true". Turn this flag off to allow for late start
                     * of the target server. In this case, the JAX-WS service will be
                     * lazily fetched on first access.
                     */
                    // @ts-ignore
                    setLookupServiceOnStartup(lookupServiceOnStartup: boolean): void
                    /**
                     * Set the bean ClassLoader to use for this interceptor: primarily for
                     * building a client proxy in the {@link JaxWsPortProxyFactoryBean} subclass.
                     */
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the bean ClassLoader to use for this interceptor.
                     */
                    // @ts-ignore
                    getBeanClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Initialize the JAX-WS port for this interceptor.
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Initialize this client interceptor's properties from the given WebService annotation,
                     * if necessary and possible (i.e. if "wsdlDocumentUrl", "namespaceUri", "serviceName"
                     * and "portName" haven't been set but corresponding values are declared at the
                     * annotation level of the specified service interface).
                     * @param ann the WebService annotation found on the specified service interface
                     */
                    // @ts-ignore
                    applyDefaultsFromAnnotation(ann: javax.jws.WebService): void
                    /**
                     * Return whether this client interceptor has already been prepared,
                     * i.e. has already looked up the JAX-WS service and port.
                     */
                    // @ts-ignore
                    isPrepared(): boolean
                    /**
                     * Return the prepared QName for the port.
                     * @see #setPortName
                     * @see #getQName
                     */
                    // @ts-ignore
                    getPortQName(): javax.xml.namespace.QName
                    /**
                     * Obtain the port stub from the given JAX-WS Service.
                     * @param service the Service object to obtain the port from
                     * @param portQName the name of the desired port, if specified
                     * @return the corresponding port object as returned from
                     *  {#code Service.getPort(...)}
                     */
                    // @ts-ignore
                    getPortStub(service: javax.xml.ws.Service, portQName: javax.xml.namespace.QName): java.lang.Object
                    /**
                     * Prepare the given JAX-WS port stub, applying properties to it.
                     * Called by {@link #prepare}.
                     * @param stub the current JAX-WS port stub
                     * @see #setUsername
                     * @see #setPassword
                     * @see #setEndpointAddress
                     * @see #setMaintainSession
                     * @see #setCustomProperties
                     */
                    // @ts-ignore
                    preparePortStub(stub: any): void
                    /**
                     * Return the underlying JAX-WS port stub that this interceptor delegates to
                     * for each method invocation on the proxy.
                     */
                    // @ts-ignore
                    getPortStub(): java.lang.Object
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Perform a JAX-WS service invocation based on the given method invocation.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #getPortStub()
                     * @see #doInvoke(org.aopalliance.intercept.MethodInvocation, Object)
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Perform a JAX-WS service invocation on the given port stub.
                     * @param invocation the AOP method invocation
                     * @param portStub the RMI port stub to invoke
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #getPortStub()
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation, portStub: any): java.lang.Object
                }
            }
        }
    }
}
