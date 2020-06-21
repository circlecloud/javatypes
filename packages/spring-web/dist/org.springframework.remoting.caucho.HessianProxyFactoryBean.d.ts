declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace caucho {
                /**
                 * {@link FactoryBean} for Hessian proxies. Exposes the proxied service
                 * for use as a bean reference, using the specified service interface.
                 * <p>Hessian is a slim, binary RPC protocol.
                 * For information on Hessian, see the
                 * <a href="http://hessian.caucho.com">Hessian website</a>
                 * <b>Note: As of Spring 4.0, this proxy factory requires Hessian 4.0 or above.</b>
                 * <p>The service URL must be an HTTP URL exposing a Hessian service.
                 * For details, see the {@link HessianClientInterceptor} javadoc.
                 * @author Juergen Hoeller
                 * @since 13.05.2003
                 * @see #setServiceInterface
                 * @see #setServiceUrl
                 * @see HessianClientInterceptor
                 * @see HessianServiceExporter
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean
                 * @see org.springframework.remoting.rmi.RmiProxyFactoryBean
                 */
                // @ts-ignore
                class HessianProxyFactoryBean extends org.springframework.remoting.caucho.HessianClientInterceptor {
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
