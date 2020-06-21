declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * {@link FactoryBean} that creates a JSR-160 {@link JMXConnectorServer},
                 * optionally registers it with the {@link MBeanServer}, and then starts it.
                 * <p>The {@code JMXConnectorServer} can be started in a separate thread by setting the
                 * {@code threaded} property to {@code true}. You can configure this thread to be a
                 * daemon thread by setting the {@code daemon} property to {@code true}.
                 * <p>The {@code JMXConnectorServer} is correctly shut down when an instance of this
                 * class is destroyed on shutdown of the containing {@code ApplicationContext}.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see JMXConnectorServer
                 * @see MBeanServer
                 */
                // @ts-ignore
                class ConnectorServerFactoryBean extends org.springframework.jmx.support.MBeanRegistrationSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default service URL.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_SERVICE_URL: java.lang.String | string
                    /**
                     * Set the service URL for the {@code JMXConnectorServer}.
                     */
                    // @ts-ignore
                    public setServiceUrl(serviceUrl: java.lang.String | string): void
                    /**
                     * Set the environment properties used to construct the {@code JMXConnectorServer}
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
                     * Set an MBeanServerForwarder to be applied to the {@code JMXConnectorServer}.
                     */
                    // @ts-ignore
                    public setForwarder(forwarder: javax.management.remote.MBeanServerForwarder): void
                    /**
                     * Set the {@code ObjectName} used to register the {@code JMXConnectorServer}
                     * itself with the {@code MBeanServer}, as {@code ObjectName} instance
                     * or as {@code String}.
                     * @throws MalformedObjectNameException if the {#code ObjectName} is malformed
                     */
                    // @ts-ignore
                    public setObjectName(objectName: java.lang.Object | any): void
                    /**
                     * Set whether the {@code JMXConnectorServer} should be started in a separate thread.
                     */
                    // @ts-ignore
                    public setThreaded(threaded: boolean): void
                    /**
                     * Set whether any threads started for the {@code JMXConnectorServer} should be
                     * started as daemon threads.
                     */
                    // @ts-ignore
                    public setDaemon(daemon: boolean): void
                    /**
                     * Start the connector server. If the {@code threaded} flag is set to {@code true},
                     * the {@code JMXConnectorServer} will be started in a separate thread.
                     * If the {@code daemon} flag is set to {@code true}, that thread will be
                     * started as a daemon thread.
                     * @throws JMException if a problem occurred when registering the connector server
                     *  with the {#code MBeanServer}
                     * @throws IOException if there is a problem starting the connector server
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): javax.management.remote.JMXConnectorServer
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                    /**
                     * Stop the {@code JMXConnectorServer} managed by an instance of this class.
                     * Automatically called on {@code ApplicationContext} shutdown.
                     * @throws IOException if there is an error stopping the connector server
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
