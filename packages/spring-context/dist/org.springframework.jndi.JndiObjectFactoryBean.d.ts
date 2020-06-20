declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * {@link org.springframework.beans.factory.FactoryBean} that looks up a
             * JNDI object. Exposes the object found in JNDI for bean references,
             * e.g. for data access object's "dataSource" property in case of a
             * {@link javax.sql.DataSource}.
             * <p>The typical usage will be to register this as singleton factory
             * (e.g. for a certain JNDI-bound DataSource) in an application context,
             * and give bean references to application services that need it.
             * <p>The default behavior is to look up the JNDI object on startup and cache it.
             * This can be customized through the "lookupOnStartup" and "cache" properties,
             * using a {@link JndiObjectTargetSource} underneath. Note that you need to specify
             * a "proxyInterface" in such a scenario, since the actual JNDI object type is not
             * known in advance.
             * <p>Of course, bean classes in a Spring environment may lookup e.g. a DataSource
             * from JNDI themselves. This class simply enables central configuration of the
             * JNDI name, and easy switching to non-JNDI alternatives. The latter is
             * particularly convenient for test setups, reuse in standalone clients, etc.
             * <p>Note that switching to e.g. DriverManagerDataSource is just a matter of
             * configuration: Simply replace the definition of this FactoryBean with a
             * {@link org.springframework.jdbc.datasource.DriverManagerDataSource} definition!
             * @author Juergen Hoeller
             * @since 22.05.2003
             * @see #setProxyInterface
             * @see #setLookupOnStartup
             * @see #setCache
             * @see JndiObjectTargetSource
             */
            // @ts-ignore
            class JndiObjectFactoryBean extends org.springframework.jndi.JndiObjectLocator {
                // @ts-ignore
                constructor()
                /**
                 * Specify the proxy interface to use for the JNDI object.
                 * <p>Typically used in conjunction with "lookupOnStartup"=false and/or "cache"=false.
                 * Needs to be specified because the actual JNDI object type is not known
                 * in advance in case of a lazy lookup.
                 * @see #setProxyInterfaces
                 * @see #setLookupOnStartup
                 * @see #setCache
                 */
                // @ts-ignore
                setProxyInterface(proxyInterface: java.lang.Class<any>): void
                /**
                 * Specify multiple proxy interfaces to use for the JNDI object.
                 * <p>Typically used in conjunction with "lookupOnStartup"=false and/or "cache"=false.
                 * Note that proxy interfaces will be autodetected from a specified "expectedType",
                 * if necessary.
                 * @see #setExpectedType
                 * @see #setLookupOnStartup
                 * @see #setCache
                 */
                // @ts-ignore
                setProxyInterfaces(...proxyInterfaces: java.lang.Class[]): void
                /**
                 * Set whether to look up the JNDI object on startup. Default is "true".
                 * <p>Can be turned off to allow for late availability of the JNDI object.
                 * In this case, the JNDI object will be fetched on first access.
                 * <p>For a lazy lookup, a proxy interface needs to be specified.
                 * @see #setProxyInterface
                 * @see #setCache
                 */
                // @ts-ignore
                setLookupOnStartup(lookupOnStartup: boolean): void
                /**
                 * Set whether to cache the JNDI object once it has been located.
                 * Default is "true".
                 * <p>Can be turned off to allow for hot redeployment of JNDI objects.
                 * In this case, the JNDI object will be fetched for each invocation.
                 * <p>For hot redeployment, a proxy interface needs to be specified.
                 * @see #setProxyInterface
                 * @see #setLookupOnStartup
                 */
                // @ts-ignore
                setCache(cache: boolean): void
                /**
                 * Set whether to expose the JNDI environment context for all access to the target
                 * object, i.e. for all method invocations on the exposed object reference.
                 * <p>Default is "false", i.e. to only expose the JNDI context for object lookup.
                 * Switch this flag to "true" in order to expose the JNDI environment (including
                 * the authorization context) for each method invocation, as needed by WebLogic
                 * for JNDI-obtained factories (e.g. JDBC DataSource, JMS ConnectionFactory)
                 * with authorization requirements.
                 */
                // @ts-ignore
                setExposeAccessContext(exposeAccessContext: boolean): void
                /**
                 * Specify a default object to fall back to if the JNDI lookup fails.
                 * Default is none.
                 * <p>This can be an arbitrary bean reference or literal value.
                 * It is typically used for literal values in scenarios where the JNDI environment
                 * might define specific config settings but those are not required to be present.
                 * <p>Note: This is only supported for lookup on startup.
                 * If specified together with {@link #setExpectedType}, the specified value
                 * needs to be either of that type or convertible to it.
                 * @see #setLookupOnStartup
                 * @see ConfigurableBeanFactory#getTypeConverter()
                 * @see SimpleTypeConverter
                 */
                // @ts-ignore
                setDefaultObject(defaultObject: any): void
                // @ts-ignore
                setBeanFactory(beanFactory: BeanFactory): void
                // @ts-ignore
                setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                /**
                 * Look up the JNDI object and store it.
                 */
                // @ts-ignore
                afterPropertiesSet(): void
                /**
                 * Lookup variant that returns the specified "defaultObject"
                 * (if any) in case of lookup failure.
                 * @return the located object, or the "defaultObject" as fallback
                 * @throws NamingException in case of lookup failure without fallback
                 * @see #setDefaultObject
                 */
                // @ts-ignore
                lookupWithFallback(): java.lang.Object
                /**
                 * Return the singleton JNDI object.
                 */
                // @ts-ignore
                getObject(): java.lang.Object
                // @ts-ignore
                getObjectType(): java.lang.Class<?>
                // @ts-ignore
                isSingleton(): boolean
                /**
                 * Create a composite interface Class for the given interfaces,
                 * implementing the given interfaces in one single Class.
                 * <p>The default implementation builds a JDK proxy class for the
                 * given interfaces.
                 * @param interfaces the interfaces to merge
                 * @return the merged interface as Class
                 * @see java.lang.reflect.Proxy#getProxyClass
                 */
                // @ts-ignore
                createCompositeInterface(interfaces: java.lang.Class[]): java.lang.Class<?>
            }
        }
    }
}
