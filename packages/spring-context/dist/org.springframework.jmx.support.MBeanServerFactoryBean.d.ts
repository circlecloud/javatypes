declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * {@link FactoryBean} that obtains a {@link javax.management.MBeanServer} reference
                 * through the standard JMX 1.2 {@link javax.management.MBeanServerFactory}
                 * API.
                 * <p>Exposes the {@code MBeanServer} for bean references.
                 * <p>By default, {@code MBeanServerFactoryBean} will always create
                 * a new {@code MBeanServer} even if one is already running. To have
                 * the {@code MBeanServerFactoryBean} attempt to locate a running
                 * {@code MBeanServer} first, set the value of the
                 * "locateExistingServerIfPossible" property to "true".
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see #setLocateExistingServerIfPossible
                 * @see #locateMBeanServer
                 * @see javax.management.MBeanServer
                 * @see javax.management.MBeanServerFactory#findMBeanServer
                 * @see javax.management.MBeanServerFactory#createMBeanServer
                 * @see javax.management.MBeanServerFactory#newMBeanServer
                 * @see MBeanServerConnectionFactoryBean
                 * @see ConnectorServerFactoryBean
                 */
                // @ts-ignore
                class MBeanServerFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set whether or not the {@code MBeanServerFactoryBean} should attempt
                     * to locate a running {@code MBeanServer} before creating one.
                     * <p>Default is {@code false}.
                     */
                    // @ts-ignore
                    setLocateExistingServerIfPossible(locateExistingServerIfPossible: boolean): void
                    /**
                     * Set the agent id of the {@code MBeanServer} to locate.
                     * <p>Default is none. If specified, this will result in an
                     * automatic attempt being made to locate the attendant MBeanServer,
                     * and (importantly) if said MBeanServer cannot be located no
                     * attempt will be made to create a new MBeanServer (and an
                     * MBeanServerNotFoundException will be thrown at resolution time).
                     * <p>Specifying the empty String indicates the platform MBeanServer.
                     * @see javax.management.MBeanServerFactory#findMBeanServer(String)
                     */
                    // @ts-ignore
                    setAgentId(agentId: string): void
                    /**
                     * Set the default domain to be used by the {@code MBeanServer},
                     * to be passed to {@code MBeanServerFactory.createMBeanServer()}
                     * or {@code MBeanServerFactory.findMBeanServer()}.
                     * <p>Default is none.
                     * @see javax.management.MBeanServerFactory#createMBeanServer(String)
                     * @see javax.management.MBeanServerFactory#findMBeanServer(String)
                     */
                    // @ts-ignore
                    setDefaultDomain(defaultDomain: string): void
                    /**
                     * Set whether to register the {@code MBeanServer} with the
                     * {@code MBeanServerFactory}, making it available through
                     * {@code MBeanServerFactory.findMBeanServer()}.
                     * <p>Default is {@code true}.
                     * @see javax.management.MBeanServerFactory#createMBeanServer
                     * @see javax.management.MBeanServerFactory#findMBeanServer
                     */
                    // @ts-ignore
                    setRegisterWithFactory(registerWithFactory: boolean): void
                    /**
                     * Creates the {@code MBeanServer} instance.
                     */
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Attempt to locate an existing {@code MBeanServer}.
                     * Called if {@code locateExistingServerIfPossible} is set to {@code true}.
                     * <p>The default implementation attempts to find an {@code MBeanServer} using
                     * a standard lookup. Subclasses may override to add additional location logic.
                     * @param agentId the agent identifier of the MBeanServer to retrieve.
                     *  If this parameter is {#code null}, all registered MBeanServers are
                     *  considered.
                     * @return the {#code MBeanServer} if found
                     * @throws org.springframework.jmx.MBeanServerNotFoundException
                     *  if no {#code MBeanServer} could be found
                     * @see #setLocateExistingServerIfPossible
                     * @see JmxUtils#locateMBeanServer(String)
                     * @see javax.management.MBeanServerFactory#findMBeanServer(String)
                     */
                    // @ts-ignore
                    locateMBeanServer(agentId: string): javax.management.MBeanServer
                    /**
                     * Create a new {@code MBeanServer} instance and register it with the
                     * {@code MBeanServerFactory}, if desired.
                     * @param defaultDomain the default domain, or {#code null} if none
                     * @param registerWithFactory whether to register the {#code MBeanServer}
                     *  with the {@code MBeanServerFactory}
                     * @see javax.management.MBeanServerFactory#createMBeanServer
                     * @see javax.management.MBeanServerFactory#newMBeanServer
                     */
                    // @ts-ignore
                    createMBeanServer(defaultDomain: string, registerWithFactory: boolean): javax.management.MBeanServer
                    // @ts-ignore
                    getObject(): javax.management.MBeanServer
                    // @ts-ignore
                    getObjectType(): java.lang.Class<? extends javax.management.MBeanServer>
                    // @ts-ignore
                    isSingleton(): boolean
                    /**
                     * Unregisters the {@code MBeanServer} instance, if necessary.
                     */
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
