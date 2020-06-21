declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Host</b> is a Container that represents a virtual host in the
             * Catalina servlet engine.  It is useful in the following types of scenarios:
             * <ul>
             * <li>You wish to use Interceptors that see every single request processed
             * by this particular virtual host.
             * <li>You wish to run Catalina in with a standalone HTTP connector, but still
             * want support for multiple virtual hosts.
             * </ul>
             * In general, you would not use a Host when deploying Catalina connected
             * to a web server (such as Apache), because the Connector will have
             * utilized the web server's facilities to determine which Context (or
             * perhaps even which Wrapper) should be utilized to process this request.
             * <p>
             * The parent Container attached to a Host is generally an Engine, but may
             * be some other implementation, or may be omitted if it is not necessary.
             * <p>
             * The child containers attached to a Host are generally implementations
             * of Context (representing an individual servlet context).
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Host extends org.apache.catalina.Container {
                /**
                 * The ContainerEvent event type sent when a new alias is added
                 * by <code>addAlias()</code>.
                 */
                // @ts-ignore
                readonly ADD_ALIAS_EVENT: java.lang.String | string
                /**
                 * The ContainerEvent event type sent when an old alias is removed
                 * by <code>removeAlias()</code>.
                 */
                // @ts-ignore
                readonly REMOVE_ALIAS_EVENT: java.lang.String | string
                /**
                 * @return the XML root for this Host.  This can be an absolute
                 *  pathname or a relative pathname.
                 *  If null, the base path defaults to
                 *  ${catalina.base}/conf/&lt;engine name&gt;/&lt;host name&gt; directory
                 */
                // @ts-ignore
                getXmlBase(): string
                /**
                 * Set the Xml root for this Host.  This can be an absolute
                 * pathname or a relative pathname.
                 * If null, the base path defaults to
                 * ${catalina.base}/conf/&lt;engine name&gt;/&lt;host name&gt; directory
                 * @param xmlBase The new XML root
                 */
                // @ts-ignore
                setXmlBase(xmlBase: java.lang.String | string): void
                /**
                 * @return a default configuration path of this Host. The file will be
                 *  canonical if possible.
                 */
                // @ts-ignore
                getConfigBaseFile(): java.io.File
                /**
                 * @return the application root for this Host.  This can be an absolute
                 *  pathname, a relative pathname, or a URL.
                 */
                // @ts-ignore
                getAppBase(): string
                /**
                 * @return an absolute {#link File} for the appBase of this Host. The file
                 *  will be canonical if possible. There is no guarantee that that the
                 *  appBase exists.
                 */
                // @ts-ignore
                getAppBaseFile(): java.io.File
                /**
                 * Set the application root for this Host.  This can be an absolute
                 * pathname, a relative pathname, or a URL.
                 * @param appBase The new application root
                 */
                // @ts-ignore
                setAppBase(appBase: java.lang.String | string): void
                /**
                 * @return the value of the auto deploy flag.  If true, it indicates that
                 *  this host's child webapps should be discovered and automatically
                 *  deployed dynamically.
                 */
                // @ts-ignore
                getAutoDeploy(): boolean
                /**
                 * Set the auto deploy flag value for this host.
                 * @param autoDeploy The new auto deploy flag
                 */
                // @ts-ignore
                setAutoDeploy(autoDeploy: boolean): void
                /**
                 * @return the Java class name of the context configuration class
                 *  for new web applications.
                 */
                // @ts-ignore
                getConfigClass(): string
                /**
                 * Set the Java class name of the context configuration class
                 * for new web applications.
                 * @param configClass The new context configuration class
                 */
                // @ts-ignore
                setConfigClass(configClass: java.lang.String | string): void
                /**
                 * @return the value of the deploy on startup flag.  If true, it indicates
                 *  that this host's child webapps should be discovered and automatically
                 *  deployed.
                 */
                // @ts-ignore
                getDeployOnStartup(): boolean
                /**
                 * Set the deploy on startup flag value for this host.
                 * @param deployOnStartup The new deploy on startup flag
                 */
                // @ts-ignore
                setDeployOnStartup(deployOnStartup: boolean): void
                /**
                 * @return the regular expression that defines the files and directories in
                 *  the host's appBase that will be ignored by the automatic deployment
                 *  process.
                 */
                // @ts-ignore
                getDeployIgnore(): string
                /**
                 * @return the compiled regular expression that defines the files and
                 *  directories in the host's appBase that will be ignored by the automatic
                 *  deployment process.
                 */
                // @ts-ignore
                getDeployIgnorePattern(): java.util.regex.Pattern
                /**
                 * Set the regular expression that defines the files and directories in
                 * the host's appBase that will be ignored by the automatic deployment
                 * process.
                 * @param deployIgnore A regular expression matching file names
                 */
                // @ts-ignore
                setDeployIgnore(deployIgnore: java.lang.String | string): void
                /**
                 * @return the executor that is used for starting and stopping contexts. This
                 *  is primarily for use by components deploying contexts that want to do
                 *  this in a multi-threaded manner.
                 */
                // @ts-ignore
                getStartStopExecutor(): java.util.concurrent.ExecutorService
                /**
                 * Returns <code>true</code> if the Host will attempt to create directories for appBase and xmlBase
                 * unless they already exist.
                 * @return true if the Host will attempt to create directories
                 */
                // @ts-ignore
                getCreateDirs(): boolean
                /**
                 * Should the Host attempt to create directories for xmlBase and appBase
                 * upon startup.
                 * @param createDirs The new value for this flag
                 */
                // @ts-ignore
                setCreateDirs(createDirs: boolean): void
                /**
                 * @return <code>true</code> of the Host is configured to automatically undeploy old
                 *  versions of applications deployed using parallel deployment. This only
                 *  takes effect is {#link #getAutoDeploy()} also returns <code>true</code>.
                 */
                // @ts-ignore
                getUndeployOldVersions(): boolean
                /**
                 * Set to <code>true</code> if the Host should automatically undeploy old versions of
                 * applications deployed using parallel deployment. This only takes effect
                 * if {@link #getAutoDeploy()} returns <code>true</code>.
                 * @param undeployOldVersions The new value for this flag
                 */
                // @ts-ignore
                setUndeployOldVersions(undeployOldVersions: boolean): void
                /**
                 * Add an alias name that should be mapped to this same Host.
                 * @param alias The alias to be added
                 */
                // @ts-ignore
                addAlias(alias: java.lang.String | string): void
                /**
                 * @return the set of alias names for this Host.  If none are defined,
                 *  a zero length array is returned.
                 */
                // @ts-ignore
                findAliases(): string[]
                /**
                 * Remove the specified alias name from the aliases for this Host.
                 * @param alias Alias name to be removed
                 */
                // @ts-ignore
                removeAlias(alias: java.lang.String | string): void
            }
        }
    }
}
