declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * Provides supporting infrastructure for registering MBeans with an
                 * {@link javax.management.MBeanServer}. The behavior when encountering
                 * an existing MBean at a given {@link ObjectName} is fully configurable
                 * allowing for flexible registration settings.
                 * <p>All registered MBeans are tracked and can be unregistered by calling
                 * the #{@link #unregisterBeans()} method.
                 * <p>Sub-classes can receive notifications when an MBean is registered or
                 * unregistered by overriding the {@link #onRegister(ObjectName)} and
                 * {@link #onUnregister(ObjectName)} methods respectively.
                 * <p>By default, the registration process will fail if attempting to
                 * register an MBean using a {@link javax.management.ObjectName} that is
                 * already used.
                 * <p>By setting the {@link #setRegistrationPolicy(RegistrationPolicy) registrationPolicy}
                 * property to {@link RegistrationPolicy#IGNORE_EXISTING} the registration process
                 * will simply ignore existing MBeans leaving them registered. This is useful in settings
                 * where multiple applications want to share a common MBean in a shared {@link MBeanServer}.
                 * <p>Setting {@link #setRegistrationPolicy(RegistrationPolicy) registrationPolicy} property
                 * to {@link RegistrationPolicy#REPLACE_EXISTING} will cause existing MBeans to be replaced
                 * during registration if necessary. This is useful in situations where you can't guarantee
                 * the state of your {@link MBeanServer}.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Phillip Webb
                 * @since 2.0
                 * @see #setServer
                 * @see #setRegistrationPolicy
                 * @see org.springframework.jmx.export.MBeanExporter
                 */
                // @ts-ignore
                class MBeanRegistrationSupport extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * {@code Log} instance for this class.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * The {@code MBeanServer} instance being used to register beans.
                     */
                    // @ts-ignore
                    server: javax.management.MBeanServer
                    /**
                     * Specify the {@code MBeanServer} instance with which all beans should
                     * be registered. The {@code MBeanExporter} will attempt to locate an
                     * existing {@code MBeanServer} if none is supplied.
                     */
                    // @ts-ignore
                    setServer(server: javax.management.MBeanServer): void
                    /**
                     * Return the {@code MBeanServer} that the beans will be registered with.
                     */
                    // @ts-ignore
                    getServer(): javax.management.MBeanServer
                    /**
                     * The policy to use when attempting to register an MBean
                     * under an {@link javax.management.ObjectName} that already exists.
                     * @param registrationPolicy the policy to use
                     * @since 3.2
                     */
                    // @ts-ignore
                    setRegistrationPolicy(registrationPolicy: org.springframework.jmx.support.RegistrationPolicy): void
                    /**
                     * Actually register the MBean with the server. The behavior when encountering
                     * an existing MBean can be configured using {@link #setRegistrationPolicy}.
                     * @param mbean the MBean instance
                     * @param objectName the suggested ObjectName for the MBean
                     * @throws JMException if the registration failed
                     */
                    // @ts-ignore
                    doRegister(mbean: any, objectName: javax.management.ObjectName): void
                    /**
                     * Unregisters all beans that have been registered by an instance of this class.
                     */
                    // @ts-ignore
                    unregisterBeans(): void
                    /**
                     * Actually unregister the specified MBean from the server.
                     * @param objectName the suggested ObjectName for the MBean
                     */
                    // @ts-ignore
                    doUnregister(objectName: javax.management.ObjectName): void
                    /**
                     * Return the {@link ObjectName ObjectNames} of all registered beans.
                     */
                    // @ts-ignore
                    getRegisteredObjectNames(): javax.management.ObjectName[]
                    /**
                     * Called when an MBean is registered under the given {@link ObjectName}. Allows
                     * subclasses to perform additional processing when an MBean is registered.
                     * <p>The default implementation delegates to {@link #onRegister(ObjectName)}.
                     * @param objectName the actual {#link ObjectName} that the MBean was registered with
                     * @param mbean the registered MBean instance
                     */
                    // @ts-ignore
                    onRegister(objectName: javax.management.ObjectName, mbean: any): void
                    /**
                     * Called when an MBean is registered under the given {@link ObjectName}. Allows
                     * subclasses to perform additional processing when an MBean is registered.
                     * <p>The default implementation is empty. Can be overridden in subclasses.
                     * @param objectName the actual {#link ObjectName} that the MBean was registered with
                     */
                    // @ts-ignore
                    onRegister(objectName: javax.management.ObjectName): void
                    /**
                     * Called when an MBean is unregistered under the given {@link ObjectName}. Allows
                     * subclasses to perform additional processing when an MBean is unregistered.
                     * <p>The default implementation is empty. Can be overridden in subclasses.
                     * @param objectName the {#link ObjectName} that the MBean was registered with
                     */
                    // @ts-ignore
                    onUnregister(objectName: javax.management.ObjectName): void
                }
            }
        }
    }
}
