declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * @author Amy Roh
                 */
                // @ts-ignore
                class MBeanFactory extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Set the container that this factory was created for.
                     * @param container The associated container
                     */
                    // @ts-ignore
                    public setContainer(container: java.lang.Object | any): void
                    /**
                     * Create a new AjpConnector
                     * @param parent MBean Name of the associated parent component
                     * @param address The IP address on which to bind
                     * @param port TCP port number to listen on
                     * @return the object name of the created connector
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createAjpConnector(parent: java.lang.String | string, address: java.lang.String | string, port: number /*int*/): string
                    /**
                     * Create a new DataSource Realm.
                     * @param parent MBean Name of the associated parent component
                     * @param dataSourceName the datasource name
                     * @param roleNameCol the column name for the role names
                     * @param userCredCol the column name for the user credentials
                     * @param userNameCol the column name for the user names
                     * @param userRoleTable the table name for the roles table
                     * @param userTable the table name for the users
                     * @return the object name of the created realm
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createDataSourceRealm(parent: java.lang.String | string, dataSourceName: java.lang.String | string, roleNameCol: java.lang.String | string, userCredCol: java.lang.String | string, userNameCol: java.lang.String | string, userRoleTable: java.lang.String | string, userTable: java.lang.String | string): string
                    /**
                     * Create a new HttpConnector
                     * @param parent MBean Name of the associated parent component
                     * @param address The IP address on which to bind
                     * @param port TCP port number to listen on
                     * @return the object name of the created connector
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createHttpConnector(parent: java.lang.String | string, address: java.lang.String | string, port: number /*int*/): string
                    /**
                     * Create a new HttpsConnector
                     * @param parent MBean Name of the associated parent component
                     * @param address The IP address on which to bind
                     * @param port TCP port number to listen on
                     * @return the object name of the created connector
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createHttpsConnector(parent: java.lang.String | string, address: java.lang.String | string, port: number /*int*/): string
                    /**
                     * Create a new JDBC Realm.
                     * @param parent MBean Name of the associated parent component
                     * @param driverName JDBC driver name
                     * @param connectionName the user name for the connection
                     * @param connectionPassword the password for the connection
                     * @param connectionURL the connection URL to the database
                     * @return the object name of the created realm
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createJDBCRealm(parent: java.lang.String | string, driverName: java.lang.String | string, connectionName: java.lang.String | string, connectionPassword: java.lang.String | string, connectionURL: java.lang.String | string): string
                    /**
                     * Create a new JNDI Realm.
                     * @param parent MBean Name of the associated parent component
                     * @return the object name of the created realm
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createJNDIRealm(parent: java.lang.String | string): string
                    /**
                     * Create a new Memory Realm.
                     * @param parent MBean Name of the associated parent component
                     * @return the object name of the created realm
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createMemoryRealm(parent: java.lang.String | string): string
                    /**
                     * Create a new StandardContext.
                     * @param parent MBean Name of the associated parent component
                     * @param path The context path for this Context
                     * @param docBase Document base directory (or WAR) for this Context
                     * @return the object name of the created context
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createStandardContext(parent: java.lang.String | string, path: java.lang.String | string, docBase: java.lang.String | string): string
                    /**
                     * Create a new StandardContext.
                     * @param parent MBean Name of the associated parent component
                     * @param path The context path for this Context
                     * @param docBase Document base directory (or WAR) for this Context
                     * @param xmlValidation if XML descriptors should be validated
                     * @param xmlNamespaceAware if the XML processor should namespace aware
                     * @return the object name of the created context
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createStandardContext(parent: java.lang.String | string, path: java.lang.String | string, docBase: java.lang.String | string, xmlValidation: boolean, xmlNamespaceAware: boolean): string
                    /**
                     * Create a new StandardHost.
                     * @param parent MBean Name of the associated parent component
                     * @param name Unique name of this Host
                     * @param appBase Application base directory name
                     * @param autoDeploy Should we auto deploy?
                     * @param deployOnStartup Deploy on server startup?
                     * @param deployXML Should we deploy Context XML config files property?
                     * @param unpackWARs Should we unpack WARs when auto deploying?
                     * @return the object name of the created host
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createStandardHost(parent: java.lang.String | string, name: java.lang.String | string, appBase: java.lang.String | string, autoDeploy: boolean, deployOnStartup: boolean, deployXML: boolean, unpackWARs: boolean): string
                    /**
                     * Creates a new StandardService and StandardEngine.
                     * @param domain       Domain name for the container instance
                     * @param defaultHost  Name of the default host to be used in the Engine
                     * @param baseDir      Base directory value for Engine
                     * @return the object name of the created service
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createStandardServiceEngine(domain: java.lang.String | string, defaultHost: java.lang.String | string, baseDir: java.lang.String | string): string
                    /**
                     * Create a new StandardManager.
                     * @param parent MBean Name of the associated parent component
                     * @return the object name of the created manager
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createStandardManager(parent: java.lang.String | string): string
                    /**
                     * Create a new  UserDatabaseRealm.
                     * @param parent MBean Name of the associated parent component
                     * @param resourceName Global JNDI resource name of the associated
                     *   UserDatabase
                     * @return the object name of the created realm
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createUserDatabaseRealm(parent: java.lang.String | string, resourceName: java.lang.String | string): string
                    /**
                     * Create a new Valve and associate it with a {@link Container}.
                     * @param className The fully qualified class name of the {#link Valve} to
                     *                   create
                     * @param parent    The MBean name of the associated parent
                     *                   {#link Container}.
                     * @return The MBean name of the {#link Valve} that was created or
                     *           <code>null</code> if the {@link Valve} does not implement
                     *           {@link JmxEnabled}.
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createValve(className: java.lang.String | string, parent: java.lang.String | string): string
                    /**
                     * Create a new Web Application Loader.
                     * @param parent MBean Name of the associated parent component
                     * @return the object name of the created loader
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public createWebappLoader(parent: java.lang.String | string): string
                    /**
                     * Remove an existing Connector.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeConnector(name: java.lang.String | string): void
                    /**
                     * Remove an existing Context.
                     * @param contextName MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeContext(contextName: java.lang.String | string): void
                    /**
                     * Remove an existing Host.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeHost(name: java.lang.String | string): void
                    /**
                     * Remove an existing Loader.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeLoader(name: java.lang.String | string): void
                    /**
                     * Remove an existing Manager.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeManager(name: java.lang.String | string): void
                    /**
                     * Remove an existing Realm.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeRealm(name: java.lang.String | string): void
                    /**
                     * Remove an existing Service.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeService(name: java.lang.String | string): void
                    /**
                     * Remove an existing Valve.
                     * @param name MBean Name of the component to remove
                     * @exception Exception if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeValve(name: java.lang.String | string): void
                }
            }
        }
    }
}
