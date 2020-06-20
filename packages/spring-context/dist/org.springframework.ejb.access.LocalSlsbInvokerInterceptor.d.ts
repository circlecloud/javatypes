declare namespace org {
    namespace springframework {
        namespace ejb {
            namespace access {
                /**
                 * Invoker for a local Stateless Session Bean.
                 * Designed for EJB 2.x, but works for EJB 3 Session Beans as well.
                 * <p>Caches the home object, since a local EJB home can never go stale.
                 * See {@link org.springframework.jndi.JndiObjectLocator} for info on
                 * how to specify the JNDI location of the target EJB.
                 * <p>In a bean container, this class is normally best used as a singleton. However,
                 * if that bean container pre-instantiates singletons (as do the XML ApplicationContext
                 * variants) you may have a problem if the bean container is loaded before the EJB
                 * container loads the target EJB. That is because by default the JNDI lookup will be
                 * performed in the init method of this class and cached, but the EJB will not have been
                 * bound at the target location yet. The best solution is to set the lookupHomeOnStartup
                 * property to false, in which case the home will be fetched on first access to the EJB.
                 * (This flag is only true by default for backwards compatibility reasons).
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see AbstractSlsbInvokerInterceptor#setLookupHomeOnStartup
                 * @see AbstractSlsbInvokerInterceptor#setCacheHome
                 */
                // @ts-ignore
                class LocalSlsbInvokerInterceptor extends org.springframework.ejb.access.AbstractSlsbInvokerInterceptor {
                    // @ts-ignore
                    constructor()
                    /**
                     * This implementation "creates" a new EJB instance for each invocation.
                     * Can be overridden for custom invocation strategies.
                     * <p>Alternatively, override {@link #getSessionBeanInstance} and
                     * {@link #releaseSessionBeanInstance} to change EJB instance creation,
                     * for example to hold a single shared EJB instance.
                     */
                    // @ts-ignore
                    invokeInContext(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Check for EJB3-style home object that serves as EJB component directly.
                     */
                    // @ts-ignore
                    getCreateMethod(home: any): java.lang.reflect.Method
                    /**
                     * Return an EJB instance to delegate the call to.
                     * Default implementation delegates to newSessionBeanInstance.
                     * @throws NamingException if thrown by JNDI
                     * @throws InvocationTargetException if thrown by the create method
                     * @see #newSessionBeanInstance
                     */
                    // @ts-ignore
                    getSessionBeanInstance(): java.lang.Object
                    /**
                     * Release the given EJB instance.
                     * Default implementation delegates to removeSessionBeanInstance.
                     * @param ejb the EJB instance to release
                     * @see #removeSessionBeanInstance
                     */
                    // @ts-ignore
                    releaseSessionBeanInstance(ejb: EJBLocalObject): void
                    /**
                     * Return a new instance of the stateless session bean.
                     * Can be overridden to change the algorithm.
                     * @throws NamingException if thrown by JNDI
                     * @throws InvocationTargetException if thrown by the create method
                     * @see #create
                     */
                    // @ts-ignore
                    newSessionBeanInstance(): java.lang.Object
                    /**
                     * Remove the given EJB instance.
                     * @param ejb the EJB instance to remove
                     * @see javax.ejb.EJBLocalObject#remove()
                     */
                    // @ts-ignore
                    removeSessionBeanInstance(ejb: EJBLocalObject): void
                }
            }
        }
    }
}
