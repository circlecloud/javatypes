declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
                /**
                 * The Service Provider Interface (SPI) mechanism that generates <code>SyncProvider</code>
                 * instances to be used by disconnected <code>RowSet</code> objects.
                 * The <code>SyncProvider</code> instances in turn provide the
                 * <code>javax.sql.RowSetReader</code> object the <code>RowSet</code> object
                 * needs to populate itself with data and the
                 * <code>javax.sql.RowSetWriter</code> object it needs to
                 * propagate changes to its
                 * data back to the underlying data source.
                 * <P>
                 * Because the methods in the <code>SyncFactory</code> class are all static,
                 * there is only one <code>SyncFactory</code> object
                 * per Java VM at any one time. This ensures that there is a single source from which a
                 * <code>RowSet</code> implementation can obtain its <code>SyncProvider</code>
                 * implementation.
                 * <h3>1.0 Overview</h3>
                 * The <code>SyncFactory</code> class provides an internal registry of available
                 * synchronization provider implementations (<code>SyncProvider</code> objects).
                 * This registry may be queried to determine which
                 * synchronization providers are available.
                 * The following line of code gets an enumeration of the providers currently registered.
                 * <PRE>
                 * java.util.Enumeration e = SyncFactory.getRegisteredProviders();
                 * </PRE>
                 * All standard <code>RowSet</code> implementations must provide at least two providers:
                 * <UL>
                 * <LI>an optimistic provider for use with a <code>CachedRowSet</code> implementation
                 * or an implementation derived from it
                 * <LI>an XML provider, which is used for reading and writing XML, such as with
                 * <code>WebRowSet</code> objects
                 * </UL>
                 * Note that the JDBC RowSet Implementations include the <code>SyncProvider</code>
                 * implementations <code>RIOptimisticProvider</code> and <code>RIXmlProvider</code>,
                 * which satisfy this requirement.
                 * <P>
                 * The <code>SyncFactory</code> class provides accessor methods to assist
                 * applications in determining which synchronization providers are currently
                 * registered with the <code>SyncFactory</code>.
                 * <p>
                 * Other methods let <code>RowSet</code> persistence providers be
                 * registered or de-registered with the factory mechanism. This
                 * allows additional synchronization provider implementations to be made
                 * available to <code>RowSet</code> objects at run time.
                 * <p>
                 * Applications can apply a degree of filtering to determine the level of
                 * synchronization that a <code>SyncProvider</code> implementation offers.
                 * The following criteria determine whether a provider is
                 * made available to a <code>RowSet</code> object:
                 * <ol>
                 * <li>If a particular provider is specified by a <code>RowSet</code> object, and
                 * the <code>SyncFactory</code> does not contain a reference to this provider,
                 * a <code>SyncFactoryException</code> is thrown stating that the synchronization
                 * provider could not be found.
                 * <li>If a <code>RowSet</code> implementation is instantiated with a specified
                 * provider and the specified provider has been properly registered, the
                 * requested provider is supplied. Otherwise a <code>SyncFactoryException</code>
                 * is thrown.
                 * <li>If a <code>RowSet</code> object does not specify a
                 * <code>SyncProvider</code> implementation and no additional
                 * <code>SyncProvider</code> implementations are available, the reference
                 * implementation providers are supplied.
                 * </ol>
                 * <h3>2.0 Registering <code>SyncProvider</code> Implementations</h3>
                 * <p>
                 * Both vendors and developers can register <code>SyncProvider</code>
                 * implementations using one of the following mechanisms.
                 * <ul>
                 * <LI><B>Using the command line</B><BR>
                 * The name of the provider is supplied on the command line, which will add
                 * the provider to the system properties.
                 * For example:
                 * <PRE>
                 * -Drowset.provider.classname=com.fred.providers.HighAvailabilityProvider
                 * </PRE>
                 * <li><b>Using the Standard Properties File</b><BR>
                 * The reference implementation is targeted
                 * to ship with J2SE 1.5, which will include an additional resource file
                 * that may be edited by hand. Here is an example of the properties file
                 * included in the reference implementation:
                 * <PRE>
                 * #Default JDBC RowSet sync providers listing
                 * #
                 * # Optimistic synchronization provider
                 * rowset.provider.classname.0=com.sun.rowset.providers.RIOptimisticProvider
                 * rowset.provider.vendor.0=Oracle Corporation
                 * rowset.provider.version.0=1.0
                 * # XML Provider using standard XML schema
                 * rowset.provider.classname.1=com.sun.rowset.providers.RIXMLProvider
                 * rowset.provider.vendor.1=Oracle Corporation
                 * rowset.provider.version.1=1.0
                 * </PRE>
                 * The <code>SyncFactory</code> checks this file and registers the
                 * <code>SyncProvider</code> implementations that it contains. A
                 * developer or vendor can add other implementations to this file.
                 * For example, here is a possible addition:
                 * <PRE>
                 * rowset.provider.classname.2=com.fred.providers.HighAvailabilityProvider
                 * rowset.provider.vendor.2=Fred, Inc.
                 * rowset.provider.version.2=1.0
                 * </PRE>
                 * <li><b>Using a JNDI Context</b><BR>
                 * Available providers can be registered on a JNDI
                 * context, and the <code>SyncFactory</code> will attempt to load
                 * <code>SyncProvider</code> implementations from that JNDI context.
                 * For example, the following code fragment registers a provider implementation
                 * on a JNDI context.  This is something a deployer would normally do. In this
                 * example, <code>MyProvider</code> is being registered on a CosNaming
                 * namespace, which is the namespace used by J2EE resources.
                 * <PRE>
                 * import javax.naming.*;
                 * Hashtable svrEnv = new  Hashtable();
                 * srvEnv.put(Context.INITIAL_CONTEXT_FACTORY, "CosNaming");
                 * Context ctx = new InitialContext(svrEnv);
                 * com.fred.providers.MyProvider = new MyProvider();
                 * ctx.rebind("providers/MyProvider", syncProvider);
                 * </PRE>
                 * </ul>
                 * Next, an application will register the JNDI context with the
                 * <code>SyncFactory</code> instance.  This allows the <code>SyncFactory</code>
                 * to browse within the JNDI context looking for <code>SyncProvider</code>
                 * implementations.
                 * <PRE>
                 * Hashtable appEnv = new Hashtable();
                 * appEnv.put(Context.INITIAL_CONTEXT_FACTORY, "CosNaming");
                 * appEnv.put(Context.PROVIDER_URL, "iiop://hostname/providers");
                 * Context ctx = new InitialContext(appEnv);
                 * SyncFactory.registerJNDIContext(ctx);
                 * </PRE>
                 * If a <code>RowSet</code> object attempts to obtain a <code>MyProvider</code>
                 * object, the <code>SyncFactory</code> will try to locate it. First it searches
                 * for it in the system properties, then it looks in the resource files, and
                 * finally it checks the JNDI context that has been set. The <code>SyncFactory</code>
                 * instance verifies that the requested provider is a valid extension of the
                 * <code>SyncProvider</code> abstract class and then gives it to the
                 * <code>RowSet</code> object. In the following code fragment, a new
                 * <code>CachedRowSet</code> object is created and initialized with
                 * <i>env</i>, which contains the binding to <code>MyProvider</code>.
                 * <PRE>
                 * Hashtable env = new Hashtable();
                 * env.put(SyncFactory.ROWSET_SYNC_PROVIDER, "com.fred.providers.MyProvider");
                 * CachedRowSet crs = new com.sun.rowset.CachedRowSetImpl(env);
                 * </PRE>
                 * Further details on these mechanisms are available in the
                 * <code>javax.sql.rowset.spi</code> package specification.
                 * @author Jonathan Bruce
                 * @see javax.sql.rowset.spi.SyncProvider
                 * @see javax.sql.rowset.spi.SyncFactoryException
                 */
                // @ts-ignore
                class SyncFactory extends java.lang.Object {
                    /**
                     * The standard property-id for a synchronization provider implementation
                     * name.
                     */
                    // @ts-ignore
                    readonly ROWSET_SYNC_PROVIDER: string
                    /**
                     * The standard property-id for a synchronization provider implementation
                     * vendor name.
                     */
                    // @ts-ignore
                    readonly ROWSET_SYNC_VENDOR: string
                    /**
                     * The standard property-id for a synchronization provider implementation
                     * version tag.
                     */
                    // @ts-ignore
                    readonly ROWSET_SYNC_PROVIDER_VERSION: string
                    /**
                     * Adds the the given synchronization provider to the factory register. Guidelines
                     * are provided in the <code>SyncProvider</code> specification for the
                     * required naming conventions for <code>SyncProvider</code>
                     * implementations.
                     * <p>
                     * Synchronization providers bound to a JNDI context can be
                     * registered by binding a SyncProvider instance to a JNDI namespace.
                     * <pre>
                     * {@code
                     * SyncProvider p = new MySyncProvider();
                     * InitialContext ic = new InitialContext();
                     * ic.bind ("jdbc/rowset/MySyncProvider", p);
                     * } </pre>
                     * Furthermore, an initial JNDI context should be set with the
                     * <code>SyncFactory</code> using the <code>setJNDIContext</code> method.
                     * The <code>SyncFactory</code> leverages this context to search for
                     * available <code>SyncProvider</code> objects bound to the JNDI
                     * context and its child nodes.
                     * @param providerID A <code>String</code> object with the unique ID of the
                     *              synchronization provider being registered
                     * @throws SyncFactoryException if an attempt is made to supply an empty
                     *          or null provider name
                     * @see #setJNDIContext
                     */
                    // @ts-ignore
                    registerProvider(providerID: string): void
                    /**
                     * Returns the <code>SyncFactory</code> singleton.
                     * @return the <code>SyncFactory</code> instance
                     */
                    // @ts-ignore
                    getSyncFactory(): javax.sql.rowset.spi.SyncFactory
                    /**
                     * Removes the designated currently registered synchronization provider from the
                     * Factory SPI register.
                     * @param providerID The unique-id of the synchronization provider
                     * @throws SyncFactoryException If an attempt is made to
                     *  unregister a SyncProvider implementation that was not registered.
                     */
                    // @ts-ignore
                    unregisterProvider(providerID: string): void
                    /**
                     * Returns the <code>SyncProvider</code> instance identified by <i>providerID</i>.
                     * @param providerID the unique identifier of the provider
                     * @return a <code>SyncProvider</code> implementation
                     * @throws SyncFactoryException If the SyncProvider cannot be found,
                     *  the providerID is {#code null}, or
                     *  some error was encountered when trying to invoke this provider.
                     */
                    // @ts-ignore
                    getInstance(providerID: string): javax.sql.rowset.spi.SyncProvider
                    /**
                     * Returns an Enumeration of currently registered synchronization
                     * providers.  A <code>RowSet</code> implementation may use any provider in
                     * the enumeration as its <code>SyncProvider</code> object.
                     * <p>
                     * At a minimum, the reference synchronization provider allowing
                     * RowSet content data to be stored using a JDBC driver should be
                     * possible.
                     * @return Enumeration  A enumeration of available synchronization
                     *  providers that are registered with this Factory
                     * @throws SyncFactoryException If an error occurs obtaining the registered
                     *  providers
                     */
                    // @ts-ignore
                    getRegisteredProviders(): java.util.Enumeration<javax.sql.rowset.spi.SyncProvider>
                    /**
                     * Sets the logging object to be used by the <code>SyncProvider</code>
                     * implementation provided by the <code>SyncFactory</code>. All
                     * <code>SyncProvider</code> implementations can log their events to
                     * this object and the application can retrieve a handle to this
                     * object using the <code>getLogger</code> method.
                     * <p>
                     * This method checks to see that there is an {@code SQLPermission}
                     * object  which grants the permission {@code setSyncFactory}
                     * before allowing the method to succeed.  If a
                     * {@code SecurityManager} exists and its
                     * {@code checkPermission} method denies calling {@code setLogger},
                     * this method throws a
                     * {@code java.lang.SecurityException}.
                     * @param logger A Logger object instance
                     * @throws java.lang.SecurityException if a security manager exists and its
                     *    {#code checkPermission} method denies calling {@code setLogger}
                     * @throws NullPointerException if the logger is null
                     * @see SecurityManager#checkPermission
                     */
                    // @ts-ignore
                    setLogger(logger: java.util.logging.Logger): void
                    /**
                     * Sets the logging object that is used by <code>SyncProvider</code>
                     * implementations provided by the <code>SyncFactory</code> SPI. All
                     * <code>SyncProvider</code> implementations can log their events
                     * to this object and the application can retrieve a handle to this
                     * object using the <code>getLogger</code> method.
                     * <p>
                     * This method checks to see that there is an {@code SQLPermission}
                     * object  which grants the permission {@code setSyncFactory}
                     * before allowing the method to succeed.  If a
                     * {@code SecurityManager} exists and its
                     * {@code checkPermission} method denies calling {@code setLogger},
                     * this method throws a
                     * {@code java.lang.SecurityException}.
                     * @param logger a Logger object instance
                     * @param level a Level object instance indicating the degree of logging
                     *  required
                     * @throws java.lang.SecurityException if a security manager exists and its
                     *    {#code checkPermission} method denies calling {@code setLogger}
                     * @throws NullPointerException if the logger is null
                     * @see SecurityManager#checkPermission
                     * @see LoggingPermission
                     */
                    // @ts-ignore
                    setLogger(logger: java.util.logging.Logger, level: java.util.logging.Level): void
                    /**
                     * Returns the logging object for applications to retrieve
                     * synchronization events posted by SyncProvider implementations.
                     * @return The {#code Logger} that has been specified for use by
                     *  {@code SyncProvider} implementations
                     * @throws SyncFactoryException if no logging object has been set.
                     */
                    // @ts-ignore
                    getLogger(): java.util.logging.Logger
                    /**
                     * Sets the initial JNDI context from which SyncProvider implementations
                     * can be retrieved from a JNDI namespace
                     * <p>
                     * This method checks to see that there is an {@code SQLPermission}
                     * object  which grants the permission {@code setSyncFactory}
                     * before allowing the method to succeed.  If a
                     * {@code SecurityManager} exists and its
                     * {@code checkPermission} method denies calling {@code setJNDIContext},
                     * this method throws a
                     * {@code java.lang.SecurityException}.
                     * @param ctx a valid JNDI context
                     * @throws SyncFactoryException if the supplied JNDI context is null
                     * @throws java.lang.SecurityException if a security manager exists and its
                     *   {#code checkPermission} method denies calling {@code setJNDIContext}
                     * @see SecurityManager#checkPermission
                     */
                    // @ts-ignore
                    setJNDIContext(ctx: javax.naming.Context): void
                }
            }
        }
    }
}
