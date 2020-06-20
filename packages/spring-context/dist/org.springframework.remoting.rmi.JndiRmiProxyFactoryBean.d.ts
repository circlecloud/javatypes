declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * {@link FactoryBean} for RMI proxies from JNDI.
                 * <p>Typically used for RMI-IIOP (CORBA), but can also be used for EJB home objects
                 * (for example, a Stateful Session Bean home). In contrast to a plain JNDI lookup,
                 * this accessor also performs narrowing through {@link javax.rmi.PortableRemoteObject}.
                 * <p>With conventional RMI services, this invoker is typically used with the RMI
                 * service interface. Alternatively, this invoker can also proxy a remote RMI service
                 * with a matching non-RMI business interface, i.e. an interface that mirrors the RMI
                 * service methods but does not declare RemoteExceptions. In the latter case,
                 * RemoteExceptions thrown by the RMI stub will automatically get converted to
                 * Spring's unchecked RemoteAccessException.
                 * <p>The JNDI environment can be specified as "jndiEnvironment" property,
                 * or be configured in a {@code jndi.properties} file or as system properties.
                 * For example:
                 * <pre class="code">&lt;property name="jndiEnvironment"&gt;
                 * &lt;props>
                 * &lt;prop key="java.naming.factory.initial"&gt;com.sun.jndi.cosnaming.CNCtxFactory&lt;/prop&gt;
                 * &lt;prop key="java.naming.provider.url"&gt;iiop://localhost:1050&lt;/prop&gt;
                 * &lt;/props&gt;
                 * &lt;/property&gt;</pre>
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #setServiceInterface
                 * @see #setJndiName
                 * @see #setJndiTemplate
                 * @see #setJndiEnvironment
                 * @see #setJndiName
                 * @see JndiRmiServiceExporter
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see java.rmi.RemoteException
                 * @see java.rmi.Remote
                 * @see javax.rmi.PortableRemoteObject#narrow
                 */
                // @ts-ignore
                class JndiRmiProxyFactoryBean extends org.springframework.remoting.rmi.JndiRmiClientInterceptor {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
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
