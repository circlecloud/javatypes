declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <strong>Service</strong> is a group of one or more
             * <strong>Connectors</strong> that share a single <strong>Container</strong>
             * to process their incoming requests.  This arrangement allows, for example,
             * a non-SSL and SSL connector to share the same population of web apps.
             * <p>
             * A given JVM can contain any number of Service instances; however, they are
             * completely independent of each other and share only the basic JVM facilities
             * and classes on the system class path.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Service extends org.apache.catalina.Lifecycle {
                /**
                 * @return the <code>Engine</code> that handles requests for all
                 *  <code>Connectors</code> associated with this Service.
                 */
                // @ts-ignore
                getContainer(): org.apache.catalina.Engine
                /**
                 * Set the <code>Engine</code> that handles requests for all
                 * <code>Connectors</code> associated with this Service.
                 * @param engine The new Engine
                 */
                // @ts-ignore
                setContainer(engine: org.apache.catalina.Engine): void
                /**
                 * @return the name of this Service.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Set the name of this Service.
                 * @param name The new service name
                 */
                // @ts-ignore
                setName(name: java.lang.String | string): void
                /**
                 * @return the <code>Server</code> with which we are associated (if any).
                 */
                // @ts-ignore
                getServer(): org.apache.catalina.Server
                /**
                 * Set the <code>Server</code> with which we are associated (if any).
                 * @param server The server that owns this Service
                 */
                // @ts-ignore
                setServer(server: org.apache.catalina.Server): void
                /**
                 * @return the parent class loader for this component. If not set, return
                 *  {#link #getServer()} {@link Server#getParentClassLoader()}. If no server
                 *  has been set, return the system class loader.
                 */
                // @ts-ignore
                getParentClassLoader(): java.lang.ClassLoader
                /**
                 * Set the parent class loader for this service.
                 * @param parent The new parent class loader
                 */
                // @ts-ignore
                setParentClassLoader(parent: java.lang.ClassLoader): void
                /**
                 * @return the domain under which this container will be / has been
                 *  registered.
                 */
                // @ts-ignore
                getDomain(): string
                /**
                 * Add a new Connector to the set of defined Connectors, and associate it
                 * with this Service's Container.
                 * @param connector The Connector to be added
                 */
                // @ts-ignore
                addConnector(connector: org.apache.catalina.connector.Connector): void
                /**
                 * Find and return the set of Connectors associated with this Service.
                 * @return the set of associated Connectors
                 */
                // @ts-ignore
                findConnectors(): org.apache.catalina.connector.Connector[]
                /**
                 * Remove the specified Connector from the set associated from this
                 * Service.  The removed Connector will also be disassociated from our
                 * Container.
                 * @param connector The Connector to be removed
                 */
                // @ts-ignore
                removeConnector(connector: org.apache.catalina.connector.Connector): void
                /**
                 * Adds a named executor to the service
                 * @param ex Executor
                 */
                // @ts-ignore
                addExecutor(ex: org.apache.catalina.Executor): void
                /**
                 * Retrieves all executors
                 * @return Executor[]
                 */
                // @ts-ignore
                findExecutors(): org.apache.catalina.Executor[]
                /**
                 * Retrieves executor by name, null if not found
                 * @param name String
                 * @return Executor
                 */
                // @ts-ignore
                getExecutor(name: java.lang.String | string): org.apache.catalina.Executor
                /**
                 * Removes an executor from the service
                 * @param ex Executor
                 */
                // @ts-ignore
                removeExecutor(ex: org.apache.catalina.Executor): void
                /**
                 * @return the mapper associated with this Service.
                 */
                // @ts-ignore
                getMapper(): org.apache.catalina.mapper.Mapper
            }
        }
    }
}
