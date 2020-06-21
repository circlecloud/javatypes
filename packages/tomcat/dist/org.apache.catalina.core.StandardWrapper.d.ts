declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of the <b>Wrapper</b> interface that represents
                 * an individual servlet definition.  No child Containers are allowed, and
                 * the parent Container must be a Context.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class StandardWrapper extends org.apache.catalina.core.ContainerBase implements javax.servlet.ServletConfig, org.apache.catalina.Wrapper, javax.management.NotificationEmitter {
                    /**
                     * Create a new StandardWrapper component with the default basic Valve.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly DEFAULT_SERVLET_METHODS: java.lang.String[] | string[]
                    /**
                     * The date and time at which this servlet will become available (in
                     * milliseconds since the epoch), or zero if the servlet is available.
                     * If this value equals Long.MAX_VALUE, the unavailability of this
                     * servlet is considered permanent.
                     */
                    // @ts-ignore
                    available: number /*long*/
                    /**
                     * The broadcaster that sends j2ee notifications.
                     */
                    // @ts-ignore
                    readonly broadcaster: javax.management.NotificationBroadcasterSupport
                    /**
                     * The count of allocations that are currently active (even if they
                     * are for the same instance, as will be true on a non-STM servlet).
                     */
                    // @ts-ignore
                    readonly countAllocated: java.util.concurrent.atomic.AtomicInteger
                    /**
                     * The facade associated with this wrapper.
                     */
                    // @ts-ignore
                    readonly facade: org.apache.catalina.core.StandardWrapperFacade
                    /**
                     * The (single) possibly uninitialized instance of this servlet.
                     */
                    // @ts-ignore
                    instance: javax.servlet.Servlet
                    /**
                     * Flag that indicates if this instance has been initialized
                     */
                    // @ts-ignore
                    instanceInitialized: boolean
                    /**
                     * The load-on-startup order value (negative value means load on
                     * first call) for this servlet.
                     */
                    // @ts-ignore
                    loadOnStartup: number /*int*/
                    /**
                     * Mappings associated with the wrapper.
                     */
                    // @ts-ignore
                    readonly mappings: java.util.ArrayList<java.lang.String | string>
                    /**
                     * The initialization parameters for this servlet, keyed by
                     * parameter name.
                     */
                    // @ts-ignore
                    parameters: java.util.HashMap<java.lang.String | string, java.lang.String | string>
                    /**
                     * The security role references for this servlet, keyed by role name
                     * used in the servlet.  The corresponding value is the role name of
                     * the web application itself.
                     */
                    // @ts-ignore
                    references: java.util.HashMap<java.lang.String | string, java.lang.String | string>
                    /**
                     * The run-as identity for this servlet.
                     */
                    // @ts-ignore
                    runAs: java.lang.String | string
                    /**
                     * The notification sequence number.
                     */
                    // @ts-ignore
                    sequenceNumber: number /*long*/
                    /**
                     * The fully qualified servlet class name for this servlet.
                     */
                    // @ts-ignore
                    servletClass: java.lang.String | string
                    /**
                     * Does this servlet implement the SingleThreadModel interface?
                     */
                    // @ts-ignore
                    singleThreadModel: boolean
                    /**
                     * Are we unloading our servlet instance at the moment?
                     */
                    // @ts-ignore
                    unloading: boolean
                    /**
                     * Maximum number of STM instances.
                     */
                    // @ts-ignore
                    maxInstances: number /*int*/
                    /**
                     * Number of instances currently loaded for a STM servlet.
                     */
                    // @ts-ignore
                    nInstances: number /*int*/
                    /**
                     * Stack containing the STM instances.
                     */
                    // @ts-ignore
                    instancePool: java.util.Stack<javax.servlet.Servlet>
                    /**
                     * Wait time for servlet unload in ms.
                     */
                    // @ts-ignore
                    unloadDelay: number /*long*/
                    /**
                     * True if this StandardWrapper is for the JspServlet
                     */
                    // @ts-ignore
                    isJspServlet: boolean
                    /**
                     * The ObjectName of the JSP monitoring mbean
                     */
                    // @ts-ignore
                    jspMonitorON: javax.management.ObjectName
                    /**
                     * Should we swallow System.out
                     */
                    // @ts-ignore
                    swallowOutput: boolean
                    // @ts-ignore
                    swValve: org.apache.catalina.core.StandardWrapperValve
                    // @ts-ignore
                    loadTime: number /*long*/
                    // @ts-ignore
                    classLoadTime: number /*int*/
                    /**
                     * Multipart config
                     */
                    // @ts-ignore
                    multipartConfigElement: javax.servlet.MultipartConfigElement
                    /**
                     * Async support
                     */
                    // @ts-ignore
                    asyncSupported: boolean
                    /**
                     * Enabled
                     */
                    // @ts-ignore
                    enabled: boolean
                    /**
                     * Static class array used when the SecurityManager is turned on and
                     * <code>Servlet.init</code> is invoked.
                     */
                    // @ts-ignore
                    static classType: java.lang.Class<any>[]
                    // @ts-ignore
                    notificationInfo: javax.management.MBeanNotificationInfo[]
                    // @ts-ignore
                    public isOverridable(): boolean
                    // @ts-ignore
                    public setOverridable(overridable: boolean): void
                    /**
                     * Return the available date/time for this servlet, in milliseconds since
                     * the epoch.  If this date/time is Long.MAX_VALUE, it is considered to mean
                     * that unavailability is permanent and any request for this servlet will return
                     * an SC_NOT_FOUND error.  If this date/time is in the future, any request for
                     * this servlet will return an SC_SERVICE_UNAVAILABLE error.  If it is zero,
                     * the servlet is currently available.
                     */
                    // @ts-ignore
                    public getAvailable(): number /*long*/
                    /**
                     * Set the available date/time for this servlet, in milliseconds since the
                     * epoch.  If this date/time is Long.MAX_VALUE, it is considered to mean
                     * that unavailability is permanent and any request for this servlet will return
                     * an SC_NOT_FOUND error. If this date/time is in the future, any request for
                     * this servlet will return an SC_SERVICE_UNAVAILABLE error.
                     * @param available The new available date/time
                     */
                    // @ts-ignore
                    public setAvailable(available: number /*long*/): void
                    /**
                     * @return the number of active allocations of this servlet, even if they
                     *  are all for the same instance (as will be true for servlets that do
                     *  not implement <code>SingleThreadModel</code>.
                     */
                    // @ts-ignore
                    public getCountAllocated(): number /*int*/
                    /**
                     * @return the load-on-startup order value (negative value means
                     *  load on first call).
                     */
                    // @ts-ignore
                    public getLoadOnStartup(): number /*int*/
                    /**
                     * Set the load-on-startup order value (negative value means
                     * load on first call).
                     * @param value New load-on-startup value
                     */
                    // @ts-ignore
                    public setLoadOnStartup(value: number /*int*/): void
                    /**
                     * Set the load-on-startup order value from a (possibly null) string.
                     * Per the specification, any missing or non-numeric value is converted
                     * to a zero, so that this servlet will still be loaded at startup
                     * time, but in an arbitrary order.
                     * @param value New load-on-startup value
                     */
                    // @ts-ignore
                    public setLoadOnStartupString(value: java.lang.String | string): void
                    /**
                     * @return the load-on-startup value that was parsed
                     */
                    // @ts-ignore
                    public getLoadOnStartupString(): string
                    /**
                     * @return maximum number of instances that will be allocated when a single
                     *  thread model servlet is used.
                     */
                    // @ts-ignore
                    public getMaxInstances(): number /*int*/
                    /**
                     * Set the maximum number of instances that will be allocated when a single
                     * thread model servlet is used.
                     * @param maxInstances New value of maxInstances
                     */
                    // @ts-ignore
                    public setMaxInstances(maxInstances: number /*int*/): void
                    /**
                     * Set the parent Container of this Wrapper, but only if it is a Context.
                     * @param container Proposed parent Container
                     */
                    // @ts-ignore
                    public setParent(container: org.apache.catalina.Container): void
                    /**
                     * @return the run-as identity for this servlet.
                     */
                    // @ts-ignore
                    public getRunAs(): string
                    /**
                     * Set the run-as identity for this servlet.
                     * @param runAs New run-as identity value
                     */
                    // @ts-ignore
                    public setRunAs(runAs: java.lang.String | string): void
                    /**
                     * @return the fully qualified servlet class name for this servlet.
                     */
                    // @ts-ignore
                    public getServletClass(): string
                    /**
                     * Set the fully qualified servlet class name for this servlet.
                     * @param servletClass Servlet class name
                     */
                    // @ts-ignore
                    public setServletClass(servletClass: java.lang.String | string): void
                    /**
                     * Set the name of this servlet.  This is an alias for the normal
                     * <code>Container.setName()</code> method, and complements the
                     * <code>getServletName()</code> method required by the
                     * <code>ServletConfig</code> interface.
                     * @param name The new name of this servlet
                     */
                    // @ts-ignore
                    public setServletName(name: java.lang.String | string): void
                    /**
                     * Does the servlet class represented by this component implement the
                     * <code>SingleThreadModel</code> interface? This can only be determined
                     * once the class is loaded. Calling this method will not trigger loading
                     * the class since that may cause the application to behave unexpectedly.
                     * @return {#code null} if the class has not been loaded, otherwise {@code
                     *          true} if the servlet does implement {@code SingleThreadModel} and
                     *          {@code false} if it does not.
                     */
                    // @ts-ignore
                    public isSingleThreadModel(): java.lang.Boolean
                    /**
                     * @return <code>true</code> if the Servlet has been marked unavailable.
                     */
                    // @ts-ignore
                    public isUnavailable(): boolean
                    // @ts-ignore
                    public getServletMethods(): string[]
                    /**
                     * @return the associated servlet instance.
                     */
                    // @ts-ignore
                    public getServlet(): javax.servlet.Servlet
                    /**
                     * Set the associated servlet instance.
                     */
                    // @ts-ignore
                    public setServlet(servlet: javax.servlet.Servlet): void
                    /**
                     * Execute a periodic task, such as reloading, etc. This method will be
                     * invoked inside the classloading context of this container. Unexpected
                     * throwables will be caught and logged.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Extract the root cause from a servlet exception.
                     * @param e The servlet exception
                     * @return the root cause of the Servlet exception
                     */
                    // @ts-ignore
                    public static getRootCause(e: javax.servlet.ServletException): Error
                    /**
                     * Refuse to add a child Container, because Wrappers are the lowest level
                     * of the Container hierarchy.
                     * @param child Child container to be added
                     */
                    // @ts-ignore
                    public addChild(child: org.apache.catalina.Container): void
                    /**
                     * Add a new servlet initialization parameter for this servlet.
                     * @param name Name of this initialization parameter to add
                     * @param value Value of this initialization parameter to add
                     */
                    // @ts-ignore
                    public addInitParameter(name: java.lang.String | string, value: java.lang.String | string): void
                    /**
                     * Add a mapping associated with the Wrapper.
                     * @param mapping The new wrapper mapping
                     */
                    // @ts-ignore
                    public addMapping(mapping: java.lang.String | string): void
                    /**
                     * Add a new security role reference record to the set of records for
                     * this servlet.
                     * @param name Role name used within this servlet
                     * @param link Role name used within the web application
                     */
                    // @ts-ignore
                    public addSecurityReference(name: java.lang.String | string, link: java.lang.String | string): void
                    /**
                     * Allocate an initialized instance of this Servlet that is ready to have
                     * its <code>service()</code> method called.  If the servlet class does
                     * not implement <code>SingleThreadModel</code>, the (only) initialized
                     * instance may be returned immediately.  If the servlet class implements
                     * <code>SingleThreadModel</code>, the Wrapper implementation must ensure
                     * that this instance is not allocated again until it is deallocated by a
                     * call to <code>deallocate()</code>.
                     * @exception ServletException if the servlet init() method threw
                     *   an exception
                     * @exception ServletException if a loading error occurs
                     */
                    // @ts-ignore
                    public allocate(): javax.servlet.Servlet
                    /**
                     * Return this previously allocated servlet to the pool of available
                     * instances.  If this servlet class does not implement SingleThreadModel,
                     * no action is actually required.
                     * @param servlet The servlet to be returned
                     * @exception ServletException if a deallocation error occurs
                     */
                    // @ts-ignore
                    public deallocate(servlet: javax.servlet.Servlet): void
                    /**
                     * Return the value for the specified initialization parameter name,
                     * if any; otherwise return <code>null</code>.
                     * @param name Name of the requested initialization parameter
                     */
                    // @ts-ignore
                    public findInitParameter(name: java.lang.String | string): string
                    /**
                     * Return the names of all defined initialization parameters for this
                     * servlet.
                     */
                    // @ts-ignore
                    public findInitParameters(): string[]
                    /**
                     * Return the mappings associated with this wrapper.
                     */
                    // @ts-ignore
                    public findMappings(): string[]
                    /**
                     * Return the security role link for the specified security role
                     * reference name, if any; otherwise return <code>null</code>.
                     * @param name Security role reference used within this servlet
                     */
                    // @ts-ignore
                    public findSecurityReference(name: java.lang.String | string): string
                    /**
                     * Return the set of security role reference names associated with
                     * this servlet, if any; otherwise return a zero-length array.
                     */
                    // @ts-ignore
                    public findSecurityReferences(): string[]
                    /**
                     * Load and initialize an instance of this servlet, if there is not already
                     * at least one initialized instance.  This can be used, for example, to
                     * load servlets that are marked in the deployment descriptor to be loaded
                     * at server startup time.
                     * <p>
                     * <b>IMPLEMENTATION NOTE</b>:  Servlets whose classnames begin with
                     * <code>org.apache.catalina.</code> (so-called "container" servlets)
                     * are loaded by the same classloader that loaded this class, rather than
                     * the classloader for the current web application.
                     * This gives such classes access to Catalina internals, which are
                     * prevented for classes loaded for web applications.
                     * @exception ServletException if the servlet init() method threw
                     *   an exception
                     * @exception ServletException if some other loading problem occurs
                     */
                    // @ts-ignore
                    public load(): void
                    /**
                     * Load and initialize an instance of this servlet, if there is not already
                     * at least one initialized instance.  This can be used, for example, to
                     * load servlets that are marked in the deployment descriptor to be loaded
                     * at server startup time.
                     * @return the loaded Servlet instance
                     * @throws ServletException for a Servlet load error
                     */
                    // @ts-ignore
                    public loadServlet(): javax.servlet.Servlet
                    /**
                     * Remove the specified initialization parameter from this servlet.
                     * @param name Name of the initialization parameter to remove
                     */
                    // @ts-ignore
                    public removeInitParameter(name: java.lang.String | string): void
                    /**
                     * Remove a mapping associated with the wrapper.
                     * @param mapping The pattern to remove
                     */
                    // @ts-ignore
                    public removeMapping(mapping: java.lang.String | string): void
                    /**
                     * Remove any security role reference for the specified role name.
                     * @param name Security role used within this servlet to be removed
                     */
                    // @ts-ignore
                    public removeSecurityReference(name: java.lang.String | string): void
                    /**
                     * Process an UnavailableException, marking this servlet as unavailable
                     * for the specified amount of time.
                     * @param unavailable The exception that occurred, or <code>null</code>
                     *   to mark this servlet as permanently unavailable
                     */
                    // @ts-ignore
                    public unavailable(unavailable: javax.servlet.UnavailableException): void
                    /**
                     * Unload all initialized instances of this servlet, after calling the
                     * <code>destroy()</code> method for each instance.  This can be used,
                     * for example, prior to shutting down the entire servlet engine, or
                     * prior to reloading all of the classes from the Loader associated with
                     * our Loader's repository.
                     * @exception ServletException if an exception is thrown by the
                     *   destroy() method
                     */
                    // @ts-ignore
                    public unload(): void
                    /**
                     * @return the initialization parameter value for the specified name,
                     *  if any; otherwise return <code>null</code>.
                     * @param name Name of the initialization parameter to retrieve
                     */
                    // @ts-ignore
                    public getInitParameter(name: java.lang.String | string): string
                    /**
                     * @return the set of initialization parameter names defined for this
                     *  servlet.  If none are defined, an empty Enumeration is returned.
                     */
                    // @ts-ignore
                    public getInitParameterNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * @return the servlet context with which this servlet is associated.
                     */
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    /**
                     * @return the name of this servlet.
                     */
                    // @ts-ignore
                    public getServletName(): string
                    // @ts-ignore
                    public getProcessingTime(): number /*long*/
                    // @ts-ignore
                    public getMaxTime(): number /*long*/
                    // @ts-ignore
                    public getMinTime(): number /*long*/
                    // @ts-ignore
                    public getRequestCount(): number /*int*/
                    // @ts-ignore
                    public getErrorCount(): number /*int*/
                    /**
                     * Increment the error count used for monitoring.
                     */
                    // @ts-ignore
                    public incrementErrorCount(): void
                    // @ts-ignore
                    public getLoadTime(): number /*long*/
                    // @ts-ignore
                    public getClassLoadTime(): number /*int*/
                    // @ts-ignore
                    public getMultipartConfigElement(): javax.servlet.MultipartConfigElement
                    // @ts-ignore
                    public setMultipartConfigElement(multipartConfigElement: javax.servlet.MultipartConfigElement): void
                    // @ts-ignore
                    public isAsyncSupported(): boolean
                    // @ts-ignore
                    public setAsyncSupported(asyncSupported: boolean): void
                    // @ts-ignore
                    public isEnabled(): boolean
                    // @ts-ignore
                    public setEnabled(enabled: boolean): void
                    // @ts-ignore
                    getAllDeclaredMethods(c: java.lang.Class<any>): java.lang.reflect.Method[]
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
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    /**
                     * Remove a JMX notificationListener
                     * @see javax.management.NotificationEmitter#removeNotificationListener(javax.management.NotificationListener, javax.management.NotificationFilter, java.lang.Object)
                     */
                    // @ts-ignore
                    public removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, object: java.lang.Object | any): void
                    /**
                     * Get JMX Broadcaster Info
                     * FIXME: This two events we not send j2ee.state.failed and j2ee.attribute.changed!
                     * @see javax.management.NotificationBroadcaster#getNotificationInfo()
                     */
                    // @ts-ignore
                    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                    /**
                     * Add a JMX-NotificationListener
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
                }
            }
        }
    }
}
