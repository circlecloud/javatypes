declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <code>Server</code> element represents the entire Catalina
             * servlet container.  Its attributes represent the characteristics of
             * the servlet container as a whole.  A <code>Server</code> may contain
             * one or more <code>Services</code>, and the top level set of naming
             * resources.
             * <p>
             * Normally, an implementation of this interface will also implement
             * <code>Lifecycle</code>, such that when the <code>start()</code> and
             * <code>stop()</code> methods are called, all of the defined
             * <code>Services</code> are also started or stopped.
             * <p>
             * In between, the implementation must open a server socket on the port number
             * specified by the <code>port</code> property.  When a connection is accepted,
             * the first line is read and compared with the specified shutdown command.
             * If the command matches, shutdown of the server is initiated.
             * <p>
             * <strong>NOTE</strong> - The concrete implementation of this class should
             * register the (singleton) instance with the <code>ServerFactory</code>
             * class in its constructor(s).
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Server extends org.apache.catalina.Lifecycle {
                /**
                 * @return the global naming resources.
                 */
                // @ts-ignore
                getGlobalNamingResources(): org.apache.catalina.deploy.NamingResourcesImpl
                /**
                 * Set the global naming resources.
                 * @param globalNamingResources The new global naming resources
                 */
                // @ts-ignore
                setGlobalNamingResources(globalNamingResources: org.apache.catalina.deploy.NamingResourcesImpl): void
                /**
                 * @return the global naming resources context.
                 */
                // @ts-ignore
                getGlobalNamingContext(): javax.naming.Context
                /**
                 * @return the port number we listen to for shutdown commands.
                 * @see #getPortOffset()
                 * @see #getPortWithOffset()
                 */
                // @ts-ignore
                getPort(): number /*int*/
                /**
                 * Set the port number we listen to for shutdown commands.
                 * @param port The new port number
                 * @see #setPortOffset(int)
                 */
                // @ts-ignore
                setPort(port: number /*int*/): void
                /**
                 * Get the number that offsets the port used for shutdown commands.
                 * For example, if port is 8005, and portOffset is 1000,
                 * the server listens at 9005.
                 * @return the port offset
                 */
                // @ts-ignore
                getPortOffset(): number /*int*/
                /**
                 * Set the number that offsets the server port used for shutdown commands.
                 * For example, if port is 8005, and you set portOffset to 1000,
                 * connector listens at 9005.
                 * @param portOffset sets the port offset
                 */
                // @ts-ignore
                setPortOffset(portOffset: number /*int*/): void
                /**
                 * Get the actual port on which server is listening for the shutdown commands.
                 * If you do not set port offset, port is returned. If you set
                 * port offset, port offset + port is returned.
                 * @return the port with offset
                 */
                // @ts-ignore
                getPortWithOffset(): number /*int*/
                /**
                 * @return the address on which we listen to for shutdown commands.
                 */
                // @ts-ignore
                getAddress(): string
                /**
                 * Set the address on which we listen to for shutdown commands.
                 * @param address The new address
                 */
                // @ts-ignore
                setAddress(address: java.lang.String | string): void
                /**
                 * @return the shutdown command string we are waiting for.
                 */
                // @ts-ignore
                getShutdown(): string
                /**
                 * Set the shutdown command we are waiting for.
                 * @param shutdown The new shutdown command
                 */
                // @ts-ignore
                setShutdown(shutdown: java.lang.String | string): void
                /**
                 * @return the parent class loader for this component. If not set, return
                 *  {#link #getCatalina()} {@link Catalina#getParentClassLoader()}. If
                 *  catalina has not been set, return the system class loader.
                 */
                // @ts-ignore
                getParentClassLoader(): java.lang.ClassLoader
                /**
                 * Set the parent class loader for this server.
                 * @param parent The new parent class loader
                 */
                // @ts-ignore
                setParentClassLoader(parent: java.lang.ClassLoader): void
                /**
                 * @return the outer Catalina startup/shutdown component if present.
                 */
                // @ts-ignore
                getCatalina(): org.apache.catalina.startup.Catalina
                /**
                 * Set the outer Catalina startup/shutdown component if present.
                 * @param catalina the outer Catalina component
                 */
                // @ts-ignore
                setCatalina(catalina: org.apache.catalina.startup.Catalina): void
                /**
                 * @return the configured base (instance) directory. Note that home and base
                 *  may be the same (and are by default). If this is not set the value
                 *  returned by {#link #getCatalinaHome()} will be used.
                 */
                // @ts-ignore
                getCatalinaBase(): java.io.File
                /**
                 * Set the configured base (instance) directory. Note that home and base
                 * may be the same (and are by default).
                 * @param catalinaBase the configured base directory
                 */
                // @ts-ignore
                setCatalinaBase(catalinaBase: java.io.File): void
                /**
                 * @return the configured home (binary) directory. Note that home and base
                 *  may be the same (and are by default).
                 */
                // @ts-ignore
                getCatalinaHome(): java.io.File
                /**
                 * Set the configured home (binary) directory. Note that home and base
                 * may be the same (and are by default).
                 * @param catalinaHome the configured home directory
                 */
                // @ts-ignore
                setCatalinaHome(catalinaHome: java.io.File): void
                /**
                 * Get the utility thread count.
                 * @return the thread count
                 */
                // @ts-ignore
                getUtilityThreads(): number /*int*/
                /**
                 * Set the utility thread count.
                 * @param utilityThreads the new thread count
                 */
                // @ts-ignore
                setUtilityThreads(utilityThreads: number /*int*/): void
                /**
                 * Add a new Service to the set of defined Services.
                 * @param service The Service to be added
                 */
                // @ts-ignore
                addService(service: org.apache.catalina.Service): void
                /**
                 * Wait until a proper shutdown command is received, then return.
                 */
                // @ts-ignore
                await(): void
                /**
                 * Find the specified Service
                 * @param name Name of the Service to be returned
                 * @return the specified Service, or <code>null</code> if none exists.
                 */
                // @ts-ignore
                findService(name: java.lang.String | string): org.apache.catalina.Service
                /**
                 * @return the set of Services defined within this Server.
                 */
                // @ts-ignore
                findServices(): org.apache.catalina.Service[]
                /**
                 * Remove the specified Service from the set associated from this
                 * Server.
                 * @param service The Service to be removed
                 */
                // @ts-ignore
                removeService(service: org.apache.catalina.Service): void
                /**
                 * @return the token necessary for operations on the associated JNDI naming
                 *  context.
                 */
                // @ts-ignore
                getNamingToken(): any
                /**
                 * @return the utility executor managed by the Service.
                 */
                // @ts-ignore
                getUtilityExecutor(): java.util.concurrent.ScheduledExecutorService
            }
        }
    }
}
