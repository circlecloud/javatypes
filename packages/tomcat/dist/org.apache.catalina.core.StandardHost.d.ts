declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of the <b>Host</b> interface.  Each
                 * child container must be a Context implementation to process the
                 * requests directed to a particular web application.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class StandardHost extends org.apache.catalina.core.ContainerBase implements org.apache.catalina.Host {
                    /**
                     * Create a new StandardHost component with the default basic Valve.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getUndeployOldVersions(): boolean
                    // @ts-ignore
                    public setUndeployOldVersions(undeployOldVersions: boolean): void
                    // @ts-ignore
                    public getStartStopExecutor(): java.util.concurrent.ExecutorService
                    /**
                     * Return the application root for this Host.  This can be an absolute
                     * pathname, a relative pathname, or a URL.
                     */
                    // @ts-ignore
                    public getAppBase(): string
                    /**
                     * ({@inheritDoc}
                     */
                    // @ts-ignore
                    public getAppBaseFile(): java.io.File
                    /**
                     * Set the application root for this Host.  This can be an absolute
                     * pathname, a relative pathname, or a URL.
                     * @param appBase The new application root
                     */
                    // @ts-ignore
                    public setAppBase(appBase: java.lang.String | string): void
                    /**
                     * ({@inheritDoc}
                     */
                    // @ts-ignore
                    public getXmlBase(): string
                    /**
                     * ({@inheritDoc}
                     */
                    // @ts-ignore
                    public setXmlBase(xmlBase: java.lang.String | string): void
                    /**
                     * ({@inheritDoc}
                     */
                    // @ts-ignore
                    public getConfigBaseFile(): java.io.File
                    /**
                     * @return <code>true</code> if the Host will attempt to create directories for appBase and xmlBase
                     *  unless they already exist.
                     */
                    // @ts-ignore
                    public getCreateDirs(): boolean
                    /**
                     * Set to <code>true</code> if the Host should attempt to create directories for xmlBase and appBase upon startup
                     * @param createDirs the new flag value
                     */
                    // @ts-ignore
                    public setCreateDirs(createDirs: boolean): void
                    /**
                     * @return the value of the auto deploy flag.  If true, it indicates that
                     *  this host's child webapps will be dynamically deployed.
                     */
                    // @ts-ignore
                    public getAutoDeploy(): boolean
                    /**
                     * Set the auto deploy flag value for this host.
                     * @param autoDeploy The new auto deploy flag
                     */
                    // @ts-ignore
                    public setAutoDeploy(autoDeploy: boolean): void
                    /**
                     * @return the Java class name of the context configuration class
                     *  for new web applications.
                     */
                    // @ts-ignore
                    public getConfigClass(): string
                    /**
                     * Set the Java class name of the context configuration class
                     * for new web applications.
                     * @param configClass The new context configuration class
                     */
                    // @ts-ignore
                    public setConfigClass(configClass: java.lang.String | string): void
                    /**
                     * @return the Java class name of the Context implementation class
                     *  for new web applications.
                     */
                    // @ts-ignore
                    public getContextClass(): string
                    /**
                     * Set the Java class name of the Context implementation class
                     * for new web applications.
                     * @param contextClass The new context implementation class
                     */
                    // @ts-ignore
                    public setContextClass(contextClass: java.lang.String | string): void
                    /**
                     * @return the value of the deploy on startup flag.  If <code>true</code>, it indicates
                     *  that this host's child webapps should be discovered and automatically
                     *  deployed at startup time.
                     */
                    // @ts-ignore
                    public getDeployOnStartup(): boolean
                    /**
                     * Set the deploy on startup flag value for this host.
                     * @param deployOnStartup The new deploy on startup flag
                     */
                    // @ts-ignore
                    public setDeployOnStartup(deployOnStartup: boolean): void
                    /**
                     * @return <code>true</code> if XML context descriptors should be deployed.
                     */
                    // @ts-ignore
                    public isDeployXML(): boolean
                    /**
                     * Deploy XML Context config files flag mutator.
                     * @param deployXML <code>true</code> if context descriptors should be deployed
                     */
                    // @ts-ignore
                    public setDeployXML(deployXML: boolean): void
                    /**
                     * @return the copy XML config file flag for this component.
                     */
                    // @ts-ignore
                    public isCopyXML(): boolean
                    /**
                     * Set the copy XML config file flag for this component.
                     * @param copyXML The new copy XML flag
                     */
                    // @ts-ignore
                    public setCopyXML(copyXML: boolean): void
                    /**
                     * @return the Java class name of the error report valve class
                     *  for new web applications.
                     */
                    // @ts-ignore
                    public getErrorReportValveClass(): string
                    /**
                     * Set the Java class name of the error report valve class
                     * for new web applications.
                     * @param errorReportValveClass The new error report valve class
                     */
                    // @ts-ignore
                    public setErrorReportValveClass(errorReportValveClass: java.lang.String | string): void
                    /**
                     * @return the canonical, fully qualified, name of the virtual host
                     *  this Container represents.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Set the canonical, fully qualified, name of the virtual host
                     * this Container represents.
                     * @param name Virtual host name
                     * @exception IllegalArgumentException if name is null
                     */
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    /**
                     * @return <code>true</code> if WARs should be unpacked on deployment.
                     */
                    // @ts-ignore
                    public isUnpackWARs(): boolean
                    /**
                     * Unpack WARs flag mutator.
                     * @param unpackWARs <code>true</code> to unpack WARs on deployment
                     */
                    // @ts-ignore
                    public setUnpackWARs(unpackWARs: boolean): void
                    /**
                     * @return host work directory base.
                     */
                    // @ts-ignore
                    public getWorkDir(): string
                    /**
                     * Set host work directory base.
                     * @param workDir the new base work folder for this host
                     */
                    // @ts-ignore
                    public setWorkDir(workDir: java.lang.String | string): void
                    /**
                     * @return the regular expression that defines the files and directories in
                     *  the host's {#link #getAppBase} that will be ignored by the automatic
                     *  deployment process.
                     */
                    // @ts-ignore
                    public getDeployIgnore(): string
                    /**
                     * @return the compiled regular expression that defines the files and
                     *  directories in the host's {#link #getAppBase} that will be ignored by the
                     *  automatic deployment process.
                     */
                    // @ts-ignore
                    public getDeployIgnorePattern(): java.util.regex.Pattern
                    /**
                     * Set the regular expression that defines the files and directories in
                     * the host's {@link #getAppBase} that will be ignored by the automatic
                     * deployment process.
                     * @param deployIgnore the regexp
                     */
                    // @ts-ignore
                    public setDeployIgnore(deployIgnore: java.lang.String | string): void
                    /**
                     * @return <code>true</code> if a webapp start should fail if a Servlet startup fails
                     */
                    // @ts-ignore
                    public isFailCtxIfServletStartFails(): boolean
                    /**
                     * Change the behavior of Servlet startup errors on web application starts.
                     * @param failCtxIfServletStartFails <code>false</code> to ignore errors on Servlets which
                     *     are stated when the web application starts
                     */
                    // @ts-ignore
                    public setFailCtxIfServletStartFails(failCtxIfServletStartFails: boolean): void
                    /**
                     * Add an alias name that should be mapped to this same Host.
                     * @param alias The alias to be added
                     */
                    // @ts-ignore
                    public addAlias(alias: java.lang.String | string): void
                    /**
                     * Add a child Container, only if the proposed child is an implementation
                     * of Context.
                     * @param child Child container to be added
                     */
                    // @ts-ignore
                    public addChild(child: org.apache.catalina.Container): void
                    /**
                     * Attempt to identify the contexts that have a class loader memory leak.
                     * This is usually triggered on context reload. Note: This method attempts
                     * to force a full garbage collection. This should be used with extreme
                     * caution on a production system.
                     * @return a list of possibly leaking contexts
                     */
                    // @ts-ignore
                    public findReloadedContextMemoryLeaks(): string[]
                    /**
                     * @return the set of alias names for this Host.  If none are defined,
                     *  a zero length array is returned.
                     */
                    // @ts-ignore
                    public findAliases(): string[]
                    /**
                     * Remove the specified alias name from the aliases for this Host.
                     * @param alias Alias name to be removed
                     */
                    // @ts-ignore
                    public removeAlias(alias: java.lang.String | string): void
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * @return the MBean Names of the Valves associated with this Host
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public getValveNames(): string[]
                    // @ts-ignore
                    public getAliases(): string[]
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                }
            }
        }
    }
}
