declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Startup event listener for a <b>Host</b> that configures Contexts (web
                 * applications) for all defined "users" who have a web application in a
                 * directory with the specified name in their home directories.  The context
                 * path of each deployed application will be set to <code>~xxxxx</code>, where
                 * xxxxx is the username of the owning user for that web application
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class UserConfig extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * @return the Context configuration class name.
                     */
                    // @ts-ignore
                    public getConfigClass(): string
                    /**
                     * Set the Context configuration class name.
                     * @param configClass The new Context configuration class name.
                     */
                    // @ts-ignore
                    public setConfigClass(configClass: java.lang.String | string): void
                    /**
                     * @return the Context implementation class name.
                     */
                    // @ts-ignore
                    public getContextClass(): string
                    /**
                     * Set the Context implementation class name.
                     * @param contextClass The new Context implementation class name.
                     */
                    // @ts-ignore
                    public setContextClass(contextClass: java.lang.String | string): void
                    /**
                     * @return the directory name for user web applications.
                     */
                    // @ts-ignore
                    public getDirectoryName(): string
                    /**
                     * Set the directory name for user web applications.
                     * @param directoryName The new directory name
                     */
                    // @ts-ignore
                    public setDirectoryName(directoryName: java.lang.String | string): void
                    /**
                     * @return the base directory containing user home directories.
                     */
                    // @ts-ignore
                    public getHomeBase(): string
                    /**
                     * Set the base directory containing user home directories.
                     * @param homeBase The new base directory
                     */
                    // @ts-ignore
                    public setHomeBase(homeBase: java.lang.String | string): void
                    /**
                     * @return the user database class name for this component.
                     */
                    // @ts-ignore
                    public getUserClass(): string
                    /**
                     * Set the user database class name for this component.
                     * @param userClass The user database class name
                     */
                    // @ts-ignore
                    public setUserClass(userClass: java.lang.String | string): void
                    /**
                     * @return the regular expression used to test for user who deployment is allowed.
                     */
                    // @ts-ignore
                    public getAllow(): string
                    /**
                     * Set the regular expression used to test for user who deployment is allowed.
                     * @param allow The new allow expression
                     */
                    // @ts-ignore
                    public setAllow(allow: java.lang.String | string): void
                    /**
                     * @return the regular expression used to test for user who deployment is denied.
                     */
                    // @ts-ignore
                    public getDeny(): string
                    /**
                     * Set the regular expression used to test for user who deployment is denied.
                     * @param deny The new deny expression
                     */
                    // @ts-ignore
                    public setDeny(deny: java.lang.String | string): void
                    /**
                     * Process the START event for an associated Host.
                     * @param event The lifecycle event that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                }
            }
        }
    }
}
