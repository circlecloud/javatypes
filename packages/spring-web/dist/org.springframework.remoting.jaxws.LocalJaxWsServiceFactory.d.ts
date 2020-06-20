declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * Factory for locally defined JAX-WS {@link javax.xml.ws.Service} references.
                 * Uses the JAX-WS {@link javax.xml.ws.Service#create} factory API underneath.
                 * <p>Serves as base class for {@link LocalJaxWsServiceFactoryBean} as well as
                 * {@link JaxWsPortClientInterceptor} and {@link JaxWsPortProxyFactoryBean}.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see javax.xml.ws.Service
                 * @see LocalJaxWsServiceFactoryBean
                 * @see JaxWsPortClientInterceptor
                 * @see JaxWsPortProxyFactoryBean
                 */
                // @ts-ignore
                class LocalJaxWsServiceFactory extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the URL of the WSDL document that describes the service.
                     * @see #setWsdlDocumentResource(Resource)
                     */
                    // @ts-ignore
                    setWsdlDocumentUrl(wsdlDocumentUrl: java.net.URL): void
                    /**
                     * Set the WSDL document URL as a {@link Resource}.
                     * @since 3.2
                     */
                    // @ts-ignore
                    setWsdlDocumentResource(wsdlDocumentResource: Resource): void
                    /**
                     * Return the URL of the WSDL document that describes the service.
                     */
                    // @ts-ignore
                    getWsdlDocumentUrl(): java.net.URL
                    /**
                     * Set the namespace URI of the service.
                     * Corresponds to the WSDL "targetNamespace".
                     */
                    // @ts-ignore
                    setNamespaceUri(namespaceUri: string): void
                    /**
                     * Return the namespace URI of the service.
                     */
                    // @ts-ignore
                    getNamespaceUri(): java.lang.String
                    /**
                     * Set the name of the service to look up.
                     * Corresponds to the "wsdl:service" name.
                     */
                    // @ts-ignore
                    setServiceName(serviceName: string): void
                    /**
                     * Return the name of the service.
                     */
                    // @ts-ignore
                    getServiceName(): java.lang.String
                    /**
                     * Specify WebServiceFeature objects (e.g. as inner bean definitions)
                     * to apply to JAX-WS service creation.
                     * @since 4.0
                     * @see Service#create(QName, WebServiceFeature...)
                     */
                    // @ts-ignore
                    setServiceFeatures(...serviceFeatures: javax.xml.ws.WebServiceFeature[]): void
                    /**
                     * Set the JDK concurrent executor to use for asynchronous executions
                     * that require callbacks.
                     * @see javax.xml.ws.Service#setExecutor
                     */
                    // @ts-ignore
                    setExecutor(executor: java.util.concurrent.Executor): void
                    /**
                     * Set the JAX-WS HandlerResolver to use for all proxies and dispatchers
                     * created through this factory.
                     * @see javax.xml.ws.Service#setHandlerResolver
                     */
                    // @ts-ignore
                    setHandlerResolver(handlerResolver: javax.xml.ws.handler.HandlerResolver): void
                    /**
                     * Create a JAX-WS Service according to the parameters of this factory.
                     * @see #setServiceName
                     * @see #setWsdlDocumentUrl
                     */
                    // @ts-ignore
                    createJaxWsService(): javax.xml.ws.Service
                    /**
                     * Return a QName for the given name, relative to the namespace URI
                     * of this factory, if given.
                     * @see #setNamespaceUri
                     */
                    // @ts-ignore
                    getQName(name: string): javax.xml.namespace.QName
                }
            }
        }
    }
}
