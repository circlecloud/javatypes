declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Abstract implementation of the <b>Container</b> interface, providing common
                 * functionality required by nearly every implementation.  Classes extending
                 * this base class must may implement a replacement for <code>invoke()</code>.
                 * <p>
                 * All subclasses of this abstract base class will include support for a
                 * Pipeline object that defines the processing to be performed for each request
                 * received by the <code>invoke()</code> method of this class, utilizing the
                 * "Chain of Responsibility" design pattern.  A subclass should encapsulate its
                 * own processing functionality as a <code>Valve</code>, and configure this
                 * Valve into the pipeline by calling <code>setBasic()</code>.
                 * <p>
                 * This implementation fires property change events, per the JavaBeans design
                 * pattern, for changes in singleton properties.  In addition, it fires the
                 * following <code>ContainerEvent</code> events to listeners who register
                 * themselves with <code>addContainerListener()</code>:
                 * <table border=1>
                 * <caption>ContainerEvents fired by this implementation</caption>
                 * <tr>
                 * <th>Type</th>
                 * <th>Data</th>
                 * <th>Description</th>
                 * </tr>
                 * <tr>
                 * <td align=center><code>addChild</code></td>
                 * <td align=center><code>Container</code></td>
                 * <td>Child container added to this Container.</td>
                 * </tr>
                 * <tr>
                 * <td align=center><code>{@link #getPipeline() pipeline}.addValve</code></td>
                 * <td align=center><code>Valve</code></td>
                 * <td>Valve added to this Container.</td>
                 * </tr>
                 * <tr>
                 * <td align=center><code>removeChild</code></td>
                 * <td align=center><code>Container</code></td>
                 * <td>Child container removed from this Container.</td>
                 * </tr>
                 * <tr>
                 * <td align=center><code>{@link #getPipeline() pipeline}.removeValve</code></td>
                 * <td align=center><code>Valve</code></td>
                 * <td>Valve removed from this Container.</td>
                 * </tr>
                 * <tr>
                 * <td align=center><code>start</code></td>
                 * <td align=center><code>null</code></td>
                 * <td>Container was started.</td>
                 * </tr>
                 * <tr>
                 * <td align=center><code>stop</code></td>
                 * <td align=center><code>null</code></td>
                 * <td>Container was stopped.</td>
                 * </tr>
                 * </table>
                 * Subclasses that fire additional events should document them in the
                 * class comments of the implementation class.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class ContainerBase extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Container {
                    // @ts-ignore
                    constructor()
                    /**
                     * The child Containers belonging to this Container, keyed by name.
                     */
                    // @ts-ignore
                    readonly children: java.util.HashMap<java.lang.String | string, org.apache.catalina.Container>
                    /**
                     * The processor delay for this component.
                     */
                    // @ts-ignore
                    backgroundProcessorDelay: number /*int*/
                    /**
                     * The future allowing control of the background processor.
                     */
                    // @ts-ignore
                    backgroundProcessorFuture: java.util.concurrent.ScheduledFuture<any>
                    // @ts-ignore
                    monitorFuture: java.util.concurrent.ScheduledFuture<any>
                    /**
                     * The container event listeners for this Container. Implemented as a
                     * CopyOnWriteArrayList since listeners may invoke methods to add/remove
                     * themselves or other listeners and with a ReadWriteLock that would trigger
                     * a deadlock.
                     */
                    // @ts-ignore
                    readonly listeners: java.util.List<org.apache.catalina.ContainerListener> | Array<org.apache.catalina.ContainerListener>
                    /**
                     * The Logger implementation with which this Container is associated.
                     */
                    // @ts-ignore
                    logger: org.apache.juli.logging.Log
                    /**
                     * Associated logger name.
                     */
                    // @ts-ignore
                    logName: java.lang.String | string
                    /**
                     * The cluster with which this Container is associated.
                     */
                    // @ts-ignore
                    cluster: org.apache.catalina.Cluster
                    /**
                     * The human-readable name of this Container.
                     */
                    // @ts-ignore
                    name: java.lang.String | string
                    /**
                     * The parent Container to which this Container is a child.
                     */
                    // @ts-ignore
                    parent: org.apache.catalina.Container
                    /**
                     * The parent class loader to be configured when we install a Loader.
                     */
                    // @ts-ignore
                    parentClassLoader: java.lang.ClassLoader
                    /**
                     * The Pipeline object with which this Container is associated.
                     */
                    // @ts-ignore
                    readonly pipeline: org.apache.catalina.Pipeline
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Will children be started automatically when they are added.
                     */
                    // @ts-ignore
                    startChildren: boolean
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * The access log to use for requests normally handled by this container
                     * that have been handled earlier in the processing chain.
                     */
                    // @ts-ignore
                    accessLog: org.apache.catalina.AccessLog
                    // @ts-ignore
                    startStopExecutor: java.util.concurrent.ExecutorService
                    // @ts-ignore
                    public getStartStopThreads(): number /*int*/
                    // @ts-ignore
                    public setStartStopThreads(startStopThreads: number /*int*/): void
                    /**
                     * Get the delay between the invocation of the backgroundProcess method on
                     * this container and its children. Child containers will not be invoked
                     * if their delay value is not negative (which would mean they are using
                     * their own thread). Setting this to a positive value will cause
                     * a thread to be spawn. After waiting the specified amount of time,
                     * the thread will invoke the executePeriodic method on this container
                     * and all its children.
                     */
                    // @ts-ignore
                    public getBackgroundProcessorDelay(): number /*int*/
                    /**
                     * Set the delay between the invocation of the execute method on this
                     * container and its children.
                     * @param delay The delay in seconds between the invocation of
                     *               backgroundProcess methods
                     */
                    // @ts-ignore
                    public setBackgroundProcessorDelay(delay: number /*int*/): void
                    /**
                     * Return the Logger for this Container.
                     */
                    // @ts-ignore
                    public getLogger(): org.apache.juli.logging.Log
                    /**
                     * @return the abbreviated name of this container for logging messages
                     */
                    // @ts-ignore
                    public getLogName(): string
                    /**
                     * Return the Cluster with which this Container is associated.  If there is
                     * no associated Cluster, return the Cluster associated with our parent
                     * Container (if any); otherwise return <code>null</code>.
                     */
                    // @ts-ignore
                    public getCluster(): org.apache.catalina.Cluster
                    // @ts-ignore
                    getClusterInternal(): org.apache.catalina.Cluster
                    /**
                     * Set the Cluster with which this Container is associated.
                     * @param cluster The newly associated Cluster
                     */
                    // @ts-ignore
                    public setCluster(cluster: org.apache.catalina.Cluster): void
                    /**
                     * Return a name string (suitable for use by humans) that describes this
                     * Container.  Within the set of child containers belonging to a particular
                     * parent, Container names must be unique.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Set a name string (suitable for use by humans) that describes this
                     * Container.  Within the set of child containers belonging to a particular
                     * parent, Container names must be unique.
                     * @param name New name of this container
                     * @exception IllegalStateException if this Container has already been
                     *   added to the children of a parent Container (after which the name
                     *   may not be changed)
                     */
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    /**
                     * Return if children of this container will be started automatically when
                     * they are added to this container.
                     * @return <code>true</code> if the children will be started
                     */
                    // @ts-ignore
                    public getStartChildren(): boolean
                    /**
                     * Set if children of this container will be started automatically when
                     * they are added to this container.
                     * @param startChildren New value of the startChildren flag
                     */
                    // @ts-ignore
                    public setStartChildren(startChildren: boolean): void
                    /**
                     * Return the Container for which this Container is a child, if there is
                     * one.  If there is no defined parent, return <code>null</code>.
                     */
                    // @ts-ignore
                    public getParent(): org.apache.catalina.Container
                    /**
                     * Set the parent Container to which this Container is being added as a
                     * child.  This Container may refuse to become attached to the specified
                     * Container by throwing an exception.
                     * @param container Container to which this Container is being added
                     *   as a child
                     * @exception IllegalArgumentException if this Container refuses to become
                     *   attached to the specified Container
                     */
                    // @ts-ignore
                    public setParent(container: org.apache.catalina.Container): void
                    /**
                     * Return the parent class loader (if any) for this web application.
                     * This call is meaningful only <strong>after</strong> a Loader has
                     * been configured.
                     */
                    // @ts-ignore
                    public getParentClassLoader(): java.lang.ClassLoader
                    /**
                     * Set the parent class loader (if any) for this web application.
                     * This call is meaningful only <strong>before</strong> a Loader has
                     * been configured, and the specified value (if non-null) should be
                     * passed as an argument to the class loader constructor.
                     * @param parent The new parent class loader
                     */
                    // @ts-ignore
                    public setParentClassLoader(parent: java.lang.ClassLoader): void
                    /**
                     * Return the Pipeline object that manages the Valves associated with
                     * this Container.
                     */
                    // @ts-ignore
                    public getPipeline(): org.apache.catalina.Pipeline
                    /**
                     * Return the Realm with which this Container is associated.  If there is
                     * no associated Realm, return the Realm associated with our parent
                     * Container (if any); otherwise return <code>null</code>.
                     */
                    // @ts-ignore
                    public getRealm(): org.apache.catalina.Realm
                    // @ts-ignore
                    getRealmInternal(): org.apache.catalina.Realm
                    /**
                     * Set the Realm with which this Container is associated.
                     * @param realm The newly associated Realm
                     */
                    // @ts-ignore
                    public setRealm(realm: org.apache.catalina.Realm): void
                    /**
                     * Add a new child Container to those associated with this Container,
                     * if supported.  Prior to adding this Container to the set of children,
                     * the child's <code>setParent()</code> method must be called, with this
                     * Container as an argument.  This method may thrown an
                     * <code>IllegalArgumentException</code> if this Container chooses not
                     * to be attached to the specified Container, in which case it is not added
                     * @param child New child Container to be added
                     * @exception IllegalArgumentException if this exception is thrown by
                     *   the <code>setParent()</code> method of the child Container
                     * @exception IllegalArgumentException if the new child does not have
                     *   a name unique from that of existing children of this Container
                     * @exception IllegalStateException if this Container does not support
                     *   child Containers
                     */
                    // @ts-ignore
                    public addChild(child: org.apache.catalina.Container): void
                    /**
                     * Add a container event listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addContainerListener(listener: org.apache.catalina.ContainerListener): void
                    /**
                     * Add a property change listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Return the child Container, associated with this Container, with
                     * the specified name (if any); otherwise, return <code>null</code>
                     * @param name Name of the child Container to be retrieved
                     */
                    // @ts-ignore
                    public findChild(name: java.lang.String | string): org.apache.catalina.Container
                    /**
                     * Return the set of children Containers associated with this Container.
                     * If this Container has no children, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findChildren(): org.apache.catalina.Container[]
                    /**
                     * Return the set of container listeners associated with this Container.
                     * If this Container has no registered container listeners, a zero-length
                     * array is returned.
                     */
                    // @ts-ignore
                    public findContainerListeners(): org.apache.catalina.ContainerListener[]
                    /**
                     * Remove an existing child Container from association with this parent
                     * Container.
                     * @param child Existing child Container to be removed
                     */
                    // @ts-ignore
                    public removeChild(child: org.apache.catalina.Container): void
                    /**
                     * Remove a container event listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removeContainerListener(listener: org.apache.catalina.ContainerListener): void
                    /**
                     * Remove a property change listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    initInternal(): void
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
                    destroyInternal(): void
                    /**
                     * Check this container for an access log and if none is found, look to the
                     * parent. If there is no parent and still none is found, use the NoOp
                     * access log.
                     */
                    // @ts-ignore
                    public logAccess(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/, useDefault: boolean): void
                    // @ts-ignore
                    public getAccessLog(): org.apache.catalina.AccessLog
                    /**
                     * Convenience method, intended for use by the digester to simplify the
                     * process of adding Valves to containers. See
                     * {@link Pipeline#addValve(Valve)} for full details. Components other than
                     * the digester should use {@link #getPipeline()}.{@link #addValve(Valve)} in case a
                     * future implementation provides an alternative method for the digester to
                     * use.
                     * @param valve Valve to be added
                     * @exception IllegalArgumentException if this Container refused to
                     *   accept the specified Valve
                     * @exception IllegalArgumentException if the specified Valve refuses to be
                     *   associated with this Container
                     * @exception IllegalStateException if the specified Valve is already
                     *   associated with a different Container
                     */
                    // @ts-ignore
                    public addValve(valve: org.apache.catalina.Valve): void
                    /**
                     * Execute a periodic task, such as reloading, etc. This method will be
                     * invoked inside the classloading context of this container. Unexpected
                     * throwables will be caught and logged.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
                    // @ts-ignore
                    public getCatalinaBase(): java.io.File
                    // @ts-ignore
                    public getCatalinaHome(): java.io.File
                    /**
                     * Notify all container event listeners that a particular event has
                     * occurred for this Container.  The default implementation performs
                     * this notification synchronously using the calling thread.
                     * @param type Event type
                     * @param data Event data
                     */
                    // @ts-ignore
                    public fireContainerEvent(type: java.lang.String | string, data: java.lang.Object | any): void
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    public getMBeanKeyProperties(): string
                    // @ts-ignore
                    public getChildren(): javax.management.ObjectName[]
                    /**
                     * Start the background thread that will periodically check for
                     * session timeouts.
                     */
                    // @ts-ignore
                    threadStart(): void
                    /**
                     * Stop the background thread that is periodically checking for
                     * session timeouts.
                     */
                    // @ts-ignore
                    threadStop(): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
