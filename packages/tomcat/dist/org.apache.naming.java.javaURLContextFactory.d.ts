declare namespace org {
    namespace apache {
        namespace naming {
            namespace java {
                /**
                 * Context factory for the "java:" namespace.
                 * <p>
                 * <b>Important note</b> : This factory MUST be associated with the "java" URL
                 * prefix, which can be done by either :
                 * <ul>
                 * <li>Adding a
                 * java.naming.factory.url.pkgs=org.apache.naming property
                 * to the JNDI properties file</li>
                 * <li>Setting an environment variable named Context.URL_PKG_PREFIXES with
                 * its value including the org.apache.naming package name.
                 * More detail about this can be found in the JNDI documentation :
                 * {@link javax.naming.spi.NamingManager#getURLContext(java.lang.String, java.util.Hashtable)}.</li>
                 * </ul>
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class javaURLContextFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory, javax.naming.spi.InitialContextFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly MAIN: java.lang.String | string
                    /**
                     * Initial context.
                     */
                    // @ts-ignore
                    static initialContext: javax.naming.Context
                    /**
                     * Crete a new Context's instance.
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                    /**
                     * Get a new (writable) initial context.
                     */
                    // @ts-ignore
                    public getInitialContext(environment: java.util.Hashtable<any, any>): javax.naming.Context
                }
            }
        }
    }
}
