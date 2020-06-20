declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * {@link FactoryBean} for RMI proxies, supporting both conventional RMI services
                 * and RMI invokers. Exposes the proxied service for use as a bean reference,
                 * using the specified service interface. Proxies will throw Spring's unchecked
                 * RemoteAccessException on remote invocation failure instead of RMI's RemoteException.
                 * <p>The service URL must be a valid RMI URL like "rmi://localhost:1099/myservice".
                 * RMI invokers work at the RmiInvocationHandler level, using the same invoker stub
                 * for any service. Service interfaces do not have to extend {@code java.rmi.Remote}
                 * or throw {@code java.rmi.RemoteException}. Of course, in and out parameters
                 * have to be serializable.
                 * <p>With conventional RMI services, this proxy factory is typically used with the
                 * RMI service interface. Alternatively, this factory can also proxy a remote RMI
                 * service with a matching non-RMI business interface, i.e. an interface that mirrors
                 * the RMI service methods but does not declare RemoteExceptions. In the latter case,
                 * RemoteExceptions thrown by the RMI stub will automatically get converted to
                 * Spring's unchecked RemoteAccessException.
                 * <p>The major advantage of RMI, compared to Hessian, is serialization.
                 * Effectively, any serializable Java object can be transported without hassle.
                 * Hessian has its own (de-)serialization mechanisms, but is HTTP-based and thus
                 * much easier to setup than RMI. Alternatively, consider Spring's HTTP invoker
                 * to combine Java serialization with HTTP-based transport.
                 * @author Juergen Hoeller
                 * @since 13.05.2003
                 * @see #setServiceInterface
                 * @see #setServiceUrl
                 * @see RmiClientInterceptor
                 * @see RmiServiceExporter
                 * @see java.rmi.Remote
                 * @see java.rmi.RemoteException
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see org.springframework.remoting.caucho.HessianProxyFactoryBean
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean
                 */
                // @ts-ignore
                class RmiProxyFactoryBean extends org.springframework.remoting.rmi.RmiClientInterceptor {
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
