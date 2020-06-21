declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                // @ts-ignore
                abstract class LifecycleMBeanBase extends org.apache.catalina.util.LifecycleBase implements org.apache.catalina.JmxEnabled {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    mserver: javax.management.MBeanServer
                    /**
                     * Sub-classes wishing to perform additional initialization should override
                     * this method, ensuring that super.initInternal() is the first call in the
                     * overriding method.
                     */
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * Sub-classes wishing to perform additional clean-up should override this
                     * method, ensuring that super.destroyInternal() is the last call in the
                     * overriding method.
                     */
                    // @ts-ignore
                    destroyInternal(): void
                    /**
                     * Specify the domain under which this component should be registered. Used
                     * with components that cannot (easily) navigate the component hierarchy to
                     * determine the correct domain to use.
                     */
                    // @ts-ignore
                    public setDomain(domain: java.lang.String | string): void
                    /**
                     * Obtain the domain under which this component will be / has been
                     * registered.
                     */
                    // @ts-ignore
                    public getDomain(): string
                    /**
                     * Method implemented by sub-classes to identify the domain in which MBeans
                     * should be registered.
                     * @return The name of the domain to use to register MBeans.
                     */
                    // @ts-ignore
                    abstract getDomainInternal(): string
                    /**
                     * Obtain the name under which this component has been registered with JMX.
                     */
                    // @ts-ignore
                    public getObjectName(): javax.management.ObjectName
                    /**
                     * Allow sub-classes to specify the key properties component of the
                     * {@link ObjectName} that will be used to register this component.
                     * @return The string representation of the key properties component of the
                     *           desired {#link ObjectName}
                     */
                    // @ts-ignore
                    abstract getObjectNameKeyProperties(): string
                    /**
                     * Utility method to enable sub-classes to easily register additional
                     * components that don't implement {@link JmxEnabled} with an MBean server.
                     * <br>
                     * Note: This method should only be used once {@link #initInternal()} has
                     * been called and before {@link #destroyInternal()} has been called.
                     * @param obj                       The object the register
                     * @param objectNameKeyProperties   The key properties component of the
                     *                                   object name to use to register the
                     *                                   object
                     * @return The name used to register the object
                     */
                    // @ts-ignore
                    register(obj: java.lang.Object | any, objectNameKeyProperties: java.lang.String | string): javax.management.ObjectName
                    /**
                     * Utility method to enable sub-classes to easily unregister additional
                     * components that don't implement {@link JmxEnabled} with an MBean server.
                     * <br>
                     * Note: This method should only be used once {@link #initInternal()} has
                     * been called and before {@link #destroyInternal()} has been called.
                     * @param objectNameKeyProperties   The key properties component of the
                     *                                   object name to use to unregister the
                     *                                   object
                     */
                    // @ts-ignore
                    unregister(objectNameKeyProperties: java.lang.String | string): void
                    /**
                     * Utility method to enable sub-classes to easily unregister additional
                     * components that don't implement {@link JmxEnabled} with an MBean server.
                     * <br>
                     * Note: This method should only be used once {@link #initInternal()} has
                     * been called and before {@link #destroyInternal()} has been called.
                     * @param on    The name of the component to unregister
                     */
                    // @ts-ignore
                    unregister(on: javax.management.ObjectName): void
                    /**
                     * Not used - NOOP.
                     */
                    // @ts-ignore
                    public postDeregister(): void
                    /**
                     * Not used - NOOP.
                     */
                    // @ts-ignore
                    public postRegister(registrationDone: java.lang.Boolean): void
                    /**
                     * Not used - NOOP.
                     */
                    // @ts-ignore
                    public preDeregister(): void
                    /**
                     * Allows the object to be registered with an alternative
                     * {@link MBeanServer} and/or {@link ObjectName}.
                     */
                    // @ts-ignore
                    public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                }
            }
        }
    }
}
