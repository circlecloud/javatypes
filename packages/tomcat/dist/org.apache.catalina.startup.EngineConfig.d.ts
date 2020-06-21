declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Startup event listener for a <b>Engine</b> that configures the properties
                 * of that Engine, and the associated defined contexts.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class EngineConfig extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The Engine we are associated with.
                     */
                    // @ts-ignore
                    engine: org.apache.catalina.Engine
                    /**
                     * The string resources for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Process the START event for an associated Engine.
                     * @param event The lifecycle event that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    /**
                     * Process a "start" event for this Engine.
                     */
                    // @ts-ignore
                    start(): void
                    /**
                     * Process a "stop" event for this Engine.
                     */
                    // @ts-ignore
                    stop(): void
                }
            }
        }
    }
}
