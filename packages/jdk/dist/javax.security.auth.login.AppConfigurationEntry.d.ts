declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                /**
                 * This class represents a single {@code LoginModule} entry
                 * configured for the application specified in the
                 * {@code getAppConfigurationEntry(String appName)}
                 * method in the {@code Configuration} class.  Each respective
                 * {@code AppConfigurationEntry} contains a {@code LoginModule} name,
                 * a control flag (specifying whether this {@code LoginModule} is
                 * REQUIRED, REQUISITE, SUFFICIENT, or OPTIONAL), and LoginModule-specific
                 * options.  Please refer to the {@code Configuration} class for
                 * more information on the different control flags and their semantics.
                 * @see javax.security.auth.login.Configuration
                 */
                // @ts-ignore
                class AppConfigurationEntry extends java.lang.Object {
                    /**
                     * Default constructor for this class.
                     * <p> This entry represents a single {@code LoginModule}
                     * entry configured for the application specified in the
                     * {@code getAppConfigurationEntry(String appName)}
                     * method from the {@code Configuration} class.
                     * @param loginModuleName String representing the class name of the
                     *                   {#code LoginModule} configured for the
                     *                   specified application. <p>
                     * @param controlFlag either REQUIRED, REQUISITE, SUFFICIENT,
                     *                   or OPTIONAL. <p>
                     * @param options the options configured for this {#code LoginModule}.
                     * @exception IllegalArgumentException if {#code loginModuleName}
                     *                   is null, if {@code LoginModuleName}
                     *                   has a length of 0, if {@code controlFlag}
                     *                   is not either REQUIRED, REQUISITE, SUFFICIENT
                     *                   or OPTIONAL, or if {@code options} is null.
                     */
                    // @ts-ignore
                    constructor(loginModuleName: string, controlFlag: javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag, options: java.util.Map<java.lang.String, any>)
                    /**
                     * Get the class name of the configured {@code LoginModule}.
                     * @return the class name of the configured {#code LoginModule} as
                     *           a String.
                     */
                    // @ts-ignore
                    getLoginModuleName(): java.lang.String
                    /**
                     * Return the controlFlag
                     * (either REQUIRED, REQUISITE, SUFFICIENT, or OPTIONAL)
                     * for this {@code LoginModule}.
                     * @return the controlFlag
                     *           (either REQUIRED, REQUISITE, SUFFICIENT, or OPTIONAL)
                     *           for this {#code LoginModule}.
                     */
                    // @ts-ignore
                    getControlFlag(): javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag
                    /**
                     * Get the options configured for this {@code LoginModule}.
                     * @return the options configured for this {#code LoginModule}
                     *           as an unmodifiable {@code Map}.
                     */
                    // @ts-ignore
                    getOptions(): java.util.Map<java.lang.String, ?>
                }
            }
        }
    }
}
