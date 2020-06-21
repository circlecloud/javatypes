declare namespace org {
    namespace springframework {
        namespace ejb {
            namespace access {
                /**
                 * Convenient {@link FactoryBean} for local Stateless Session Bean (SLSB) proxies.
                 * Designed for EJB 2.x, but works for EJB 3 Session Beans as well.
                 * <p>See {@link org.springframework.jndi.JndiObjectLocator} for info on
                 * how to specify the JNDI location of the target EJB.
                 * <p>If you want control over interceptor chaining, use an AOP ProxyFactoryBean
                 * with LocalSlsbInvokerInterceptor rather than rely on this class.
                 * <p>In a bean container, this class is normally best used as a singleton. However,
                 * if that bean container pre-instantiates singletons (as do the XML ApplicationContext
                 * variants) you may have a problem if the bean container is loaded before the EJB
                 * container loads the target EJB. That is because by default the JNDI lookup will be
                 * performed in the init method of this class and cached, but the EJB will not have been
                 * bound at the target location yet. The best solution is to set the "lookupHomeOnStartup"
                 * property to "false", in which case the home will be fetched on first access to the EJB.
                 * (This flag is only true by default for backwards compatibility reasons).
                 * @author Rod Johnson
                 * @author Colin Sampaleanu
                 * @since 09.05.2003
                 * @see AbstractSlsbInvokerInterceptor#setLookupHomeOnStartup
                 * @see AbstractSlsbInvokerInterceptor#setCacheHome
                 */
                // @ts-ignore
                class LocalStatelessSessionProxyFactoryBean extends org.springframework.ejb.access.LocalSlsbInvokerInterceptor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the business interface of the EJB we're proxying.
                     * This will normally be a super-interface of the EJB local component interface.
                     * Using a business methods interface is a best practice when implementing EJBs.
                     * @param businessInterface set the business interface of the EJB
                     */
                    // @ts-ignore
                    public setBusinessInterface(businessInterface: java.lang.Class<any>): void
                    /**
                     * Return the business interface of the EJB we're proxying.
                     */
                    // @ts-ignore
                    public getBusinessInterface(): java.lang.Class<any>
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): any
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
