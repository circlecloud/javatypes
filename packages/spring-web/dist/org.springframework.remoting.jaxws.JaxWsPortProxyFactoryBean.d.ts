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
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getObject(): java.lang.Object
                    // @ts-ignore
                    getObjectType(): java.lang.Class<?>
                    // @ts-ignore
                    isSingleton(): boolean
                }
            }
        }
    }
}
