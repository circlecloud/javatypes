declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Startup event listener for a <b>Host</b> that configures the properties
                 * of that Host, and the associated defined contexts.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class HostConfig extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string resources for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The resolution, in milliseconds, of file modification times.
                     */
                    // @ts-ignore
                    static readonly FILE_MODIFICATION_RESOLUTION_MS: number /*long*/
                    /**
                     * The Java class name of the Context implementation we should use.
                     */
                    // @ts-ignore
                    contextClass: java.lang.String | string
                    /**
                     * The Host we are associated with.
                     */
                    // @ts-ignore
                    host: org.apache.catalina.Host
                    /**
                     * The JMX ObjectName of this component.
                     */
                    // @ts-ignore
                    oname: javax.management.ObjectName
                    /**
                     * Should we deploy XML Context config files packaged with WAR files and
                     * directories?
                     */
                    // @ts-ignore
                    deployXML: boolean
                    /**
                     * Should XML files be copied to
                     * $CATALINA_BASE/conf/&lt;engine&gt;/&lt;host&gt; by default when
                     * a web application is deployed?
                     */
                    // @ts-ignore
                    copyXML: boolean
                    /**
                     * Should we unpack WAR files when auto-deploying applications in the
                     * <code>appBase</code> directory?
                     */
                    // @ts-ignore
                    unpackWARs: boolean
                    /**
                     * Map of deployed applications.
                     */
                    // @ts-ignore
                    readonly deployed: java.util.Map<java.lang.String | string, org.apache.catalina.startup.HostConfig.DeployedApplication>
                    /**
                     * List of applications which are being serviced, and shouldn't be
                     * deployed/undeployed/redeployed at the moment.
                     */
                    // @ts-ignore
                    readonly serviced: java.util.ArrayList<java.lang.String | string>
                    /**
                     * The <code>Digester</code> instance used to parse context descriptors.
                     */
                    // @ts-ignore
                    digester: org.apache.tomcat.util.digester.Digester
                    /**
                     * The list of Wars in the appBase to be ignored because they are invalid
                     * (e.g. contain /../ sequences).
                     */
                    // @ts-ignore
                    readonly invalidWars: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>
                    /**
                     * @return the Context implementation class name.
                     */
                    // @ts-ignore
                    public getContextClass(): string
                    /**
                     * Set the Context implementation class name.
                     * @param contextClass The new Context implementation class name.
                     */
                    // @ts-ignore
                    public setContextClass(contextClass: java.lang.String | string): void
                    /**
                     * @return the deploy XML config file flag for this component.
                     */
                    // @ts-ignore
                    public isDeployXML(): boolean
                    /**
                     * Set the deploy XML config file flag for this component.
                     * @param deployXML The new deploy XML flag
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
                     * @return the unpack WARs flag.
                     */
                    // @ts-ignore
                    public isUnpackWARs(): boolean
                    /**
                     * Set the unpack WARs flag.
                     * @param unpackWARs The new unpack WARs flag
                     */
                    // @ts-ignore
                    public setUnpackWARs(unpackWARs: boolean): void
                    /**
                     * Process the START event for an associated Host.
                     * @param event The lifecycle event that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    /**
                     * Add a serviced application to the list.
                     * @param name the context name
                     */
                    // @ts-ignore
                    public addServiced(name: java.lang.String | string): void
                    /**
                     * Is application serviced ?
                     * @param name the context name
                     * @return state of the application
                     */
                    // @ts-ignore
                    public isServiced(name: java.lang.String | string): boolean
                    /**
                     * Removed a serviced application from the list.
                     * @param name the context name
                     */
                    // @ts-ignore
                    public removeServiced(name: java.lang.String | string): void
                    /**
                     * Get the instant where an application was deployed.
                     * @param name the context name
                     * @return 0L if no application with that name is deployed, or the instant
                     *   on which the application was deployed
                     */
                    // @ts-ignore
                    public getDeploymentTime(name: java.lang.String | string): number /*long*/
                    /**
                     * Has the specified application been deployed? Note applications defined
                     * in server.xml will not have been deployed.
                     * @param name the context name
                     * @return <code>true</code> if the application has been deployed and
                     *   <code>false</code> if the application has not been deployed or does not
                     *   exist
                     */
                    // @ts-ignore
                    public isDeployed(name: java.lang.String | string): boolean
                    /**
                     * Create the digester which will be used to parse context config files.
                     * @param contextClassName The class which will be used to create the
                     *   context instance
                     * @return the digester
                     */
                    // @ts-ignore
                    static createDigester(contextClassName: java.lang.String | string): org.apache.tomcat.util.digester.Digester
                    // @ts-ignore
                    returnCanonicalPath(path: java.lang.String | string): java.io.File
                    /**
                     * Get the name of the configBase.
                     * For use with JMX management.
                     * @return the config base
                     */
                    // @ts-ignore
                    public getConfigBaseName(): string
                    /**
                     * Deploy applications for any directories or WAR files that are found
                     * in our "application root" directory.
                     */
                    // @ts-ignore
                    deployApps(): void
                    /**
                     * Filter the list of application file paths to remove those that match
                     * the regular expression defined by {@link Host#getDeployIgnore()}.
                     * @param unfilteredAppPaths    The list of application paths to filter
                     * @return The filtered list of application paths
                     */
                    // @ts-ignore
                    filterAppPaths(unfilteredAppPaths: java.lang.String[] | string[]): string[]
                    /**
                     * Deploy applications for any directories or WAR files that are found
                     * in our "application root" directory.
                     * @param name The context name which should be deployed
                     */
                    // @ts-ignore
                    deployApps(name: java.lang.String | string): void
                    /**
                     * Deploy XML context descriptors.
                     * @param configBase The config base
                     * @param files The XML descriptors which should be deployed
                     */
                    // @ts-ignore
                    deployDescriptors(configBase: java.io.File, files: java.lang.String[] | string[]): void
                    /**
                     * Deploy specified context descriptor.
                     * @param cn The context name
                     * @param contextXml The descriptor
                     */
                    // @ts-ignore
                    deployDescriptor(cn: org.apache.catalina.util.ContextName, contextXml: java.io.File): void
                    /**
                     * Deploy WAR files.
                     * @param appBase The base path for applications
                     * @param files The WARs to deploy
                     */
                    // @ts-ignore
                    deployWARs(appBase: java.io.File, files: java.lang.String[] | string[]): void
                    /**
                     * Deploy packed WAR.
                     * @param cn The context name
                     * @param war The WAR file
                     */
                    // @ts-ignore
                    deployWAR(cn: org.apache.catalina.util.ContextName, war: java.io.File): void
                    /**
                     * Deploy exploded webapps.
                     * @param appBase The base path for applications
                     * @param files The exploded webapps that should be deployed
                     */
                    // @ts-ignore
                    deployDirectories(appBase: java.io.File, files: java.lang.String[] | string[]): void
                    /**
                     * Deploy exploded webapp.
                     * @param cn The context name
                     * @param dir The path to the root folder of the weapp
                     */
                    // @ts-ignore
                    deployDirectory(cn: org.apache.catalina.util.ContextName, dir: java.io.File): void
                    /**
                     * Check if a webapp is already deployed in this host.
                     * @param contextName of the context which will be checked
                     * @return <code>true</code> if the specified deployment exists
                     */
                    // @ts-ignore
                    deploymentExists(contextName: java.lang.String | string): boolean
                    /**
                     * Add watched resources to the specified Context.
                     * @param app HostConfig deployed app
                     * @param docBase web app docBase
                     * @param context web application context
                     */
                    // @ts-ignore
                    addWatchedResources(app: org.apache.catalina.startup.HostConfig.DeployedApplication, docBase: java.lang.String | string, context: org.apache.catalina.Context): void
                    // @ts-ignore
                    addGlobalRedeployResources(app: org.apache.catalina.startup.HostConfig.DeployedApplication): void
                    /**
                     * Check resources for redeployment and reloading.
                     * @param app   The web application to check
                     * @param skipFileModificationResolutionCheck
                     *               When checking files for modification should the check that
                     *               requires that any file modification must have occurred at
                     *               least as long ago as the resolution of the file time stamp
                     *               be skipped
                     */
                    // @ts-ignore
                    checkResources(app: org.apache.catalina.startup.HostConfig.DeployedApplication, skipFileModificationResolutionCheck: boolean): void
                    // @ts-ignore
                    public beforeStart(): void
                    /**
                     * Process a "start" event for this Host.
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * Process a "stop" event for this Host.
                     */
                    // @ts-ignore
                    public stop(): void
                    /**
                     * Check status of all webapps.
                     */
                    // @ts-ignore
                    check(): void
                    /**
                     * Check status of a specific web application and reload, redeploy or deploy
                     * it as necessary. This method is for use with functionality such as
                     * management web applications that upload new/updated web applications and
                     * need to trigger the appropriate action to deploy them. This method
                     * assumes that the web application is currently marked as serviced and that
                     * any uploading/updating has been completed before this method is called.
                     * Any action taken as a result of the checks will complete before this
                     * method returns.
                     * @param name The name of the web application to check
                     */
                    // @ts-ignore
                    public check(name: java.lang.String | string): void
                    /**
                     * Check for old versions of applications using parallel deployment that are
                     * now unused (have no active sessions) and undeploy any that are found.
                     */
                    // @ts-ignore
                    public checkUndeploy(): void
                    /**
                     * Add a new Context to be managed by us.
                     * Entry point for the admin webapp, and other JMX Context controllers.
                     * @param context The context instance
                     */
                    // @ts-ignore
                    public manageApp(context: org.apache.catalina.Context): void
                    /**
                     * Remove a webapp from our control.
                     * Entry point for the admin webapp, and other JMX Context controllers.
                     * @param contextName The context name
                     */
                    // @ts-ignore
                    public unmanageApp(contextName: java.lang.String | string): void
                }
            }
        }
    }
}
