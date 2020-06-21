declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * {@link FactoryBean} that locates a {@link java.rmi.registry.Registry} and
                 * exposes it for bean references. Can also create a local RMI registry
                 * on the fly if none exists already.
                 * <p>Can be used to set up and pass around the actual Registry object to
                 * applications objects that need to work with RMI. One example for such an
                 * object that needs to work with RMI is Spring's {@link RmiServiceExporter},
                 * which either works with a passed-in Registry reference or falls back to
                 * the registry as specified by its local properties and defaults.
                 * <p>Also useful to enforce creation of a local RMI registry at a given port,
                 * for example for a JMX connector. If used in conjunction with
                 * {@link org.springframework.jmx.support.ConnectorServerFactoryBean},
                 * it is recommended to mark the connector definition (ConnectorServerFactoryBean)
                 * as "depends-on" the registry definition (RmiRegistryFactoryBean),
                 * to guarantee starting up the registry first.
                 * <p>Note: The implementation of this class mirrors the corresponding logic
                 * in {@link RmiServiceExporter}, and also offers the same customization hooks.
                 * RmiServiceExporter implements its own registry lookup as a convenience:
                 * It is very common to simply rely on the registry defaults.
                 * @author Juergen Hoeller
                 * @since 1.2.3
                 * @see RmiServiceExporter#setRegistry
                 * @see org.springframework.jmx.support.ConnectorServerFactoryBean
                 * @see java.rmi.registry.Registry
                 * @see java.rmi.registry.LocateRegistry
                 */
                // @ts-ignore
                class RmiRegistryFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the host of the registry for the exported RMI service,
                     * i.e. {@code rmi://HOST:port/name}
                     * <p>Default is localhost.
                     */
                    // @ts-ignore
                    public setHost(host: java.lang.String | string): void
                    /**
                     * Return the host of the registry for the exported RMI service.
                     */
                    // @ts-ignore
                    public getHost(): string
                    /**
                     * Set the port of the registry for the exported RMI service,
                     * i.e. {@code rmi://host:PORT/name}
                     * <p>Default is {@code Registry.REGISTRY_PORT} (1099).
                     */
                    // @ts-ignore
                    public setPort(port: number /*int*/): void
                    /**
                     * Return the port of the registry for the exported RMI service.
                     */
                    // @ts-ignore
                    public getPort(): number /*int*/
                    /**
                     * Set a custom RMI client socket factory to use for the RMI registry.
                     * <p>If the given object also implements {@code java.rmi.server.RMIServerSocketFactory},
                     * it will automatically be registered as server socket factory too.
                     * @see #setServerSocketFactory
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.server.RMIServerSocketFactory
                     * @see java.rmi.registry.LocateRegistry#getRegistry(String, int, java.rmi.server.RMIClientSocketFactory)
                     */
                    // @ts-ignore
                    public setClientSocketFactory(clientSocketFactory: java.rmi.server.RMIClientSocketFactory): void
                    /**
                     * Set a custom RMI server socket factory to use for the RMI registry.
                     * <p>Only needs to be specified when the client socket factory does not
                     * implement {@code java.rmi.server.RMIServerSocketFactory} already.
                     * @see #setClientSocketFactory
                     * @see java.rmi.server.RMIClientSocketFactory
                     * @see java.rmi.server.RMIServerSocketFactory
                     * @see java.rmi.registry.LocateRegistry#createRegistry(int, RMIClientSocketFactory, java.rmi.server.RMIServerSocketFactory)
                     */
                    // @ts-ignore
                    public setServerSocketFactory(serverSocketFactory: java.rmi.server.RMIServerSocketFactory): void
                    /**
                     * Set whether to always create the registry in-process,
                     * not attempting to locate an existing registry at the specified port.
                     * <p>Default is "false". Switch this flag to "true" in order to avoid
                     * the overhead of locating an existing registry when you always
                     * intend to create a new registry in any case.
                     */
                    // @ts-ignore
                    public setAlwaysCreate(alwaysCreate: boolean): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Locate or create the RMI registry.
                     * @param registryHost the registry host to use (if this is specified,
                     *  no implicit creation of a RMI registry will happen)
                     * @param registryPort the registry port to use
                     * @param clientSocketFactory the RMI client socket factory for the registry (if any)
                     * @param serverSocketFactory the RMI server socket factory for the registry (if any)
                     * @return the RMI registry
                     * @throws java.rmi.RemoteException if the registry couldn't be located or created
                     */
                    // @ts-ignore
                    getRegistry(registryHost: java.lang.String | string, registryPort: number /*int*/, clientSocketFactory: java.rmi.server.RMIClientSocketFactory, serverSocketFactory: java.rmi.server.RMIServerSocketFactory): java.rmi.registry.Registry
                    /**
                     * Locate or create the RMI registry.
                     * @param registryPort the registry port to use
                     * @param clientSocketFactory the RMI client socket factory for the registry (if any)
                     * @param serverSocketFactory the RMI server socket factory for the registry (if any)
                     * @return the RMI registry
                     * @throws RemoteException if the registry couldn't be located or created
                     */
                    // @ts-ignore
                    getRegistry(registryPort: number /*int*/, clientSocketFactory: java.rmi.server.RMIClientSocketFactory, serverSocketFactory: java.rmi.server.RMIServerSocketFactory): java.rmi.registry.Registry
                    /**
                     * Locate or create the RMI registry.
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
                    // @ts-ignore
                    public getObject(): java.rmi.registry.Registry
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                    /**
                     * Unexport the RMI registry on bean factory shutdown,
                     * provided that this bean actually created a registry.
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
