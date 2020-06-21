declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of the <code>Service</code> interface.  The
                 * associated Container is generally an instance of Engine, but this is
                 * not required.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class StandardService extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Service {
                    // @ts-ignore
                    constructor()
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * The set of Connectors associated with this Service.
                     */
                    // @ts-ignore
                    connectors: org.apache.catalina.connector.Connector[]
                    /**
                     * The list of executors held by the service.
                     */
                    // @ts-ignore
                    readonly executors: java.util.ArrayList<org.apache.catalina.Executor>
                    /**
                     * Mapper.
                     */
                    // @ts-ignore
                    readonly mapper: org.apache.catalina.mapper.Mapper
                    /**
                     * Mapper listener.
                     */
                    // @ts-ignore
                    readonly mapperListener: org.apache.catalina.mapper.MapperListener
                    // @ts-ignore
                    public getMapper(): org.apache.catalina.mapper.Mapper
                    // @ts-ignore
                    public getContainer(): org.apache.catalina.Engine
                    // @ts-ignore
                    public setContainer(engine: org.apache.catalina.Engine): void
                    /**
                     * Return the name of this Service.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Set the name of this Service.
                     * @param name The new service name
                     */
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    /**
                     * Return the <code>Server</code> with which we are associated (if any).
                     */
                    // @ts-ignore
                    public getServer(): org.apache.catalina.Server
                    /**
                     * Set the <code>Server</code> with which we are associated (if any).
                     * @param server The server that owns this Service
                     */
                    // @ts-ignore
                    public setServer(server: org.apache.catalina.Server): void
                    /**
                     * Add a new Connector to the set of defined Connectors, and associate it
                     * with this Service's Container.
                     * @param connector The Connector to be added
                     */
                    // @ts-ignore
                    public addConnector(connector: org.apache.catalina.connector.Connector): void
                    // @ts-ignore
                    public getConnectorNames(): javax.management.ObjectName[]
                    /**
                     * Add a property change listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Find and return the set of Connectors associated with this Service.
                     */
                    // @ts-ignore
                    public findConnectors(): org.apache.catalina.connector.Connector[]
                    /**
                     * Remove the specified Connector from the set associated from this
                     * Service.  The removed Connector will also be disassociated from our
                     * Container.
                     * @param connector The Connector to be removed
                     */
                    // @ts-ignore
                    public removeConnector(connector: org.apache.catalina.connector.Connector): void
                    /**
                     * Remove a property change listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Return a String representation of this component.
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Adds a named executor to the service
                     * @param ex Executor
                     */
                    // @ts-ignore
                    public addExecutor(ex: org.apache.catalina.Executor): void
                    /**
                     * Retrieves all executors
                     * @return Executor[]
                     */
                    // @ts-ignore
                    public findExecutors(): org.apache.catalina.Executor[]
                    /**
                     * Retrieves executor by name, null if not found
                     * @param executorName String
                     * @return Executor
                     */
                    // @ts-ignore
                    public getExecutor(executorName: java.lang.String | string): org.apache.catalina.Executor
                    /**
                     * Removes an executor from the service
                     * @param ex Executor
                     */
                    // @ts-ignore
                    public removeExecutor(ex: org.apache.catalina.Executor): void
                    /**
                     * Start nested components ({@link Executor}s, {@link Connector}s and
                     * {@link Container}s) and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop nested components ({@link Executor}s, {@link Connector}s and
                     * {@link Container}s) and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that needs to be reported
                     */
                    // @ts-ignore
                    stopInternal(): void
                    /**
                     * Invoke a pre-startup initialization. This is used to allow connectors
                     * to bind to restricted ports under Unix operating environments.
                     */
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                    /**
                     * Return the parent class loader for this component.
                     */
                    // @ts-ignore
                    public getParentClassLoader(): java.lang.ClassLoader
                    /**
                     * Set the parent class loader for this server.
                     * @param parent The new parent class loader
                     */
                    // @ts-ignore
                    public setParentClassLoader(parent: java.lang.ClassLoader): void
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    public getObjectNameKeyProperties(): string
                }
            }
        }
    }
}
