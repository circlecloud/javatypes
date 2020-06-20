declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * Simple exporter for JAX-WS services, autodetecting annotated service beans
                 * (through the JAX-WS {@link javax.jws.WebService} annotation) and exporting
                 * them with a configured base address (by default "http://localhost:8080/")
                 * using the JAX-WS provider's built-in publication support. The full address
                 * for each service will consist of the base address with the service name
                 * appended (e.g. "http://localhost:8080/OrderService").
                 * <p>Note that this exporter will only work if the JAX-WS runtime actually
                 * supports publishing with an address argument, i.e. if the JAX-WS runtime
                 * ships an internal HTTP server.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see javax.jws.WebService
                 * @see javax.xml.ws.Endpoint#publish(String)
                 */
                // @ts-ignore
                class SimpleJaxWsServiceExporter extends org.springframework.remoting.jaxws.AbstractJaxWsServiceExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default base address.
                     */
                    // @ts-ignore
                    readonly DEFAULT_BASE_ADDRESS: string
                    /**
                     * Set the base address for exported services.
                     * Default is "http://localhost:8080/".
                     * <p>For each actual publication address, the service name will be
                     * appended to this base address. E.g. service name "OrderService"
                     * -> "http://localhost:8080/OrderService".
                     * @see javax.xml.ws.Endpoint#publish(String)
                     * @see javax.jws.WebService#serviceName()
                     */
                    // @ts-ignore
                    setBaseAddress(baseAddress: string): void
                    // @ts-ignore
                    publishEndpoint(endpoint: javax.xml.ws.Endpoint, annotation: javax.jws.WebService): void
                    // @ts-ignore
                    publishEndpoint(endpoint: javax.xml.ws.Endpoint, annotation: javax.xml.ws.WebServiceProvider): void
                    /**
                     * Calculate the full endpoint address for the given endpoint.
                     * @param endpoint the JAX-WS Provider Endpoint object
                     * @param serviceName the given service name
                     * @return the full endpoint address
                     */
                    // @ts-ignore
                    calculateEndpointAddress(endpoint: javax.xml.ws.Endpoint, serviceName: string): java.lang.String
                }
            }
        }
    }
}
