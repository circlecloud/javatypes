declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Concrete implementation of the <code>UserDatabase</code> interface
                 * considers all directories in a directory whose pathname is specified
                 * to our constructor to be "home" directories for those users.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class HomesUserDatabase extends java.lang.Object implements org.apache.catalina.startup.UserDatabase {
                    /**
                     * Initialize a new instance of this user database component.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the UserConfig listener with which we are associated.
                     */
                    // @ts-ignore
                    public getUserConfig(): org.apache.catalina.startup.UserConfig
                    /**
                     * Set the UserConfig listener with which we are associated.
                     * @param userConfig The new UserConfig listener
                     */
                    // @ts-ignore
                    public setUserConfig(userConfig: org.apache.catalina.startup.UserConfig): void
                    /**
                     * Return an absolute pathname to the home directory for the specified user.
                     * @param user User for which a home directory should be retrieved
                     */
                    // @ts-ignore
                    public getHome(user: java.lang.String | string): string
                    /**
                     * Return an enumeration of the usernames defined on this server.
                     */
                    // @ts-ignore
                    public getUsers(): java.util.Enumeration<java.lang.String | string>
                }
            }
        }
    }
}
