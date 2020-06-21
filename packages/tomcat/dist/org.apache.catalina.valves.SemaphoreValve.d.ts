declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * <p>Implementation of a Valve that limits concurrency.</p>
                 * <p>This Valve may be attached to any Container, depending on the granularity
                 * of the concurrency control you wish to perform. Note that internally, some
                 * async requests may require multiple serial requests to complete what - to the
                 * user - appears as a single request.</p>
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class SemaphoreValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Semaphore.
                     */
                    // @ts-ignore
                    semaphore: java.util.concurrent.Semaphore
                    /**
                     * Concurrency level of the semaphore.
                     */
                    // @ts-ignore
                    concurrency: number /*int*/
                    /**
                     * Fairness of the semaphore.
                     */
                    // @ts-ignore
                    fairness: boolean
                    /**
                     * Block until a permit is available.
                     */
                    // @ts-ignore
                    block: boolean
                    /**
                     * Block interruptibly until a permit is available.
                     */
                    // @ts-ignore
                    interruptible: boolean
                    // @ts-ignore
                    public getConcurrency(): number /*int*/
                    // @ts-ignore
                    public setConcurrency(concurrency: number /*int*/): void
                    // @ts-ignore
                    public getFairness(): boolean
                    // @ts-ignore
                    public setFairness(fairness: boolean): void
                    // @ts-ignore
                    public getBlock(): boolean
                    // @ts-ignore
                    public setBlock(block: boolean): void
                    // @ts-ignore
                    public getInterruptible(): boolean
                    // @ts-ignore
                    public setInterruptible(interruptible: boolean): void
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
                     * Do concurrency control on the request using the semaphore.
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be created
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    /**
                     * Subclass friendly method to add conditions.
                     * @param request The Servlet request
                     * @param response The Servlet response
                     * @return <code>true</code> if the concurrency control should occur
                     *   on this request
                     */
                    // @ts-ignore
                    public controlConcurrency(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): boolean
                    /**
                     * Subclass friendly method to add error handling when a permit isn't
                     * granted.
                     * @param request The Servlet request
                     * @param response The Servlet response
                     * @throws IOException Error writing output
                     * @throws ServletException Other error
                     */
                    // @ts-ignore
                    public permitDenied(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                }
            }
        }
    }
}
