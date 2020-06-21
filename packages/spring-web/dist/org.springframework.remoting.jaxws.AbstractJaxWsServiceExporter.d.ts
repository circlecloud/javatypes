declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * Abstract exporter for JAX-WS services, autodetecting annotated service beans
                 * (through the JAX-WS {@link javax.jws.WebService} annotation).
                 * <p>Subclasses need to implement the {@link #publishEndpoint} template methods
                 * for actual endpoint exposure.
                 * @author Juergen Hoeller
                 * @since 2.5.5
                 * @see javax.jws.WebService
                 * @see javax.xml.ws.Endpoint
                 * @see SimpleJaxWsServiceExporter
                 */
                // @ts-ignore
                abstract class AbstractJaxWsServiceExporter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the property bag for the endpoint, including properties such as
                     * "javax.xml.ws.wsdl.service" or "javax.xml.ws.wsdl.port".
                     * @see javax.xml.ws.Endpoint#setProperties
                     * @see javax.xml.ws.Endpoint#WSDL_SERVICE
                     * @see javax.xml.ws.Endpoint#WSDL_PORT
                     */
                    // @ts-ignore
                    public setEndpointProperties(endpointProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Set the JDK concurrent executor to use for dispatching incoming requests
                     * to exported service instances.
                     * @see javax.xml.ws.Endpoint#setExecutor
                     */
                    // @ts-ignore
                    public setExecutor(executor: java.util.concurrent.Executor): void
                    /**
                     * Specify the binding type to use, overriding the value of
                     * the JAX-WS {@link javax.xml.ws.BindingType} annotation.
                     */
                    // @ts-ignore
                    public setBindingType(bindingType: java.lang.String | string): void
                    /**
                     * Specify WebServiceFeature objects (e.g. as inner bean definitions)
                     * to apply to JAX-WS endpoint creation.
                     * @since 4.0
                     */
                    // @ts-ignore
                    public setEndpointFeatures(...endpointFeatures: javax.xml.ws.WebServiceFeature[]): void
                    /**
                     * Obtains all web service beans and publishes them as JAX-WS endpoints.
                     */
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    /**
                     * Immediately publish all endpoints when fully configured.
                     * @see #publishEndpoints()
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Publish all {@link javax.jws.WebService} annotated beans in the
                     * containing BeanFactory.
                     * @see #publishEndpoint
                     */
                    // @ts-ignore
                    public publishEndpoints(): void
                    /**
                     * Create the actual Endpoint instance.
                     * @param bean the service object to wrap
                     * @return the Endpoint instance
                     * @see Endpoint#create(Object)
                     * @see Endpoint#create(String, Object)
                     */
                    // @ts-ignore
                    createEndpoint(bean: java.lang.Object | any): javax.xml.ws.Endpoint
                    /**
                     * Actually publish the given endpoint. To be implemented by subclasses.
                     * @param endpoint the JAX-WS Endpoint object
                     * @param annotation the service bean's WebService annotation
                     */
                    // @ts-ignore
                    abstract publishEndpoint(endpoint: javax.xml.ws.Endpoint, annotation: javax.jws.WebService): void
                    /**
                     * Actually publish the given provider endpoint. To be implemented by subclasses.
                     * @param endpoint the JAX-WS Provider Endpoint object
                     * @param annotation the service bean's WebServiceProvider annotation
                     */
                    // @ts-ignore
                    abstract publishEndpoint(endpoint: javax.xml.ws.Endpoint, annotation: javax.xml.ws.WebServiceProvider): void
                    /**
                     * Stops all published endpoints, taking the web services offline.
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
