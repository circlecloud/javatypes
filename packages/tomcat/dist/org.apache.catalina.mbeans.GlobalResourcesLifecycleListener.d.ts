declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * Implementation of <code>LifecycleListener</code> that instantiates the
                 * set of MBeans associated with global JNDI resources that are subject to
                 * management.
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class GlobalResourcesLifecycleListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The owning Catalina component that we are attached to.
                     */
                    // @ts-ignore
                    component: org.apache.catalina.Lifecycle
                    /**
                     * The configuration information registry for our managed beans.
                     */
                    // @ts-ignore
                    static readonly registry: org.apache.tomcat.util.modeler.Registry
                    /**
                     * Primary entry point for startup and shutdown events.
                     * @param event The event that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    /**
                     * Create the MBeans for the interesting global JNDI resources.
                     */
                    // @ts-ignore
                    createMBeans(): void
                    /**
                     * Create the MBeans for the interesting global JNDI resources in
                     * the specified naming context.
                     * @param prefix Prefix for complete object name paths
                     * @param context Context to be scanned
                     * @exception NamingException if a JNDI exception occurs
                     */
                    // @ts-ignore
                    createMBeans(prefix: java.lang.String | string, context: javax.naming.Context): void
                    /**
                     * Create the MBeans for the specified UserDatabase and its contents.
                     * @param name Complete resource name of this UserDatabase
                     * @param database The UserDatabase to be processed
                     * @exception Exception if an exception occurs while creating MBeans
                     */
                    // @ts-ignore
                    createMBeans(name: java.lang.String | string, database: org.apache.catalina.UserDatabase): void
                    /**
                     * Destroy the MBeans for the interesting global JNDI resources.
                     */
                    // @ts-ignore
                    destroyMBeans(): void
                }
            }
        }
    }
}
