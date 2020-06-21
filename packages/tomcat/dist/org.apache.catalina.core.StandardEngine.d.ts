declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of the <b>Engine</b> interface.  Each
                 * child container must be a Host implementation to process the specific
                 * fully qualified host name of that virtual host. <br>
                 * You can set the jvmRoute direct or with the System.property <b>jvmRoute</b>.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class StandardEngine extends org.apache.catalina.core.ContainerBase implements org.apache.catalina.Engine {
                    /**
                     * Create a new StandardEngine component with the default basic Valve.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtain the configured Realm and provide a default Realm implementation
                     * when no explicit configuration is set.
                     * @return configured realm, or a {#link NullRealm} by default
                     */
                    // @ts-ignore
                    public getRealm(): org.apache.catalina.Realm
                    /**
                     * Return the default host.
                     */
                    // @ts-ignore
                    public getDefaultHost(): string
                    /**
                     * Set the default host.
                     * @param host The new default host
                     */
                    // @ts-ignore
                    public setDefaultHost(host: java.lang.String | string): void
                    /**
                     * Set the cluster-wide unique identifier for this Engine.
                     * This value is only useful in a load-balancing scenario.
                     * <p>
                     * This property should not be changed once it is set.
                     */
                    // @ts-ignore
                    public setJvmRoute(routeId: java.lang.String | string): void
                    /**
                     * Retrieve the cluster-wide unique identifier for this Engine.
                     * This value is only useful in a load-balancing scenario.
                     */
                    // @ts-ignore
                    public getJvmRoute(): string
                    /**
                     * Return the <code>Service</code> with which we are associated (if any).
                     */
                    // @ts-ignore
                    public getService(): org.apache.catalina.Service
                    /**
                     * Set the <code>Service</code> with which we are associated (if any).
                     * @param service The service that owns this Engine
                     */
                    // @ts-ignore
                    public setService(service: org.apache.catalina.Service): void
                    /**
                     * Add a child Container, only if the proposed child is an implementation
                     * of Host.
                     * @param child Child container to be added
                     */
                    // @ts-ignore
                    public addChild(child: org.apache.catalina.Container): void
                    /**
                     * Disallow any attempt to set a parent for this Container, since an
                     * Engine is supposed to be at the top of the Container hierarchy.
                     * @param container Proposed parent Container
                     */
                    // @ts-ignore
                    public setParent(container: org.apache.catalina.Container): void
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
                     * Override the default implementation. If no access log is defined for the
                     * Engine, look for one in the Engine's default host and then the default
                     * host's ROOT context. If still none is found, return the default NoOp
                     * access log.
                     */
                    // @ts-ignore
                    public logAccess(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/, useDefault: boolean): void
                    /**
                     * Return the parent class loader for this component.
                     */
                    // @ts-ignore
                    public getParentClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public getCatalinaBase(): java.io.File
                    // @ts-ignore
                    public getCatalinaHome(): java.io.File
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    // @ts-ignore
                    getDomainInternal(): string
                }
            }
        }
    }
}
