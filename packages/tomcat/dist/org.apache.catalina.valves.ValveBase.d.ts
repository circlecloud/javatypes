declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * Convenience base class for implementations of the <b>Valve</b> interface.
                 * A subclass <strong>MUST</strong> implement an <code>invoke()</code>
                 * method to provide the required functionality, and <strong>MAY</strong>
                 * implement the <code>Lifecycle</code> interface to provide configuration
                 * management and lifecycle support.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class ValveBase extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Contained, org.apache.catalina.Valve {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(asyncSupported: boolean)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Does this valve support Servlet 3+ async requests?
                     */
                    // @ts-ignore
                    asyncSupported: boolean
                    /**
                     * The Container whose pipeline this Valve is a component of.
                     */
                    // @ts-ignore
                    container: org.apache.catalina.Container
                    /**
                     * Container log
                     */
                    // @ts-ignore
                    containerLog: org.apache.juli.logging.Log
                    /**
                     * The next Valve in the pipeline this Valve is a component of.
                     */
                    // @ts-ignore
                    next: org.apache.catalina.Valve
                    /**
                     * Return the Container with which this Valve is associated, if any.
                     */
                    // @ts-ignore
                    public getContainer(): org.apache.catalina.Container
                    /**
                     * Set the Container with which this Valve is associated, if any.
                     * @param container The new associated container
                     */
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
                    // @ts-ignore
                    public isAsyncSupported(): boolean
                    // @ts-ignore
                    public setAsyncSupported(asyncSupported: boolean): void
                    /**
                     * Return the next Valve in this pipeline, or <code>null</code> if this
                     * is the last Valve in the pipeline.
                     */
                    // @ts-ignore
                    public getNext(): org.apache.catalina.Valve
                    /**
                     * Set the Valve that follows this one in the pipeline it is part of.
                     * @param valve The new next valve
                     */
                    // @ts-ignore
                    public setNext(valve: org.apache.catalina.Valve): void
                    /**
                     * Execute a periodic task, such as reloading, etc. This method will be
                     * invoked inside the classloading context of this container. Unexpected
                     * throwables will be caught and logged.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
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
                    /**
                     * Return a String rendering of this object.
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public getObjectNameKeyProperties(): string
                    // @ts-ignore
                    public getDomainInternal(): string
                }
            }
        }
    }
}
