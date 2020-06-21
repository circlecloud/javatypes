declare namespace org {
    namespace springframework {
        namespace ejb {
            namespace access {
                /**
                 * Basic invoker for a remote Stateless Session Bean.
                 * Designed for EJB 2.x, but works for EJB 3 Session Beans as well.
                 * <p>"Creates" a new EJB instance for each invocation, or caches the session
                 * bean instance for all invocations (see {@link #setCacheSessionBean}).
                 * See {@link org.springframework.jndi.JndiObjectLocator} for info on
                 * how to specify the JNDI location of the target EJB.
                 * <p>In a bean container, this class is normally best used as a singleton. However,
                 * if that bean container pre-instantiates singletons (as do the XML ApplicationContext
                 * variants) you may have a problem if the bean container is loaded before the EJB
                 * container loads the target EJB. That is because by default the JNDI lookup will be
                 * performed in the init method of this class and cached, but the EJB will not have been
                 * bound at the target location yet. The best solution is to set the "lookupHomeOnStartup"
                 * property to "false", in which case the home will be fetched on first access to the EJB.
                 * (This flag is only true by default for backwards compatibility reasons).
                 * <p>This invoker is typically used with an RMI business interface, which serves
                 * as super-interface of the EJB component interface. Alternatively, this invoker
                 * can also proxy a remote SLSB with a matching non-RMI business interface, i.e. an
                 * interface that mirrors the EJB business methods but does not declare RemoteExceptions.
                 * In the latter case, RemoteExceptions thrown by the EJB stub will automatically get
                 * converted to Spring's unchecked RemoteAccessException.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since 09.05.2003
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see AbstractSlsbInvokerInterceptor#setLookupHomeOnStartup
                 * @see AbstractSlsbInvokerInterceptor#setCacheHome
                 * @see AbstractRemoteSlsbInvokerInterceptor#setRefreshHomeOnConnectFailure
                 */
                // @ts-ignore
                class SimpleRemoteSlsbInvokerInterceptor extends org.springframework.ejb.access.AbstractRemoteSlsbInvokerInterceptor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether to cache the actual session bean object.
                     * <p>Off by default for standard EJB compliance. Turn this flag
                     * on to optimize session bean access for servers that are
                     * known to allow for caching the actual session bean object.
                     * @see #setCacheHome
                     */
                    // @ts-ignore
                    public setCacheSessionBean(cacheSessionBean: boolean): void
                    /**
                     * This implementation "creates" a new EJB instance for each invocation.
                     * Can be overridden for custom invocation strategies.
                     * <p>Alternatively, override {@link #getSessionBeanInstance} and
                     * {@link #releaseSessionBeanInstance} to change EJB instance creation,
                     * for example to hold a single shared EJB component instance.
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation): any
                    /**
                     * Return an EJB component instance to delegate the call to.
                     * <p>The default implementation delegates to {@link #newSessionBeanInstance}.
                     * @return the EJB component instance
                     * @throws NamingException if thrown by JNDI
                     * @throws InvocationTargetException if thrown by the create method
                     * @see #newSessionBeanInstance
                     */
                    // @ts-ignore
                    getSessionBeanInstance(): any
                    /**
                     * Release the given EJB instance.
                     * <p>The default implementation delegates to {@link #removeSessionBeanInstance}.
                     * @param ejb the EJB component instance to release
                     * @see #removeSessionBeanInstance
                     */
                    // @ts-ignore
                    releaseSessionBeanInstance(ejb: EJBObject): void
                    /**
                     * Reset the cached session bean instance, if necessary.
                     */
                    // @ts-ignore
                    refreshHome(): void
                    /**
                     * Remove the cached session bean instance, if necessary.
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
