declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>JNDI object creation factory for <code>MemoryUserDatabase</code>
                 * instances.  This makes it convenient to configure a user database
                 * in the global JNDI resources associated with this Catalina instance,
                 * and then link to that resource for web applications that administer
                 * the contents of the user database.</p>
                 * <p>The <code>MemoryUserDatabase</code> instance is configured based
                 * on the following parameter values:</p>
                 * <ul>
                 * <li><strong>pathname</strong> - Absolute or relative (to the directory
                 * path specified by the <code>catalina.base</code> system property)
                 * pathname to the XML file from which our user information is loaded,
                 * and to which it is stored.  [conf/tomcat-users.xml]</li>
                 * </ul>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class MemoryUserDatabaseFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    /**
                     * <p>Create and return a new <code>MemoryUserDatabase</code> instance
                     * that has been configured according to the properties of the
                     * specified <code>Reference</code>.  If you instance can be created,
                     * return <code>null</code> instead.</p>
                     * @param obj The possibly null object containing location or
                     *   reference information that can be used in creating an object
                     * @param name The name of this object relative to <code>nameCtx</code>
                     * @param nameCtx The context relative to which the <code>name</code>
                     *   parameter is specified, or <code>null</code> if <code>name</code>
                     *   is relative to the default initial context
                     * @param environment The possibly null environment that is used in
                     *   creating this object
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                }
            }
        }
    }
}
