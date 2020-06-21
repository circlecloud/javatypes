declare namespace org {
    namespace apache {
        namespace catalina {
            namespace security {
                // @ts-ignore
                class SecurityListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    /**
                     * Set the list of operating system users not permitted to run Tomcat. By
                     * default, only root is prevented from running Tomcat. Calling this method
                     * with null or the empty string will clear the list of users and
                     * effectively disables this check. User names will always be checked in a
                     * case insensitive manner using the system default Locale.
                     * @param userNameList  A comma separated list of operating system users not
                     *                       permitted to run Tomcat
                     */
                    // @ts-ignore
                    public setCheckedOsUsers(userNameList: java.lang.String | string): void
                    /**
                     * Returns the current list of operating system users not permitted to run
                     * Tomcat.
                     * @return A comma separated list of operating system user names.
                     */
                    // @ts-ignore
                    public getCheckedOsUsers(): string
                    /**
                     * Set the minimum umask that must be configured before Tomcat will start.
                     * @param umask The 4-digit umask as returned by the OS command <i>umask</i>
                     */
                    // @ts-ignore
                    public setMinimumUmask(umask: java.lang.String | string): void
                    /**
                     * Get the minimum umask that must be configured before Tomcat will start.
                     * @return The 4-digit umask as used by the OS command <i>umask</i>
                     */
                    // @ts-ignore
                    public getMinimumUmask(): string
                    /**
                     * Execute the security checks. Each check should be in a separate method.
                     */
                    // @ts-ignore
                    doChecks(): void
                    // @ts-ignore
                    checkOsUser(): void
                    // @ts-ignore
                    checkUmask(): void
                }
            }
        }
    }
}
