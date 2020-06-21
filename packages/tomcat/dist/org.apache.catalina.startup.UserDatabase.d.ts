declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Abstraction of the set of users defined by the operating system on the
                 * current server platform.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                interface UserDatabase {
                    /**
                     * @return the UserConfig listener with which we are associated.
                     */
                    // @ts-ignore
                    getUserConfig(): org.apache.catalina.startup.UserConfig
                    /**
                     * Set the UserConfig listener with which we are associated.
                     * @param userConfig The new UserConfig listener
                     */
                    // @ts-ignore
                    setUserConfig(userConfig: org.apache.catalina.startup.UserConfig): void
                    /**
                     * @return an absolute pathname to the home directory for the specified user.
                     * @param user User for which a home directory should be retrieved
                     */
                    // @ts-ignore
                    getHome(user: java.lang.String | string): string
                    /**
                     * @return an enumeration of the usernames defined on this server.
                     */
                    // @ts-ignore
                    getUsers(): java.util.Enumeration<java.lang.String | string>
                }
            }
        }
    }
}
