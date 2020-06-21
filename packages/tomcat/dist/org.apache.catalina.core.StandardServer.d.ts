declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of the <b>Server</b> interface, available for use
                 * (but not required) when deploying and starting Catalina.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class StandardServer extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Server {
                    /**
                     * Construct a default instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * The number of threads available to process utility tasks in this service.
                     */
                    // @ts-ignore
                    utilityThreads: number /*int*/
                    /**
                     * The utility threads daemon flag.
                     */
                    // @ts-ignore
                    utilityThreadsAsDaemon: boolean
                    /**
                     * The lifecycle event period in seconds.
                     */
                    // @ts-ignore
                    periodicEventDelay: number /*int*/
                    // @ts-ignore
                    public getNamingToken(): any
                    /**
                     * Return the global naming resources context.
                     */
                    // @ts-ignore
                    public getGlobalNamingContext(): javax.naming.Context
                    /**
                     * Set the global naming resources context.
                     * @param globalNamingContext The new global naming resource context
                     */
                    // @ts-ignore
                    public setGlobalNamingContext(globalNamingContext: javax.naming.Context): void
                    /**
                     * Return the global naming resources.
                     */
                    // @ts-ignore
                    public getGlobalNamingResources(): org.apache.catalina.deploy.NamingResourcesImpl
                    /**
                     * Set the global naming resources.
                     * @param globalNamingResources The new global naming resources
                     */
                    // @ts-ignore
                    public setGlobalNamingResources(globalNamingResources: org.apache.catalina.deploy.NamingResourcesImpl): void
                    /**
                     * Report the current Tomcat Server Release number
                     * @return Tomcat release identifier
                     */
                    // @ts-ignore
                    public getServerInfo(): string
                    /**
                     * Return the current server built timestamp
                     * @return server built timestamp.
                     */
                    // @ts-ignore
                    public getServerBuilt(): string
                    /**
                     * Return the current server's version number.
                     * @return server's version number.
                     */
                    // @ts-ignore
                    public getServerNumber(): string
                    /**
                     * Return the port number we listen to for shutdown commands.
                     */
                    // @ts-ignore
                    public getPort(): number /*int*/
                    /**
                     * Set the port number we listen to for shutdown commands.
                     * @param port The new port number
                     */
                    // @ts-ignore
                    public setPort(port: number /*int*/): void
                    // @ts-ignore
                    public getPortOffset(): number /*int*/
                    // @ts-ignore
                    public setPortOffset(portOffset: number /*int*/): void
                    // @ts-ignore
                    public getPortWithOffset(): number /*int*/
                    /**
                     * Return the address on which we listen to for shutdown commands.
                     */
                    // @ts-ignore
                    public getAddress(): string
                    /**
                     * Set the address on which we listen to for shutdown commands.
                     * @param address The new address
                     */
                    // @ts-ignore
                    public setAddress(address: java.lang.String | string): void
                    /**
                     * Return the shutdown command string we are waiting for.
                     */
                    // @ts-ignore
                    public getShutdown(): string
                    /**
                     * Set the shutdown command we are waiting for.
                     * @param shutdown The new shutdown command
                     */
                    // @ts-ignore
                    public setShutdown(shutdown: java.lang.String | string): void
                    /**
                     * Return the outer Catalina startup/shutdown component if present.
                     */
                    // @ts-ignore
                    public getCatalina(): org.apache.catalina.startup.Catalina
                    /**
                     * Set the outer Catalina startup/shutdown component if present.
                     */
                    // @ts-ignore
                    public setCatalina(catalina: org.apache.catalina.startup.Catalina): void
                    // @ts-ignore
                    public getUtilityThreads(): number /*int*/
                    // @ts-ignore
                    public setUtilityThreads(utilityThreads: number /*int*/): void
                    /**
                     * Get if the utility threads are daemon threads.
                     * @return the threads daemon flag
                     */
                    // @ts-ignore
                    public getUtilityThreadsAsDaemon(): boolean
                    /**
                     * Set the utility threads daemon flag. The default value is true.
                     * @param utilityThreadsAsDaemon the new thread daemon flag
                     */
                    // @ts-ignore
                    public setUtilityThreadsAsDaemon(utilityThreadsAsDaemon: boolean): void
                    /**
                     * @return The period between two lifecycle events, in seconds
                     */
                    // @ts-ignore
                    public getPeriodicEventDelay(): number /*int*/
                    /**
                     * Set the new period between two lifecycle events in seconds.
                     * @param periodicEventDelay The period in seconds, negative or zero will
                     *   disable events
                     */
                    // @ts-ignore
                    public setPeriodicEventDelay(periodicEventDelay: number /*int*/): void
                    /**
                     * Add a new Service to the set of defined Services.
                     * @param service The Service to be added
                     */
                    // @ts-ignore
                    public addService(service: org.apache.catalina.Service): void
                    // @ts-ignore
                    public stopAwait(): void
                    /**
                     * Wait until a proper shutdown command is received, then return.
                     * This keeps the main thread alive - the thread pool listening for http
                     * connections is daemon threads.
                     */
                    // @ts-ignore
                    public await(): void
                    /**
                     * @return the specified Service (if it exists); otherwise return
                     *  <code>null</code>.
                     * @param name Name of the Service to be returned
                     */
                    // @ts-ignore
                    public findService(name: java.lang.String | string): org.apache.catalina.Service
                    /**
                     * @return the set of Services defined within this Server.
                     */
                    // @ts-ignore
                    public findServices(): org.apache.catalina.Service[]
                    /**
                     * @return the JMX service names.
                     */
                    // @ts-ignore
                    public getServiceNames(): javax.management.ObjectName[]
                    /**
                     * Remove the specified Service from the set associated from this
                     * Server.
                     * @param service The Service to be removed
                     */
                    // @ts-ignore
                    public removeService(service: org.apache.catalina.Service): void
                    // @ts-ignore
                    public getCatalinaBase(): java.io.File
                    // @ts-ignore
                    public setCatalinaBase(catalinaBase: java.io.File): void
                    // @ts-ignore
                    public getCatalinaHome(): java.io.File
                    // @ts-ignore
                    public setCatalinaHome(catalinaHome: java.io.File): void
                    /**
                     * Add a property change listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
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
                     * Write the configuration information for this entire <code>Server</code>
                     * out to the server.xml configuration file.
                     * @exception InstanceNotFoundException
                     *             if the managed resource object cannot be found
                     * @exception MBeanException
                     *             if the initializer of the object throws an exception, or
                     *             persistence is not supported
                     * @exception javax.management.RuntimeOperationsException
                     *             if an exception is reported by the persistence mechanism
                     */
                    // @ts-ignore
                    public storeConfig(): void
                    /**
                     * Write the configuration information for <code>Context</code>
                     * out to the specified configuration file.
                     * @param context the context which should save its configuration
                     * @exception InstanceNotFoundException
                     *             if the managed resource object cannot be found
                     * @exception MBeanException
                     *             if the initializer of the object throws an exception
                     *             or persistence is not supported
                     * @exception javax.management.RuntimeOperationsException
                     *             if an exception is reported by the persistence mechanism
                     */
                    // @ts-ignore
                    public storeContext(context: org.apache.catalina.Context): void
                    /**
                     * Start nested components ({@link Service}s) and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    startPeriodicLifecycleEvent(): void
                    /**
                     * Stop nested components ({@link Service}s) and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
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
                    /**
                     * Obtain the MBean domain for this server. The domain is obtained using
                     * the following search order:
                     * <ol>
                     * <li>Name of first {@link org.apache.catalina.Engine}.</li>
                     * <li>Name of first {@link Service}.</li>
                     * </ol>
                     */
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    // @ts-ignore
                    public getUtilityExecutor(): java.util.concurrent.ScheduledExecutorService
                }
            }
        }
    }
}
