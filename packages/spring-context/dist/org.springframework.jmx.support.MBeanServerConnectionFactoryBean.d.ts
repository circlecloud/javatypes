declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * {@link FactoryBean} that creates a JMX 1.2 {@code MBeanServerConnection}
                 * to a remote {@code MBeanServer} exposed via a {@code JMXServerConnector}.
                 * Exposes the {@code MBeanServer} for bean references.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see MBeanServerFactoryBean
                 * @see ConnectorServerFactoryBean
                 * @see org.springframework.jmx.access.MBeanClientInterceptor#setServer
                 * @see org.springframework.jmx.access.NotificationListenerRegistrar#setServer
                 */
                // @ts-ignore
                class MBeanServerConnectionFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the service URL of the remote {@code MBeanServer}.
                     */
                    // @ts-ignore
                    public setServiceUrl(url: java.lang.String | string): void
                    /**
                     * Set the environment properties used to construct the {@code JMXConnector}
                     * as {@code java.util.Properties} (String key/value pairs).
                     */
                    // @ts-ignore
                    public setEnvironment(environment: java.util.Properties): void
                    /**
                     * Set the environment properties used to construct the {@code JMXConnector}
                     * as a {@code Map} of String keys and arbitrary Object values.
                     */
                    // @ts-ignore
                    public setEnvironmentMap(environment: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * Set whether to connect to the server on startup.
                     * <p>Default is {@code true}.
                     * <p>Can be turned off to allow for late start of the JMX server.
                     * In this case, the JMX connector will be fetched on first access.
                     */
                    // @ts-ignore
                    public setConnectOnStartup(connectOnStartup: boolean): void
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Creates a {@code JMXConnector} for the given settings
                     * and exposes the associated {@code MBeanServerConnection}.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): javax.management.MBeanServerConnection
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                    /**
                     * Closes the underlying {@code JMXConnector}.
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
