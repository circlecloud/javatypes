declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * Registrar object that associates a specific {@link javax.management.NotificationListener}
                 * with one or more MBeans in an {@link javax.management.MBeanServer}
                 * (typically via a {@link javax.management.MBeanServerConnection}).
                 * @author Juergen Hoeller
                 * @since 2.5.2
                 * @see #setServer
                 * @see #setMappedObjectNames
                 * @see #setNotificationListener
                 */
                // @ts-ignore
                class NotificationListenerRegistrar extends org.springframework.jmx.support.NotificationListenerHolder {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the {@code MBeanServerConnection} used to connect to the
                     * MBean which all invocations are routed to.
                     */
                    // @ts-ignore
                    setServer(server: javax.management.MBeanServerConnection): void
                    /**
                     * Specify the environment for the JMX connector.
                     * @see javax.management.remote.JMXConnectorFactory#connect(javax.management.remote.JMXServiceURL, java.util.Map)
                     */
                    // @ts-ignore
                    setEnvironment(environment: java.util.Map<java.lang.String, any>): void
                    /**
                     * Allow Map access to the environment to be set for the connector,
                     * with the option to add or override specific entries.
                     * <p>Useful for specifying entries directly, for example via
                     * "environment[myKey]". This is particularly useful for
                     * adding or overriding entries in child bean definitions.
                     */
                    // @ts-ignore
                    getEnvironment(): java.util.Map<java.lang.String, ?>
                    /**
                     * Set the service URL of the remote {@code MBeanServer}.
                     */
                    // @ts-ignore
                    setServiceUrl(url: string): void
                    /**
                     * Set the agent id of the {@code MBeanServer} to locate.
                     * <p>Default is none. If specified, this will result in an
                     * attempt being made to locate the attendant MBeanServer, unless
                     * the {@link #setServiceUrl "serviceUrl"} property has been set.
                     * @see javax.management.MBeanServerFactory#findMBeanServer(String)
                     *  <p>Specifying the empty String indicates the platform MBeanServer.
                     */
                    // @ts-ignore
                    setAgentId(agentId: string): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Registers the specified {@code NotificationListener}.
                     * <p>Ensures that an {@code MBeanServerConnection} is configured and attempts
                     * to detect a local connection if one is not supplied.
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Unregisters the specified {@code NotificationListener}.
                     */
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
