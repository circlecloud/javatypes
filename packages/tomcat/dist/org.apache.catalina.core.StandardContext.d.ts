declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of the <b>Context</b> interface.  Each
                 * child container must be a Wrapper implementation to process the
                 * requests directed to a particular servlet.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class StandardContext extends org.apache.catalina.core.ContainerBase implements org.apache.catalina.Context, javax.management.NotificationEmitter {
                    /**
                     * Create a new StandardContext component with the default basic Valve.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Allow multipart/form-data requests to be parsed even when the
                     * target servlet doesn't specify @MultipartConfig or have a
                     * &lt;multipart-config&gt; element.
                     */
                    // @ts-ignore
                    allowCasualMultipartParsing: boolean
                    /**
                     * The ServletContext implementation associated with this Context.
                     */
                    // @ts-ignore
                    context: org.apache.catalina.core.ApplicationContext
                    /**
                     * The Manager implementation with which this Container is associated.
                     */
                    // @ts-ignore
                    manager: org.apache.catalina.Manager
                    // @ts-ignore
                    static readonly DEFAULT_NAMING_LISTENER: org.apache.catalina.ThreadBindingListener
                    // @ts-ignore
                    threadBindingListener: org.apache.catalina.ThreadBindingListener
                    // @ts-ignore
                    public incrementInProgressAsyncCount(): void
                    // @ts-ignore
                    public decrementInProgressAsyncCount(): void
                    // @ts-ignore
                    public setAllowMultipleLeadingForwardSlashInPath(allowMultipleLeadingForwardSlashInPath: boolean): void
                    // @ts-ignore
                    public getAllowMultipleLeadingForwardSlashInPath(): boolean
                    // @ts-ignore
                    public getRequestCharacterEncoding(): string
                    // @ts-ignore
                    public setRequestCharacterEncoding(requestEncoding: java.lang.String | string): void
                    // @ts-ignore
                    public getResponseCharacterEncoding(): string
                    // @ts-ignore
                    public setResponseCharacterEncoding(responseEncoding: java.lang.String | string): void
                    // @ts-ignore
                    public setDispatchersUseEncodedPaths(dispatchersUseEncodedPaths: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The default value for this implementation is {@code true}.
                     */
                    // @ts-ignore
                    public getDispatchersUseEncodedPaths(): boolean
                    // @ts-ignore
                    public setUseRelativeRedirects(useRelativeRedirects: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The default value for this implementation is {@code true}.
                     */
                    // @ts-ignore
                    public getUseRelativeRedirects(): boolean
                    // @ts-ignore
                    public setMapperContextRootRedirectEnabled(mapperContextRootRedirectEnabled: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The default value for this implementation is {@code false}.
                     */
                    // @ts-ignore
                    public getMapperContextRootRedirectEnabled(): boolean
                    // @ts-ignore
                    public setMapperDirectoryRedirectEnabled(mapperDirectoryRedirectEnabled: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The default value for this implementation is {@code false}.
                     */
                    // @ts-ignore
                    public getMapperDirectoryRedirectEnabled(): boolean
                    // @ts-ignore
                    public setValidateClientProvidedNewSessionId(validateClientProvidedNewSessionId: boolean): void
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The default value for this implementation is {@code true}.
                     */
                    // @ts-ignore
                    public getValidateClientProvidedNewSessionId(): boolean
                    // @ts-ignore
                    public setCookieProcessor(cookieProcessor: org.apache.tomcat.util.http.CookieProcessor): void
                    // @ts-ignore
                    public getCookieProcessor(): org.apache.tomcat.util.http.CookieProcessor
                    // @ts-ignore
                    public getNamingToken(): any
                    // @ts-ignore
                    public setContainerSciFilter(containerSciFilter: java.lang.String | string): void
                    // @ts-ignore
                    public getContainerSciFilter(): string
                    // @ts-ignore
                    public getSendRedirectBody(): boolean
                    // @ts-ignore
                    public setSendRedirectBody(sendRedirectBody: boolean): void
                    // @ts-ignore
                    public getPreemptiveAuthentication(): boolean
                    // @ts-ignore
                    public setPreemptiveAuthentication(preemptiveAuthentication: boolean): void
                    // @ts-ignore
                    public setFireRequestListenersOnForwards(enable: boolean): void
                    // @ts-ignore
                    public getFireRequestListenersOnForwards(): boolean
                    // @ts-ignore
                    public setAddWebinfClassesResources(addWebinfClassesResources: boolean): void
                    // @ts-ignore
                    public getAddWebinfClassesResources(): boolean
                    // @ts-ignore
                    public setWebappVersion(webappVersion: java.lang.String | string): void
                    // @ts-ignore
                    public getWebappVersion(): string
                    // @ts-ignore
                    public getBaseName(): string
                    // @ts-ignore
                    public getResourceOnlyServlets(): string
                    // @ts-ignore
                    public setResourceOnlyServlets(resourceOnlyServlets: java.lang.String | string): void
                    // @ts-ignore
                    public isResourceOnlyServlet(servletName: java.lang.String | string): boolean
                    // @ts-ignore
                    public getEffectiveMajorVersion(): number /*int*/
                    // @ts-ignore
                    public setEffectiveMajorVersion(effectiveMajorVersion: number /*int*/): void
                    // @ts-ignore
                    public getEffectiveMinorVersion(): number /*int*/
                    // @ts-ignore
                    public setEffectiveMinorVersion(effectiveMinorVersion: number /*int*/): void
                    // @ts-ignore
                    public setLogEffectiveWebXml(logEffectiveWebXml: boolean): void
                    // @ts-ignore
                    public getLogEffectiveWebXml(): boolean
                    // @ts-ignore
                    public getAuthenticator(): org.apache.catalina.Authenticator
                    // @ts-ignore
                    public getJarScanner(): org.apache.tomcat.JarScanner
                    // @ts-ignore
                    public setJarScanner(jarScanner: org.apache.tomcat.JarScanner): void
                    // @ts-ignore
                    public getInstanceManager(): org.apache.tomcat.InstanceManager
                    // @ts-ignore
                    public setInstanceManager(instanceManager: org.apache.tomcat.InstanceManager): void
                    // @ts-ignore
                    public getEncodedPath(): string
                    /**
                     * Set to <code>true</code> to allow requests mapped to servlets that
                     * do not explicitly declare @MultipartConfig or have
                     * &lt;multipart-config&gt; specified in web.xml to parse
                     * multipart/form-data requests.
                     * @param allowCasualMultipartParsing <code>true</code> to allow such
                     *         casual parsing, <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public setAllowCasualMultipartParsing(allowCasualMultipartParsing: boolean): void
                    /**
                     * Returns <code>true</code> if requests mapped to servlets without
                     * "multipart config" to parse multipart/form-data requests anyway.
                     * @return <code>true</code> if requests mapped to servlets without
                     *     "multipart config" to parse multipart/form-data requests,
                     *     <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public getAllowCasualMultipartParsing(): boolean
                    /**
                     * Set to <code>false</code> to disable request data swallowing
                     * after an upload was aborted due to size constraints.
                     * @param swallowAbortedUploads <code>false</code> to disable
                     *         swallowing, <code>true</code> otherwise (default).
                     */
                    // @ts-ignore
                    public setSwallowAbortedUploads(swallowAbortedUploads: boolean): void
                    /**
                     * Returns <code>true</code> if remaining request data will be read
                     * (swallowed) even the request violates a data size constraint.
                     * @return <code>true</code> if data will be swallowed (default),
                     *     <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public getSwallowAbortedUploads(): boolean
                    /**
                     * Add a ServletContainerInitializer instance to this web application.
                     * @param sci       The instance to add
                     * @param classes   The classes in which the initializer expressed an
                     *                   interest
                     */
                    // @ts-ignore
                    public addServletContainerInitializer(sci: javax.servlet.ServletContainerInitializer, classes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): void
                    /**
                     * Return the "follow standard delegation model" flag used to configure
                     * our ClassLoader.
                     * @return <code>true</code> if classloading delegates to the parent classloader first
                     */
                    // @ts-ignore
                    public getDelegate(): boolean
                    /**
                     * Set the "follow standard delegation model" flag used to configure
                     * our ClassLoader.
                     * @param delegate The new flag
                     */
                    // @ts-ignore
                    public setDelegate(delegate: boolean): void
                    /**
                     * @return true if the internal naming support is used.
                     */
                    // @ts-ignore
                    public isUseNaming(): boolean
                    /**
                     * Enables or disables naming.
                     * @param useNaming <code>true</code> to enable the naming environment
                     */
                    // @ts-ignore
                    public setUseNaming(useNaming: boolean): void
                    // @ts-ignore
                    public getApplicationEventListeners(): any[]
                    /**
                     * {@inheritDoc}
                     * Note that this implementation is not thread safe. If two threads call
                     * this method concurrently, the result may be either set of listeners or a
                     * the union of both.
                     */
                    // @ts-ignore
                    public setApplicationEventListeners(listeners: java.lang.Object[] | any[]): void
                    /**
                     * Add a listener to the end of the list of initialized application event
                     * listeners.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addApplicationEventListener(listener: java.lang.Object | any): void
                    // @ts-ignore
                    public getApplicationLifecycleListeners(): any[]
                    /**
                     * Store the set of initialized application lifecycle listener objects,
                     * in the order they were specified in the web application deployment
                     * descriptor, for this application.
                     * @param listeners The set of instantiated listener objects.
                     */
                    // @ts-ignore
                    public setApplicationLifecycleListeners(listeners: java.lang.Object[] | any[]): void
                    /**
                     * Add a listener to the end of the list of initialized application
                     * lifecycle listeners.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addApplicationLifecycleListener(listener: java.lang.Object | any): void
                    /**
                     * @return the antiResourceLocking flag for this Context.
                     */
                    // @ts-ignore
                    public getAntiResourceLocking(): boolean
                    /**
                     * Set the antiResourceLocking feature for this Context.
                     * @param antiResourceLocking The new flag value
                     */
                    // @ts-ignore
                    public setAntiResourceLocking(antiResourceLocking: boolean): void
                    /**
                     * @return the Locale to character set mapper for this Context.
                     */
                    // @ts-ignore
                    public getCharsetMapper(): org.apache.catalina.util.CharsetMapper
                    /**
                     * Set the Locale to character set mapper for this Context.
                     * @param mapper The new mapper
                     */
                    // @ts-ignore
                    public setCharsetMapper(mapper: org.apache.catalina.util.CharsetMapper): void
                    // @ts-ignore
                    public getCharset(locale: java.util.Locale): string
                    // @ts-ignore
                    public getConfigFile(): java.net.URL
                    // @ts-ignore
                    public setConfigFile(configFile: java.net.URL): void
                    // @ts-ignore
                    public getConfigured(): boolean
                    /**
                     * Set the "correctly configured" flag for this Context.  This can be
                     * set to false by startup listeners that detect a fatal configuration
                     * error to avoid the application from being made available.
                     * @param configured The new correctly configured flag
                     */
                    // @ts-ignore
                    public setConfigured(configured: boolean): void
                    // @ts-ignore
                    public getCookies(): boolean
                    /**
                     * Set the "use cookies for session ids" flag.
                     * @param cookies The new flag
                     */
                    // @ts-ignore
                    public setCookies(cookies: boolean): void
                    /**
                     * Gets the name to use for session cookies. Overrides any setting that
                     * may be specified by the application.
                     * @return The value of the default session cookie name or null if not
                     *           specified
                     */
                    // @ts-ignore
                    public getSessionCookieName(): string
                    /**
                     * Sets the name to use for session cookies. Overrides any setting that
                     * may be specified by the application.
                     * @param sessionCookieName   The name to use
                     */
                    // @ts-ignore
                    public setSessionCookieName(sessionCookieName: java.lang.String | string): void
                    /**
                     * Gets the value of the use HttpOnly cookies for session cookies flag.
                     * @return <code>true</code> if the HttpOnly flag should be set on session
                     *          cookies
                     */
                    // @ts-ignore
                    public getUseHttpOnly(): boolean
                    /**
                     * Sets the use HttpOnly cookies for session cookies flag.
                     * @param useHttpOnly   Set to <code>true</code> to use HttpOnly cookies
                     *                           for session cookies
                     */
                    // @ts-ignore
                    public setUseHttpOnly(useHttpOnly: boolean): void
                    /**
                     * Gets the domain to use for session cookies. Overrides any setting that
                     * may be specified by the application.
                     * @return The value of the default session cookie domain or null if not
                     *           specified
                     */
                    // @ts-ignore
                    public getSessionCookieDomain(): string
                    /**
                     * Sets the domain to use for session cookies. Overrides any setting that
                     * may be specified by the application.
                     * @param sessionCookieDomain   The domain to use
                     */
                    // @ts-ignore
                    public setSessionCookieDomain(sessionCookieDomain: java.lang.String | string): void
                    /**
                     * Gets the path to use for session cookies. Overrides any setting that
                     * may be specified by the application.
                     * @return The value of the default session cookie path or null if not
                     *           specified
                     */
                    // @ts-ignore
                    public getSessionCookiePath(): string
                    /**
                     * Sets the path to use for session cookies. Overrides any setting that
                     * may be specified by the application.
                     * @param sessionCookiePath   The path to use
                     */
                    // @ts-ignore
                    public setSessionCookiePath(sessionCookiePath: java.lang.String | string): void
                    // @ts-ignore
                    public getSessionCookiePathUsesTrailingSlash(): boolean
                    // @ts-ignore
                    public setSessionCookiePathUsesTrailingSlash(sessionCookiePathUsesTrailingSlash: boolean): void
                    // @ts-ignore
                    public getCrossContext(): boolean
                    /**
                     * Set the "allow crossing servlet contexts" flag.
                     * @param crossContext The new cross contexts flag
                     */
                    // @ts-ignore
                    public setCrossContext(crossContext: boolean): void
                    // @ts-ignore
                    public getDefaultContextXml(): string
                    /**
                     * Set the location of the default context xml that will be used.
                     * If not absolute, it'll be made relative to the engine's base dir
                     * ( which defaults to catalina.base system property ).
                     * @param defaultContextXml The default web xml
                     */
                    // @ts-ignore
                    public setDefaultContextXml(defaultContextXml: java.lang.String | string): void
                    // @ts-ignore
                    public getDefaultWebXml(): string
                    /**
                     * Set the location of the default web xml that will be used.
                     * If not absolute, it'll be made relative to the engine's base dir
                     * ( which defaults to catalina.base system property ).
                     * @param defaultWebXml The default web xml
                     */
                    // @ts-ignore
                    public setDefaultWebXml(defaultWebXml: java.lang.String | string): void
                    /**
                     * Gets the time (in milliseconds) it took to start this context.
                     * @return Time (in milliseconds) it took to start this context.
                     */
                    // @ts-ignore
                    public getStartupTime(): number /*long*/
                    // @ts-ignore
                    public setStartupTime(startupTime: number /*long*/): void
                    // @ts-ignore
                    public getTldScanTime(): number /*long*/
                    // @ts-ignore
                    public setTldScanTime(tldScanTime: number /*long*/): void
                    // @ts-ignore
                    public getDenyUncoveredHttpMethods(): boolean
                    // @ts-ignore
                    public setDenyUncoveredHttpMethods(denyUncoveredHttpMethods: boolean): void
                    /**
                     * @return the display name of this web application.
                     */
                    // @ts-ignore
                    public getDisplayName(): string
                    /**
                     * @return the alternate Deployment Descriptor name.
                     */
                    // @ts-ignore
                    public getAltDDName(): string
                    /**
                     * Set an alternate Deployment Descriptor name.
                     * @param altDDName The new name
                     */
                    // @ts-ignore
                    public setAltDDName(altDDName: java.lang.String | string): void
                    /**
                     * Set the display name of this web application.
                     * @param displayName The new display name
                     */
                    // @ts-ignore
                    public setDisplayName(displayName: java.lang.String | string): void
                    /**
                     * @return the distributable flag for this web application.
                     */
                    // @ts-ignore
                    public getDistributable(): boolean
                    /**
                     * Set the distributable flag for this web application.
                     * @param distributable The new distributable flag
                     */
                    // @ts-ignore
                    public setDistributable(distributable: boolean): void
                    // @ts-ignore
                    public getDocBase(): string
                    // @ts-ignore
                    public setDocBase(docBase: java.lang.String | string): void
                    // @ts-ignore
                    public getJ2EEApplication(): string
                    // @ts-ignore
                    public setJ2EEApplication(j2EEApplication: java.lang.String | string): void
                    // @ts-ignore
                    public getJ2EEServer(): string
                    // @ts-ignore
                    public setJ2EEServer(j2EEServer: java.lang.String | string): void
                    // @ts-ignore
                    public getLoader(): org.apache.catalina.Loader
                    // @ts-ignore
                    public setLoader(loader: org.apache.catalina.Loader): void
                    // @ts-ignore
                    public getManager(): org.apache.catalina.Manager
                    // @ts-ignore
                    public setManager(manager: org.apache.catalina.Manager): void
                    /**
                     * @return the boolean on the annotations parsing.
                     */
                    // @ts-ignore
                    public getIgnoreAnnotations(): boolean
                    /**
                     * Set the boolean on the annotations parsing for this web
                     * application.
                     * @param ignoreAnnotations The boolean on the annotations parsing
                     */
                    // @ts-ignore
                    public setIgnoreAnnotations(ignoreAnnotations: boolean): void
                    /**
                     * @return the login configuration descriptor for this web application.
                     */
                    // @ts-ignore
                    public getLoginConfig(): org.apache.tomcat.util.descriptor.web.LoginConfig
                    /**
                     * Set the login configuration descriptor for this web application.
                     * @param config The new login configuration
                     */
                    // @ts-ignore
                    public setLoginConfig(config: org.apache.tomcat.util.descriptor.web.LoginConfig): void
                    /**
                     * @return the naming resources associated with this web application.
                     */
                    // @ts-ignore
                    public getNamingResources(): org.apache.catalina.deploy.NamingResourcesImpl
                    /**
                     * Set the naming resources for this web application.
                     * @param namingResources The new naming resources
                     */
                    // @ts-ignore
                    public setNamingResources(namingResources: org.apache.catalina.deploy.NamingResourcesImpl): void
                    /**
                     * @return the context path for this Context.
                     */
                    // @ts-ignore
                    public getPath(): string
                    /**
                     * Set the context path for this Context.
                     * @param path The new context path
                     */
                    // @ts-ignore
                    public setPath(path: java.lang.String | string): void
                    /**
                     * @return the public identifier of the deployment descriptor DTD that is
                     *  currently being parsed.
                     */
                    // @ts-ignore
                    public getPublicId(): string
                    /**
                     * Set the public identifier of the deployment descriptor DTD that is
                     * currently being parsed.
                     * @param publicId The public identifier
                     */
                    // @ts-ignore
                    public setPublicId(publicId: java.lang.String | string): void
                    /**
                     * @return the reloadable flag for this web application.
                     */
                    // @ts-ignore
                    public getReloadable(): boolean
                    /**
                     * @return the default context override flag for this web application.
                     */
                    // @ts-ignore
                    public getOverride(): boolean
                    /**
                     * @return the original document root for this Context.  This can be an absolute
                     *  pathname, a relative pathname, or a URL.
                     *  Is only set as deployment has change docRoot!
                     */
                    // @ts-ignore
                    public getOriginalDocBase(): string
                    /**
                     * Set the original document root for this Context.  This can be an absolute
                     * pathname, a relative pathname, or a URL.
                     * @param docBase The original document root
                     */
                    // @ts-ignore
                    public setOriginalDocBase(docBase: java.lang.String | string): void
                    /**
                     * @return the parent class loader (if any) for this web application.
                     *  This call is meaningful only <strong>after</strong> a Loader has
                     *  been configured.
                     */
                    // @ts-ignore
                    public getParentClassLoader(): java.lang.ClassLoader
                    /**
                     * @return the privileged flag for this web application.
                     */
                    // @ts-ignore
                    public getPrivileged(): boolean
                    /**
                     * Set the privileged flag for this web application.
                     * @param privileged The new privileged flag
                     */
                    // @ts-ignore
                    public setPrivileged(privileged: boolean): void
                    /**
                     * Set the reloadable flag for this web application.
                     * @param reloadable The new reloadable flag
                     */
                    // @ts-ignore
                    public setReloadable(reloadable: boolean): void
                    /**
                     * Set the default context override flag for this web application.
                     * @param override The new override flag
                     */
                    // @ts-ignore
                    public setOverride(override: boolean): void
                    /**
                     * Set the "replace welcome files" property.
                     * @param replaceWelcomeFiles The new property value
                     */
                    // @ts-ignore
                    public setReplaceWelcomeFiles(replaceWelcomeFiles: boolean): void
                    /**
                     * @return the servlet context for which this Context is a facade.
                     */
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    /**
                     * @return the default session timeout (in minutes) for this
                     *  web application.
                     */
                    // @ts-ignore
                    public getSessionTimeout(): number /*int*/
                    /**
                     * Set the default session timeout (in minutes) for this
                     * web application.
                     * @param timeout The new default session timeout
                     */
                    // @ts-ignore
                    public setSessionTimeout(timeout: number /*int*/): void
                    /**
                     * @return the value of the swallowOutput flag.
                     */
                    // @ts-ignore
                    public getSwallowOutput(): boolean
                    /**
                     * Set the value of the swallowOutput flag. If set to true, the system.out
                     * and system.err will be redirected to the logger during a servlet
                     * execution.
                     * @param swallowOutput The new value
                     */
                    // @ts-ignore
                    public setSwallowOutput(swallowOutput: boolean): void
                    /**
                     * @return the value of the unloadDelay flag.
                     */
                    // @ts-ignore
                    public getUnloadDelay(): number /*long*/
                    /**
                     * Set the value of the unloadDelay flag, which represents the amount
                     * of ms that the container will wait when unloading servlets.
                     * Setting this to a small value may cause more requests to fail
                     * to complete when stopping a web application.
                     * @param unloadDelay The new value
                     */
                    // @ts-ignore
                    public setUnloadDelay(unloadDelay: number /*long*/): void
                    /**
                     * @return unpack WAR flag.
                     */
                    // @ts-ignore
                    public getUnpackWAR(): boolean
                    /**
                     * Unpack WAR flag mutator.
                     * @param unpackWAR <code>true</code> to unpack WARs on deployment
                     */
                    // @ts-ignore
                    public setUnpackWAR(unpackWAR: boolean): void
                    /**
                     * Flag which indicates if bundled context.xml files should be copied to the
                     * config folder. The doesn't occur by default.
                     * @return <code>true</code> if the <code>META-INF/context.xml</code> file included
                     *      in a WAR will be copied to the host configuration base folder on deployment
                     */
                    // @ts-ignore
                    public getCopyXML(): boolean
                    /**
                     * Allows copying a bundled context.xml file to the host configuration base
                     * folder on deployment.
                     * @param copyXML the new flag value
                     */
                    // @ts-ignore
                    public setCopyXML(copyXML: boolean): void
                    /**
                     * @return the Java class name of the Wrapper implementation used
                     *  for servlets registered in this Context.
                     */
                    // @ts-ignore
                    public getWrapperClass(): string
                    /**
                     * Set the Java class name of the Wrapper implementation used
                     * for servlets registered in this Context.
                     * @param wrapperClassName The new wrapper class name
                     * @throws IllegalArgumentException if the specified wrapper class
                     *  cannot be found or is not a subclass of StandardWrapper
                     */
                    // @ts-ignore
                    public setWrapperClass(wrapperClassName: java.lang.String | string): void
                    // @ts-ignore
                    public getResources(): org.apache.catalina.WebResourceRoot
                    // @ts-ignore
                    public setResources(resources: org.apache.catalina.WebResourceRoot): void
                    // @ts-ignore
                    public getJspConfigDescriptor(): javax.servlet.descriptor.JspConfigDescriptor
                    // @ts-ignore
                    public setJspConfigDescriptor(descriptor: javax.servlet.descriptor.JspConfigDescriptor): void
                    // @ts-ignore
                    public getThreadBindingListener(): org.apache.catalina.ThreadBindingListener
                    // @ts-ignore
                    public setThreadBindingListener(threadBindingListener: org.apache.catalina.ThreadBindingListener): void
                    /**
                     * @return whether or not an attempt to modify the JNDI context will trigger
                     *  an exception or if the request will be ignored.
                     */
                    // @ts-ignore
                    public getJndiExceptionOnFailedWrite(): boolean
                    /**
                     * Controls whether or not an attempt to modify the JNDI context will
                     * trigger an exception or if the request will be ignored.
                     * @param jndiExceptionOnFailedWrite <code>false</code> to avoid an exception
                     */
                    // @ts-ignore
                    public setJndiExceptionOnFailedWrite(jndiExceptionOnFailedWrite: boolean): void
                    /**
                     * @return the Locale to character set mapper class for this Context.
                     */
                    // @ts-ignore
                    public getCharsetMapperClass(): string
                    /**
                     * Set the Locale to character set mapper class for this Context.
                     * @param mapper The new mapper class
                     */
                    // @ts-ignore
                    public setCharsetMapperClass(mapper: java.lang.String | string): void
                    /**
                     * Get the absolute path to the work dir.
                     * To avoid duplication.
                     * @return The work path
                     */
                    // @ts-ignore
                    public getWorkPath(): string
                    /**
                     * @return the work directory for this Context.
                     */
                    // @ts-ignore
                    public getWorkDir(): string
                    /**
                     * Set the work directory for this Context.
                     * @param workDir The new work directory
                     */
                    // @ts-ignore
                    public setWorkDir(workDir: java.lang.String | string): void
                    // @ts-ignore
                    public getClearReferencesRmiTargets(): boolean
                    // @ts-ignore
                    public setClearReferencesRmiTargets(clearReferencesRmiTargets: boolean): void
                    /**
                     * @return the clearReferencesStopThreads flag for this Context.
                     */
                    // @ts-ignore
                    public getClearReferencesStopThreads(): boolean
                    /**
                     * Set the clearReferencesStopThreads feature for this Context.
                     * @param clearReferencesStopThreads The new flag value
                     */
                    // @ts-ignore
                    public setClearReferencesStopThreads(clearReferencesStopThreads: boolean): void
                    /**
                     * @return the clearReferencesStopTimerThreads flag for this Context.
                     */
                    // @ts-ignore
                    public getClearReferencesStopTimerThreads(): boolean
                    /**
                     * Set the clearReferencesStopTimerThreads feature for this Context.
                     * @param clearReferencesStopTimerThreads The new flag value
                     */
                    // @ts-ignore
                    public setClearReferencesStopTimerThreads(clearReferencesStopTimerThreads: boolean): void
                    /**
                     * @return the clearReferencesHttpClientKeepAliveThread flag for this
                     *  Context.
                     */
                    // @ts-ignore
                    public getClearReferencesHttpClientKeepAliveThread(): boolean
                    /**
                     * Set the clearReferencesHttpClientKeepAliveThread feature for this
                     * Context.
                     * @param clearReferencesHttpClientKeepAliveThread The new flag value
                     */
                    // @ts-ignore
                    public setClearReferencesHttpClientKeepAliveThread(clearReferencesHttpClientKeepAliveThread: boolean): void
                    // @ts-ignore
                    public getRenewThreadsWhenStoppingContext(): boolean
                    // @ts-ignore
                    public setRenewThreadsWhenStoppingContext(renewThreadsWhenStoppingContext: boolean): void
                    // @ts-ignore
                    public getClearReferencesObjectStreamClassCaches(): boolean
                    // @ts-ignore
                    public setClearReferencesObjectStreamClassCaches(clearReferencesObjectStreamClassCaches: boolean): void
                    // @ts-ignore
                    public getClearReferencesThreadLocals(): boolean
                    // @ts-ignore
                    public setClearReferencesThreadLocals(clearReferencesThreadLocals: boolean): void
                    // @ts-ignore
                    public getSkipMemoryLeakChecksOnJvmShutdown(): boolean
                    // @ts-ignore
                    public setSkipMemoryLeakChecksOnJvmShutdown(skipMemoryLeakChecksOnJvmShutdown: boolean): void
                    // @ts-ignore
                    public getFailCtxIfServletStartFails(): java.lang.Boolean
                    // @ts-ignore
                    public setFailCtxIfServletStartFails(failCtxIfServletStartFails: java.lang.Boolean): void
                    // @ts-ignore
                    getComputedFailCtxIfServletStartFails(): boolean
                    /**
                     * Add a new Listener class name to the set of Listeners
                     * configured for this application.
                     * @param listener Java class name of a listener class
                     */
                    // @ts-ignore
                    public addApplicationListener(listener: java.lang.String | string): void
                    /**
                     * Add a new application parameter for this application.
                     * @param parameter The new application parameter
                     */
                    // @ts-ignore
                    public addApplicationParameter(parameter: org.apache.tomcat.util.descriptor.web.ApplicationParameter): void
                    /**
                     * Add a child Container, only if the proposed child is an implementation
                     * of Wrapper.
                     * @param child Child container to be added
                     * @exception IllegalArgumentException if the proposed container is
                     *   not an implementation of Wrapper
                     */
                    // @ts-ignore
                    public addChild(child: org.apache.catalina.Container): void
                    /**
                     * Add a security constraint to the set for this web application.
                     * @param constraint the new security constraint
                     */
                    // @ts-ignore
                    public addConstraint(constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                    /**
                     * Add an error page for the specified error or Java exception.
                     * @param errorPage The error page definition to be added
                     */
                    // @ts-ignore
                    public addErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                    /**
                     * Add a filter definition to this Context.
                     * @param filterDef The filter definition to be added
                     */
                    // @ts-ignore
                    public addFilterDef(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef): void
                    /**
                     * Add a filter mapping to this Context at the end of the current set
                     * of filter mappings.
                     * @param filterMap The filter mapping to be added
                     * @exception IllegalArgumentException if the specified filter name
                     *   does not match an existing filter definition, or the filter mapping
                     *   is malformed
                     */
                    // @ts-ignore
                    public addFilterMap(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                    /**
                     * Add a filter mapping to this Context before the mappings defined in the
                     * deployment descriptor but after any other mappings added via this method.
                     * @param filterMap The filter mapping to be added
                     * @exception IllegalArgumentException if the specified filter name
                     *   does not match an existing filter definition, or the filter mapping
                     *   is malformed
                     */
                    // @ts-ignore
                    public addFilterMapBefore(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                    /**
                     * Add a Locale Encoding Mapping (see Sec 5.4 of Servlet spec 2.4)
                     * @param locale locale to map an encoding for
                     * @param encoding encoding to be used for a give locale
                     */
                    // @ts-ignore
                    public addLocaleEncodingMappingParameter(locale: java.lang.String | string, encoding: java.lang.String | string): void
                    /**
                     * Add a message destination for this web application.
                     * @param md New message destination
                     */
                    // @ts-ignore
                    public addMessageDestination(md: org.apache.tomcat.util.descriptor.web.MessageDestination): void
                    /**
                     * Add a message destination reference for this web application.
                     * @param mdr New message destination reference
                     * @deprecated This will be removed in Tomcat 10.
                     *              Use {#link #getNamingResources()} instead
                     */
                    // @ts-ignore
                    public addMessageDestinationRef(mdr: org.apache.tomcat.util.descriptor.web.MessageDestinationRef): void
                    /**
                     * Add a new MIME mapping, replacing any existing mapping for
                     * the specified extension.
                     * @param extension Filename extension being mapped
                     * @param mimeType Corresponding MIME type
                     */
                    // @ts-ignore
                    public addMimeMapping(extension: java.lang.String | string, mimeType: java.lang.String | string): void
                    /**
                     * Add a new context initialization parameter.
                     * @param name Name of the new parameter
                     * @param value Value of the new  parameter
                     * @exception IllegalArgumentException if the name or value is missing,
                     *   or if this context initialization parameter has already been
                     *   registered
                     */
                    // @ts-ignore
                    public addParameter(name: java.lang.String | string, value: java.lang.String | string): void
                    /**
                     * Add a security role reference for this web application.
                     * @param role Security role used in the application
                     * @param link Actual security role to check for
                     */
                    // @ts-ignore
                    public addRoleMapping(role: java.lang.String | string, link: java.lang.String | string): void
                    /**
                     * Add a new security role for this web application.
                     * @param role New security role
                     */
                    // @ts-ignore
                    public addSecurityRole(role: java.lang.String | string): void
                    /**
                     * Add a new servlet mapping, replacing any existing mapping for
                     * the specified pattern.
                     * @param pattern URL pattern to be mapped
                     * @param name Name of the corresponding servlet to execute
                     * @param jspWildCard true if name identifies the JspServlet
                     *  and pattern contains a wildcard; false otherwise
                     * @exception IllegalArgumentException if the specified servlet name
                     *   is not known to this Context
                     */
                    // @ts-ignore
                    public addServletMappingDecoded(pattern: java.lang.String | string, name: java.lang.String | string, jspWildCard: boolean): void
                    /**
                     * Add a new watched resource to the set recognized by this Context.
                     * @param name New watched resource file name
                     */
                    // @ts-ignore
                    public addWatchedResource(name: java.lang.String | string): void
                    /**
                     * Add a new welcome file to the set recognized by this Context.
                     * @param name New welcome file name
                     */
                    // @ts-ignore
                    public addWelcomeFile(name: java.lang.String | string): void
                    /**
                     * Add the classname of a LifecycleListener to be added to each
                     * Wrapper appended to this Context.
                     * @param listener Java class name of a LifecycleListener class
                     */
                    // @ts-ignore
                    public addWrapperLifecycle(listener: java.lang.String | string): void
                    /**
                     * Add the classname of a ContainerListener to be added to each
                     * Wrapper appended to this Context.
                     * @param listener Java class name of a ContainerListener class
                     */
                    // @ts-ignore
                    public addWrapperListener(listener: java.lang.String | string): void
                    /**
                     * Factory method to create and return a new Wrapper instance, of
                     * the Java implementation class appropriate for this Context
                     * implementation.  The constructor of the instantiated Wrapper
                     * will have been called, but no properties will have been set.
                     */
                    // @ts-ignore
                    public createWrapper(): org.apache.catalina.Wrapper
                    /**
                     * Return the set of application listener class names configured
                     * for this application.
                     */
                    // @ts-ignore
                    public findApplicationListeners(): string[]
                    /**
                     * Return the set of application parameters for this application.
                     */
                    // @ts-ignore
                    public findApplicationParameters(): org.apache.tomcat.util.descriptor.web.ApplicationParameter[]
                    /**
                     * Return the security constraints for this web application.
                     * If there are none, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findConstraints(): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                    /**
                     * Return the error page entry for the specified HTTP error code,
                     * if any; otherwise return <code>null</code>.
                     * @param errorCode Error code to look up
                     */
                    // @ts-ignore
                    public findErrorPage(errorCode: number /*int*/): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public findErrorPage(exceptionType: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public findErrorPage(exceptionType: java.lang.Throwable | Error): org.apache.tomcat.util.descriptor.web.ErrorPage
                    /**
                     * Return the set of defined error pages for all specified error codes
                     * and exception types.
                     */
                    // @ts-ignore
                    public findErrorPages(): org.apache.tomcat.util.descriptor.web.ErrorPage[]
                    /**
                     * Return the filter definition for the specified filter name, if any;
                     * otherwise return <code>null</code>.
                     * @param filterName Filter name to look up
                     */
                    // @ts-ignore
                    public findFilterDef(filterName: java.lang.String | string): org.apache.tomcat.util.descriptor.web.FilterDef
                    /**
                     * @return the set of defined filters for this Context.
                     */
                    // @ts-ignore
                    public findFilterDefs(): org.apache.tomcat.util.descriptor.web.FilterDef[]
                    /**
                     * @return the set of filter mappings for this Context.
                     */
                    // @ts-ignore
                    public findFilterMaps(): org.apache.tomcat.util.descriptor.web.FilterMap[]
                    /**
                     * @return the message destination with the specified name, if any;
                     *  otherwise, return <code>null</code>.
                     * @param name Name of the desired message destination
                     */
                    // @ts-ignore
                    public findMessageDestination(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.MessageDestination
                    /**
                     * @return the set of defined message destinations for this web
                     *  application.  If none have been defined, a zero-length array
                     *  is returned.
                     */
                    // @ts-ignore
                    public findMessageDestinations(): org.apache.tomcat.util.descriptor.web.MessageDestination[]
                    /**
                     * @param name Name of the desired message destination ref
                     * @return the message destination ref with the specified name, if any;
                     *  otherwise, return <code>null</code>.
                     * @deprecated This will be removed in Tomcat 10.
                     *              Use {#link #getNamingResources()} instead
                     */
                    // @ts-ignore
                    public findMessageDestinationRef(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.MessageDestinationRef
                    /**
                     * @return the set of defined message destination refs for this web
                     *  application.  If none have been defined, a zero-length array
                     *  is returned.
                     * @deprecated This will be removed in Tomcat 10.
                     *              Use {#link #getNamingResources()} instead
                     */
                    // @ts-ignore
                    public findMessageDestinationRefs(): org.apache.tomcat.util.descriptor.web.MessageDestinationRef[]
                    /**
                     * @return the MIME type to which the specified extension is mapped,
                     *  if any; otherwise return <code>null</code>.
                     * @param extension Extension to map to a MIME type
                     */
                    // @ts-ignore
                    public findMimeMapping(extension: java.lang.String | string): string
                    /**
                     * @return the extensions for which MIME mappings are defined.  If there
                     *  are none, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findMimeMappings(): string[]
                    /**
                     * @return the value for the specified context initialization
                     *  parameter name, if any; otherwise return <code>null</code>.
                     * @param name Name of the parameter to return
                     */
                    // @ts-ignore
                    public findParameter(name: java.lang.String | string): string
                    /**
                     * @return the names of all defined context initialization parameters
                     *  for this Context.  If no parameters are defined, a zero-length
                     *  array is returned.
                     */
                    // @ts-ignore
                    public findParameters(): string[]
                    /**
                     * For the given security role (as used by an application), return the
                     * corresponding role name (as defined by the underlying Realm) if there
                     * is one.  Otherwise, return the specified role unchanged.
                     * @param role Security role to map
                     * @return the role name
                     */
                    // @ts-ignore
                    public findRoleMapping(role: java.lang.String | string): string
                    /**
                     * @return <code>true</code> if the specified security role is defined
                     *  for this application; otherwise return <code>false</code>.
                     * @param role Security role to verify
                     */
                    // @ts-ignore
                    public findSecurityRole(role: java.lang.String | string): boolean
                    /**
                     * @return the security roles defined for this application.  If none
                     *  have been defined, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findSecurityRoles(): string[]
                    /**
                     * @return the servlet name mapped by the specified pattern (if any);
                     *  otherwise return <code>null</code>.
                     * @param pattern Pattern for which a mapping is requested
                     */
                    // @ts-ignore
                    public findServletMapping(pattern: java.lang.String | string): string
                    /**
                     * @return the patterns of all defined servlet mappings for this
                     *  Context.  If no mappings are defined, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findServletMappings(): string[]
                    // @ts-ignore
                    public findStatusPage(status: number /*int*/): string
                    // @ts-ignore
                    public findStatusPages(): number /*int*/[]
                    /**
                     * @return <code>true</code> if the specified welcome file is defined
                     *  for this Context; otherwise return <code>false</code>.
                     * @param name Welcome file to verify
                     */
                    // @ts-ignore
                    public findWelcomeFile(name: java.lang.String | string): boolean
                    /**
                     * @return the set of watched resources for this Context. If none are
                     *  defined, a zero length array will be returned.
                     */
                    // @ts-ignore
                    public findWatchedResources(): string[]
                    /**
                     * @return the set of welcome files defined for this Context.  If none are
                     *  defined, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findWelcomeFiles(): string[]
                    /**
                     * @return the set of LifecycleListener classes that will be added to
                     *  newly created Wrappers automatically.
                     */
                    // @ts-ignore
                    public findWrapperLifecycles(): string[]
                    /**
                     * @return the set of ContainerListener classes that will be added to
                     *  newly created Wrappers automatically.
                     */
                    // @ts-ignore
                    public findWrapperListeners(): string[]
                    /**
                     * Reload this web application, if reloading is supported.
                     * <p>
                     * <b>IMPLEMENTATION NOTE</b>:  This method is designed to deal with
                     * reloads required by changes to classes in the underlying repositories
                     * of our class loader and changes to the web.xml file. It does not handle
                     * changes to any context.xml file. If the context.xml has changed, you
                     * should stop this Context and create (and start) a new Context instance
                     * instead. Note that there is additional code in
                     * <code>CoyoteAdapter#postParseRequest()</code> to handle mapping requests
                     * to paused Contexts.
                     * @exception IllegalStateException if the <code>reloadable</code>
                     *   property is set to <code>false</code>.
                     */
                    // @ts-ignore
                    public reload(): void
                    /**
                     * Remove the specified application listener class from the set of
                     * listeners for this application.
                     * @param listener Java class name of the listener to be removed
                     */
                    // @ts-ignore
                    public removeApplicationListener(listener: java.lang.String | string): void
                    /**
                     * Remove the application parameter with the specified name from
                     * the set for this application.
                     * @param name Name of the application parameter to remove
                     */
                    // @ts-ignore
                    public removeApplicationParameter(name: java.lang.String | string): void
                    /**
                     * Add a child Container, only if the proposed child is an implementation
                     * of Wrapper.
                     * @param child Child container to be added
                     * @exception IllegalArgumentException if the proposed container is
                     *   not an implementation of Wrapper
                     */
                    // @ts-ignore
                    public removeChild(child: org.apache.catalina.Container): void
                    /**
                     * Remove the specified security constraint from this web application.
                     * @param constraint Constraint to be removed
                     */
                    // @ts-ignore
                    public removeConstraint(constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                    /**
                     * Remove the error page for the specified error code or
                     * Java language exception, if it exists; otherwise, no action is taken.
                     * @param errorPage The error page definition to be removed
                     */
                    // @ts-ignore
                    public removeErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                    /**
                     * Remove the specified filter definition from this Context, if it exists;
                     * otherwise, no action is taken.
                     * @param filterDef Filter definition to be removed
                     */
                    // @ts-ignore
                    public removeFilterDef(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef): void
                    /**
                     * Remove a filter mapping from this Context.
                     * @param filterMap The filter mapping to be removed
                     */
                    // @ts-ignore
                    public removeFilterMap(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                    /**
                     * Remove any message destination with the specified name.
                     * @param name Name of the message destination to remove
                     */
                    // @ts-ignore
                    public removeMessageDestination(name: java.lang.String | string): void
                    /**
                     * Remove any message destination ref with the specified name.
                     * @param name Name of the message destination ref to remove
                     * @deprecated This will be removed in Tomcat 10.
                     *              Use {#link #getNamingResources()} instead
                     */
                    // @ts-ignore
                    public removeMessageDestinationRef(name: java.lang.String | string): void
                    /**
                     * Remove the MIME mapping for the specified extension, if it exists;
                     * otherwise, no action is taken.
                     * @param extension Extension to remove the mapping for
                     */
                    // @ts-ignore
                    public removeMimeMapping(extension: java.lang.String | string): void
                    /**
                     * Remove the context initialization parameter with the specified
                     * name, if it exists; otherwise, no action is taken.
                     * @param name Name of the parameter to remove
                     */
                    // @ts-ignore
                    public removeParameter(name: java.lang.String | string): void
                    /**
                     * Remove any security role reference for the specified name
                     * @param role Security role (as used in the application) to remove
                     */
                    // @ts-ignore
                    public removeRoleMapping(role: java.lang.String | string): void
                    /**
                     * Remove any security role with the specified name.
                     * @param role Security role to remove
                     */
                    // @ts-ignore
                    public removeSecurityRole(role: java.lang.String | string): void
                    /**
                     * Remove any servlet mapping for the specified pattern, if it exists;
                     * otherwise, no action is taken.
                     * @param pattern URL pattern of the mapping to remove
                     */
                    // @ts-ignore
                    public removeServletMapping(pattern: java.lang.String | string): void
                    /**
                     * Remove the specified watched resource name from the list associated
                     * with this Context.
                     * @param name Name of the watched resource to be removed
                     */
                    // @ts-ignore
                    public removeWatchedResource(name: java.lang.String | string): void
                    /**
                     * Remove the specified welcome file name from the list recognized
                     * by this Context.
                     * @param name Name of the welcome file to be removed
                     */
                    // @ts-ignore
                    public removeWelcomeFile(name: java.lang.String | string): void
                    /**
                     * Remove a class name from the set of LifecycleListener classes that
                     * will be added to newly created Wrappers.
                     * @param listener Class name of a LifecycleListener class to be removed
                     */
                    // @ts-ignore
                    public removeWrapperLifecycle(listener: java.lang.String | string): void
                    /**
                     * Remove a class name from the set of ContainerListener classes that
                     * will be added to newly created Wrappers.
                     * @param listener Class name of a ContainerListener class to be removed
                     */
                    // @ts-ignore
                    public removeWrapperListener(listener: java.lang.String | string): void
                    /**
                     * Gets the cumulative processing times of all servlets in this
                     * StandardContext.
                     * @return Cumulative processing times of all servlets in this
                     *  StandardContext
                     */
                    // @ts-ignore
                    public getProcessingTime(): number /*long*/
                    /**
                     * Gets the maximum processing time of all servlets in this
                     * StandardContext.
                     * @return Maximum processing time of all servlets in this
                     *  StandardContext
                     */
                    // @ts-ignore
                    public getMaxTime(): number /*long*/
                    /**
                     * Gets the minimum processing time of all servlets in this
                     * StandardContext.
                     * @return Minimum processing time of all servlets in this
                     *  StandardContext
                     */
                    // @ts-ignore
                    public getMinTime(): number /*long*/
                    /**
                     * Gets the cumulative request count of all servlets in this
                     * StandardContext.
                     * @return Cumulative request count of all servlets in this
                     *  StandardContext
                     */
                    // @ts-ignore
                    public getRequestCount(): number /*int*/
                    /**
                     * Gets the cumulative error count of all servlets in this
                     * StandardContext.
                     * @return Cumulative error count of all servlets in this
                     *  StandardContext
                     */
                    // @ts-ignore
                    public getErrorCount(): number /*int*/
                    /**
                     * Return the real path for a given virtual path, if possible; otherwise
                     * return <code>null</code>.
                     * @param path The path to the desired resource
                     */
                    // @ts-ignore
                    public getRealPath(path: java.lang.String | string): string
                    /**
                     * Hook to track which Servlets were created via
                     * {@link ServletContext#createServlet(Class)}.
                     * @param servlet the created Servlet
                     */
                    // @ts-ignore
                    public dynamicServletCreated(servlet: javax.servlet.Servlet): void
                    // @ts-ignore
                    public wasCreatedDynamicServlet(servlet: javax.servlet.Servlet): boolean
                    /**
                     * Configure and initialize the set of filters for this Context.
                     * @return <code>true</code> if all filter initialization completed
                     *  successfully, or <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public filterStart(): boolean
                    /**
                     * Finalize and release the set of filters for this Context.
                     * @return <code>true</code> if all filter finalization completed
                     *  successfully, or <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public filterStop(): boolean
                    /**
                     * Find and return the initialized <code>FilterConfig</code> for the
                     * specified filter name, if any; otherwise return <code>null</code>.
                     * @param name Name of the desired filter
                     * @return the filter config object
                     */
                    // @ts-ignore
                    public findFilterConfig(name: java.lang.String | string): javax.servlet.FilterConfig
                    /**
                     * Configure the set of instantiated application event listeners
                     * for this Context.
                     * @return <code>true</code> if all listeners wre
                     *  initialized successfully, or <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public listenerStart(): boolean
                    /**
                     * Send an application stop event to all interested listeners.
                     * @return <code>true</code> if all events were sent successfully,
                     *  or <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public listenerStop(): boolean
                    /**
                     * Allocate resources, including proxy.
                     * @throws LifecycleException if a start error occurs
                     */
                    // @ts-ignore
                    public resourcesStart(): void
                    /**
                     * Deallocate resources and destroy proxy.
                     * @return <code>true</code> if no error occurred
                     */
                    // @ts-ignore
                    public resourcesStop(): boolean
                    /**
                     * Load and initialize all servlets marked "load on startup" in the
                     * web application deployment descriptor.
                     * @param children Array of wrappers for all currently defined
                     *   servlets (including those not declared load on startup)
                     * @return <code>true</code> if load on startup was considered successful
                     */
                    // @ts-ignore
                    public loadOnStartup(children: org.apache.catalina.Container[]): boolean
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    /**
                     * Destroy needs to clean up the context completely.
                     * The problem is that undoing all the config in start() and restoring
                     * a 'fresh' state is impossible. After stop()/destroy()/init()/start()
                     * we should have the same state as if a fresh start was done - i.e
                     * read modified web.xml, etc. This can only be done by completely
                     * removing the context object and remapping a new one, or by cleaning
                     * up everything.
                     * XXX Should this be done in stop() ?
                     */
                    // @ts-ignore
                    destroyInternal(): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Adjust the URL pattern to begin with a leading slash, if appropriate
                     * (i.e. we are running a servlet 2.2 application).  Otherwise, return
                     * the specified URL pattern unchanged.
                     * @param urlPattern The URL pattern to be adjusted (if needed)
                     *   and returned
                     * @return the URL pattern with a leading slash if needed
                     */
                    // @ts-ignore
                    adjustURLPattern(urlPattern: java.lang.String | string): string
                    /**
                     * Are we processing a version 2.2 deployment descriptor?
                     * @return <code>true</code> if running a legacy Servlet 2.2 application
                     */
                    // @ts-ignore
                    public isServlet22(): boolean
                    // @ts-ignore
                    public addServletSecurity(registration: javax.servlet.ServletRegistration.Dynamic, servletSecurityElement: javax.servlet.ServletSecurityElement): Array<java.lang.String | string>
                    /**
                     * Bind current thread, both for CL purposes and for JNDI ENC support
                     * during : startup, shutdown and reloading of the context.
                     * @return the previous context class loader
                     */
                    // @ts-ignore
                    bindThread(): java.lang.ClassLoader
                    /**
                     * Unbind thread and restore the specified context classloader.
                     * @param oldContextClassLoader the previous classloader
                     */
                    // @ts-ignore
                    unbindThread(oldContextClassLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public bind(usePrivilegedAction: boolean, originalClassLoader: java.lang.ClassLoader): java.lang.ClassLoader
                    // @ts-ignore
                    public unbind(usePrivilegedAction: boolean, originalClassLoader: java.lang.ClassLoader): void
                    /**
                     * Naming context listener accessor.
                     * @return the naming context listener associated with the webapp
                     */
                    // @ts-ignore
                    public getNamingContextListener(): org.apache.catalina.core.NamingContextListener
                    /**
                     * Naming context listener setter.
                     * @param namingContextListener the new naming context listener
                     */
                    // @ts-ignore
                    public setNamingContextListener(namingContextListener: org.apache.catalina.core.NamingContextListener): void
                    /**
                     * @return the request processing paused flag for this Context.
                     */
                    // @ts-ignore
                    public getPaused(): boolean
                    // @ts-ignore
                    public fireRequestInitEvent(request: javax.servlet.ServletRequest): boolean
                    // @ts-ignore
                    public fireRequestDestroyEvent(request: javax.servlet.ServletRequest): boolean
                    // @ts-ignore
                    public addPostConstructMethod(clazz: java.lang.String | string, method: java.lang.String | string): void
                    // @ts-ignore
                    public removePostConstructMethod(clazz: java.lang.String | string): void
                    // @ts-ignore
                    public addPreDestroyMethod(clazz: java.lang.String | string, method: java.lang.String | string): void
                    // @ts-ignore
                    public removePreDestroyMethod(clazz: java.lang.String | string): void
                    // @ts-ignore
                    public findPostConstructMethod(clazz: java.lang.String | string): string
                    // @ts-ignore
                    public findPreDestroyMethod(clazz: java.lang.String | string): string
                    // @ts-ignore
                    public findPostConstructMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public findPreDestroyMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    public removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, object: java.lang.Object | any): void
                    // @ts-ignore
                    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                    /**
                     * Add a JMX NotificationListener
                     * @see javax.management.NotificationBroadcaster#addNotificationListener(javax.management.NotificationListener, javax.management.NotificationFilter, java.lang.Object)
                     */
                    // @ts-ignore
                    public addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, object: java.lang.Object | any): void
                    /**
                     * Remove a JMX-NotificationListener
                     * @see javax.management.NotificationBroadcaster#removeNotificationListener(javax.management.NotificationListener)
                     */
                    // @ts-ignore
                    public removeNotificationListener(listener: javax.management.NotificationListener): void
                    /**
                     * @return the naming resources associated with this web application.
                     */
                    // @ts-ignore
                    public getWelcomeFiles(): string[]
                    // @ts-ignore
                    public getXmlNamespaceAware(): boolean
                    // @ts-ignore
                    public setXmlNamespaceAware(webXmlNamespaceAware: boolean): void
                    // @ts-ignore
                    public setXmlValidation(webXmlValidation: boolean): void
                    // @ts-ignore
                    public getXmlValidation(): boolean
                    // @ts-ignore
                    public setXmlBlockExternal(xmlBlockExternal: boolean): void
                    // @ts-ignore
                    public getXmlBlockExternal(): boolean
                    // @ts-ignore
                    public setTldValidation(tldValidation: boolean): void
                    // @ts-ignore
                    public getTldValidation(): boolean
                    // @ts-ignore
                    public getServer(): string
                    // @ts-ignore
                    public setServer(server: java.lang.String | string): string
                    // @ts-ignore
                    public getJavaVMs(): string[]
                    // @ts-ignore
                    public setJavaVMs(javaVMs: java.lang.String[] | string[]): string[]
                    /**
                     * Gets the time this context was started.
                     * @return Time (in milliseconds since January 1, 1970, 00:00:00) when this
                     *  context was started
                     */
                    // @ts-ignore
                    public getStartTime(): number /*long*/
                }
            }
        }
    }
}
