declare namespace org {
    namespace springframework {
        namespace ejb {
            namespace access {
                /**
                 * Base class for AOP interceptors invoking local or remote Stateless Session Beans.
                 * Designed for EJB 2.x, but works for EJB 3 Session Beans as well.
                 * <p>Such an interceptor must be the last interceptor in the advice chain.
                 * In this case, there is no direct target object: The call is handled in a
                 * special way, getting executed on an EJB instance retrieved via an EJB home.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class AbstractSlsbInvokerInterceptor extends org.springframework.jndi.JndiObjectLocator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether to look up the EJB home object on startup.
                     * Default is "true".
                     * <p>Can be turned off to allow for late start of the EJB server.
                     * In this case, the EJB home object will be fetched on first access.
                     * @see #setCacheHome
                     */
                    // @ts-ignore
                    setLookupHomeOnStartup(lookupHomeOnStartup: boolean): void
                    /**
                     * Set whether to cache the EJB home object once it has been located.
                     * Default is "true".
                     * <p>Can be turned off to allow for hot restart of the EJB server.
                     * In this case, the EJB home object will be fetched for each invocation.
                     * @see #setLookupHomeOnStartup
                     */
                    // @ts-ignore
                    setCacheHome(cacheHome: boolean): void
                    /**
                     * Set whether to expose the JNDI environment context for all access to the target
                     * EJB, i.e. for all method invocations on the exposed object reference.
                     * <p>Default is "false", i.e. to only expose the JNDI context for object lookup.
                     * Switch this flag to "true" in order to expose the JNDI environment (including
                     * the authorization context) for each EJB invocation, as needed by WebLogic
                     * for EJBs with authorization requirements.
                     */
                    // @ts-ignore
                    setExposeAccessContext(exposeAccessContext: boolean): void
                    /**
                     * Fetches EJB home on startup, if necessary.
                     * @see #setLookupHomeOnStartup
                     * @see #refreshHome
                     */
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Refresh the cached home object, if applicable.
                     * Also caches the create method on the home object.
                     * @throws NamingException if thrown by the JNDI lookup
                     * @see #lookup
                     * @see #getCreateMethod
                     */
                    // @ts-ignore
                    refreshHome(): void
                    /**
                     * Determine the create method of the given EJB home object.
                     * @param home the EJB home object
                     * @return the create method
                     * @throws EjbAccessException if the method couldn't be retrieved
                     */
                    // @ts-ignore
                    getCreateMethod(home: any): java.lang.reflect.Method
                    /**
                     * Return the EJB home object to use. Called for each invocation.
                     * <p>Default implementation returns the home created on initialization,
                     * if any; else, it invokes lookup to get a new proxy for each invocation.
                     * <p>Can be overridden in subclasses, for example to cache a home object
                     * for a given amount of time before recreating it, or to test the home
                     * object whether it is still alive.
                     * @return the EJB home object to use for an invocation
                     * @throws NamingException if proxy creation failed
                     * @see #lookup
                     * @see #getCreateMethod
                     */
                    // @ts-ignore
                    getHome(): java.lang.Object
                    /**
                     * Return whether the cached EJB home object is potentially
                     * subject to on-demand refreshing. Default is "false".
                     */
                    // @ts-ignore
                    isHomeRefreshable(): boolean
                    /**
                     * Prepares the thread context if necessary, and delegates to
                     * {@link #invokeInContext}.
                     */
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Perform the given invocation on the current EJB home,
                     * within the thread context being prepared accordingly.
                     * Template method to be implemented by subclasses.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     */
                    // @ts-ignore
                    abstract invokeInContext(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Invokes the {@code create()} method on the cached EJB home object.
                     * @return a new EJBObject or EJBLocalObject
                     * @throws NamingException if thrown by JNDI
                     * @throws InvocationTargetException if thrown by the create method
                     */
                    // @ts-ignore
                    create(): java.lang.Object
                }
            }
        }
    }
}
