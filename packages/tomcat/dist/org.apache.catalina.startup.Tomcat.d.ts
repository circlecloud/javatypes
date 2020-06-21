declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Minimal tomcat starter for embedding/unit tests.
                 * <p>
                 * Tomcat supports multiple styles of configuration and
                 * startup - the most common and stable is server.xml-based,
                 * implemented in org.apache.catalina.startup.Bootstrap.
                 * <p>
                 * This class is for use in apps that embed tomcat.
                 * <p>
                 * Requirements:
                 * <ul>
                 * <li>all tomcat classes and possibly servlets are in the classpath.
                 * (for example all is in one big jar, or in eclipse CP, or in
                 * any other combination)</li>
                 * <li>we need one temporary directory for work files</li>
                 * <li>no config file is required. This class provides methods to
                 * use if you have a webapp with a web.xml file, but it is
                 * optional - you can use your own servlets.</li>
                 * </ul>
                 * <p>
                 * There are a variety of 'add' methods to configure servlets and webapps. These
                 * methods, by default, create a simple in-memory security realm and apply it.
                 * If you need more complex security processing, you can define a subclass of
                 * this class.
                 * <p>
                 * This class provides a set of convenience methods for configuring webapp
                 * contexts, all overloads of the method <code>addWebapp</code>. These methods
                 * create a webapp context, configure it, and then add it to a {@link Host}.
                 * They do not use a global default web.xml; rather, they add a lifecycle
                 * listener that adds the standard DefaultServlet, JSP processing, and welcome
                 * files.
                 * <p>
                 * In complex cases, you may prefer to use the ordinary Tomcat API to create
                 * webapp contexts; for example, you might need to install a custom Loader
                 * before the call to {@link Host#addChild(Container)}. To replicate the basic
                 * behavior of the <code>addWebapp</code> methods, you may want to call two
                 * methods of this class: {@link #noDefaultWebXmlPath()} and
                 * {@link #getDefaultWebXmlListener()}.
                 * <p>
                 * {@link #getDefaultWebXmlListener()} returns a {@link LifecycleListener} that
                 * adds the standard DefaultServlet, JSP processing, and welcome files. If you
                 * add this listener, you must prevent Tomcat from applying any standard global
                 * web.xml with ...
                 * <p>
                 * {@link #noDefaultWebXmlPath()} returns a dummy pathname to configure to
                 * prevent {@link ContextConfig} from trying to apply a global web.xml file.
                 * <p>
                 * This class provides a main() and few simple CLI arguments,
                 * see setters for doc. It can be used for simple tests and
                 * demo.
                 * @see <a href="https://svn.apache.org/repos/asf/tomcat/trunk/test/org/apache/catalina/startup/TestTomcat.java">TestTomcat</a>
                 * @author Costin Manolache
                 */
                // @ts-ignore
                class Tomcat extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    server: org.apache.catalina.Server
                    // @ts-ignore
                    port: number /*int*/
                    // @ts-ignore
                    hostname: java.lang.String | string
                    // @ts-ignore
                    basedir: java.lang.String | string
                    /**
                     * Tomcat requires that the base directory is set because the defaults for
                     * a number of other locations, such as the work directory, are derived from
                     * the base directory. This should be the first method called.
                     * <p>
                     * If this method is not called then Tomcat will attempt to use these
                     * locations in the following order:
                     * <ol>
                     * <li>if set, the catalina.base system property</li>
                     * <li>if set, the catalina.home system property</li>
                     * <li>The user.dir system property (the directory where Java was run from)
                     * where a directory named tomcat.$PORT will be created. $PORT is the
                     * value configured via {@link #setPort(int)} which defaults to 8080 if
                     * not set</li>
                     * </ol>
                     * The user should ensure that the file permissions for the base directory
                     * are appropriate.
                     * <p>
                     * TODO: disable work dir if not needed ( no jsp, etc ).
                     * @param basedir The Tomcat base folder on which all others will be derived
                     */
                    // @ts-ignore
                    public setBaseDir(basedir: java.lang.String | string): void
                    /**
                     * Set the port for the default connector. The default connector will
                     * only be created if getConnector is called.
                     * @param port The port number
                     */
                    // @ts-ignore
                    public setPort(port: number /*int*/): void
                    /**
                     * The the hostname of the default host, default is
                     * 'localhost'.
                     * @param s The default host name
                     */
                    // @ts-ignore
                    public setHostname(s: java.lang.String | string): void
                    /**
                     * This is equivalent to adding a web application to Tomcat's webapps
                     * directory. The equivalent of the default web.xml will be applied  to the
                     * web application and any WEB-INF/web.xml and META-INF/context.xml packaged
                     * with the application will be processed normally. Normal web fragment and
                     * {@link javax.servlet.ServletContainerInitializer} processing will be
                     * applied.
                     * @param contextPath The context mapping to use, "" for root context.
                     * @param docBase Base directory for the context, for static files.
                     *   Must exist, relative to the server home
                     * @return the deployed context
                     */
                    // @ts-ignore
                    public addWebapp(contextPath: java.lang.String | string, docBase: java.lang.String | string): org.apache.catalina.Context
                    /**
                     * Copy the specified WAR file to the Host's appBase and then call
                     * {@link #addWebapp(String, String)} with the newly copied WAR. The WAR
                     * will <b>NOT</b> be removed from the Host's appBase when the Tomcat
                     * instance stops. Note that {@link ExpandWar} provides utility methods that
                     * may be used to delete the WAR and/or expanded directory if required.
                     * @param contextPath   The context mapping to use, "" for root context.
                     * @param source        The location from which the WAR should be copied
                     * @return The deployed Context
                     * @throws IOException If an I/O error occurs while copying the WAR file
                     *                      from the specified URL to the appBase
                     */
                    // @ts-ignore
                    public addWebapp(contextPath: java.lang.String | string, source: java.net.URL): org.apache.catalina.Context
                    /**
                     * Add a context - programmatic mode, no default web.xml used. This means
                     * that there is no JSP support (no JSP servlet), no default servlet and
                     * no web socket support unless explicitly enabled via the programmatic
                     * interface. There is also no
                     * {@link javax.servlet.ServletContainerInitializer} processing and no
                     * annotation processing. If a
                     * {@link javax.servlet.ServletContainerInitializer} is added
                     * programmatically, there will still be no scanning for
                     * {@link javax.servlet.annotation.HandlesTypes} matches.
                     * <p>
                     * API calls equivalent with web.xml:
                     * <pre>{@code
                     * // context-param
                     * ctx.addParameter("name", "value");
                     * // error-page
                     * ErrorPage ep = new ErrorPage();
                     * ep.setErrorCode(500);
                     * ep.setLocation("/error.html");
                     * ctx.addErrorPage(ep);
                     * ctx.addMimeMapping("ext", "type");
                     * }</pre>
                     * <p>
                     * Note: If you reload the Context, all your configuration will be lost. If
                     * you need reload support, consider using a LifecycleListener to provide
                     * your configuration.
                     * <p>
                     * TODO: add the rest
                     * @param contextPath The context mapping to use, "" for root context.
                     * @param docBase Base directory for the context, for static files.
                     *   Must exist, relative to the server home
                     * @return the deployed context
                     */
                    // @ts-ignore
                    public addContext(contextPath: java.lang.String | string, docBase: java.lang.String | string): org.apache.catalina.Context
                    /**
                     * Equivalent to &lt;servlet&gt;&lt;servlet-name&gt;&lt;servlet-class&gt;.
                     * <p>
                     * In general it is better/faster to use the method that takes a
                     * Servlet as param - this one can be used if the servlet is not
                     * commonly used, and want to avoid loading all deps.
                     * ( for example: jsp servlet )
                     * You can customize the returned servlet, ex:
                     * <pre>
                     * wrapper.addInitParameter("name", "value");
                     * </pre>
                     * @param contextPath   Context to add Servlet to
                     * @param servletName   Servlet name (used in mappings)
                     * @param servletClass  The class to be used for the Servlet
                     * @return The wrapper for the servlet
                     */
                    // @ts-ignore
                    public addServlet(contextPath: java.lang.String | string, servletName: java.lang.String | string, servletClass: java.lang.String | string): org.apache.catalina.Wrapper
                    /**
                     * Static version of {@link #addServlet(String, String, String)}
                     * @param ctx           Context to add Servlet to
                     * @param servletName   Servlet name (used in mappings)
                     * @param servletClass  The class to be used for the Servlet
                     * @return The wrapper for the servlet
                     */
                    // @ts-ignore
                    public static addServlet(ctx: org.apache.catalina.Context, servletName: java.lang.String | string, servletClass: java.lang.String | string): org.apache.catalina.Wrapper
                    /**
                     * Add an existing Servlet to the context with no class.forName or
                     * initialisation.
                     * @param contextPath   Context to add Servlet to
                     * @param servletName   Servlet name (used in mappings)
                     * @param servlet       The Servlet to add
                     * @return The wrapper for the servlet
                     */
                    // @ts-ignore
                    public addServlet(contextPath: java.lang.String | string, servletName: java.lang.String | string, servlet: javax.servlet.Servlet): org.apache.catalina.Wrapper
                    /**
                     * Static version of {@link #addServlet(String, String, Servlet)}.
                     * @param ctx           Context to add Servlet to
                     * @param servletName   Servlet name (used in mappings)
                     * @param servlet       The Servlet to add
                     * @return The wrapper for the servlet
                     */
                    // @ts-ignore
                    public static addServlet(ctx: org.apache.catalina.Context, servletName: java.lang.String | string, servlet: javax.servlet.Servlet): org.apache.catalina.Wrapper
                    /**
                     * Initialize the server given the specified configuration source.
                     * The server will be loaded according to the Tomcat configuration
                     * files contained in the source (server.xml, web.xml, context.xml,
                     * SSL certificates, etc).
                     * If no configuration source is specified, it will use the default
                     * locations for these files.
                     * @param source The configuration source
                     */
                    // @ts-ignore
                    public init(source: org.apache.tomcat.util.file.ConfigurationSource): void
                    /**
                     * Initialize the server.
                     * @throws LifecycleException Init error
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Start the server.
                     * @throws LifecycleException Start error
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * Stop the server.
                     * @throws LifecycleException Stop error
                     */
                    // @ts-ignore
                    public stop(): void
                    /**
                     * Destroy the server. This object cannot be used once this method has been
                     * called.
                     * @throws LifecycleException Destroy error
                     */
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Add a user for the in-memory realm. All created apps use this
                     * by default, can be replaced using setRealm().
                     * @param user The user name
                     * @param pass The password
                     */
                    // @ts-ignore
                    public addUser(user: java.lang.String | string, pass: java.lang.String | string): void
                    /**
                     * Add a role to a user.
                     * @see #addUser(String, String)
                     * @param user The user name
                     * @param role The role name
                     */
                    // @ts-ignore
                    public addRole(user: java.lang.String | string, role: java.lang.String | string): void
                    /**
                     * Get the default HTTP connector that is used by the embedded
                     * Tomcat. It is first configured connector in the service.
                     * If there's no connector defined, it will create and add a default
                     * connector using the port and address specified in this Tomcat
                     * instance, and return it for further customization.
                     * @return The connector object
                     */
                    // @ts-ignore
                    public getConnector(): org.apache.catalina.connector.Connector
                    /**
                     * Set the specified connector in the service, if it is not already
                     * present.
                     * @param connector The connector instance to add
                     */
                    // @ts-ignore
                    public setConnector(connector: org.apache.catalina.connector.Connector): void
                    /**
                     * Get the service object. Can be used to add more
                     * connectors and few other global settings.
                     * @return The service
                     */
                    // @ts-ignore
                    public getService(): org.apache.catalina.Service
                    /**
                     * Sets the current host - all future webapps will
                     * be added to this host. When tomcat starts, the
                     * host will be the default host.
                     * @param host The current host
                     */
                    // @ts-ignore
                    public setHost(host: org.apache.catalina.Host): void
                    // @ts-ignore
                    public getHost(): org.apache.catalina.Host
                    /**
                     * Access to the engine, for further customization.
                     * @return The engine
                     */
                    // @ts-ignore
                    public getEngine(): org.apache.catalina.Engine
                    /**
                     * Get the server object. You can add listeners and few more
                     * customizations. JNDI is disabled by default.
                     * @return The Server
                     */
                    // @ts-ignore
                    public getServer(): org.apache.catalina.Server
                    /**
                     * @param host The host in which the context will be deployed
                     * @param contextPath The context mapping to use, "" for root context.
                     * @param dir Base directory for the context, for static files.
                     *   Must exist, relative to the server home
                     * @return the deployed context
                     * @see #addContext(String, String)
                     */
                    // @ts-ignore
                    public addContext(host: org.apache.catalina.Host, contextPath: java.lang.String | string, dir: java.lang.String | string): org.apache.catalina.Context
                    /**
                     * @param host The host in which the context will be deployed
                     * @param contextPath The context mapping to use, "" for root context.
                     * @param contextName The context name
                     * @param dir Base directory for the context, for static files.
                     *   Must exist, relative to the server home
                     * @return the deployed context
                     * @see #addContext(String, String)
                     */
                    // @ts-ignore
                    public addContext(host: org.apache.catalina.Host, contextPath: java.lang.String | string, contextName: java.lang.String | string, dir: java.lang.String | string): org.apache.catalina.Context
                    /**
                     * @param host The host in which the context will be deployed
                     * @param contextPath The context mapping to use, "" for root context.
                     * @param docBase Base directory for the context, for static files.
                     *   Must exist, relative to the server home
                     * @return the deployed context
                     * @see #addWebapp(String, String)
                     */
                    // @ts-ignore
                    public addWebapp(host: org.apache.catalina.Host, contextPath: java.lang.String | string, docBase: java.lang.String | string): org.apache.catalina.Context
                    /**
                     * @param host The host in which the context will be deployed
                     * @param contextPath The context mapping to use, "" for root context.
                     * @param docBase Base directory for the context, for static files.
                     *   Must exist, relative to the server home
                     * @param config Custom context configurator helper
                     * @return the deployed context
                     * @see #addWebapp(String, String)
                     */
                    // @ts-ignore
                    public addWebapp(host: org.apache.catalina.Host, contextPath: java.lang.String | string, docBase: java.lang.String | string, config: org.apache.catalina.LifecycleListener): org.apache.catalina.Context
                    /**
                     * Return a listener that provides the required configuration items for JSP
                     * processing. From the standard Tomcat global web.xml. Pass this to
                     * {@link Context#addLifecycleListener(LifecycleListener)} and then pass the
                     * result of {@link #noDefaultWebXmlPath()} to
                     * {@link ContextConfig#setDefaultWebXml(String)}.
                     * @return a listener object that configures default JSP processing.
                     */
                    // @ts-ignore
                    public getDefaultWebXmlListener(): org.apache.catalina.LifecycleListener
                    /**
                     * @return a pathname to pass to
                     *  {#link ContextConfig#setDefaultWebXml(String)} when using
                     *  {@link #getDefaultWebXmlListener()}.
                     */
                    // @ts-ignore
                    public noDefaultWebXmlPath(): string
                    /**
                     * Create an in-memory realm. You can replace it for contexts with a real
                     * one. The Realm created here will be added to the Engine by default and
                     * may be replaced at the Engine level or over-ridden (as per normal Tomcat
                     * behaviour) at the Host or Context level.
                     * @return a realm instance
                     */
                    // @ts-ignore
                    createDefaultRealm(): org.apache.catalina.Realm
                    // @ts-ignore
                    initBaseDir(): void
                    /**
                     * Controls if the loggers will be silenced or not.
                     * @param silent    <code>true</code> sets the log level to WARN for the
                     *                   loggers that log information on Tomcat start up. This
                     *                   prevents the usual startup information being logged.
                     *                   <code>false</code> sets the log level to the default
                     *                   level of INFO.
                     */
                    // @ts-ignore
                    public setSilent(silent: boolean): void
                    /**
                     * By default, when calling addWebapp() to create a Context, the settings from
                     * from the default web.xml are added to the context.  Calling this method with
                     * a <code>false</code> value prior to calling addWebapp() allows to opt out of
                     * the default settings. In that event you will need to add the configurations
                     * yourself,  either programmatically or by using web.xml deployment descriptors.
                     * @param addDefaultWebXmlToWebapp <code>false</code> will prevent the class from
                     *                                  automatically adding the default settings when
                     *                                  calling addWebapp().
                     *                                  <code>true</code> will add the default settings
                     *                                  and is the default behavior.
                     * @see #addWebapp(Host, String, String, LifecycleListener)
                     */
                    // @ts-ignore
                    public setAddDefaultWebXmlToWebapp(addDefaultWebXmlToWebapp: boolean): void
                    /**
                     * Enables JNDI naming which is disabled by default. Server must implement
                     * {@link Lifecycle} in order for the {@link NamingContextListener} to be
                     * used.
                     */
                    // @ts-ignore
                    public enableNaming(): void
                    /**
                     * Provide default configuration for a context. This is the programmatic
                     * equivalent of the default web.xml.
                     * TODO: in normal Tomcat, if default-web.xml is not found, use this
                     * method
                     * @param contextPath   The context to set the defaults for
                     */
                    // @ts-ignore
                    public initWebappDefaults(contextPath: java.lang.String | string): void
                    /**
                     * Static version of {@link #initWebappDefaults(String)}
                     * @param ctx   The context to set the defaults for
                     */
                    // @ts-ignore
                    public static initWebappDefaults(ctx: org.apache.catalina.Context): void
                    // @ts-ignore
                    getWebappConfigFile(path: java.lang.String | string, contextName: java.lang.String | string): java.net.URL
                    /**
                     * Main executable method for use with a Maven packager.
                     * @param args the command line arguments
                     * @throws Exception if an error occurs
                     */
                    // @ts-ignore
                    public static main(args: java.lang.String[] | string[]): void
                }
            }
        }
    }
}
