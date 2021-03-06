declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace jaxws {
                /**
                 * {@link org.springframework.beans.factory.FactoryBean} for locally
                 * defined JAX-WS Service references.
                 * Uses {@link LocalJaxWsServiceFactory}'s facilities underneath.
                 * <p>Alternatively, JAX-WS Service references can be looked up
                 * in the JNDI environment of the Java EE container.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see javax.xml.ws.Service
                 * @see org.springframework.jndi.JndiObjectFactoryBean
                 * @see JaxWsPortProxyFactoryBean
                 */
                // @ts-ignore
                class LocalJaxWsServiceFactoryBean extends org.springframework.remoting.jaxws.LocalJaxWsServiceFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): javax.xml.ws.Service
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
