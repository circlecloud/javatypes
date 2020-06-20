declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                namespace AppConfigurationEntry {
                    /**
                     * This class represents whether or not a {@code LoginModule}
                     * is REQUIRED, REQUISITE, SUFFICIENT or OPTIONAL.
                     */
                    // @ts-ignore
                    class LoginModuleControlFlag extends java.lang.Object {
                        /**
                         * Required {@code LoginModule}.
                         */
                        // @ts-ignore
                        readonly REQUIRED: javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag
                        /**
                         * Requisite {@code LoginModule}.
                         */
                        // @ts-ignore
                        readonly REQUISITE: javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag
                        /**
                         * Sufficient {@code LoginModule}.
                         */
                        // @ts-ignore
                        readonly SUFFICIENT: javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag
                        /**
                         * Optional {@code LoginModule}.
                         */
                        // @ts-ignore
                        readonly OPTIONAL: javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag
                        /**
                         * Return a String representation of this controlFlag.
                         * <p> The String has the format, "LoginModuleControlFlag: <i>flag</i>",
                         * where <i>flag</i> is either <i>required</i>, <i>requisite</i>,
                         * <i>sufficient</i>, or <i>optional</i>.
                         * @return a String representation of this controlFlag.
                         */
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
