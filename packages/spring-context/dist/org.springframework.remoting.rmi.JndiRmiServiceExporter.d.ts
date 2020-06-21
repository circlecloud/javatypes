declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * Service exporter which binds RMI services to JNDI.
                 * Typically used for RMI-IIOP (CORBA).
                 * <p>Exports services via the {@link javax.rmi.PortableRemoteObject} class.
                 * You need to run "rmic" with the "-iiop" option to generate corresponding
                 * stubs and skeletons for each exported service.
                 * <p>Also supports exposing any non-RMI service via RMI invokers, to be accessed
                 * via {@link JndiRmiClientInterceptor} / {@link JndiRmiProxyFactoryBean}'s
                 * automatic detection of such invokers.
                 * <p>With an RMI invoker, RMI communication works on the {@link RmiInvocationHandler}
                 * level, needing only one stub for any service. Service interfaces do not have to
                 * extend {@code java.rmi.Remote} or throw {@code java.rmi.RemoteException}
                 * on all methods, but in and out parameters have to be serializable.
                 * <p>The JNDI environment can be specified as "jndiEnvironment" bean property,
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
                 * @see #setService
                 * @see #setJndiTemplate
                 * @see #setJndiEnvironment
                 * @see #setJndiName
                 * @see JndiRmiClientInterceptor
                 * @see JndiRmiProxyFactoryBean
                 * @see javax.rmi.PortableRemoteObject#exportObject
                 */
                // @ts-ignore
                class JndiRmiServiceExporter extends org.springframework.remoting.rmi.RmiBasedExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the JNDI template to use for JNDI lookups.
                     * You can also specify JNDI environment settings via "jndiEnvironment".
                     * @see #setJndiEnvironment
                     */
                    // @ts-ignore
                    public setJndiTemplate(jndiTemplate: org.springframework.jndi.JndiTemplate): void
                    /**
                     * Set the JNDI environment to use for JNDI lookups.
                     * Creates a JndiTemplate with the given environment settings.
                     * @see #setJndiTemplate
                     */
                    // @ts-ignore
                    public setJndiEnvironment(jndiEnvironment: java.util.Properties): void
                    /**
                     * Set the JNDI name of the exported RMI service.
                     */
                    // @ts-ignore
                    public setJndiName(jndiName: java.lang.String | string): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Initialize this service exporter, binding the specified service to JNDI.
                     * @throws NamingException if service binding failed
                     * @throws RemoteException if service export failed
                     */
                    // @ts-ignore
                    public prepare(): void
                    /**
                     * Rebind the specified service to JNDI, for recovering in case
                     * of the target registry having been restarted.
                     * @throws NamingException if service binding failed
                     */
                    // @ts-ignore
                    public rebind(): void
                    /**
                     * Unbind the RMI service from JNDI on bean factory shutdown.
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
