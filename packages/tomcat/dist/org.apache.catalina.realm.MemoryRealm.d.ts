declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Simple implementation of <b>Realm</b> that reads an XML file to configure
                 * the valid users, passwords, and roles.  The file format (and default file
                 * location) are identical to those currently supported by Tomcat 3.X.
                 * <p>
                 * <strong>IMPLEMENTATION NOTE</strong>: It is assumed that the in-memory
                 * collection representing our defined users (and their roles) is initialized
                 * at application startup and never modified again.  Therefore, no thread
                 * synchronization is performed around accesses to the principals collection.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class MemoryRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * @return the pathname of our XML file containing user definitions.
                     */
                    // @ts-ignore
                    public getPathname(): string
                    /**
                     * Set the pathname of our XML file containing user definitions.  If a
                     * relative pathname is specified, it is resolved against "catalina.base".
                     * @param pathname The new pathname
                     */
                    // @ts-ignore
                    public setPathname(pathname: java.lang.String | string): void
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * @return a configured <code>Digester</code> to use for processing
                     *  the XML input file, creating a new one if necessary.
                     */
                    // @ts-ignore
                    getDigester(): org.apache.tomcat.util.digester.Digester
                    /**
                     * @return the password associated with the given principal's user name.
                     */
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    /**
                     * @return the Principal associated with the given user name.
                     */
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    /**
                     * Prepare for the beginning of active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                }
            }
        }
    }
}
