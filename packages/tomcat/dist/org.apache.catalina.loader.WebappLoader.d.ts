declare namespace org {
    namespace apache {
        namespace catalina {
            namespace loader {
                /**
                 * Classloader implementation which is specialized for handling web
                 * applications in the most efficient way, while being Catalina aware (all
                 * accesses to resources are made through
                 * {@link org.apache.catalina.WebResourceRoot}).
                 * This class loader supports detection of modified
                 * Java classes, which can be used to implement auto-reload support.
                 * <p>
                 * This class loader is configured via the Resources children of its Context
                 * prior to calling <code>start()</code>.  When a new class is required,
                 * these Resources will be consulted first to locate the class.  If it
                 * is not present, the system class loader will be used instead.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class WebappLoader extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Loader, java.beans.PropertyChangeListener {
                    /**
                     * Construct a new WebappLoader with no defined parent class loader
                     * (so that the actual parent will be the system class loader).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new WebappLoader with the specified class loader
                     * to be defined as the parent of the ClassLoader we ultimately create.
                     * @param parent The parent class loader
                     */
                    // @ts-ignore
                    constructor(parent: java.lang.ClassLoader)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * Return the Java class loader to be used by this Container.
                     */
                    // @ts-ignore
                    public getClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public getContext(): org.apache.catalina.Context
                    // @ts-ignore
                    public setContext(context: org.apache.catalina.Context): void
                    /**
                     * Return the "follow standard delegation model" flag used to configure
                     * our ClassLoader.
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
                     * @return the ClassLoader class name.
                     */
                    // @ts-ignore
                    public getLoaderClass(): string
                    /**
                     * Set the ClassLoader class name.
                     * @param loaderClass The new ClassLoader class name
                     */
                    // @ts-ignore
                    public setLoaderClass(loaderClass: java.lang.String | string): void
                    /**
                     * Return the reloadable flag for this Loader.
                     */
                    // @ts-ignore
                    public getReloadable(): boolean
                    /**
                     * Set the reloadable flag for this Loader.
                     * @param reloadable The new reloadable flag
                     */
                    // @ts-ignore
                    public setReloadable(reloadable: boolean): void
                    /**
                     * Add a property change listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Execute a periodic task, such as reloading, etc. This method will be
                     * invoked inside the classloading context of this container. Unexpected
                     * throwables will be caught and logged.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
                    // @ts-ignore
                    public getLoaderRepositories(): string[]
                    // @ts-ignore
                    public getLoaderRepositoriesString(): string
                    /**
                     * Classpath, as set in org.apache.catalina.jsp_classpath context
                     * property
                     * @return The classpath
                     */
                    // @ts-ignore
                    public getClasspath(): string
                    /**
                     * Has the internal repository associated with this Loader been modified,
                     * such that the loaded classes should be reloaded?
                     */
                    // @ts-ignore
                    public modified(): boolean
                    /**
                     * Remove a property change listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Return a String representation of this component.
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Start associated {@link ClassLoader} and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop associated {@link ClassLoader} and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    /**
                     * Process property change events from our associated Context.
                     * @param event The property change event that has occurred
                     */
                    // @ts-ignore
                    public propertyChange(event: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                }
            }
        }
    }
}
