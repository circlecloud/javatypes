declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Standard implementation of a processing <b>Pipeline</b> that will invoke
                 * a series of Valves that have been configured to be called in order.  This
                 * implementation can be used for any type of Container.
                 * <b>IMPLEMENTATION WARNING</b> - This implementation assumes that no
                 * calls to <code>addValve()</code> or <code>removeValve</code> are allowed
                 * while a request is currently being processed.  Otherwise, the mechanism
                 * by which per-thread state is maintained will need to be modified.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class StandardPipeline extends org.apache.catalina.util.LifecycleBase implements org.apache.catalina.Pipeline {
                    /**
                     * Construct a new StandardPipeline instance with no associated Container.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new StandardPipeline instance that is associated with the
                     * specified Container.
                     * @param container The container we should be associated with
                     */
                    // @ts-ignore
                    constructor(container: org.apache.catalina.Container)
                    /**
                     * The basic Valve (if any) associated with this Pipeline.
                     */
                    // @ts-ignore
                    basic: org.apache.catalina.Valve
                    /**
                     * The Container with which this Pipeline is associated.
                     */
                    // @ts-ignore
                    container: org.apache.catalina.Container
                    /**
                     * The first valve associated with this Pipeline.
                     */
                    // @ts-ignore
                    first: org.apache.catalina.Valve
                    // @ts-ignore
                    public isAsyncSupported(): boolean
                    // @ts-ignore
                    public findNonAsyncValves(result: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                    /**
                     * Return the Container with which this Pipeline is associated.
                     */
                    // @ts-ignore
                    public getContainer(): org.apache.catalina.Container
                    /**
                     * Set the Container with which this Pipeline is associated.
                     * @param container The new associated container
                     */
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * Start {@link Valve}s) in this pipeline and implement the requirements
                     * of {@link LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop {@link Valve}s) in this pipeline and implement the requirements
                     * of {@link LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                    /**
                     * Return a String representation of this component.
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * <p>Return the Valve instance that has been distinguished as the basic
                     * Valve for this Pipeline (if any).
                     */
                    // @ts-ignore
                    public getBasic(): org.apache.catalina.Valve
                    /**
                     * <p>Set the Valve instance that has been distinguished as the basic
                     * Valve for this Pipeline (if any).  Prior to setting the basic Valve,
                     * the Valve's <code>setContainer()</code> will be called, if it
                     * implements <code>Contained</code>, with the owning Container as an
                     * argument.  The method may throw an <code>IllegalArgumentException</code>
                     * if this Valve chooses not to be associated with this Container, or
                     * <code>IllegalStateException</code> if it is already associated with
                     * a different Container.</p>
                     * @param valve Valve to be distinguished as the basic Valve
                     */
                    // @ts-ignore
                    public setBasic(valve: org.apache.catalina.Valve): void
                    /**
                     * <p>Add a new Valve to the end of the pipeline associated with this
                     * Container.  Prior to adding the Valve, the Valve's
                     * <code>setContainer()</code> method will be called, if it implements
                     * <code>Contained</code>, with the owning Container as an argument.
                     * The method may throw an
                     * <code>IllegalArgumentException</code> if this Valve chooses not to
                     * be associated with this Container, or <code>IllegalStateException</code>
                     * if it is already associated with a different Container.</p>
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
                     * Return the set of Valves in the pipeline associated with this
                     * Container, including the basic Valve (if any).  If there are no
                     * such Valves, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public getValves(): org.apache.catalina.Valve[]
                    // @ts-ignore
                    public getValveObjectNames(): javax.management.ObjectName[]
                    /**
                     * Remove the specified Valve from the pipeline associated with this
                     * Container, if it is found; otherwise, do nothing.  If the Valve is
                     * found and removed, the Valve's <code>setContainer(null)</code> method
                     * will be called if it implements <code>Contained</code>.
                     * @param valve Valve to be removed
                     */
                    // @ts-ignore
                    public removeValve(valve: org.apache.catalina.Valve): void
                    // @ts-ignore
                    public getFirst(): org.apache.catalina.Valve
                }
            }
        }
    }
}
