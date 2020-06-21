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
                    public setJaxWsService(jaxWsService: javax.xml.ws.Service): void
                    /**
                     * Return a reference to an existing JAX-WS Service instance, if any.
                     */
                    // @ts-ignore
                    public getJaxWsService(): javax.xml.ws.Service
                    /**
                     * Set the name of the port.
                     * Corresponds to the "wsdl:port" name.
                     */
                    // @ts-ignore
                    public setPortName(portName: java.lang.String | string): void
                    /**
                     * Return the name of the port.
                     */
                    // @ts-ignore
                    public getPortName(): string
                    /**
                     * Set the username to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#USERNAME_PROPERTY
                     */
                    // @ts-ignore
                    public setUsername(username: java.lang.String | string): void
                    /**
                     * Return the username to specify on the stub.
                     */
                    // @ts-ignore
                    public getUsername(): string
                    /**
                     * Set the password to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#PASSWORD_PROPERTY
                     */
                    // @ts-ignore
                    public setPassword(password: java.lang.String | string): void
                    /**
                     * Return the password to specify on the stub.
                     */
                    // @ts-ignore
                    public getPassword(): string
                    /**
                     * Set the endpoint address to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#ENDPOINT_ADDRESS_PROPERTY
                     */
                    // @ts-ignore
                    public setEndpointAddress(endpointAddress: java.lang.String | string): void
                    /**
                     * Return the endpoint address to specify on the stub.
                     */
                    // @ts-ignore
                    public getEndpointAddress(): string
                    /**
                     * Set the "session.maintain" flag to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#SESSION_MAINTAIN_PROPERTY
                     */
                    // @ts-ignore
                    public setMaintainSession(maintainSession: boolean): void
                    /**
                     * Return the "session.maintain" flag to specify on the stub.
                     */
                    // @ts-ignore
                    public isMaintainSession(): boolean
                    /**
                     * Set the "soapaction.use" flag to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#SOAPACTION_USE_PROPERTY
                     */
                    // @ts-ignore
                    public setUseSoapAction(useSoapAction: boolean): void
                    /**
                     * Return the "soapaction.use" flag to specify on the stub.
                     */
                    // @ts-ignore
                    public isUseSoapAction(): boolean
                    /**
                     * Set the SOAP action URI to specify on the stub.
                     * @see javax.xml.ws.BindingProvider#SOAPACTION_URI_PROPERTY
                     */
                    // @ts-ignore
                    public setSoapActionUri(soapActionUri: java.lang.String | string): void
                    /**
                     * Return the SOAP action URI to specify on the stub.
                     */
                    // @ts-ignore
                    public getSoapActionUri(): string
                    /**
                     * Set custom properties to be set on the stub.
                     * <p>Can be populated with a String "value" (parsed via PropertiesEditor)
                     * or a "props" element in XML bean definitions.
                     * @see javax.xml.ws.BindingProvider#getRequestContext()
                     */
                    // @ts-ignore
                    public setCustomProperties(customProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Allow Map access to the custom properties to be set on the stub,
                     * with the option to add or override specific entries.
                     * <p>Useful for specifying entries directly, for example via
                     * "customProperties[myKey]". This is particularly useful for
                     * adding or overriding entries in child bean definitions.
                     */
                    // @ts-ignore
                    public getCustomProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Add a custom property to this JAX-WS BindingProvider.
                     * @param name the name of the attribute to expose
                     * @param value the attribute value to expose
                     * @see javax.xml.ws.BindingProvider#getRequestContext()
                     */
                    // @ts-ignore
                    public addCustomProperty(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Specify WebServiceFeature objects (e.g. as inner bean definitions)
                     * to apply to JAX-WS port stub creation.
                     * @since 4.0
                     * @see Service#getPort(Class, javax.xml.ws.WebServiceFeature...)
                     * @see #setServiceFeatures
                     */
                    // @ts-ignore
                    public setPortFeatures(...features: javax.xml.ws.WebServiceFeature[]): void
                    /**
                     * Set the interface of the service that this factory should create a proxy for.
                     */
                    // @ts-ignore
                    public setServiceInterface(serviceInterface: java.lang.Class<any>): void
                    /**
                     * Return the interface of the service that this factory should create a proxy for.
                     */
                    // @ts-ignore
                    public getServiceInterface(): java.lang.Class<any>
                    /**
                     * Set whether to look up the JAX-WS service on startup.
                     * <p>Default is "true". Turn this flag off to allow for late start
                     * of the target server. In this case, the JAX-WS service will be
                     * lazily fetched on first access.
                     */
                    // @ts-ignore
                    public setLookupServiceOnStartup(lookupServiceOnStartup: boolean): void
                    /**
                     * Set the bean ClassLoader to use for this interceptor: primarily for
                     * building a client proxy in the {@link JaxWsPortProxyFactoryBean} subclass.
                     */
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the bean ClassLoader to use for this interceptor.
                     */
                    // @ts-ignore
                    getBeanClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Initialize the JAX-WS port for this interceptor.
                     */
                    // @ts-ignore
                    public prepare(): void
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
                    getPortStub(service: javax.xml.ws.Service, portQName: javax.xml.namespace.QName): any
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
                    preparePortStub(stub: java.lang.Object | any): void
                    /**
                     * Return the underlying JAX-WS port stub that this interceptor delegates to
                     * for each method invocation on the proxy.
                     */
                    // @ts-ignore
                    getPortStub(): any
                    // @ts-ignore
                    public invoke(invocation: MethodInvocation): any
                    /**
                     * Perform a JAX-WS service invocation based on the given method invocation.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #getPortStub()
                     * @see #doInvoke(org.aopalliance.intercept.MethodInvocation, Object)
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation): any
                    /**
                     * Perform a JAX-WS service invocation on the given port stub.
                     * @param invocation the AOP method invocation
                     * @param portStub the RMI port stub to invoke
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #getPortStub()
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation, portStub: java.lang.Object | any): any
                }
            }
        }
    }
}
