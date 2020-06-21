declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * {@link org.springframework.beans.factory.FactoryBean} for a specific port of a
                 * JAX-WS service. Exposes a proxy for the port, to be used for bean references.
                 * Inherits configuration properties from {@link JaxWsPortClientInterceptor}.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see #setServiceInterface
                 * @see LocalJaxWsServiceFactoryBean
                 */
                // @ts-ignore
                class JaxWsPortProxyFactoryBean extends org.springframework.remoting.jaxws.JaxWsPortClientInterceptor {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): any
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
