declare namespace org {
    namespace apache {
        namespace catalina {
            namespace loader {
                /**
                 * Specialized web application class loader.
                 * <p>
                 * This class loader is a full reimplementation of the
                 * <code>URLClassLoader</code> from the JDK. It is designed to be fully
                 * compatible with a normal <code>URLClassLoader</code>, although its internal
                 * behavior may be completely different.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong> - By default, this class loader follows
                 * the delegation model required by the specification. The system class
                 * loader will be queried first, then the local repositories, and only then
                 * delegation to the parent class loader will occur. This allows the web
                 * application to override any shared class except the classes from J2SE.
                 * Special handling is provided from the JAXP XML parser interfaces, the JNDI
                 * interfaces, and the classes from the servlet API, which are never loaded
                 * from the webapp repositories. The <code>delegate</code> property
                 * allows an application to modify this behavior to move the parent class loader
                 * ahead of the local repositories.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong> - Due to limitations in Jasper
                 * compilation technology, any repository which contains classes from
                 * the servlet API will be ignored by the class loader.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong> - The class loader generates source
                 * URLs which include the full JAR URL when a class is loaded from a JAR file,
                 * which allows setting security permission at the class level, even when a
                 * class is contained inside a JAR.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong> - Local repositories are searched in
                 * the order they are added via the initial constructor.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong> - No check for sealing violations or
                 * security is made unless a security manager is present.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong> - As of 8.0, this class
                 * loader implements {@link InstrumentableClassLoader}, permitting web
                 * application classes to instrument other classes in the same web
                 * application. It does not permit instrumentation of system or container
                 * classes or classes in other web apps.
                 * @author Remy Maucherat
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class WebappClassLoaderBase extends java.net.URLClassLoader implements org.apache.catalina.Lifecycle, org.apache.tomcat.InstrumentableClassLoader, org.apache.juli.WebappProperties, org.apache.tomcat.util.security.PermissionCheck {
                    /**
                     * Construct a new ClassLoader with no defined repositories and no
                     * parent ClassLoader.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new ClassLoader with no defined repositories and the given
                     * parent ClassLoader.
                     * <p>
                     * Method is used via reflection -
                     * see {@link WebappLoader#createClassLoader()}
                     * @param parent Our parent class loader
                     */
                    // @ts-ignore
                    constructor(parent: java.lang.ClassLoader)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Associated web resources for this webapp.
                     */
                    // @ts-ignore
                    resources: org.apache.catalina.WebResourceRoot
                    /**
                     * The cache of ResourceEntry for classes and resources we have loaded,
                     * keyed by resource path, not binary name. Path is used as the key since
                     * resources may be requested by binary name (classes) or path (other
                     * resources such as property files) and the mapping from binary name to
                     * path is unambiguous but the reverse mapping is ambiguous.
                     */
                    // @ts-ignore
                    readonly resourceEntries: java.util.Map<java.lang.String | string, org.apache.catalina.loader.ResourceEntry>
                    /**
                     * Should this class loader delegate to the parent class loader
                     * <strong>before</strong> searching its own repositories (i.e. the
                     * usual Java2 delegation model)?  If set to <code>false</code>,
                     * this class loader will search its own repositories first, and
                     * delegate to the parent only if the class or resource is not
                     * found locally. Note that the default, <code>false</code>, is
                     * the behavior called for by the servlet specification.
                     */
                    // @ts-ignore
                    delegate: boolean
                    /**
                     * A list of read File Permission's required if this loader is for a web
                     * application context.
                     */
                    // @ts-ignore
                    readonly permissionList: java.util.ArrayList<java.security.Permission>
                    /**
                     * The PermissionCollection for each CodeSource for a web
                     * application context.
                     */
                    // @ts-ignore
                    readonly loaderPC: java.util.HashMap<java.lang.String | string, java.security.PermissionCollection>
                    /**
                     * Instance of the SecurityManager installed.
                     */
                    // @ts-ignore
                    readonly securityManager: java.lang.SecurityManager
                    /**
                     * The parent class loader.
                     */
                    // @ts-ignore
                    readonly parent: java.lang.ClassLoader
                    /**
                     * @return associated resources.
                     */
                    // @ts-ignore
                    public getResources(): org.apache.catalina.WebResourceRoot
                    /**
                     * Set associated resources.
                     * @param resources the resources from which the classloader will
                     *      load the classes
                     */
                    // @ts-ignore
                    public setResources(resources: org.apache.catalina.WebResourceRoot): void
                    /**
                     * @return the context name for this class loader.
                     */
                    // @ts-ignore
                    public getContextName(): string
                    /**
                     * Return the "delegate first" flag for this class loader.
                     * @return <code>true</code> if the class lookup will delegate to
                     *    the parent first. The default in Tomcat is <code>false</code>.
                     */
                    // @ts-ignore
                    public getDelegate(): boolean
                    /**
                     * Set the "delegate first" flag for this class loader.
                     * If this flag is true, this class loader delegates
                     * to the parent class loader
                     * <strong>before</strong> searching its own repositories, as
                     * in an ordinary (non-servlet) chain of Java class loaders.
                     * If set to <code>false</code> (the default),
                     * this class loader will search its own repositories first, and
                     * delegate to the parent only if the class or resource is not
                     * found locally, as per the servlet specification.
                     * @param delegate The new "delegate first" flag
                     */
                    // @ts-ignore
                    public setDelegate(delegate: boolean): void
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
                     * @return the clearReferencesLogFactoryRelease flag for this Context.
                     */
                    // @ts-ignore
                    public getClearReferencesLogFactoryRelease(): boolean
                    /**
                     * Set the clearReferencesLogFactoryRelease feature for this Context.
                     * @param clearReferencesLogFactoryRelease The new flag value
                     */
                    // @ts-ignore
                    public setClearReferencesLogFactoryRelease(clearReferencesLogFactoryRelease: boolean): void
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
                    /**
                     * Adds the specified class file transformer to this class loader. The
                     * transformer will then be able to modify the bytecode of any classes
                     * loaded by this class loader after the invocation of this method.
                     * @param transformer The transformer to add to the class loader
                     */
                    // @ts-ignore
                    public addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    /**
                     * Removes the specified class file transformer from this class loader.
                     * It will no longer be able to modify the byte code of any classes
                     * loaded by the class loader after the invocation of this method.
                     * However, any classes already modified by this transformer will
                     * remain transformed.
                     * @param transformer The transformer to remove
                     */
                    // @ts-ignore
                    public removeTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    // @ts-ignore
                    copyStateWithoutTransformers(base: org.apache.catalina.loader.WebappClassLoaderBase): void
                    /**
                     * Have one or more classes or resources been modified so that a reload
                     * is appropriate?
                     * @return <code>true</code> if there's been a modification
                     */
                    // @ts-ignore
                    public modified(): boolean
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    doDefineClass(name: java.lang.String | string, b: number /*byte*/[], off: number /*int*/, len: number /*int*/, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>
                    /**
                     * Find the specified class in our local repositories, if possible.  If
                     * not found, throw <code>ClassNotFoundException</code>.
                     * @param name The binary name of the class to be loaded
                     * @exception ClassNotFoundException if the class was not found
                     */
                    // @ts-ignore
                    public findClass(name: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Find the specified resource in our local repository, and return a
                     * <code>URL</code> referring to it, or <code>null</code> if this resource
                     * cannot be found.
                     * @param name Name of the resource to be found
                     */
                    // @ts-ignore
                    public findResource(name: java.lang.String | string): java.net.URL
                    /**
                     * Return an enumeration of <code>URLs</code> representing all of the
                     * resources with the given name.  If no resources with this name are
                     * found, return an empty enumeration.
                     * @param name Name of the resources to be found
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public findResources(name: java.lang.String | string): java.util.Enumeration<java.net.URL>
                    /**
                     * Find the resource with the given name.  A resource is some data
                     * (images, audio, text, etc.) that can be accessed by class code in a
                     * way that is independent of the location of the code.  The name of a
                     * resource is a "/"-separated path name that identifies the resource.
                     * If the resource cannot be found, return <code>null</code>.
                     * <p>
                     * This method searches according to the following algorithm, returning
                     * as soon as it finds the appropriate URL.  If the resource cannot be
                     * found, returns <code>null</code>.
                     * <ul>
                     * <li>If the <code>delegate</code> property is set to <code>true</code>,
                     * call the <code>getResource()</code> method of the parent class
                     * loader, if any.</li>
                     * <li>Call <code>findResource()</code> to find this resource in our
                     * locally defined repositories.</li>
                     * <li>Call the <code>getResource()</code> method of the parent class
                     * loader, if any.</li>
                     * </ul>
                     * @param name Name of the resource to return a URL for
                     */
                    // @ts-ignore
                    public getResource(name: java.lang.String | string): java.net.URL
                    // @ts-ignore
                    public getResources(name: java.lang.String | string): java.util.Enumeration<java.net.URL>
                    /**
                     * Find the resource with the given name, and return an input stream
                     * that can be used for reading it.  The search order is as described
                     * for <code>getResource()</code>, after checking to see if the resource
                     * data has been previously cached.  If the resource cannot be found,
                     * return <code>null</code>.
                     * @param name Name of the resource to return an input stream for
                     */
                    // @ts-ignore
                    public getResourceAsStream(name: java.lang.String | string): java.io.InputStream
                    /**
                     * Load the class with the specified name.  This method searches for
                     * classes in the same manner as <code>loadClass(String, boolean)</code>
                     * with <code>false</code> as the second argument.
                     * @param name The binary name of the class to be loaded
                     * @exception ClassNotFoundException if the class was not found
                     */
                    // @ts-ignore
                    public loadClass(name: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Load the class with the specified name, searching using the following
                     * algorithm until it finds and returns the class.  If the class cannot
                     * be found, returns <code>ClassNotFoundException</code>.
                     * <ul>
                     * <li>Call <code>findLoadedClass(String)</code> to check if the
                     * class has already been loaded.  If it has, the same
                     * <code>Class</code> object is returned.</li>
                     * <li>If the <code>delegate</code> property is set to <code>true</code>,
                     * call the <code>loadClass()</code> method of the parent class
                     * loader, if any.</li>
                     * <li>Call <code>findClass()</code> to find this class in our locally
                     * defined repositories.</li>
                     * <li>Call the <code>loadClass()</code> method of our parent
                     * class loader, if any.</li>
                     * </ul>
                     * If the class was found using the above steps, and the
                     * <code>resolve</code> flag is <code>true</code>, this method will then
                     * call <code>resolveClass(Class)</code> on the resulting Class object.
                     * @param name The binary name of the class to be loaded
                     * @param resolve If <code>true</code> then resolve the class
                     * @exception ClassNotFoundException if the class was not found
                     */
                    // @ts-ignore
                    public loadClass(name: java.lang.String | string, resolve: boolean): java.lang.Class<any>
                    // @ts-ignore
                    checkStateForClassLoading(className: java.lang.String | string): void
                    // @ts-ignore
                    checkStateForResourceLoading(resource: java.lang.String | string): void
                    /**
                     * Get the Permissions for a CodeSource.  If this instance
                     * of WebappClassLoaderBase is for a web application context,
                     * add read FilePermission for the appropriate resources.
                     * @param codeSource where the code was loaded from
                     * @return PermissionCollection for CodeSource
                     */
                    // @ts-ignore
                    getPermissions(codeSource: java.security.CodeSource): java.security.PermissionCollection
                    // @ts-ignore
                    public check(permission: java.security.Permission): boolean
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Note that list of URLs returned by this method may not be complete. The
                     * web application class loader accesses class loader resources via the
                     * {@link WebResourceRoot} which supports the arbitrary mapping of
                     * additional files, directories and contents of JAR files under
                     * WEB-INF/classes. Any such resources will not be included in the URLs
                     * returned here.
                     */
                    // @ts-ignore
                    public getURLs(): java.net.URL[]
                    /**
                     * Add a lifecycle event listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addLifecycleListener(listener: org.apache.catalina.LifecycleListener): void
                    /**
                     * Get the lifecycle listeners associated with this lifecycle. If this
                     * Lifecycle has no listeners registered, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findLifecycleListeners(): org.apache.catalina.LifecycleListener[]
                    /**
                     * Remove a lifecycle event listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removeLifecycleListener(listener: org.apache.catalina.LifecycleListener): void
                    /**
                     * Obtain the current state of the source component.
                     * @return The current state of the source component.
                     */
                    // @ts-ignore
                    public getState(): org.apache.catalina.LifecycleState
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getStateName(): string
                    // @ts-ignore
                    public init(): void
                    /**
                     * Start the class loader.
                     * @exception LifecycleException if a lifecycle error occurs
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * Stop the class loader.
                     * @exception LifecycleException if a lifecycle error occurs
                     */
                    // @ts-ignore
                    public stop(): void
                    // @ts-ignore
                    public destroy(): void
                    // @ts-ignore
                    getJavaseClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    setJavaseClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Clear references.
                     */
                    // @ts-ignore
                    clearReferences(): void
                    /**
                     * Find specified class in local repositories.
                     * @param name The binary name of the class to be loaded
                     * @return the loaded class, or null if the class isn't found
                     */
                    // @ts-ignore
                    findClassInternal(name: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Returns true if the specified package name is sealed according to the
                     * given manifest.
                     * @param name Path name to check
                     * @param man Associated manifest
                     * @return <code>true</code> if the manifest associated says it is sealed
                     */
                    // @ts-ignore
                    isPackageSealed(name: java.lang.String | string, man: java.util.jar.Manifest): boolean
                    /**
                     * Finds the class with the given name if it has previously been
                     * loaded and cached by this class loader, and return the Class object.
                     * If this class has not been cached, return <code>null</code>.
                     * @param name The binary name of the resource to return
                     * @return a loaded class
                     */
                    // @ts-ignore
                    findLoadedClass0(name: java.lang.String | string): java.lang.Class<any>
                    /**
                     * Refresh the system policy file, to pick up eventual changes.
                     */
                    // @ts-ignore
                    refreshPolicy(): void
                    /**
                     * Filter classes.
                     * @param name class name
                     * @param isClassName <code>true</code> if name is a class name,
                     *                 <code>false</code> if name is a resource name
                     * @return <code>true</code> if the class should be filtered
                     */
                    // @ts-ignore
                    filter(name: java.lang.String | string, isClassName: boolean): boolean
                    // @ts-ignore
                    addURL(url: java.net.URL): void
                    // @ts-ignore
                    public getWebappName(): string
                    // @ts-ignore
                    public getHostName(): string
                    // @ts-ignore
                    public getServiceName(): string
                    // @ts-ignore
                    public hasLoggingConfig(): boolean
                }
            }
        }
    }
}
