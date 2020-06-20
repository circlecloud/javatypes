declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * RMI exporter that exposes the specified service as RMI object with the specified name.
                 * Such services can be accessed via plain RMI or via {@link RmiProxyFactoryBean}.
                 * Also supports exposing any non-RMI service via RMI invokers, to be accessed via
                 * {@link RmiClientInterceptor} / {@link RmiProxyFactoryBean}'s automatic detection
                 * of such invokers.
                 * <p>With an RMI invoker, RMI communication works on the {@link RmiInvocationHandler}
                 * level, needing only one stub for any service. Service interfaces do not have to
                 * extend {@code java.rmi.Remote} or throw {@code java.rmi.RemoteException}
                 * on all methods, but in and out parameters have to be serializable.
                 * <p>The major advantage of RMI, compared to Hessian, is serialization.
                 * Effectively, any serializable Java object can be transported without hassle.
                 * Hessian has its own (de-)serialization mechanisms, but is HTTP-based and thus
                 * much easier to setup than RMI. Alternatively, consider Spring's HTTP invoker
                 * to combine Java serialization with HTTP-based transport.
                 * <p>Note: RMI makes a best-effort attempt to obtain the fully qualified host name.
                 * If one cannot be determined, it will fall back and use the IP address. Depending
                 * on your network configuration, in some cases it will resolve the IP to the loopback
                 * address. To ensure that RMI will use the host name bound to the correct network
                 * interface, you should pass the {@code java.rmi.server.hostname} property to the
                 * JVM that will export the registry and/or the service using the "-D" JVM argument.
                 * For example: {@code -Djava.rmi.server.hostname=myserver.com}
                 * @author Juergen Hoeller
                 * @since 13.05.2003
                 * @see RmiClientInterceptor
                 * @see RmiProxyFactoryBean
                 * @see java.rmi.Remote
                 * @see java.rmi.RemoteException
                 * @see org.springframework.remoting.caucho.HessianServiceExporter
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter
                 */
                // @ts-ignore
                class RmiServiceExporter extends org.springframework.remoting.rmi.RmiBasedExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the name of the exported RMI service,
                     * i.e. {@code rmi://host:port/NAME}
                     */
                    // @ts-ignore
                    setServiceName(serviceName: string): void
                    /**
                     * Set the port that the exported RMI service will use.
                     * <p>Default is 0 (anonymous port).
                     */
                    // @ts-ignore
                    setServicePort(servicePort: number /*int*/): void
                    /**
                     * Set a custom RMI client socket factory to use for exporting the service.
                     * <p>If the given object also implements {@code java.rmi.server.RMIServerSocketFactory},
                     * it will automatically be registered as server socket factory too.
                     * @see #setServerSocketFactory
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.server.RMIServerSocketFactory
                     * @see UnicastRemoteObject#exportObject(Remote, int, RMIClientSocketFactory, RMIServerSocketFactory)
                     */
                    // @ts-ignore
                    setClientSocketFactory(clientSocketFactory: java.rmi.server.RMIClientSocketFactory): void
                    /**
                     * Set a custom RMI server socket factory to use for exporting the service.
                     * <p>Only needs to be specified when the client socket factory does not
                     * implement {@code java.rmi.server.RMIServerSocketFactory} already.
                     * @see #setClientSocketFactory
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.server.RMIServerSocketFactory
                     * @see UnicastRemoteObject#exportObject(Remote, int, RMIClientSocketFactory, RMIServerSocketFactory)
                     */
                    // @ts-ignore
                    setServerSocketFactory(serverSocketFactory: java.rmi.server.RMIServerSocketFactory): void
                    /**
                     * Specify the RMI registry to register the exported service with.
                     * Typically used in combination with RmiRegistryFactoryBean.
                     * <p>Alternatively, you can specify all registry properties locally.
                     * This exporter will then try to locate the specified registry,
                     * automatically creating a new local one if appropriate.
                     * <p>Default is a local registry at the default port (1099),
                     * created on the fly if necessary.
                     * @see RmiRegistryFactoryBean
                     * @see #setRegistryHost
                     * @see #setRegistryPort
                     * @see #setRegistryClientSocketFactory
                     * @see #setRegistryServerSocketFactory
                     */
                    // @ts-ignore
                    setRegistry(registry: java.rmi.registry.Registry): void
                    /**
                     * Set the host of the registry for the exported RMI service,
                     * i.e. {@code rmi://HOST:port/name}
                     * <p>Default is localhost.
                     */
                    // @ts-ignore
                    setRegistryHost(registryHost: string): void
                    /**
                     * Set the port of the registry for the exported RMI service,
                     * i.e. {@code rmi://host:PORT/name}
                     * <p>Default is {@code Registry.REGISTRY_PORT} (1099).
                     * @see java.rmi.registry.Registry#REGISTRY_PORT
                     */
                    // @ts-ignore
                    setRegistryPort(registryPort: number /*int*/): void
                    /**
                     * Set a custom RMI client socket factory to use for the RMI registry.
                     * <p>If the given object also implements {@code java.rmi.server.RMIServerSocketFactory},
                     * it will automatically be registered as server socket factory too.
                     * @see #setRegistryServerSocketFactory
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.server.RMIServerSocketFactory
                     * @see LocateRegistry#getRegistry(String, int, RMIClientSocketFactory)
                     */
                    // @ts-ignore
                    setRegistryClientSocketFactory(registryClientSocketFactory: java.rmi.server.RMIClientSocketFactory): void
                    /**
                     * Set a custom RMI server socket factory to use for the RMI registry.
                     * <p>Only needs to be specified when the client socket factory does not
                     * implement {@code java.rmi.server.RMIServerSocketFactory} already.
                     * @see #setRegistryClientSocketFactory
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.server.RMIServerSocketFactory
                     * @see LocateRegistry#createRegistry(int, RMIClientSocketFactory, RMIServerSocketFactory)
                     */
                    // @ts-ignore
                    setRegistryServerSocketFactory(registryServerSocketFactory: java.rmi.server.RMIServerSocketFactory): void
                    /**
                     * Set whether to always create the registry in-process,
                     * not attempting to locate an existing registry at the specified port.
                     * <p>Default is "false". Switch this flag to "true" in order to avoid
                     * the overhead of locating an existing registry when you always
                     * intend to create a new registry in any case.
                     */
                    // @ts-ignore
                    setAlwaysCreateRegistry(alwaysCreateRegistry: boolean): void
                    /**
                     * Set whether to replace an existing binding in the RMI registry,
                     * that is, whether to simply override an existing binding with the
                     * specified service in case of a naming conflict in the registry.
                     * <p>Default is "true", assuming that an existing binding for this
                     * exporter's service name is an accidental leftover from a previous
                     * execution. Switch this to "false" to make the exporter fail in such
                     * a scenario, indicating that there was already an RMI object bound.
                     */
                    // @ts-ignore
                    setReplaceExistingBinding(replaceExistingBinding: boolean): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Initialize this service exporter, registering the service as RMI object.
                     * <p>Creates an RMI registry on the specified port if none exists.
                     * @throws RemoteException if service registration failed
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Locate or create the RMI registry for this exporter.
                     * @param registryHost the registry host to use (if this is specified,
                     *  no implicit creation of a RMI registry will happen)
                     * @param registryPort the registry port to use
                     * @param clientSocketFactory the RMI client socket factory for the registry (if any)
                     * @param serverSocketFactory the RMI server socket factory for the registry (if any)
                     * @return the RMI registry
                     * @throws RemoteException if the registry couldn't be located or created
                     */
                    // @ts-ignore
                    getRegistry(registryHost: string, registryPort: number /*int*/, clientSocketFactory: java.rmi.server.RMIClientSocketFactory, serverSocketFactory: java.rmi.server.RMIServerSocketFactory): java.rmi.registry.Registry
                    /**
                     * Locate or create the RMI registry for this exporter.
                     * @param registryPort the registry port to use
                     * @param clientSocketFactory the RMI client socket factory for the registry (if any)
                     * @param serverSocketFactory the RMI server socket factory for the registry (if any)
                     * @return the RMI registry
                     * @throws RemoteException if the registry couldn't be located or created
                     */
                    // @ts-ignore
                    getRegistry(registryPort: number /*int*/, clientSocketFactory: java.rmi.server.RMIClientSocketFactory, serverSocketFactory: java.rmi.server.RMIServerSocketFactory): java.rmi.registry.Registry
                    /**
                     * Locate or create the RMI registry for this exporter.
                     * @param registryPort the registry port to use
                     * @return the RMI registry
                     * @throws RemoteException if the registry couldn't be located or created
                     */
                    // @ts-ignore
                    getRegistry(registryPort: number /*int*/): java.rmi.registry.Registry
                    /**
                     * Test the given RMI registry, calling some operation on it to
                     * check whether it is still active.
                     * <p>Default implementation calls {@code Registry.list()}.
                     * @param registry the RMI registry to test
                     * @throws RemoteException if thrown by registry methods
                     * @see java.rmi.registry.Registry#list()
                     */
                    // @ts-ignore
                    testRegistry(registry: java.rmi.registry.Registry): void
                    /**
                     * Unbind the RMI service from the registry on bean factory shutdown.
                     */
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
